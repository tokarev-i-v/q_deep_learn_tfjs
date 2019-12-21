  var canvas, ctx;
    
  class Food {
    constructor(){
      this._view = new THREE.Mesh(
        new THREE.SphereBufferGeometry(1,1,1),
        new THREE.MeshBasicMaterial({color: 0x111111})
      )
      this.type = 1;
    }
    get boundingBox(){
      this._view.geometry.computeBoundingBox();
      return this.view.geometry.boundingBox;
    }
    get view(){
      return this._view;
    }
    get position(){
      return this._view.position;
    }
    set position(vec){
      this._view.position.copy(vec);
    }
  }
  class Poison {
    constructor(){
      this._view = new THREE.Mesh(
        new THREE.SphereBufferGeometry(1,1,1),
        new THREE.MeshBasicMaterial({color: 0x111111})
      )
    }
    get view(){
      return this._view;
    }
    get position(){
      return this._view.position;
    }
    set position(vec){
      this._view.position.copy(vec);
    }
  }

  class Agent{
    constructor(){
      this.rad = 1;
      this._view = new THREE.Mesh(
        new THREE.BoxBufferGeometry(this.rad,this.rad,this.rad),
        new THREE.MeshBasicMaterial({color: 0x111111})
      );
      
      this.actions = [];
      this.actions.push([1,1]);
      this.actions.push([0.8,1]);
      this.actions.push([1,0.8]);
      this.actions.push([0.5,0]);
      this.actions.push([0,0.5]);
      
      // properties
      this.eyes = [];
      /**star */
      let r = 20;
      let alpha = 0;
      /**Now we create agent's eyes*/
      for (let i = 0; i < 10; i++){
          let eye = new Eye(this.view.position, alpha, r);
          let mesh = eye.view;
          this.view.add(mesh);
          this.eyes.push(eye);
          alpha += r;
      }
      this._frontEye = null;
      if(this.eyes.length % 2 === 0){
        this._frontEye = this.eyes[Math.round(this.eyes.length/2)];
      }else {
        this._frontEye = this.eyes[Math.round(this.eyes.length/2)-1];
      }
      // braaain
      this.brain = new deepqlearn.Brain(this.eyes.length * 3, this.actions.length);
      var spec = document.getElementById('qspec').value;
      eval(spec);
      //this.brain = brain;
      
      this.reward_bonus = 0.0;
      this.digestion_signal = 0.0;
      // outputs on world
      this.rot1 = 0.0; // rotation speed of 1st wheel
      this.rot2 = 0.0; // rotation speed of 2nd wheel
      
      this.prevactionix = -1;

    }
    

    forward() {
      // in forward pass the agent simply behaves in the environment
      // create input to brain
      var num_eyes = this.eyes.length;
      var input_array = new Array(num_eyes * 3);
      for(var i=0;i<num_eyes;i++) {
        var e = this.eyes[i];
        input_array[i*3] = 1.0;
        input_array[i*3+1] = 1.0;
        input_array[i*3+2] = 1.0;
        if(e.sensed_type !== -1) {
          // sensed_type is 0 for wall, 1 for food and 2 for poison.
          // lets do a 1-of-k encoding into the input array
          input_array[i*3 + e.sensed_type] = e.sensed_proximity/e.max_range; // normalize to [0,1]
        }
      }
      
      // get action from brain
      var actionix = this.brain.forward(input_array);
      var action = this.actions[actionix];
      this.actionix = actionix; //back this up
      
      // demultiplex into behavior variables
      this.rot1 = action[0]*1;
      this.rot2 = action[1]*1;
      
      //this.rot1 = 0;
      //this.rot2 = 0;
    }

    backward() {
      // in backward pass agent learns.
      // compute reward 
      var proximity_reward = 0.0;
      var num_eyes = this.eyes.length;
      for(var i=0;i<num_eyes;i++) {
        var e = this.eyes[i];
        // agents dont like to see walls, especially up close
        proximity_reward += e.sensed_type === 0 ? e.sensed_proximity/e.max_range : 1.0;
      }
      proximity_reward = proximity_reward/num_eyes;
      proximity_reward = Math.min(1.0, proximity_reward * 2);
      
      // agents like to go straight forward
      var forward_reward = 0.0;
      if(this.actionix === 0 && proximity_reward > 0.75) forward_reward = 0.1 * proximity_reward;
      
      // agents like to eat good things
      var digestion_reward = this.digestion_signal;
      this.digestion_signal = 0.0;
      
      var reward = proximity_reward + forward_reward + digestion_reward;
      
      // pass to brain for learning
      this.brain.backward(reward);
    }

    get view(){
      return this._view;
    }
    get position(){
      return this._view.position;
    }
    set position(vec){
      this._view.position.copy(vec);
    }
    get angle(){
      return this._view.rotation.z;
    }
    set angle(val){
      this._view.rotation.z = val;
    }
    get frontEye(){
      return this._frontEye;
    }
  }
  /**
   * @class Eye
   * It presents as agent's eye detector.
   */
  class Eye{
    /**
     * 
     * @param {THREE.Vector3} agent_pos_vec Vector that would use as src
     * vector for raycastring
     * @param {Number} alpha angle 
     * @param {Number} r radius
     */
    constructor(agent_pos_vec, alpha, r){
      this._view = new THREE.Mesh(
        new THREE.BoxBufferGeometry(1,1,10),
        new THREE.MeshBasicMaterial({color: 0x111111})
      );
      /**setting Eye position and rotation */
      this._view.position.x = Math.sin(Math.PI*alpha/180)*r;
      this._view.position.y = Math.cos(Math.PI*alpha/180)*r;
      this._view.rotation.z = Math.PI*(180-alpha)/180;
      this._view.geometry.computeBoundingBox();
      this.raycaster = new THREE.Raycaster();
      this.max_range = 85;
      this.sensed_proximity = 85; // what the eye is seeing. will be set in world.tick()
      this.src_vector = agent_pos_vec;
    }
    get view(){
      return this._view;
    }
    /**
     * This function return the nearest detected object.
     * @param {THREE.Vector3} src from this point we will create ray
     * @param {THREE.Mesh[]} targets array of intersection targets
     * @returns {Object|null} 
     */
    getNearestCollision(targets_objs){
      let dst = new THREE.Vector3();
      let targets = targets_objs.map((el)=>{
          return el.view;
      });
      dst.setFromMatrixPosition( this._view.matrixWorld );
      this.raycaster.set(this.src_vector, dst);
      let intersects = this.raycaster.intersectObjects(targets);
      if (intersects.length > 0){
        return {obj: intersects[0].object, dist: intersects[0].distance}
      } else {
        return null;
      }
    }
  }
    
    class Wall {
      constructor(p1, p2){
        this._view = new THREE.Mesh(
          new THREE.CubeBufferGeometry(),
          new THREE.MeshBasicMaterial({color: 0xf2f2f2})
        );
        this.type = 0;
      }
      get boundingBox(){
        this._view.geometry.computeBoundingBox();
        return this._view.geometry.boundingBox;
      }
    }
    
    
    var Item = THREE.Object3D;
    /**
     * @class
     * World Contains all features.
     */
    class World  {
      constructor(){
        this.agents = [];
        this.W = canvas.width;
        this.H = canvas.height;
        
        this.clock = 0;
        
        // set up walls in the world
        this.walls = []; 
        var pad = 10;
        // util_add_box(this.walls, pad, pad, this.W-pad*2, this.H-pad*2);
        // util_add_box(this.walls, 100, 100, 200, 300); // inner walls
        // this.walls.pop();
        // util_add_box(this.walls, 400, 100, 200, 300);
        // this.walls.pop();
        

        // set up food and poison
        this.items = []
        for(var k=0;k<30;k++) {
          var x = convnetjs.randf(20, this.W-20);
          var y = convnetjs.randf(20, this.H-20);
          var t = convnetjs.randi(1, 3); // food or poison (1 and 2)
          if (t == 1){
            var it = new Food(new THREE.Vector3(x, y, 0));
          }
          else{
            var it = new Poison(new THREE.Vector3(x, y, 0));
          }
          this.items.push(it);
        }
        this.init();
      }   

      init(json_params){
        this.Container = document.createElement("div");
        this.Container.id = "MainContainer";
        this.Container.classList.add("Container");
        
        this.Renderer = new THREE.WebGLRenderer();
        this.Renderer.setSize(window.innerWidth, window.innerHeight);
        this.Container.appendChild(this.Renderer.domElement);

        document.body.insertBefore( this.Container, document.body.firstChild);

        this.stats = new Stats();
        document.body.appendChild(this.stats.dom);

        this.Camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
        this.Camera.position.set(0,0, 10);
        this.Scene = new THREE.Scene();
        this.Scene.background = new THREE.Color( 0xaaccff );
        this.Scene.fog = new THREE.FogExp2( 0xaaccff, 0.007 );
        //        this.Scene.add(this.Camera);

        this.Loader = new THREE.ColladaLoader();
//        this.Loader.load("./src/scenes/telefermer.dae", function (dae) {
//            dae.scene.scale.set(10,10,10);
//            this.Scene.add(dae.scene);
//        }.bind(this));

        this.AmbientLight = new THREE.AmbientLight(0xFFFFFF, 0.9);
        this.Scene.add(this.AmbientLight);

        // this.ControlObject = this.Object;
        // // this.Camera.position.set(-1, 1.2, -0.35);
        // this.Scene.add(this.ControlObject);
        // this.ControlObject.add(this.Camera);
        this.Controls = new THREE.FlyControls(this.Camera, document.getElementById("MainContainer"));
        this.Controls.movementSpeed = 13;
        this.Controls.rollSpeed = Math.PI / 8;
        this.Controls.autoForward = false;
        this.Controls.dragToLook = false;
        
        this.Clock = new THREE.Clock();

        let TextureLoader = new THREE.TextureLoader();
        TextureLoader.load("./src/src/models/forest/grass.png", function (tex) {
            tex.wrapS = THREE.RepeatWrapping;
            tex.wrapT = THREE.RepeatWrapping;
            tex.repeat.set(100, 100);
            let ground = new THREE.Mesh(new THREE.PlaneBufferGeometry(1000, 1000), new THREE.MeshBasicMaterial({map: tex, side:THREE.DoubleSide}));
            //ground.rotation.x -= Math.PI/2;
            this.Scene.add(ground);
            alert('ok')
        }.bind(this));
      }

      render () {
        //requestAnimationFrame(this.render);
        this.stats.update();
        // this.ControlObject.position.y = 0;
        
        this.Renderer.render(this.Scene, this.Camera);
        var delta = this.Clock.getDelta();
        // if(this.Controls.moveState.forward || this.Controls.moveState.back){
        //     if (this.Mixer !== undefined ) {
        //         this.Mixer.update(delta);
        //     }
        // }
        // if (this.Mixer !== undefined ) {
        //         this.Mixer.update(delta);
        //     }
        
         w.agents[0].brain.visSelf(document.getElementById('brain_info_div'));
        this.Controls.update(delta);
    }

      // helper function to get closest colliding walls/items
      stuff_collide_(eye, check_walls, check_items) {
        var minres = false;

        if(check_walls) {
            let res = eye.getNearestCollision(this.walls);
            if(res) {
              res.type = 0; // 0 is wall
              if(!minres) { minres=res; }
            }
        }
        // collide with items
        if(check_items) {
          let res = eye.getNearestCollision(this.items);
          if(res) {
            res.type = it.type; // store type of item
            if(!minres) { minres=res; }
          }
        }
        return minres;
      }
      tick() {
        // tick the environment
        this.clock++;
        
        // fix input to all agents based on environment
        // process eyes
        this.collpoints = [];
        for(var i=0,n=this.agents.length;i<n;i++) {
          var a = this.agents[i];
          for(var ei=0,ne=a.eyes.length;ei<ne;ei++) {
            var e = a.eyes[ei];
            // we have a line from p to p->eyep
            var res = this.stuff_collide_(e, true, true);
            if(res) {
              // eye collided with wall
              e.sensed_proximity = res.dist;
              e.sensed_type = res.type;
            } else {
              e.sensed_proximity = e.max_range;
              e.sensed_type = -1;
            }
          }
        }
        
        // let the agents behave in the world based on their input
        for(var i=0,n=this.agents.length;i<n;i++) {
          this.agents[i].forward();
        }
        
        // apply outputs of agents on evironment
        for(var i=0,n=this.agents.length;i<n;i++) {
          var a = this.agents[i];
          a.op = a.position.clone(); // back up old position
          a.oangle = a.angle; // and angle
          
          // steer the agent according to outputs of wheel velocities
          var v = new THREE.Vector3(0, a.rad / 2.0);
          var rotat = new THREE.Matrix4().makeRotationZ(a.angle + Math.PI/2);
          v = v.applyMatrix4(rotat);
          var w1p = a.position.add(v); // positions of wheel 1 and 2
          var w2p = a.position.sub(v);
          var vv = a.position.sub(w2p);
          rotat = new THREE.Matrix4().makeRotationZ(-a.rot1);
          vv = vv.applyMatrix4(rotat);
          var vv2 = a.position.sub(w1p);
          rotat = new THREE.Matrix4().makeRotationZ(a.rot2);
          vv2 = vv2.applyMatrix4(rotat);
          var np = w2p.add(vv);
          np.multiplyScalar(0.5);
          var np2 = w1p.add(vv2);
          np2.multiplyScalar(0.5);
          a.position = np.add(np2);
          
          a.angle -= a.rot1;
          if(a.angle<0)a.angle+=2*Math.PI;
          a.angle += a.rot2;
          if(a.angle>2*Math.PI)a.angle-=2*Math.PI;
          
          // agent is trying to move from p to op. Check walls
          var res = this.stuff_collide_(a.frontEye, true, false);
          if(res) {
            // wall collision! reset position
            a.position = a.op;
          }
          
          // handle boundary conditions
          if(a.position.x<0)a.position.x=0;
          if(a.position.x>this.W)a.position.x=this.W;
          if(a.position.y<0)a.p.y=0;
          if(a.position.y>this.H)a.position.y=this.H;
        }
        
        // tick all items
        var update_items = false;
        for(var i=0,n=this.items.length;i<n;i++) {
          var it = this.items[i];
          it.age += 1;
          
          // see if some agent gets lunch
          for(var j=0,m=this.agents.length;j<m;j++) {
            var a = this.agents[j];
            var d = a.position.distanceTo(it.position);
            if(d < it.rad + a.rad) {
              
              // wait lets just make sure that this isn't through a wall
              var rescheck = this.stuff_collide_(a.frontEye, true, false);
              if(!rescheck) { 
                // ding! nom nom nom
                if(it.type === 1) a.digestion_signal += 5.0; // mmm delicious apple
                if(it.type === 2) a.digestion_signal += -6.0; // ewww poison
                it.cleanup_ = true;
                update_items = true;
                break; // break out of loop, item was consumed
              }
            }
          }
          
          if(it.age > 5000 && this.clock % 100 === 0 && convnetjs.randf(0,1)<0.1) {
            it.cleanup_ = true; // replace this one, has been around too long
            update_items = true;
          }
        }
        if(update_items) {
          var nt = [];
          for(var i=0,n=this.items.length;i<n;i++) {
            var it = this.items[i];
            if(!it.cleanup_) nt.push(it);
          }
          this.items = nt; // swap
        }
        if(this.items.length < 30 && this.clock % 10 === 0 && convnetjs.randf(0,1)<0.25) {
          var newitx = convnetjs.randf(20, this.W-20);
          var newity = convnetjs.randf(20, this.H-20);
          var newitt = convnetjs.randi(1, 3); // food or poison (1 and 2)
          var newit = new Item(newitx, newity, newitt);
          this.items.push(newit);
        }
        
        // agents are given the opportunity to learn based on feedback of their action on environment
        for(var i=0,n=this.agents.length;i<n;i++) {
          this.agents[i].backward();
        }
      }
    }
    
    
    function draw_net() {
      if(simspeed <=1) {
        // we will always draw at these speeds
      } else {
        if(w.clock % 50 !== 0) return;  // do this sparingly
      }
      
      var canvas = document.getElementById("net_canvas");
      var ctx = canvas.getContext("2d");
      var W = canvas.width;
      var H = canvas.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var L = w.agents[0].brain.value_net.layers;
      var dx = (W - 50)/L.length;
      var x = 10;
      var y = 40;
      ctx.font="12px Verdana";
      ctx.fillStyle = "rgb(0,0,0)";
      ctx.fillText("Value Function Approximating Neural Network:", 10, 14);
      for(var k=0;k<L.length;k++) {
        if(typeof(L[k].out_act)==='undefined') continue; // maybe not yet ready
        var kw = L[k].out_act.w;
        var n = kw.length;
        var dy = (H-50)/n;
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillText(L[k].layer_type + "(" + n + ")", x, 35);
        for(var q=0;q<n;q++) {
          var v = Math.floor(kw[q]*100);
          if(v >= 0) ctx.fillStyle = "rgb(0,0," + v + ")";
          if(v < 0) ctx.fillStyle = "rgb(" + (-v) + ",0,0)";
          ctx.fillRect(x,y,10,10);
          y += 12;
          if(y>H-25) { y = 40; x += 12};
        }
        x += 50;
        y = 40;
      }
    }
    
    var reward_graph = new cnnvis.Graph();
    function draw_stats() {
      var canvas = document.getElementById("vis_canvas");
      var ctx = canvas.getContext("2d");
      var W = canvas.width;
      var H = canvas.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var a = w.agents[0];
      var b = a.brain;
      var netin = b.last_input_array;
      ctx.strokeStyle = "rgb(0,0,0)";
      //ctx.font="12px Verdana";
      //ctx.fillText("Current state:",10,10);
      ctx.lineWidth = 10;
      ctx.beginPath();
      for(var k=0,n=netin.length;k<n;k++) {
        ctx.moveTo(10+k*12, 120);
        ctx.lineTo(10+k*12, 120 - netin[k] * 100);
      }
      ctx.stroke();
      
      if(w.clock % 200 === 0) {
        reward_graph.add(w.clock/200, b.average_reward_window.get_average());
        var gcanvas = document.getElementById("graph_canvas");
        reward_graph.drawSelf(gcanvas);
      }
    }

    // Tick the world
    function tick() {
      w.tick();
      if(!skipdraw || w.clock % 50 === 0) {
        w.render();
        draw_stats();
        draw_net();
      }
    }
    
    var simspeed = 2;
    function goveryfast() {
      window.clearInterval(current_interval_id);
      current_interval_id = setInterval(tick, 0);
      skipdraw = true;
      simspeed = 3;
    }
    function gofast() {
      window.clearInterval(current_interval_id);
      current_interval_id = setInterval(tick, 0);
      skipdraw = false;
      simspeed = 2;
    }
    function gonormal() {
      window.clearInterval(current_interval_id);
      current_interval_id = setInterval(tick, 30);
      skipdraw = false;
      simspeed = 1;
    }
    function goslow() {
      window.clearInterval(current_interval_id);
      current_interval_id = setInterval(tick, 200);
      skipdraw = false;
      simspeed = 0;
    }
    
    function savenet() {
      var j = w.agents[0].brain.value_net.toJSON();
      var t = JSON.stringify(j);
      document.getElementById('tt').value = t;
    }
    
    function loadnet() {
      var t = document.getElementById('tt').value;
      var j = JSON.parse(t);
      w.agents[0].brain.value_net.fromJSON(j);
      stoplearn(); // also stop learning
      gonormal();
    }
    
    function startlearn() {
      w.agents[0].brain.learning = true;
    }
    function stoplearn() {
      w.agents[0].brain.learning = false;
    }
    
    function reload() {
      w.agents = [new Agent()]; // this should simply work. I think... ;\
      reward_graph = new cnnvis.Graph(); // reinit
    }
    
    var w; // global world object
    var current_interval_id;
    var skipdraw = false;

    function start() {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      
      w = new World();
      w.agents = [new Agent()];
      
      gofast();
    }