
export class AC{

    constructor(hidden_sizes=[64], ac_lr=0.004, cr_lr=0.015, gamma=0.99, steps_per_epoch=100, ){

    }

    log_summary(writer, step, p_loss, entropy, p_log, ret_batch){
    }
    mlp(x, hidden_layers, output_size, activation= tf.layers.reLU, last_activation=null){
    
        //multilayer perceptron
        let inputt = tf.input({shape: [null, x[0]]});
        x = inputt;
        for (let l in hidden_layers){
            x = tf.layers.dense({units: l, activation: activation}).apply(x);
        }
        let output = tf.layers.dense({units: output_size, activation: last_activation}).apply(x);
        return tf.model({inputs: inputt, outputs: output})
    }
    
    softmax_entropy(values){
        return tf.sum(values.softmax() * values.logSoftmax(), axis=-1);
    }
    


}
