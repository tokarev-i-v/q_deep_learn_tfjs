import * as tf from '@tensorflow/tfjs-node';

import {AC} from "./AC";

function test_constructor(){
    let ac = AC();
}

describe("A suite is just a function", function(){
    let ac = new AC();
    it("and so is a spec", function() {
        let a = true;
    
        expect(a).toBe(true);
      });
});