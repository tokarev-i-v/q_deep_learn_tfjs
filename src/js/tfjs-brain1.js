  "use strict";
  
  // An agent is in state0 and does action0
  // environment then assigns reward0 and provides new state, state1
  // Experience nodes store all this information, which is used in the
  // Q-learning update step
  class Experience  {
    constructor(state0, action0, reward0, state1){
      this.state0 = state0;
      this.action0 = action0;
      this.reward0 = reward0;
      this.state1 = state1;        
    }
  }

  // A Brain object does all the magic.
  // over time it receives some inputs and some rewards
  // and its job is to set the outputs to maximize the expected reward
  class Brain {
    constructor(num_states, num_actions, opt={}) {
      // in number of time steps, of temporal memory
      // the ACTUAL input to the net will be (x,a) temporal_window times, and followed by current x
      // so to have no information from previous time step going into value function, set to 0.
      this.temporal_window = typeof opt.temporal_window !== 'undefined' ? opt.temporal_window : 1; 
      // size of experience replay memory
      this.experience_size = typeof opt.experience_size !== 'undefined' ? opt.experience_size : 30000;
      // number of examples in experience replay memory before we begin learning
      this.start_learn_threshold = typeof opt.start_learn_threshold !== 'undefined'? opt.start_learn_threshold : Math.floor(Math.min(this.experience_size*0.1, 1000)); 
      // gamma is a crucial parameter that controls how much plan-ahead the agent does. In [0,1]
      this.gamma = typeof opt.gamma !== 'undefined' ? opt.gamma : 0.8;
      
      // number of steps we will learn for
      this.learning_steps_total = typeof opt.learning_steps_total !== 'undefined' ? opt.learning_steps_total : 100000;
      // how many steps of the above to perform only random actions (in the beginning)?
      this.learning_steps_burnin = typeof opt.learning_steps_burnin !== 'undefined' ? opt.learning_steps_burnin : 3000;
      // what epsilon value do we bottom out on? 0.0 => purely deterministic policy at end
      this.epsilon_min = typeof opt.epsilon_min !== 'undefined' ? opt.epsilon_min : 0.05;
      // what epsilon to use at test time? (i.e. when learning is disabled)
      this.epsilon_test_time = typeof opt.epsilon_test_time !== 'undefined' ? opt.epsilon_test_time : 0.01;
      
      // this.vis = tfvis.visor().surface({
      //   name: 'My First Surface',
      //   tab: 'Input Data'
      // });
      // this.drawArea = this.vis.drawArea; // Get the examples

      // advanced feature. Sometimes a random action should be biased towards some values
      // for example in flappy bird, we may want to choose to not flap more often
      if(typeof opt.random_action_distribution !== 'undefined') {
        // this better sum to 1 by the way, and be of length this.num_actions
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
      
      // states that go into neural net to predict optimal action look as
      // x0,a0,x1,a1,x2,a2,...xt
      // this variable controls the size of that temporal window. Actions are
      // encoded as 1-of-k hot vectors
      this.net_inputs = num_states * this.temporal_window + num_actions * this.temporal_window + num_states;
      this.num_states = num_states;
      this.num_actions = num_actions;
      this.window_size = Math.max(this.temporal_window, 2); // must be at least 2, but if we want more context even more
      this.state_window = new Array(this.window_size);
      this.action_window = new Array(this.window_size);
      this.reward_window = new Array(this.window_size);
      this.net_window = new Array(this.window_size);
      
      // create [state -> value of all possible actions] modeling net for the value function
      var layer_defs = [];
      this.NN = new tf.sequential();
      this.NN.add(tf.layers.dense({inputShape: [65], units:50, activation: 'relu'}));
      this.NN.add(tf.layers.dense({units:50, activation: 'relu'}));
      this.NN.add(tf.layers.dense({
        units: 5,
        kernelRegularizer: 'l1l2',
        activation: 'linear',
        name: "outter"
      }));
      this.NN.compile({loss: 'meanSquaredError', optimizer: 'adam'});
      this.BATCH_SIZE = 64;
      // this.optimizer = tf.train.sgd(0.001);
      
      // experience replay
      this.experience = [];
      
      // various housekeeping variables
      this.age = 0; // incremented every backward()
      this.forward_passes = 0; // incremented every forward()
      this.epsilon = 1.0; // controls exploration exploitation tradeoff. Should be annealed over time
      this.latest_reward = 0;
      this.last_input_array = [];
      this.average_reward_window = new cnnutil.Window(1000, 10);
      this.average_loss_window = new cnnutil.Window(1000, 10);
      this.learning = true;
    }

    random_action() {
      // a bit of a helper function. It returns a random action
      // we are abstracting this away because in future we may want to 
      // do more sophisticated things. For example some actions could be more
      // or less likely at "rest"/default state.
      if(this.random_action_distribution.length === 0) {
        return convnetjs.randi(0, this.num_actions);
      } else {
        // okay, lets do some fancier sampling:
        var p = convnetjs.randf(0, 1.0);
        var cumprob = 0.0;
        for(var k=0;k<this.num_actions;k++) {
          cumprob += this.random_action_distribution[k];
          if(p < cumprob) { return k; }
        }
      }
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

    sampleExperience(batchSize){
      
    }

    /**
     * Perform training on a randomly sampled batch from the replay buffer.
     *
     * @param {number} batchSize Batch size.
     * @param {number} gamma Reward discount rate. Must be >= 0 and <= 1.
     * @param {tf.train.Optimizer} optimizer The optimizer object used to update
     *   the weights of the online network.
     */
    trainOnReplayBatch(batchSize, gamma, optimizer) {
      // Get a batch of examples from the replay buffer.
      const batch = this.replayMemory.sample(batchSize);
      const lossFunction = () => tf.tidy(() => {
        const stateTensor = getStateTensor(
            batch.map(example => example[0]), this.game.height, this.game.width);
        const actionTensor = tf.tensor1d(
            batch.map(example => example[1]), 'int32');
        const qs = this.onlineNetwork.apply(stateTensor, {training: true})
            .mul(tf.oneHot(actionTensor, NUM_ACTIONS)).sum(-1);

        const rewardTensor = tf.tensor1d(batch.map(example => example[2]));
        const nextStateTensor = getStateTensor(
            batch.map(example => example[4]), this.game.height, this.game.width);
        const nextMaxQTensor =
            this.targetNetwork.predict(nextStateTensor).max(-1);
        const doneMask = tf.scalar(1).sub(
            tf.tensor1d(batch.map(example => example[3])).asType('float32'));
        const targetQs =
            rewardTensor.add(nextMaxQTensor.mul(doneMask).mul(gamma));
        return tf.losses.meanSquaredError(targetQs, qs);
      });

      // Calculate the gradients of the loss function with repsect to the weights
      // of the online DQN.
      const grads = tf.variableGrads(lossFunction);
      // Use the gradients to update the online DQN's weights.
      optimizer.applyGradients(grads.grads);
      tf.dispose(grads);
      // TODO(cais): Return the loss value here?
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
        var x_train = [];
        var y_train = [];
        for(var k=0;k < this.BATCH_SIZE;k++) {
          var re = convnetjs.randi(0, this.experience.length);
          var e = this.experience[re];
          var x = new convnetjs.Vol(1, 1, this.net_inputs);
          x.w = e.state0;
          x_train.push(x.w);
          var maxact = this.policy(e.state1);
          var r = e.reward0 + this.gamma * maxact.value;
          var y = [0, 0, 0, 0,0];
          y[e.action0] = r;
          var y_new = [0,0,0,0,0]; 
          y_new[e.action0] = 1;
          y_train.push(r);

          // const grads = tf.variableGrads(lossFunction, this.NN.getWeights());
          // this.optimizer.applyGradients(grads.grads);
          // avcost += lossFunction().dataSync()[0];
          // console.log("loss %s", avcost);
        }
        var x_train = tf.
        avcost = avcost/this.BATCH_SIZE;
        this.average_loss_window.add(avcost);
        console.log("avg: %s", this.average_loss_window.get_average())
      }
    }
    visSelf(elt) {
      elt.innerHTML = ''; // erase elt first
      
      // elt is a DOM element that this function fills with brain-related information
      var brainvis = document.createElement('div');
      
      // basic information
      var desc = document.createElement('div');
      var t = '';
      t += 'experience replay size: ' + this.experience.length + '<br>';
      t += 'exploration epsilon: ' + this.epsilon + '<br>';
      t += 'age: ' + this.age + '<br>';
      t += 'average Q-learning loss: ' + this.average_loss_window.get_average() + '<br />';
      t += 'smooth-ish reward: ' + this.average_reward_window.get_average() + '<br />';
      desc.innerHTML = t;
      brainvis.appendChild(desc);
      
      elt.appendChild(brainvis);
    }
  }
  