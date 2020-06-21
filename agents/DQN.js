import * as tf from '@tensorflow/tfjs'

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
      this.net_inputs = num_states * this.temporal_window + num_actions * this.temporal_window + num_states;
      this.num_states = num_states;
      this.num_actions = num_actions;
      this.window_size = Math.max(this.temporal_window, 2); // must be at least 2, but if we want more context even more
      this.state_window = new Array(this.window_size);
      this.action_window = new Array(this.window_size);
      this.reward_window = new Array(this.window_size);
      this.net_window = new Array(this.window_size);
      this.NN = new tf.sequential();
      this.NN.add(tf.layers.dense({inputShape: [65], units:50, activation: 'relu'}));
      this.NN.add(tf.layers.dense({units:50, activation: 'relu'}));
      this.NN.add(tf.layers.dense({units:30, activation: 'relu'}));
      this.NN.add(tf.layers.dense({
        units: 5,
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
      this.average_reward_window = new cnnutil.Window(1000, 10);
      this.average_loss_window = new cnnutil.Window(1000, 10);
    }
    train(){

    }
    policy(s) {
        // compute the value of doing any action in this state
        // and return the argmax action and its value
        var svol = new convnetjs.Vol(1, 1, this.net_inputs);
        svol.w = s;
        let tens = tf.tensor(s);
        tens = tens.reshape([1, 65]);
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
            action = maxact.value;
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
            var ri = convnetjs.randi(0, this.experience_size);
            this.experience[ri] = e;
          }
        }
        const lossFunction = () => tf.tidy(()=>{
          let x_tensor = tf.tensor(x.w, [1, 65]);
          let y_tensor = tf.tensor(y);
          let y_s = tf.tensor(y_new);
          let output = this.NN.apply(x_tensor);
          output = output.reshape([output.shape[1]]);
          // console.log("output %s y_s %s mul_strict: %s y_tensor  %s", 
          // JSON.stringify(output.dataSync()), 
          // JSON.stringify(y_s.dataSync()), 
          // JSON.stringify(tf.mulStrict(output, y_s).dataSync()),
          // JSON.stringify(y_tensor.dataSync()),
          // );
          const loss = tf.mulStrict(output, y_s).sub(y_tensor).square().sum().mul(0.5);
          //const loss = output.sub(y_tensor).square().sum().mul(0.5);
  
          // console.log("tf.mulStrict(output, y_s) %s tf.mulStrict(output, y_s).sub(y_tensor) %s tf.mulStrict(output, y_s).sub(y_tensor).square(): %s tf.mulStrict(output, y_s).sub(y_tensor).square().sum()  %s", 
          // JSON.stringify(tf.mulStrict(output, y_s).dataSync()), 
          // JSON.stringify(tf.mulStrict(output, y_s).sub(y_tensor).dataSync()), 
          // JSON.stringify(tf.mulStrict(output, y_s).sub(y_tensor).square().dataSync()),
          // JSON.stringify(tf.mulStrict(output, y_s).sub(y_tensor).square().sum().dataSync()),
          // );
  
          return loss;
        });
        // learn based on experience, once we have some samples to go on
        // this is where the magic happens...
        if(this.experience.length > this.start_learn_threshold) {
          var avcost = 0.0;
          for(var k=0;k < this.BATCH_SIZE;k++) {
            var re = convnetjs.randi(0, this.experience.length);
            var e = this.experience[re];
            var x = new convnetjs.Vol(1, 1, this.net_inputs);
            x.w = e.state0;
            var maxact = this.policy(e.state1);
            var r = e.reward0 + this.gamma * maxact.value;
            var y = [0, 0, 0, 0,0];
            y[e.action0] = r;
            var y_new = [0,0,0,0,0]; 
            y_new[e.action0] = 1;
  
            const grads = tf.variableGrads(lossFunction, this.NN.getWeights());
            this.optimizer.applyGradients(grads.grads);
            avcost += lossFunction().dataSync()[0];
            // console.log("loss %s", avcost);
          }
  
          avcost = avcost/this.BATCH_SIZE;
          this.average_loss_window.add(avcost);
          console.log("avg: %s", this.average_loss_window.get_average())
        }
      }
}