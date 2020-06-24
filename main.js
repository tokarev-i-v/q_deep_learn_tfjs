import * as tf from '@tensorflow/tfjs'
import DQN from "./agents/DQN";
import FlatAreaEatWorld from "./envs/FlatAreaEatWorld"
import World3DEat from "./envs/World3DEat"
// let world = new World3DEat({agent: DQN});
let world = new FlatAreaEatWorld({agent: DQN});

tf.disableDeprecationWarnings();
tf.setBackend("cpu").then(()=>{
    world.start();
});

//let agent = new DQN({});
