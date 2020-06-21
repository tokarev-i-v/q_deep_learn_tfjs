import * as tf from '@tensorflow/tfjs'
import DQN from "./agents/DQN";
import FlatAreaEatWorld from "./envs/FlatAreaEatWorld"
let agent = new DQN({});
let world = new FlatAreaEatWorld({});