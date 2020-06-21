import * as tf from '@tensorflow/tfjs'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

class Experience  {
  constructor(state0, action0, reward0, state1){
    this.state0 = state0;
    this.action0 = action0;
    this.reward0 = reward0;
    this.state1 = state1;        
  }
}

var Window = function(size, minsize) {
  this.v = [];
  this.size = typeof(size)==='undefined' ? 100 : size;
  this.minsize = typeof(minsize)==='undefined' ? 20 : minsize;
  this.sum = 0;
}
Window.prototype = {
  add: function(x) {
    this.v.push(x);
    this.sum += x;
    if(this.v.length>this.size) {
      var xold = this.v.shift();
      this.sum -= xold;
    }
  },
  get_average: function() {
    if(this.v.length < this.minsize) return -1;
    else return this.sum/this.v.length;
  },
  reset: function(x) {
    this.v = [];
    this.sum = 0;
  }
}

export default class DQN{
    constructor(opt){
      this.temporal_window = typeof opt.temporal_window !== 'undefined' ? opt.temporal_window : 1; 
      this.experience_size = typeof opt.experience_size !== 'undefined' ? opt.experience_size : 30000;
      this.start_learn_threshold = typeof opt.start_learn_threshold !== 'undefined'? opt.start_learn_threshold : Math.floor(Math.min(this.experience_size*0.1, 1000)); 
      this.gamma = typeof opt.gamma !== 'undefined' ? opt.gamma : 0.8;
      this.learning_steps_total = typeof opt.learning_steps_total !== 'undefined' ? opt.learning_steps_total : 100000;
      this.learning_steps_burnin = typeof opt.learning_steps_burnin !== 'undefined' ? opt.learning_steps_burnin : 3000;
      this.epsilon_min = typeof opt.epsilon_min !== 'undefined' ? opt.epsilon_min : 0.05;
      this.epsilon_test_time = typeof opt.epsilon_test_time !== 'undefined' ? opt.epsilon_test_time : 0.01;
      
      if (typeof opt.num_actions === "number"){
        this.num_actions = opt.num_actions;
      } else{
        throw new Error("num_actions must be specified");
      }

      if (typeof opt.num_states === "number"){
        this.num_states = opt.num_states;
      } else{
        throw new Error("num_states must be specified");
      }

      if(typeof opt.random_action_distribution !== 'undefined') {
        this.random_action_distribution = opt.random_action_distribution;
        if(this.random_action_distribution.length !== num_actions) {
          console.log('TROUBLE. random_action_distribution should be same length as num_actions.');
        }
        var a = this.random_action_distribution;
        var s = 0.0; for(var k=0;k<a.length;k++) { s+= a[k]; }
        if(Math.abs(s-1.0)>0.0001) { console.log('TROUBLE. random_action_distribution should sum to 1!'); }
      } else {
        this.random_action_distribution = [];
      }
      this.net_inputs = this.num_states * this.temporal_window + this.num_actions * this.temporal_window + this.num_states;
      this.window_size = Math.max(this.temporal_window, 2); // must be at least 2, but if we want more context even more
      this.state_window = new Array(this.window_size);
      this.action_window = new Array(this.window_size);
      this.reward_window = new Array(this.window_size);
      this.net_window = new Array(this.window_size);
      this.NN = new tf.sequential();
      this.NN.add(tf.layers.dense({inputShape: [this.net_inputs], units:50, activation: 'relu'}));
      this.NN.add(tf.layers.dense({units:50, activation: 'relu'}));
      this.NN.add(tf.layers.dense({units:30, activation: 'relu'}));
      this.NN.add(tf.layers.dense({
        units: this.num_actions,
        kernelRegularizer: tf.regularizers.l2(),
        activation: 'linear',
        name: "outter"
      }));
      this.BATCH_SIZE = 64;
      this.optimizer = tf.train.sgd(0.001);
      this.experience = [];
      this.age = 0; // incremented every backward()
      this.forward_passes = 0; // incremented every forward()
      this.epsilon = 1.0; // controls exploration exploitation tradeoff. Should be annealed over time
      this.latest_reward = 0;
      this.last_input_array = [];
      this.average_reward_window = new Window(1000, 10);
      this.average_loss_window = new Window(1000, 10);
      this.learning = true;
    }

    getNetInput(xt) {
      // return s = (x,a,x,a,x,a,xt) state vector. 
      // It's a concatenation of last window_size (x,a) pairs and current state x
      var w = [];
      w = w.concat(xt); // start with current state
      // and now go backwards and append states and actions from history temporal_window times
      var n = this.window_size; 
      for(var k=0;k<this.temporal_window;k++) {
        // state
        w = w.concat(this.state_window[n-1-k]);
        // action, encoded as 1-of-k indicator vector. We scale it up a bit because
        // we dont want weight regularization to undervalue this information, as it only exists once
        var action1ofk = new Array(this.num_actions);
        for(var q=0;q<this.num_actions;q++) action1ofk[q] = 0.0;
        action1ofk[this.action_window[n-1-k]] = 1.0*this.num_states;
        w = w.concat(action1ofk);
      }
      return w;
    }

    train(){

    }
    policy(s) {
        let tens = tf.tensor(s);
        tens = tens.reshape([1, this.net_inputs]);
        var action_values = this.NN.apply(tens);
        let ret = {action: action_values.argMax(1).dataSync()[0], value: action_values.max().dataSync()[0] };
        action_values.dispose();
        tens.dispose();
        return ret;
      }

      forward(input_array) {
        // compute forward (behavior) pass given the input neuron signals from body
        this.forward_passes += 1;
        this.last_input_array = input_array; // back this up
        
        // create network input
        var action;
        if(this.forward_passes > this.temporal_window) {
          // we have enough to actually do something reasonable
          var net_input = this.getNetInput(input_array);
          if(this.learning) {
            // compute epsilon for the epsilon-greedy policy
            this.epsilon = Math.min(1.0, Math.max(this.epsilon_min, 1.0-(this.age - this.learning_steps_burnin)/(this.learning_steps_total - this.learning_steps_burnin))); 
          } else {
            this.epsilon = this.epsilon_test_time; // use test-time value
          }
          var rf = Math.random();
          if(rf < this.epsilon) {
            // choose a random action with epsilon probability
            action = this.random_action();
          } else {
            // otherwise use our policy to make decision
            var maxact = this.policy(net_input);
            action = maxact.action;
         }
        } else {
          // pathological case that happens first few iterations 
          // before we accumulate window_size inputs
          var net_input = [];
          action = this.random_action();
        }
        
        // remember the state and action we took for backward pass
        this.net_window.shift();
        this.net_window.push(net_input);
        this.state_window.shift(); 
        this.state_window.push(input_array);
        this.action_window.shift(); 
        this.action_window.push(action);
        
        return action;
      }

      random_action() {
        // a bit of a helper function. It returns a random action
        // we are abstracting this away because in future we may want to 
        // do more sophisticated things. For example some actions could be more
        // or less likely at "rest"/default state.
        if(this.random_action_distribution.length === 0) {
          return getRandomInt(0, this.num_actions);
        } else {
          // okay, lets do some fancier sampling:
          var p = getRandomArbitrary(0, 1.0);
          var cumprob = 0.0;
          for(var k=0;k<this.num_actions;k++) {
            cumprob += this.random_action_distribution[k];
            if(p < cumprob) { return k; }
          }
        }
      }

      backward(reward) {
        this.latest_reward = reward;
        this.average_reward_window.add(reward);
        this.reward_window.shift();
        this.reward_window.push(reward);
        
        if(!this.learning) { return; } 
        
        // various book-keeping
        this.age += 1;
        
        // it is time t+1 and we have to store (s_t, a_t, r_t, s_{t+1}) as new experience
        // (given that an appropriate number of state measurements already exist, of course)
        if(this.forward_passes > this.temporal_window + 1) {
          var e = new Experience();
          var n = this.window_size;
          e.state0 = this.net_window[n-2];
          e.action0 = this.action_window[n-2];
          e.reward0 = this.reward_window[n-2];
          e.state1 = this.net_window[n-1];
          if(this.experience.length < this.experience_size) {
            this.experience.push(e);
          } else {
            // replace. finite memory!
            var ri = getRandomInt(0, this.experience_size);
            this.experience[ri] = e;
          }
        }
        const lossFunction = () => tf.tidy(()=>{
          let x_tensor = tf.tensor(x, [1, this.net_inputs]);
          let y_tensor = tf.tensor(y);
          let y_s = tf.tensor(y_new);
          let output = this.NN.apply(x_tensor);
          output = output.reshape([output.shape[1]]);
          const loss = tf.mulStrict(output, y_s).sub(y_tensor).square().sum().mul(0.5);
          return loss;
        });
        if(this.experience.length > this.start_learn_threshold) {
          var avcost = 0.0;
          for(var k=0;k < this.BATCH_SIZE;k++) {
            var re = getRandomInt(0, this.experience.length);
            var e = this.experience[re];
            var x = e.state0;
            var maxact = this.policy(e.state1);
            var r = e.reward0 + this.gamma * maxact.value;
            var y = new Array(this.num_actions); for (let i=0; i<this.num_actions; ++i) y[i] = 0;
            y[e.action0] = r;
            var y_new = new Array(this.num_actions); for (let i=0; i<this.num_actions; ++i) y_new[i] = 0; 
            y_new[e.action0] = 1;
  
            const grads = tf.variableGrads(lossFunction, this.NN.getWeights());
            this.optimizer.applyGradients(grads.grads);
            avcost += lossFunction().dataSync()[0];
          }
  
          avcost = avcost/this.BATCH_SIZE;
          this.average_loss_window.add(avcost);
          console.log("avg: %s", this.average_loss_window.get_average())
        }
      }
}