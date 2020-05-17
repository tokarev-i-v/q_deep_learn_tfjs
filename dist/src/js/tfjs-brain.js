// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"src/js/three.min.js":[function(require,module,exports) {
var define;
// threejs.org/license
(function (k, Aa) {
  "object" === typeof exports && "undefined" !== typeof module ? Aa(exports) : "function" === typeof define && define.amd ? define(["exports"], Aa) : (k = k || self, Aa(k.THREE = {}));
})(this, function (k) {
  function Aa() {}

  function B(a, b) {
    this.x = a || 0;
    this.y = b || 0;
  }

  function wa(a, b, c, d) {
    this._x = a || 0;
    this._y = b || 0;
    this._z = c || 0;
    this._w = void 0 !== d ? d : 1;
  }

  function n(a, b, c) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0;
  }

  function Z() {
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
  }

  function Y(a, b, c, d, e, f, g, h, l, m) {
    Object.defineProperty(this, "id", {
      value: Si++
    });
    this.uuid = P.generateUUID();
    this.name = "";
    this.image = void 0 !== a ? a : Y.DEFAULT_IMAGE;
    this.mipmaps = [];
    this.mapping = void 0 !== b ? b : Y.DEFAULT_MAPPING;
    this.wrapS = void 0 !== c ? c : 1001;
    this.wrapT = void 0 !== d ? d : 1001;
    this.magFilter = void 0 !== e ? e : 1006;
    this.minFilter = void 0 !== f ? f : 1008;
    this.anisotropy = void 0 !== l ? l : 1;
    this.format = void 0 !== g ? g : 1023;
    this.type = void 0 !== h ? h : 1009;
    this.offset = new B(0, 0);
    this.repeat = new B(1, 1);
    this.center = new B(0, 0);
    this.rotation = 0;
    this.matrixAutoUpdate = !0;
    this.matrix = new Z();
    this.generateMipmaps = !0;
    this.premultiplyAlpha = !1;
    this.flipY = !0;
    this.unpackAlignment = 4;
    this.encoding = void 0 !== m ? m : 3E3;
    this.version = 0;
    this.onUpdate = null;
  }

  function da(a, b, c, d) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0;
    this.w = void 0 !== d ? d : 1;
  }

  function Ba(a, b, c) {
    this.width = a;
    this.height = b;
    this.scissor = new da(0, 0, a, b);
    this.scissorTest = !1;
    this.viewport = new da(0, 0, a, b);
    c = c || {};
    this.texture = new Y(void 0, void 0, c.wrapS, c.wrapT, c.magFilter, c.minFilter, c.format, c.type, c.anisotropy, c.encoding);
    this.texture.image = {};
    this.texture.image.width = a;
    this.texture.image.height = b;
    this.texture.generateMipmaps = void 0 !== c.generateMipmaps ? c.generateMipmaps : !1;
    this.texture.minFilter = void 0 !== c.minFilter ? c.minFilter : 1006;
    this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
    this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0;
    this.depthTexture = void 0 !== c.depthTexture ? c.depthTexture : null;
  }

  function Sf(a, b, c) {
    Ba.call(this, a, b, c);
    this.samples = 4;
  }

  function Q() {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
  }

  function Pb(a, b, c, d) {
    this._x = a || 0;
    this._y = b || 0;
    this._z = c || 0;
    this._order = d || Pb.DefaultOrder;
  }

  function Tf() {
    this.mask = 1;
  }

  function E() {
    Object.defineProperty(this, "id", {
      value: Ti++
    });
    this.uuid = P.generateUUID();
    this.name = "";
    this.type = "Object3D";
    this.parent = null;
    this.children = [];
    this.up = E.DefaultUp.clone();
    var a = new n(),
        b = new Pb(),
        c = new wa(),
        d = new n(1, 1, 1);

    b._onChange(function () {
      c.setFromEuler(b, !1);
    });

    c._onChange(function () {
      b.setFromQuaternion(c, void 0, !1);
    });

    Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: a
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: b
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: c
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: d
      },
      modelViewMatrix: {
        value: new Q()
      },
      normalMatrix: {
        value: new Z()
      }
    });
    this.matrix = new Q();
    this.matrixWorld = new Q();
    this.matrixAutoUpdate = E.DefaultMatrixAutoUpdate;
    this.matrixWorldNeedsUpdate = !1;
    this.layers = new Tf();
    this.visible = !0;
    this.receiveShadow = this.castShadow = !1;
    this.frustumCulled = !0;
    this.renderOrder = 0;
    this.userData = {};
  }

  function vd() {
    E.call(this);
    this.type = "Scene";
    this.overrideMaterial = this.fog = this.background = null;
    this.autoUpdate = !0;
    "undefined" !== typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
      detail: this
    }));
  }

  function ab(a, b) {
    this.min = void 0 !== a ? a : new n(Infinity, Infinity, Infinity);
    this.max = void 0 !== b ? b : new n(-Infinity, -Infinity, -Infinity);
  }

  function Uf(a, b, c, d, e) {
    var f;
    var g = 0;

    for (f = a.length - 3; g <= f; g += 3) {
      Qb.fromArray(a, g);
      var h = e.x * Math.abs(Qb.x) + e.y * Math.abs(Qb.y) + e.z * Math.abs(Qb.z),
          l = b.dot(Qb),
          m = c.dot(Qb),
          r = d.dot(Qb);
      if (Math.max(-Math.max(l, m, r), Math.min(l, m, r)) > h) return !1;
    }

    return !0;
  }

  function mb(a, b) {
    this.center = void 0 !== a ? a : new n();
    this.radius = void 0 !== b ? b : 0;
  }

  function Rb(a, b) {
    this.origin = void 0 !== a ? a : new n();
    this.direction = void 0 !== b ? b : new n();
  }

  function Oa(a, b) {
    this.normal = void 0 !== a ? a : new n(1, 0, 0);
    this.constant = void 0 !== b ? b : 0;
  }

  function ba(a, b, c) {
    this.a = void 0 !== a ? a : new n();
    this.b = void 0 !== b ? b : new n();
    this.c = void 0 !== c ? c : new n();
  }

  function J(a, b, c) {
    return void 0 === b && void 0 === c ? this.set(a) : this.setRGB(a, b, c);
  }

  function Vf(a, b, c) {
    0 > c && (c += 1);
    1 < c && --c;
    return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + 6 * (b - a) * (2 / 3 - c) : a;
  }

  function Wf(a) {
    return .04045 > a ? .0773993808 * a : Math.pow(.9478672986 * a + .0521327014, 2.4);
  }

  function Xf(a) {
    return .0031308 > a ? 12.92 * a : 1.055 * Math.pow(a, .41666) - .055;
  }

  function xc(a, b, c, d, e, f) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.normal = d && d.isVector3 ? d : new n();
    this.vertexNormals = Array.isArray(d) ? d : [];
    this.color = e && e.isColor ? e : new J();
    this.vertexColors = Array.isArray(e) ? e : [];
    this.materialIndex = void 0 !== f ? f : 0;
  }

  function O() {
    Object.defineProperty(this, "id", {
      value: Ui++
    });
    this.uuid = P.generateUUID();
    this.name = "";
    this.type = "Material";
    this.fog = !0;
    this.blending = 1;
    this.side = 0;
    this.vertexTangents = this.flatShading = !1;
    this.vertexColors = 0;
    this.opacity = 1;
    this.transparent = !1;
    this.blendSrc = 204;
    this.blendDst = 205;
    this.blendEquation = 100;
    this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null;
    this.depthFunc = 3;
    this.depthWrite = this.depthTest = !0;
    this.stencilWriteMask = 255;
    this.stencilFunc = 519;
    this.stencilRef = 0;
    this.stencilFuncMask = 255;
    this.stencilZPass = this.stencilZFail = this.stencilFail = 7680;
    this.stencilWrite = !1;
    this.clippingPlanes = null;
    this.clipShadows = this.clipIntersection = !1;
    this.shadowSide = null;
    this.colorWrite = !0;
    this.precision = null;
    this.polygonOffset = !1;
    this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
    this.dithering = !1;
    this.alphaTest = 0;
    this.premultipliedAlpha = !1;
    this.toneMapped = this.visible = !0;
    this.userData = {};
    this.needsUpdate = !0;
  }

  function Ga(a) {
    O.call(this);
    this.type = "MeshBasicMaterial";
    this.color = new J(16777215);
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.envMap = this.alphaMap = this.specularMap = null;
    this.combine = 0;
    this.reflectivity = 1;
    this.refractionRatio = .98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.morphTargets = this.skinning = !1;
    this.setValues(a);
  }

  function N(a, b, c) {
    if (Array.isArray(a)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.name = "";
    this.array = a;
    this.itemSize = b;
    this.count = void 0 !== a ? a.length / b : 0;
    this.normalized = !0 === c;
    this.usage = 35044;
    this.updateRange = {
      offset: 0,
      count: -1
    };
    this.version = 0;
  }

  function wd(a, b, c) {
    N.call(this, new Int8Array(a), b, c);
  }

  function xd(a, b, c) {
    N.call(this, new Uint8Array(a), b, c);
  }

  function yd(a, b, c) {
    N.call(this, new Uint8ClampedArray(a), b, c);
  }

  function zd(a, b, c) {
    N.call(this, new Int16Array(a), b, c);
  }

  function Sb(a, b, c) {
    N.call(this, new Uint16Array(a), b, c);
  }

  function Ad(a, b, c) {
    N.call(this, new Int32Array(a), b, c);
  }

  function Tb(a, b, c) {
    N.call(this, new Uint32Array(a), b, c);
  }

  function A(a, b, c) {
    N.call(this, new Float32Array(a), b, c);
  }

  function Bd(a, b, c) {
    N.call(this, new Float64Array(a), b, c);
  }

  function ih() {
    this.vertices = [];
    this.normals = [];
    this.colors = [];
    this.uvs = [];
    this.uvs2 = [];
    this.groups = [];
    this.morphTargets = {};
    this.skinWeights = [];
    this.skinIndices = [];
    this.boundingSphere = this.boundingBox = null;
    this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1;
  }

  function jh(a) {
    if (0 === a.length) return -Infinity;

    for (var b = a[0], c = 1, d = a.length; c < d; ++c) a[c] > b && (b = a[c]);

    return b;
  }

  function D() {
    Object.defineProperty(this, "id", {
      value: Vi += 2
    });
    this.uuid = P.generateUUID();
    this.name = "";
    this.type = "BufferGeometry";
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.groups = [];
    this.boundingSphere = this.boundingBox = null;
    this.drawRange = {
      start: 0,
      count: Infinity
    };
    this.userData = {};
  }

  function ea(a, b) {
    E.call(this);
    this.type = "Mesh";
    this.geometry = void 0 !== a ? a : new D();
    this.material = void 0 !== b ? b : new Ga({
      color: 16777215 * Math.random()
    });
    this.drawMode = 0;
    this.updateMorphTargets();
  }

  function kh(a, b, c, d, e, f, g, h) {
    if (null === (1 === b.side ? d.intersectTriangle(g, f, e, !0, h) : d.intersectTriangle(e, f, g, 2 !== b.side, h))) return null;
    Ee.copy(h);
    Ee.applyMatrix4(a.matrixWorld);
    b = c.ray.origin.distanceTo(Ee);
    return b < c.near || b > c.far ? null : {
      distance: b,
      point: Ee.clone(),
      object: a
    };
  }

  function Fe(a, b, c, d, e, f, g, h, l, m, r) {
    Ub.fromBufferAttribute(e, l);
    Vb.fromBufferAttribute(e, m);
    Wb.fromBufferAttribute(e, r);
    e = a.morphTargetInfluences;

    if (b.morphTargets && f && e) {
      Yf.set(0, 0, 0);
      Zf.set(0, 0, 0);
      $f.set(0, 0, 0);

      for (var q = 0, u = f.length; q < u; q++) {
        var p = e[q],
            k = f[q];
        0 !== p && (lh.fromBufferAttribute(k, l), mh.fromBufferAttribute(k, m), nh.fromBufferAttribute(k, r), Yf.addScaledVector(lh.sub(Ub), p), Zf.addScaledVector(mh.sub(Vb), p), $f.addScaledVector(nh.sub(Wb), p));
      }

      Ub.add(Yf);
      Vb.add(Zf);
      Wb.add($f);
    }

    if (a = kh(a, b, c, d, Ub, Vb, Wb, Cd)) g && (yc.fromBufferAttribute(g, l), zc.fromBufferAttribute(g, m), Ac.fromBufferAttribute(g, r), a.uv = ba.getUV(Cd, Ub, Vb, Wb, yc, zc, Ac, new B())), h && (yc.fromBufferAttribute(h, l), zc.fromBufferAttribute(h, m), Ac.fromBufferAttribute(h, r), a.uv2 = ba.getUV(Cd, Ub, Vb, Wb, yc, zc, Ac, new B())), g = new xc(l, m, r), ba.getNormal(Ub, Vb, Wb, g.normal), a.face = g;
    return a;
  }

  function G() {
    Object.defineProperty(this, "id", {
      value: Wi += 2
    });
    this.uuid = P.generateUUID();
    this.name = "";
    this.type = "Geometry";
    this.vertices = [];
    this.colors = [];
    this.faces = [];
    this.faceVertexUvs = [[]];
    this.morphTargets = [];
    this.morphNormals = [];
    this.skinWeights = [];
    this.skinIndices = [];
    this.lineDistances = [];
    this.boundingSphere = this.boundingBox = null;
    this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.verticesNeedUpdate = this.elementsNeedUpdate = !1;
  }

  function Xb(a) {
    var b = {},
        c;

    for (c in a) {
      b[c] = {};

      for (var d in a[c]) {
        var e = a[c][d];
        e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture) ? b[c][d] = e.clone() : Array.isArray(e) ? b[c][d] = e.slice() : b[c][d] = e;
      }
    }

    return b;
  }

  function ua(a) {
    for (var b = {}, c = 0; c < a.length; c++) {
      var d = Xb(a[c]),
          e;

      for (e in d) b[e] = d[e];
    }

    return b;
  }

  function va(a) {
    O.call(this);
    this.type = "ShaderMaterial";
    this.defines = {};
    this.uniforms = {};
    this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
    this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
    this.linewidth = 1;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1;
    this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    };
    this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    };
    this.index0AttributeName = void 0;
    this.uniformsNeedUpdate = !1;
    void 0 !== a && (void 0 !== a.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(a));
  }

  function bb() {
    E.call(this);
    this.type = "Camera";
    this.matrixWorldInverse = new Q();
    this.projectionMatrix = new Q();
    this.projectionMatrixInverse = new Q();
  }

  function U(a, b, c, d) {
    bb.call(this);
    this.type = "PerspectiveCamera";
    this.fov = void 0 !== a ? a : 50;
    this.zoom = 1;
    this.near = void 0 !== c ? c : .1;
    this.far = void 0 !== d ? d : 2E3;
    this.focus = 10;
    this.aspect = void 0 !== b ? b : 1;
    this.view = null;
    this.filmGauge = 35;
    this.filmOffset = 0;
    this.updateProjectionMatrix();
  }

  function Bc(a, b, c, d) {
    E.call(this);
    this.type = "CubeCamera";
    var e = new U(90, 1, a, b);
    e.up.set(0, -1, 0);
    e.lookAt(new n(1, 0, 0));
    this.add(e);
    var f = new U(90, 1, a, b);
    f.up.set(0, -1, 0);
    f.lookAt(new n(-1, 0, 0));
    this.add(f);
    var g = new U(90, 1, a, b);
    g.up.set(0, 0, 1);
    g.lookAt(new n(0, 1, 0));
    this.add(g);
    var h = new U(90, 1, a, b);
    h.up.set(0, 0, -1);
    h.lookAt(new n(0, -1, 0));
    this.add(h);
    var l = new U(90, 1, a, b);
    l.up.set(0, -1, 0);
    l.lookAt(new n(0, 0, 1));
    this.add(l);
    var m = new U(90, 1, a, b);
    m.up.set(0, -1, 0);
    m.lookAt(new n(0, 0, -1));
    this.add(m);
    d = d || {
      format: 1022,
      magFilter: 1006,
      minFilter: 1006
    };
    this.renderTarget = new Bb(c, c, d);
    this.renderTarget.texture.name = "CubeCamera";

    this.update = function (a, b) {
      null === this.parent && this.updateMatrixWorld();
      var c = a.getRenderTarget(),
          d = this.renderTarget,
          r = d.texture.generateMipmaps;
      d.texture.generateMipmaps = !1;
      a.setRenderTarget(d, 0);
      a.render(b, e);
      a.setRenderTarget(d, 1);
      a.render(b, f);
      a.setRenderTarget(d, 2);
      a.render(b, g);
      a.setRenderTarget(d, 3);
      a.render(b, h);
      a.setRenderTarget(d, 4);
      a.render(b, l);
      d.texture.generateMipmaps = r;
      a.setRenderTarget(d, 5);
      a.render(b, m);
      a.setRenderTarget(c);
    };

    this.clear = function (a, b, c, d) {
      for (var e = a.getRenderTarget(), f = this.renderTarget, g = 0; 6 > g; g++) a.setRenderTarget(f, g), a.clear(b, c, d);

      a.setRenderTarget(e);
    };
  }

  function Bb(a, b, c) {
    Ba.call(this, a, b, c);
  }

  function Yb(a, b, c, d, e, f, g, h, l, m, r, q) {
    Y.call(this, null, f, g, h, l, m, d, e, r, q);
    this.image = {
      data: a || null,
      width: b || 1,
      height: c || 1
    };
    this.magFilter = void 0 !== l ? l : 1003;
    this.minFilter = void 0 !== m ? m : 1003;
    this.flipY = this.generateMipmaps = !1;
    this.unpackAlignment = 1;
    this.needsUpdate = !0;
  }

  function Dd(a, b, c, d, e, f) {
    this.planes = [void 0 !== a ? a : new Oa(), void 0 !== b ? b : new Oa(), void 0 !== c ? c : new Oa(), void 0 !== d ? d : new Oa(), void 0 !== e ? e : new Oa(), void 0 !== f ? f : new Oa()];
  }

  function ag() {
    function a(e, f) {
      !1 !== c && (d(e, f), b.requestAnimationFrame(a));
    }

    var b = null,
        c = !1,
        d = null;
    return {
      start: function () {
        !0 !== c && null !== d && (b.requestAnimationFrame(a), c = !0);
      },
      stop: function () {
        c = !1;
      },
      setAnimationLoop: function (a) {
        d = a;
      },
      setContext: function (a) {
        b = a;
      }
    };
  }

  function Xi(a) {
    function b(b, c) {
      var d = b.array,
          e = b.usage,
          h = a.createBuffer();
      a.bindBuffer(c, h);
      a.bufferData(c, d, e);
      b.onUploadCallback();
      c = 5126;
      d instanceof Float32Array ? c = 5126 : d instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : d instanceof Uint16Array ? c = 5123 : d instanceof Int16Array ? c = 5122 : d instanceof Uint32Array ? c = 5125 : d instanceof Int32Array ? c = 5124 : d instanceof Int8Array ? c = 5120 : d instanceof Uint8Array && (c = 5121);
      return {
        buffer: h,
        type: c,
        bytesPerElement: d.BYTES_PER_ELEMENT,
        version: b.version
      };
    }

    var c = new WeakMap();
    return {
      get: function (a) {
        a.isInterleavedBufferAttribute && (a = a.data);
        return c.get(a);
      },
      remove: function (b) {
        b.isInterleavedBufferAttribute && (b = b.data);
        var d = c.get(b);
        d && (a.deleteBuffer(d.buffer), c.delete(b));
      },
      update: function (d, e) {
        d.isInterleavedBufferAttribute && (d = d.data);
        var f = c.get(d);
        if (void 0 === f) c.set(d, b(d, e));else if (f.version < d.version) {
          var g = d.array,
              h = d.updateRange;
          a.bindBuffer(e, f.buffer);
          -1 === h.count ? a.bufferSubData(e, 0, g) : (a.bufferSubData(e, h.offset * g.BYTES_PER_ELEMENT, g.subarray(h.offset, h.offset + h.count)), h.count = -1);
          f.version = d.version;
        }
      }
    };
  }

  function Ed(a, b, c, d) {
    G.call(this);
    this.type = "PlaneGeometry";
    this.parameters = {
      width: a,
      height: b,
      widthSegments: c,
      heightSegments: d
    };
    this.fromBufferGeometry(new Zb(a, b, c, d));
    this.mergeVertices();
  }

  function Zb(a, b, c, d) {
    D.call(this);
    this.type = "PlaneBufferGeometry";
    this.parameters = {
      width: a,
      height: b,
      widthSegments: c,
      heightSegments: d
    };
    a = a || 1;
    b = b || 1;
    var e = a / 2,
        f = b / 2;
    c = Math.floor(c) || 1;
    d = Math.floor(d) || 1;
    var g = c + 1,
        h = d + 1,
        l = a / c,
        m = b / d,
        r = [],
        q = [],
        u = [],
        p = [];

    for (a = 0; a < h; a++) {
      var k = a * m - f;

      for (b = 0; b < g; b++) q.push(b * l - e, -k, 0), u.push(0, 0, 1), p.push(b / c), p.push(1 - a / d);
    }

    for (a = 0; a < d; a++) for (b = 0; b < c; b++) e = b + g * (a + 1), f = b + 1 + g * (a + 1), h = b + 1 + g * a, r.push(b + g * a, e, h), r.push(e, f, h);

    this.setIndex(r);
    this.setAttribute("position", new A(q, 3));
    this.setAttribute("normal", new A(u, 3));
    this.setAttribute("uv", new A(p, 2));
  }

  function Yi(a, b, c, d) {
    function e(a, c) {
      b.buffers.color.setClear(a.r, a.g, a.b, c, d);
    }

    var f = new J(0),
        g = 0,
        h,
        l,
        m = null,
        r = 0;
    return {
      getClearColor: function () {
        return f;
      },
      setClearColor: function (a, b) {
        f.set(a);
        g = void 0 !== b ? b : 1;
        e(f, g);
      },
      getClearAlpha: function () {
        return g;
      },
      setClearAlpha: function (a) {
        g = a;
        e(f, g);
      },
      render: function (b, d, p, k) {
        d = d.background;
        p = a.vr;
        (p = p.getSession && p.getSession()) && "additive" === p.environmentBlendMode && (d = null);
        null === d ? (e(f, g), m = null, r = 0) : d && d.isColor && (e(d, 1), k = !0, m = null, r = 0);
        (a.autoClear || k) && a.clear(a.autoClearColor, a.autoClearDepth, a.autoClearStencil);

        if (d && (d.isCubeTexture || d.isWebGLRenderTargetCube)) {
          void 0 === l && (l = new ea(new Fd(1, 1, 1), new va({
            type: "BackgroundCubeMaterial",
            uniforms: Xb(cb.cube.uniforms),
            vertexShader: cb.cube.vertexShader,
            fragmentShader: cb.cube.fragmentShader,
            side: 1,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
          })), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function (a, b, c) {
            this.matrixWorld.copyPosition(c.matrixWorld);
          }, Object.defineProperty(l.material, "map", {
            get: function () {
              return this.uniforms.tCube.value;
            }
          }), c.update(l));
          k = d.isWebGLRenderTargetCube ? d.texture : d;
          l.material.uniforms.tCube.value = k;
          l.material.uniforms.tFlip.value = d.isWebGLRenderTargetCube ? 1 : -1;
          if (m !== d || r !== k.version) l.material.needsUpdate = !0, m = d, r = k.version;
          b.unshift(l, l.geometry, l.material, 0, 0, null);
        } else if (d && d.isTexture) {
          void 0 === h && (h = new ea(new Zb(2, 2), new va({
            type: "BackgroundMaterial",
            uniforms: Xb(cb.background.uniforms),
            vertexShader: cb.background.vertexShader,
            fragmentShader: cb.background.fragmentShader,
            side: 0,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
          })), h.geometry.deleteAttribute("normal"), Object.defineProperty(h.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            }
          }), c.update(h));
          h.material.uniforms.t2D.value = d;
          !0 === d.matrixAutoUpdate && d.updateMatrix();
          h.material.uniforms.uvTransform.value.copy(d.matrix);
          if (m !== d || r !== d.version) h.material.needsUpdate = !0, m = d, r = d.version;
          b.unshift(h, h.geometry, h.material, 0, 0, null);
        }
      }
    };
  }

  function Zi(a, b, c, d) {
    var e = d.isWebGL2,
        f;

    this.setMode = function (a) {
      f = a;
    };

    this.render = function (b, d) {
      a.drawArrays(f, b, d);
      c.update(d, f);
    };

    this.renderInstances = function (d, h, l, m) {
      if (0 !== m) {
        if (e) {
          d = a;
          var g = "drawArraysInstanced";
        } else if (d = b.get("ANGLE_instanced_arrays"), g = "drawArraysInstancedANGLE", null === d) {
          console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
          return;
        }

        d[g](f, h, l, m);
        c.update(l, f, m);
      }
    };
  }

  function $i(a, b, c) {
    function d(b) {
      if ("highp" === b) {
        if (0 < a.getShaderPrecisionFormat(35633, 36338).precision && 0 < a.getShaderPrecisionFormat(35632, 36338).precision) return "highp";
        b = "mediump";
      }

      return "mediump" === b && 0 < a.getShaderPrecisionFormat(35633, 36337).precision && 0 < a.getShaderPrecisionFormat(35632, 36337).precision ? "mediump" : "lowp";
    }

    var e,
        f = "undefined" !== typeof WebGL2RenderingContext && a instanceof WebGL2RenderingContext || "undefined" !== typeof WebGL2ComputeRenderingContext && a instanceof WebGL2ComputeRenderingContext,
        g = void 0 !== c.precision ? c.precision : "highp",
        h = d(g);
    h !== g && (console.warn("THREE.WebGLRenderer:", g, "not supported, using", h, "instead."), g = h);
    c = !0 === c.logarithmicDepthBuffer;
    h = a.getParameter(34930);
    var l = a.getParameter(35660),
        m = a.getParameter(3379),
        r = a.getParameter(34076),
        q = a.getParameter(34921),
        k = a.getParameter(36347),
        p = a.getParameter(36348),
        t = a.getParameter(36349),
        v = 0 < l,
        y = f || !!b.get("OES_texture_float"),
        n = v && y,
        x = f ? a.getParameter(36183) : 0;
    return {
      isWebGL2: f,
      getMaxAnisotropy: function () {
        if (void 0 !== e) return e;
        var c = b.get("EXT_texture_filter_anisotropic");
        return e = null !== c ? a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
      },
      getMaxPrecision: d,
      precision: g,
      logarithmicDepthBuffer: c,
      maxTextures: h,
      maxVertexTextures: l,
      maxTextureSize: m,
      maxCubemapSize: r,
      maxAttributes: q,
      maxVertexUniforms: k,
      maxVaryings: p,
      maxFragmentUniforms: t,
      vertexTextures: v,
      floatFragmentTextures: y,
      floatVertexTextures: n,
      maxSamples: x
    };
  }

  function aj() {
    function a() {
      m.value !== d && (m.value = d, m.needsUpdate = 0 < e);
      c.numPlanes = e;
      c.numIntersection = 0;
    }

    function b(a, b, d, e) {
      var f = null !== a ? a.length : 0,
          g = null;

      if (0 !== f) {
        g = m.value;

        if (!0 !== e || null === g) {
          e = d + 4 * f;
          b = b.matrixWorldInverse;
          l.getNormalMatrix(b);
          if (null === g || g.length < e) g = new Float32Array(e);

          for (e = 0; e !== f; ++e, d += 4) h.copy(a[e]).applyMatrix4(b, l), h.normal.toArray(g, d), g[d + 3] = h.constant;
        }

        m.value = g;
        m.needsUpdate = !0;
      }

      c.numPlanes = f;
      return g;
    }

    var c = this,
        d = null,
        e = 0,
        f = !1,
        g = !1,
        h = new Oa(),
        l = new Z(),
        m = {
      value: null,
      needsUpdate: !1
    };
    this.uniform = m;
    this.numIntersection = this.numPlanes = 0;

    this.init = function (a, c, g) {
      var h = 0 !== a.length || c || 0 !== e || f;
      f = c;
      d = b(a, g, 0);
      e = a.length;
      return h;
    };

    this.beginShadows = function () {
      g = !0;
      b(null);
    };

    this.endShadows = function () {
      g = !1;
      a();
    };

    this.setState = function (c, h, l, p, k, v) {
      if (!f || null === c || 0 === c.length || g && !l) g ? b(null) : a();else {
        l = g ? 0 : e;
        var r = 4 * l,
            q = k.clippingState || null;
        m.value = q;
        q = b(c, p, r, v);

        for (c = 0; c !== r; ++c) q[c] = d[c];

        k.clippingState = q;
        this.numIntersection = h ? this.numPlanes : 0;
        this.numPlanes += l;
      }
    };
  }

  function bj(a) {
    var b = {};
    return {
      get: function (c) {
        if (void 0 !== b[c]) return b[c];

        switch (c) {
          case "WEBGL_depth_texture":
            var d = a.getExtension("WEBGL_depth_texture") || a.getExtension("MOZ_WEBGL_depth_texture") || a.getExtension("WEBKIT_WEBGL_depth_texture");
            break;

          case "EXT_texture_filter_anisotropic":
            d = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;

          case "WEBGL_compressed_texture_s3tc":
            d = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;

          case "WEBGL_compressed_texture_pvrtc":
            d = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;

          default:
            d = a.getExtension(c);
        }

        null === d && console.warn("THREE.WebGLRenderer: " + c + " extension not supported.");
        return b[c] = d;
      }
    };
  }

  function cj(a, b, c) {
    function d(a) {
      var e = a.target;
      a = f.get(e);
      null !== a.index && b.remove(a.index);

      for (var h in a.attributes) b.remove(a.attributes[h]);

      e.removeEventListener("dispose", d);
      f.delete(e);
      if (h = g.get(a)) b.remove(h), g.delete(a);
      c.memory.geometries--;
    }

    function e(a) {
      var c = [],
          d = a.index,
          e = a.attributes.position;

      if (null !== d) {
        var f = d.array;
        d = d.version;
        e = 0;

        for (var h = f.length; e < h; e += 3) {
          var k = f[e + 0],
              t = f[e + 1],
              v = f[e + 2];
          c.push(k, t, t, v, v, k);
        }
      } else for (f = e.array, d = e.version, e = 0, h = f.length / 3 - 1; e < h; e += 3) k = e + 0, t = e + 1, v = e + 2, c.push(k, t, t, v, v, k);

      c = new (65535 < jh(c) ? Tb : Sb)(c, 1);
      c.version = d;
      b.update(c, 34963);
      (f = g.get(a)) && b.remove(f);
      g.set(a, c);
    }

    var f = new WeakMap(),
        g = new WeakMap();
    return {
      get: function (a, b) {
        var e = f.get(b);
        if (e) return e;
        b.addEventListener("dispose", d);
        b.isBufferGeometry ? e = b : b.isGeometry && (void 0 === b._bufferGeometry && (b._bufferGeometry = new D().setFromObject(a)), e = b._bufferGeometry);
        f.set(b, e);
        c.memory.geometries++;
        return e;
      },
      update: function (a) {
        var c = a.index,
            d = a.attributes;
        null !== c && b.update(c, 34963);

        for (var e in d) b.update(d[e], 34962);

        a = a.morphAttributes;

        for (e in a) {
          c = a[e];
          d = 0;

          for (var f = c.length; d < f; d++) b.update(c[d], 34962);
        }
      },
      getWireframeAttribute: function (a) {
        var b = g.get(a);

        if (b) {
          var c = a.index;
          null !== c && b.version < c.version && e(a);
        } else e(a);

        return g.get(a);
      }
    };
  }

  function dj(a, b, c, d) {
    var e = d.isWebGL2,
        f,
        g,
        h;

    this.setMode = function (a) {
      f = a;
    };

    this.setIndex = function (a) {
      g = a.type;
      h = a.bytesPerElement;
    };

    this.render = function (b, d) {
      a.drawElements(f, d, g, b * h);
      c.update(d, f);
    };

    this.renderInstances = function (d, m, r, q) {
      if (0 !== q) {
        if (e) {
          d = a;
          var l = "drawElementsInstanced";
        } else if (d = b.get("ANGLE_instanced_arrays"), l = "drawElementsInstancedANGLE", null === d) {
          console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
          return;
        }

        d[l](f, r, g, m * h, q);
        c.update(r, f, q);
      }
    };
  }

  function ej(a) {
    var b = {
      frame: 0,
      calls: 0,
      triangles: 0,
      points: 0,
      lines: 0
    };
    return {
      memory: {
        geometries: 0,
        textures: 0
      },
      render: b,
      programs: null,
      autoReset: !0,
      reset: function () {
        b.frame++;
        b.calls = 0;
        b.triangles = 0;
        b.points = 0;
        b.lines = 0;
      },
      update: function (a, d, e) {
        e = e || 1;
        b.calls++;

        switch (d) {
          case 4:
            b.triangles += a / 3 * e;
            break;

          case 5:
          case 6:
            b.triangles += e * (a - 2);
            break;

          case 1:
            b.lines += a / 2 * e;
            break;

          case 3:
            b.lines += e * (a - 1);
            break;

          case 2:
            b.lines += e * a;
            break;

          case 0:
            b.points += e * a;
            break;

          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", d);
        }
      }
    };
  }

  function fj(a, b) {
    return Math.abs(b[1]) - Math.abs(a[1]);
  }

  function gj(a) {
    var b = {},
        c = new Float32Array(8);
    return {
      update: function (d, e, f, g) {
        var h = d.morphTargetInfluences,
            l = h.length;
        d = b[e.id];

        if (void 0 === d) {
          d = [];

          for (var m = 0; m < l; m++) d[m] = [m, 0];

          b[e.id] = d;
        }

        var r = f.morphTargets && e.morphAttributes.position;
        f = f.morphNormals && e.morphAttributes.normal;

        for (m = 0; m < l; m++) {
          var q = d[m];
          0 !== q[1] && (r && e.deleteAttribute("morphTarget" + m), f && e.deleteAttribute("morphNormal" + m));
        }

        for (m = 0; m < l; m++) q = d[m], q[0] = m, q[1] = h[m];

        d.sort(fj);

        for (m = 0; 8 > m; m++) {
          if (q = d[m]) if (h = q[0], l = q[1]) {
            r && e.setAttribute("morphTarget" + m, r[h]);
            f && e.setAttribute("morphNormal" + m, f[h]);
            c[m] = l;
            continue;
          }
          c[m] = 0;
        }

        g.getUniforms().setValue(a, "morphTargetInfluences", c);
      }
    };
  }

  function hj(a, b, c, d) {
    var e = {};
    return {
      update: function (a) {
        var f = d.render.frame,
            h = a.geometry,
            l = b.get(a, h);
        e[l.id] !== f && (h.isGeometry && l.updateFromObject(a), b.update(l), e[l.id] = f);
        a.isInstancedMesh && c.update(a.instanceMatrix, 34962);
        return l;
      },
      dispose: function () {
        e = {};
      }
    };
  }

  function nb(a, b, c, d, e, f, g, h, l, m) {
    a = void 0 !== a ? a : [];
    Y.call(this, a, void 0 !== b ? b : 301, c, d, e, f, void 0 !== g ? g : 1022, h, l, m);
    this.flipY = !1;
  }

  function Cc(a, b, c, d) {
    Y.call(this, null);
    this.image = {
      data: a || null,
      width: b || 1,
      height: c || 1,
      depth: d || 1
    };
    this.minFilter = this.magFilter = 1003;
    this.wrapR = 1001;
    this.flipY = this.generateMipmaps = !1;
    this.needsUpdate = !0;
  }

  function Dc(a, b, c, d) {
    Y.call(this, null);
    this.image = {
      data: a || null,
      width: b || 1,
      height: c || 1,
      depth: d || 1
    };
    this.minFilter = this.magFilter = 1003;
    this.wrapR = 1001;
    this.flipY = this.generateMipmaps = !1;
    this.needsUpdate = !0;
  }

  function Ec(a, b, c) {
    var d = a[0];
    if (0 >= d || 0 < d) return a;
    var e = b * c,
        f = oh[e];
    void 0 === f && (f = new Float32Array(e), oh[e] = f);
    if (0 !== b) for (d.toArray(f, 0), d = 1, e = 0; d !== b; ++d) e += c, a[d].toArray(f, e);
    return f;
  }

  function La(a, b) {
    if (a.length !== b.length) return !1;

    for (var c = 0, d = a.length; c < d; c++) if (a[c] !== b[c]) return !1;

    return !0;
  }

  function Ha(a, b) {
    for (var c = 0, d = b.length; c < d; c++) a[c] = b[c];
  }

  function ph(a, b) {
    var c = qh[b];
    void 0 === c && (c = new Int32Array(b), qh[b] = c);

    for (var d = 0; d !== b; ++d) c[d] = a.allocateTextureUnit();

    return c;
  }

  function ij(a, b) {
    var c = this.cache;
    c[0] !== b && (a.uniform1f(this.addr, b), c[0] = b);
  }

  function jj(a, b) {
    var c = this.cache;

    if (void 0 !== b.x) {
      if (c[0] !== b.x || c[1] !== b.y) a.uniform2f(this.addr, b.x, b.y), c[0] = b.x, c[1] = b.y;
    } else La(c, b) || (a.uniform2fv(this.addr, b), Ha(c, b));
  }

  function kj(a, b) {
    var c = this.cache;

    if (void 0 !== b.x) {
      if (c[0] !== b.x || c[1] !== b.y || c[2] !== b.z) a.uniform3f(this.addr, b.x, b.y, b.z), c[0] = b.x, c[1] = b.y, c[2] = b.z;
    } else if (void 0 !== b.r) {
      if (c[0] !== b.r || c[1] !== b.g || c[2] !== b.b) a.uniform3f(this.addr, b.r, b.g, b.b), c[0] = b.r, c[1] = b.g, c[2] = b.b;
    } else La(c, b) || (a.uniform3fv(this.addr, b), Ha(c, b));
  }

  function lj(a, b) {
    var c = this.cache;

    if (void 0 !== b.x) {
      if (c[0] !== b.x || c[1] !== b.y || c[2] !== b.z || c[3] !== b.w) a.uniform4f(this.addr, b.x, b.y, b.z, b.w), c[0] = b.x, c[1] = b.y, c[2] = b.z, c[3] = b.w;
    } else La(c, b) || (a.uniform4fv(this.addr, b), Ha(c, b));
  }

  function mj(a, b) {
    var c = this.cache,
        d = b.elements;
    void 0 === d ? La(c, b) || (a.uniformMatrix2fv(this.addr, !1, b), Ha(c, b)) : La(c, d) || (rh.set(d), a.uniformMatrix2fv(this.addr, !1, rh), Ha(c, d));
  }

  function nj(a, b) {
    var c = this.cache,
        d = b.elements;
    void 0 === d ? La(c, b) || (a.uniformMatrix3fv(this.addr, !1, b), Ha(c, b)) : La(c, d) || (sh.set(d), a.uniformMatrix3fv(this.addr, !1, sh), Ha(c, d));
  }

  function oj(a, b) {
    var c = this.cache,
        d = b.elements;
    void 0 === d ? La(c, b) || (a.uniformMatrix4fv(this.addr, !1, b), Ha(c, b)) : La(c, d) || (th.set(d), a.uniformMatrix4fv(this.addr, !1, th), Ha(c, d));
  }

  function pj(a, b, c) {
    var d = this.cache,
        e = c.allocateTextureUnit();
    d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e);
    c.safeSetTexture2D(b || uh, e);
  }

  function qj(a, b, c) {
    var d = this.cache,
        e = c.allocateTextureUnit();
    d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e);
    c.setTexture2DArray(b || rj, e);
  }

  function sj(a, b, c) {
    var d = this.cache,
        e = c.allocateTextureUnit();
    d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e);
    c.setTexture3D(b || tj, e);
  }

  function uj(a, b, c) {
    var d = this.cache,
        e = c.allocateTextureUnit();
    d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e);
    c.safeSetTextureCube(b || vh, e);
  }

  function vj(a, b) {
    var c = this.cache;
    c[0] !== b && (a.uniform1i(this.addr, b), c[0] = b);
  }

  function wj(a, b) {
    var c = this.cache;
    La(c, b) || (a.uniform2iv(this.addr, b), Ha(c, b));
  }

  function xj(a, b) {
    var c = this.cache;
    La(c, b) || (a.uniform3iv(this.addr, b), Ha(c, b));
  }

  function yj(a, b) {
    var c = this.cache;
    La(c, b) || (a.uniform4iv(this.addr, b), Ha(c, b));
  }

  function zj(a) {
    switch (a) {
      case 5126:
        return ij;

      case 35664:
        return jj;

      case 35665:
        return kj;

      case 35666:
        return lj;

      case 35674:
        return mj;

      case 35675:
        return nj;

      case 35676:
        return oj;

      case 35678:
      case 36198:
        return pj;

      case 35679:
        return sj;

      case 35680:
        return uj;

      case 36289:
        return qj;

      case 5124:
      case 35670:
        return vj;

      case 35667:
      case 35671:
        return wj;

      case 35668:
      case 35672:
        return xj;

      case 35669:
      case 35673:
        return yj;
    }
  }

  function Aj(a, b) {
    a.uniform1fv(this.addr, b);
  }

  function Bj(a, b) {
    a.uniform1iv(this.addr, b);
  }

  function Cj(a, b) {
    a.uniform2iv(this.addr, b);
  }

  function Dj(a, b) {
    a.uniform3iv(this.addr, b);
  }

  function Ej(a, b) {
    a.uniform4iv(this.addr, b);
  }

  function Fj(a, b) {
    b = Ec(b, this.size, 2);
    a.uniform2fv(this.addr, b);
  }

  function Gj(a, b) {
    b = Ec(b, this.size, 3);
    a.uniform3fv(this.addr, b);
  }

  function Hj(a, b) {
    b = Ec(b, this.size, 4);
    a.uniform4fv(this.addr, b);
  }

  function Ij(a, b) {
    b = Ec(b, this.size, 4);
    a.uniformMatrix2fv(this.addr, !1, b);
  }

  function Jj(a, b) {
    b = Ec(b, this.size, 9);
    a.uniformMatrix3fv(this.addr, !1, b);
  }

  function Kj(a, b) {
    b = Ec(b, this.size, 16);
    a.uniformMatrix4fv(this.addr, !1, b);
  }

  function Lj(a, b, c) {
    var d = b.length,
        e = ph(c, d);
    a.uniform1iv(this.addr, e);

    for (a = 0; a !== d; ++a) c.safeSetTexture2D(b[a] || uh, e[a]);
  }

  function Mj(a, b, c) {
    var d = b.length,
        e = ph(c, d);
    a.uniform1iv(this.addr, e);

    for (a = 0; a !== d; ++a) c.safeSetTextureCube(b[a] || vh, e[a]);
  }

  function Nj(a) {
    switch (a) {
      case 5126:
        return Aj;

      case 35664:
        return Fj;

      case 35665:
        return Gj;

      case 35666:
        return Hj;

      case 35674:
        return Ij;

      case 35675:
        return Jj;

      case 35676:
        return Kj;

      case 35678:
        return Lj;

      case 35680:
        return Mj;

      case 5124:
      case 35670:
        return Bj;

      case 35667:
      case 35671:
        return Cj;

      case 35668:
      case 35672:
        return Dj;

      case 35669:
      case 35673:
        return Ej;
    }
  }

  function Oj(a, b, c) {
    this.id = a;
    this.addr = c;
    this.cache = [];
    this.setValue = zj(b.type);
  }

  function wh(a, b, c) {
    this.id = a;
    this.addr = c;
    this.cache = [];
    this.size = b.size;
    this.setValue = Nj(b.type);
  }

  function xh(a) {
    this.id = a;
    this.seq = [];
    this.map = {};
  }

  function Cb(a, b) {
    this.seq = [];
    this.map = {};

    for (var c = a.getProgramParameter(b, 35718), d = 0; d < c; ++d) {
      var e = a.getActiveUniform(b, d),
          f = a.getUniformLocation(b, e.name),
          g = this,
          h = e.name,
          l = h.length;

      for (bg.lastIndex = 0;;) {
        var m = bg.exec(h),
            r = bg.lastIndex,
            q = m[1],
            k = m[3];
        "]" === m[2] && (q |= 0);

        if (void 0 === k || "[" === k && r + 2 === l) {
          h = g;
          e = void 0 === k ? new Oj(q, e, f) : new wh(q, e, f);
          h.seq.push(e);
          h.map[e.id] = e;
          break;
        } else k = g.map[q], void 0 === k && (k = new xh(q), q = g, g = k, q.seq.push(g), q.map[g.id] = g), g = k;
      }
    }
  }

  function yh(a, b, c) {
    b = a.createShader(b);
    a.shaderSource(b, c);
    a.compileShader(b);
    return b;
  }

  function zh(a) {
    switch (a) {
      case 3E3:
        return ["Linear", "( value )"];

      case 3001:
        return ["sRGB", "( value )"];

      case 3002:
        return ["RGBE", "( value )"];

      case 3004:
        return ["RGBM", "( value, 7.0 )"];

      case 3005:
        return ["RGBM", "( value, 16.0 )"];

      case 3006:
        return ["RGBD", "( value, 256.0 )"];

      case 3007:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];

      case 3003:
        return ["LogLuv", "( value )"];

      default:
        throw Error("unsupported encoding: " + a);
    }
  }

  function Ah(a, b, c) {
    var d = a.getShaderParameter(b, 35713),
        e = a.getShaderInfoLog(b).trim();
    if (d && "" === e) return "";
    a = a.getShaderSource(b).split("\n");

    for (b = 0; b < a.length; b++) a[b] = b + 1 + ": " + a[b];

    a = a.join("\n");
    return "THREE.WebGLShader: gl.getShaderInfoLog() " + c + "\n" + e + a;
  }

  function Ge(a, b) {
    b = zh(b);
    return "vec4 " + a + "( vec4 value ) { return " + b[0] + "ToLinear" + b[1] + "; }";
  }

  function Pj(a, b) {
    b = zh(b);
    return "vec4 " + a + "( vec4 value ) { return LinearTo" + b[0] + b[1] + "; }";
  }

  function Qj(a, b) {
    switch (b) {
      case 1:
        b = "Linear";
        break;

      case 2:
        b = "Reinhard";
        break;

      case 3:
        b = "Uncharted2";
        break;

      case 4:
        b = "OptimizedCineon";
        break;

      case 5:
        b = "ACESFilmic";
        break;

      default:
        throw Error("unsupported toneMapping: " + b);
    }

    return "vec3 " + a + "( vec3 color ) { return " + b + "ToneMapping( color ); }";
  }

  function Rj(a, b, c) {
    a = a || {};
    return [a.derivatives || b.envMapCubeUV || b.bumpMap || b.tangentSpaceNormalMap || b.clearcoatNormalMap || b.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (a.fragDepth || b.logarithmicDepthBuffer) && c.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", a.drawBuffers && c.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (a.shaderTextureLOD || b.envMap) && c.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Gd).join("\n");
  }

  function Sj(a) {
    var b = [],
        c;

    for (c in a) {
      var d = a[c];
      !1 !== d && b.push("#define " + c + " " + d);
    }

    return b.join("\n");
  }

  function Gd(a) {
    return "" !== a;
  }

  function Bh(a, b) {
    return a.replace(/NUM_DIR_LIGHTS/g, b.numDirLights).replace(/NUM_SPOT_LIGHTS/g, b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, b.numPointLights).replace(/NUM_HEMI_LIGHTS/g, b.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, b.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, b.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, b.numPointLightShadows);
  }

  function Ch(a, b) {
    return a.replace(/NUM_CLIPPING_PLANES/g, b.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, b.numClippingPlanes - b.numClipIntersection);
  }

  function cg(a, b) {
    a = S[b];
    if (void 0 === a) throw Error("Can not resolve #include <" + b + ">");
    return a.replace(dg, cg);
  }

  function Dh(a, b, c, d) {
    a = "";

    for (b = parseInt(b); b < parseInt(c); b++) a += d.replace(/\[ i \]/g, "[ " + b + " ]").replace(/UNROLLED_LOOP_INDEX/g, b);

    return a;
  }

  function Eh(a) {
    var b = "precision " + a.precision + " float;\nprecision " + a.precision + " int;";
    "highp" === a.precision ? b += "\n#define HIGH_PRECISION" : "mediump" === a.precision ? b += "\n#define MEDIUM_PRECISION" : "lowp" === a.precision && (b += "\n#define LOW_PRECISION");
    return b;
  }

  function Tj(a) {
    var b = "SHADOWMAP_TYPE_BASIC";
    1 === a.shadowMapType ? b = "SHADOWMAP_TYPE_PCF" : 2 === a.shadowMapType ? b = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === a.shadowMapType && (b = "SHADOWMAP_TYPE_VSM");
    return b;
  }

  function Uj(a) {
    var b = "ENVMAP_TYPE_CUBE";
    if (a.envMap) switch (a.envMapMode) {
      case 301:
      case 302:
        b = "ENVMAP_TYPE_CUBE";
        break;

      case 306:
      case 307:
        b = "ENVMAP_TYPE_CUBE_UV";
        break;

      case 303:
      case 304:
        b = "ENVMAP_TYPE_EQUIREC";
        break;

      case 305:
        b = "ENVMAP_TYPE_SPHERE";
    }
    return b;
  }

  function Vj(a) {
    var b = "ENVMAP_MODE_REFLECTION";
    if (a.envMap) switch (a.envMapMode) {
      case 302:
      case 304:
        b = "ENVMAP_MODE_REFRACTION";
    }
    return b;
  }

  function Wj(a) {
    var b = "ENVMAP_BLENDING_MULTIPLY";
    if (a.envMap) switch (a.combine) {
      case 0:
        b = "ENVMAP_BLENDING_MULTIPLY";
        break;

      case 1:
        b = "ENVMAP_BLENDING_MIX";
        break;

      case 2:
        b = "ENVMAP_BLENDING_ADD";
    }
    return b;
  }

  function Xj(a, b, c, d, e, f) {
    var g = a.getContext(),
        h = d.defines,
        l = e.vertexShader,
        m = e.fragmentShader,
        r = Tj(f),
        q = Uj(f),
        k = Vj(f),
        p = Wj(f),
        t = 0 < a.gammaFactor ? a.gammaFactor : 1,
        v = f.isWebGL2 ? "" : Rj(d.extensions, f, b),
        n = Sj(h),
        w = g.createProgram(),
        x = f.numMultiviewViews;
    d.isRawShaderMaterial ? (h = [n].filter(Gd).join("\n"), 0 < h.length && (h += "\n"), b = [v, n].filter(Gd).join("\n"), 0 < b.length && (b += "\n")) : (h = [Eh(f), "#define SHADER_NAME " + e.name, n, f.instancing ? "#define USE_INSTANCING" : "", f.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + t, "#define MAX_BONES " + f.maxBones, f.useFog && f.fog ? "#define USE_FOG" : "", f.useFog && f.fogExp2 ? "#define FOG_EXP2" : "", f.map ? "#define USE_MAP" : "", f.envMap ? "#define USE_ENVMAP" : "", f.envMap ? "#define " + k : "", f.lightMap ? "#define USE_LIGHTMAP" : "", f.aoMap ? "#define USE_AOMAP" : "", f.emissiveMap ? "#define USE_EMISSIVEMAP" : "", f.bumpMap ? "#define USE_BUMPMAP" : "", f.normalMap ? "#define USE_NORMALMAP" : "", f.normalMap && f.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", f.normalMap && f.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", f.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", f.displacementMap && f.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", f.specularMap ? "#define USE_SPECULARMAP" : "", f.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", f.metalnessMap ? "#define USE_METALNESSMAP" : "", f.alphaMap ? "#define USE_ALPHAMAP" : "", f.vertexTangents ? "#define USE_TANGENT" : "", f.vertexColors ? "#define USE_COLOR" : "", f.vertexUvs ? "#define USE_UV" : "", f.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", f.flatShading ? "#define FLAT_SHADED" : "", f.skinning ? "#define USE_SKINNING" : "", f.useVertexTexture ? "#define BONE_TEXTURE" : "", f.morphTargets ? "#define USE_MORPHTARGETS" : "", f.morphNormals && !1 === f.flatShading ? "#define USE_MORPHNORMALS" : "", f.doubleSided ? "#define DOUBLE_SIDED" : "", f.flipSided ? "#define FLIP_SIDED" : "", f.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", f.shadowMapEnabled ? "#define " + r : "", f.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", f.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", f.logarithmicDepthBuffer && (f.isWebGL2 || b.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", " attribute mat4 instanceMatrix;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Gd).join("\n"), b = [v, Eh(f), "#define SHADER_NAME " + e.name, n, f.alphaTest ? "#define ALPHATEST " + f.alphaTest + (f.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + t, f.useFog && f.fog ? "#define USE_FOG" : "", f.useFog && f.fogExp2 ? "#define FOG_EXP2" : "", f.map ? "#define USE_MAP" : "", f.matcap ? "#define USE_MATCAP" : "", f.envMap ? "#define USE_ENVMAP" : "", f.envMap ? "#define " + q : "", f.envMap ? "#define " + k : "", f.envMap ? "#define " + p : "", f.lightMap ? "#define USE_LIGHTMAP" : "", f.aoMap ? "#define USE_AOMAP" : "", f.emissiveMap ? "#define USE_EMISSIVEMAP" : "", f.bumpMap ? "#define USE_BUMPMAP" : "", f.normalMap ? "#define USE_NORMALMAP" : "", f.normalMap && f.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", f.normalMap && f.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", f.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", f.specularMap ? "#define USE_SPECULARMAP" : "", f.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", f.metalnessMap ? "#define USE_METALNESSMAP" : "", f.alphaMap ? "#define USE_ALPHAMAP" : "", f.sheen ? "#define USE_SHEEN" : "", f.vertexTangents ? "#define USE_TANGENT" : "", f.vertexColors ? "#define USE_COLOR" : "", f.vertexUvs ? "#define USE_UV" : "", f.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", f.gradientMap ? "#define USE_GRADIENTMAP" : "", f.flatShading ? "#define FLAT_SHADED" : "", f.doubleSided ? "#define DOUBLE_SIDED" : "", f.flipSided ? "#define FLIP_SIDED" : "", f.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", f.shadowMapEnabled ? "#define " + r : "", f.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", f.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", f.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", f.logarithmicDepthBuffer && (f.isWebGL2 || b.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", (d.extensions && d.extensions.shaderTextureLOD || f.envMap) && (f.isWebGL2 || b.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== f.toneMapping ? "#define TONE_MAPPING" : "", 0 !== f.toneMapping ? S.tonemapping_pars_fragment : "", 0 !== f.toneMapping ? Qj("toneMapping", f.toneMapping) : "", f.dithering ? "#define DITHERING" : "", f.outputEncoding || f.mapEncoding || f.matcapEncoding || f.envMapEncoding || f.emissiveMapEncoding ? S.encodings_pars_fragment : "", f.mapEncoding ? Ge("mapTexelToLinear", f.mapEncoding) : "", f.matcapEncoding ? Ge("matcapTexelToLinear", f.matcapEncoding) : "", f.envMapEncoding ? Ge("envMapTexelToLinear", f.envMapEncoding) : "", f.emissiveMapEncoding ? Ge("emissiveMapTexelToLinear", f.emissiveMapEncoding) : "", f.outputEncoding ? Pj("linearToOutputTexel", f.outputEncoding) : "", f.depthPacking ? "#define DEPTH_PACKING " + d.depthPacking : "", "\n"].filter(Gd).join("\n"));
    l = l.replace(dg, cg);
    l = Bh(l, f);
    l = Ch(l, f);
    m = m.replace(dg, cg);
    m = Bh(m, f);
    m = Ch(m, f);
    l = l.replace(Fh, Dh);
    m = m.replace(Fh, Dh);
    f.isWebGL2 && !d.isRawShaderMaterial && (r = !1, q = /^\s*#version\s+300\s+es\s*\n/, d.isShaderMaterial && null !== l.match(q) && null !== m.match(q) && (r = !0, l = l.replace(q, ""), m = m.replace(q, "")), h = "#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n" + h, b = ["#version 300 es\n\n#define varying in", r ? "" : "out highp vec4 pc_fragColor;", r ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + b, 0 < x && (h = h.replace("#version 300 es\n", ["#version 300 es\n\n#extension GL_OVR_multiview2 : require", "layout(num_views = " + x + ") in;", "#define VIEW_ID gl_ViewID_OVR"].join("\n")), h = h.replace("uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;", ["uniform mat4 modelViewMatrices[" + x + "];", "uniform mat4 projectionMatrices[" + x + "];", "uniform mat4 viewMatrices[" + x + "];", "uniform mat3 normalMatrices[" + x + "];", "#define modelViewMatrix modelViewMatrices[VIEW_ID]\n#define projectionMatrix projectionMatrices[VIEW_ID]\n#define viewMatrix viewMatrices[VIEW_ID]\n#define normalMatrix normalMatrices[VIEW_ID]"].join("\n")), b = b.replace("#version 300 es\n", "#version 300 es\n\n#extension GL_OVR_multiview2 : require\n#define VIEW_ID gl_ViewID_OVR"), b = b.replace("uniform mat4 viewMatrix;", ["uniform mat4 viewMatrices[" + x + "];", "#define viewMatrix viewMatrices[VIEW_ID]"].join("\n"))));
    m = b + m;
    l = yh(g, 35633, h + l);
    m = yh(g, 35632, m);
    g.attachShader(w, l);
    g.attachShader(w, m);
    void 0 !== d.index0AttributeName ? g.bindAttribLocation(w, 0, d.index0AttributeName) : !0 === f.morphTargets && g.bindAttribLocation(w, 0, "position");
    g.linkProgram(w);

    if (a.debug.checkShaderErrors) {
      a = g.getProgramInfoLog(w).trim();
      f = g.getShaderInfoLog(l).trim();
      r = g.getShaderInfoLog(m).trim();
      k = q = !0;
      if (!1 === g.getProgramParameter(w, 35714)) q = !1, p = Ah(g, l, "vertex"), t = Ah(g, m, "fragment"), console.error("THREE.WebGLProgram: shader error: ", g.getError(), "35715", g.getProgramParameter(w, 35715), "gl.getProgramInfoLog", a, p, t);else if ("" !== a) console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", a);else if ("" === f || "" === r) k = !1;
      k && (this.diagnostics = {
        runnable: q,
        material: d,
        programLog: a,
        vertexShader: {
          log: f,
          prefix: h
        },
        fragmentShader: {
          log: r,
          prefix: b
        }
      });
    }

    g.deleteShader(l);
    g.deleteShader(m);
    var F;

    this.getUniforms = function () {
      void 0 === F && (F = new Cb(g, w));
      return F;
    };

    var I;

    this.getAttributes = function () {
      if (void 0 === I) {
        for (var a = {}, b = g.getProgramParameter(w, 35721), c = 0; c < b; c++) {
          var d = g.getActiveAttrib(w, c).name;
          a[d] = g.getAttribLocation(w, d);
        }

        I = a;
      }

      return I;
    };

    this.destroy = function () {
      g.deleteProgram(w);
      this.program = void 0;
    };

    this.name = e.name;
    this.id = Yj++;
    this.cacheKey = c;
    this.usedTimes = 1;
    this.program = w;
    this.vertexShader = l;
    this.fragmentShader = m;
    this.numMultiviewViews = x;
    return this;
  }

  function Zj(a, b, c) {
    function d(a, b) {
      if (a) a.isTexture ? c = a.encoding : a.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), c = a.texture.encoding);else var c = 3E3;
      3E3 === c && b && (c = 3007);
      return c;
    }

    var e = [],
        f = c.isWebGL2,
        g = c.logarithmicDepthBuffer,
        h = c.floatVertexTextures,
        l = c.precision,
        m = c.maxVertexUniforms,
        r = c.vertexTextures,
        q = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "phong",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite"
    },
        k = "precision isWebGL2 supportsVertexTextures outputEncoding instancing numMultiviewViews map mapEncoding matcap matcapEncoding envMap envMapMode envMapEncoding envMapCubeUV lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap tangentSpaceNormalMap clearcoatNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors vertexTangents vertexUvs uvsVertexOnly fog useFog fogExp2 flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights numDirLightShadows numPointLightShadows numSpotLightShadows shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering sheen".split(" ");

    this.getParameters = function (b, e, k, u, n, x, F) {
      var t = q[b.type];

      if (F.isSkinnedMesh) {
        var p = F.skeleton.bones;
        if (h) p = 1024;else {
          var v = Math.min(Math.floor((m - 20) / 4), p.length);
          v < p.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + p.length + " bones. This GPU supports " + v + "."), p = 0) : p = v;
        }
      } else p = 0;

      null !== b.precision && (l = c.getMaxPrecision(b.precision), l !== b.precision && console.warn("THREE.WebGLProgram.getParameters:", b.precision, "not supported, using", l, "instead."));
      v = a.getRenderTarget();
      return {
        isWebGL2: f,
        shaderID: t,
        precision: l,
        instancing: !0 === F.isInstancedMesh,
        supportsVertexTextures: r,
        numMultiviewViews: v && v.isWebGLMultiviewRenderTarget ? v.numViews : 0,
        outputEncoding: d(v ? v.texture : null, a.gammaOutput),
        map: !!b.map,
        mapEncoding: d(b.map, a.gammaInput),
        matcap: !!b.matcap,
        matcapEncoding: d(b.matcap, a.gammaInput),
        envMap: !!b.envMap,
        envMapMode: b.envMap && b.envMap.mapping,
        envMapEncoding: d(b.envMap, a.gammaInput),
        envMapCubeUV: !!b.envMap && (306 === b.envMap.mapping || 307 === b.envMap.mapping),
        lightMap: !!b.lightMap,
        aoMap: !!b.aoMap,
        emissiveMap: !!b.emissiveMap,
        emissiveMapEncoding: d(b.emissiveMap, a.gammaInput),
        bumpMap: !!b.bumpMap,
        normalMap: !!b.normalMap,
        objectSpaceNormalMap: 1 === b.normalMapType,
        tangentSpaceNormalMap: 0 === b.normalMapType,
        clearcoatNormalMap: !!b.clearcoatNormalMap,
        displacementMap: !!b.displacementMap,
        roughnessMap: !!b.roughnessMap,
        metalnessMap: !!b.metalnessMap,
        specularMap: !!b.specularMap,
        alphaMap: !!b.alphaMap,
        gradientMap: !!b.gradientMap,
        sheen: !!b.sheen,
        combine: b.combine,
        vertexTangents: b.normalMap && b.vertexTangents,
        vertexColors: b.vertexColors,
        vertexUvs: !!b.map || !!b.bumpMap || !!b.normalMap || !!b.specularMap || !!b.alphaMap || !!b.emissiveMap || !!b.roughnessMap || !!b.metalnessMap || !!b.clearcoatNormalMap || !!b.displacementMap,
        uvsVertexOnly: !(b.map || b.bumpMap || b.normalMap || b.specularMap || b.alphaMap || b.emissiveMap || b.roughnessMap || b.metalnessMap || b.clearcoatNormalMap) && !!b.displacementMap,
        fog: !!u,
        useFog: b.fog,
        fogExp2: u && u.isFogExp2,
        flatShading: b.flatShading,
        sizeAttenuation: b.sizeAttenuation,
        logarithmicDepthBuffer: g,
        skinning: b.skinning && 0 < p,
        maxBones: p,
        useVertexTexture: h,
        morphTargets: b.morphTargets,
        morphNormals: b.morphNormals,
        maxMorphTargets: a.maxMorphTargets,
        maxMorphNormals: a.maxMorphNormals,
        numDirLights: e.directional.length,
        numPointLights: e.point.length,
        numSpotLights: e.spot.length,
        numRectAreaLights: e.rectArea.length,
        numHemiLights: e.hemi.length,
        numDirLightShadows: e.directionalShadowMap.length,
        numPointLightShadows: e.pointShadowMap.length,
        numSpotLightShadows: e.spotShadowMap.length,
        numClippingPlanes: n,
        numClipIntersection: x,
        dithering: b.dithering,
        shadowMapEnabled: a.shadowMap.enabled && 0 < k.length,
        shadowMapType: a.shadowMap.type,
        toneMapping: b.toneMapped ? a.toneMapping : 0,
        physicallyCorrectLights: a.physicallyCorrectLights,
        premultipliedAlpha: b.premultipliedAlpha,
        alphaTest: b.alphaTest,
        doubleSided: 2 === b.side,
        flipSided: 1 === b.side,
        depthPacking: void 0 !== b.depthPacking ? b.depthPacking : !1
      };
    };

    this.getProgramCacheKey = function (b, c) {
      var d = [];
      c.shaderID ? d.push(c.shaderID) : (d.push(b.fragmentShader), d.push(b.vertexShader));
      if (void 0 !== b.defines) for (var e in b.defines) d.push(e), d.push(b.defines[e]);

      for (e = 0; e < k.length; e++) d.push(c[k[e]]);

      d.push(b.onBeforeCompile.toString());
      d.push(a.gammaOutput);
      d.push(a.gammaFactor);
      return d.join();
    };

    this.acquireProgram = function (c, d, f, g) {
      for (var h, l = 0, m = e.length; l < m; l++) {
        var r = e[l];

        if (r.cacheKey === g) {
          h = r;
          ++h.usedTimes;
          break;
        }
      }

      void 0 === h && (h = new Xj(a, b, g, c, d, f), e.push(h));
      return h;
    };

    this.releaseProgram = function (a) {
      if (0 === --a.usedTimes) {
        var b = e.indexOf(a);
        e[b] = e[e.length - 1];
        e.pop();
        a.destroy();
      }
    };

    this.programs = e;
  }

  function ak() {
    var a = new WeakMap();
    return {
      get: function (b) {
        var c = a.get(b);
        void 0 === c && (c = {}, a.set(b, c));
        return c;
      },
      remove: function (b) {
        a.delete(b);
      },
      update: function (b, c, d) {
        a.get(b)[c] = d;
      },
      dispose: function () {
        a = new WeakMap();
      }
    };
  }

  function bk(a, b) {
    return a.groupOrder !== b.groupOrder ? a.groupOrder - b.groupOrder : a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.program !== b.program ? a.program.id - b.program.id : a.material.id !== b.material.id ? a.material.id - b.material.id : a.z !== b.z ? a.z - b.z : a.id - b.id;
  }

  function ck(a, b) {
    return a.groupOrder !== b.groupOrder ? a.groupOrder - b.groupOrder : a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.z !== b.z ? b.z - a.z : a.id - b.id;
  }

  function Gh() {
    function a(a, d, e, m, r, q) {
      var g = b[c];
      void 0 === g ? (g = {
        id: a.id,
        object: a,
        geometry: d,
        material: e,
        program: e.program || f,
        groupOrder: m,
        renderOrder: a.renderOrder,
        z: r,
        group: q
      }, b[c] = g) : (g.id = a.id, g.object = a, g.geometry = d, g.material = e, g.program = e.program || f, g.groupOrder = m, g.renderOrder = a.renderOrder, g.z = r, g.group = q);
      c++;
      return g;
    }

    var b = [],
        c = 0,
        d = [],
        e = [],
        f = {
      id: -1
    };
    return {
      opaque: d,
      transparent: e,
      init: function () {
        c = 0;
        d.length = 0;
        e.length = 0;
      },
      push: function (b, c, f, m, r, q) {
        b = a(b, c, f, m, r, q);
        (!0 === f.transparent ? e : d).push(b);
      },
      unshift: function (b, c, f, m, r, q) {
        b = a(b, c, f, m, r, q);
        (!0 === f.transparent ? e : d).unshift(b);
      },
      sort: function () {
        1 < d.length && d.sort(bk);
        1 < e.length && e.sort(ck);
      }
    };
  }

  function dk() {
    function a(c) {
      c = c.target;
      c.removeEventListener("dispose", a);
      b.delete(c);
    }

    var b = new WeakMap();
    return {
      get: function (c, d) {
        var e = b.get(c);

        if (void 0 === e) {
          var f = new Gh();
          b.set(c, new WeakMap());
          b.get(c).set(d, f);
          c.addEventListener("dispose", a);
        } else f = e.get(d), void 0 === f && (f = new Gh(), e.set(d, f));

        return f;
      },
      dispose: function () {
        b = new WeakMap();
      }
    };
  }

  function ek() {
    var a = {};
    return {
      get: function (b) {
        if (void 0 !== a[b.id]) return a[b.id];

        switch (b.type) {
          case "DirectionalLight":
            var c = {
              direction: new n(),
              color: new J(),
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new B()
            };
            break;

          case "SpotLight":
            c = {
              position: new n(),
              direction: new n(),
              color: new J(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new B()
            };
            break;

          case "PointLight":
            c = {
              position: new n(),
              color: new J(),
              distance: 0,
              decay: 0,
              shadow: !1,
              shadowBias: 0,
              shadowRadius: 1,
              shadowMapSize: new B(),
              shadowCameraNear: 1,
              shadowCameraFar: 1E3
            };
            break;

          case "HemisphereLight":
            c = {
              direction: new n(),
              skyColor: new J(),
              groundColor: new J()
            };
            break;

          case "RectAreaLight":
            c = {
              color: new J(),
              position: new n(),
              halfWidth: new n(),
              halfHeight: new n()
            };
        }

        return a[b.id] = c;
      }
    };
  }

  function fk(a, b) {
    return (b.castShadow ? 1 : 0) - (a.castShadow ? 1 : 0);
  }

  function gk() {
    for (var a = new ek(), b = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      point: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1
    }, c = 0; 9 > c; c++) b.probe.push(new n());

    var d = new n(),
        e = new Q(),
        f = new Q();
    return {
      setup: function (c, h, l) {
        for (var g = 0, r = 0, q = 0, k = 0; 9 > k; k++) b.probe[k].set(0, 0, 0);

        var p = h = 0,
            t = 0,
            v = 0,
            n = 0,
            w = 0,
            x = 0,
            F = 0;
        l = l.matrixWorldInverse;
        c.sort(fk);
        k = 0;

        for (var I = c.length; k < I; k++) {
          var z = c[k],
              Ca = z.color,
              ia = z.intensity,
              B = z.distance,
              la = z.shadow && z.shadow.map ? z.shadow.map.texture : null;
          if (z.isAmbientLight) g += Ca.r * ia, r += Ca.g * ia, q += Ca.b * ia;else if (z.isLightProbe) for (la = 0; 9 > la; la++) b.probe[la].addScaledVector(z.sh.coefficients[la], ia);else if (z.isDirectionalLight) {
            var H = a.get(z);
            H.color.copy(z.color).multiplyScalar(z.intensity);
            H.direction.setFromMatrixPosition(z.matrixWorld);
            d.setFromMatrixPosition(z.target.matrixWorld);
            H.direction.sub(d);
            H.direction.transformDirection(l);
            if (H.shadow = z.castShadow) ia = z.shadow, H.shadowBias = ia.bias, H.shadowRadius = ia.radius, H.shadowMapSize = ia.mapSize, b.directionalShadowMap[h] = la, b.directionalShadowMatrix[h] = z.shadow.matrix, w++;
            b.directional[h] = H;
            h++;
          } else if (z.isSpotLight) {
            H = a.get(z);
            H.position.setFromMatrixPosition(z.matrixWorld);
            H.position.applyMatrix4(l);
            H.color.copy(Ca).multiplyScalar(ia);
            H.distance = B;
            H.direction.setFromMatrixPosition(z.matrixWorld);
            d.setFromMatrixPosition(z.target.matrixWorld);
            H.direction.sub(d);
            H.direction.transformDirection(l);
            H.coneCos = Math.cos(z.angle);
            H.penumbraCos = Math.cos(z.angle * (1 - z.penumbra));
            H.decay = z.decay;
            if (H.shadow = z.castShadow) ia = z.shadow, H.shadowBias = ia.bias, H.shadowRadius = ia.radius, H.shadowMapSize = ia.mapSize, b.spotShadowMap[t] = la, b.spotShadowMatrix[t] = z.shadow.matrix, F++;
            b.spot[t] = H;
            t++;
          } else if (z.isRectAreaLight) H = a.get(z), H.color.copy(Ca).multiplyScalar(ia), H.position.setFromMatrixPosition(z.matrixWorld), H.position.applyMatrix4(l), f.identity(), e.copy(z.matrixWorld), e.premultiply(l), f.extractRotation(e), H.halfWidth.set(.5 * z.width, 0, 0), H.halfHeight.set(0, .5 * z.height, 0), H.halfWidth.applyMatrix4(f), H.halfHeight.applyMatrix4(f), b.rectArea[v] = H, v++;else if (z.isPointLight) {
            H = a.get(z);
            H.position.setFromMatrixPosition(z.matrixWorld);
            H.position.applyMatrix4(l);
            H.color.copy(z.color).multiplyScalar(z.intensity);
            H.distance = z.distance;
            H.decay = z.decay;
            if (H.shadow = z.castShadow) ia = z.shadow, H.shadowBias = ia.bias, H.shadowRadius = ia.radius, H.shadowMapSize = ia.mapSize, H.shadowCameraNear = ia.camera.near, H.shadowCameraFar = ia.camera.far, b.pointShadowMap[p] = la, b.pointShadowMatrix[p] = z.shadow.matrix, x++;
            b.point[p] = H;
            p++;
          } else z.isHemisphereLight && (H = a.get(z), H.direction.setFromMatrixPosition(z.matrixWorld), H.direction.transformDirection(l), H.direction.normalize(), H.skyColor.copy(z.color).multiplyScalar(ia), H.groundColor.copy(z.groundColor).multiplyScalar(ia), b.hemi[n] = H, n++);
        }

        b.ambient[0] = g;
        b.ambient[1] = r;
        b.ambient[2] = q;
        c = b.hash;
        if (c.directionalLength !== h || c.pointLength !== p || c.spotLength !== t || c.rectAreaLength !== v || c.hemiLength !== n || c.numDirectionalShadows !== w || c.numPointShadows !== x || c.numSpotShadows !== F) b.directional.length = h, b.spot.length = t, b.rectArea.length = v, b.point.length = p, b.hemi.length = n, b.directionalShadowMap.length = w, b.pointShadowMap.length = x, b.spotShadowMap.length = F, b.directionalShadowMatrix.length = w, b.pointShadowMatrix.length = x, b.spotShadowMatrix.length = F, c.directionalLength = h, c.pointLength = p, c.spotLength = t, c.rectAreaLength = v, c.hemiLength = n, c.numDirectionalShadows = w, c.numPointShadows = x, c.numSpotShadows = F, b.version = hk++;
      },
      state: b
    };
  }

  function Hh() {
    var a = new gk(),
        b = [],
        c = [];
    return {
      init: function () {
        b.length = 0;
        c.length = 0;
      },
      state: {
        lightsArray: b,
        shadowsArray: c,
        lights: a
      },
      setupLights: function (d) {
        a.setup(b, c, d);
      },
      pushLight: function (a) {
        b.push(a);
      },
      pushShadow: function (a) {
        c.push(a);
      }
    };
  }

  function ik() {
    function a(c) {
      c = c.target;
      c.removeEventListener("dispose", a);
      b.delete(c);
    }

    var b = new WeakMap();
    return {
      get: function (c, d) {
        if (!1 === b.has(c)) {
          var e = new Hh();
          b.set(c, new WeakMap());
          b.get(c).set(d, e);
          c.addEventListener("dispose", a);
        } else !1 === b.get(c).has(d) ? (e = new Hh(), b.get(c).set(d, e)) : e = b.get(c).get(d);

        return e;
      },
      dispose: function () {
        b = new WeakMap();
      }
    };
  }

  function Db(a) {
    O.call(this);
    this.type = "MeshDepthMaterial";
    this.depthPacking = 3200;
    this.morphTargets = this.skinning = !1;
    this.displacementMap = this.alphaMap = this.map = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.fog = !1;
    this.setValues(a);
  }

  function Eb(a) {
    O.call(this);
    this.type = "MeshDistanceMaterial";
    this.referencePosition = new n();
    this.nearDistance = 1;
    this.farDistance = 1E3;
    this.morphTargets = this.skinning = !1;
    this.displacementMap = this.alphaMap = this.map = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.fog = !1;
    this.setValues(a);
  }

  function Ih(a, b, c) {
    function d(a, b, c) {
      c = a << 0 | b << 1 | c << 2;
      var d = q[c];
      void 0 === d && (d = new Db({
        depthPacking: 3201,
        morphTargets: a,
        skinning: b
      }), q[c] = d);
      return d;
    }

    function e(a, b, c) {
      c = a << 0 | b << 1 | c << 2;
      var d = k[c];
      void 0 === d && (d = new Eb({
        morphTargets: a,
        skinning: b
      }), k[c] = d);
      return d;
    }

    function f(b, c, f, g, h, l) {
      var m = b.geometry,
          r = d,
          q = b.customDepthMaterial;
      !0 === f.isPointLight && (r = e, q = b.customDistanceMaterial);
      void 0 === q ? (q = !1, !0 === c.morphTargets && (!0 === m.isBufferGeometry ? q = m.morphAttributes && m.morphAttributes.position && 0 < m.morphAttributes.position.length : !0 === m.isGeometry && (q = m.morphTargets && 0 < m.morphTargets.length)), m = !1, !0 === b.isSkinnedMesh && (!0 === c.skinning ? m = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", b)), b = r(q, m, !0 === b.isInstancedMesh)) : b = q;
      a.localClippingEnabled && !0 === c.clipShadows && 0 !== c.clippingPlanes.length && (q = b.uuid, r = c.uuid, m = p[q], void 0 === m && (m = {}, p[q] = m), q = m[r], void 0 === q && (q = b.clone(), m[r] = q), b = q);
      b.visible = c.visible;
      b.wireframe = c.wireframe;
      b.side = 3 === l ? null !== c.shadowSide ? c.shadowSide : c.side : null !== c.shadowSide ? c.shadowSide : t[c.side];
      b.clipShadows = c.clipShadows;
      b.clippingPlanes = c.clippingPlanes;
      b.clipIntersection = c.clipIntersection;
      b.wireframeLinewidth = c.wireframeLinewidth;
      b.linewidth = c.linewidth;
      !0 === f.isPointLight && !0 === b.isMeshDistanceMaterial && (b.referencePosition.setFromMatrixPosition(f.matrixWorld), b.nearDistance = g, b.farDistance = h);
      return b;
    }

    function g(c, d, e, l, m) {
      if (!1 !== c.visible) {
        if (c.layers.test(d.layers) && (c.isMesh || c.isLine || c.isPoints) && (c.castShadow || c.receiveShadow && 3 === m) && (!c.frustumCulled || h.intersectsObject(c))) {
          c.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse, c.matrixWorld);
          var r = b.update(c),
              q = c.material;
          if (Array.isArray(q)) for (var k = r.groups, u = 0, t = k.length; u < t; u++) {
            var p = k[u],
                v = q[p.materialIndex];
            v && v.visible && (v = f(c, v, l, e.near, e.far, m), a.renderBufferDirect(e, null, r, v, c, p));
          } else q.visible && (v = f(c, q, l, e.near, e.far, m), a.renderBufferDirect(e, null, r, v, c, null));
        }

        c = c.children;
        r = 0;

        for (q = c.length; r < q; r++) g(c[r], d, e, l, m);
      }
    }

    var h = new Dd(),
        l = new B(),
        m = new B(),
        r = new da(),
        q = [],
        k = [],
        p = {},
        t = {
      0: 1,
      1: 0,
      2: 2
    },
        v = new va({
      defines: {
        SAMPLE_RATE: .25,
        HALF_SAMPLE_RATE: .125
      },
      uniforms: {
        shadow_pass: {
          value: null
        },
        resolution: {
          value: new B()
        },
        radius: {
          value: 4
        }
      },
      vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
      fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n  \n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = decodeHalfRGBA ( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = pow( squared_mean - mean * mean, 0.5 );\n  gl_FragColor = encodeHalfRGBA( vec2( mean, std_dev ) );\n}"
    }),
        n = v.clone();
    n.defines.HORIZONAL_PASS = 1;
    var w = new D();
    w.setAttribute("position", new N(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
    var x = new ea(w, v),
        F = this;
    this.enabled = !1;
    this.autoUpdate = !0;
    this.needsUpdate = !1;
    this.type = 1;

    this.render = function (d, e, f) {
      if (!1 !== F.enabled && (!1 !== F.autoUpdate || !1 !== F.needsUpdate) && 0 !== d.length) {
        var q = a.getRenderTarget(),
            k = a.getActiveCubeFace(),
            u = a.getActiveMipmapLevel(),
            t = a.state;
        t.setBlending(0);
        t.buffers.color.setClear(1, 1, 1, 1);
        t.buffers.depth.setTest(!0);
        t.setScissorTest(!1);

        for (var p = 0, y = d.length; p < y; p++) {
          var w = d[p],
              z = w.shadow;
          if (void 0 === z) console.warn("THREE.WebGLShadowMap:", w, "has no shadow.");else {
            l.copy(z.mapSize);
            var I = z.getFrameExtents();
            l.multiply(I);
            m.copy(z.mapSize);
            if (l.x > c || l.y > c) console.warn("THREE.WebGLShadowMap:", w, "has shadow exceeding max texture size, reducing"), l.x > c && (m.x = Math.floor(c / I.x), l.x = m.x * I.x, z.mapSize.x = m.x), l.y > c && (m.y = Math.floor(c / I.y), l.y = m.y * I.y, z.mapSize.y = m.y);
            null !== z.map || z.isPointLightShadow || 3 !== this.type || (I = {
              minFilter: 1006,
              magFilter: 1006,
              format: 1023
            }, z.map = new Ba(l.x, l.y, I), z.map.texture.name = w.name + ".shadowMap", z.mapPass = new Ba(l.x, l.y, I), z.camera.updateProjectionMatrix());
            null === z.map && (I = {
              minFilter: 1003,
              magFilter: 1003,
              format: 1023
            }, z.map = new Ba(l.x, l.y, I), z.map.texture.name = w.name + ".shadowMap", z.camera.updateProjectionMatrix());
            a.setRenderTarget(z.map);
            a.clear();
            I = z.getViewportCount();

            for (var Ca = 0; Ca < I; Ca++) {
              var B = z.getViewport(Ca);
              r.set(m.x * B.x, m.y * B.y, m.x * B.z, m.y * B.w);
              t.viewport(r);
              z.updateMatrices(w, Ca);
              h = z.getFrustum();
              g(e, f, z.camera, w, this.type);
            }

            z.isPointLightShadow || 3 !== this.type || (w = z, z = f, I = b.update(x), v.uniforms.shadow_pass.value = w.map.texture, v.uniforms.resolution.value = w.mapSize, v.uniforms.radius.value = w.radius, a.setRenderTarget(w.mapPass), a.clear(), a.renderBufferDirect(z, null, I, v, x, null), n.uniforms.shadow_pass.value = w.mapPass.texture, n.uniforms.resolution.value = w.mapSize, n.uniforms.radius.value = w.radius, a.setRenderTarget(w.map), a.clear(), a.renderBufferDirect(z, null, I, n, x, null));
          }
        }

        F.needsUpdate = !1;
        a.setRenderTarget(q, k, u);
      }
    };
  }

  function jk(a, b, c) {
    function d(b, c, d) {
      var e = new Uint8Array(4),
          f = a.createTexture();
      a.bindTexture(b, f);
      a.texParameteri(b, 10241, 9728);
      a.texParameteri(b, 10240, 9728);

      for (b = 0; b < d; b++) a.texImage2D(c + b, 0, 6408, 1, 1, 0, 6408, 5121, e);

      return f;
    }

    function e(c, d) {
      n[c] = 1;
      0 === w[c] && (a.enableVertexAttribArray(c), w[c] = 1);
      x[c] !== d && ((k ? a : b.get("ANGLE_instanced_arrays"))[k ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](c, d), x[c] = d);
    }

    function f(b) {
      !0 !== F[b] && (a.enable(b), F[b] = !0);
    }

    function g(b) {
      !1 !== F[b] && (a.disable(b), F[b] = !1);
    }

    function h(b, c, d, e, h, l, m, r) {
      if (0 === b) z && (g(3042), z = !1);else if (z || (f(3042), z = !0), 5 !== b) {
        if (b !== Ca || r !== D) {
          if (100 !== B || 100 !== H) a.blendEquation(32774), H = B = 100;
          if (r) switch (b) {
            case 1:
              a.blendFuncSeparate(1, 771, 1, 771);
              break;

            case 2:
              a.blendFunc(1, 1);
              break;

            case 3:
              a.blendFuncSeparate(0, 0, 769, 771);
              break;

            case 4:
              a.blendFuncSeparate(0, 768, 0, 770);
              break;

            default:
              console.error("THREE.WebGLState: Invalid blending: ", b);
          } else switch (b) {
            case 1:
              a.blendFuncSeparate(770, 771, 1, 771);
              break;

            case 2:
              a.blendFunc(770, 1);
              break;

            case 3:
              a.blendFunc(0, 769);
              break;

            case 4:
              a.blendFunc(0, 768);
              break;

            default:
              console.error("THREE.WebGLState: Invalid blending: ", b);
          }
          E = Hd = la = A = null;
          Ca = b;
          D = r;
        }
      } else {
        h = h || c;
        l = l || d;
        m = m || e;
        if (c !== B || h !== H) a.blendEquationSeparate(Fc[c], Fc[h]), B = c, H = h;
        if (d !== A || e !== la || l !== Hd || m !== E) a.blendFuncSeparate(M[d], M[e], M[l], M[m]), A = d, la = e, Hd = l, E = m;
        Ca = b;
        D = null;
      }
    }

    function l(b) {
      J !== b && (b ? a.frontFace(2304) : a.frontFace(2305), J = b);
    }

    function m(b) {
      0 !== b ? (f(2884), b !== L && (1 === b ? a.cullFace(1029) : 2 === b ? a.cullFace(1028) : a.cullFace(1032))) : g(2884);
      L = b;
    }

    function r(b, c, d) {
      if (b) {
        if (f(32823), G !== c || N !== d) a.polygonOffset(c, d), G = c, N = d;
      } else g(32823);
    }

    function q(b) {
      void 0 === b && (b = 33984 + ha - 1);
      P !== b && (a.activeTexture(b), P = b);
    }

    var k = c.isWebGL2,
        p = new function () {
      var b = !1,
          c = new da(),
          d = null,
          e = new da(0, 0, 0, 0);
      return {
        setMask: function (c) {
          d === c || b || (a.colorMask(c, c, c, c), d = c);
        },
        setLocked: function (a) {
          b = a;
        },
        setClear: function (b, d, f, g, h) {
          !0 === h && (b *= g, d *= g, f *= g);
          c.set(b, d, f, g);
          !1 === e.equals(c) && (a.clearColor(b, d, f, g), e.copy(c));
        },
        reset: function () {
          b = !1;
          d = null;
          e.set(-1, 0, 0, 0);
        }
      };
    }(),
        t = new function () {
      var b = !1,
          c = null,
          d = null,
          e = null;
      return {
        setTest: function (a) {
          a ? f(2929) : g(2929);
        },
        setMask: function (d) {
          c === d || b || (a.depthMask(d), c = d);
        },
        setFunc: function (b) {
          if (d !== b) {
            if (b) switch (b) {
              case 0:
                a.depthFunc(512);
                break;

              case 1:
                a.depthFunc(519);
                break;

              case 2:
                a.depthFunc(513);
                break;

              case 3:
                a.depthFunc(515);
                break;

              case 4:
                a.depthFunc(514);
                break;

              case 5:
                a.depthFunc(518);
                break;

              case 6:
                a.depthFunc(516);
                break;

              case 7:
                a.depthFunc(517);
                break;

              default:
                a.depthFunc(515);
            } else a.depthFunc(515);
            d = b;
          }
        },
        setLocked: function (a) {
          b = a;
        },
        setClear: function (b) {
          e !== b && (a.clearDepth(b), e = b);
        },
        reset: function () {
          b = !1;
          e = d = c = null;
        }
      };
    }(),
        v = new function () {
      var b = !1,
          c = null,
          d = null,
          e = null,
          h = null,
          l = null,
          m = null,
          r = null,
          q = null;
      return {
        setTest: function (a) {
          b || (a ? f(2960) : g(2960));
        },
        setMask: function (d) {
          c === d || b || (a.stencilMask(d), c = d);
        },
        setFunc: function (b, c, f) {
          if (d !== b || e !== c || h !== f) a.stencilFunc(b, c, f), d = b, e = c, h = f;
        },
        setOp: function (b, c, d) {
          if (l !== b || m !== c || r !== d) a.stencilOp(b, c, d), l = b, m = c, r = d;
        },
        setLocked: function (a) {
          b = a;
        },
        setClear: function (b) {
          q !== b && (a.clearStencil(b), q = b);
        },
        reset: function () {
          b = !1;
          q = r = m = l = h = e = d = c = null;
        }
      };
    }();
    c = a.getParameter(34921);
    var n = new Uint8Array(c),
        w = new Uint8Array(c),
        x = new Uint8Array(c),
        F = {},
        I = null,
        z = null,
        Ca = null,
        B = null,
        A = null,
        la = null,
        H = null,
        Hd = null,
        E = null,
        D = !1,
        J = null,
        L = null,
        C = null,
        G = null,
        N = null,
        ha = a.getParameter(35661),
        O = !1;
    c = 0;
    c = a.getParameter(7938);
    -1 !== c.indexOf("WebGL") ? (c = parseFloat(/^WebGL ([0-9])/.exec(c)[1]), O = 1 <= c) : -1 !== c.indexOf("OpenGL ES") && (c = parseFloat(/^OpenGL ES ([0-9])/.exec(c)[1]), O = 2 <= c);
    var P = null,
        Ke = {},
        $b = new da(),
        Jh = new da(),
        ob = {};
    ob[3553] = d(3553, 3553, 1);
    ob[34067] = d(34067, 34069, 6);
    p.setClear(0, 0, 0, 1);
    t.setClear(1);
    v.setClear(0);
    f(2929);
    t.setFunc(3);
    l(!1);
    m(1);
    f(2884);
    h(0);
    var Fc = {
      100: 32774,
      101: 32778,
      102: 32779
    };
    k ? (Fc[103] = 32775, Fc[104] = 32776) : (c = b.get("EXT_blend_minmax"), null !== c && (Fc[103] = c.MIN_EXT, Fc[104] = c.MIN_EXT));
    var M = {
      200: 0,
      201: 1,
      202: 768,
      204: 770,
      210: 776,
      208: 774,
      206: 772,
      203: 769,
      205: 771,
      209: 775,
      207: 773
    };
    return {
      buffers: {
        color: p,
        depth: t,
        stencil: v
      },
      initAttributes: function () {
        for (var a = 0, b = n.length; a < b; a++) n[a] = 0;
      },
      enableAttribute: function (a) {
        e(a, 0);
      },
      enableAttributeAndDivisor: e,
      disableUnusedAttributes: function () {
        for (var b = 0, c = w.length; b !== c; ++b) w[b] !== n[b] && (a.disableVertexAttribArray(b), w[b] = 0);
      },
      enable: f,
      disable: g,
      useProgram: function (b) {
        return I !== b ? (a.useProgram(b), I = b, !0) : !1;
      },
      setBlending: h,
      setMaterial: function (a, b) {
        2 === a.side ? g(2884) : f(2884);
        var c = 1 === a.side;
        b && (c = !c);
        l(c);
        1 === a.blending && !1 === a.transparent ? h(0) : h(a.blending, a.blendEquation, a.blendSrc, a.blendDst, a.blendEquationAlpha, a.blendSrcAlpha, a.blendDstAlpha, a.premultipliedAlpha);
        t.setFunc(a.depthFunc);
        t.setTest(a.depthTest);
        t.setMask(a.depthWrite);
        p.setMask(a.colorWrite);
        b = a.stencilWrite;
        v.setTest(b);
        b && (v.setMask(a.stencilWriteMask), v.setFunc(a.stencilFunc, a.stencilRef, a.stencilFuncMask), v.setOp(a.stencilFail, a.stencilZFail, a.stencilZPass));
        r(a.polygonOffset, a.polygonOffsetFactor, a.polygonOffsetUnits);
      },
      setFlipSided: l,
      setCullFace: m,
      setLineWidth: function (b) {
        b !== C && (O && a.lineWidth(b), C = b);
      },
      setPolygonOffset: r,
      setScissorTest: function (a) {
        a ? f(3089) : g(3089);
      },
      activeTexture: q,
      bindTexture: function (b, c) {
        null === P && q();
        var d = Ke[P];
        void 0 === d && (d = {
          type: void 0,
          texture: void 0
        }, Ke[P] = d);
        if (d.type !== b || d.texture !== c) a.bindTexture(b, c || ob[b]), d.type = b, d.texture = c;
      },
      unbindTexture: function () {
        var b = Ke[P];
        void 0 !== b && void 0 !== b.type && (a.bindTexture(b.type, null), b.type = void 0, b.texture = void 0);
      },
      compressedTexImage2D: function () {
        try {
          a.compressedTexImage2D.apply(a, arguments);
        } catch (W) {
          console.error("THREE.WebGLState:", W);
        }
      },
      texImage2D: function () {
        try {
          a.texImage2D.apply(a, arguments);
        } catch (W) {
          console.error("THREE.WebGLState:", W);
        }
      },
      texImage3D: function () {
        try {
          a.texImage3D.apply(a, arguments);
        } catch (W) {
          console.error("THREE.WebGLState:", W);
        }
      },
      scissor: function (b) {
        !1 === $b.equals(b) && (a.scissor(b.x, b.y, b.z, b.w), $b.copy(b));
      },
      viewport: function (b) {
        !1 === Jh.equals(b) && (a.viewport(b.x, b.y, b.z, b.w), Jh.copy(b));
      },
      reset: function () {
        for (var b = 0; b < w.length; b++) 1 === w[b] && (a.disableVertexAttribArray(b), w[b] = 0);

        F = {};
        P = null;
        Ke = {};
        L = J = Ca = I = null;
        p.reset();
        t.reset();
        v.reset();
      }
    };
  }

  function kk(a, b, c, d, e, f, g) {
    function h(a, b) {
      return C ? new OffscreenCanvas(a, b) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    }

    function l(a, b, c, d) {
      var e = 1;
      if (a.width > d || a.height > d) e = d / Math.max(a.width, a.height);

      if (1 > e || !0 === b) {
        if ("undefined" !== typeof HTMLImageElement && a instanceof HTMLImageElement || "undefined" !== typeof HTMLCanvasElement && a instanceof HTMLCanvasElement || "undefined" !== typeof ImageBitmap && a instanceof ImageBitmap) return d = b ? P.floorPowerOfTwo : Math.floor, b = d(e * a.width), e = d(e * a.height), void 0 === L && (L = h(b, e)), c = c ? h(b, e) : L, c.width = b, c.height = e, c.getContext("2d").drawImage(a, 0, 0, b, e), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + a.width + "x" + a.height + ") to (" + b + "x" + e + ")."), c;
        "data" in a && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + a.width + "x" + a.height + ").");
      }

      return a;
    }

    function m(a) {
      return P.isPowerOfTwo(a.width) && P.isPowerOfTwo(a.height);
    }

    function r(a, b) {
      return a.generateMipmaps && b && 1003 !== a.minFilter && 1006 !== a.minFilter;
    }

    function q(b, c, e, f) {
      a.generateMipmap(b);
      d.get(c).__maxMipLevel = Math.log(Math.max(e, f)) * Math.LOG2E;
    }

    function k(a, c) {
      if (!1 === la) return a;
      var d = a;
      6403 === a && (5126 === c && (d = 33326), 5131 === c && (d = 33325), 5121 === c && (d = 33321));
      6407 === a && (5126 === c && (d = 34837), 5131 === c && (d = 34843), 5121 === c && (d = 32849));
      6408 === a && (5126 === c && (d = 34836), 5131 === c && (d = 34842), 5121 === c && (d = 32856));
      33325 === d || 33326 === d || 34842 === d || 34836 === d ? b.get("EXT_color_buffer_float") : (34843 === d || 34837 === d) && console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead.");
      return d;
    }

    function p(a) {
      return 1003 === a || 1004 === a || 1005 === a ? 9728 : 9729;
    }

    function t(b) {
      b = b.target;
      b.removeEventListener("dispose", t);
      var c = d.get(b);
      void 0 !== c.__webglInit && (a.deleteTexture(c.__webglTexture), d.remove(b));
      b.isVideoTexture && J.delete(b);
      g.memory.textures--;
    }

    function v(b) {
      b = b.target;
      b.removeEventListener("dispose", v);
      var c = d.get(b),
          e = d.get(b.texture);

      if (b) {
        void 0 !== e.__webglTexture && a.deleteTexture(e.__webglTexture);
        b.depthTexture && b.depthTexture.dispose();
        if (b.isWebGLRenderTargetCube) for (e = 0; 6 > e; e++) a.deleteFramebuffer(c.__webglFramebuffer[e]), c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer[e]);else a.deleteFramebuffer(c.__webglFramebuffer), c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer);

        if (b.isWebGLMultiviewRenderTarget) {
          a.deleteTexture(c.__webglColorTexture);
          a.deleteTexture(c.__webglDepthStencilTexture);
          g.memory.textures -= 2;
          e = 0;

          for (var f = c.__webglViewFramebuffers.length; e < f; e++) a.deleteFramebuffer(c.__webglViewFramebuffers[e]);
        }

        d.remove(b.texture);
        d.remove(b);
      }

      g.memory.textures--;
    }

    function n(a, b) {
      var e = d.get(a);

      if (a.isVideoTexture) {
        var f = g.render.frame;
        J.get(a) !== f && (J.set(a, f), a.update());
      }

      if (0 < a.version && e.__version !== a.version) if (f = a.image, void 0 === f) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if (!1 === f.complete) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else {
        z(e, a, b);
        return;
      }
      c.activeTexture(33984 + b);
      c.bindTexture(3553, e.__webglTexture);
    }

    function w(b, e) {
      if (6 === b.image.length) {
        var g = d.get(b);

        if (0 < b.version && g.__version !== b.version) {
          I(g, b);
          c.activeTexture(33984 + e);
          c.bindTexture(34067, g.__webglTexture);
          a.pixelStorei(37440, b.flipY);
          var h = b && b.isCompressedTexture;
          e = b.image[0] && b.image[0].isDataTexture;

          for (var t = [], u = 0; 6 > u; u++) t[u] = h || e ? e ? b.image[u].image : b.image[u] : l(b.image[u], !1, !0, Hd);

          var p = t[0],
              v = m(p) || la,
              n = f.convert(b.format),
              y = f.convert(b.type),
              w = k(n, y);
          F(34067, b, v);

          if (h) {
            for (u = 0; 6 > u; u++) {
              var z = t[u].mipmaps;

              for (h = 0; h < z.length; h++) {
                var x = z[h];
                1023 !== b.format && 1022 !== b.format ? null !== n ? c.compressedTexImage2D(34069 + u, h, w, x.width, x.height, 0, x.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : c.texImage2D(34069 + u, h, w, x.width, x.height, 0, n, y, x.data);
              }
            }

            g.__maxMipLevel = z.length - 1;
          } else {
            z = b.mipmaps;

            for (u = 0; 6 > u; u++) if (e) for (c.texImage2D(34069 + u, 0, w, t[u].width, t[u].height, 0, n, y, t[u].data), h = 0; h < z.length; h++) x = z[h], x = x.image[u].image, c.texImage2D(34069 + u, h + 1, w, x.width, x.height, 0, n, y, x.data);else for (c.texImage2D(34069 + u, 0, w, n, y, t[u]), h = 0; h < z.length; h++) x = z[h], c.texImage2D(34069 + u, h + 1, w, n, y, x.image[u]);

            g.__maxMipLevel = z.length;
          }

          r(b, v) && q(34067, b, p.width, p.height);
          g.__version = b.version;
          if (b.onUpdate) b.onUpdate(b);
        } else c.activeTexture(33984 + e), c.bindTexture(34067, g.__webglTexture);
      }
    }

    function x(a, b) {
      c.activeTexture(33984 + b);
      c.bindTexture(34067, d.get(a).__webglTexture);
    }

    function F(c, f, g) {
      g ? (a.texParameteri(c, 10242, N[f.wrapS]), a.texParameteri(c, 10243, N[f.wrapT]), 32879 !== c && 35866 !== c || a.texParameteri(c, 32882, N[f.wrapR]), a.texParameteri(c, 10240, O[f.magFilter]), a.texParameteri(c, 10241, O[f.minFilter])) : (a.texParameteri(c, 10242, 33071), a.texParameteri(c, 10243, 33071), 32879 !== c && 35866 !== c || a.texParameteri(c, 32882, 33071), 1001 === f.wrapS && 1001 === f.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), a.texParameteri(c, 10240, p(f.magFilter)), a.texParameteri(c, 10241, p(f.minFilter)), 1003 !== f.minFilter && 1006 !== f.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
      !(g = b.get("EXT_texture_filter_anisotropic")) || 1015 === f.type && null === b.get("OES_texture_float_linear") || 1016 === f.type && null === (la || b.get("OES_texture_half_float_linear")) || !(1 < f.anisotropy || d.get(f).__currentAnisotropy) || (a.texParameterf(c, g.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(f.anisotropy, e.getMaxAnisotropy())), d.get(f).__currentAnisotropy = f.anisotropy);
    }

    function I(b, c) {
      void 0 === b.__webglInit && (b.__webglInit = !0, c.addEventListener("dispose", t), b.__webglTexture = a.createTexture(), g.memory.textures++);
    }

    function z(b, d, e) {
      var g = 3553;
      d.isDataTexture2DArray && (g = 35866);
      d.isDataTexture3D && (g = 32879);
      I(b, d);
      c.activeTexture(33984 + e);
      c.bindTexture(g, b.__webglTexture);
      a.pixelStorei(37440, d.flipY);
      a.pixelStorei(37441, d.premultiplyAlpha);
      a.pixelStorei(3317, d.unpackAlignment);
      e = la ? !1 : 1001 !== d.wrapS || 1001 !== d.wrapT || 1003 !== d.minFilter && 1006 !== d.minFilter;
      e = e && !1 === m(d.image);
      e = l(d.image, e, !1, E);
      var h = m(e) || la,
          u = f.convert(d.format),
          t = f.convert(d.type),
          p = k(u, t);
      F(g, d, h);
      var v = d.mipmaps;

      if (d.isDepthTexture) {
        p = 6402;

        if (1015 === d.type) {
          if (!1 === la) throw Error("Float Depth Texture only supported in WebGL2.0");
          p = 36012;
        } else la && (p = 33189);

        1026 === d.format && 6402 === p && 1012 !== d.type && 1014 !== d.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), d.type = 1012, t = f.convert(d.type));
        1027 === d.format && (p = 34041, 1020 !== d.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), d.type = 1020, t = f.convert(d.type)));
        c.texImage2D(3553, 0, p, e.width, e.height, 0, u, t, null);
      } else if (d.isDataTexture) {
        if (0 < v.length && h) {
          for (var n = 0, y = v.length; n < y; n++) g = v[n], c.texImage2D(3553, n, p, g.width, g.height, 0, u, t, g.data);

          d.generateMipmaps = !1;
          b.__maxMipLevel = v.length - 1;
        } else c.texImage2D(3553, 0, p, e.width, e.height, 0, u, t, e.data), b.__maxMipLevel = 0;
      } else if (d.isCompressedTexture) {
        n = 0;

        for (y = v.length; n < y; n++) g = v[n], 1023 !== d.format && 1022 !== d.format ? null !== u ? c.compressedTexImage2D(3553, n, p, g.width, g.height, 0, g.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : c.texImage2D(3553, n, p, g.width, g.height, 0, u, t, g.data);

        b.__maxMipLevel = v.length - 1;
      } else if (d.isDataTexture2DArray) c.texImage3D(35866, 0, p, e.width, e.height, e.depth, 0, u, t, e.data), b.__maxMipLevel = 0;else if (d.isDataTexture3D) c.texImage3D(32879, 0, p, e.width, e.height, e.depth, 0, u, t, e.data), b.__maxMipLevel = 0;else if (0 < v.length && h) {
        n = 0;

        for (y = v.length; n < y; n++) g = v[n], c.texImage2D(3553, n, p, u, t, g);

        d.generateMipmaps = !1;
        b.__maxMipLevel = v.length - 1;
      } else c.texImage2D(3553, 0, p, u, t, e), b.__maxMipLevel = 0;

      r(d, h) && q(3553, d, e.width, e.height);
      b.__version = d.version;
      if (d.onUpdate) d.onUpdate(d);
    }

    function B(b, e, g, h) {
      var l = f.convert(e.texture.format),
          m = f.convert(e.texture.type),
          r = k(l, m);
      c.texImage2D(h, 0, r, e.width, e.height, 0, l, m, null);
      a.bindFramebuffer(36160, b);
      a.framebufferTexture2D(36160, g, h, d.get(e.texture).__webglTexture, 0);
      a.bindFramebuffer(36160, null);
    }

    function ia(b, c, d) {
      a.bindRenderbuffer(36161, b);
      if (c.depthBuffer && !c.stencilBuffer) d ? (d = A(c), a.renderbufferStorageMultisample(36161, d, 33189, c.width, c.height)) : a.renderbufferStorage(36161, 33189, c.width, c.height), a.framebufferRenderbuffer(36160, 36096, 36161, b);else if (c.depthBuffer && c.stencilBuffer) d ? (d = A(c), a.renderbufferStorageMultisample(36161, d, 35056, c.width, c.height)) : a.renderbufferStorage(36161, 34041, c.width, c.height), a.framebufferRenderbuffer(36160, 33306, 36161, b);else {
        b = f.convert(c.texture.format);
        var e = f.convert(c.texture.type);
        b = k(b, e);
        d ? (d = A(c), a.renderbufferStorageMultisample(36161, d, b, c.width, c.height)) : a.renderbufferStorage(36161, b, c.width, c.height);
      }
      a.bindRenderbuffer(36161, null);
    }

    function A(a) {
      return la && a.isWebGLMultisampleRenderTarget ? Math.min(D, a.samples) : 0;
    }

    var la = e.isWebGL2,
        H = e.maxTextures,
        Hd = e.maxCubemapSize,
        E = e.maxTextureSize,
        D = e.maxSamples,
        J = new WeakMap(),
        L,
        C = "undefined" !== typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d"),
        G = 0,
        N = {
      1E3: 10497,
      1001: 33071,
      1002: 33648
    },
        O = {
      1003: 9728,
      1004: 9984,
      1005: 9986,
      1006: 9729,
      1007: 9985,
      1008: 9987
    },
        Q = !1,
        S = !1;

    this.allocateTextureUnit = function () {
      var a = G;
      a >= H && console.warn("THREE.WebGLTextures: Trying to use " + a + " texture units while this GPU supports only " + H);
      G += 1;
      return a;
    };

    this.resetTextureUnits = function () {
      G = 0;
    };

    this.setTexture2D = n;

    this.setTexture2DArray = function (a, b) {
      var e = d.get(a);
      0 < a.version && e.__version !== a.version ? z(e, a, b) : (c.activeTexture(33984 + b), c.bindTexture(35866, e.__webglTexture));
    };

    this.setTexture3D = function (a, b) {
      var e = d.get(a);
      0 < a.version && e.__version !== a.version ? z(e, a, b) : (c.activeTexture(33984 + b), c.bindTexture(32879, e.__webglTexture));
    };

    this.setTextureCube = w;
    this.setTextureCubeDynamic = x;

    this.setupRenderTarget = function (e) {
      var h = d.get(e),
          l = d.get(e.texture);
      e.addEventListener("dispose", v);
      l.__webglTexture = a.createTexture();
      g.memory.textures++;
      var u = !0 === e.isWebGLRenderTargetCube,
          t = !0 === e.isWebGLMultisampleRenderTarget,
          p = !0 === e.isWebGLMultiviewRenderTarget,
          y = m(e) || la;

      if (u) {
        h.__webglFramebuffer = [];

        for (var w = 0; 6 > w; w++) h.__webglFramebuffer[w] = a.createFramebuffer();
      } else if (h.__webglFramebuffer = a.createFramebuffer(), t) {
        if (la) {
          h.__webglMultisampledFramebuffer = a.createFramebuffer();
          h.__webglColorRenderbuffer = a.createRenderbuffer();
          a.bindRenderbuffer(36161, h.__webglColorRenderbuffer);
          t = f.convert(e.texture.format);
          var z = f.convert(e.texture.type);
          t = k(t, z);
          z = A(e);
          a.renderbufferStorageMultisample(36161, z, t, e.width, e.height);
          a.bindFramebuffer(36160, h.__webglMultisampledFramebuffer);
          a.framebufferRenderbuffer(36160, 36064, 36161, h.__webglColorRenderbuffer);
          a.bindRenderbuffer(36161, null);
          e.depthBuffer && (h.__webglDepthRenderbuffer = a.createRenderbuffer(), ia(h.__webglDepthRenderbuffer, e, !0));
          a.bindFramebuffer(36160, null);
        } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
      } else if (p) {
        w = e.width;
        var x = e.height;
        t = e.numViews;
        a.bindFramebuffer(36160, h.__webglFramebuffer);
        var I = b.get("OVR_multiview2");
        g.memory.textures += 2;
        z = a.createTexture();
        a.bindTexture(35866, z);
        a.texParameteri(35866, 10240, 9728);
        a.texParameteri(35866, 10241, 9728);
        a.texImage3D(35866, 0, 32856, w, x, t, 0, 6408, 5121, null);
        I.framebufferTextureMultiviewOVR(36160, 36064, z, 0, 0, t);
        var H = a.createTexture();
        a.bindTexture(35866, H);
        a.texParameteri(35866, 10240, 9728);
        a.texParameteri(35866, 10241, 9728);
        a.texImage3D(35866, 0, 35056, w, x, t, 0, 34041, 34042, null);
        I.framebufferTextureMultiviewOVR(36160, 33306, H, 0, 0, t);
        x = Array(t);

        for (w = 0; w < t; ++w) x[w] = a.createFramebuffer(), a.bindFramebuffer(36160, x[w]), a.framebufferTextureLayer(36160, 36064, z, 0, w);

        h.__webglColorTexture = z;
        h.__webglDepthStencilTexture = H;
        h.__webglViewFramebuffers = x;
        a.bindFramebuffer(36160, null);
        a.bindTexture(35866, null);
      }

      if (u) {
        c.bindTexture(34067, l.__webglTexture);
        F(34067, e.texture, y);

        for (w = 0; 6 > w; w++) B(h.__webglFramebuffer[w], e, 36064, 34069 + w);

        r(e.texture, y) && q(34067, e.texture, e.width, e.height);
        c.bindTexture(34067, null);
      } else p || (c.bindTexture(3553, l.__webglTexture), F(3553, e.texture, y), B(h.__webglFramebuffer, e, 36064, 3553), r(e.texture, y) && q(3553, e.texture, e.width, e.height), c.bindTexture(3553, null));

      if (e.depthBuffer) {
        h = d.get(e);
        l = !0 === e.isWebGLRenderTargetCube;

        if (e.depthTexture) {
          if (l) throw Error("target.depthTexture not supported in Cube render targets");
          if (e && e.isWebGLRenderTargetCube) throw Error("Depth Texture with cube render targets is not supported");
          a.bindFramebuffer(36160, h.__webglFramebuffer);
          if (!e.depthTexture || !e.depthTexture.isDepthTexture) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          d.get(e.depthTexture).__webglTexture && e.depthTexture.image.width === e.width && e.depthTexture.image.height === e.height || (e.depthTexture.image.width = e.width, e.depthTexture.image.height = e.height, e.depthTexture.needsUpdate = !0);
          n(e.depthTexture, 0);
          h = d.get(e.depthTexture).__webglTexture;
          if (1026 === e.depthTexture.format) a.framebufferTexture2D(36160, 36096, 3553, h, 0);else if (1027 === e.depthTexture.format) a.framebufferTexture2D(36160, 33306, 3553, h, 0);else throw Error("Unknown depthTexture format");
        } else if (l) for (h.__webglDepthbuffer = [], l = 0; 6 > l; l++) a.bindFramebuffer(36160, h.__webglFramebuffer[l]), h.__webglDepthbuffer[l] = a.createRenderbuffer(), ia(h.__webglDepthbuffer[l], e);else a.bindFramebuffer(36160, h.__webglFramebuffer), h.__webglDepthbuffer = a.createRenderbuffer(), ia(h.__webglDepthbuffer, e);

        a.bindFramebuffer(36160, null);
      }
    };

    this.updateRenderTargetMipmap = function (a) {
      var b = a.texture,
          e = m(a) || la;

      if (r(b, e)) {
        e = a.isWebGLRenderTargetCube ? 34067 : 3553;

        var f = d.get(b).__webglTexture;

        c.bindTexture(e, f);
        q(e, b, a.width, a.height);
        c.bindTexture(e, null);
      }
    };

    this.updateMultisampleRenderTarget = function (b) {
      if (b.isWebGLMultisampleRenderTarget) if (la) {
        var c = d.get(b);
        a.bindFramebuffer(36008, c.__webglMultisampledFramebuffer);
        a.bindFramebuffer(36009, c.__webglFramebuffer);
        c = b.width;
        var e = b.height,
            f = 16384;
        b.depthBuffer && (f |= 256);
        b.stencilBuffer && (f |= 1024);
        a.blitFramebuffer(0, 0, c, e, 0, 0, c, e, f, 9728);
      } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
    };

    this.safeSetTexture2D = function (a, b) {
      a && a.isWebGLRenderTarget && (!1 === Q && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), Q = !0), a = a.texture);
      n(a, b);
    };

    this.safeSetTextureCube = function (a, b) {
      a && a.isWebGLRenderTargetCube && (!1 === S && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), S = !0), a = a.texture);
      a && a.isCubeTexture || Array.isArray(a.image) && 6 === a.image.length ? w(a, b) : x(a, b);
    };
  }

  function Kh(a, b, c) {
    var d = c.isWebGL2;
    return {
      convert: function (a) {
        if (1009 === a) return 5121;
        if (1017 === a) return 32819;
        if (1018 === a) return 32820;
        if (1019 === a) return 33635;
        if (1010 === a) return 5120;
        if (1011 === a) return 5122;
        if (1012 === a) return 5123;
        if (1013 === a) return 5124;
        if (1014 === a) return 5125;
        if (1015 === a) return 5126;

        if (1016 === a) {
          if (d) return 5131;
          var c = b.get("OES_texture_half_float");
          return null !== c ? c.HALF_FLOAT_OES : null;
        }

        if (1021 === a) return 6406;
        if (1022 === a) return 6407;
        if (1023 === a) return 6408;
        if (1024 === a) return 6409;
        if (1025 === a) return 6410;
        if (1026 === a) return 6402;
        if (1027 === a) return 34041;
        if (1028 === a) return 6403;
        if (33776 === a || 33777 === a || 33778 === a || 33779 === a) if (c = b.get("WEBGL_compressed_texture_s3tc"), null !== c) {
          if (33776 === a) return c.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (33777 === a) return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (33778 === a) return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (33779 === a) return c.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        } else return null;
        if (35840 === a || 35841 === a || 35842 === a || 35843 === a) if (c = b.get("WEBGL_compressed_texture_pvrtc"), null !== c) {
          if (35840 === a) return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
          if (35841 === a) return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
          if (35842 === a) return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
          if (35843 === a) return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        } else return null;
        if (36196 === a) return c = b.get("WEBGL_compressed_texture_etc1"), null !== c ? c.COMPRESSED_RGB_ETC1_WEBGL : null;
        if (37808 === a || 37809 === a || 37810 === a || 37811 === a || 37812 === a || 37813 === a || 37814 === a || 37815 === a || 37816 === a || 37817 === a || 37818 === a || 37819 === a || 37820 === a || 37821 === a) return c = b.get("WEBGL_compressed_texture_astc"), null !== c ? a : null;

        if (1020 === a) {
          if (d) return 34042;
          c = b.get("WEBGL_depth_texture");
          return null !== c ? c.UNSIGNED_INT_24_8_WEBGL : null;
        }
      }
    };
  }

  function fg(a, b, c, d) {
    Ba.call(this, a, b, d);
    this.stencilBuffer = this.depthBuffer = !1;
    this.numViews = c;
  }

  function lk(a, b) {
    function c(a) {
      if (a.isArrayCamera) return a.cameras;
      r[0] = a;
      return r;
    }

    function d(a) {
      if (void 0 === a.isArrayCamera) return !0;
      a = a.cameras;
      if (a.length > p) return !1;

      for (var b = 1, c = a.length; b < c; b++) if (a[0].viewport.z !== a[b].viewport.z || a[0].viewport.w !== a[b].viewport.w) return !1;

      return !0;
    }

    var e = a.extensions,
        f = a.properties,
        g,
        h,
        l,
        m,
        r,
        q,
        k,
        p = 0;

    this.isAvailable = function () {
      if (void 0 === k) {
        var a = e.get("OVR_multiview2");
        if (k = null !== a && !1 === b.getContextAttributes().antialias) for (p = b.getParameter(a.MAX_VIEWS_OVR), g = new fg(0, 0, 2), q = new B(), m = [], l = [], r = [], a = 0; a < p; a++) m[a] = new Q(), l[a] = new Z();
      }

      return k;
    };

    this.attachCamera = function (b) {
      if (!1 !== d(b)) {
        (h = a.getRenderTarget()) ? q.set(h.width, h.height) : a.getDrawingBufferSize(q);

        if (b.isArrayCamera) {
          var c = b.cameras[0].viewport;
          g.setSize(c.z, c.w);
          g.setNumViews(b.cameras.length);
        } else g.setSize(q.x, q.y), g.setNumViews(2);

        a.setRenderTarget(g);
      }
    };

    this.detachCamera = function (c) {
      if (g === a.getRenderTarget()) {
        a.setRenderTarget(h);

        var d = g,
            e = d.numViews,
            l = f.get(d).__webglViewFramebuffers,
            m = d.width;

        d = d.height;
        if (c.isArrayCamera) for (var r = 0; r < e; r++) {
          var k = c.cameras[r].viewport,
              u = k.x,
              p = k.y,
              t = u + k.z;
          k = p + k.w;
          b.bindFramebuffer(36008, l[r]);
          b.blitFramebuffer(0, 0, m, d, u, p, t, k, 16384, 9728);
        } else b.bindFramebuffer(36008, l[0]), b.blitFramebuffer(0, 0, m, d, 0, 0, q.x, q.y, 16384, 9728);
      }
    };

    this.updateCameraProjectionMatricesUniform = function (a, d) {
      a = c(a);

      for (var e = 0; e < a.length; e++) m[e].copy(a[e].projectionMatrix);

      d.setValue(b, "projectionMatrices", m);
    };

    this.updateCameraViewMatricesUniform = function (a, d) {
      a = c(a);

      for (var e = 0; e < a.length; e++) m[e].copy(a[e].matrixWorldInverse);

      d.setValue(b, "viewMatrices", m);
    };

    this.updateObjectMatricesUniforms = function (a, d, e) {
      d = c(d);

      for (var f = 0; f < d.length; f++) m[f].multiplyMatrices(d[f].matrixWorldInverse, a.matrixWorld), l[f].getNormalMatrix(m[f]);

      e.setValue(b, "modelViewMatrices", m);
      e.setValue(b, "normalMatrices", l);
    };
  }

  function Gc() {
    E.call(this);
    this.type = "Group";
  }

  function Jd(a) {
    U.call(this);
    this.cameras = a || [];
  }

  function Lh(a, b, c) {
    Mh.setFromMatrixPosition(b.matrixWorld);
    Nh.setFromMatrixPosition(c.matrixWorld);
    var d = Mh.distanceTo(Nh),
        e = b.projectionMatrix.elements,
        f = c.projectionMatrix.elements,
        g = e[14] / (e[10] - 1);
    c = e[14] / (e[10] + 1);
    var h = (e[9] + 1) / e[5],
        l = (e[9] - 1) / e[5],
        m = (e[8] - 1) / e[0],
        r = (f[8] + 1) / f[0];
    e = g * m;
    f = g * r;
    r = d / (-m + r);
    m = r * -m;
    b.matrixWorld.decompose(a.position, a.quaternion, a.scale);
    a.translateX(m);
    a.translateZ(r);
    a.matrixWorld.compose(a.position, a.quaternion, a.scale);
    a.matrixWorldInverse.getInverse(a.matrixWorld);
    b = g + r;
    g = c + r;
    a.projectionMatrix.makePerspective(e - m, f + (d - m), h * c / g * b, l * c / g * b, b, g);
  }

  function gg(a) {
    function b() {
      return null !== h && !0 === h.isPresenting;
    }

    function c() {
      if (b()) {
        var c = h.getEyeParameters("left");
        e = 2 * c.renderWidth * p;
        f = c.renderHeight * p;
        Ca = a.getPixelRatio();
        a.getSize(z);
        a.setDrawingBufferSize(e, f, 1);
        x.viewport.set(0, 0, e / 2, f);
        F.viewport.set(e / 2, 0, e / 2, f);
        A.start();
        g.dispatchEvent({
          type: "sessionstart"
        });
      } else g.enabled && a.setDrawingBufferSize(z.width, z.height, Ca), A.stop(), g.dispatchEvent({
        type: "sessionend"
      });
    }

    function d(a, b) {
      null !== b && 4 === b.length && a.set(b[0] * e, b[1] * f, b[2] * e, b[3] * f);
    }

    var e,
        f,
        g = this,
        h = null,
        l = null,
        m = null,
        r = [],
        q = new Q(),
        k = new Q(),
        p = 1,
        t = "local-floor";
    "undefined" !== typeof window && "VRFrameData" in window && (l = new window.VRFrameData(), window.addEventListener("vrdisplaypresentchange", c, !1));
    var v = new Q(),
        y = new wa(),
        w = new n(),
        x = new U();
    x.viewport = new da();
    x.layers.enable(1);
    var F = new U();
    F.viewport = new da();
    F.layers.enable(2);
    var I = new Jd([x, F]);
    I.layers.enable(1);
    I.layers.enable(2);
    var z = new B(),
        Ca,
        ia = [];
    this.enabled = !1;

    this.getController = function (a) {
      var b = r[a];
      void 0 === b && (b = new Gc(), b.matrixAutoUpdate = !1, b.visible = !1, r[a] = b);
      return b;
    };

    this.getDevice = function () {
      return h;
    };

    this.setDevice = function (a) {
      void 0 !== a && (h = a);
      A.setContext(a);
    };

    this.setFramebufferScaleFactor = function (a) {
      p = a;
    };

    this.setReferenceSpaceType = function (a) {
      t = a;
    };

    this.setPoseTarget = function (a) {
      void 0 !== a && (m = a);
    };

    this.getCamera = function (a) {
      var c = "local-floor" === t ? 1.6 : 0;
      if (!1 === b()) return a.position.set(0, c, 0), a.rotation.set(0, 0, 0), a;
      h.depthNear = a.near;
      h.depthFar = a.far;
      h.getFrameData(l);

      if ("local-floor" === t) {
        var e = h.stageParameters;
        e ? q.fromArray(e.sittingToStandingTransform) : q.makeTranslation(0, c, 0);
      }

      c = l.pose;
      e = null !== m ? m : a;
      e.matrix.copy(q);
      e.matrix.decompose(e.position, e.quaternion, e.scale);
      null !== c.orientation && (y.fromArray(c.orientation), e.quaternion.multiply(y));
      null !== c.position && (y.setFromRotationMatrix(q), w.fromArray(c.position), w.applyQuaternion(y), e.position.add(w));
      e.updateMatrixWorld();
      x.near = a.near;
      F.near = a.near;
      x.far = a.far;
      F.far = a.far;
      x.matrixWorldInverse.fromArray(l.leftViewMatrix);
      F.matrixWorldInverse.fromArray(l.rightViewMatrix);
      k.getInverse(q);
      "local-floor" === t && (x.matrixWorldInverse.multiply(k), F.matrixWorldInverse.multiply(k));
      a = e.parent;
      null !== a && (v.getInverse(a.matrixWorld), x.matrixWorldInverse.multiply(v), F.matrixWorldInverse.multiply(v));
      x.matrixWorld.getInverse(x.matrixWorldInverse);
      F.matrixWorld.getInverse(F.matrixWorldInverse);
      x.projectionMatrix.fromArray(l.leftProjectionMatrix);
      F.projectionMatrix.fromArray(l.rightProjectionMatrix);
      Lh(I, x, F);
      a = h.getLayers();
      a.length && (a = a[0], d(x.viewport, a.leftBounds), d(F.viewport, a.rightBounds));

      a: for (a = 0; a < r.length; a++) {
        c = r[a];

        b: {
          e = a;

          for (var f = navigator.getGamepads && navigator.getGamepads(), g = 0, u = f.length; g < u; g++) {
            var p = f[g];

            if (p && ("Daydream Controller" === p.id || "Gear VR Controller" === p.id || "Oculus Go Controller" === p.id || "OpenVR Gamepad" === p.id || p.id.startsWith("Oculus Touch") || p.id.startsWith("HTC Vive Focus") || p.id.startsWith("Spatial Controller"))) {
              var n = p.hand;

              if (0 === e && ("" === n || "right" === n) || 1 === e && "left" === n) {
                e = p;
                break b;
              }
            }
          }

          e = void 0;
        }

        if (void 0 !== e && void 0 !== e.pose) {
          if (null === e.pose) break a;
          f = e.pose;
          !1 === f.hasPosition && c.position.set(.2, -.6, -.05);
          null !== f.position && c.position.fromArray(f.position);
          null !== f.orientation && c.quaternion.fromArray(f.orientation);
          c.matrix.compose(c.position, c.quaternion, c.scale);
          c.matrix.premultiply(q);
          c.matrix.decompose(c.position, c.quaternion, c.scale);
          c.matrixWorldNeedsUpdate = !0;
          c.visible = !0;
          f = "Daydream Controller" === e.id ? 0 : 1;
          void 0 === ia[a] && (ia[a] = !1);
          ia[a] !== e.buttons[f].pressed && (ia[a] = e.buttons[f].pressed, !0 === ia[a] ? c.dispatchEvent({
            type: "selectstart"
          }) : (c.dispatchEvent({
            type: "selectend"
          }), c.dispatchEvent({
            type: "select"
          })));
        } else c.visible = !1;
      }

      return I;
    };

    this.getStandingMatrix = function () {
      return q;
    };

    this.isPresenting = b;
    var A = new ag();

    this.setAnimationLoop = function (a) {
      A.setAnimationLoop(a);
      b() && A.start();
    };

    this.submitFrame = function () {
      b() && h.submitFrame();
    };

    this.dispose = function () {
      "undefined" !== typeof window && window.removeEventListener("vrdisplaypresentchange", c);
    };

    this.setFrameOfReferenceType = function () {
      console.warn("THREE.WebVRManager: setFrameOfReferenceType() has been deprecated.");
    };
  }

  function Oh(a, b) {
    function c() {
      return null !== m && null !== r;
    }

    function d(a) {
      for (var b = 0; b < p.length; b++) t[b] === a.inputSource && p[b].dispatchEvent({
        type: a.type
      });
    }

    function e() {
      a.setFramebuffer(null);
      a.setRenderTarget(a.getRenderTarget());
      F.stop();
      l.dispatchEvent({
        type: "sessionend"
      });
    }

    function f(a) {
      r = a;
      F.setContext(m);
      F.start();
      l.dispatchEvent({
        type: "sessionstart"
      });
    }

    function g() {
      for (var a = 0; a < p.length; a++) {
        var b = a;

        a: {
          var c = m.inputSources;

          for (var d = 0; d < c.length; d++) {
            var e = c[d],
                f = e.handedness;

            if (0 === a && ("none" === f || "right" === f)) {
              c = e;
              break a;
            }

            if (1 === a && "left" === f) {
              c = e;
              break a;
            }
          }

          c = void 0;
        }

        t[b] = c;
      }
    }

    function h(a, b) {
      null === b ? a.matrixWorld.copy(a.matrix) : a.matrixWorld.multiplyMatrices(b.matrixWorld, a.matrix);
      a.matrixWorldInverse.getInverse(a.matrixWorld);
    }

    var l = this,
        m = null,
        r = null,
        q = "local-floor",
        k = null,
        p = [],
        t = [],
        n = new U();
    n.layers.enable(1);
    n.viewport = new da();
    var y = new U();
    y.layers.enable(2);
    y.viewport = new da();
    var w = new Jd([n, y]);
    w.layers.enable(1);
    w.layers.enable(2);
    this.enabled = !1;

    this.getController = function (a) {
      var b = p[a];
      void 0 === b && (b = new Gc(), b.matrixAutoUpdate = !1, b.visible = !1, p[a] = b);
      return b;
    };

    this.setFramebufferScaleFactor = function () {};

    this.setReferenceSpaceType = function (a) {
      q = a;
    };

    this.getSession = function () {
      return m;
    };

    this.setSession = function (a) {
      m = a;
      null !== m && (m.addEventListener("select", d), m.addEventListener("selectstart", d), m.addEventListener("selectend", d), m.addEventListener("end", e), m.updateRenderState({
        baseLayer: new XRWebGLLayer(m, b)
      }), m.requestReferenceSpace(q).then(f), m.addEventListener("inputsourceschange", g), g());
    };

    this.getCamera = function (a) {
      if (c()) {
        var b = a.parent,
            d = w.cameras;
        h(w, b);

        for (var e = 0; e < d.length; e++) h(d[e], b);

        a.matrixWorld.copy(w.matrixWorld);
        a = a.children;
        e = 0;

        for (b = a.length; e < b; e++) a[e].updateMatrixWorld(!0);

        Lh(w, n, y);
        return w;
      }

      return a;
    };

    this.isPresenting = c;
    var x = null,
        F = new ag();
    F.setAnimationLoop(function (b, c) {
      k = c.getViewerPose(r);

      if (null !== k) {
        var d = k.views,
            e = m.renderState.baseLayer;
        a.setFramebuffer(e.framebuffer);

        for (var f = 0; f < d.length; f++) {
          var g = d[f],
              h = e.getViewport(g),
              l = w.cameras[f];
          l.matrix.fromArray(g.transform.inverse.matrix).getInverse(l.matrix);
          l.projectionMatrix.fromArray(g.projectionMatrix);
          l.viewport.set(h.x, h.y, h.width, h.height);
          0 === f && w.matrix.copy(l.matrix);
        }
      }

      for (f = 0; f < p.length; f++) {
        d = p[f];
        if (e = t[f]) if (e = c.getPose(e.targetRaySpace, r), null !== e) {
          d.matrix.fromArray(e.transform.matrix);
          d.matrix.decompose(d.position, d.rotation, d.scale);
          d.visible = !0;
          continue;
        }
        d.visible = !1;
      }

      x && x(b);
    });

    this.setAnimationLoop = function (a) {
      x = a;
    };

    this.dispose = function () {};

    this.getStandingMatrix = function () {
      console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed.");
      return new Q();
    };

    this.getDevice = function () {
      console.warn("THREE.WebXRManager: getDevice() has been deprecated.");
    };

    this.setDevice = function () {
      console.warn("THREE.WebXRManager: setDevice() has been deprecated.");
    };

    this.setFrameOfReferenceType = function () {
      console.warn("THREE.WebXRManager: setFrameOfReferenceType() has been deprecated.");
    };

    this.submitFrame = function () {};
  }

  function hg(a) {
    var b;

    function c() {
      qa = new bj(K);
      Fa = new $i(K, qa, a);
      !1 === Fa.isWebGL2 && (qa.get("WEBGL_depth_texture"), qa.get("OES_texture_float"), qa.get("OES_texture_half_float"), qa.get("OES_texture_half_float_linear"), qa.get("OES_standard_derivatives"), qa.get("OES_element_index_uint"), qa.get("ANGLE_instanced_arrays"));
      qa.get("OES_texture_float_linear");
      pa = new Kh(K, qa, Fa);
      aa = new jk(K, qa, Fa);
      aa.scissor(ob.copy(U).multiplyScalar(fa).floor());
      aa.viewport(T.copy(ea).multiplyScalar(fa).floor());
      ca = new ej(K);
      Z = new ak();
      ba = new kk(K, qa, aa, Z, Fa, pa, ca);
      ra = new Xi(K);
      xa = new cj(K, ra, ca);
      sa = new hj(K, xa, ra, ca);
      ya = new gj(K);
      oa = new Zj(G, qa, Fa);
      wa = new dk();
      va = new ik();
      ma = new Yi(G, aa, sa, A);
      Aa = new Zi(K, qa, ca, Fa);
      Ba = new dj(K, qa, ca, Fa);
      ca.programs = oa.programs;
      G.capabilities = Fa;
      G.extensions = qa;
      G.properties = Z;
      G.renderLists = wa;
      G.state = aa;
      G.info = ca;
    }

    function d(a) {
      a.preventDefault();
      console.log("THREE.WebGLRenderer: Context Lost.");
      N = !0;
    }

    function e() {
      console.log("THREE.WebGLRenderer: Context Restored.");
      N = !1;
      c();
    }

    function f(a) {
      a = a.target;
      a.removeEventListener("dispose", f);
      g(a);
      Z.remove(a);
    }

    function g(a) {
      var b = Z.get(a).program;
      a.program = void 0;
      void 0 !== b && oa.releaseProgram(b);
    }

    function h(a, b) {
      a.render(function (a) {
        G.renderBufferImmediate(a, b);
      });
    }

    function l(a, b, c, d) {
      if (!1 !== a.visible) {
        if (a.layers.test(b.layers)) if (a.isGroup) c = a.renderOrder;else if (a.isLOD) !0 === a.autoUpdate && a.update(b);else if (a.isLight) C.pushLight(a), a.castShadow && C.pushShadow(a);else if (a.isSprite) {
          if (!a.frustumCulled || eg.intersectsSprite(a)) {
            d && Fb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Id);
            var e = sa.update(a),
                f = a.material;
            f.visible && H.push(a, e, f, c, Fb.z, null);
          }
        } else if (a.isImmediateRenderObject) d && Fb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Id), H.push(a, null, a.material, c, Fb.z, null);else if (a.isMesh || a.isLine || a.isPoints) if (a.isSkinnedMesh && a.skeleton.frame !== ca.render.frame && (a.skeleton.update(), a.skeleton.frame = ca.render.frame), !a.frustumCulled || eg.intersectsObject(a)) if (d && Fb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Id), e = sa.update(a), f = a.material, Array.isArray(f)) for (var g = e.groups, h = 0, m = g.length; h < m; h++) {
          var r = g[h],
              q = f[r.materialIndex];
          q && q.visible && H.push(a, e, q, c, Fb.z, r);
        } else f.visible && H.push(a, e, f, c, Fb.z, null);
        a = a.children;
        h = 0;

        for (m = a.length; h < m; h++) l(a[h], b, c, d);
      }
    }

    function m(a, b, c, d) {
      for (var e = 0, f = a.length; e < f; e++) {
        var g = a[e],
            h = g.object,
            l = g.geometry,
            m = void 0 === d ? g.material : d;
        g = g.group;
        if (c.isArrayCamera) {
          if ($b = c, ja.enabled && ua.isAvailable()) r(h, b, c, l, m, g);else for (var q = c.cameras, k = 0, p = q.length; k < p; k++) {
            var u = q[k];
            h.layers.test(u.layers) && (aa.viewport(T.copy(u.viewport)), C.setupLights(u), r(h, b, u, l, m, g));
          }
        } else $b = null, r(h, b, c, l, m, g);
      }
    }

    function r(a, c, d, e, f, g) {
      a.onBeforeRender(G, c, d, e, f, g);
      C = va.get(c, $b || d);
      a.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse, a.matrixWorld);
      a.normalMatrix.getNormalMatrix(a.modelViewMatrix);

      if (a.isImmediateRenderObject) {
        aa.setMaterial(f);
        var l = k(d, c.fog, f, a);
        Je = b = null;
        Y = !1;
        h(a, l);
      } else G.renderBufferDirect(d, c.fog, e, f, a, g);

      a.onAfterRender(G, c, d, e, f, g);
      C = va.get(c, $b || d);
    }

    function q(a, b, c) {
      var d = Z.get(a),
          e = C.state.lights,
          h = e.state.version;
      c = oa.getParameters(a, e.state, C.state.shadowsArray, b, Pa.numPlanes, Pa.numIntersection, c);
      var l = oa.getProgramCacheKey(a, c),
          m = d.program,
          r = !0;
      if (void 0 === m) a.addEventListener("dispose", f);else if (m.cacheKey !== l) g(a);else {
        if (d.lightsStateVersion !== h) d.lightsStateVersion = h;else if (void 0 !== c.shaderID) return;
        r = !1;
      }
      r && (c.shaderID ? (l = cb[c.shaderID], d.shader = {
        name: a.type,
        uniforms: Xb(l.uniforms),
        vertexShader: l.vertexShader,
        fragmentShader: l.fragmentShader
      }) : d.shader = {
        name: a.type,
        uniforms: a.uniforms,
        vertexShader: a.vertexShader,
        fragmentShader: a.fragmentShader
      }, a.onBeforeCompile(d.shader, G), l = oa.getProgramCacheKey(a, c), m = oa.acquireProgram(a, d.shader, c, l), d.program = m, a.program = m);
      c = m.getAttributes();
      if (a.morphTargets) for (l = a.numSupportedMorphTargets = 0; l < G.maxMorphTargets; l++) 0 <= c["morphTarget" + l] && a.numSupportedMorphTargets++;
      if (a.morphNormals) for (l = a.numSupportedMorphNormals = 0; l < G.maxMorphNormals; l++) 0 <= c["morphNormal" + l] && a.numSupportedMorphNormals++;
      c = d.shader.uniforms;
      if (!a.isShaderMaterial && !a.isRawShaderMaterial || !0 === a.clipping) d.numClippingPlanes = Pa.numPlanes, d.numIntersection = Pa.numIntersection, c.clippingPlanes = Pa.uniform;
      d.fog = b;
      d.needsLights = a.isMeshLambertMaterial || a.isMeshPhongMaterial || a.isMeshStandardMaterial || a.isShadowMaterial || a.isShaderMaterial && !0 === a.lights;
      d.lightsStateVersion = h;
      d.needsLights && (c.ambientLightColor.value = e.state.ambient, c.lightProbe.value = e.state.probe, c.directionalLights.value = e.state.directional, c.spotLights.value = e.state.spot, c.rectAreaLights.value = e.state.rectArea, c.pointLights.value = e.state.point, c.hemisphereLights.value = e.state.hemi, c.directionalShadowMap.value = e.state.directionalShadowMap, c.directionalShadowMatrix.value = e.state.directionalShadowMatrix, c.spotShadowMap.value = e.state.spotShadowMap, c.spotShadowMatrix.value = e.state.spotShadowMatrix, c.pointShadowMap.value = e.state.pointShadowMap, c.pointShadowMatrix.value = e.state.pointShadowMatrix);
      a = d.program.getUniforms();
      a = Cb.seqWithValue(a.seq, c);
      d.uniformsList = a;
    }

    function k(a, b, c, d) {
      ba.resetTextureUnits();
      var e = Z.get(c),
          f = C.state.lights;
      He && (ta || a !== X) && Pa.setState(c.clippingPlanes, c.clipIntersection, c.clipShadows, a, e, a === X && c.id === ha);
      !1 === c.needsUpdate && (void 0 === e.program ? c.needsUpdate = !0 : c.fog && e.fog !== b ? c.needsUpdate = !0 : e.needsLights && e.lightsStateVersion !== f.state.version ? c.needsUpdate = !0 : void 0 === e.numClippingPlanes || e.numClippingPlanes === Pa.numPlanes && e.numIntersection === Pa.numIntersection || (c.needsUpdate = !0));
      c.needsUpdate && (q(c, b, d), c.needsUpdate = !1);
      var g = !1,
          h = !1,
          l = !1;
      f = e.program;
      var m = f.getUniforms(),
          r = e.shader.uniforms;
      aa.useProgram(f.program) && (l = h = g = !0);
      c.id !== ha && (ha = c.id, h = !0);

      if (g || X !== a) {
        0 < f.numMultiviewViews ? ua.updateCameraProjectionMatricesUniform(a, m) : m.setValue(K, "projectionMatrix", a.projectionMatrix);
        Fa.logarithmicDepthBuffer && m.setValue(K, "logDepthBufFC", 2 / (Math.log(a.far + 1) / Math.LN2));
        X !== a && (X = a, l = h = !0);
        if (c.isShaderMaterial || c.isMeshPhongMaterial || c.isMeshStandardMaterial || c.envMap) g = m.map.cameraPosition, void 0 !== g && g.setValue(K, Fb.setFromMatrixPosition(a.matrixWorld));
        (c.isMeshPhongMaterial || c.isMeshLambertMaterial || c.isMeshBasicMaterial || c.isMeshStandardMaterial || c.isShaderMaterial) && m.setValue(K, "isOrthographic", !0 === a.isOrthographicCamera);
        if (c.isMeshPhongMaterial || c.isMeshLambertMaterial || c.isMeshBasicMaterial || c.isMeshStandardMaterial || c.isShaderMaterial || c.skinning) 0 < f.numMultiviewViews ? ua.updateCameraViewMatricesUniform(a, m) : m.setValue(K, "viewMatrix", a.matrixWorldInverse);
      }

      if (c.skinning && (m.setOptional(K, d, "bindMatrix"), m.setOptional(K, d, "bindMatrixInverse"), g = d.skeleton)) {
        var k = g.bones;

        if (Fa.floatVertexTextures) {
          if (void 0 === g.boneTexture) {
            k = Math.sqrt(4 * k.length);
            k = P.ceilPowerOfTwo(k);
            k = Math.max(k, 4);
            var u = new Float32Array(k * k * 4);
            u.set(g.boneMatrices);
            var n = new Yb(u, k, k, 1023, 1015);
            g.boneMatrices = u;
            g.boneTexture = n;
            g.boneTextureSize = k;
          }

          m.setValue(K, "boneTexture", g.boneTexture, ba);
          m.setValue(K, "boneTextureSize", g.boneTextureSize);
        } else m.setOptional(K, g, "boneMatrices");
      }

      if (h || e.receiveShadow !== d.receiveShadow) e.receiveShadow = d.receiveShadow, m.setValue(K, "receiveShadow", d.receiveShadow);

      if (h) {
        m.setValue(K, "toneMappingExposure", G.toneMappingExposure);
        m.setValue(K, "toneMappingWhitePoint", G.toneMappingWhitePoint);
        e.needsLights && (h = l, r.ambientLightColor.needsUpdate = h, r.lightProbe.needsUpdate = h, r.directionalLights.needsUpdate = h, r.pointLights.needsUpdate = h, r.spotLights.needsUpdate = h, r.rectAreaLights.needsUpdate = h, r.hemisphereLights.needsUpdate = h);
        b && c.fog && (r.fogColor.value.copy(b.color), b.isFog ? (r.fogNear.value = b.near, r.fogFar.value = b.far) : b.isFogExp2 && (r.fogDensity.value = b.density));
        if (c.isMeshBasicMaterial) p(r, c);else if (c.isMeshLambertMaterial) p(r, c), c.emissiveMap && (r.emissiveMap.value = c.emissiveMap);else if (c.isMeshPhongMaterial) p(r, c), c.isMeshToonMaterial ? (t(r, c), c.gradientMap && (r.gradientMap.value = c.gradientMap)) : t(r, c);else if (c.isMeshStandardMaterial) p(r, c), c.isMeshPhysicalMaterial ? (v(r, c), r.reflectivity.value = c.reflectivity, r.clearcoat.value = c.clearcoat, r.clearcoatRoughness.value = c.clearcoatRoughness, c.sheen && r.sheen.value.copy(c.sheen), c.clearcoatNormalMap && (r.clearcoatNormalScale.value.copy(c.clearcoatNormalScale), r.clearcoatNormalMap.value = c.clearcoatNormalMap, 1 === c.side && r.clearcoatNormalScale.value.negate()), r.transparency.value = c.transparency) : v(r, c);else if (c.isMeshMatcapMaterial) p(r, c), c.matcap && (r.matcap.value = c.matcap), c.bumpMap && (r.bumpMap.value = c.bumpMap, r.bumpScale.value = c.bumpScale, 1 === c.side && (r.bumpScale.value *= -1)), c.normalMap && (r.normalMap.value = c.normalMap, r.normalScale.value.copy(c.normalScale), 1 === c.side && r.normalScale.value.negate()), c.displacementMap && (r.displacementMap.value = c.displacementMap, r.displacementScale.value = c.displacementScale, r.displacementBias.value = c.displacementBias);else if (c.isMeshDepthMaterial) p(r, c), c.displacementMap && (r.displacementMap.value = c.displacementMap, r.displacementScale.value = c.displacementScale, r.displacementBias.value = c.displacementBias);else if (c.isMeshDistanceMaterial) p(r, c), c.displacementMap && (r.displacementMap.value = c.displacementMap, r.displacementScale.value = c.displacementScale, r.displacementBias.value = c.displacementBias), r.referencePosition.value.copy(c.referencePosition), r.nearDistance.value = c.nearDistance, r.farDistance.value = c.farDistance;else if (c.isMeshNormalMaterial) p(r, c), c.bumpMap && (r.bumpMap.value = c.bumpMap, r.bumpScale.value = c.bumpScale, 1 === c.side && (r.bumpScale.value *= -1)), c.normalMap && (r.normalMap.value = c.normalMap, r.normalScale.value.copy(c.normalScale), 1 === c.side && r.normalScale.value.negate()), c.displacementMap && (r.displacementMap.value = c.displacementMap, r.displacementScale.value = c.displacementScale, r.displacementBias.value = c.displacementBias);else if (c.isLineBasicMaterial) r.diffuse.value.copy(c.color), r.opacity.value = c.opacity, c.isLineDashedMaterial && (r.dashSize.value = c.dashSize, r.totalSize.value = c.dashSize + c.gapSize, r.scale.value = c.scale);else if (c.isPointsMaterial) {
          r.diffuse.value.copy(c.color);
          r.opacity.value = c.opacity;
          r.size.value = c.size * fa;
          r.scale.value = .5 * W;
          c.map && (r.map.value = c.map);
          c.alphaMap && (r.alphaMap.value = c.alphaMap);
          if (c.map) var y = c.map;else c.alphaMap && (y = c.alphaMap);
          void 0 !== y && (!0 === y.matrixAutoUpdate && y.updateMatrix(), r.uvTransform.value.copy(y.matrix));
        } else if (c.isSpriteMaterial) {
          r.diffuse.value.copy(c.color);
          r.opacity.value = c.opacity;
          r.rotation.value = c.rotation;
          c.map && (r.map.value = c.map);
          c.alphaMap && (r.alphaMap.value = c.alphaMap);
          if (c.map) var w = c.map;else c.alphaMap && (w = c.alphaMap);
          void 0 !== w && (!0 === w.matrixAutoUpdate && w.updateMatrix(), r.uvTransform.value.copy(w.matrix));
        } else c.isShadowMaterial && (r.color.value.copy(c.color), r.opacity.value = c.opacity);
        void 0 !== r.ltc_1 && (r.ltc_1.value = L.LTC_1);
        void 0 !== r.ltc_2 && (r.ltc_2.value = L.LTC_2);
        Cb.upload(K, e.uniformsList, r, ba);
        c.isShaderMaterial && (c.uniformsNeedUpdate = !1);
      }

      c.isShaderMaterial && !0 === c.uniformsNeedUpdate && (Cb.upload(K, e.uniformsList, r, ba), c.uniformsNeedUpdate = !1);
      c.isSpriteMaterial && m.setValue(K, "center", d.center);
      0 < f.numMultiviewViews ? ua.updateObjectMatricesUniforms(d, a, m) : (m.setValue(K, "modelViewMatrix", d.modelViewMatrix), m.setValue(K, "normalMatrix", d.normalMatrix));
      m.setValue(K, "modelMatrix", d.matrixWorld);
      return f;
    }

    function p(a, b) {
      a.opacity.value = b.opacity;
      b.color && a.diffuse.value.copy(b.color);
      b.emissive && a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity);
      b.map && (a.map.value = b.map);
      b.alphaMap && (a.alphaMap.value = b.alphaMap);
      b.specularMap && (a.specularMap.value = b.specularMap);
      b.envMap && (a.envMap.value = b.envMap, a.flipEnvMap.value = b.envMap.isCubeTexture ? -1 : 1, a.reflectivity.value = b.reflectivity, a.refractionRatio.value = b.refractionRatio, a.maxMipLevel.value = Z.get(b.envMap).__maxMipLevel);
      b.lightMap && (a.lightMap.value = b.lightMap, a.lightMapIntensity.value = b.lightMapIntensity);
      b.aoMap && (a.aoMap.value = b.aoMap, a.aoMapIntensity.value = b.aoMapIntensity);
      if (b.map) var c = b.map;else b.specularMap ? c = b.specularMap : b.displacementMap ? c = b.displacementMap : b.normalMap ? c = b.normalMap : b.bumpMap ? c = b.bumpMap : b.roughnessMap ? c = b.roughnessMap : b.metalnessMap ? c = b.metalnessMap : b.alphaMap ? c = b.alphaMap : b.emissiveMap && (c = b.emissiveMap);
      void 0 !== c && (c.isWebGLRenderTarget && (c = c.texture), !0 === c.matrixAutoUpdate && c.updateMatrix(), a.uvTransform.value.copy(c.matrix));
    }

    function t(a, b) {
      a.specular.value.copy(b.specular);
      a.shininess.value = Math.max(b.shininess, 1E-4);
      b.emissiveMap && (a.emissiveMap.value = b.emissiveMap);
      b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale, 1 === b.side && (a.bumpScale.value *= -1));
      b.normalMap && (a.normalMap.value = b.normalMap, a.normalScale.value.copy(b.normalScale), 1 === b.side && a.normalScale.value.negate());
      b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale, a.displacementBias.value = b.displacementBias);
    }

    function v(a, b) {
      a.roughness.value = b.roughness;
      a.metalness.value = b.metalness;
      b.roughnessMap && (a.roughnessMap.value = b.roughnessMap);
      b.metalnessMap && (a.metalnessMap.value = b.metalnessMap);
      b.emissiveMap && (a.emissiveMap.value = b.emissiveMap);
      b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale, 1 === b.side && (a.bumpScale.value *= -1));
      b.normalMap && (a.normalMap.value = b.normalMap, a.normalScale.value.copy(b.normalScale), 1 === b.side && a.normalScale.value.negate());
      b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale, a.displacementBias.value = b.displacementBias);
      b.envMap && (a.envMapIntensity.value = b.envMapIntensity);
    }

    a = a || {};
    var y = void 0 !== a.canvas ? a.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
        w = void 0 !== a.context ? a.context : null,
        x = void 0 !== a.alpha ? a.alpha : !1,
        F = void 0 !== a.depth ? a.depth : !0,
        I = void 0 !== a.stencil ? a.stencil : !0,
        z = void 0 !== a.antialias ? a.antialias : !1,
        A = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0,
        E = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1,
        D = void 0 !== a.powerPreference ? a.powerPreference : "default",
        J = void 0 !== a.failIfMajorPerformanceCaveat ? a.failIfMajorPerformanceCaveat : !1,
        H = null,
        C = null;
    this.domElement = y;
    this.debug = {
      checkShaderErrors: !0
    };
    this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
    this.clippingPlanes = [];
    this.localClippingEnabled = !1;
    this.gammaFactor = 2;
    this.physicallyCorrectLights = this.gammaOutput = this.gammaInput = !1;
    this.toneMappingWhitePoint = this.toneMappingExposure = this.toneMapping = 1;
    this.maxMorphTargets = 8;
    this.maxMorphNormals = 4;
    var G = this,
        N = !1,
        O = null,
        S = 0,
        V = 0,
        R = null,
        Ie = null,
        ha = -1;
    var Je = b = null;
    var Y = !1;
    var X = null,
        $b = null,
        T = new da(),
        ob = new da(),
        ka = null,
        M = y.width,
        W = y.height,
        fa = 1,
        ea = new da(0, 0, M, W),
        U = new da(0, 0, M, W),
        na = !1,
        eg = new Dd(),
        Pa = new aj(),
        He = !1,
        ta = !1,
        Id = new Q(),
        Fb = new n();

    try {
      x = {
        alpha: x,
        depth: F,
        stencil: I,
        antialias: z,
        premultipliedAlpha: A,
        preserveDrawingBuffer: E,
        powerPreference: D,
        failIfMajorPerformanceCaveat: J,
        xrCompatible: !0
      };
      y.addEventListener("webglcontextlost", d, !1);
      y.addEventListener("webglcontextrestored", e, !1);
      var K = w || y.getContext("webgl", x) || y.getContext("experimental-webgl", x);

      if (null === K) {
        if (null !== y.getContext("webgl")) throw Error("Error creating WebGL context with your selected attributes.");
        throw Error("Error creating WebGL context.");
      }

      void 0 === K.getShaderPrecisionFormat && (K.getShaderPrecisionFormat = function () {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1
        };
      });
    } catch (Ph) {
      throw console.error("THREE.WebGLRenderer: " + Ph.message), Ph;
    }

    var qa, Fa, aa, ca, Z, ba, ra, xa, sa, oa, wa, va, ma, ya, Aa, Ba, pa;
    c();
    var ja = "undefined" !== typeof navigator && "xr" in navigator && "isSessionSupported" in navigator.xr ? new Oh(G, K) : new gg(G);
    this.vr = ja;
    var ua = new lk(G, K),
        Ea = new Ih(G, sa, Fa.maxTextureSize);
    this.shadowMap = Ea;

    this.getContext = function () {
      return K;
    };

    this.getContextAttributes = function () {
      return K.getContextAttributes();
    };

    this.forceContextLoss = function () {
      var a = qa.get("WEBGL_lose_context");
      a && a.loseContext();
    };

    this.forceContextRestore = function () {
      var a = qa.get("WEBGL_lose_context");
      a && a.restoreContext();
    };

    this.getPixelRatio = function () {
      return fa;
    };

    this.setPixelRatio = function (a) {
      void 0 !== a && (fa = a, this.setSize(M, W, !1));
    };

    this.getSize = function (a) {
      void 0 === a && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), a = new B());
      return a.set(M, W);
    };

    this.setSize = function (a, b, c) {
      ja.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (M = a, W = b, y.width = Math.floor(a * fa), y.height = Math.floor(b * fa), !1 !== c && (y.style.width = a + "px", y.style.height = b + "px"), this.setViewport(0, 0, a, b));
    };

    this.getDrawingBufferSize = function (a) {
      void 0 === a && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), a = new B());
      return a.set(M * fa, W * fa).floor();
    };

    this.setDrawingBufferSize = function (a, b, c) {
      M = a;
      W = b;
      fa = c;
      y.width = Math.floor(a * c);
      y.height = Math.floor(b * c);
      this.setViewport(0, 0, a, b);
    };

    this.getCurrentViewport = function (a) {
      void 0 === a && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), a = new da());
      return a.copy(T);
    };

    this.getViewport = function (a) {
      return a.copy(ea);
    };

    this.setViewport = function (a, b, c, d) {
      a.isVector4 ? ea.set(a.x, a.y, a.z, a.w) : ea.set(a, b, c, d);
      aa.viewport(T.copy(ea).multiplyScalar(fa).floor());
    };

    this.getScissor = function (a) {
      return a.copy(U);
    };

    this.setScissor = function (a, b, c, d) {
      a.isVector4 ? U.set(a.x, a.y, a.z, a.w) : U.set(a, b, c, d);
      aa.scissor(ob.copy(U).multiplyScalar(fa).floor());
    };

    this.getScissorTest = function () {
      return na;
    };

    this.setScissorTest = function (a) {
      aa.setScissorTest(na = a);
    };

    this.getClearColor = function () {
      return ma.getClearColor();
    };

    this.setClearColor = function () {
      ma.setClearColor.apply(ma, arguments);
    };

    this.getClearAlpha = function () {
      return ma.getClearAlpha();
    };

    this.setClearAlpha = function () {
      ma.setClearAlpha.apply(ma, arguments);
    };

    this.clear = function (a, b, c) {
      var d = 0;
      if (void 0 === a || a) d |= 16384;
      if (void 0 === b || b) d |= 256;
      if (void 0 === c || c) d |= 1024;
      K.clear(d);
    };

    this.clearColor = function () {
      this.clear(!0, !1, !1);
    };

    this.clearDepth = function () {
      this.clear(!1, !0, !1);
    };

    this.clearStencil = function () {
      this.clear(!1, !1, !0);
    };

    this.dispose = function () {
      y.removeEventListener("webglcontextlost", d, !1);
      y.removeEventListener("webglcontextrestored", e, !1);
      wa.dispose();
      va.dispose();
      Z.dispose();
      sa.dispose();
      ja.dispose();
      za.stop();
    };

    this.renderBufferImmediate = function (a, b) {
      aa.initAttributes();
      var c = Z.get(a);
      a.hasPositions && !c.position && (c.position = K.createBuffer());
      a.hasNormals && !c.normal && (c.normal = K.createBuffer());
      a.hasUvs && !c.uv && (c.uv = K.createBuffer());
      a.hasColors && !c.color && (c.color = K.createBuffer());
      b = b.getAttributes();
      a.hasPositions && (K.bindBuffer(34962, c.position), K.bufferData(34962, a.positionArray, 35048), aa.enableAttribute(b.position), K.vertexAttribPointer(b.position, 3, 5126, !1, 0, 0));
      a.hasNormals && (K.bindBuffer(34962, c.normal), K.bufferData(34962, a.normalArray, 35048), aa.enableAttribute(b.normal), K.vertexAttribPointer(b.normal, 3, 5126, !1, 0, 0));
      a.hasUvs && (K.bindBuffer(34962, c.uv), K.bufferData(34962, a.uvArray, 35048), aa.enableAttribute(b.uv), K.vertexAttribPointer(b.uv, 2, 5126, !1, 0, 0));
      a.hasColors && (K.bindBuffer(34962, c.color), K.bufferData(34962, a.colorArray, 35048), aa.enableAttribute(b.color), K.vertexAttribPointer(b.color, 3, 5126, !1, 0, 0));
      aa.disableUnusedAttributes();
      K.drawArrays(4, 0, a.count);
      a.count = 0;
    };

    this.renderBufferDirect = function (a, c, d, e, f, g) {
      var h = f.isMesh && 0 > f.matrixWorld.determinant();
      aa.setMaterial(e, h);
      var l = k(a, c, e, f),
          m = !1;
      if (b !== d.id || Je !== l.id || Y !== (!0 === e.wireframe)) b = d.id, Je = l.id, Y = !0 === e.wireframe, m = !0;
      f.morphTargetInfluences && (ya.update(f, d, e, l), m = !0);
      h = d.index;
      var r = d.attributes.position;
      c = 1;
      !0 === e.wireframe && (h = xa.getWireframeAttribute(d), c = 2);
      a = Aa;

      if (null !== h) {
        var q = ra.get(h);
        a = Ba;
        a.setIndex(q);
      }

      if (m) {
        if (!1 !== Fa.isWebGL2 || !f.isInstancedMesh && !d.isInstancedBufferGeometry || null !== qa.get("ANGLE_instanced_arrays")) {
          aa.initAttributes();
          m = d.attributes;
          l = l.getAttributes();
          var u = e.defaultAttributeValues;

          for (I in l) {
            var p = l[I];

            if (0 <= p) {
              var t = m[I];

              if (void 0 !== t) {
                var n = t.normalized,
                    v = t.itemSize,
                    y = ra.get(t);

                if (void 0 !== y) {
                  var w = y.buffer,
                      x = y.type;
                  y = y.bytesPerElement;

                  if (t.isInterleavedBufferAttribute) {
                    var z = t.data,
                        F = z.stride;
                    t = t.offset;
                    z && z.isInstancedInterleavedBuffer ? (aa.enableAttributeAndDivisor(p, z.meshPerAttribute), void 0 === d.maxInstancedCount && (d.maxInstancedCount = z.meshPerAttribute * z.count)) : aa.enableAttribute(p);
                    K.bindBuffer(34962, w);
                    K.vertexAttribPointer(p, v, x, n, F * y, t * y);
                  } else t.isInstancedBufferAttribute ? (aa.enableAttributeAndDivisor(p, t.meshPerAttribute), void 0 === d.maxInstancedCount && (d.maxInstancedCount = t.meshPerAttribute * t.count)) : aa.enableAttribute(p), K.bindBuffer(34962, w), K.vertexAttribPointer(p, v, x, n, 0, 0);
                }
              } else if ("instanceMatrix" === I) y = ra.get(f.instanceMatrix), void 0 !== y && (w = y.buffer, x = y.type, aa.enableAttributeAndDivisor(p + 0, 1), aa.enableAttributeAndDivisor(p + 1, 1), aa.enableAttributeAndDivisor(p + 2, 1), aa.enableAttributeAndDivisor(p + 3, 1), K.bindBuffer(34962, w), K.vertexAttribPointer(p + 0, 4, x, !1, 64, 0), K.vertexAttribPointer(p + 1, 4, x, !1, 64, 16), K.vertexAttribPointer(p + 2, 4, x, !1, 64, 32), K.vertexAttribPointer(p + 3, 4, x, !1, 64, 48));else if (void 0 !== u && (n = u[I], void 0 !== n)) switch (n.length) {
                case 2:
                  K.vertexAttrib2fv(p, n);
                  break;

                case 3:
                  K.vertexAttrib3fv(p, n);
                  break;

                case 4:
                  K.vertexAttrib4fv(p, n);
                  break;

                default:
                  K.vertexAttrib1fv(p, n);
              }
            }
          }

          aa.disableUnusedAttributes();
        }

        null !== h && K.bindBuffer(34963, q.buffer);
      }

      q = Infinity;
      null !== h ? q = h.count : void 0 !== r && (q = r.count);
      h = d.drawRange.start * c;
      r = null !== g ? g.start * c : 0;
      var I = Math.max(h, r);
      g = Math.max(0, Math.min(q, h + d.drawRange.count * c, r + (null !== g ? g.count * c : Infinity)) - 1 - I + 1);

      if (0 !== g) {
        if (f.isMesh) {
          if (!0 === e.wireframe) aa.setLineWidth(e.wireframeLinewidth * (null === R ? fa : 1)), a.setMode(1);else switch (f.drawMode) {
            case 0:
              a.setMode(4);
              break;

            case 1:
              a.setMode(5);
              break;

            case 2:
              a.setMode(6);
          }
        } else f.isLine ? (e = e.linewidth, void 0 === e && (e = 1), aa.setLineWidth(e * (null === R ? fa : 1)), f.isLineSegments ? a.setMode(1) : f.isLineLoop ? a.setMode(2) : a.setMode(3)) : f.isPoints ? a.setMode(0) : f.isSprite && a.setMode(4);
        f.isInstancedMesh ? a.renderInstances(d, I, g, f.count) : d.isInstancedBufferGeometry ? a.renderInstances(d, I, g, d.maxInstancedCount) : a.render(I, g);
      }
    };

    this.compile = function (a, b) {
      C = va.get(a, b);
      C.init();
      a.traverse(function (a) {
        a.isLight && (C.pushLight(a), a.castShadow && C.pushShadow(a));
      });
      C.setupLights(b);
      a.traverse(function (b) {
        if (b.material) if (Array.isArray(b.material)) for (var c = 0; c < b.material.length; c++) q(b.material[c], a.fog, b);else q(b.material, a.fog, b);
      });
    };

    var Da = null,
        za = new ag();
    za.setAnimationLoop(function (a) {
      ja.isPresenting() || Da && Da(a);
    });
    "undefined" !== typeof window && za.setContext(window);

    this.setAnimationLoop = function (a) {
      Da = a;
      ja.setAnimationLoop(a);
      za.start();
    };

    this.render = function (a, c, d, e) {
      if (void 0 !== d) {
        console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.");
        var f = d;
      }

      if (void 0 !== e) {
        console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.");
        var g = e;
      }

      c && c.isCamera ? N || (Je = b = null, Y = !1, ha = -1, X = null, !0 === a.autoUpdate && a.updateMatrixWorld(), null === c.parent && c.updateMatrixWorld(), ja.enabled && (c = ja.getCamera(c)), C = va.get(a, c), C.init(), a.onBeforeRender(G, a, c, f || R), Id.multiplyMatrices(c.projectionMatrix, c.matrixWorldInverse), eg.setFromMatrix(Id), ta = this.localClippingEnabled, He = Pa.init(this.clippingPlanes, ta, c), H = wa.get(a, c), H.init(), l(a, c, 0, G.sortObjects), !0 === G.sortObjects && H.sort(), He && Pa.beginShadows(), Ea.render(C.state.shadowsArray, a, c), C.setupLights(c), He && Pa.endShadows(), this.info.autoReset && this.info.reset(), void 0 !== f && this.setRenderTarget(f), ja.enabled && ua.isAvailable() && ua.attachCamera(c), ma.render(H, a, c, g), d = H.opaque, e = H.transparent, a.overrideMaterial ? (f = a.overrideMaterial, d.length && m(d, a, c, f), e.length && m(e, a, c, f)) : (d.length && m(d, a, c), e.length && m(e, a, c)), a.onAfterRender(G, a, c), null !== R && (ba.updateRenderTargetMipmap(R), ba.updateMultisampleRenderTarget(R)), aa.buffers.depth.setTest(!0), aa.buffers.depth.setMask(!0), aa.buffers.color.setMask(!0), aa.setPolygonOffset(!1), ja.enabled && (ua.isAvailable() && ua.detachCamera(c), ja.submitFrame()), C = H = null) : console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
    };

    this.setFramebuffer = function (a) {
      O !== a && null === R && K.bindFramebuffer(36160, a);
      O = a;
    };

    this.getActiveCubeFace = function () {
      return S;
    };

    this.getActiveMipmapLevel = function () {
      return V;
    };

    this.getRenderTarget = function () {
      return R;
    };

    this.setRenderTarget = function (a, b, c) {
      R = a;
      S = b;
      V = c;
      a && void 0 === Z.get(a).__webglFramebuffer && ba.setupRenderTarget(a);
      var d = O,
          e = !1;
      a ? (d = Z.get(a).__webglFramebuffer, a.isWebGLRenderTargetCube ? (d = d[b || 0], e = !0) : d = a.isWebGLMultisampleRenderTarget ? Z.get(a).__webglMultisampledFramebuffer : d, T.copy(a.viewport), ob.copy(a.scissor), ka = a.scissorTest) : (T.copy(ea).multiplyScalar(fa).floor(), ob.copy(U).multiplyScalar(fa).floor(), ka = na);
      Ie !== d && (K.bindFramebuffer(36160, d), Ie = d);
      aa.viewport(T);
      aa.scissor(ob);
      aa.setScissorTest(ka);
      e && (a = Z.get(a.texture), K.framebufferTexture2D(36160, 36064, 34069 + (b || 0), a.__webglTexture, c || 0));
    };

    this.readRenderTargetPixels = function (a, b, c, d, e, f, g) {
      if (a && a.isWebGLRenderTarget) {
        var h = Z.get(a).__webglFramebuffer;

        a.isWebGLRenderTargetCube && void 0 !== g && (h = h[g]);

        if (h) {
          g = !1;
          h !== Ie && (K.bindFramebuffer(36160, h), g = !0);

          try {
            var l = a.texture,
                m = l.format,
                r = l.type;
            1023 !== m && pa.convert(m) !== K.getParameter(35739) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") : 1009 === r || pa.convert(r) === K.getParameter(35738) || 1015 === r && (Fa.isWebGL2 || qa.get("OES_texture_float") || qa.get("WEBGL_color_buffer_float")) || 1016 === r && (Fa.isWebGL2 ? qa.get("EXT_color_buffer_float") : qa.get("EXT_color_buffer_half_float")) ? 36053 === K.checkFramebufferStatus(36160) ? 0 <= b && b <= a.width - d && 0 <= c && c <= a.height - e && K.readPixels(b, c, d, e, pa.convert(m), pa.convert(r), f) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          } finally {
            g && K.bindFramebuffer(36160, Ie);
          }
        }
      } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
    };

    this.copyFramebufferToTexture = function (a, b, c) {
      void 0 === c && (c = 0);
      var d = Math.pow(2, -c),
          e = Math.floor(b.image.width * d);
      d = Math.floor(b.image.height * d);
      var f = pa.convert(b.format);
      ba.setTexture2D(b, 0);
      K.copyTexImage2D(3553, c, f, a.x, a.y, e, d, 0);
      aa.unbindTexture();
    };

    this.copyTextureToTexture = function (a, b, c, d) {
      var e = b.image.width,
          f = b.image.height,
          g = pa.convert(c.format),
          h = pa.convert(c.type);
      ba.setTexture2D(c, 0);
      b.isDataTexture ? K.texSubImage2D(3553, d || 0, a.x, a.y, e, f, g, h, b.image.data) : K.texSubImage2D(3553, d || 0, a.x, a.y, g, h, b.image);
      aa.unbindTexture();
    };

    this.initTexture = function (a) {
      ba.setTexture2D(a, 0);
      aa.unbindTexture();
    };

    "undefined" !== typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
      detail: this
    }));
  }

  function Le(a, b) {
    this.name = "";
    this.color = new J(a);
    this.density = void 0 !== b ? b : 2.5E-4;
  }

  function Me(a, b, c) {
    this.name = "";
    this.color = new J(a);
    this.near = void 0 !== b ? b : 1;
    this.far = void 0 !== c ? c : 1E3;
  }

  function pb(a, b) {
    this.array = a;
    this.stride = b;
    this.count = void 0 !== a ? a.length / b : 0;
    this.usage = 35044;
    this.updateRange = {
      offset: 0,
      count: -1
    };
    this.version = 0;
  }

  function Kd(a, b, c, d) {
    this.data = a;
    this.itemSize = b;
    this.offset = c;
    this.normalized = !0 === d;
  }

  function Gb(a) {
    O.call(this);
    this.type = "SpriteMaterial";
    this.color = new J(16777215);
    this.alphaMap = this.map = null;
    this.rotation = 0;
    this.transparent = this.sizeAttenuation = !0;
    this.setValues(a);
  }

  function Ld(a) {
    E.call(this);
    this.type = "Sprite";

    if (void 0 === Hc) {
      Hc = new D();
      var b = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]);
      b = new pb(b, 5);
      Hc.setIndex([0, 1, 2, 0, 2, 3]);
      Hc.setAttribute("position", new Kd(b, 3, 0, !1));
      Hc.setAttribute("uv", new Kd(b, 2, 3, !1));
    }

    this.geometry = Hc;
    this.material = void 0 !== a ? a : new Gb();
    this.center = new B(.5, .5);
  }

  function Ne(a, b, c, d, e, f) {
    Ic.subVectors(a, c).addScalar(.5).multiply(d);
    void 0 !== e ? (Md.x = f * Ic.x - e * Ic.y, Md.y = e * Ic.x + f * Ic.y) : Md.copy(Ic);
    a.copy(b);
    a.x += Md.x;
    a.y += Md.y;
    a.applyMatrix4(Qh);
  }

  function Nd() {
    E.call(this);
    this.type = "LOD";
    Object.defineProperties(this, {
      levels: {
        enumerable: !0,
        value: []
      }
    });
    this.autoUpdate = !0;
  }

  function Od(a, b) {
    a && a.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    ea.call(this, a, b);
    this.type = "SkinnedMesh";
    this.bindMode = "attached";
    this.bindMatrix = new Q();
    this.bindMatrixInverse = new Q();
  }

  function Oe(a, b) {
    a = a || [];
    this.bones = a.slice(0);
    this.boneMatrices = new Float32Array(16 * this.bones.length);
    this.frame = -1;
    if (void 0 === b) this.calculateInverses();else if (this.bones.length === b.length) this.boneInverses = b.slice(0);else for (console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [], a = 0, b = this.bones.length; a < b; a++) this.boneInverses.push(new Q());
  }

  function ig() {
    E.call(this);
    this.type = "Bone";
  }

  function Pe(a, b, c) {
    ea.call(this, a, b);
    this.instanceMatrix = new N(new Float32Array(16 * c), 16);
    this.count = c;
  }

  function R(a) {
    O.call(this);
    this.type = "LineBasicMaterial";
    this.color = new J(16777215);
    this.linewidth = 1;
    this.linejoin = this.linecap = "round";
    this.setValues(a);
  }

  function ra(a, b, c) {
    1 === c && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.");
    E.call(this);
    this.type = "Line";
    this.geometry = void 0 !== a ? a : new D();
    this.material = void 0 !== b ? b : new R({
      color: 16777215 * Math.random()
    });
  }

  function X(a, b) {
    ra.call(this, a, b);
    this.type = "LineSegments";
  }

  function Qe(a, b) {
    ra.call(this, a, b);
    this.type = "LineLoop";
  }

  function Qa(a) {
    O.call(this);
    this.type = "PointsMaterial";
    this.color = new J(16777215);
    this.alphaMap = this.map = null;
    this.size = 1;
    this.sizeAttenuation = !0;
    this.morphTargets = !1;
    this.setValues(a);
  }

  function Jc(a, b) {
    E.call(this);
    this.type = "Points";
    this.geometry = void 0 !== a ? a : new D();
    this.material = void 0 !== b ? b : new Qa({
      color: 16777215 * Math.random()
    });
    this.updateMorphTargets();
  }

  function jg(a, b, c, d, e, f, g) {
    var h = kg.distanceSqToPoint(a);
    h < c && (c = new n(), kg.closestPointToPoint(a, c), c.applyMatrix4(d), a = e.ray.origin.distanceTo(c), a < e.near || a > e.far || f.push({
      distance: a,
      distanceToRay: Math.sqrt(h),
      point: c,
      index: b,
      face: null,
      object: g
    }));
  }

  function lg(a, b, c, d, e, f, g, h, l) {
    Y.call(this, a, b, c, d, e, f, g, h, l);
    this.format = void 0 !== g ? g : 1022;
    this.minFilter = void 0 !== f ? f : 1006;
    this.magFilter = void 0 !== e ? e : 1006;
    this.generateMipmaps = !1;
  }

  function Kc(a, b, c, d, e, f, g, h, l, m, r, q) {
    Y.call(this, null, f, g, h, l, m, d, e, r, q);
    this.image = {
      width: b,
      height: c
    };
    this.mipmaps = a;
    this.generateMipmaps = this.flipY = !1;
  }

  function Pd(a, b, c, d, e, f, g, h, l) {
    Y.call(this, a, b, c, d, e, f, g, h, l);
    this.needsUpdate = !0;
  }

  function Qd(a, b, c, d, e, f, g, h, l, m) {
    m = void 0 !== m ? m : 1026;
    if (1026 !== m && 1027 !== m) throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    void 0 === c && 1026 === m && (c = 1012);
    void 0 === c && 1027 === m && (c = 1020);
    Y.call(this, null, d, e, f, g, h, m, c, l);
    this.image = {
      width: a,
      height: b
    };
    this.magFilter = void 0 !== g ? g : 1003;
    this.minFilter = void 0 !== h ? h : 1003;
    this.generateMipmaps = this.flipY = !1;
  }

  function Lc(a) {
    D.call(this);
    this.type = "WireframeGeometry";
    var b = [],
        c,
        d,
        e,
        f = [0, 0],
        g = {},
        h = ["a", "b", "c"];

    if (a && a.isGeometry) {
      var l = a.faces;
      var m = 0;

      for (d = l.length; m < d; m++) {
        var r = l[m];

        for (c = 0; 3 > c; c++) {
          var q = r[h[c]];
          var k = r[h[(c + 1) % 3]];
          f[0] = Math.min(q, k);
          f[1] = Math.max(q, k);
          q = f[0] + "," + f[1];
          void 0 === g[q] && (g[q] = {
            index1: f[0],
            index2: f[1]
          });
        }
      }

      for (q in g) m = g[q], h = a.vertices[m.index1], b.push(h.x, h.y, h.z), h = a.vertices[m.index2], b.push(h.x, h.y, h.z);
    } else if (a && a.isBufferGeometry) if (h = new n(), null !== a.index) {
      l = a.attributes.position;
      r = a.index;
      var p = a.groups;
      0 === p.length && (p = [{
        start: 0,
        count: r.count,
        materialIndex: 0
      }]);
      a = 0;

      for (e = p.length; a < e; ++a) for (m = p[a], c = m.start, d = m.count, m = c, d = c + d; m < d; m += 3) for (c = 0; 3 > c; c++) q = r.getX(m + c), k = r.getX(m + (c + 1) % 3), f[0] = Math.min(q, k), f[1] = Math.max(q, k), q = f[0] + "," + f[1], void 0 === g[q] && (g[q] = {
        index1: f[0],
        index2: f[1]
      });

      for (q in g) m = g[q], h.fromBufferAttribute(l, m.index1), b.push(h.x, h.y, h.z), h.fromBufferAttribute(l, m.index2), b.push(h.x, h.y, h.z);
    } else for (l = a.attributes.position, m = 0, d = l.count / 3; m < d; m++) for (c = 0; 3 > c; c++) g = 3 * m + c, h.fromBufferAttribute(l, g), b.push(h.x, h.y, h.z), g = 3 * m + (c + 1) % 3, h.fromBufferAttribute(l, g), b.push(h.x, h.y, h.z);

    this.setAttribute("position", new A(b, 3));
  }

  function Rd(a, b, c) {
    G.call(this);
    this.type = "ParametricGeometry";
    this.parameters = {
      func: a,
      slices: b,
      stacks: c
    };
    this.fromBufferGeometry(new Mc(a, b, c));
    this.mergeVertices();
  }

  function Mc(a, b, c) {
    D.call(this);
    this.type = "ParametricBufferGeometry";
    this.parameters = {
      func: a,
      slices: b,
      stacks: c
    };
    var d = [],
        e = [],
        f = [],
        g = [],
        h = new n(),
        l = new n(),
        m = new n(),
        r = new n(),
        q = new n(),
        k,
        p;
    3 > a.length && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
    var t = b + 1;

    for (k = 0; k <= c; k++) {
      var v = k / c;

      for (p = 0; p <= b; p++) {
        var y = p / b;
        a(y, v, l);
        e.push(l.x, l.y, l.z);
        0 <= y - 1E-5 ? (a(y - 1E-5, v, m), r.subVectors(l, m)) : (a(y + 1E-5, v, m), r.subVectors(m, l));
        0 <= v - 1E-5 ? (a(y, v - 1E-5, m), q.subVectors(l, m)) : (a(y, v + 1E-5, m), q.subVectors(m, l));
        h.crossVectors(r, q).normalize();
        f.push(h.x, h.y, h.z);
        g.push(y, v);
      }
    }

    for (k = 0; k < c; k++) for (p = 0; p < b; p++) a = k * t + p + 1, h = (k + 1) * t + p + 1, l = (k + 1) * t + p, d.push(k * t + p, a, l), d.push(a, h, l);

    this.setIndex(d);
    this.setAttribute("position", new A(e, 3));
    this.setAttribute("normal", new A(f, 3));
    this.setAttribute("uv", new A(g, 2));
  }

  function Sd(a, b, c, d) {
    G.call(this);
    this.type = "PolyhedronGeometry";
    this.parameters = {
      vertices: a,
      indices: b,
      radius: c,
      detail: d
    };
    this.fromBufferGeometry(new Ea(a, b, c, d));
    this.mergeVertices();
  }

  function Ea(a, b, c, d) {
    function e(a) {
      h.push(a.x, a.y, a.z);
    }

    function f(b, c) {
      b *= 3;
      c.x = a[b + 0];
      c.y = a[b + 1];
      c.z = a[b + 2];
    }

    function g(a, b, c, d) {
      0 > d && 1 === a.x && (l[b] = a.x - 1);
      0 === c.x && 0 === c.z && (l[b] = d / 2 / Math.PI + .5);
    }

    D.call(this);
    this.type = "PolyhedronBufferGeometry";
    this.parameters = {
      vertices: a,
      indices: b,
      radius: c,
      detail: d
    };
    c = c || 1;
    d = d || 0;
    var h = [],
        l = [];

    (function (a) {
      for (var c = new n(), d = new n(), g = new n(), h = 0; h < b.length; h += 3) {
        f(b[h + 0], c);
        f(b[h + 1], d);
        f(b[h + 2], g);
        var l,
            m,
            k = c,
            w = d,
            x = g,
            F = Math.pow(2, a),
            I = [];

        for (m = 0; m <= F; m++) {
          I[m] = [];
          var z = k.clone().lerp(x, m / F),
              B = w.clone().lerp(x, m / F),
              A = F - m;

          for (l = 0; l <= A; l++) I[m][l] = 0 === l && m === F ? z : z.clone().lerp(B, l / A);
        }

        for (m = 0; m < F; m++) for (l = 0; l < 2 * (F - m) - 1; l++) k = Math.floor(l / 2), 0 === l % 2 ? (e(I[m][k + 1]), e(I[m + 1][k]), e(I[m][k])) : (e(I[m][k + 1]), e(I[m + 1][k + 1]), e(I[m + 1][k]));
      }
    })(d);

    (function (a) {
      for (var b = new n(), c = 0; c < h.length; c += 3) b.x = h[c + 0], b.y = h[c + 1], b.z = h[c + 2], b.normalize().multiplyScalar(a), h[c + 0] = b.x, h[c + 1] = b.y, h[c + 2] = b.z;
    })(c);

    (function () {
      for (var a = new n(), b = 0; b < h.length; b += 3) a.x = h[b + 0], a.y = h[b + 1], a.z = h[b + 2], l.push(Math.atan2(a.z, -a.x) / 2 / Math.PI + .5, 1 - (Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + .5));

      a = new n();
      b = new n();

      for (var c = new n(), d = new n(), e = new B(), f = new B(), k = new B(), y = 0, w = 0; y < h.length; y += 9, w += 6) {
        a.set(h[y + 0], h[y + 1], h[y + 2]);
        b.set(h[y + 3], h[y + 4], h[y + 5]);
        c.set(h[y + 6], h[y + 7], h[y + 8]);
        e.set(l[w + 0], l[w + 1]);
        f.set(l[w + 2], l[w + 3]);
        k.set(l[w + 4], l[w + 5]);
        d.copy(a).add(b).add(c).divideScalar(3);
        var x = Math.atan2(d.z, -d.x);
        g(e, w + 0, a, x);
        g(f, w + 2, b, x);
        g(k, w + 4, c, x);
      }

      for (a = 0; a < l.length; a += 6) b = l[a + 0], c = l[a + 2], d = l[a + 4], e = Math.min(b, c, d), .9 < Math.max(b, c, d) && .1 > e && (.2 > b && (l[a + 0] += 1), .2 > c && (l[a + 2] += 1), .2 > d && (l[a + 4] += 1));
    })();

    this.setAttribute("position", new A(h, 3));
    this.setAttribute("normal", new A(h.slice(), 3));
    this.setAttribute("uv", new A(l, 2));
    0 === d ? this.computeVertexNormals() : this.normalizeNormals();
  }

  function Td(a, b) {
    G.call(this);
    this.type = "TetrahedronGeometry";
    this.parameters = {
      radius: a,
      detail: b
    };
    this.fromBufferGeometry(new Nc(a, b));
    this.mergeVertices();
  }

  function Nc(a, b) {
    Ea.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], a, b);
    this.type = "TetrahedronBufferGeometry";
    this.parameters = {
      radius: a,
      detail: b
    };
  }

  function Ud(a, b) {
    G.call(this);
    this.type = "OctahedronGeometry";
    this.parameters = {
      radius: a,
      detail: b
    };
    this.fromBufferGeometry(new ac(a, b));
    this.mergeVertices();
  }

  function ac(a, b) {
    Ea.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], a, b);
    this.type = "OctahedronBufferGeometry";
    this.parameters = {
      radius: a,
      detail: b
    };
  }

  function Vd(a, b) {
    G.call(this);
    this.type = "IcosahedronGeometry";
    this.parameters = {
      radius: a,
      detail: b
    };
    this.fromBufferGeometry(new Oc(a, b));
    this.mergeVertices();
  }

  function Oc(a, b) {
    var c = (1 + Math.sqrt(5)) / 2;
    Ea.call(this, [-1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, 0, 0, -1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, c, 0, -1, c, 0, 1, -c, 0, -1, -c, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], a, b);
    this.type = "IcosahedronBufferGeometry";
    this.parameters = {
      radius: a,
      detail: b
    };
  }

  function Wd(a, b) {
    G.call(this);
    this.type = "DodecahedronGeometry";
    this.parameters = {
      radius: a,
      detail: b
    };
    this.fromBufferGeometry(new Pc(a, b));
    this.mergeVertices();
  }

  function Pc(a, b) {
    var c = (1 + Math.sqrt(5)) / 2,
        d = 1 / c;
    Ea.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, 0, -c, 0, -d, c, 0, -d, -c, 0, d, c, 0, d], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], a, b);
    this.type = "DodecahedronBufferGeometry";
    this.parameters = {
      radius: a,
      detail: b
    };
  }

  function Xd(a, b, c, d, e, f) {
    G.call(this);
    this.type = "TubeGeometry";
    this.parameters = {
      path: a,
      tubularSegments: b,
      radius: c,
      radialSegments: d,
      closed: e
    };
    void 0 !== f && console.warn("THREE.TubeGeometry: taper has been removed.");
    a = new bc(a, b, c, d, e);
    this.tangents = a.tangents;
    this.normals = a.normals;
    this.binormals = a.binormals;
    this.fromBufferGeometry(a);
    this.mergeVertices();
  }

  function bc(a, b, c, d, e) {
    function f(e) {
      r = a.getPointAt(e / b, r);
      var f = g.normals[e];
      e = g.binormals[e];

      for (u = 0; u <= d; u++) {
        var m = u / d * Math.PI * 2,
            k = Math.sin(m);
        m = -Math.cos(m);
        l.x = m * f.x + k * e.x;
        l.y = m * f.y + k * e.y;
        l.z = m * f.z + k * e.z;
        l.normalize();
        t.push(l.x, l.y, l.z);
        h.x = r.x + c * l.x;
        h.y = r.y + c * l.y;
        h.z = r.z + c * l.z;
        p.push(h.x, h.y, h.z);
      }
    }

    D.call(this);
    this.type = "TubeBufferGeometry";
    this.parameters = {
      path: a,
      tubularSegments: b,
      radius: c,
      radialSegments: d,
      closed: e
    };
    b = b || 64;
    c = c || 1;
    d = d || 8;
    e = e || !1;
    var g = a.computeFrenetFrames(b, e);
    this.tangents = g.tangents;
    this.normals = g.normals;
    this.binormals = g.binormals;
    var h = new n(),
        l = new n(),
        m = new B(),
        r = new n(),
        k,
        u,
        p = [],
        t = [],
        v = [],
        y = [];

    for (k = 0; k < b; k++) f(k);

    f(!1 === e ? b : 0);

    for (k = 0; k <= b; k++) for (u = 0; u <= d; u++) m.x = k / b, m.y = u / d, v.push(m.x, m.y);

    (function () {
      for (u = 1; u <= b; u++) for (k = 1; k <= d; k++) {
        var a = (d + 1) * u + (k - 1),
            c = (d + 1) * u + k,
            e = (d + 1) * (u - 1) + k;
        y.push((d + 1) * (u - 1) + (k - 1), a, e);
        y.push(a, c, e);
      }
    })();

    this.setIndex(y);
    this.setAttribute("position", new A(p, 3));
    this.setAttribute("normal", new A(t, 3));
    this.setAttribute("uv", new A(v, 2));
  }

  function Yd(a, b, c, d, e, f, g) {
    G.call(this);
    this.type = "TorusKnotGeometry";
    this.parameters = {
      radius: a,
      tube: b,
      tubularSegments: c,
      radialSegments: d,
      p: e,
      q: f
    };
    void 0 !== g && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");
    this.fromBufferGeometry(new Qc(a, b, c, d, e, f));
    this.mergeVertices();
  }

  function Qc(a, b, c, d, e, f) {
    function g(a, b, c, d, e) {
      var f = Math.sin(a);
      b = c / b * a;
      c = Math.cos(b);
      e.x = d * (2 + c) * .5 * Math.cos(a);
      e.y = d * (2 + c) * f * .5;
      e.z = d * Math.sin(b) * .5;
    }

    D.call(this);
    this.type = "TorusKnotBufferGeometry";
    this.parameters = {
      radius: a,
      tube: b,
      tubularSegments: c,
      radialSegments: d,
      p: e,
      q: f
    };
    a = a || 1;
    b = b || .4;
    c = Math.floor(c) || 64;
    d = Math.floor(d) || 8;
    e = e || 2;
    f = f || 3;
    var h = [],
        l = [],
        m = [],
        r = [],
        k,
        u = new n(),
        p = new n(),
        t = new n(),
        v = new n(),
        y = new n(),
        w = new n(),
        x = new n();

    for (k = 0; k <= c; ++k) {
      var F = k / c * e * Math.PI * 2;
      g(F, e, f, a, t);
      g(F + .01, e, f, a, v);
      w.subVectors(v, t);
      x.addVectors(v, t);
      y.crossVectors(w, x);
      x.crossVectors(y, w);
      y.normalize();
      x.normalize();

      for (F = 0; F <= d; ++F) {
        var I = F / d * Math.PI * 2,
            z = -b * Math.cos(I);
        I = b * Math.sin(I);
        u.x = t.x + (z * x.x + I * y.x);
        u.y = t.y + (z * x.y + I * y.y);
        u.z = t.z + (z * x.z + I * y.z);
        l.push(u.x, u.y, u.z);
        p.subVectors(u, t).normalize();
        m.push(p.x, p.y, p.z);
        r.push(k / c);
        r.push(F / d);
      }
    }

    for (F = 1; F <= c; F++) for (k = 1; k <= d; k++) a = (d + 1) * F + (k - 1), b = (d + 1) * F + k, e = (d + 1) * (F - 1) + k, h.push((d + 1) * (F - 1) + (k - 1), a, e), h.push(a, b, e);

    this.setIndex(h);
    this.setAttribute("position", new A(l, 3));
    this.setAttribute("normal", new A(m, 3));
    this.setAttribute("uv", new A(r, 2));
  }

  function Zd(a, b, c, d, e) {
    G.call(this);
    this.type = "TorusGeometry";
    this.parameters = {
      radius: a,
      tube: b,
      radialSegments: c,
      tubularSegments: d,
      arc: e
    };
    this.fromBufferGeometry(new Rc(a, b, c, d, e));
    this.mergeVertices();
  }

  function Rc(a, b, c, d, e) {
    D.call(this);
    this.type = "TorusBufferGeometry";
    this.parameters = {
      radius: a,
      tube: b,
      radialSegments: c,
      tubularSegments: d,
      arc: e
    };
    a = a || 1;
    b = b || .4;
    c = Math.floor(c) || 8;
    d = Math.floor(d) || 6;
    e = e || 2 * Math.PI;
    var f = [],
        g = [],
        h = [],
        l = [],
        m = new n(),
        r = new n(),
        k = new n(),
        u,
        p;

    for (u = 0; u <= c; u++) for (p = 0; p <= d; p++) {
      var t = p / d * e,
          v = u / c * Math.PI * 2;
      r.x = (a + b * Math.cos(v)) * Math.cos(t);
      r.y = (a + b * Math.cos(v)) * Math.sin(t);
      r.z = b * Math.sin(v);
      g.push(r.x, r.y, r.z);
      m.x = a * Math.cos(t);
      m.y = a * Math.sin(t);
      k.subVectors(r, m).normalize();
      h.push(k.x, k.y, k.z);
      l.push(p / d);
      l.push(u / c);
    }

    for (u = 1; u <= c; u++) for (p = 1; p <= d; p++) a = (d + 1) * (u - 1) + p - 1, b = (d + 1) * (u - 1) + p, e = (d + 1) * u + p, f.push((d + 1) * u + p - 1, a, e), f.push(a, b, e);

    this.setIndex(f);
    this.setAttribute("position", new A(g, 3));
    this.setAttribute("normal", new A(h, 3));
    this.setAttribute("uv", new A(l, 2));
  }

  function Rh(a, b, c, d, e) {
    for (var f, g = 0, h = b, l = c - d; h < c; h += d) g += (a[l] - a[h]) * (a[h + 1] + a[l + 1]), l = h;

    if (e === 0 < g) for (e = b; e < c; e += d) f = Sh(e, a[e], a[e + 1], f);else for (e = c - d; e >= b; e -= d) f = Sh(e, a[e], a[e + 1], f);
    f && cc(f, f.next) && ($d(f), f = f.next);
    return f;
  }

  function ae(a, b) {
    if (!a) return a;
    b || (b = a);

    do {
      var c = !1;
      if (a.steiner || !cc(a, a.next) && 0 !== xa(a.prev, a, a.next)) a = a.next;else {
        $d(a);
        a = b = a.prev;
        if (a === a.next) break;
        c = !0;
      }
    } while (c || a !== b);

    return b;
  }

  function be(a, b, c, d, e, f, g) {
    if (a) {
      if (!g && f) {
        var h = a,
            l = h;

        do null === l.z && (l.z = mg(l.x, l.y, d, e, f)), l.prevZ = l.prev, l = l.nextZ = l.next; while (l !== h);

        l.prevZ.nextZ = null;
        l.prevZ = null;
        h = l;
        var m,
            r,
            k,
            u,
            p = 1;

        do {
          l = h;
          var t = h = null;

          for (r = 0; l;) {
            r++;
            var n = l;

            for (m = k = 0; m < p && (k++, n = n.nextZ, n); m++);

            for (u = p; 0 < k || 0 < u && n;) 0 !== k && (0 === u || !n || l.z <= n.z) ? (m = l, l = l.nextZ, k--) : (m = n, n = n.nextZ, u--), t ? t.nextZ = m : h = m, m.prevZ = t, t = m;

            l = n;
          }

          t.nextZ = null;
          p *= 2;
        } while (1 < r);
      }

      for (h = a; a.prev !== a.next;) {
        l = a.prev;
        n = a.next;
        if (f) t = mk(a, d, e, f);else a: if (t = a, r = t.prev, k = t, p = t.next, 0 <= xa(r, k, p)) t = !1;else {
          for (m = t.next.next; m !== t.prev;) {
            if (Sc(r.x, r.y, k.x, k.y, p.x, p.y, m.x, m.y) && 0 <= xa(m.prev, m, m.next)) {
              t = !1;
              break a;
            }

            m = m.next;
          }

          t = !0;
        }
        if (t) b.push(l.i / c), b.push(a.i / c), b.push(n.i / c), $d(a), h = a = n.next;else if (a = n, a === h) {
          if (!g) be(ae(a), b, c, d, e, f, 1);else if (1 === g) {
            g = b;
            h = c;
            l = a;

            do n = l.prev, t = l.next.next, !cc(n, t) && Th(n, l, l.next, t) && ce(n, t) && ce(t, n) && (g.push(n.i / h), g.push(l.i / h), g.push(t.i / h), $d(l), $d(l.next), l = a = t), l = l.next; while (l !== a);

            a = l;
            be(a, b, c, d, e, f, 2);
          } else if (2 === g) a: {
            g = a;

            do {
              for (h = g.next.next; h !== g.prev;) {
                if (l = g.i !== h.i) {
                  l = g;
                  n = h;

                  if (t = l.next.i !== n.i && l.prev.i !== n.i) {
                    b: {
                      t = l;

                      do {
                        if (t.i !== l.i && t.next.i !== l.i && t.i !== n.i && t.next.i !== n.i && Th(t, t.next, l, n)) {
                          t = !0;
                          break b;
                        }

                        t = t.next;
                      } while (t !== l);

                      t = !1;
                    }

                    t = !t;
                  }

                  if (t = t && ce(l, n) && ce(n, l)) {
                    t = l;
                    r = !1;
                    k = (l.x + n.x) / 2;
                    n = (l.y + n.y) / 2;

                    do t.y > n !== t.next.y > n && t.next.y !== t.y && k < (t.next.x - t.x) * (n - t.y) / (t.next.y - t.y) + t.x && (r = !r), t = t.next; while (t !== l);

                    t = r;
                  }

                  l = t;
                }

                if (l) {
                  a = Uh(g, h);
                  g = ae(g, g.next);
                  a = ae(a, a.next);
                  be(g, b, c, d, e, f);
                  be(a, b, c, d, e, f);
                  break a;
                }

                h = h.next;
              }

              g = g.next;
            } while (g !== a);
          }
          break;
        }
      }
    }
  }

  function mk(a, b, c, d) {
    var e = a.prev,
        f = a.next;
    if (0 <= xa(e, a, f)) return !1;
    var g = e.x > a.x ? e.x > f.x ? e.x : f.x : a.x > f.x ? a.x : f.x,
        h = e.y > a.y ? e.y > f.y ? e.y : f.y : a.y > f.y ? a.y : f.y,
        l = mg(e.x < a.x ? e.x < f.x ? e.x : f.x : a.x < f.x ? a.x : f.x, e.y < a.y ? e.y < f.y ? e.y : f.y : a.y < f.y ? a.y : f.y, b, c, d);
    b = mg(g, h, b, c, d);
    c = a.prevZ;

    for (d = a.nextZ; c && c.z >= l && d && d.z <= b;) {
      if (c !== a.prev && c !== a.next && Sc(e.x, e.y, a.x, a.y, f.x, f.y, c.x, c.y) && 0 <= xa(c.prev, c, c.next)) return !1;
      c = c.prevZ;
      if (d !== a.prev && d !== a.next && Sc(e.x, e.y, a.x, a.y, f.x, f.y, d.x, d.y) && 0 <= xa(d.prev, d, d.next)) return !1;
      d = d.nextZ;
    }

    for (; c && c.z >= l;) {
      if (c !== a.prev && c !== a.next && Sc(e.x, e.y, a.x, a.y, f.x, f.y, c.x, c.y) && 0 <= xa(c.prev, c, c.next)) return !1;
      c = c.prevZ;
    }

    for (; d && d.z <= b;) {
      if (d !== a.prev && d !== a.next && Sc(e.x, e.y, a.x, a.y, f.x, f.y, d.x, d.y) && 0 <= xa(d.prev, d, d.next)) return !1;
      d = d.nextZ;
    }

    return !0;
  }

  function nk(a, b) {
    return a.x - b.x;
  }

  function ok(a, b) {
    var c = b,
        d = a.x,
        e = a.y,
        f = -Infinity;

    do {
      if (e <= c.y && e >= c.next.y && c.next.y !== c.y) {
        var g = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y);

        if (g <= d && g > f) {
          f = g;

          if (g === d) {
            if (e === c.y) return c;
            if (e === c.next.y) return c.next;
          }

          var h = c.x < c.next.x ? c : c.next;
        }
      }

      c = c.next;
    } while (c !== b);

    if (!h) return null;
    if (d === f) return h.prev;
    b = h;
    g = h.x;
    var l = h.y,
        m = Infinity;

    for (c = h.next; c !== b;) {
      if (d >= c.x && c.x >= g && d !== c.x && Sc(e < l ? d : f, e, g, l, e < l ? f : d, e, c.x, c.y)) {
        var r = Math.abs(e - c.y) / (d - c.x);
        (r < m || r === m && c.x > h.x) && ce(c, a) && (h = c, m = r);
      }

      c = c.next;
    }

    return h;
  }

  function mg(a, b, c, d, e) {
    a = 32767 * (a - c) * e;
    b = 32767 * (b - d) * e;
    a = (a | a << 8) & 16711935;
    a = (a | a << 4) & 252645135;
    a = (a | a << 2) & 858993459;
    b = (b | b << 8) & 16711935;
    b = (b | b << 4) & 252645135;
    b = (b | b << 2) & 858993459;
    return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1;
  }

  function pk(a) {
    var b = a,
        c = a;

    do {
      if (b.x < c.x || b.x === c.x && b.y < c.y) c = b;
      b = b.next;
    } while (b !== a);

    return c;
  }

  function Sc(a, b, c, d, e, f, g, h) {
    return 0 <= (e - g) * (b - h) - (a - g) * (f - h) && 0 <= (a - g) * (d - h) - (c - g) * (b - h) && 0 <= (c - g) * (f - h) - (e - g) * (d - h);
  }

  function xa(a, b, c) {
    return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y);
  }

  function cc(a, b) {
    return a.x === b.x && a.y === b.y;
  }

  function Th(a, b, c, d) {
    return cc(a, c) && cc(b, d) || cc(a, d) && cc(c, b) ? !0 : 0 < xa(a, b, c) !== 0 < xa(a, b, d) && 0 < xa(c, d, a) !== 0 < xa(c, d, b);
  }

  function ce(a, b) {
    return 0 > xa(a.prev, a, a.next) ? 0 <= xa(a, b, a.next) && 0 <= xa(a, a.prev, b) : 0 > xa(a, b, a.prev) || 0 > xa(a, a.next, b);
  }

  function Uh(a, b) {
    var c = new ng(a.i, a.x, a.y),
        d = new ng(b.i, b.x, b.y),
        e = a.next,
        f = b.prev;
    a.next = b;
    b.prev = a;
    c.next = e;
    e.prev = c;
    d.next = c;
    c.prev = d;
    f.next = d;
    d.prev = f;
    return d;
  }

  function Sh(a, b, c, d) {
    a = new ng(a, b, c);
    d ? (a.next = d.next, a.prev = d, d.next.prev = a, d.next = a) : (a.prev = a, a.next = a);
    return a;
  }

  function $d(a) {
    a.next.prev = a.prev;
    a.prev.next = a.next;
    a.prevZ && (a.prevZ.nextZ = a.nextZ);
    a.nextZ && (a.nextZ.prevZ = a.prevZ);
  }

  function ng(a, b, c) {
    this.i = a;
    this.x = b;
    this.y = c;
    this.nextZ = this.prevZ = this.z = this.next = this.prev = null;
    this.steiner = !1;
  }

  function Vh(a) {
    var b = a.length;
    2 < b && a[b - 1].equals(a[0]) && a.pop();
  }

  function Wh(a, b) {
    for (var c = 0; c < b.length; c++) a.push(b[c].x), a.push(b[c].y);
  }

  function dc(a, b) {
    G.call(this);
    this.type = "ExtrudeGeometry";
    this.parameters = {
      shapes: a,
      options: b
    };
    this.fromBufferGeometry(new db(a, b));
    this.mergeVertices();
  }

  function db(a, b) {
    function c(a) {
      function c(a, b, c) {
        b || console.error("THREE.ExtrudeGeometry: vec does not exist");
        return b.clone().multiplyScalar(c).add(a);
      }

      function g(a, b, c) {
        var d = a.x - b.x;
        var e = a.y - b.y;
        var f = c.x - a.x;
        var g = c.y - a.y,
            h = d * d + e * e;

        if (Math.abs(d * g - e * f) > Number.EPSILON) {
          var l = Math.sqrt(h),
              m = Math.sqrt(f * f + g * g);
          h = b.x - e / l;
          b = b.y + d / l;
          g = ((c.x - g / m - h) * g - (c.y + f / m - b) * f) / (d * g - e * f);
          f = h + d * g - a.x;
          d = b + e * g - a.y;
          e = f * f + d * d;
          if (2 >= e) return new B(f, d);
          e = Math.sqrt(e / 2);
        } else a = !1, d > Number.EPSILON ? f > Number.EPSILON && (a = !0) : d < -Number.EPSILON ? f < -Number.EPSILON && (a = !0) : Math.sign(e) === Math.sign(g) && (a = !0), a ? (f = -e, e = Math.sqrt(h)) : (f = d, d = e, e = Math.sqrt(h / 2));

        return new B(f / e, d / e);
      }

      function h(a, b) {
        for (M = a.length; 0 <= --M;) {
          var c = M;
          var f = M - 1;
          0 > f && (f = a.length - 1);
          var g,
              h = x + 2 * E;

          for (g = 0; g < h; g++) {
            var l = Y * g,
                m = Y * (g + 1),
                r = b + f + l,
                k = b + f + m;
            m = b + c + m;
            t(b + c + l);
            t(r);
            t(m);
            t(r);
            t(k);
            t(m);
            l = e.length / 3;
            l = H.generateSideWallUV(d, e, l - 6, l - 3, l - 2, l - 1);
            v(l[0]);
            v(l[1]);
            v(l[3]);
            v(l[1]);
            v(l[2]);
            v(l[3]);
          }
        }
      }

      function l(a, b, c) {
        y.push(a);
        y.push(b);
        y.push(c);
      }

      function k(a, b, c) {
        t(a);
        t(b);
        t(c);
        a = e.length / 3;
        a = H.generateTopUV(d, e, a - 3, a - 2, a - 1);
        v(a[0]);
        v(a[1]);
        v(a[2]);
      }

      function t(a) {
        e.push(y[3 * a]);
        e.push(y[3 * a + 1]);
        e.push(y[3 * a + 2]);
      }

      function v(a) {
        f.push(a.x);
        f.push(a.y);
      }

      var y = [],
          w = void 0 !== b.curveSegments ? b.curveSegments : 12,
          x = void 0 !== b.steps ? b.steps : 1,
          F = void 0 !== b.depth ? b.depth : 100,
          I = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0,
          z = void 0 !== b.bevelThickness ? b.bevelThickness : 6,
          A = void 0 !== b.bevelSize ? b.bevelSize : z - 2,
          G = void 0 !== b.bevelOffset ? b.bevelOffset : 0,
          E = void 0 !== b.bevelSegments ? b.bevelSegments : 3,
          C = b.extrudePath,
          H = void 0 !== b.UVGenerator ? b.UVGenerator : qk;
      void 0 !== b.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), F = b.amount);
      var D = !1;

      if (C) {
        var J = C.getSpacedPoints(x);
        D = !0;
        I = !1;
        var L = C.computeFrenetFrames(x, !1);
        var N = new n();
        var O = new n();
        var P = new n();
      }

      I || (G = A = z = E = 0);
      var Q;
      w = a.extractPoints(w);
      a = w.shape;
      var S = w.holes;

      if (!qb.isClockWise(a)) {
        a = a.reverse();
        var ha = 0;

        for (Q = S.length; ha < Q; ha++) {
          var R = S[ha];
          qb.isClockWise(R) && (S[ha] = R.reverse());
        }
      }

      var Z = qb.triangulateShape(a, S),
          X = a;
      ha = 0;

      for (Q = S.length; ha < Q; ha++) R = S[ha], a = a.concat(R);

      var T,
          Y = a.length,
          V,
          ca = Z.length;
      w = [];
      var M = 0;
      var W = X.length;
      var fa = W - 1;

      for (T = M + 1; M < W; M++, fa++, T++) fa === W && (fa = 0), T === W && (T = 0), w[M] = g(X[M], X[fa], X[T]);

      C = [];
      var da = w.concat();
      ha = 0;

      for (Q = S.length; ha < Q; ha++) {
        R = S[ha];
        var ba = [];
        M = 0;
        W = R.length;
        fa = W - 1;

        for (T = M + 1; M < W; M++, fa++, T++) fa === W && (fa = 0), T === W && (T = 0), ba[M] = g(R[M], R[fa], R[T]);

        C.push(ba);
        da = da.concat(ba);
      }

      for (fa = 0; fa < E; fa++) {
        W = fa / E;
        var ea = z * Math.cos(W * Math.PI / 2);
        T = A * Math.sin(W * Math.PI / 2) + G;
        M = 0;

        for (W = X.length; M < W; M++) {
          var U = c(X[M], w[M], T);
          l(U.x, U.y, -ea);
        }

        ha = 0;

        for (Q = S.length; ha < Q; ha++) for (R = S[ha], ba = C[ha], M = 0, W = R.length; M < W; M++) U = c(R[M], ba[M], T), l(U.x, U.y, -ea);
      }

      T = A + G;

      for (M = 0; M < Y; M++) U = I ? c(a[M], da[M], T) : a[M], D ? (O.copy(L.normals[0]).multiplyScalar(U.x), N.copy(L.binormals[0]).multiplyScalar(U.y), P.copy(J[0]).add(O).add(N), l(P.x, P.y, P.z)) : l(U.x, U.y, 0);

      for (W = 1; W <= x; W++) for (M = 0; M < Y; M++) U = I ? c(a[M], da[M], T) : a[M], D ? (O.copy(L.normals[W]).multiplyScalar(U.x), N.copy(L.binormals[W]).multiplyScalar(U.y), P.copy(J[W]).add(O).add(N), l(P.x, P.y, P.z)) : l(U.x, U.y, F / x * W);

      for (fa = E - 1; 0 <= fa; fa--) {
        W = fa / E;
        ea = z * Math.cos(W * Math.PI / 2);
        T = A * Math.sin(W * Math.PI / 2) + G;
        M = 0;

        for (W = X.length; M < W; M++) U = c(X[M], w[M], T), l(U.x, U.y, F + ea);

        ha = 0;

        for (Q = S.length; ha < Q; ha++) for (R = S[ha], ba = C[ha], M = 0, W = R.length; M < W; M++) U = c(R[M], ba[M], T), D ? l(U.x, U.y + J[x - 1].y, J[x - 1].x + ea) : l(U.x, U.y, F + ea);
      }

      (function () {
        var a = e.length / 3;

        if (I) {
          var b = 0 * Y;

          for (M = 0; M < ca; M++) V = Z[M], k(V[2] + b, V[1] + b, V[0] + b);

          b = Y * (x + 2 * E);

          for (M = 0; M < ca; M++) V = Z[M], k(V[0] + b, V[1] + b, V[2] + b);
        } else {
          for (M = 0; M < ca; M++) V = Z[M], k(V[2], V[1], V[0]);

          for (M = 0; M < ca; M++) V = Z[M], k(V[0] + Y * x, V[1] + Y * x, V[2] + Y * x);
        }

        d.addGroup(a, e.length / 3 - a, 0);
      })();

      (function () {
        var a = e.length / 3,
            b = 0;
        h(X, b);
        b += X.length;
        ha = 0;

        for (Q = S.length; ha < Q; ha++) R = S[ha], h(R, b), b += R.length;

        d.addGroup(a, e.length / 3 - a, 1);
      })();
    }

    D.call(this);
    this.type = "ExtrudeBufferGeometry";
    this.parameters = {
      shapes: a,
      options: b
    };
    a = Array.isArray(a) ? a : [a];

    for (var d = this, e = [], f = [], g = 0, h = a.length; g < h; g++) c(a[g]);

    this.setAttribute("position", new A(e, 3));
    this.setAttribute("uv", new A(f, 2));
    this.computeVertexNormals();
  }

  function Xh(a, b, c) {
    c.shapes = [];
    if (Array.isArray(a)) for (var d = 0, e = a.length; d < e; d++) c.shapes.push(a[d].uuid);else c.shapes.push(a.uuid);
    void 0 !== b.extrudePath && (c.options.extrudePath = b.extrudePath.toJSON());
    return c;
  }

  function de(a, b) {
    G.call(this);
    this.type = "TextGeometry";
    this.parameters = {
      text: a,
      parameters: b
    };
    this.fromBufferGeometry(new Tc(a, b));
    this.mergeVertices();
  }

  function Tc(a, b) {
    b = b || {};
    var c = b.font;
    if (!c || !c.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new G();
    a = c.generateShapes(a, b.size);
    b.depth = void 0 !== b.height ? b.height : 50;
    void 0 === b.bevelThickness && (b.bevelThickness = 10);
    void 0 === b.bevelSize && (b.bevelSize = 8);
    void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
    db.call(this, a, b);
    this.type = "TextBufferGeometry";
  }

  function ee(a, b, c, d, e, f, g) {
    G.call(this);
    this.type = "SphereGeometry";
    this.parameters = {
      radius: a,
      widthSegments: b,
      heightSegments: c,
      phiStart: d,
      phiLength: e,
      thetaStart: f,
      thetaLength: g
    };
    this.fromBufferGeometry(new Hb(a, b, c, d, e, f, g));
    this.mergeVertices();
  }

  function Hb(a, b, c, d, e, f, g) {
    D.call(this);
    this.type = "SphereBufferGeometry";
    this.parameters = {
      radius: a,
      widthSegments: b,
      heightSegments: c,
      phiStart: d,
      phiLength: e,
      thetaStart: f,
      thetaLength: g
    };
    a = a || 1;
    b = Math.max(3, Math.floor(b) || 8);
    c = Math.max(2, Math.floor(c) || 6);
    d = void 0 !== d ? d : 0;
    e = void 0 !== e ? e : 2 * Math.PI;
    f = void 0 !== f ? f : 0;
    g = void 0 !== g ? g : Math.PI;
    var h = Math.min(f + g, Math.PI),
        l,
        m,
        r = 0,
        k = [],
        u = new n(),
        p = new n(),
        t = [],
        v = [],
        y = [],
        w = [];

    for (m = 0; m <= c; m++) {
      var x = [],
          F = m / c,
          I = 0;
      0 == m && 0 == f ? I = .5 / b : m == c && h == Math.PI && (I = -.5 / b);

      for (l = 0; l <= b; l++) {
        var z = l / b;
        u.x = -a * Math.cos(d + z * e) * Math.sin(f + F * g);
        u.y = a * Math.cos(f + F * g);
        u.z = a * Math.sin(d + z * e) * Math.sin(f + F * g);
        v.push(u.x, u.y, u.z);
        p.copy(u).normalize();
        y.push(p.x, p.y, p.z);
        w.push(z + I, 1 - F);
        x.push(r++);
      }

      k.push(x);
    }

    for (m = 0; m < c; m++) for (l = 0; l < b; l++) a = k[m][l + 1], d = k[m][l], e = k[m + 1][l], g = k[m + 1][l + 1], (0 !== m || 0 < f) && t.push(a, d, g), (m !== c - 1 || h < Math.PI) && t.push(d, e, g);

    this.setIndex(t);
    this.setAttribute("position", new A(v, 3));
    this.setAttribute("normal", new A(y, 3));
    this.setAttribute("uv", new A(w, 2));
  }

  function fe(a, b, c, d, e, f) {
    G.call(this);
    this.type = "RingGeometry";
    this.parameters = {
      innerRadius: a,
      outerRadius: b,
      thetaSegments: c,
      phiSegments: d,
      thetaStart: e,
      thetaLength: f
    };
    this.fromBufferGeometry(new Uc(a, b, c, d, e, f));
    this.mergeVertices();
  }

  function Uc(a, b, c, d, e, f) {
    D.call(this);
    this.type = "RingBufferGeometry";
    this.parameters = {
      innerRadius: a,
      outerRadius: b,
      thetaSegments: c,
      phiSegments: d,
      thetaStart: e,
      thetaLength: f
    };
    a = a || .5;
    b = b || 1;
    e = void 0 !== e ? e : 0;
    f = void 0 !== f ? f : 2 * Math.PI;
    c = void 0 !== c ? Math.max(3, c) : 8;
    d = void 0 !== d ? Math.max(1, d) : 1;
    var g = [],
        h = [],
        l = [],
        m = [],
        r = a,
        k = (b - a) / d,
        u = new n(),
        p = new B(),
        t,
        v;

    for (t = 0; t <= d; t++) {
      for (v = 0; v <= c; v++) a = e + v / c * f, u.x = r * Math.cos(a), u.y = r * Math.sin(a), h.push(u.x, u.y, u.z), l.push(0, 0, 1), p.x = (u.x / b + 1) / 2, p.y = (u.y / b + 1) / 2, m.push(p.x, p.y);

      r += k;
    }

    for (t = 0; t < d; t++) for (b = t * (c + 1), v = 0; v < c; v++) a = v + b, e = a + c + 1, f = a + c + 2, r = a + 1, g.push(a, e, r), g.push(e, f, r);

    this.setIndex(g);
    this.setAttribute("position", new A(h, 3));
    this.setAttribute("normal", new A(l, 3));
    this.setAttribute("uv", new A(m, 2));
  }

  function ge(a, b, c, d) {
    G.call(this);
    this.type = "LatheGeometry";
    this.parameters = {
      points: a,
      segments: b,
      phiStart: c,
      phiLength: d
    };
    this.fromBufferGeometry(new Vc(a, b, c, d));
    this.mergeVertices();
  }

  function Vc(a, b, c, d) {
    D.call(this);
    this.type = "LatheBufferGeometry";
    this.parameters = {
      points: a,
      segments: b,
      phiStart: c,
      phiLength: d
    };
    b = Math.floor(b) || 12;
    c = c || 0;
    d = d || 2 * Math.PI;
    d = P.clamp(d, 0, 2 * Math.PI);
    var e = [],
        f = [],
        g = [],
        h = 1 / b,
        l = new n(),
        m = new B(),
        r;

    for (r = 0; r <= b; r++) {
      var k = c + r * h * d;
      var u = Math.sin(k),
          p = Math.cos(k);

      for (k = 0; k <= a.length - 1; k++) l.x = a[k].x * u, l.y = a[k].y, l.z = a[k].x * p, f.push(l.x, l.y, l.z), m.x = r / b, m.y = k / (a.length - 1), g.push(m.x, m.y);
    }

    for (r = 0; r < b; r++) for (k = 0; k < a.length - 1; k++) c = k + r * a.length, h = c + a.length, l = c + a.length + 1, m = c + 1, e.push(c, h, m), e.push(h, l, m);

    this.setIndex(e);
    this.setAttribute("position", new A(f, 3));
    this.setAttribute("uv", new A(g, 2));
    this.computeVertexNormals();
    if (d === 2 * Math.PI) for (d = this.attributes.normal.array, e = new n(), f = new n(), g = new n(), c = b * a.length * 3, k = r = 0; r < a.length; r++, k += 3) e.x = d[k + 0], e.y = d[k + 1], e.z = d[k + 2], f.x = d[c + k + 0], f.y = d[c + k + 1], f.z = d[c + k + 2], g.addVectors(e, f).normalize(), d[k + 0] = d[c + k + 0] = g.x, d[k + 1] = d[c + k + 1] = g.y, d[k + 2] = d[c + k + 2] = g.z;
  }

  function ec(a, b) {
    G.call(this);
    this.type = "ShapeGeometry";
    "object" === typeof b && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), b = b.curveSegments);
    this.parameters = {
      shapes: a,
      curveSegments: b
    };
    this.fromBufferGeometry(new fc(a, b));
    this.mergeVertices();
  }

  function fc(a, b) {
    function c(a) {
      var c,
          h = e.length / 3;
      a = a.extractPoints(b);
      var m = a.shape,
          k = a.holes;
      !1 === qb.isClockWise(m) && (m = m.reverse());
      a = 0;

      for (c = k.length; a < c; a++) {
        var r = k[a];
        !0 === qb.isClockWise(r) && (k[a] = r.reverse());
      }

      var n = qb.triangulateShape(m, k);
      a = 0;

      for (c = k.length; a < c; a++) r = k[a], m = m.concat(r);

      a = 0;

      for (c = m.length; a < c; a++) r = m[a], e.push(r.x, r.y, 0), f.push(0, 0, 1), g.push(r.x, r.y);

      a = 0;

      for (c = n.length; a < c; a++) m = n[a], d.push(m[0] + h, m[1] + h, m[2] + h), l += 3;
    }

    D.call(this);
    this.type = "ShapeBufferGeometry";
    this.parameters = {
      shapes: a,
      curveSegments: b
    };
    b = b || 12;
    var d = [],
        e = [],
        f = [],
        g = [],
        h = 0,
        l = 0;
    if (!1 === Array.isArray(a)) c(a);else for (var m = 0; m < a.length; m++) c(a[m]), this.addGroup(h, l, m), h += l, l = 0;
    this.setIndex(d);
    this.setAttribute("position", new A(e, 3));
    this.setAttribute("normal", new A(f, 3));
    this.setAttribute("uv", new A(g, 2));
  }

  function Yh(a, b) {
    b.shapes = [];
    if (Array.isArray(a)) for (var c = 0, d = a.length; c < d; c++) b.shapes.push(a[c].uuid);else b.shapes.push(a.uuid);
    return b;
  }

  function Wc(a, b) {
    D.call(this);
    this.type = "EdgesGeometry";
    this.parameters = {
      thresholdAngle: b
    };
    var c = [];
    b = Math.cos(P.DEG2RAD * (void 0 !== b ? b : 1));
    var d = [0, 0],
        e = {},
        f = ["a", "b", "c"];

    if (a.isBufferGeometry) {
      var g = new G();
      g.fromBufferGeometry(a);
    } else g = a.clone();

    g.mergeVertices();
    g.computeFaceNormals();
    a = g.vertices;
    g = g.faces;

    for (var h = 0, l = g.length; h < l; h++) for (var m = g[h], k = 0; 3 > k; k++) {
      var q = m[f[k]];
      var n = m[f[(k + 1) % 3]];
      d[0] = Math.min(q, n);
      d[1] = Math.max(q, n);
      q = d[0] + "," + d[1];
      void 0 === e[q] ? e[q] = {
        index1: d[0],
        index2: d[1],
        face1: h,
        face2: void 0
      } : e[q].face2 = h;
    }

    for (q in e) if (d = e[q], void 0 === d.face2 || g[d.face1].normal.dot(g[d.face2].normal) <= b) f = a[d.index1], c.push(f.x, f.y, f.z), f = a[d.index2], c.push(f.x, f.y, f.z);

    this.setAttribute("position", new A(c, 3));
  }

  function gc(a, b, c, d, e, f, g, h) {
    G.call(this);
    this.type = "CylinderGeometry";
    this.parameters = {
      radiusTop: a,
      radiusBottom: b,
      height: c,
      radialSegments: d,
      heightSegments: e,
      openEnded: f,
      thetaStart: g,
      thetaLength: h
    };
    this.fromBufferGeometry(new rb(a, b, c, d, e, f, g, h));
    this.mergeVertices();
  }

  function rb(a, b, c, d, e, f, g, h) {
    function l(c) {
      var e,
          f = new B(),
          l = new n(),
          r = 0,
          v = !0 === c ? a : b,
          x = !0 === c ? 1 : -1;
      var A = t;

      for (e = 1; e <= d; e++) q.push(0, y * x, 0), u.push(0, x, 0), p.push(.5, .5), t++;

      var H = t;

      for (e = 0; e <= d; e++) {
        var E = e / d * h + g,
            C = Math.cos(E);
        E = Math.sin(E);
        l.x = v * E;
        l.y = y * x;
        l.z = v * C;
        q.push(l.x, l.y, l.z);
        u.push(0, x, 0);
        f.x = .5 * C + .5;
        f.y = .5 * E * x + .5;
        p.push(f.x, f.y);
        t++;
      }

      for (e = 0; e < d; e++) f = A + e, l = H + e, !0 === c ? k.push(l, l + 1, f) : k.push(l + 1, l, f), r += 3;

      m.addGroup(w, r, !0 === c ? 1 : 2);
      w += r;
    }

    D.call(this);
    this.type = "CylinderBufferGeometry";
    this.parameters = {
      radiusTop: a,
      radiusBottom: b,
      height: c,
      radialSegments: d,
      heightSegments: e,
      openEnded: f,
      thetaStart: g,
      thetaLength: h
    };
    var m = this;
    a = void 0 !== a ? a : 1;
    b = void 0 !== b ? b : 1;
    c = c || 1;
    d = Math.floor(d) || 8;
    e = Math.floor(e) || 1;
    f = void 0 !== f ? f : !1;
    g = void 0 !== g ? g : 0;
    h = void 0 !== h ? h : 2 * Math.PI;
    var k = [],
        q = [],
        u = [],
        p = [],
        t = 0,
        v = [],
        y = c / 2,
        w = 0;

    (function () {
      var f,
          l,
          r = new n(),
          z = new n(),
          B = 0,
          A = (b - a) / c;

      for (l = 0; l <= e; l++) {
        var E = [],
            C = l / e,
            H = C * (b - a) + a;

        for (f = 0; f <= d; f++) {
          var G = f / d,
              D = G * h + g,
              J = Math.sin(D);
          D = Math.cos(D);
          z.x = H * J;
          z.y = -C * c + y;
          z.z = H * D;
          q.push(z.x, z.y, z.z);
          r.set(J, A, D).normalize();
          u.push(r.x, r.y, r.z);
          p.push(G, 1 - C);
          E.push(t++);
        }

        v.push(E);
      }

      for (f = 0; f < d; f++) for (l = 0; l < e; l++) r = v[l + 1][f], z = v[l + 1][f + 1], A = v[l][f + 1], k.push(v[l][f], r, A), k.push(r, z, A), B += 6;

      m.addGroup(w, B, 0);
      w += B;
    })();

    !1 === f && (0 < a && l(!0), 0 < b && l(!1));
    this.setIndex(k);
    this.setAttribute("position", new A(q, 3));
    this.setAttribute("normal", new A(u, 3));
    this.setAttribute("uv", new A(p, 2));
  }

  function he(a, b, c, d, e, f, g) {
    gc.call(this, 0, a, b, c, d, e, f, g);
    this.type = "ConeGeometry";
    this.parameters = {
      radius: a,
      height: b,
      radialSegments: c,
      heightSegments: d,
      openEnded: e,
      thetaStart: f,
      thetaLength: g
    };
  }

  function ie(a, b, c, d, e, f, g) {
    rb.call(this, 0, a, b, c, d, e, f, g);
    this.type = "ConeBufferGeometry";
    this.parameters = {
      radius: a,
      height: b,
      radialSegments: c,
      heightSegments: d,
      openEnded: e,
      thetaStart: f,
      thetaLength: g
    };
  }

  function je(a, b, c, d) {
    G.call(this);
    this.type = "CircleGeometry";
    this.parameters = {
      radius: a,
      segments: b,
      thetaStart: c,
      thetaLength: d
    };
    this.fromBufferGeometry(new Xc(a, b, c, d));
    this.mergeVertices();
  }

  function Xc(a, b, c, d) {
    D.call(this);
    this.type = "CircleBufferGeometry";
    this.parameters = {
      radius: a,
      segments: b,
      thetaStart: c,
      thetaLength: d
    };
    a = a || 1;
    b = void 0 !== b ? Math.max(3, b) : 8;
    c = void 0 !== c ? c : 0;
    d = void 0 !== d ? d : 2 * Math.PI;
    var e = [],
        f = [],
        g = [],
        h = [],
        l,
        m = new n(),
        k = new B();
    f.push(0, 0, 0);
    g.push(0, 0, 1);
    h.push(.5, .5);
    var q = 0;

    for (l = 3; q <= b; q++, l += 3) {
      var u = c + q / b * d;
      m.x = a * Math.cos(u);
      m.y = a * Math.sin(u);
      f.push(m.x, m.y, m.z);
      g.push(0, 0, 1);
      k.x = (f[l] / a + 1) / 2;
      k.y = (f[l + 1] / a + 1) / 2;
      h.push(k.x, k.y);
    }

    for (l = 1; l <= b; l++) e.push(l, l + 1, 0);

    this.setIndex(e);
    this.setAttribute("position", new A(f, 3));
    this.setAttribute("normal", new A(g, 3));
    this.setAttribute("uv", new A(h, 2));
  }

  function hc(a) {
    O.call(this);
    this.type = "ShadowMaterial";
    this.color = new J(0);
    this.transparent = !0;
    this.setValues(a);
  }

  function Yc(a) {
    va.call(this, a);
    this.type = "RawShaderMaterial";
  }

  function eb(a) {
    O.call(this);
    this.defines = {
      STANDARD: ""
    };
    this.type = "MeshStandardMaterial";
    this.color = new J(16777215);
    this.metalness = this.roughness = .5;
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new J(0);
    this.emissiveIntensity = 1;
    this.bumpMap = this.emissiveMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new B(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null;
    this.envMapIntensity = 1;
    this.refractionRatio = .98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a);
  }

  function ic(a) {
    eb.call(this);
    this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    };
    this.type = "MeshPhysicalMaterial";
    this.reflectivity = .5;
    this.clearcoatRoughness = this.clearcoat = 0;
    this.sheen = null;
    this.clearcoatNormalScale = new B(1, 1);
    this.clearcoatNormalMap = null;
    this.transparency = 0;
    this.setValues(a);
  }

  function Ra(a) {
    O.call(this);
    this.type = "MeshPhongMaterial";
    this.color = new J(16777215);
    this.specular = new J(1118481);
    this.shininess = 30;
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new J(0);
    this.emissiveIntensity = 1;
    this.bumpMap = this.emissiveMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new B(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.envMap = this.alphaMap = this.specularMap = null;
    this.combine = 0;
    this.reflectivity = 1;
    this.refractionRatio = .98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a);
  }

  function jc(a) {
    Ra.call(this);
    this.defines = {
      TOON: ""
    };
    this.type = "MeshToonMaterial";
    this.gradientMap = null;
    this.setValues(a);
  }

  function kc(a) {
    O.call(this);
    this.type = "MeshNormalMaterial";
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new B(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.morphNormals = this.morphTargets = this.skinning = this.fog = !1;
    this.setValues(a);
  }

  function lc(a) {
    O.call(this);
    this.type = "MeshLambertMaterial";
    this.color = new J(16777215);
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new J(0);
    this.emissiveIntensity = 1;
    this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null;
    this.combine = 0;
    this.reflectivity = 1;
    this.refractionRatio = .98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a);
  }

  function mc(a) {
    O.call(this);
    this.defines = {
      MATCAP: ""
    };
    this.type = "MeshMatcapMaterial";
    this.color = new J(16777215);
    this.bumpMap = this.map = this.matcap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new B(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.alphaMap = null;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a);
  }

  function nc(a) {
    R.call(this);
    this.type = "LineDashedMaterial";
    this.scale = 1;
    this.dashSize = 3;
    this.gapSize = 1;
    this.setValues(a);
  }

  function Ia(a, b, c, d) {
    this.parameterPositions = a;
    this._cachedIndex = 0;
    this.resultBuffer = void 0 !== d ? d : new b.constructor(c);
    this.sampleValues = b;
    this.valueSize = c;
  }

  function Re(a, b, c, d) {
    Ia.call(this, a, b, c, d);
    this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0;
  }

  function ke(a, b, c, d) {
    Ia.call(this, a, b, c, d);
  }

  function Se(a, b, c, d) {
    Ia.call(this, a, b, c, d);
  }

  function sa(a, b, c, d) {
    if (void 0 === a) throw Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === b || 0 === b.length) throw Error("THREE.KeyframeTrack: no keyframes in track named " + a);
    this.name = a;
    this.times = ta.convertArray(b, this.TimeBufferType);
    this.values = ta.convertArray(c, this.ValueBufferType);
    this.setInterpolation(d || this.DefaultInterpolation);
  }

  function Te(a, b, c) {
    sa.call(this, a, b, c);
  }

  function Ue(a, b, c, d) {
    sa.call(this, a, b, c, d);
  }

  function Zc(a, b, c, d) {
    sa.call(this, a, b, c, d);
  }

  function Ve(a, b, c, d) {
    Ia.call(this, a, b, c, d);
  }

  function le(a, b, c, d) {
    sa.call(this, a, b, c, d);
  }

  function We(a, b, c, d) {
    sa.call(this, a, b, c, d);
  }

  function $c(a, b, c, d) {
    sa.call(this, a, b, c, d);
  }

  function Ma(a, b, c) {
    this.name = a;
    this.tracks = c;
    this.duration = void 0 !== b ? b : -1;
    this.uuid = P.generateUUID();
    0 > this.duration && this.resetDuration();
  }

  function rk(a) {
    switch (a.toLowerCase()) {
      case "scalar":
      case "double":
      case "float":
      case "number":
      case "integer":
        return Zc;

      case "vector":
      case "vector2":
      case "vector3":
      case "vector4":
        return $c;

      case "color":
        return Ue;

      case "quaternion":
        return le;

      case "bool":
      case "boolean":
        return Te;

      case "string":
        return We;
    }

    throw Error("THREE.KeyframeTrack: Unsupported typeName: " + a);
  }

  function sk(a) {
    if (void 0 === a.type) throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
    var b = rk(a.type);

    if (void 0 === a.times) {
      var c = [],
          d = [];
      ta.flattenJSON(a.keys, c, d, "value");
      a.times = c;
      a.values = d;
    }

    return void 0 !== b.parse ? b.parse(a) : new b(a.name, a.times, a.values, a.interpolation);
  }

  function og(a, b, c) {
    var d = this,
        e = !1,
        f = 0,
        g = 0,
        h = void 0,
        l = [];
    this.onStart = void 0;
    this.onLoad = a;
    this.onProgress = b;
    this.onError = c;

    this.itemStart = function (a) {
      g++;
      if (!1 === e && void 0 !== d.onStart) d.onStart(a, f, g);
      e = !0;
    };

    this.itemEnd = function (a) {
      f++;
      if (void 0 !== d.onProgress) d.onProgress(a, f, g);
      if (f === g && (e = !1, void 0 !== d.onLoad)) d.onLoad();
    };

    this.itemError = function (a) {
      if (void 0 !== d.onError) d.onError(a);
    };

    this.resolveURL = function (a) {
      return h ? h(a) : a;
    };

    this.setURLModifier = function (a) {
      h = a;
      return this;
    };

    this.addHandler = function (a, b) {
      l.push(a, b);
      return this;
    };

    this.removeHandler = function (a) {
      a = l.indexOf(a);
      -1 !== a && l.splice(a, 2);
      return this;
    };

    this.getHandler = function (a) {
      for (var b = 0, c = l.length; b < c; b += 2) {
        var d = l[b + 1];
        if (l[b].test(a)) return d;
      }

      return null;
    };
  }

  function V(a) {
    this.manager = void 0 !== a ? a : Zh;
    this.crossOrigin = "anonymous";
    this.resourcePath = this.path = "";
  }

  function Na(a) {
    V.call(this, a);
  }

  function pg(a) {
    V.call(this, a);
  }

  function qg(a) {
    V.call(this, a);
  }

  function Xe(a) {
    V.call(this, a);
  }

  function ad(a) {
    V.call(this, a);
  }

  function Ye(a) {
    V.call(this, a);
  }

  function Ze(a) {
    V.call(this, a);
  }

  function C() {
    this.type = "Curve";
    this.arcLengthDivisions = 200;
  }

  function Ja(a, b, c, d, e, f, g, h) {
    C.call(this);
    this.type = "EllipseCurve";
    this.aX = a || 0;
    this.aY = b || 0;
    this.xRadius = c || 1;
    this.yRadius = d || 1;
    this.aStartAngle = e || 0;
    this.aEndAngle = f || 2 * Math.PI;
    this.aClockwise = g || !1;
    this.aRotation = h || 0;
  }

  function bd(a, b, c, d, e, f) {
    Ja.call(this, a, b, c, c, d, e, f);
    this.type = "ArcCurve";
  }

  function rg() {
    var a = 0,
        b = 0,
        c = 0,
        d = 0;
    return {
      initCatmullRom: function (e, f, g, h, l) {
        e = l * (g - e);
        h = l * (h - f);
        a = f;
        b = e;
        c = -3 * f + 3 * g - 2 * e - h;
        d = 2 * f - 2 * g + e + h;
      },
      initNonuniformCatmullRom: function (e, f, g, h, l, m, k) {
        e = ((f - e) / l - (g - e) / (l + m) + (g - f) / m) * m;
        h = ((g - f) / m - (h - f) / (m + k) + (h - g) / k) * m;
        a = f;
        b = e;
        c = -3 * f + 3 * g - 2 * e - h;
        d = 2 * f - 2 * g + e + h;
      },
      calc: function (e) {
        var f = e * e;
        return a + b * e + c * f + d * f * e;
      }
    };
  }

  function ma(a, b, c, d) {
    C.call(this);
    this.type = "CatmullRomCurve3";
    this.points = a || [];
    this.closed = b || !1;
    this.curveType = c || "centripetal";
    this.tension = d || .5;
  }

  function $h(a, b, c, d, e) {
    b = .5 * (d - b);
    e = .5 * (e - c);
    var f = a * a;
    return (2 * c - 2 * d + b + e) * a * f + (-3 * c + 3 * d - 2 * b - e) * f + b * a + c;
  }

  function me(a, b, c, d) {
    var e = 1 - a;
    return e * e * b + 2 * (1 - a) * a * c + a * a * d;
  }

  function ne(a, b, c, d, e) {
    var f = 1 - a,
        g = 1 - a;
    return f * f * f * b + 3 * g * g * a * c + 3 * (1 - a) * a * a * d + a * a * a * e;
  }

  function Sa(a, b, c, d) {
    C.call(this);
    this.type = "CubicBezierCurve";
    this.v0 = a || new B();
    this.v1 = b || new B();
    this.v2 = c || new B();
    this.v3 = d || new B();
  }

  function fb(a, b, c, d) {
    C.call(this);
    this.type = "CubicBezierCurve3";
    this.v0 = a || new n();
    this.v1 = b || new n();
    this.v2 = c || new n();
    this.v3 = d || new n();
  }

  function Da(a, b) {
    C.call(this);
    this.type = "LineCurve";
    this.v1 = a || new B();
    this.v2 = b || new B();
  }

  function Ta(a, b) {
    C.call(this);
    this.type = "LineCurve3";
    this.v1 = a || new n();
    this.v2 = b || new n();
  }

  function Ua(a, b, c) {
    C.call(this);
    this.type = "QuadraticBezierCurve";
    this.v0 = a || new B();
    this.v1 = b || new B();
    this.v2 = c || new B();
  }

  function gb(a, b, c) {
    C.call(this);
    this.type = "QuadraticBezierCurve3";
    this.v0 = a || new n();
    this.v1 = b || new n();
    this.v2 = c || new n();
  }

  function Va(a) {
    C.call(this);
    this.type = "SplineCurve";
    this.points = a || [];
  }

  function sb() {
    C.call(this);
    this.type = "CurvePath";
    this.curves = [];
    this.autoClose = !1;
  }

  function Wa(a) {
    sb.call(this);
    this.type = "Path";
    this.currentPoint = new B();
    a && this.setFromPoints(a);
  }

  function Ib(a) {
    Wa.call(this, a);
    this.uuid = P.generateUUID();
    this.type = "Shape";
    this.holes = [];
  }

  function T(a, b) {
    E.call(this);
    this.type = "Light";
    this.color = new J(a);
    this.intensity = void 0 !== b ? b : 1;
    this.receiveShadow = void 0;
  }

  function $e(a, b, c) {
    T.call(this, a, c);
    this.type = "HemisphereLight";
    this.castShadow = void 0;
    this.position.copy(E.DefaultUp);
    this.updateMatrix();
    this.groundColor = new J(b);
  }

  function hb(a) {
    this.camera = a;
    this.bias = 0;
    this.radius = 1;
    this.mapSize = new B(512, 512);
    this.mapPass = this.map = null;
    this.matrix = new Q();
    this._frustum = new Dd();
    this._frameExtents = new B(1, 1);
    this._viewportCount = 1;
    this._viewports = [new da(0, 0, 1, 1)];
  }

  function af() {
    hb.call(this, new U(50, 1, .5, 500));
  }

  function bf(a, b, c, d, e, f) {
    T.call(this, a, b);
    this.type = "SpotLight";
    this.position.copy(E.DefaultUp);
    this.updateMatrix();
    this.target = new E();
    Object.defineProperty(this, "power", {
      get: function () {
        return this.intensity * Math.PI;
      },
      set: function (a) {
        this.intensity = a / Math.PI;
      }
    });
    this.distance = void 0 !== c ? c : 0;
    this.angle = void 0 !== d ? d : Math.PI / 3;
    this.penumbra = void 0 !== e ? e : 0;
    this.decay = void 0 !== f ? f : 1;
    this.shadow = new af();
  }

  function sg() {
    hb.call(this, new U(90, 1, .5, 500));
    this._frameExtents = new B(4, 2);
    this._viewportCount = 6;
    this._viewports = [new da(2, 1, 1, 1), new da(0, 1, 1, 1), new da(3, 1, 1, 1), new da(1, 1, 1, 1), new da(3, 0, 1, 1), new da(1, 0, 1, 1)];
    this._cubeDirections = [new n(1, 0, 0), new n(-1, 0, 0), new n(0, 0, 1), new n(0, 0, -1), new n(0, 1, 0), new n(0, -1, 0)];
    this._cubeUps = [new n(0, 1, 0), new n(0, 1, 0), new n(0, 1, 0), new n(0, 1, 0), new n(0, 0, 1), new n(0, 0, -1)];
  }

  function cf(a, b, c, d) {
    T.call(this, a, b);
    this.type = "PointLight";
    Object.defineProperty(this, "power", {
      get: function () {
        return 4 * this.intensity * Math.PI;
      },
      set: function (a) {
        this.intensity = a / (4 * Math.PI);
      }
    });
    this.distance = void 0 !== c ? c : 0;
    this.decay = void 0 !== d ? d : 1;
    this.shadow = new sg();
  }

  function oe(a, b, c, d, e, f) {
    bb.call(this);
    this.type = "OrthographicCamera";
    this.zoom = 1;
    this.view = null;
    this.left = void 0 !== a ? a : -1;
    this.right = void 0 !== b ? b : 1;
    this.top = void 0 !== c ? c : 1;
    this.bottom = void 0 !== d ? d : -1;
    this.near = void 0 !== e ? e : .1;
    this.far = void 0 !== f ? f : 2E3;
    this.updateProjectionMatrix();
  }

  function df() {
    hb.call(this, new oe(-5, 5, 5, -5, .5, 500));
  }

  function ef(a, b) {
    T.call(this, a, b);
    this.type = "DirectionalLight";
    this.position.copy(E.DefaultUp);
    this.updateMatrix();
    this.target = new E();
    this.shadow = new df();
  }

  function ff(a, b) {
    T.call(this, a, b);
    this.type = "AmbientLight";
    this.castShadow = void 0;
  }

  function gf(a, b, c, d) {
    T.call(this, a, b);
    this.type = "RectAreaLight";
    this.width = void 0 !== c ? c : 10;
    this.height = void 0 !== d ? d : 10;
  }

  function hf(a) {
    V.call(this, a);
    this.textures = {};
  }

  function jf() {
    D.call(this);
    this.type = "InstancedBufferGeometry";
    this.maxInstancedCount = void 0;
  }

  function kf(a, b, c, d) {
    "number" === typeof c && (d = c, c = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));
    N.call(this, a, b, c);
    this.meshPerAttribute = d || 1;
  }

  function lf(a) {
    V.call(this, a);
  }

  function mf(a) {
    V.call(this, a);
  }

  function tg(a) {
    "undefined" === typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");
    "undefined" === typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported.");
    V.call(this, a);
    this.options = void 0;
  }

  function ug() {
    this.type = "ShapePath";
    this.color = new J();
    this.subPaths = [];
    this.currentPath = null;
  }

  function vg(a) {
    this.type = "Font";
    this.data = a;
  }

  function wg(a) {
    V.call(this, a);
  }

  function nf(a) {
    V.call(this, a);
  }

  function of() {
    this.coefficients = [];

    for (var a = 0; 9 > a; a++) this.coefficients.push(new n());
  }

  function Xa(a, b) {
    T.call(this, void 0, b);
    this.sh = void 0 !== a ? a : new of();
  }

  function xg(a, b, c) {
    Xa.call(this, void 0, c);
    a = new J().set(a);
    c = new J().set(b);
    b = new n(a.r, a.g, a.b);
    a = new n(c.r, c.g, c.b);
    c = Math.sqrt(Math.PI);
    var d = c * Math.sqrt(.75);
    this.sh.coefficients[0].copy(b).add(a).multiplyScalar(c);
    this.sh.coefficients[1].copy(b).sub(a).multiplyScalar(d);
  }

  function yg(a, b) {
    Xa.call(this, void 0, b);
    a = new J().set(a);
    this.sh.coefficients[0].set(a.r, a.g, a.b).multiplyScalar(2 * Math.sqrt(Math.PI));
  }

  function ai() {
    this.type = "StereoCamera";
    this.aspect = 1;
    this.eyeSep = .064;
    this.cameraL = new U();
    this.cameraL.layers.enable(1);
    this.cameraL.matrixAutoUpdate = !1;
    this.cameraR = new U();
    this.cameraR.layers.enable(2);
    this.cameraR.matrixAutoUpdate = !1;
    this._cache = {
      focus: null,
      fov: null,
      aspect: null,
      near: null,
      far: null,
      zoom: null,
      eyeSep: null
    };
  }

  function zg(a) {
    this.autoStart = void 0 !== a ? a : !0;
    this.elapsedTime = this.oldTime = this.startTime = 0;
    this.running = !1;
  }

  function Ag() {
    E.call(this);
    this.type = "AudioListener";
    this.context = Bg.getContext();
    this.gain = this.context.createGain();
    this.gain.connect(this.context.destination);
    this.filter = null;
    this.timeDelta = 0;
    this._clock = new zg();
  }

  function cd(a) {
    E.call(this);
    this.type = "Audio";
    this.listener = a;
    this.context = a.context;
    this.gain = this.context.createGain();
    this.gain.connect(a.getInput());
    this.autoplay = !1;
    this.buffer = null;
    this.detune = 0;
    this.loop = !1;
    this.offset = this.loopEnd = this.loopStart = 0;
    this.duration = void 0;
    this.playbackRate = 1;
    this.isPlaying = !1;
    this.hasPlaybackControl = !0;
    this.sourceType = "empty";
    this._pausedAt = this._startedAt = 0;
    this.filters = [];
  }

  function Cg(a) {
    cd.call(this, a);
    this.panner = this.context.createPanner();
    this.panner.panningModel = "HRTF";
    this.panner.connect(this.gain);
  }

  function Dg(a, b) {
    this.analyser = a.context.createAnalyser();
    this.analyser.fftSize = void 0 !== b ? b : 2048;
    this.data = new Uint8Array(this.analyser.frequencyBinCount);
    a.getOutput().connect(this.analyser);
  }

  function Eg(a, b, c) {
    this.binding = a;
    this.valueSize = c;
    a = Float64Array;

    switch (b) {
      case "quaternion":
        b = this._slerp;
        break;

      case "string":
      case "bool":
        a = Array;
        b = this._select;
        break;

      default:
        b = this._lerp;
    }

    this.buffer = new a(4 * c);
    this._mixBufferRegion = b;
    this.referenceCount = this.useCount = this.cumulativeWeight = 0;
  }

  function bi(a, b, c) {
    c = c || ya.parseTrackName(b);
    this._targetGroup = a;
    this._bindings = a.subscribe_(b, c);
  }

  function ya(a, b, c) {
    this.path = b;
    this.parsedPath = c || ya.parseTrackName(b);
    this.node = ya.findNode(a, this.parsedPath.nodeName) || a;
    this.rootNode = a;
  }

  function ci() {
    this.uuid = P.generateUUID();
    this._objects = Array.prototype.slice.call(arguments);
    this.nCachedObjects_ = 0;
    var a = {};
    this._indicesByUUID = a;

    for (var b = 0, c = arguments.length; b !== c; ++b) a[arguments[b].uuid] = b;

    this._paths = [];
    this._parsedPaths = [];
    this._bindings = [];
    this._bindingsIndicesByPath = {};
    var d = this;
    this.stats = {
      objects: {
        get total() {
          return d._objects.length;
        },

        get inUse() {
          return this.total - d.nCachedObjects_;
        }

      },

      get bindingsPerObject() {
        return d._bindings.length;
      }

    };
  }

  function di(a, b, c) {
    this._mixer = a;
    this._clip = b;
    this._localRoot = c || null;
    a = b.tracks;
    b = a.length;
    c = Array(b);

    for (var d = {
      endingStart: 2400,
      endingEnd: 2400
    }, e = 0; e !== b; ++e) {
      var f = a[e].createInterpolant(null);
      c[e] = f;
      f.settings = d;
    }

    this._interpolantSettings = d;
    this._interpolants = c;
    this._propertyBindings = Array(b);
    this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null;
    this.loop = 2201;
    this._loopCount = -1;
    this._startTime = null;
    this.time = 0;
    this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1;
    this.repetitions = Infinity;
    this.paused = !1;
    this.enabled = !0;
    this.clampWhenFinished = !1;
    this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0;
  }

  function Fg(a) {
    this._root = a;

    this._initMemoryManager();

    this.time = this._accuIndex = 0;
    this.timeScale = 1;
  }

  function pf(a, b) {
    "string" === typeof a && (console.warn("THREE.Uniform: Type parameter is no longer needed."), a = b);
    this.value = a;
  }

  function Gg(a, b, c) {
    pb.call(this, a, b);
    this.meshPerAttribute = c || 1;
  }

  function ei(a, b, c, d) {
    this.ray = new Rb(a, b);
    this.near = c || 0;
    this.far = d || Infinity;
    this.camera = null;
    this.params = {
      Mesh: {},
      Line: {},
      LOD: {},
      Points: {
        threshold: 1
      },
      Sprite: {}
    };
    Object.defineProperties(this.params, {
      PointCloud: {
        get: function () {
          console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");
          return this.Points;
        }
      }
    });
  }

  function fi(a, b) {
    return a.distance - b.distance;
  }

  function Hg(a, b, c, d) {
    if (!1 !== a.visible && (a.raycast(b, c), !0 === d)) {
      a = a.children;
      d = 0;

      for (var e = a.length; d < e; d++) Hg(a[d], b, c, !0);
    }
  }

  function gi(a, b, c) {
    this.radius = void 0 !== a ? a : 1;
    this.phi = void 0 !== b ? b : 0;
    this.theta = void 0 !== c ? c : 0;
    return this;
  }

  function hi(a, b, c) {
    this.radius = void 0 !== a ? a : 1;
    this.theta = void 0 !== b ? b : 0;
    this.y = void 0 !== c ? c : 0;
    return this;
  }

  function Ig(a, b) {
    this.min = void 0 !== a ? a : new B(Infinity, Infinity);
    this.max = void 0 !== b ? b : new B(-Infinity, -Infinity);
  }

  function Jg(a, b) {
    this.start = void 0 !== a ? a : new n();
    this.end = void 0 !== b ? b : new n();
  }

  function pe(a) {
    E.call(this);
    this.material = a;

    this.render = function () {};
  }

  function qe(a, b, c, d) {
    this.object = a;
    this.size = void 0 !== b ? b : 1;
    a = void 0 !== c ? c : 16711680;
    d = void 0 !== d ? d : 1;
    b = 0;
    (c = this.object.geometry) && c.isGeometry ? b = 3 * c.faces.length : c && c.isBufferGeometry && (b = c.attributes.normal.count);
    c = new D();
    b = new A(6 * b, 3);
    c.setAttribute("position", b);
    X.call(this, c, new R({
      color: a,
      linewidth: d
    }));
    this.matrixAutoUpdate = !1;
    this.update();
  }

  function dd(a, b) {
    E.call(this);
    this.light = a;
    this.light.updateMatrixWorld();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.color = b;
    a = new D();
    b = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1];

    for (var c = 0, d = 1; 32 > c; c++, d++) {
      var e = c / 32 * Math.PI * 2,
          f = d / 32 * Math.PI * 2;
      b.push(Math.cos(e), Math.sin(e), 1, Math.cos(f), Math.sin(f), 1);
    }

    a.setAttribute("position", new A(b, 3));
    b = new R({
      fog: !1
    });
    this.cone = new X(a, b);
    this.add(this.cone);
    this.update();
  }

  function ii(a) {
    var b = [];
    a && a.isBone && b.push(a);

    for (var c = 0; c < a.children.length; c++) b.push.apply(b, ii(a.children[c]));

    return b;
  }

  function ed(a) {
    for (var b = ii(a), c = new D(), d = [], e = [], f = new J(0, 0, 1), g = new J(0, 1, 0), h = 0; h < b.length; h++) {
      var l = b[h];
      l.parent && l.parent.isBone && (d.push(0, 0, 0), d.push(0, 0, 0), e.push(f.r, f.g, f.b), e.push(g.r, g.g, g.b));
    }

    c.setAttribute("position", new A(d, 3));
    c.setAttribute("color", new A(e, 3));
    d = new R({
      vertexColors: 2,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    });
    X.call(this, c, d);
    this.root = a;
    this.bones = b;
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
  }

  function fd(a, b, c) {
    this.light = a;
    this.light.updateMatrixWorld();
    this.color = c;
    a = new Hb(b, 4, 2);
    b = new Ga({
      wireframe: !0,
      fog: !1
    });
    ea.call(this, a, b);
    this.matrix = this.light.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.update();
  }

  function gd(a, b) {
    this.type = "RectAreaLightHelper";
    this.light = a;
    this.color = b;
    a = new D();
    a.setAttribute("position", new A([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], 3));
    a.computeBoundingSphere();
    b = new R({
      fog: !1
    });
    ra.call(this, a, b);
    a = new D();
    a.setAttribute("position", new A([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], 3));
    a.computeBoundingSphere();
    this.add(new ea(a, new Ga({
      side: 1,
      fog: !1
    })));
    this.update();
  }

  function hd(a, b, c) {
    E.call(this);
    this.light = a;
    this.light.updateMatrixWorld();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.color = c;
    a = new ac(b);
    a.rotateY(.5 * Math.PI);
    this.material = new Ga({
      wireframe: !0,
      fog: !1
    });
    void 0 === this.color && (this.material.vertexColors = 2);
    b = a.getAttribute("position");
    b = new Float32Array(3 * b.count);
    a.setAttribute("color", new N(b, 3));
    this.add(new ea(a, this.material));
    this.update();
  }

  function id(a, b) {
    this.lightProbe = a;
    this.size = b;
    a = new va({
      defines: {
        GAMMA_OUTPUT: ""
      },
      uniforms: {
        sh: {
          value: this.lightProbe.sh.coefficients
        },
        intensity: {
          value: this.lightProbe.intensity
        }
      },
      vertexShader: "varying vec3 vNormal;\nvoid main() {\n\tvNormal = normalize( normalMatrix * normal );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
      fragmentShader: "#define RECIPROCAL_PI 0.318309886\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\t// matrix is assumed to be orthogonal\n\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n}\nvec3 linearToOutput( in vec3 a ) {\n\t#ifdef GAMMA_OUTPUT\n\t\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n\t#else\n\t\treturn a;\n\t#endif\n}\n// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\t// normal is assumed to have unit length\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\t// band 0\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\t// band 1\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\t// band 2\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nuniform vec3 sh[ 9 ]; // sh coefficients\nuniform float intensity; // light probe intensity\nvarying vec3 vNormal;\nvoid main() {\n\tvec3 normal = normalize( vNormal );\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, sh );\n\tvec3 outgoingLight = RECIPROCAL_PI * irradiance * intensity;\n\toutgoingLight = linearToOutput( outgoingLight );\n\tgl_FragColor = vec4( outgoingLight, 1.0 );\n}"
    });
    b = new Hb(1, 32, 16);
    ea.call(this, b, a);
    this.onBeforeRender();
  }

  function qf(a, b, c, d) {
    a = a || 10;
    b = b || 10;
    c = new J(void 0 !== c ? c : 4473924);
    d = new J(void 0 !== d ? d : 8947848);
    var e = b / 2,
        f = a / b,
        g = a / 2;
    a = [];

    for (var h = [], l = 0, m = 0, k = -g; l <= b; l++, k += f) {
      a.push(-g, 0, k, g, 0, k);
      a.push(k, 0, -g, k, 0, g);
      var q = l === e ? c : d;
      q.toArray(h, m);
      m += 3;
      q.toArray(h, m);
      m += 3;
      q.toArray(h, m);
      m += 3;
      q.toArray(h, m);
      m += 3;
    }

    b = new D();
    b.setAttribute("position", new A(a, 3));
    b.setAttribute("color", new A(h, 3));
    c = new R({
      vertexColors: 2
    });
    X.call(this, b, c);
  }

  function rf(a, b, c, d, e, f) {
    a = a || 10;
    b = b || 16;
    c = c || 8;
    d = d || 64;
    e = new J(void 0 !== e ? e : 4473924);
    f = new J(void 0 !== f ? f : 8947848);
    var g = [],
        h = [],
        l;

    for (l = 0; l <= b; l++) {
      var m = l / b * 2 * Math.PI;
      var k = Math.sin(m) * a;
      m = Math.cos(m) * a;
      g.push(0, 0, 0);
      g.push(k, 0, m);
      var q = l & 1 ? e : f;
      h.push(q.r, q.g, q.b);
      h.push(q.r, q.g, q.b);
    }

    for (l = 0; l <= c; l++) {
      q = l & 1 ? e : f;
      var n = a - a / c * l;

      for (b = 0; b < d; b++) m = b / d * 2 * Math.PI, k = Math.sin(m) * n, m = Math.cos(m) * n, g.push(k, 0, m), h.push(q.r, q.g, q.b), m = (b + 1) / d * 2 * Math.PI, k = Math.sin(m) * n, m = Math.cos(m) * n, g.push(k, 0, m), h.push(q.r, q.g, q.b);
    }

    a = new D();
    a.setAttribute("position", new A(g, 3));
    a.setAttribute("color", new A(h, 3));
    g = new R({
      vertexColors: 2
    });
    X.call(this, a, g);
  }

  function jd(a, b, c, d) {
    this.audio = a;
    this.range = b || 1;
    this.divisionsInnerAngle = c || 16;
    this.divisionsOuterAngle = d || 2;
    a = new D();
    b = new Float32Array(3 * (3 * (this.divisionsInnerAngle + 2 * this.divisionsOuterAngle) + 3));
    a.setAttribute("position", new N(b, 3));
    b = new R({
      color: 65280
    });
    c = new R({
      color: 16776960
    });
    ra.call(this, a, [c, b]);
    this.update();
  }

  function re(a, b, c, d) {
    this.object = a;
    this.size = void 0 !== b ? b : 1;
    a = void 0 !== c ? c : 16776960;
    d = void 0 !== d ? d : 1;
    b = 0;
    (c = this.object.geometry) && c.isGeometry ? b = c.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
    c = new D();
    b = new A(6 * b, 3);
    c.setAttribute("position", b);
    X.call(this, c, new R({
      color: a,
      linewidth: d
    }));
    this.matrixAutoUpdate = !1;
    this.update();
  }

  function kd(a, b, c) {
    E.call(this);
    this.light = a;
    this.light.updateMatrixWorld();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.color = c;
    void 0 === b && (b = 1);
    a = new D();
    a.setAttribute("position", new A([-b, b, 0, b, b, 0, b, -b, 0, -b, -b, 0, -b, b, 0], 3));
    b = new R({
      fog: !1
    });
    this.lightPlane = new ra(a, b);
    this.add(this.lightPlane);
    a = new D();
    a.setAttribute("position", new A([0, 0, 0, 0, 0, 1], 3));
    this.targetLine = new ra(a, b);
    this.add(this.targetLine);
    this.update();
  }

  function se(a) {
    function b(a, b, d) {
      c(a, d);
      c(b, d);
    }

    function c(a, b) {
      f.push(0, 0, 0);
      g.push(b.r, b.g, b.b);
      void 0 === h[a] && (h[a] = []);
      h[a].push(f.length / 3 - 1);
    }

    var d = new D(),
        e = new R({
      color: 16777215,
      vertexColors: 1
    }),
        f = [],
        g = [],
        h = {},
        l = new J(16755200),
        m = new J(16711680),
        k = new J(43775),
        q = new J(16777215),
        n = new J(3355443);
    b("n1", "n2", l);
    b("n2", "n4", l);
    b("n4", "n3", l);
    b("n3", "n1", l);
    b("f1", "f2", l);
    b("f2", "f4", l);
    b("f4", "f3", l);
    b("f3", "f1", l);
    b("n1", "f1", l);
    b("n2", "f2", l);
    b("n3", "f3", l);
    b("n4", "f4", l);
    b("p", "n1", m);
    b("p", "n2", m);
    b("p", "n3", m);
    b("p", "n4", m);
    b("u1", "u2", k);
    b("u2", "u3", k);
    b("u3", "u1", k);
    b("c", "t", q);
    b("p", "c", n);
    b("cn1", "cn2", n);
    b("cn3", "cn4", n);
    b("cf1", "cf2", n);
    b("cf3", "cf4", n);
    d.setAttribute("position", new A(f, 3));
    d.setAttribute("color", new A(g, 3));
    X.call(this, d, e);
    this.camera = a;
    this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix();
    this.matrix = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.pointMap = h;
    this.update();
  }

  function na(a, b, c, d, e, f, g) {
    sf.set(e, f, g).unproject(d);
    a = b[a];
    if (void 0 !== a) for (c = c.getAttribute("position"), b = 0, d = a.length; b < d; b++) c.setXYZ(a[b], sf.x, sf.y, sf.z);
  }

  function tb(a, b) {
    this.object = a;
    void 0 === b && (b = 16776960);
    a = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
    var c = new Float32Array(24),
        d = new D();
    d.setIndex(new N(a, 1));
    d.setAttribute("position", new N(c, 3));
    X.call(this, d, new R({
      color: b
    }));
    this.matrixAutoUpdate = !1;
    this.update();
  }

  function te(a, b) {
    this.type = "Box3Helper";
    this.box = a;
    b = b || 16776960;
    a = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
    var c = new D();
    c.setIndex(new N(a, 1));
    c.setAttribute("position", new A([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3));
    X.call(this, c, new R({
      color: b
    }));
    this.geometry.computeBoundingSphere();
  }

  function ue(a, b, c) {
    this.type = "PlaneHelper";
    this.plane = a;
    this.size = void 0 === b ? 1 : b;
    a = void 0 !== c ? c : 16776960;
    b = new D();
    b.setAttribute("position", new A([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3));
    b.computeBoundingSphere();
    ra.call(this, b, new R({
      color: a
    }));
    b = new D();
    b.setAttribute("position", new A([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3));
    b.computeBoundingSphere();
    this.add(new ea(b, new Ga({
      color: a,
      opacity: .2,
      transparent: !0,
      depthWrite: !1
    })));
  }

  function ub(a, b, c, d, e, f) {
    E.call(this);
    void 0 === a && (a = new n(0, 0, 1));
    void 0 === b && (b = new n(0, 0, 0));
    void 0 === c && (c = 1);
    void 0 === d && (d = 16776960);
    void 0 === e && (e = .2 * c);
    void 0 === f && (f = .2 * e);
    void 0 === tf && (tf = new D(), tf.setAttribute("position", new A([0, 0, 0, 0, 1, 0], 3)), Kg = new rb(0, .5, 1, 5, 1), Kg.translate(0, -.5, 0));
    this.position.copy(b);
    this.line = new ra(tf, new R({
      color: d
    }));
    this.line.matrixAutoUpdate = !1;
    this.add(this.line);
    this.cone = new ea(Kg, new Ga({
      color: d
    }));
    this.cone.matrixAutoUpdate = !1;
    this.add(this.cone);
    this.setDirection(a);
    this.setLength(c, e, f);
  }

  function ve(a) {
    a = a || 1;
    var b = [0, 0, 0, a, 0, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 0, a];
    a = new D();
    a.setAttribute("position", new A(b, 3));
    a.setAttribute("color", new A([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
    b = new R({
      vertexColors: 2
    });
    X.call(this, a, b);
  }

  function ji(a) {
    console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
    ma.call(this, a);
    this.type = "catmullrom";
    this.closed = !0;
  }

  function ki(a) {
    console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
    ma.call(this, a);
    this.type = "catmullrom";
  }

  function Lg(a) {
    console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");
    ma.call(this, a);
    this.type = "catmullrom";
  }

  void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52));
  void 0 === Number.isInteger && (Number.isInteger = function (a) {
    return "number" === typeof a && isFinite(a) && Math.floor(a) === a;
  });
  void 0 === Math.sign && (Math.sign = function (a) {
    return 0 > a ? -1 : 0 < a ? 1 : +a;
  });
  !1 === "name" in Function.prototype && Object.defineProperty(Function.prototype, "name", {
    get: function () {
      return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
    }
  });
  void 0 === Object.assign && (Object.assign = function (a) {
    if (void 0 === a || null === a) throw new TypeError("Cannot convert undefined or null to object");

    for (var b = Object(a), c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (void 0 !== d && null !== d) for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (b[e] = d[e]);
    }

    return b;
  });
  Object.assign(Aa.prototype, {
    addEventListener: function (a, b) {
      void 0 === this._listeners && (this._listeners = {});
      var c = this._listeners;
      void 0 === c[a] && (c[a] = []);
      -1 === c[a].indexOf(b) && c[a].push(b);
    },
    hasEventListener: function (a, b) {
      if (void 0 === this._listeners) return !1;
      var c = this._listeners;
      return void 0 !== c[a] && -1 !== c[a].indexOf(b);
    },
    removeEventListener: function (a, b) {
      void 0 !== this._listeners && (a = this._listeners[a], void 0 !== a && (b = a.indexOf(b), -1 !== b && a.splice(b, 1)));
    },
    dispatchEvent: function (a) {
      if (void 0 !== this._listeners) {
        var b = this._listeners[a.type];

        if (void 0 !== b) {
          a.target = this;
          b = b.slice(0);

          for (var c = 0, d = b.length; c < d; c++) b[c].call(this, a);
        }
      }
    }
  });

  for (var oa = [], we = 0; 256 > we; we++) oa[we] = (16 > we ? "0" : "") + we.toString(16);

  var P = {
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,
    generateUUID: function () {
      var a = 4294967295 * Math.random() | 0,
          b = 4294967295 * Math.random() | 0,
          c = 4294967295 * Math.random() | 0,
          d = 4294967295 * Math.random() | 0;
      return (oa[a & 255] + oa[a >> 8 & 255] + oa[a >> 16 & 255] + oa[a >> 24 & 255] + "-" + oa[b & 255] + oa[b >> 8 & 255] + "-" + oa[b >> 16 & 15 | 64] + oa[b >> 24 & 255] + "-" + oa[c & 63 | 128] + oa[c >> 8 & 255] + "-" + oa[c >> 16 & 255] + oa[c >> 24 & 255] + oa[d & 255] + oa[d >> 8 & 255] + oa[d >> 16 & 255] + oa[d >> 24 & 255]).toUpperCase();
    },
    clamp: function (a, b, c) {
      return Math.max(b, Math.min(c, a));
    },
    euclideanModulo: function (a, b) {
      return (a % b + b) % b;
    },
    mapLinear: function (a, b, c, d, e) {
      return d + (a - b) * (e - d) / (c - b);
    },
    lerp: function (a, b, c) {
      return (1 - c) * a + c * b;
    },
    smoothstep: function (a, b, c) {
      if (a <= b) return 0;
      if (a >= c) return 1;
      a = (a - b) / (c - b);
      return a * a * (3 - 2 * a);
    },
    smootherstep: function (a, b, c) {
      if (a <= b) return 0;
      if (a >= c) return 1;
      a = (a - b) / (c - b);
      return a * a * a * (a * (6 * a - 15) + 10);
    },
    randInt: function (a, b) {
      return a + Math.floor(Math.random() * (b - a + 1));
    },
    randFloat: function (a, b) {
      return a + Math.random() * (b - a);
    },
    randFloatSpread: function (a) {
      return a * (.5 - Math.random());
    },
    degToRad: function (a) {
      return a * P.DEG2RAD;
    },
    radToDeg: function (a) {
      return a * P.RAD2DEG;
    },
    isPowerOfTwo: function (a) {
      return 0 === (a & a - 1) && 0 !== a;
    },
    ceilPowerOfTwo: function (a) {
      return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2));
    },
    floorPowerOfTwo: function (a) {
      return Math.pow(2, Math.floor(Math.log(a) / Math.LN2));
    }
  };
  Object.defineProperties(B.prototype, {
    width: {
      get: function () {
        return this.x;
      },
      set: function (a) {
        this.x = a;
      }
    },
    height: {
      get: function () {
        return this.y;
      },
      set: function (a) {
        this.y = a;
      }
    }
  });
  Object.assign(B.prototype, {
    isVector2: !0,
    set: function (a, b) {
      this.x = a;
      this.y = b;
      return this;
    },
    setScalar: function (a) {
      this.y = this.x = a;
      return this;
    },
    setX: function (a) {
      this.x = a;
      return this;
    },
    setY: function (a) {
      this.y = a;
      return this;
    },
    setComponent: function (a, b) {
      switch (a) {
        case 0:
          this.x = b;
          break;

        case 1:
          this.y = b;
          break;

        default:
          throw Error("index is out of range: " + a);
      }

      return this;
    },
    getComponent: function (a) {
      switch (a) {
        case 0:
          return this.x;

        case 1:
          return this.y;

        default:
          throw Error("index is out of range: " + a);
      }
    },
    clone: function () {
      return new this.constructor(this.x, this.y);
    },
    copy: function (a) {
      this.x = a.x;
      this.y = a.y;
      return this;
    },
    add: function (a, b) {
      if (void 0 !== b) return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
      this.x += a.x;
      this.y += a.y;
      return this;
    },
    addScalar: function (a) {
      this.x += a;
      this.y += a;
      return this;
    },
    addVectors: function (a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      return this;
    },
    addScaledVector: function (a, b) {
      this.x += a.x * b;
      this.y += a.y * b;
      return this;
    },
    sub: function (a, b) {
      if (void 0 !== b) return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
      this.x -= a.x;
      this.y -= a.y;
      return this;
    },
    subScalar: function (a) {
      this.x -= a;
      this.y -= a;
      return this;
    },
    subVectors: function (a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      return this;
    },
    multiply: function (a) {
      this.x *= a.x;
      this.y *= a.y;
      return this;
    },
    multiplyScalar: function (a) {
      this.x *= a;
      this.y *= a;
      return this;
    },
    divide: function (a) {
      this.x /= a.x;
      this.y /= a.y;
      return this;
    },
    divideScalar: function (a) {
      return this.multiplyScalar(1 / a);
    },
    applyMatrix3: function (a) {
      var b = this.x,
          c = this.y;
      a = a.elements;
      this.x = a[0] * b + a[3] * c + a[6];
      this.y = a[1] * b + a[4] * c + a[7];
      return this;
    },
    min: function (a) {
      this.x = Math.min(this.x, a.x);
      this.y = Math.min(this.y, a.y);
      return this;
    },
    max: function (a) {
      this.x = Math.max(this.x, a.x);
      this.y = Math.max(this.y, a.y);
      return this;
    },
    clamp: function (a, b) {
      this.x = Math.max(a.x, Math.min(b.x, this.x));
      this.y = Math.max(a.y, Math.min(b.y, this.y));
      return this;
    },
    clampScalar: function (a, b) {
      this.x = Math.max(a, Math.min(b, this.x));
      this.y = Math.max(a, Math.min(b, this.y));
      return this;
    },
    clampLength: function (a, b) {
      var c = this.length();
      return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c)));
    },
    floor: function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    },
    ceil: function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    },
    round: function () {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    },
    roundToZero: function () {
      this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
      this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
      return this;
    },
    negate: function () {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    },
    dot: function (a) {
      return this.x * a.x + this.y * a.y;
    },
    cross: function (a) {
      return this.x * a.y - this.y * a.x;
    },
    lengthSq: function () {
      return this.x * this.x + this.y * this.y;
    },
    length: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    manhattanLength: function () {
      return Math.abs(this.x) + Math.abs(this.y);
    },
    normalize: function () {
      return this.divideScalar(this.length() || 1);
    },
    angle: function () {
      var a = Math.atan2(this.y, this.x);
      0 > a && (a += 2 * Math.PI);
      return a;
    },
    distanceTo: function (a) {
      return Math.sqrt(this.distanceToSquared(a));
    },
    distanceToSquared: function (a) {
      var b = this.x - a.x;
      a = this.y - a.y;
      return b * b + a * a;
    },
    manhattanDistanceTo: function (a) {
      return Math.abs(this.x - a.x) + Math.abs(this.y - a.y);
    },
    setLength: function (a) {
      return this.normalize().multiplyScalar(a);
    },
    lerp: function (a, b) {
      this.x += (a.x - this.x) * b;
      this.y += (a.y - this.y) * b;
      return this;
    },
    lerpVectors: function (a, b, c) {
      return this.subVectors(b, a).multiplyScalar(c).add(a);
    },
    equals: function (a) {
      return a.x === this.x && a.y === this.y;
    },
    fromArray: function (a, b) {
      void 0 === b && (b = 0);
      this.x = a[b];
      this.y = a[b + 1];
      return this;
    },
    toArray: function (a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);
      a[b] = this.x;
      a[b + 1] = this.y;
      return a;
    },
    fromBufferAttribute: function (a, b, c) {
      void 0 !== c && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");
      this.x = a.getX(b);
      this.y = a.getY(b);
      return this;
    },
    rotateAround: function (a, b) {
      var c = Math.cos(b);
      b = Math.sin(b);
      var d = this.x - a.x,
          e = this.y - a.y;
      this.x = d * c - e * b + a.x;
      this.y = d * b + e * c + a.y;
      return this;
    }
  });
  Object.assign(wa, {
    slerp: function (a, b, c, d) {
      return c.copy(a).slerp(b, d);
    },
    slerpFlat: function (a, b, c, d, e, f, g) {
      var h = c[d + 0],
          l = c[d + 1],
          m = c[d + 2];
      c = c[d + 3];
      d = e[f + 0];
      var k = e[f + 1],
          q = e[f + 2];
      e = e[f + 3];

      if (c !== e || h !== d || l !== k || m !== q) {
        f = 1 - g;
        var n = h * d + l * k + m * q + c * e,
            p = 0 <= n ? 1 : -1,
            t = 1 - n * n;
        t > Number.EPSILON && (t = Math.sqrt(t), n = Math.atan2(t, n * p), f = Math.sin(f * n) / t, g = Math.sin(g * n) / t);
        p *= g;
        h = h * f + d * p;
        l = l * f + k * p;
        m = m * f + q * p;
        c = c * f + e * p;
        f === 1 - g && (g = 1 / Math.sqrt(h * h + l * l + m * m + c * c), h *= g, l *= g, m *= g, c *= g);
      }

      a[b] = h;
      a[b + 1] = l;
      a[b + 2] = m;
      a[b + 3] = c;
    }
  });
  Object.defineProperties(wa.prototype, {
    x: {
      get: function () {
        return this._x;
      },
      set: function (a) {
        this._x = a;

        this._onChangeCallback();
      }
    },
    y: {
      get: function () {
        return this._y;
      },
      set: function (a) {
        this._y = a;

        this._onChangeCallback();
      }
    },
    z: {
      get: function () {
        return this._z;
      },
      set: function (a) {
        this._z = a;

        this._onChangeCallback();
      }
    },
    w: {
      get: function () {
        return this._w;
      },
      set: function (a) {
        this._w = a;

        this._onChangeCallback();
      }
    }
  });
  Object.assign(wa.prototype, {
    isQuaternion: !0,
    set: function (a, b, c, d) {
      this._x = a;
      this._y = b;
      this._z = c;
      this._w = d;

      this._onChangeCallback();

      return this;
    },
    clone: function () {
      return new this.constructor(this._x, this._y, this._z, this._w);
    },
    copy: function (a) {
      this._x = a.x;
      this._y = a.y;
      this._z = a.z;
      this._w = a.w;

      this._onChangeCallback();

      return this;
    },
    setFromEuler: function (a, b) {
      if (!a || !a.isEuler) throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
      var c = a._x,
          d = a._y,
          e = a._z;
      a = a.order;
      var f = Math.cos,
          g = Math.sin,
          h = f(c / 2),
          l = f(d / 2);
      f = f(e / 2);
      c = g(c / 2);
      d = g(d / 2);
      e = g(e / 2);
      "XYZ" === a ? (this._x = c * l * f + h * d * e, this._y = h * d * f - c * l * e, this._z = h * l * e + c * d * f, this._w = h * l * f - c * d * e) : "YXZ" === a ? (this._x = c * l * f + h * d * e, this._y = h * d * f - c * l * e, this._z = h * l * e - c * d * f, this._w = h * l * f + c * d * e) : "ZXY" === a ? (this._x = c * l * f - h * d * e, this._y = h * d * f + c * l * e, this._z = h * l * e + c * d * f, this._w = h * l * f - c * d * e) : "ZYX" === a ? (this._x = c * l * f - h * d * e, this._y = h * d * f + c * l * e, this._z = h * l * e - c * d * f, this._w = h * l * f + c * d * e) : "YZX" === a ? (this._x = c * l * f + h * d * e, this._y = h * d * f + c * l * e, this._z = h * l * e - c * d * f, this._w = h * l * f - c * d * e) : "XZY" === a && (this._x = c * l * f - h * d * e, this._y = h * d * f - c * l * e, this._z = h * l * e + c * d * f, this._w = h * l * f + c * d * e);
      !1 !== b && this._onChangeCallback();
      return this;
    },
    setFromAxisAngle: function (a, b) {
      b /= 2;
      var c = Math.sin(b);
      this._x = a.x * c;
      this._y = a.y * c;
      this._z = a.z * c;
      this._w = Math.cos(b);

      this._onChangeCallback();

      return this;
    },
    setFromRotationMatrix: function (a) {
      var b = a.elements,
          c = b[0];
      a = b[4];
      var d = b[8],
          e = b[1],
          f = b[5],
          g = b[9],
          h = b[2],
          l = b[6];
      b = b[10];
      var m = c + f + b;
      0 < m ? (c = .5 / Math.sqrt(m + 1), this._w = .25 / c, this._x = (l - g) * c, this._y = (d - h) * c, this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b), this._w = (l - g) / c, this._x = .25 * c, this._y = (a + e) / c, this._z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b), this._w = (d - h) / c, this._x = (a + e) / c, this._y = .25 * c, this._z = (g + l) / c) : (c = 2 * Math.sqrt(1 + b - c - f), this._w = (e - a) / c, this._x = (d + h) / c, this._y = (g + l) / c, this._z = .25 * c);

      this._onChangeCallback();

      return this;
    },
    setFromUnitVectors: function (a, b) {
      var c = a.dot(b) + 1;
      1E-6 > c ? (c = 0, Math.abs(a.x) > Math.abs(a.z) ? (this._x = -a.y, this._y = a.x, this._z = 0) : (this._x = 0, this._y = -a.z, this._z = a.y)) : (this._x = a.y * b.z - a.z * b.y, this._y = a.z * b.x - a.x * b.z, this._z = a.x * b.y - a.y * b.x);
      this._w = c;
      return this.normalize();
    },
    angleTo: function (a) {
      return 2 * Math.acos(Math.abs(P.clamp(this.dot(a), -1, 1)));
    },
    rotateTowards: function (a, b) {
      var c = this.angleTo(a);
      if (0 === c) return this;
      this.slerp(a, Math.min(1, b / c));
      return this;
    },
    inverse: function () {
      return this.conjugate();
    },
    conjugate: function () {
      this._x *= -1;
      this._y *= -1;
      this._z *= -1;

      this._onChangeCallback();

      return this;
    },
    dot: function (a) {
      return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w;
    },
    lengthSq: function () {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    },
    length: function () {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    },
    normalize: function () {
      var a = this.length();
      0 === a ? (this._z = this._y = this._x = 0, this._w = 1) : (a = 1 / a, this._x *= a, this._y *= a, this._z *= a, this._w *= a);

      this._onChangeCallback();

      return this;
    },
    multiply: function (a, b) {
      return void 0 !== b ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a);
    },
    premultiply: function (a) {
      return this.multiplyQuaternions(a, this);
    },
    multiplyQuaternions: function (a, b) {
      var c = a._x,
          d = a._y,
          e = a._z;
      a = a._w;
      var f = b._x,
          g = b._y,
          h = b._z;
      b = b._w;
      this._x = c * b + a * f + d * h - e * g;
      this._y = d * b + a * g + e * f - c * h;
      this._z = e * b + a * h + c * g - d * f;
      this._w = a * b - c * f - d * g - e * h;

      this._onChangeCallback();

      return this;
    },
    slerp: function (a, b) {
      if (0 === b) return this;
      if (1 === b) return this.copy(a);
      var c = this._x,
          d = this._y,
          e = this._z,
          f = this._w,
          g = f * a._w + c * a._x + d * a._y + e * a._z;
      0 > g ? (this._w = -a._w, this._x = -a._x, this._y = -a._y, this._z = -a._z, g = -g) : this.copy(a);
      if (1 <= g) return this._w = f, this._x = c, this._y = d, this._z = e, this;
      a = 1 - g * g;
      if (a <= Number.EPSILON) return g = 1 - b, this._w = g * f + b * this._w, this._x = g * c + b * this._x, this._y = g * d + b * this._y, this._z = g * e + b * this._z, this.normalize(), this._onChangeCallback(), this;
      a = Math.sqrt(a);
      var h = Math.atan2(a, g);
      g = Math.sin((1 - b) * h) / a;
      b = Math.sin(b * h) / a;
      this._w = f * g + this._w * b;
      this._x = c * g + this._x * b;
      this._y = d * g + this._y * b;
      this._z = e * g + this._z * b;

      this._onChangeCallback();

      return this;
    },
    equals: function (a) {
      return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w;
    },
    fromArray: function (a, b) {
      void 0 === b && (b = 0);
      this._x = a[b];
      this._y = a[b + 1];
      this._z = a[b + 2];
      this._w = a[b + 3];

      this._onChangeCallback();

      return this;
    },
    toArray: function (a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);
      a[b] = this._x;
      a[b + 1] = this._y;
      a[b + 2] = this._z;
      a[b + 3] = this._w;
      return a;
    },
    _onChange: function (a) {
      this._onChangeCallback = a;
      return this;
    },
    _onChangeCallback: function () {}
  });
  var Mg = new n(),
      li = new wa();
  Object.assign(n.prototype, {
    isVector3: !0,
    set: function (a, b, c) {
      this.x = a;
      this.y = b;
      this.z = c;
      return this;
    },
    setScalar: function (a) {
      this.z = this.y = this.x = a;
      return this;
    },
    setX: function (a) {
      this.x = a;
      return this;
    },
    setY: function (a) {
      this.y = a;
      return this;
    },
    setZ: function (a) {
      this.z = a;
      return this;
    },
    setComponent: function (a, b) {
      switch (a) {
        case 0:
          this.x = b;
          break;

        case 1:
          this.y = b;
          break;

        case 2:
          this.z = b;
          break;

        default:
          throw Error("index is out of range: " + a);
      }

      return this;
    },
    getComponent: function (a) {
      switch (a) {
        case 0:
          return this.x;

        case 1:
          return this.y;

        case 2:
          return this.z;

        default:
          throw Error("index is out of range: " + a);
      }
    },
    clone: function () {
      return new this.constructor(this.x, this.y, this.z);
    },
    copy: function (a) {
      this.x = a.x;
      this.y = a.y;
      this.z = a.z;
      return this;
    },
    add: function (a, b) {
      if (void 0 !== b) return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
      this.x += a.x;
      this.y += a.y;
      this.z += a.z;
      return this;
    },
    addScalar: function (a) {
      this.x += a;
      this.y += a;
      this.z += a;
      return this;
    },
    addVectors: function (a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      this.z = a.z + b.z;
      return this;
    },
    addScaledVector: function (a, b) {
      this.x += a.x * b;
      this.y += a.y * b;
      this.z += a.z * b;
      return this;
    },
    sub: function (a, b) {
      if (void 0 !== b) return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
      this.x -= a.x;
      this.y -= a.y;
      this.z -= a.z;
      return this;
    },
    subScalar: function (a) {
      this.x -= a;
      this.y -= a;
      this.z -= a;
      return this;
    },
    subVectors: function (a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      this.z = a.z - b.z;
      return this;
    },
    multiply: function (a, b) {
      if (void 0 !== b) return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(a, b);
      this.x *= a.x;
      this.y *= a.y;
      this.z *= a.z;
      return this;
    },
    multiplyScalar: function (a) {
      this.x *= a;
      this.y *= a;
      this.z *= a;
      return this;
    },
    multiplyVectors: function (a, b) {
      this.x = a.x * b.x;
      this.y = a.y * b.y;
      this.z = a.z * b.z;
      return this;
    },
    applyEuler: function (a) {
      a && a.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");
      return this.applyQuaternion(li.setFromEuler(a));
    },
    applyAxisAngle: function (a, b) {
      return this.applyQuaternion(li.setFromAxisAngle(a, b));
    },
    applyMatrix3: function (a) {
      var b = this.x,
          c = this.y,
          d = this.z;
      a = a.elements;
      this.x = a[0] * b + a[3] * c + a[6] * d;
      this.y = a[1] * b + a[4] * c + a[7] * d;
      this.z = a[2] * b + a[5] * c + a[8] * d;
      return this;
    },
    applyMatrix4: function (a) {
      var b = this.x,
          c = this.y,
          d = this.z;
      a = a.elements;
      var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
      this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
      this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
      this.z = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
      return this;
    },
    applyQuaternion: function (a) {
      var b = this.x,
          c = this.y,
          d = this.z,
          e = a.x,
          f = a.y,
          g = a.z;
      a = a.w;
      var h = a * b + f * d - g * c,
          l = a * c + g * b - e * d,
          m = a * d + e * c - f * b;
      b = -e * b - f * c - g * d;
      this.x = h * a + b * -e + l * -g - m * -f;
      this.y = l * a + b * -f + m * -e - h * -g;
      this.z = m * a + b * -g + h * -f - l * -e;
      return this;
    },
    project: function (a) {
      return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix);
    },
    unproject: function (a) {
      return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld);
    },
    transformDirection: function (a) {
      var b = this.x,
          c = this.y,
          d = this.z;
      a = a.elements;
      this.x = a[0] * b + a[4] * c + a[8] * d;
      this.y = a[1] * b + a[5] * c + a[9] * d;
      this.z = a[2] * b + a[6] * c + a[10] * d;
      return this.normalize();
    },
    divide: function (a) {
      this.x /= a.x;
      this.y /= a.y;
      this.z /= a.z;
      return this;
    },
    divideScalar: function (a) {
      return this.multiplyScalar(1 / a);
    },
    min: function (a) {
      this.x = Math.min(this.x, a.x);
      this.y = Math.min(this.y, a.y);
      this.z = Math.min(this.z, a.z);
      return this;
    },
    max: function (a) {
      this.x = Math.max(this.x, a.x);
      this.y = Math.max(this.y, a.y);
      this.z = Math.max(this.z, a.z);
      return this;
    },
    clamp: function (a, b) {
      this.x = Math.max(a.x, Math.min(b.x, this.x));
      this.y = Math.max(a.y, Math.min(b.y, this.y));
      this.z = Math.max(a.z, Math.min(b.z, this.z));
      return this;
    },
    clampScalar: function (a, b) {
      this.x = Math.max(a, Math.min(b, this.x));
      this.y = Math.max(a, Math.min(b, this.y));
      this.z = Math.max(a, Math.min(b, this.z));
      return this;
    },
    clampLength: function (a, b) {
      var c = this.length();
      return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c)));
    },
    floor: function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      return this;
    },
    ceil: function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      return this;
    },
    round: function () {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      return this;
    },
    roundToZero: function () {
      this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
      this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
      this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
      return this;
    },
    negate: function () {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    },
    dot: function (a) {
      return this.x * a.x + this.y * a.y + this.z * a.z;
    },
    lengthSq: function () {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    },
    length: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },
    manhattanLength: function () {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    },
    normalize: function () {
      return this.divideScalar(this.length() || 1);
    },
    setLength: function (a) {
      return this.normalize().multiplyScalar(a);
    },
    lerp: function (a, b) {
      this.x += (a.x - this.x) * b;
      this.y += (a.y - this.y) * b;
      this.z += (a.z - this.z) * b;
      return this;
    },
    lerpVectors: function (a, b, c) {
      return this.subVectors(b, a).multiplyScalar(c).add(a);
    },
    cross: function (a, b) {
      return void 0 !== b ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(a, b)) : this.crossVectors(this, a);
    },
    crossVectors: function (a, b) {
      var c = a.x,
          d = a.y;
      a = a.z;
      var e = b.x,
          f = b.y;
      b = b.z;
      this.x = d * b - a * f;
      this.y = a * e - c * b;
      this.z = c * f - d * e;
      return this;
    },
    projectOnVector: function (a) {
      var b = a.dot(this) / a.lengthSq();
      return this.copy(a).multiplyScalar(b);
    },
    projectOnPlane: function (a) {
      Mg.copy(this).projectOnVector(a);
      return this.sub(Mg);
    },
    reflect: function (a) {
      return this.sub(Mg.copy(a).multiplyScalar(2 * this.dot(a)));
    },
    angleTo: function (a) {
      var b = Math.sqrt(this.lengthSq() * a.lengthSq());
      0 === b && console.error("THREE.Vector3: angleTo() can't handle zero length vectors.");
      a = this.dot(a) / b;
      return Math.acos(P.clamp(a, -1, 1));
    },
    distanceTo: function (a) {
      return Math.sqrt(this.distanceToSquared(a));
    },
    distanceToSquared: function (a) {
      var b = this.x - a.x,
          c = this.y - a.y;
      a = this.z - a.z;
      return b * b + c * c + a * a;
    },
    manhattanDistanceTo: function (a) {
      return Math.abs(this.x - a.x) + Math.abs(this.y - a.y) + Math.abs(this.z - a.z);
    },
    setFromSpherical: function (a) {
      return this.setFromSphericalCoords(a.radius, a.phi, a.theta);
    },
    setFromSphericalCoords: function (a, b, c) {
      var d = Math.sin(b) * a;
      this.x = d * Math.sin(c);
      this.y = Math.cos(b) * a;
      this.z = d * Math.cos(c);
      return this;
    },
    setFromCylindrical: function (a) {
      return this.setFromCylindricalCoords(a.radius, a.theta, a.y);
    },
    setFromCylindricalCoords: function (a, b, c) {
      this.x = a * Math.sin(b);
      this.y = c;
      this.z = a * Math.cos(b);
      return this;
    },
    setFromMatrixPosition: function (a) {
      a = a.elements;
      this.x = a[12];
      this.y = a[13];
      this.z = a[14];
      return this;
    },
    setFromMatrixScale: function (a) {
      var b = this.setFromMatrixColumn(a, 0).length(),
          c = this.setFromMatrixColumn(a, 1).length();
      a = this.setFromMatrixColumn(a, 2).length();
      this.x = b;
      this.y = c;
      this.z = a;
      return this;
    },
    setFromMatrixColumn: function (a, b) {
      return this.fromArray(a.elements, 4 * b);
    },
    equals: function (a) {
      return a.x === this.x && a.y === this.y && a.z === this.z;
    },
    fromArray: function (a, b) {
      void 0 === b && (b = 0);
      this.x = a[b];
      this.y = a[b + 1];
      this.z = a[b + 2];
      return this;
    },
    toArray: function (a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);
      a[b] = this.x;
      a[b + 1] = this.y;
      a[b + 2] = this.z;
      return a;
    },
    fromBufferAttribute: function (a, b, c) {
      void 0 !== c && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");
      this.x = a.getX(b);
      this.y = a.getY(b);
      this.z = a.getZ(b);
      return this;
    }
  });
  var oc = new n();
  Object.assign(Z.prototype, {
    isMatrix3: !0,
    set: function (a, b, c, d, e, f, g, h, l) {
      var m = this.elements;
      m[0] = a;
      m[1] = d;
      m[2] = g;
      m[3] = b;
      m[4] = e;
      m[5] = h;
      m[6] = c;
      m[7] = f;
      m[8] = l;
      return this;
    },
    identity: function () {
      this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
      return this;
    },
    clone: function () {
      return new this.constructor().fromArray(this.elements);
    },
    copy: function (a) {
      var b = this.elements;
      a = a.elements;
      b[0] = a[0];
      b[1] = a[1];
      b[2] = a[2];
      b[3] = a[3];
      b[4] = a[4];
      b[5] = a[5];
      b[6] = a[6];
      b[7] = a[7];
      b[8] = a[8];
      return this;
    },
    setFromMatrix4: function (a) {
      a = a.elements;
      this.set(a[0], a[4], a[8], a[1], a[5], a[9], a[2], a[6], a[10]);
      return this;
    },
    applyToBufferAttribute: function (a) {
      for (var b = 0, c = a.count; b < c; b++) oc.x = a.getX(b), oc.y = a.getY(b), oc.z = a.getZ(b), oc.applyMatrix3(this), a.setXYZ(b, oc.x, oc.y, oc.z);

      return a;
    },
    multiply: function (a) {
      return this.multiplyMatrices(this, a);
    },
    premultiply: function (a) {
      return this.multiplyMatrices(a, this);
    },
    multiplyMatrices: function (a, b) {
      var c = a.elements,
          d = b.elements;
      b = this.elements;
      a = c[0];
      var e = c[3],
          f = c[6],
          g = c[1],
          h = c[4],
          l = c[7],
          m = c[2],
          k = c[5];
      c = c[8];
      var q = d[0],
          n = d[3],
          p = d[6],
          t = d[1],
          v = d[4],
          y = d[7],
          w = d[2],
          x = d[5];
      d = d[8];
      b[0] = a * q + e * t + f * w;
      b[3] = a * n + e * v + f * x;
      b[6] = a * p + e * y + f * d;
      b[1] = g * q + h * t + l * w;
      b[4] = g * n + h * v + l * x;
      b[7] = g * p + h * y + l * d;
      b[2] = m * q + k * t + c * w;
      b[5] = m * n + k * v + c * x;
      b[8] = m * p + k * y + c * d;
      return this;
    },
    multiplyScalar: function (a) {
      var b = this.elements;
      b[0] *= a;
      b[3] *= a;
      b[6] *= a;
      b[1] *= a;
      b[4] *= a;
      b[7] *= a;
      b[2] *= a;
      b[5] *= a;
      b[8] *= a;
      return this;
    },
    determinant: function () {
      var a = this.elements,
          b = a[0],
          c = a[1],
          d = a[2],
          e = a[3],
          f = a[4],
          g = a[5],
          h = a[6],
          l = a[7];
      a = a[8];
      return b * f * a - b * g * l - c * e * a + c * g * h + d * e * l - d * f * h;
    },
    getInverse: function (a, b) {
      a && a.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
      var c = a.elements;
      a = this.elements;
      var d = c[0],
          e = c[1],
          f = c[2],
          g = c[3],
          h = c[4],
          l = c[5],
          m = c[6],
          k = c[7];
      c = c[8];
      var q = c * h - l * k,
          n = l * m - c * g,
          p = k * g - h * m,
          t = d * q + e * n + f * p;

      if (0 === t) {
        if (!0 === b) throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");
        console.warn("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");
        return this.identity();
      }

      b = 1 / t;
      a[0] = q * b;
      a[1] = (f * k - c * e) * b;
      a[2] = (l * e - f * h) * b;
      a[3] = n * b;
      a[4] = (c * d - f * m) * b;
      a[5] = (f * g - l * d) * b;
      a[6] = p * b;
      a[7] = (e * m - k * d) * b;
      a[8] = (h * d - e * g) * b;
      return this;
    },
    transpose: function () {
      var a = this.elements;
      var b = a[1];
      a[1] = a[3];
      a[3] = b;
      b = a[2];
      a[2] = a[6];
      a[6] = b;
      b = a[5];
      a[5] = a[7];
      a[7] = b;
      return this;
    },
    getNormalMatrix: function (a) {
      return this.setFromMatrix4(a).getInverse(this).transpose();
    },
    transposeIntoArray: function (a) {
      var b = this.elements;
      a[0] = b[0];
      a[1] = b[3];
      a[2] = b[6];
      a[3] = b[1];
      a[4] = b[4];
      a[5] = b[7];
      a[6] = b[2];
      a[7] = b[5];
      a[8] = b[8];
      return this;
    },
    setUvTransform: function (a, b, c, d, e, f, g) {
      var h = Math.cos(e);
      e = Math.sin(e);
      this.set(c * h, c * e, -c * (h * f + e * g) + f + a, -d * e, d * h, -d * (-e * f + h * g) + g + b, 0, 0, 1);
    },
    scale: function (a, b) {
      var c = this.elements;
      c[0] *= a;
      c[3] *= a;
      c[6] *= a;
      c[1] *= b;
      c[4] *= b;
      c[7] *= b;
      return this;
    },
    rotate: function (a) {
      var b = Math.cos(a);
      a = Math.sin(a);
      var c = this.elements,
          d = c[0],
          e = c[3],
          f = c[6],
          g = c[1],
          h = c[4],
          l = c[7];
      c[0] = b * d + a * g;
      c[3] = b * e + a * h;
      c[6] = b * f + a * l;
      c[1] = -a * d + b * g;
      c[4] = -a * e + b * h;
      c[7] = -a * f + b * l;
      return this;
    },
    translate: function (a, b) {
      var c = this.elements;
      c[0] += a * c[2];
      c[3] += a * c[5];
      c[6] += a * c[8];
      c[1] += b * c[2];
      c[4] += b * c[5];
      c[7] += b * c[8];
      return this;
    },
    equals: function (a) {
      var b = this.elements;
      a = a.elements;

      for (var c = 0; 9 > c; c++) if (b[c] !== a[c]) return !1;

      return !0;
    },
    fromArray: function (a, b) {
      void 0 === b && (b = 0);

      for (var c = 0; 9 > c; c++) this.elements[c] = a[c + b];

      return this;
    },
    toArray: function (a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);
      var c = this.elements;
      a[b] = c[0];
      a[b + 1] = c[1];
      a[b + 2] = c[2];
      a[b + 3] = c[3];
      a[b + 4] = c[4];
      a[b + 5] = c[5];
      a[b + 6] = c[6];
      a[b + 7] = c[7];
      a[b + 8] = c[8];
      return a;
    }
  });
  var ld,
      Jb = {
    getDataURL: function (a) {
      if ("undefined" == typeof HTMLCanvasElement) return a.src;

      if (!(a instanceof HTMLCanvasElement)) {
        void 0 === ld && (ld = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"));
        ld.width = a.width;
        ld.height = a.height;
        var b = ld.getContext("2d");
        a instanceof ImageData ? b.putImageData(a, 0, 0) : b.drawImage(a, 0, 0, a.width, a.height);
        a = ld;
      }

      return 2048 < a.width || 2048 < a.height ? a.toDataURL("image/jpeg", .6) : a.toDataURL("image/png");
    }
  },
      Si = 0;
  Y.DEFAULT_IMAGE = void 0;
  Y.DEFAULT_MAPPING = 300;
  Y.prototype = Object.assign(Object.create(Aa.prototype), {
    constructor: Y,
    isTexture: !0,
    updateMatrix: function () {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      this.name = a.name;
      this.image = a.image;
      this.mipmaps = a.mipmaps.slice(0);
      this.mapping = a.mapping;
      this.wrapS = a.wrapS;
      this.wrapT = a.wrapT;
      this.magFilter = a.magFilter;
      this.minFilter = a.minFilter;
      this.anisotropy = a.anisotropy;
      this.format = a.format;
      this.type = a.type;
      this.offset.copy(a.offset);
      this.repeat.copy(a.repeat);
      this.center.copy(a.center);
      this.rotation = a.rotation;
      this.matrixAutoUpdate = a.matrixAutoUpdate;
      this.matrix.copy(a.matrix);
      this.generateMipmaps = a.generateMipmaps;
      this.premultiplyAlpha = a.premultiplyAlpha;
      this.flipY = a.flipY;
      this.unpackAlignment = a.unpackAlignment;
      this.encoding = a.encoding;
      return this;
    },
    toJSON: function (a) {
      var b = void 0 === a || "string" === typeof a;
      if (!b && void 0 !== a.textures[this.uuid]) return a.textures[this.uuid];
      var c = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };

      if (void 0 !== this.image) {
        var d = this.image;
        void 0 === d.uuid && (d.uuid = P.generateUUID());

        if (!b && void 0 === a.images[d.uuid]) {
          if (Array.isArray(d)) {
            var e = [];

            for (var f = 0, g = d.length; f < g; f++) e.push(Jb.getDataURL(d[f]));
          } else e = Jb.getDataURL(d);

          a.images[d.uuid] = {
            uuid: d.uuid,
            url: e
          };
        }

        c.image = d.uuid;
      }

      b || (a.textures[this.uuid] = c);
      return c;
    },
    dispose: function () {
      this.dispatchEvent({
        type: "dispose"
      });
    },
    transformUv: function (a) {
      if (300 !== this.mapping) return a;
      a.applyMatrix3(this.matrix);
      if (0 > a.x || 1 < a.x) switch (this.wrapS) {
        case 1E3:
          a.x -= Math.floor(a.x);
          break;

        case 1001:
          a.x = 0 > a.x ? 0 : 1;
          break;

        case 1002:
          a.x = 1 === Math.abs(Math.floor(a.x) % 2) ? Math.ceil(a.x) - a.x : a.x - Math.floor(a.x);
      }
      if (0 > a.y || 1 < a.y) switch (this.wrapT) {
        case 1E3:
          a.y -= Math.floor(a.y);
          break;

        case 1001:
          a.y = 0 > a.y ? 0 : 1;
          break;

        case 1002:
          a.y = 1 === Math.abs(Math.floor(a.y) % 2) ? Math.ceil(a.y) - a.y : a.y - Math.floor(a.y);
      }
      this.flipY && (a.y = 1 - a.y);
      return a;
    }
  });
  Object.defineProperty(Y.prototype, "needsUpdate", {
    set: function (a) {
      !0 === a && this.version++;
    }
  });
  Object.defineProperties(da.prototype, {
    width: {
      get: function () {
        return this.z;
      },
      set: function (a) {
        this.z = a;
      }
    },
    height: {
      get: function () {
        return this.w;
      },
      set: function (a) {
        this.w = a;
      }
    }
  });
  Object.assign(da.prototype, {
    isVector4: !0,
    set: function (a, b, c, d) {
      this.x = a;
      this.y = b;
      this.z = c;
      this.w = d;
      return this;
    },
    setScalar: function (a) {
      this.w = this.z = this.y = this.x = a;
      return this;
    },
    setX: function (a) {
      this.x = a;
      return this;
    },
    setY: function (a) {
      this.y = a;
      return this;
    },
    setZ: function (a) {
      this.z = a;
      return this;
    },
    setW: function (a) {
      this.w = a;
      return this;
    },
    setComponent: function (a, b) {
      switch (a) {
        case 0:
          this.x = b;
          break;

        case 1:
          this.y = b;
          break;

        case 2:
          this.z = b;
          break;

        case 3:
          this.w = b;
          break;

        default:
          throw Error("index is out of range: " + a);
      }

      return this;
    },
    getComponent: function (a) {
      switch (a) {
        case 0:
          return this.x;

        case 1:
          return this.y;

        case 2:
          return this.z;

        case 3:
          return this.w;

        default:
          throw Error("index is out of range: " + a);
      }
    },
    clone: function () {
      return new this.constructor(this.x, this.y, this.z, this.w);
    },
    copy: function (a) {
      this.x = a.x;
      this.y = a.y;
      this.z = a.z;
      this.w = void 0 !== a.w ? a.w : 1;
      return this;
    },
    add: function (a, b) {
      if (void 0 !== b) return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
      this.x += a.x;
      this.y += a.y;
      this.z += a.z;
      this.w += a.w;
      return this;
    },
    addScalar: function (a) {
      this.x += a;
      this.y += a;
      this.z += a;
      this.w += a;
      return this;
    },
    addVectors: function (a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      this.z = a.z + b.z;
      this.w = a.w + b.w;
      return this;
    },
    addScaledVector: function (a, b) {
      this.x += a.x * b;
      this.y += a.y * b;
      this.z += a.z * b;
      this.w += a.w * b;
      return this;
    },
    sub: function (a, b) {
      if (void 0 !== b) return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
      this.x -= a.x;
      this.y -= a.y;
      this.z -= a.z;
      this.w -= a.w;
      return this;
    },
    subScalar: function (a) {
      this.x -= a;
      this.y -= a;
      this.z -= a;
      this.w -= a;
      return this;
    },
    subVectors: function (a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      this.z = a.z - b.z;
      this.w = a.w - b.w;
      return this;
    },
    multiplyScalar: function (a) {
      this.x *= a;
      this.y *= a;
      this.z *= a;
      this.w *= a;
      return this;
    },
    applyMatrix4: function (a) {
      var b = this.x,
          c = this.y,
          d = this.z,
          e = this.w;
      a = a.elements;
      this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
      this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
      this.z = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
      this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
      return this;
    },
    divideScalar: function (a) {
      return this.multiplyScalar(1 / a);
    },
    setAxisAngleFromQuaternion: function (a) {
      this.w = 2 * Math.acos(a.w);
      var b = Math.sqrt(1 - a.w * a.w);
      1E-4 > b ? (this.x = 1, this.z = this.y = 0) : (this.x = a.x / b, this.y = a.y / b, this.z = a.z / b);
      return this;
    },
    setAxisAngleFromRotationMatrix: function (a) {
      a = a.elements;
      var b = a[0];
      var c = a[4];
      var d = a[8],
          e = a[1],
          f = a[5],
          g = a[9];
      var h = a[2];
      var l = a[6];
      var m = a[10];

      if (.01 > Math.abs(c - e) && .01 > Math.abs(d - h) && .01 > Math.abs(g - l)) {
        if (.1 > Math.abs(c + e) && .1 > Math.abs(d + h) && .1 > Math.abs(g + l) && .1 > Math.abs(b + f + m - 3)) return this.set(1, 0, 0, 0), this;
        a = Math.PI;
        b = (b + 1) / 2;
        f = (f + 1) / 2;
        m = (m + 1) / 2;
        c = (c + e) / 4;
        d = (d + h) / 4;
        g = (g + l) / 4;
        b > f && b > m ? .01 > b ? (l = 0, c = h = .707106781) : (l = Math.sqrt(b), h = c / l, c = d / l) : f > m ? .01 > f ? (l = .707106781, h = 0, c = .707106781) : (h = Math.sqrt(f), l = c / h, c = g / h) : .01 > m ? (h = l = .707106781, c = 0) : (c = Math.sqrt(m), l = d / c, h = g / c);
        this.set(l, h, c, a);
        return this;
      }

      a = Math.sqrt((l - g) * (l - g) + (d - h) * (d - h) + (e - c) * (e - c));
      .001 > Math.abs(a) && (a = 1);
      this.x = (l - g) / a;
      this.y = (d - h) / a;
      this.z = (e - c) / a;
      this.w = Math.acos((b + f + m - 1) / 2);
      return this;
    },
    min: function (a) {
      this.x = Math.min(this.x, a.x);
      this.y = Math.min(this.y, a.y);
      this.z = Math.min(this.z, a.z);
      this.w = Math.min(this.w, a.w);
      return this;
    },
    max: function (a) {
      this.x = Math.max(this.x, a.x);
      this.y = Math.max(this.y, a.y);
      this.z = Math.max(this.z, a.z);
      this.w = Math.max(this.w, a.w);
      return this;
    },
    clamp: function (a, b) {
      this.x = Math.max(a.x, Math.min(b.x, this.x));
      this.y = Math.max(a.y, Math.min(b.y, this.y));
      this.z = Math.max(a.z, Math.min(b.z, this.z));
      this.w = Math.max(a.w, Math.min(b.w, this.w));
      return this;
    },
    clampScalar: function (a, b) {
      this.x = Math.max(a, Math.min(b, this.x));
      this.y = Math.max(a, Math.min(b, this.y));
      this.z = Math.max(a, Math.min(b, this.z));
      this.w = Math.max(a, Math.min(b, this.w));
      return this;
    },
    clampLength: function (a, b) {
      var c = this.length();
      return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c)));
    },
    floor: function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      this.w = Math.floor(this.w);
      return this;
    },
    ceil: function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      this.w = Math.ceil(this.w);
      return this;
    },
    round: function () {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      this.w = Math.round(this.w);
      return this;
    },
    roundToZero: function () {
      this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
      this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
      this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
      this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w);
      return this;
    },
    negate: function () {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      this.w = -this.w;
      return this;
    },
    dot: function (a) {
      return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w;
    },
    lengthSq: function () {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    },
    length: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    },
    manhattanLength: function () {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    },
    normalize: function () {
      return this.divideScalar(this.length() || 1);
    },
    setLength: function (a) {
      return this.normalize().multiplyScalar(a);
    },
    lerp: function (a, b) {
      this.x += (a.x - this.x) * b;
      this.y += (a.y - this.y) * b;
      this.z += (a.z - this.z) * b;
      this.w += (a.w - this.w) * b;
      return this;
    },
    lerpVectors: function (a, b, c) {
      return this.subVectors(b, a).multiplyScalar(c).add(a);
    },
    equals: function (a) {
      return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w;
    },
    fromArray: function (a, b) {
      void 0 === b && (b = 0);
      this.x = a[b];
      this.y = a[b + 1];
      this.z = a[b + 2];
      this.w = a[b + 3];
      return this;
    },
    toArray: function (a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);
      a[b] = this.x;
      a[b + 1] = this.y;
      a[b + 2] = this.z;
      a[b + 3] = this.w;
      return a;
    },
    fromBufferAttribute: function (a, b, c) {
      void 0 !== c && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");
      this.x = a.getX(b);
      this.y = a.getY(b);
      this.z = a.getZ(b);
      this.w = a.getW(b);
      return this;
    }
  });
  Ba.prototype = Object.assign(Object.create(Aa.prototype), {
    constructor: Ba,
    isWebGLRenderTarget: !0,
    setSize: function (a, b) {
      if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.texture.image.width = a, this.texture.image.height = b, this.dispose();
      this.viewport.set(0, 0, a, b);
      this.scissor.set(0, 0, a, b);
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      this.width = a.width;
      this.height = a.height;
      this.viewport.copy(a.viewport);
      this.texture = a.texture.clone();
      this.depthBuffer = a.depthBuffer;
      this.stencilBuffer = a.stencilBuffer;
      this.depthTexture = a.depthTexture;
      return this;
    },
    dispose: function () {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });
  Sf.prototype = Object.assign(Object.create(Ba.prototype), {
    constructor: Sf,
    isWebGLMultisampleRenderTarget: !0,
    copy: function (a) {
      Ba.prototype.copy.call(this, a);
      this.samples = a.samples;
      return this;
    }
  });
  var Ka = new n(),
      ca = new Q(),
      tk = new n(0, 0, 0),
      uk = new n(1, 1, 1),
      Kb = new n(),
      uf = new n(),
      pa = new n();
  Object.assign(Q.prototype, {
    isMatrix4: !0,
    set: function (a, b, c, d, e, f, g, h, l, m, k, q, n, p, t, v) {
      var r = this.elements;
      r[0] = a;
      r[4] = b;
      r[8] = c;
      r[12] = d;
      r[1] = e;
      r[5] = f;
      r[9] = g;
      r[13] = h;
      r[2] = l;
      r[6] = m;
      r[10] = k;
      r[14] = q;
      r[3] = n;
      r[7] = p;
      r[11] = t;
      r[15] = v;
      return this;
    },
    identity: function () {
      this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      return this;
    },
    clone: function () {
      return new Q().fromArray(this.elements);
    },
    copy: function (a) {
      var b = this.elements;
      a = a.elements;
      b[0] = a[0];
      b[1] = a[1];
      b[2] = a[2];
      b[3] = a[3];
      b[4] = a[4];
      b[5] = a[5];
      b[6] = a[6];
      b[7] = a[7];
      b[8] = a[8];
      b[9] = a[9];
      b[10] = a[10];
      b[11] = a[11];
      b[12] = a[12];
      b[13] = a[13];
      b[14] = a[14];
      b[15] = a[15];
      return this;
    },
    copyPosition: function (a) {
      var b = this.elements;
      a = a.elements;
      b[12] = a[12];
      b[13] = a[13];
      b[14] = a[14];
      return this;
    },
    extractBasis: function (a, b, c) {
      a.setFromMatrixColumn(this, 0);
      b.setFromMatrixColumn(this, 1);
      c.setFromMatrixColumn(this, 2);
      return this;
    },
    makeBasis: function (a, b, c) {
      this.set(a.x, b.x, c.x, 0, a.y, b.y, c.y, 0, a.z, b.z, c.z, 0, 0, 0, 0, 1);
      return this;
    },
    extractRotation: function (a) {
      var b = this.elements,
          c = a.elements,
          d = 1 / Ka.setFromMatrixColumn(a, 0).length(),
          e = 1 / Ka.setFromMatrixColumn(a, 1).length();
      a = 1 / Ka.setFromMatrixColumn(a, 2).length();
      b[0] = c[0] * d;
      b[1] = c[1] * d;
      b[2] = c[2] * d;
      b[3] = 0;
      b[4] = c[4] * e;
      b[5] = c[5] * e;
      b[6] = c[6] * e;
      b[7] = 0;
      b[8] = c[8] * a;
      b[9] = c[9] * a;
      b[10] = c[10] * a;
      b[11] = 0;
      b[12] = 0;
      b[13] = 0;
      b[14] = 0;
      b[15] = 1;
      return this;
    },
    makeRotationFromEuler: function (a) {
      a && a.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
      var b = this.elements,
          c = a.x,
          d = a.y,
          e = a.z,
          f = Math.cos(c);
      c = Math.sin(c);
      var g = Math.cos(d);
      d = Math.sin(d);
      var h = Math.cos(e);
      e = Math.sin(e);

      if ("XYZ" === a.order) {
        a = f * h;
        var l = f * e,
            m = c * h,
            k = c * e;
        b[0] = g * h;
        b[4] = -g * e;
        b[8] = d;
        b[1] = l + m * d;
        b[5] = a - k * d;
        b[9] = -c * g;
        b[2] = k - a * d;
        b[6] = m + l * d;
        b[10] = f * g;
      } else "YXZ" === a.order ? (a = g * h, l = g * e, m = d * h, k = d * e, b[0] = a + k * c, b[4] = m * c - l, b[8] = f * d, b[1] = f * e, b[5] = f * h, b[9] = -c, b[2] = l * c - m, b[6] = k + a * c, b[10] = f * g) : "ZXY" === a.order ? (a = g * h, l = g * e, m = d * h, k = d * e, b[0] = a - k * c, b[4] = -f * e, b[8] = m + l * c, b[1] = l + m * c, b[5] = f * h, b[9] = k - a * c, b[2] = -f * d, b[6] = c, b[10] = f * g) : "ZYX" === a.order ? (a = f * h, l = f * e, m = c * h, k = c * e, b[0] = g * h, b[4] = m * d - l, b[8] = a * d + k, b[1] = g * e, b[5] = k * d + a, b[9] = l * d - m, b[2] = -d, b[6] = c * g, b[10] = f * g) : "YZX" === a.order ? (a = f * g, l = f * d, m = c * g, k = c * d, b[0] = g * h, b[4] = k - a * e, b[8] = m * e + l, b[1] = e, b[5] = f * h, b[9] = -c * h, b[2] = -d * h, b[6] = l * e + m, b[10] = a - k * e) : "XZY" === a.order && (a = f * g, l = f * d, m = c * g, k = c * d, b[0] = g * h, b[4] = -e, b[8] = d * h, b[1] = a * e + k, b[5] = f * h, b[9] = l * e - m, b[2] = m * e - l, b[6] = c * h, b[10] = k * e + a);

      b[3] = 0;
      b[7] = 0;
      b[11] = 0;
      b[12] = 0;
      b[13] = 0;
      b[14] = 0;
      b[15] = 1;
      return this;
    },
    makeRotationFromQuaternion: function (a) {
      return this.compose(tk, a, uk);
    },
    lookAt: function (a, b, c) {
      var d = this.elements;
      pa.subVectors(a, b);
      0 === pa.lengthSq() && (pa.z = 1);
      pa.normalize();
      Kb.crossVectors(c, pa);
      0 === Kb.lengthSq() && (1 === Math.abs(c.z) ? pa.x += 1E-4 : pa.z += 1E-4, pa.normalize(), Kb.crossVectors(c, pa));
      Kb.normalize();
      uf.crossVectors(pa, Kb);
      d[0] = Kb.x;
      d[4] = uf.x;
      d[8] = pa.x;
      d[1] = Kb.y;
      d[5] = uf.y;
      d[9] = pa.y;
      d[2] = Kb.z;
      d[6] = uf.z;
      d[10] = pa.z;
      return this;
    },
    multiply: function (a, b) {
      return void 0 !== b ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a);
    },
    premultiply: function (a) {
      return this.multiplyMatrices(a, this);
    },
    multiplyMatrices: function (a, b) {
      var c = a.elements,
          d = b.elements;
      b = this.elements;
      a = c[0];
      var e = c[4],
          f = c[8],
          g = c[12],
          h = c[1],
          l = c[5],
          m = c[9],
          k = c[13],
          q = c[2],
          n = c[6],
          p = c[10],
          t = c[14],
          v = c[3],
          y = c[7],
          w = c[11];
      c = c[15];
      var x = d[0],
          B = d[4],
          I = d[8],
          z = d[12],
          A = d[1],
          E = d[5],
          C = d[9],
          D = d[13],
          H = d[2],
          G = d[6],
          J = d[10],
          L = d[14],
          N = d[3],
          O = d[7],
          P = d[11];
      d = d[15];
      b[0] = a * x + e * A + f * H + g * N;
      b[4] = a * B + e * E + f * G + g * O;
      b[8] = a * I + e * C + f * J + g * P;
      b[12] = a * z + e * D + f * L + g * d;
      b[1] = h * x + l * A + m * H + k * N;
      b[5] = h * B + l * E + m * G + k * O;
      b[9] = h * I + l * C + m * J + k * P;
      b[13] = h * z + l * D + m * L + k * d;
      b[2] = q * x + n * A + p * H + t * N;
      b[6] = q * B + n * E + p * G + t * O;
      b[10] = q * I + n * C + p * J + t * P;
      b[14] = q * z + n * D + p * L + t * d;
      b[3] = v * x + y * A + w * H + c * N;
      b[7] = v * B + y * E + w * G + c * O;
      b[11] = v * I + y * C + w * J + c * P;
      b[15] = v * z + y * D + w * L + c * d;
      return this;
    },
    multiplyScalar: function (a) {
      var b = this.elements;
      b[0] *= a;
      b[4] *= a;
      b[8] *= a;
      b[12] *= a;
      b[1] *= a;
      b[5] *= a;
      b[9] *= a;
      b[13] *= a;
      b[2] *= a;
      b[6] *= a;
      b[10] *= a;
      b[14] *= a;
      b[3] *= a;
      b[7] *= a;
      b[11] *= a;
      b[15] *= a;
      return this;
    },
    applyToBufferAttribute: function (a) {
      for (var b = 0, c = a.count; b < c; b++) Ka.x = a.getX(b), Ka.y = a.getY(b), Ka.z = a.getZ(b), Ka.applyMatrix4(this), a.setXYZ(b, Ka.x, Ka.y, Ka.z);

      return a;
    },
    determinant: function () {
      var a = this.elements,
          b = a[0],
          c = a[4],
          d = a[8],
          e = a[12],
          f = a[1],
          g = a[5],
          h = a[9],
          l = a[13],
          m = a[2],
          k = a[6],
          q = a[10],
          n = a[14];
      return a[3] * (+e * h * k - d * l * k - e * g * q + c * l * q + d * g * n - c * h * n) + a[7] * (+b * h * n - b * l * q + e * f * q - d * f * n + d * l * m - e * h * m) + a[11] * (+b * l * k - b * g * n - e * f * k + c * f * n + e * g * m - c * l * m) + a[15] * (-d * g * m - b * h * k + b * g * q + d * f * k - c * f * q + c * h * m);
    },
    transpose: function () {
      var a = this.elements;
      var b = a[1];
      a[1] = a[4];
      a[4] = b;
      b = a[2];
      a[2] = a[8];
      a[8] = b;
      b = a[6];
      a[6] = a[9];
      a[9] = b;
      b = a[3];
      a[3] = a[12];
      a[12] = b;
      b = a[7];
      a[7] = a[13];
      a[13] = b;
      b = a[11];
      a[11] = a[14];
      a[14] = b;
      return this;
    },
    setPosition: function (a, b, c) {
      var d = this.elements;
      a.isVector3 ? (d[12] = a.x, d[13] = a.y, d[14] = a.z) : (d[12] = a, d[13] = b, d[14] = c);
      return this;
    },
    getInverse: function (a, b) {
      var c = this.elements,
          d = a.elements;
      a = d[0];
      var e = d[1],
          f = d[2],
          g = d[3],
          h = d[4],
          l = d[5],
          m = d[6],
          k = d[7],
          q = d[8],
          n = d[9],
          p = d[10],
          t = d[11],
          v = d[12],
          y = d[13],
          w = d[14];
      d = d[15];
      var x = n * w * k - y * p * k + y * m * t - l * w * t - n * m * d + l * p * d,
          B = v * p * k - q * w * k - v * m * t + h * w * t + q * m * d - h * p * d,
          I = q * y * k - v * n * k + v * l * t - h * y * t - q * l * d + h * n * d,
          z = v * n * m - q * y * m - v * l * p + h * y * p + q * l * w - h * n * w,
          A = a * x + e * B + f * I + g * z;

      if (0 === A) {
        if (!0 === b) throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");
        console.warn("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");
        return this.identity();
      }

      b = 1 / A;
      c[0] = x * b;
      c[1] = (y * p * g - n * w * g - y * f * t + e * w * t + n * f * d - e * p * d) * b;
      c[2] = (l * w * g - y * m * g + y * f * k - e * w * k - l * f * d + e * m * d) * b;
      c[3] = (n * m * g - l * p * g - n * f * k + e * p * k + l * f * t - e * m * t) * b;
      c[4] = B * b;
      c[5] = (q * w * g - v * p * g + v * f * t - a * w * t - q * f * d + a * p * d) * b;
      c[6] = (v * m * g - h * w * g - v * f * k + a * w * k + h * f * d - a * m * d) * b;
      c[7] = (h * p * g - q * m * g + q * f * k - a * p * k - h * f * t + a * m * t) * b;
      c[8] = I * b;
      c[9] = (v * n * g - q * y * g - v * e * t + a * y * t + q * e * d - a * n * d) * b;
      c[10] = (h * y * g - v * l * g + v * e * k - a * y * k - h * e * d + a * l * d) * b;
      c[11] = (q * l * g - h * n * g - q * e * k + a * n * k + h * e * t - a * l * t) * b;
      c[12] = z * b;
      c[13] = (q * y * f - v * n * f + v * e * p - a * y * p - q * e * w + a * n * w) * b;
      c[14] = (v * l * f - h * y * f - v * e * m + a * y * m + h * e * w - a * l * w) * b;
      c[15] = (h * n * f - q * l * f + q * e * m - a * n * m - h * e * p + a * l * p) * b;
      return this;
    },
    scale: function (a) {
      var b = this.elements,
          c = a.x,
          d = a.y;
      a = a.z;
      b[0] *= c;
      b[4] *= d;
      b[8] *= a;
      b[1] *= c;
      b[5] *= d;
      b[9] *= a;
      b[2] *= c;
      b[6] *= d;
      b[10] *= a;
      b[3] *= c;
      b[7] *= d;
      b[11] *= a;
      return this;
    },
    getMaxScaleOnAxis: function () {
      var a = this.elements;
      return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10]));
    },
    makeTranslation: function (a, b, c) {
      this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
      return this;
    },
    makeRotationX: function (a) {
      var b = Math.cos(a);
      a = Math.sin(a);
      this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
      return this;
    },
    makeRotationY: function (a) {
      var b = Math.cos(a);
      a = Math.sin(a);
      this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
      return this;
    },
    makeRotationZ: function (a) {
      var b = Math.cos(a);
      a = Math.sin(a);
      this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      return this;
    },
    makeRotationAxis: function (a, b) {
      var c = Math.cos(b);
      b = Math.sin(b);
      var d = 1 - c,
          e = a.x,
          f = a.y;
      a = a.z;
      var g = d * e,
          h = d * f;
      this.set(g * e + c, g * f - b * a, g * a + b * f, 0, g * f + b * a, h * f + c, h * a - b * e, 0, g * a - b * f, h * a + b * e, d * a * a + c, 0, 0, 0, 0, 1);
      return this;
    },
    makeScale: function (a, b, c) {
      this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
      return this;
    },
    makeShear: function (a, b, c) {
      this.set(1, b, c, 0, a, 1, c, 0, a, b, 1, 0, 0, 0, 0, 1);
      return this;
    },
    compose: function (a, b, c) {
      var d = this.elements,
          e = b._x,
          f = b._y,
          g = b._z,
          h = b._w,
          l = e + e,
          m = f + f,
          k = g + g;
      b = e * l;
      var n = e * m;
      e *= k;
      var u = f * m;
      f *= k;
      g *= k;
      l *= h;
      m *= h;
      h *= k;
      k = c.x;
      var p = c.y;
      c = c.z;
      d[0] = (1 - (u + g)) * k;
      d[1] = (n + h) * k;
      d[2] = (e - m) * k;
      d[3] = 0;
      d[4] = (n - h) * p;
      d[5] = (1 - (b + g)) * p;
      d[6] = (f + l) * p;
      d[7] = 0;
      d[8] = (e + m) * c;
      d[9] = (f - l) * c;
      d[10] = (1 - (b + u)) * c;
      d[11] = 0;
      d[12] = a.x;
      d[13] = a.y;
      d[14] = a.z;
      d[15] = 1;
      return this;
    },
    decompose: function (a, b, c) {
      var d = this.elements,
          e = Ka.set(d[0], d[1], d[2]).length(),
          f = Ka.set(d[4], d[5], d[6]).length(),
          g = Ka.set(d[8], d[9], d[10]).length();
      0 > this.determinant() && (e = -e);
      a.x = d[12];
      a.y = d[13];
      a.z = d[14];
      ca.copy(this);
      a = 1 / e;
      d = 1 / f;
      var h = 1 / g;
      ca.elements[0] *= a;
      ca.elements[1] *= a;
      ca.elements[2] *= a;
      ca.elements[4] *= d;
      ca.elements[5] *= d;
      ca.elements[6] *= d;
      ca.elements[8] *= h;
      ca.elements[9] *= h;
      ca.elements[10] *= h;
      b.setFromRotationMatrix(ca);
      c.x = e;
      c.y = f;
      c.z = g;
      return this;
    },
    makePerspective: function (a, b, c, d, e, f) {
      void 0 === f && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
      var g = this.elements;
      g[0] = 2 * e / (b - a);
      g[4] = 0;
      g[8] = (b + a) / (b - a);
      g[12] = 0;
      g[1] = 0;
      g[5] = 2 * e / (c - d);
      g[9] = (c + d) / (c - d);
      g[13] = 0;
      g[2] = 0;
      g[6] = 0;
      g[10] = -(f + e) / (f - e);
      g[14] = -2 * f * e / (f - e);
      g[3] = 0;
      g[7] = 0;
      g[11] = -1;
      g[15] = 0;
      return this;
    },
    makeOrthographic: function (a, b, c, d, e, f) {
      var g = this.elements,
          h = 1 / (b - a),
          l = 1 / (c - d),
          m = 1 / (f - e);
      g[0] = 2 * h;
      g[4] = 0;
      g[8] = 0;
      g[12] = -((b + a) * h);
      g[1] = 0;
      g[5] = 2 * l;
      g[9] = 0;
      g[13] = -((c + d) * l);
      g[2] = 0;
      g[6] = 0;
      g[10] = -2 * m;
      g[14] = -((f + e) * m);
      g[3] = 0;
      g[7] = 0;
      g[11] = 0;
      g[15] = 1;
      return this;
    },
    equals: function (a) {
      var b = this.elements;
      a = a.elements;

      for (var c = 0; 16 > c; c++) if (b[c] !== a[c]) return !1;

      return !0;
    },
    fromArray: function (a, b) {
      void 0 === b && (b = 0);

      for (var c = 0; 16 > c; c++) this.elements[c] = a[c + b];

      return this;
    },
    toArray: function (a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);
      var c = this.elements;
      a[b] = c[0];
      a[b + 1] = c[1];
      a[b + 2] = c[2];
      a[b + 3] = c[3];
      a[b + 4] = c[4];
      a[b + 5] = c[5];
      a[b + 6] = c[6];
      a[b + 7] = c[7];
      a[b + 8] = c[8];
      a[b + 9] = c[9];
      a[b + 10] = c[10];
      a[b + 11] = c[11];
      a[b + 12] = c[12];
      a[b + 13] = c[13];
      a[b + 14] = c[14];
      a[b + 15] = c[15];
      return a;
    }
  });
  var mi = new Q(),
      ni = new wa();
  Pb.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
  Pb.DefaultOrder = "XYZ";
  Object.defineProperties(Pb.prototype, {
    x: {
      get: function () {
        return this._x;
      },
      set: function (a) {
        this._x = a;

        this._onChangeCallback();
      }
    },
    y: {
      get: function () {
        return this._y;
      },
      set: function (a) {
        this._y = a;

        this._onChangeCallback();
      }
    },
    z: {
      get: function () {
        return this._z;
      },
      set: function (a) {
        this._z = a;

        this._onChangeCallback();
      }
    },
    order: {
      get: function () {
        return this._order;
      },
      set: function (a) {
        this._order = a;

        this._onChangeCallback();
      }
    }
  });
  Object.assign(Pb.prototype, {
    isEuler: !0,
    set: function (a, b, c, d) {
      this._x = a;
      this._y = b;
      this._z = c;
      this._order = d || this._order;

      this._onChangeCallback();

      return this;
    },
    clone: function () {
      return new this.constructor(this._x, this._y, this._z, this._order);
    },
    copy: function (a) {
      this._x = a._x;
      this._y = a._y;
      this._z = a._z;
      this._order = a._order;

      this._onChangeCallback();

      return this;
    },
    setFromRotationMatrix: function (a, b, c) {
      var d = P.clamp,
          e = a.elements;
      a = e[0];
      var f = e[4],
          g = e[8],
          h = e[1],
          l = e[5],
          m = e[9],
          k = e[2],
          n = e[6];
      e = e[10];
      b = b || this._order;
      "XYZ" === b ? (this._y = Math.asin(d(g, -1, 1)), .9999999 > Math.abs(g) ? (this._x = Math.atan2(-m, e), this._z = Math.atan2(-f, a)) : (this._x = Math.atan2(n, l), this._z = 0)) : "YXZ" === b ? (this._x = Math.asin(-d(m, -1, 1)), .9999999 > Math.abs(m) ? (this._y = Math.atan2(g, e), this._z = Math.atan2(h, l)) : (this._y = Math.atan2(-k, a), this._z = 0)) : "ZXY" === b ? (this._x = Math.asin(d(n, -1, 1)), .9999999 > Math.abs(n) ? (this._y = Math.atan2(-k, e), this._z = Math.atan2(-f, l)) : (this._y = 0, this._z = Math.atan2(h, a))) : "ZYX" === b ? (this._y = Math.asin(-d(k, -1, 1)), .9999999 > Math.abs(k) ? (this._x = Math.atan2(n, e), this._z = Math.atan2(h, a)) : (this._x = 0, this._z = Math.atan2(-f, l))) : "YZX" === b ? (this._z = Math.asin(d(h, -1, 1)), .9999999 > Math.abs(h) ? (this._x = Math.atan2(-m, l), this._y = Math.atan2(-k, a)) : (this._x = 0, this._y = Math.atan2(g, e))) : "XZY" === b ? (this._z = Math.asin(-d(f, -1, 1)), .9999999 > Math.abs(f) ? (this._x = Math.atan2(n, l), this._y = Math.atan2(g, a)) : (this._x = Math.atan2(-m, e), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + b);
      this._order = b;
      !1 !== c && this._onChangeCallback();
      return this;
    },
    setFromQuaternion: function (a, b, c) {
      mi.makeRotationFromQuaternion(a);
      return this.setFromRotationMatrix(mi, b, c);
    },
    setFromVector3: function (a, b) {
      return this.set(a.x, a.y, a.z, b || this._order);
    },
    reorder: function (a) {
      ni.setFromEuler(this);
      return this.setFromQuaternion(ni, a);
    },
    equals: function (a) {
      return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order;
    },
    fromArray: function (a) {
      this._x = a[0];
      this._y = a[1];
      this._z = a[2];
      void 0 !== a[3] && (this._order = a[3]);

      this._onChangeCallback();

      return this;
    },
    toArray: function (a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);
      a[b] = this._x;
      a[b + 1] = this._y;
      a[b + 2] = this._z;
      a[b + 3] = this._order;
      return a;
    },
    toVector3: function (a) {
      return a ? a.set(this._x, this._y, this._z) : new n(this._x, this._y, this._z);
    },
    _onChange: function (a) {
      this._onChangeCallback = a;
      return this;
    },
    _onChangeCallback: function () {}
  });
  Object.assign(Tf.prototype, {
    set: function (a) {
      this.mask = 1 << a | 0;
    },
    enable: function (a) {
      this.mask = this.mask | 1 << a | 0;
    },
    enableAll: function () {
      this.mask = -1;
    },
    toggle: function (a) {
      this.mask ^= 1 << a | 0;
    },
    disable: function (a) {
      this.mask &= ~(1 << a | 0);
    },
    disableAll: function () {
      this.mask = 0;
    },
    test: function (a) {
      return 0 !== (this.mask & a.mask);
    }
  });
  var Ti = 0,
      oi = new n(),
      md = new wa(),
      vb = new Q(),
      vf = new n(),
      xe = new n(),
      vk = new n(),
      wk = new wa(),
      pi = new n(1, 0, 0),
      qi = new n(0, 1, 0),
      ri = new n(0, 0, 1),
      xk = {
    type: "added"
  },
      yk = {
    type: "removed"
  };
  E.DefaultUp = new n(0, 1, 0);
  E.DefaultMatrixAutoUpdate = !0;
  E.prototype = Object.assign(Object.create(Aa.prototype), {
    constructor: E,
    isObject3D: !0,
    onBeforeRender: function () {},
    onAfterRender: function () {},
    applyMatrix: function (a) {
      this.matrixAutoUpdate && this.updateMatrix();
      this.matrix.premultiply(a);
      this.matrix.decompose(this.position, this.quaternion, this.scale);
    },
    applyQuaternion: function (a) {
      this.quaternion.premultiply(a);
      return this;
    },
    setRotationFromAxisAngle: function (a, b) {
      this.quaternion.setFromAxisAngle(a, b);
    },
    setRotationFromEuler: function (a) {
      this.quaternion.setFromEuler(a, !0);
    },
    setRotationFromMatrix: function (a) {
      this.quaternion.setFromRotationMatrix(a);
    },
    setRotationFromQuaternion: function (a) {
      this.quaternion.copy(a);
    },
    rotateOnAxis: function (a, b) {
      md.setFromAxisAngle(a, b);
      this.quaternion.multiply(md);
      return this;
    },
    rotateOnWorldAxis: function (a, b) {
      md.setFromAxisAngle(a, b);
      this.quaternion.premultiply(md);
      return this;
    },
    rotateX: function (a) {
      return this.rotateOnAxis(pi, a);
    },
    rotateY: function (a) {
      return this.rotateOnAxis(qi, a);
    },
    rotateZ: function (a) {
      return this.rotateOnAxis(ri, a);
    },
    translateOnAxis: function (a, b) {
      oi.copy(a).applyQuaternion(this.quaternion);
      this.position.add(oi.multiplyScalar(b));
      return this;
    },
    translateX: function (a) {
      return this.translateOnAxis(pi, a);
    },
    translateY: function (a) {
      return this.translateOnAxis(qi, a);
    },
    translateZ: function (a) {
      return this.translateOnAxis(ri, a);
    },
    localToWorld: function (a) {
      return a.applyMatrix4(this.matrixWorld);
    },
    worldToLocal: function (a) {
      return a.applyMatrix4(vb.getInverse(this.matrixWorld));
    },
    lookAt: function (a, b, c) {
      a.isVector3 ? vf.copy(a) : vf.set(a, b, c);
      a = this.parent;
      this.updateWorldMatrix(!0, !1);
      xe.setFromMatrixPosition(this.matrixWorld);
      this.isCamera || this.isLight ? vb.lookAt(xe, vf, this.up) : vb.lookAt(vf, xe, this.up);
      this.quaternion.setFromRotationMatrix(vb);
      a && (vb.extractRotation(a.matrixWorld), md.setFromRotationMatrix(vb), this.quaternion.premultiply(md.inverse()));
    },
    add: function (a) {
      if (1 < arguments.length) {
        for (var b = 0; b < arguments.length; b++) this.add(arguments[b]);

        return this;
      }

      if (a === this) return console.error("THREE.Object3D.add: object can't be added as a child of itself.", a), this;
      a && a.isObject3D ? (null !== a.parent && a.parent.remove(a), a.parent = this, this.children.push(a), a.dispatchEvent(xk)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", a);
      return this;
    },
    remove: function (a) {
      if (1 < arguments.length) {
        for (var b = 0; b < arguments.length; b++) this.remove(arguments[b]);

        return this;
      }

      b = this.children.indexOf(a);
      -1 !== b && (a.parent = null, this.children.splice(b, 1), a.dispatchEvent(yk));
      return this;
    },
    attach: function (a) {
      this.updateWorldMatrix(!0, !1);
      vb.getInverse(this.matrixWorld);
      null !== a.parent && (a.parent.updateWorldMatrix(!0, !1), vb.multiply(a.parent.matrixWorld));
      a.applyMatrix(vb);
      a.updateWorldMatrix(!1, !1);
      this.add(a);
      return this;
    },
    getObjectById: function (a) {
      return this.getObjectByProperty("id", a);
    },
    getObjectByName: function (a) {
      return this.getObjectByProperty("name", a);
    },
    getObjectByProperty: function (a, b) {
      if (this[a] === b) return this;

      for (var c = 0, d = this.children.length; c < d; c++) {
        var e = this.children[c].getObjectByProperty(a, b);
        if (void 0 !== e) return e;
      }
    },
    getWorldPosition: function (a) {
      void 0 === a && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), a = new n());
      this.updateMatrixWorld(!0);
      return a.setFromMatrixPosition(this.matrixWorld);
    },
    getWorldQuaternion: function (a) {
      void 0 === a && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), a = new wa());
      this.updateMatrixWorld(!0);
      this.matrixWorld.decompose(xe, a, vk);
      return a;
    },
    getWorldScale: function (a) {
      void 0 === a && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), a = new n());
      this.updateMatrixWorld(!0);
      this.matrixWorld.decompose(xe, wk, a);
      return a;
    },
    getWorldDirection: function (a) {
      void 0 === a && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), a = new n());
      this.updateMatrixWorld(!0);
      var b = this.matrixWorld.elements;
      return a.set(b[8], b[9], b[10]).normalize();
    },
    raycast: function () {},
    traverse: function (a) {
      a(this);

      for (var b = this.children, c = 0, d = b.length; c < d; c++) b[c].traverse(a);
    },
    traverseVisible: function (a) {
      if (!1 !== this.visible) {
        a(this);

        for (var b = this.children, c = 0, d = b.length; c < d; c++) b[c].traverseVisible(a);
      }
    },
    traverseAncestors: function (a) {
      var b = this.parent;
      null !== b && (a(b), b.traverseAncestors(a));
    },
    updateMatrix: function () {
      this.matrix.compose(this.position, this.quaternion, this.scale);
      this.matrixWorldNeedsUpdate = !0;
    },
    updateMatrixWorld: function (a) {
      this.matrixAutoUpdate && this.updateMatrix();
      if (this.matrixWorldNeedsUpdate || a) null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0;

      for (var b = this.children, c = 0, d = b.length; c < d; c++) b[c].updateMatrixWorld(a);
    },
    updateWorldMatrix: function (a, b) {
      var c = this.parent;
      !0 === a && null !== c && c.updateWorldMatrix(!0, !1);
      this.matrixAutoUpdate && this.updateMatrix();
      null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
      if (!0 === b) for (a = this.children, b = 0, c = a.length; b < c; b++) a[b].updateWorldMatrix(!1, !0);
    },
    toJSON: function (a) {
      function b(b, c) {
        void 0 === b[c.uuid] && (b[c.uuid] = c.toJSON(a));
        return c.uuid;
      }

      function c(a) {
        var b = [],
            c;

        for (c in a) {
          var d = a[c];
          delete d.metadata;
          b.push(d);
        }

        return b;
      }

      var d = void 0 === a || "string" === typeof a,
          e = {};
      d && (a = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {}
      }, e.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON"
      });
      var f = {};
      f.uuid = this.uuid;
      f.type = this.type;
      "" !== this.name && (f.name = this.name);
      !0 === this.castShadow && (f.castShadow = !0);
      !0 === this.receiveShadow && (f.receiveShadow = !0);
      !1 === this.visible && (f.visible = !1);
      !1 === this.frustumCulled && (f.frustumCulled = !1);
      0 !== this.renderOrder && (f.renderOrder = this.renderOrder);
      "{}" !== JSON.stringify(this.userData) && (f.userData = this.userData);
      f.layers = this.layers.mask;
      f.matrix = this.matrix.toArray();
      !1 === this.matrixAutoUpdate && (f.matrixAutoUpdate = !1);
      this.isMesh && 0 !== this.drawMode && (f.drawMode = this.drawMode);
      this.isInstancedMesh && (f.type = "InstancedMesh", f.count = this.count, f.instanceMatrix = this.instanceMatrix.toJSON());

      if (this.isMesh || this.isLine || this.isPoints) {
        f.geometry = b(a.geometries, this.geometry);
        var g = this.geometry.parameters;
        if (void 0 !== g && void 0 !== g.shapes) if (g = g.shapes, Array.isArray(g)) for (var h = 0, l = g.length; h < l; h++) b(a.shapes, g[h]);else b(a.shapes, g);
      }

      if (void 0 !== this.material) if (Array.isArray(this.material)) {
        g = [];
        h = 0;

        for (l = this.material.length; h < l; h++) g.push(b(a.materials, this.material[h]));

        f.material = g;
      } else f.material = b(a.materials, this.material);
      if (0 < this.children.length) for (f.children = [], h = 0; h < this.children.length; h++) f.children.push(this.children[h].toJSON(a).object);

      if (d) {
        d = c(a.geometries);
        h = c(a.materials);
        l = c(a.textures);
        var m = c(a.images);
        g = c(a.shapes);
        0 < d.length && (e.geometries = d);
        0 < h.length && (e.materials = h);
        0 < l.length && (e.textures = l);
        0 < m.length && (e.images = m);
        0 < g.length && (e.shapes = g);
      }

      e.object = f;
      return e;
    },
    clone: function (a) {
      return new this.constructor().copy(this, a);
    },
    copy: function (a, b) {
      void 0 === b && (b = !0);
      this.name = a.name;
      this.up.copy(a.up);
      this.position.copy(a.position);
      this.quaternion.copy(a.quaternion);
      this.scale.copy(a.scale);
      this.matrix.copy(a.matrix);
      this.matrixWorld.copy(a.matrixWorld);
      this.matrixAutoUpdate = a.matrixAutoUpdate;
      this.matrixWorldNeedsUpdate = a.matrixWorldNeedsUpdate;
      this.layers.mask = a.layers.mask;
      this.visible = a.visible;
      this.castShadow = a.castShadow;
      this.receiveShadow = a.receiveShadow;
      this.frustumCulled = a.frustumCulled;
      this.renderOrder = a.renderOrder;
      this.userData = JSON.parse(JSON.stringify(a.userData));
      if (!0 === b) for (b = 0; b < a.children.length; b++) this.add(a.children[b].clone());
      return this;
    }
  });
  vd.prototype = Object.assign(Object.create(E.prototype), {
    constructor: vd,
    isScene: !0,
    copy: function (a, b) {
      E.prototype.copy.call(this, a, b);
      null !== a.background && (this.background = a.background.clone());
      null !== a.fog && (this.fog = a.fog.clone());
      null !== a.overrideMaterial && (this.overrideMaterial = a.overrideMaterial.clone());
      this.autoUpdate = a.autoUpdate;
      this.matrixAutoUpdate = a.matrixAutoUpdate;
      return this;
    },
    toJSON: function (a) {
      var b = E.prototype.toJSON.call(this, a);
      null !== this.background && (b.object.background = this.background.toJSON(a));
      null !== this.fog && (b.object.fog = this.fog.toJSON());
      return b;
    },
    dispose: function () {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });
  var wb = [new n(), new n(), new n(), new n(), new n(), new n(), new n(), new n()],
      ib = new n(),
      nd = new n(),
      od = new n(),
      pd = new n(),
      Lb = new n(),
      Mb = new n(),
      pc = new n(),
      ye = new n(),
      wf = new n(),
      xf = new n(),
      Qb = new n();
  Object.assign(ab.prototype, {
    isBox3: !0,
    set: function (a, b) {
      this.min.copy(a);
      this.max.copy(b);
      return this;
    },
    setFromArray: function (a) {
      for (var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, h = 0, l = a.length; h < l; h += 3) {
        var m = a[h],
            k = a[h + 1],
            n = a[h + 2];
        m < b && (b = m);
        k < c && (c = k);
        n < d && (d = n);
        m > e && (e = m);
        k > f && (f = k);
        n > g && (g = n);
      }

      this.min.set(b, c, d);
      this.max.set(e, f, g);
      return this;
    },
    setFromBufferAttribute: function (a) {
      for (var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, h = 0, l = a.count; h < l; h++) {
        var m = a.getX(h),
            k = a.getY(h),
            n = a.getZ(h);
        m < b && (b = m);
        k < c && (c = k);
        n < d && (d = n);
        m > e && (e = m);
        k > f && (f = k);
        n > g && (g = n);
      }

      this.min.set(b, c, d);
      this.max.set(e, f, g);
      return this;
    },
    setFromPoints: function (a) {
      this.makeEmpty();

      for (var b = 0, c = a.length; b < c; b++) this.expandByPoint(a[b]);

      return this;
    },
    setFromCenterAndSize: function (a, b) {
      b = ib.copy(b).multiplyScalar(.5);
      this.min.copy(a).sub(b);
      this.max.copy(a).add(b);
      return this;
    },
    setFromObject: function (a) {
      this.makeEmpty();
      return this.expandByObject(a);
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      this.min.copy(a.min);
      this.max.copy(a.max);
      return this;
    },
    makeEmpty: function () {
      this.min.x = this.min.y = this.min.z = Infinity;
      this.max.x = this.max.y = this.max.z = -Infinity;
      return this;
    },
    isEmpty: function () {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    },
    getCenter: function (a) {
      void 0 === a && (console.warn("THREE.Box3: .getCenter() target is now required"), a = new n());
      return this.isEmpty() ? a.set(0, 0, 0) : a.addVectors(this.min, this.max).multiplyScalar(.5);
    },
    getSize: function (a) {
      void 0 === a && (console.warn("THREE.Box3: .getSize() target is now required"), a = new n());
      return this.isEmpty() ? a.set(0, 0, 0) : a.subVectors(this.max, this.min);
    },
    expandByPoint: function (a) {
      this.min.min(a);
      this.max.max(a);
      return this;
    },
    expandByVector: function (a) {
      this.min.sub(a);
      this.max.add(a);
      return this;
    },
    expandByScalar: function (a) {
      this.min.addScalar(-a);
      this.max.addScalar(a);
      return this;
    },
    expandByObject: function (a) {
      var b;
      a.updateWorldMatrix(!1, !1);
      var c = a.geometry;
      if (void 0 !== c) if (c.isGeometry) {
        var d = c.vertices;
        c = 0;

        for (b = d.length; c < b; c++) ib.copy(d[c]), ib.applyMatrix4(a.matrixWorld), this.expandByPoint(ib);
      } else if (c.isBufferGeometry && (d = c.attributes.position, void 0 !== d)) for (c = 0, b = d.count; c < b; c++) ib.fromBufferAttribute(d, c).applyMatrix4(a.matrixWorld), this.expandByPoint(ib);
      a = a.children;
      c = 0;

      for (b = a.length; c < b; c++) this.expandByObject(a[c]);

      return this;
    },
    containsPoint: function (a) {
      return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z || a.z > this.max.z ? !1 : !0;
    },
    containsBox: function (a) {
      return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z;
    },
    getParameter: function (a, b) {
      void 0 === b && (console.warn("THREE.Box3: .getParameter() target is now required"), b = new n());
      return b.set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z));
    },
    intersectsBox: function (a) {
      return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0;
    },
    intersectsSphere: function (a) {
      this.clampPoint(a.center, ib);
      return ib.distanceToSquared(a.center) <= a.radius * a.radius;
    },
    intersectsPlane: function (a) {
      if (0 < a.normal.x) {
        var b = a.normal.x * this.min.x;
        var c = a.normal.x * this.max.x;
      } else b = a.normal.x * this.max.x, c = a.normal.x * this.min.x;

      0 < a.normal.y ? (b += a.normal.y * this.min.y, c += a.normal.y * this.max.y) : (b += a.normal.y * this.max.y, c += a.normal.y * this.min.y);
      0 < a.normal.z ? (b += a.normal.z * this.min.z, c += a.normal.z * this.max.z) : (b += a.normal.z * this.max.z, c += a.normal.z * this.min.z);
      return b <= -a.constant && c >= -a.constant;
    },
    intersectsTriangle: function (a) {
      if (this.isEmpty()) return !1;
      this.getCenter(ye);
      wf.subVectors(this.max, ye);
      nd.subVectors(a.a, ye);
      od.subVectors(a.b, ye);
      pd.subVectors(a.c, ye);
      Lb.subVectors(od, nd);
      Mb.subVectors(pd, od);
      pc.subVectors(nd, pd);
      a = [0, -Lb.z, Lb.y, 0, -Mb.z, Mb.y, 0, -pc.z, pc.y, Lb.z, 0, -Lb.x, Mb.z, 0, -Mb.x, pc.z, 0, -pc.x, -Lb.y, Lb.x, 0, -Mb.y, Mb.x, 0, -pc.y, pc.x, 0];
      if (!Uf(a, nd, od, pd, wf)) return !1;
      a = [1, 0, 0, 0, 1, 0, 0, 0, 1];
      if (!Uf(a, nd, od, pd, wf)) return !1;
      xf.crossVectors(Lb, Mb);
      a = [xf.x, xf.y, xf.z];
      return Uf(a, nd, od, pd, wf);
    },
    clampPoint: function (a, b) {
      void 0 === b && (console.warn("THREE.Box3: .clampPoint() target is now required"), b = new n());
      return b.copy(a).clamp(this.min, this.max);
    },
    distanceToPoint: function (a) {
      return ib.copy(a).clamp(this.min, this.max).sub(a).length();
    },
    getBoundingSphere: function (a) {
      void 0 === a && console.error("THREE.Box3: .getBoundingSphere() target is now required");
      this.getCenter(a.center);
      a.radius = .5 * this.getSize(ib).length();
      return a;
    },
    intersect: function (a) {
      this.min.max(a.min);
      this.max.min(a.max);
      this.isEmpty() && this.makeEmpty();
      return this;
    },
    union: function (a) {
      this.min.min(a.min);
      this.max.max(a.max);
      return this;
    },
    applyMatrix4: function (a) {
      if (this.isEmpty()) return this;
      wb[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(a);
      wb[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(a);
      wb[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(a);
      wb[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(a);
      wb[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(a);
      wb[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(a);
      wb[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(a);
      wb[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(a);
      this.setFromPoints(wb);
      return this;
    },
    translate: function (a) {
      this.min.add(a);
      this.max.add(a);
      return this;
    },
    equals: function (a) {
      return a.min.equals(this.min) && a.max.equals(this.max);
    }
  });
  var zk = new ab();
  Object.assign(mb.prototype, {
    set: function (a, b) {
      this.center.copy(a);
      this.radius = b;
      return this;
    },
    setFromPoints: function (a, b) {
      var c = this.center;
      void 0 !== b ? c.copy(b) : zk.setFromPoints(a).getCenter(c);

      for (var d = b = 0, e = a.length; d < e; d++) b = Math.max(b, c.distanceToSquared(a[d]));

      this.radius = Math.sqrt(b);
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      this.center.copy(a.center);
      this.radius = a.radius;
      return this;
    },
    empty: function () {
      return 0 >= this.radius;
    },
    containsPoint: function (a) {
      return a.distanceToSquared(this.center) <= this.radius * this.radius;
    },
    distanceToPoint: function (a) {
      return a.distanceTo(this.center) - this.radius;
    },
    intersectsSphere: function (a) {
      var b = this.radius + a.radius;
      return a.center.distanceToSquared(this.center) <= b * b;
    },
    intersectsBox: function (a) {
      return a.intersectsSphere(this);
    },
    intersectsPlane: function (a) {
      return Math.abs(a.distanceToPoint(this.center)) <= this.radius;
    },
    clampPoint: function (a, b) {
      var c = this.center.distanceToSquared(a);
      void 0 === b && (console.warn("THREE.Sphere: .clampPoint() target is now required"), b = new n());
      b.copy(a);
      c > this.radius * this.radius && (b.sub(this.center).normalize(), b.multiplyScalar(this.radius).add(this.center));
      return b;
    },
    getBoundingBox: function (a) {
      void 0 === a && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), a = new ab());
      a.set(this.center, this.center);
      a.expandByScalar(this.radius);
      return a;
    },
    applyMatrix4: function (a) {
      this.center.applyMatrix4(a);
      this.radius *= a.getMaxScaleOnAxis();
      return this;
    },
    translate: function (a) {
      this.center.add(a);
      return this;
    },
    equals: function (a) {
      return a.center.equals(this.center) && a.radius === this.radius;
    }
  });
  var xb = new n(),
      Ng = new n(),
      yf = new n(),
      Nb = new n(),
      Og = new n(),
      zf = new n(),
      Pg = new n();
  Object.assign(Rb.prototype, {
    set: function (a, b) {
      this.origin.copy(a);
      this.direction.copy(b);
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      this.origin.copy(a.origin);
      this.direction.copy(a.direction);
      return this;
    },
    at: function (a, b) {
      void 0 === b && (console.warn("THREE.Ray: .at() target is now required"), b = new n());
      return b.copy(this.direction).multiplyScalar(a).add(this.origin);
    },
    lookAt: function (a) {
      this.direction.copy(a).sub(this.origin).normalize();
      return this;
    },
    recast: function (a) {
      this.origin.copy(this.at(a, xb));
      return this;
    },
    closestPointToPoint: function (a, b) {
      void 0 === b && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), b = new n());
      b.subVectors(a, this.origin);
      a = b.dot(this.direction);
      return 0 > a ? b.copy(this.origin) : b.copy(this.direction).multiplyScalar(a).add(this.origin);
    },
    distanceToPoint: function (a) {
      return Math.sqrt(this.distanceSqToPoint(a));
    },
    distanceSqToPoint: function (a) {
      var b = xb.subVectors(a, this.origin).dot(this.direction);
      if (0 > b) return this.origin.distanceToSquared(a);
      xb.copy(this.direction).multiplyScalar(b).add(this.origin);
      return xb.distanceToSquared(a);
    },
    distanceSqToSegment: function (a, b, c, d) {
      Ng.copy(a).add(b).multiplyScalar(.5);
      yf.copy(b).sub(a).normalize();
      Nb.copy(this.origin).sub(Ng);
      var e = .5 * a.distanceTo(b),
          f = -this.direction.dot(yf),
          g = Nb.dot(this.direction),
          h = -Nb.dot(yf),
          l = Nb.lengthSq(),
          m = Math.abs(1 - f * f);

      if (0 < m) {
        a = f * h - g;
        b = f * g - h;
        var k = e * m;
        0 <= a ? b >= -k ? b <= k ? (e = 1 / m, a *= e, b *= e, f = a * (a + f * b + 2 * g) + b * (f * a + b + 2 * h) + l) : (b = e, a = Math.max(0, -(f * b + g)), f = -a * a + b * (b + 2 * h) + l) : (b = -e, a = Math.max(0, -(f * b + g)), f = -a * a + b * (b + 2 * h) + l) : b <= -k ? (a = Math.max(0, -(-f * e + g)), b = 0 < a ? -e : Math.min(Math.max(-e, -h), e), f = -a * a + b * (b + 2 * h) + l) : b <= k ? (a = 0, b = Math.min(Math.max(-e, -h), e), f = b * (b + 2 * h) + l) : (a = Math.max(0, -(f * e + g)), b = 0 < a ? e : Math.min(Math.max(-e, -h), e), f = -a * a + b * (b + 2 * h) + l);
      } else b = 0 < f ? -e : e, a = Math.max(0, -(f * b + g)), f = -a * a + b * (b + 2 * h) + l;

      c && c.copy(this.direction).multiplyScalar(a).add(this.origin);
      d && d.copy(yf).multiplyScalar(b).add(Ng);
      return f;
    },
    intersectSphere: function (a, b) {
      xb.subVectors(a.center, this.origin);
      var c = xb.dot(this.direction),
          d = xb.dot(xb) - c * c;
      a = a.radius * a.radius;
      if (d > a) return null;
      a = Math.sqrt(a - d);
      d = c - a;
      c += a;
      return 0 > d && 0 > c ? null : 0 > d ? this.at(c, b) : this.at(d, b);
    },
    intersectsSphere: function (a) {
      return this.distanceSqToPoint(a.center) <= a.radius * a.radius;
    },
    distanceToPlane: function (a) {
      var b = a.normal.dot(this.direction);
      if (0 === b) return 0 === a.distanceToPoint(this.origin) ? 0 : null;
      a = -(this.origin.dot(a.normal) + a.constant) / b;
      return 0 <= a ? a : null;
    },
    intersectPlane: function (a, b) {
      a = this.distanceToPlane(a);
      return null === a ? null : this.at(a, b);
    },
    intersectsPlane: function (a) {
      var b = a.distanceToPoint(this.origin);
      return 0 === b || 0 > a.normal.dot(this.direction) * b ? !0 : !1;
    },
    intersectBox: function (a, b) {
      var c = 1 / this.direction.x;
      var d = 1 / this.direction.y;
      var e = 1 / this.direction.z,
          f = this.origin;

      if (0 <= c) {
        var g = (a.min.x - f.x) * c;
        c *= a.max.x - f.x;
      } else g = (a.max.x - f.x) * c, c *= a.min.x - f.x;

      if (0 <= d) {
        var h = (a.min.y - f.y) * d;
        d *= a.max.y - f.y;
      } else h = (a.max.y - f.y) * d, d *= a.min.y - f.y;

      if (g > d || h > c) return null;
      if (h > g || g !== g) g = h;
      if (d < c || c !== c) c = d;
      0 <= e ? (h = (a.min.z - f.z) * e, a = (a.max.z - f.z) * e) : (h = (a.max.z - f.z) * e, a = (a.min.z - f.z) * e);
      if (g > a || h > c) return null;
      if (h > g || g !== g) g = h;
      if (a < c || c !== c) c = a;
      return 0 > c ? null : this.at(0 <= g ? g : c, b);
    },
    intersectsBox: function (a) {
      return null !== this.intersectBox(a, xb);
    },
    intersectTriangle: function (a, b, c, d, e) {
      Og.subVectors(b, a);
      zf.subVectors(c, a);
      Pg.crossVectors(Og, zf);
      b = this.direction.dot(Pg);

      if (0 < b) {
        if (d) return null;
        d = 1;
      } else if (0 > b) d = -1, b = -b;else return null;

      Nb.subVectors(this.origin, a);
      a = d * this.direction.dot(zf.crossVectors(Nb, zf));
      if (0 > a) return null;
      c = d * this.direction.dot(Og.cross(Nb));
      if (0 > c || a + c > b) return null;
      a = -d * Nb.dot(Pg);
      return 0 > a ? null : this.at(a / b, e);
    },
    applyMatrix4: function (a) {
      this.origin.applyMatrix4(a);
      this.direction.transformDirection(a);
      return this;
    },
    equals: function (a) {
      return a.origin.equals(this.origin) && a.direction.equals(this.direction);
    }
  });
  var Qg = new n(),
      Ak = new n(),
      Bk = new Z();
  Object.assign(Oa.prototype, {
    isPlane: !0,
    set: function (a, b) {
      this.normal.copy(a);
      this.constant = b;
      return this;
    },
    setComponents: function (a, b, c, d) {
      this.normal.set(a, b, c);
      this.constant = d;
      return this;
    },
    setFromNormalAndCoplanarPoint: function (a, b) {
      this.normal.copy(a);
      this.constant = -b.dot(this.normal);
      return this;
    },
    setFromCoplanarPoints: function (a, b, c) {
      b = Qg.subVectors(c, b).cross(Ak.subVectors(a, b)).normalize();
      this.setFromNormalAndCoplanarPoint(b, a);
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      this.normal.copy(a.normal);
      this.constant = a.constant;
      return this;
    },
    normalize: function () {
      var a = 1 / this.normal.length();
      this.normal.multiplyScalar(a);
      this.constant *= a;
      return this;
    },
    negate: function () {
      this.constant *= -1;
      this.normal.negate();
      return this;
    },
    distanceToPoint: function (a) {
      return this.normal.dot(a) + this.constant;
    },
    distanceToSphere: function (a) {
      return this.distanceToPoint(a.center) - a.radius;
    },
    projectPoint: function (a, b) {
      void 0 === b && (console.warn("THREE.Plane: .projectPoint() target is now required"), b = new n());
      return b.copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a);
    },
    intersectLine: function (a, b) {
      void 0 === b && (console.warn("THREE.Plane: .intersectLine() target is now required"), b = new n());
      var c = a.delta(Qg),
          d = this.normal.dot(c);

      if (0 === d) {
        if (0 === this.distanceToPoint(a.start)) return b.copy(a.start);
      } else if (d = -(a.start.dot(this.normal) + this.constant) / d, !(0 > d || 1 < d)) return b.copy(c).multiplyScalar(d).add(a.start);
    },
    intersectsLine: function (a) {
      var b = this.distanceToPoint(a.start);
      a = this.distanceToPoint(a.end);
      return 0 > b && 0 < a || 0 > a && 0 < b;
    },
    intersectsBox: function (a) {
      return a.intersectsPlane(this);
    },
    intersectsSphere: function (a) {
      return a.intersectsPlane(this);
    },
    coplanarPoint: function (a) {
      void 0 === a && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), a = new n());
      return a.copy(this.normal).multiplyScalar(-this.constant);
    },
    applyMatrix4: function (a, b) {
      b = b || Bk.getNormalMatrix(a);
      a = this.coplanarPoint(Qg).applyMatrix4(a);
      b = this.normal.applyMatrix3(b).normalize();
      this.constant = -a.dot(b);
      return this;
    },
    translate: function (a) {
      this.constant -= a.dot(this.normal);
      return this;
    },
    equals: function (a) {
      return a.normal.equals(this.normal) && a.constant === this.constant;
    }
  });
  var Ya = new n(),
      yb = new n(),
      Rg = new n(),
      zb = new n(),
      qd = new n(),
      rd = new n(),
      si = new n(),
      Sg = new n(),
      Tg = new n(),
      Ug = new n();
  Object.assign(ba, {
    getNormal: function (a, b, c, d) {
      void 0 === d && (console.warn("THREE.Triangle: .getNormal() target is now required"), d = new n());
      d.subVectors(c, b);
      Ya.subVectors(a, b);
      d.cross(Ya);
      a = d.lengthSq();
      return 0 < a ? d.multiplyScalar(1 / Math.sqrt(a)) : d.set(0, 0, 0);
    },
    getBarycoord: function (a, b, c, d, e) {
      Ya.subVectors(d, b);
      yb.subVectors(c, b);
      Rg.subVectors(a, b);
      a = Ya.dot(Ya);
      b = Ya.dot(yb);
      c = Ya.dot(Rg);
      var f = yb.dot(yb);
      d = yb.dot(Rg);
      var g = a * f - b * b;
      void 0 === e && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), e = new n());
      if (0 === g) return e.set(-2, -1, -1);
      g = 1 / g;
      f = (f * c - b * d) * g;
      a = (a * d - b * c) * g;
      return e.set(1 - f - a, a, f);
    },
    containsPoint: function (a, b, c, d) {
      ba.getBarycoord(a, b, c, d, zb);
      return 0 <= zb.x && 0 <= zb.y && 1 >= zb.x + zb.y;
    },
    getUV: function (a, b, c, d, e, f, g, h) {
      this.getBarycoord(a, b, c, d, zb);
      h.set(0, 0);
      h.addScaledVector(e, zb.x);
      h.addScaledVector(f, zb.y);
      h.addScaledVector(g, zb.z);
      return h;
    },
    isFrontFacing: function (a, b, c, d) {
      Ya.subVectors(c, b);
      yb.subVectors(a, b);
      return 0 > Ya.cross(yb).dot(d) ? !0 : !1;
    }
  });
  Object.assign(ba.prototype, {
    set: function (a, b, c) {
      this.a.copy(a);
      this.b.copy(b);
      this.c.copy(c);
      return this;
    },
    setFromPointsAndIndices: function (a, b, c, d) {
      this.a.copy(a[b]);
      this.b.copy(a[c]);
      this.c.copy(a[d]);
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      this.a.copy(a.a);
      this.b.copy(a.b);
      this.c.copy(a.c);
      return this;
    },
    getArea: function () {
      Ya.subVectors(this.c, this.b);
      yb.subVectors(this.a, this.b);
      return .5 * Ya.cross(yb).length();
    },
    getMidpoint: function (a) {
      void 0 === a && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), a = new n());
      return a.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    },
    getNormal: function (a) {
      return ba.getNormal(this.a, this.b, this.c, a);
    },
    getPlane: function (a) {
      void 0 === a && (console.warn("THREE.Triangle: .getPlane() target is now required"), a = new Oa());
      return a.setFromCoplanarPoints(this.a, this.b, this.c);
    },
    getBarycoord: function (a, b) {
      return ba.getBarycoord(a, this.a, this.b, this.c, b);
    },
    getUV: function (a, b, c, d, e) {
      return ba.getUV(a, this.a, this.b, this.c, b, c, d, e);
    },
    containsPoint: function (a) {
      return ba.containsPoint(a, this.a, this.b, this.c);
    },
    isFrontFacing: function (a) {
      return ba.isFrontFacing(this.a, this.b, this.c, a);
    },
    intersectsBox: function (a) {
      return a.intersectsTriangle(this);
    },
    closestPointToPoint: function (a, b) {
      void 0 === b && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), b = new n());
      var c = this.a,
          d = this.b,
          e = this.c;
      qd.subVectors(d, c);
      rd.subVectors(e, c);
      Sg.subVectors(a, c);
      var f = qd.dot(Sg),
          g = rd.dot(Sg);
      if (0 >= f && 0 >= g) return b.copy(c);
      Tg.subVectors(a, d);
      var h = qd.dot(Tg),
          l = rd.dot(Tg);
      if (0 <= h && l <= h) return b.copy(d);
      var m = f * l - h * g;
      if (0 >= m && 0 <= f && 0 >= h) return d = f / (f - h), b.copy(c).addScaledVector(qd, d);
      Ug.subVectors(a, e);
      a = qd.dot(Ug);
      var k = rd.dot(Ug);
      if (0 <= k && a <= k) return b.copy(e);
      f = a * g - f * k;
      if (0 >= f && 0 <= g && 0 >= k) return m = g / (g - k), b.copy(c).addScaledVector(rd, m);
      g = h * k - a * l;
      if (0 >= g && 0 <= l - h && 0 <= a - k) return si.subVectors(e, d), m = (l - h) / (l - h + (a - k)), b.copy(d).addScaledVector(si, m);
      e = 1 / (g + f + m);
      d = f * e;
      m *= e;
      return b.copy(c).addScaledVector(qd, d).addScaledVector(rd, m);
    },
    equals: function (a) {
      return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c);
    }
  });
  var ti = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  },
      za = {
    h: 0,
    s: 0,
    l: 0
  },
      Af = {
    h: 0,
    s: 0,
    l: 0
  };
  Object.assign(J.prototype, {
    isColor: !0,
    r: 1,
    g: 1,
    b: 1,
    set: function (a) {
      a && a.isColor ? this.copy(a) : "number" === typeof a ? this.setHex(a) : "string" === typeof a && this.setStyle(a);
      return this;
    },
    setScalar: function (a) {
      this.b = this.g = this.r = a;
      return this;
    },
    setHex: function (a) {
      a = Math.floor(a);
      this.r = (a >> 16 & 255) / 255;
      this.g = (a >> 8 & 255) / 255;
      this.b = (a & 255) / 255;
      return this;
    },
    setRGB: function (a, b, c) {
      this.r = a;
      this.g = b;
      this.b = c;
      return this;
    },
    setHSL: function (a, b, c) {
      a = P.euclideanModulo(a, 1);
      b = P.clamp(b, 0, 1);
      c = P.clamp(c, 0, 1);
      0 === b ? this.r = this.g = this.b = c : (b = .5 >= c ? c * (1 + b) : c + b - c * b, c = 2 * c - b, this.r = Vf(c, b, a + 1 / 3), this.g = Vf(c, b, a), this.b = Vf(c, b, a - 1 / 3));
      return this;
    },
    setStyle: function (a) {
      function b(b) {
        void 0 !== b && 1 > parseFloat(b) && console.warn("THREE.Color: Alpha component of " + a + " will be ignored.");
      }

      var c;

      if (c = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)) {
        var d = c[2];

        switch (c[1]) {
          case "rgb":
          case "rgba":
            if (c = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) return this.r = Math.min(255, parseInt(c[1], 10)) / 255, this.g = Math.min(255, parseInt(c[2], 10)) / 255, this.b = Math.min(255, parseInt(c[3], 10)) / 255, b(c[5]), this;
            if (c = /^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) return this.r = Math.min(100, parseInt(c[1], 10)) / 100, this.g = Math.min(100, parseInt(c[2], 10)) / 100, this.b = Math.min(100, parseInt(c[3], 10)) / 100, b(c[5]), this;
            break;

          case "hsl":
          case "hsla":
            if (c = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) {
              d = parseFloat(c[1]) / 360;
              var e = parseInt(c[2], 10) / 100,
                  f = parseInt(c[3], 10) / 100;
              b(c[5]);
              return this.setHSL(d, e, f);
            }

        }
      } else if (c = /^#([A-Fa-f0-9]+)$/.exec(a)) {
        c = c[1];
        d = c.length;
        if (3 === d) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
        if (6 === d) return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this;
      }

      return a && 0 < a.length ? this.setColorName(a) : this;
    },
    setColorName: function (a) {
      var b = ti[a];
      void 0 !== b ? this.setHex(b) : console.warn("THREE.Color: Unknown color " + a);
      return this;
    },
    clone: function () {
      return new this.constructor(this.r, this.g, this.b);
    },
    copy: function (a) {
      this.r = a.r;
      this.g = a.g;
      this.b = a.b;
      return this;
    },
    copyGammaToLinear: function (a, b) {
      void 0 === b && (b = 2);
      this.r = Math.pow(a.r, b);
      this.g = Math.pow(a.g, b);
      this.b = Math.pow(a.b, b);
      return this;
    },
    copyLinearToGamma: function (a, b) {
      void 0 === b && (b = 2);
      b = 0 < b ? 1 / b : 1;
      this.r = Math.pow(a.r, b);
      this.g = Math.pow(a.g, b);
      this.b = Math.pow(a.b, b);
      return this;
    },
    convertGammaToLinear: function (a) {
      this.copyGammaToLinear(this, a);
      return this;
    },
    convertLinearToGamma: function (a) {
      this.copyLinearToGamma(this, a);
      return this;
    },
    copySRGBToLinear: function (a) {
      this.r = Wf(a.r);
      this.g = Wf(a.g);
      this.b = Wf(a.b);
      return this;
    },
    copyLinearToSRGB: function (a) {
      this.r = Xf(a.r);
      this.g = Xf(a.g);
      this.b = Xf(a.b);
      return this;
    },
    convertSRGBToLinear: function () {
      this.copySRGBToLinear(this);
      return this;
    },
    convertLinearToSRGB: function () {
      this.copyLinearToSRGB(this);
      return this;
    },
    getHex: function () {
      return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
    },
    getHexString: function () {
      return ("000000" + this.getHex().toString(16)).slice(-6);
    },
    getHSL: function (a) {
      void 0 === a && (console.warn("THREE.Color: .getHSL() target is now required"), a = {
        h: 0,
        s: 0,
        l: 0
      });
      var b = this.r,
          c = this.g,
          d = this.b,
          e = Math.max(b, c, d),
          f = Math.min(b, c, d),
          g,
          h = (f + e) / 2;
      if (f === e) f = g = 0;else {
        var l = e - f;
        f = .5 >= h ? l / (e + f) : l / (2 - e - f);

        switch (e) {
          case b:
            g = (c - d) / l + (c < d ? 6 : 0);
            break;

          case c:
            g = (d - b) / l + 2;
            break;

          case d:
            g = (b - c) / l + 4;
        }

        g /= 6;
      }
      a.h = g;
      a.s = f;
      a.l = h;
      return a;
    },
    getStyle: function () {
      return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")";
    },
    offsetHSL: function (a, b, c) {
      this.getHSL(za);
      za.h += a;
      za.s += b;
      za.l += c;
      this.setHSL(za.h, za.s, za.l);
      return this;
    },
    add: function (a) {
      this.r += a.r;
      this.g += a.g;
      this.b += a.b;
      return this;
    },
    addColors: function (a, b) {
      this.r = a.r + b.r;
      this.g = a.g + b.g;
      this.b = a.b + b.b;
      return this;
    },
    addScalar: function (a) {
      this.r += a;
      this.g += a;
      this.b += a;
      return this;
    },
    sub: function (a) {
      this.r = Math.max(0, this.r - a.r);
      this.g = Math.max(0, this.g - a.g);
      this.b = Math.max(0, this.b - a.b);
      return this;
    },
    multiply: function (a) {
      this.r *= a.r;
      this.g *= a.g;
      this.b *= a.b;
      return this;
    },
    multiplyScalar: function (a) {
      this.r *= a;
      this.g *= a;
      this.b *= a;
      return this;
    },
    lerp: function (a, b) {
      this.r += (a.r - this.r) * b;
      this.g += (a.g - this.g) * b;
      this.b += (a.b - this.b) * b;
      return this;
    },
    lerpHSL: function (a, b) {
      this.getHSL(za);
      a.getHSL(Af);
      a = P.lerp(za.h, Af.h, b);
      var c = P.lerp(za.s, Af.s, b);
      b = P.lerp(za.l, Af.l, b);
      this.setHSL(a, c, b);
      return this;
    },
    equals: function (a) {
      return a.r === this.r && a.g === this.g && a.b === this.b;
    },
    fromArray: function (a, b) {
      void 0 === b && (b = 0);
      this.r = a[b];
      this.g = a[b + 1];
      this.b = a[b + 2];
      return this;
    },
    toArray: function (a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);
      a[b] = this.r;
      a[b + 1] = this.g;
      a[b + 2] = this.b;
      return a;
    },
    toJSON: function () {
      return this.getHex();
    }
  });
  J.NAMES = ti;
  Object.assign(xc.prototype, {
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      this.a = a.a;
      this.b = a.b;
      this.c = a.c;
      this.normal.copy(a.normal);
      this.color.copy(a.color);
      this.materialIndex = a.materialIndex;

      for (var b = 0, c = a.vertexNormals.length; b < c; b++) this.vertexNormals[b] = a.vertexNormals[b].clone();

      b = 0;

      for (c = a.vertexColors.length; b < c; b++) this.vertexColors[b] = a.vertexColors[b].clone();

      return this;
    }
  });
  var Ui = 0;
  O.prototype = Object.assign(Object.create(Aa.prototype), {
    constructor: O,
    isMaterial: !0,
    onBeforeCompile: function () {},
    setValues: function (a) {
      if (void 0 !== a) for (var b in a) {
        var c = a[b];
        if (void 0 === c) console.warn("THREE.Material: '" + b + "' parameter is undefined.");else if ("shading" === b) console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === c ? !0 : !1;else {
          var d = this[b];
          void 0 === d ? console.warn("THREE." + this.type + ": '" + b + "' is not a property of this material.") : d && d.isColor ? d.set(c) : d && d.isVector3 && c && c.isVector3 ? d.copy(c) : this[b] = c;
        }
      }
    },
    toJSON: function (a) {
      function b(a) {
        var b = [],
            c;

        for (c in a) {
          var d = a[c];
          delete d.metadata;
          b.push(d);
        }

        return b;
      }

      var c = void 0 === a || "string" === typeof a;
      c && (a = {
        textures: {},
        images: {}
      });
      var d = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON"
        }
      };
      d.uuid = this.uuid;
      d.type = this.type;
      "" !== this.name && (d.name = this.name);
      this.color && this.color.isColor && (d.color = this.color.getHex());
      void 0 !== this.roughness && (d.roughness = this.roughness);
      void 0 !== this.metalness && (d.metalness = this.metalness);
      this.sheen && this.sheen.isColor && (d.sheen = this.sheen.getHex());
      this.emissive && this.emissive.isColor && (d.emissive = this.emissive.getHex());
      this.emissiveIntensity && 1 !== this.emissiveIntensity && (d.emissiveIntensity = this.emissiveIntensity);
      this.specular && this.specular.isColor && (d.specular = this.specular.getHex());
      void 0 !== this.shininess && (d.shininess = this.shininess);
      void 0 !== this.clearcoat && (d.clearcoat = this.clearcoat);
      void 0 !== this.clearcoatRoughness && (d.clearcoatRoughness = this.clearcoatRoughness);
      this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (d.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(a).uuid, d.clearcoatNormalScale = this.clearcoatNormalScale.toArray());
      this.map && this.map.isTexture && (d.map = this.map.toJSON(a).uuid);
      this.matcap && this.matcap.isTexture && (d.matcap = this.matcap.toJSON(a).uuid);
      this.alphaMap && this.alphaMap.isTexture && (d.alphaMap = this.alphaMap.toJSON(a).uuid);
      this.lightMap && this.lightMap.isTexture && (d.lightMap = this.lightMap.toJSON(a).uuid);
      this.aoMap && this.aoMap.isTexture && (d.aoMap = this.aoMap.toJSON(a).uuid, d.aoMapIntensity = this.aoMapIntensity);
      this.bumpMap && this.bumpMap.isTexture && (d.bumpMap = this.bumpMap.toJSON(a).uuid, d.bumpScale = this.bumpScale);
      this.normalMap && this.normalMap.isTexture && (d.normalMap = this.normalMap.toJSON(a).uuid, d.normalMapType = this.normalMapType, d.normalScale = this.normalScale.toArray());
      this.displacementMap && this.displacementMap.isTexture && (d.displacementMap = this.displacementMap.toJSON(a).uuid, d.displacementScale = this.displacementScale, d.displacementBias = this.displacementBias);
      this.roughnessMap && this.roughnessMap.isTexture && (d.roughnessMap = this.roughnessMap.toJSON(a).uuid);
      this.metalnessMap && this.metalnessMap.isTexture && (d.metalnessMap = this.metalnessMap.toJSON(a).uuid);
      this.emissiveMap && this.emissiveMap.isTexture && (d.emissiveMap = this.emissiveMap.toJSON(a).uuid);
      this.specularMap && this.specularMap.isTexture && (d.specularMap = this.specularMap.toJSON(a).uuid);
      this.envMap && this.envMap.isTexture && (d.envMap = this.envMap.toJSON(a).uuid, d.reflectivity = this.reflectivity, d.refractionRatio = this.refractionRatio, void 0 !== this.combine && (d.combine = this.combine), void 0 !== this.envMapIntensity && (d.envMapIntensity = this.envMapIntensity));
      this.gradientMap && this.gradientMap.isTexture && (d.gradientMap = this.gradientMap.toJSON(a).uuid);
      void 0 !== this.size && (d.size = this.size);
      void 0 !== this.sizeAttenuation && (d.sizeAttenuation = this.sizeAttenuation);
      1 !== this.blending && (d.blending = this.blending);
      !0 === this.flatShading && (d.flatShading = this.flatShading);
      0 !== this.side && (d.side = this.side);
      0 !== this.vertexColors && (d.vertexColors = this.vertexColors);
      1 > this.opacity && (d.opacity = this.opacity);
      !0 === this.transparent && (d.transparent = this.transparent);
      d.depthFunc = this.depthFunc;
      d.depthTest = this.depthTest;
      d.depthWrite = this.depthWrite;
      d.stencilWrite = this.stencilWrite;
      d.stencilWriteMask = this.stencilWriteMask;
      d.stencilFunc = this.stencilFunc;
      d.stencilRef = this.stencilRef;
      d.stencilFuncMask = this.stencilFuncMask;
      d.stencilFail = this.stencilFail;
      d.stencilZFail = this.stencilZFail;
      d.stencilZPass = this.stencilZPass;
      this.rotation && 0 !== this.rotation && (d.rotation = this.rotation);
      !0 === this.polygonOffset && (d.polygonOffset = !0);
      0 !== this.polygonOffsetFactor && (d.polygonOffsetFactor = this.polygonOffsetFactor);
      0 !== this.polygonOffsetUnits && (d.polygonOffsetUnits = this.polygonOffsetUnits);
      this.linewidth && 1 !== this.linewidth && (d.linewidth = this.linewidth);
      void 0 !== this.dashSize && (d.dashSize = this.dashSize);
      void 0 !== this.gapSize && (d.gapSize = this.gapSize);
      void 0 !== this.scale && (d.scale = this.scale);
      !0 === this.dithering && (d.dithering = !0);
      0 < this.alphaTest && (d.alphaTest = this.alphaTest);
      !0 === this.premultipliedAlpha && (d.premultipliedAlpha = this.premultipliedAlpha);
      !0 === this.wireframe && (d.wireframe = this.wireframe);
      1 < this.wireframeLinewidth && (d.wireframeLinewidth = this.wireframeLinewidth);
      "round" !== this.wireframeLinecap && (d.wireframeLinecap = this.wireframeLinecap);
      "round" !== this.wireframeLinejoin && (d.wireframeLinejoin = this.wireframeLinejoin);
      !0 === this.morphTargets && (d.morphTargets = !0);
      !0 === this.morphNormals && (d.morphNormals = !0);
      !0 === this.skinning && (d.skinning = !0);
      !1 === this.visible && (d.visible = !1);
      !1 === this.toneMapped && (d.toneMapped = !1);
      "{}" !== JSON.stringify(this.userData) && (d.userData = this.userData);
      c && (c = b(a.textures), a = b(a.images), 0 < c.length && (d.textures = c), 0 < a.length && (d.images = a));
      return d;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      this.name = a.name;
      this.fog = a.fog;
      this.blending = a.blending;
      this.side = a.side;
      this.flatShading = a.flatShading;
      this.vertexTangents = a.vertexTangents;
      this.vertexColors = a.vertexColors;
      this.opacity = a.opacity;
      this.transparent = a.transparent;
      this.blendSrc = a.blendSrc;
      this.blendDst = a.blendDst;
      this.blendEquation = a.blendEquation;
      this.blendSrcAlpha = a.blendSrcAlpha;
      this.blendDstAlpha = a.blendDstAlpha;
      this.blendEquationAlpha = a.blendEquationAlpha;
      this.depthFunc = a.depthFunc;
      this.depthTest = a.depthTest;
      this.depthWrite = a.depthWrite;
      this.stencilWriteMask = a.stencilWriteMask;
      this.stencilFunc = a.stencilFunc;
      this.stencilRef = a.stencilRef;
      this.stencilFuncMask = a.stencilFuncMask;
      this.stencilFail = a.stencilFail;
      this.stencilZFail = a.stencilZFail;
      this.stencilZPass = a.stencilZPass;
      this.stencilWrite = a.stencilWrite;
      var b = a.clippingPlanes,
          c = null;

      if (null !== b) {
        var d = b.length;
        c = Array(d);

        for (var e = 0; e !== d; ++e) c[e] = b[e].clone();
      }

      this.clippingPlanes = c;
      this.clipIntersection = a.clipIntersection;
      this.clipShadows = a.clipShadows;
      this.shadowSide = a.shadowSide;
      this.colorWrite = a.colorWrite;
      this.precision = a.precision;
      this.polygonOffset = a.polygonOffset;
      this.polygonOffsetFactor = a.polygonOffsetFactor;
      this.polygonOffsetUnits = a.polygonOffsetUnits;
      this.dithering = a.dithering;
      this.alphaTest = a.alphaTest;
      this.premultipliedAlpha = a.premultipliedAlpha;
      this.visible = a.visible;
      this.toneMapped = a.toneMapped;
      this.userData = JSON.parse(JSON.stringify(a.userData));
      return this;
    },
    dispose: function () {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });
  Ga.prototype = Object.create(O.prototype);
  Ga.prototype.constructor = Ga;
  Ga.prototype.isMeshBasicMaterial = !0;

  Ga.prototype.copy = function (a) {
    O.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.specularMap = a.specularMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.combine = a.combine;
    this.reflectivity = a.reflectivity;
    this.refractionRatio = a.refractionRatio;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    return this;
  };

  Object.defineProperty(N.prototype, "needsUpdate", {
    set: function (a) {
      !0 === a && this.version++;
    }
  });
  Object.assign(N.prototype, {
    isBufferAttribute: !0,
    onUploadCallback: function () {},
    setUsage: function (a) {
      this.usage = a;
      return this;
    },
    copy: function (a) {
      this.name = a.name;
      this.array = new a.array.constructor(a.array);
      this.itemSize = a.itemSize;
      this.count = a.count;
      this.normalized = a.normalized;
      this.usage = a.usage;
      return this;
    },
    copyAt: function (a, b, c) {
      a *= this.itemSize;
      c *= b.itemSize;

      for (var d = 0, e = this.itemSize; d < e; d++) this.array[a + d] = b.array[c + d];

      return this;
    },
    copyArray: function (a) {
      this.array.set(a);
      return this;
    },
    copyColorsArray: function (a) {
      for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
        var f = a[d];
        void 0 === f && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", d), f = new J());
        b[c++] = f.r;
        b[c++] = f.g;
        b[c++] = f.b;
      }

      return this;
    },
    copyVector2sArray: function (a) {
      for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
        var f = a[d];
        void 0 === f && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", d), f = new B());
        b[c++] = f.x;
        b[c++] = f.y;
      }

      return this;
    },
    copyVector3sArray: function (a) {
      for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
        var f = a[d];
        void 0 === f && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", d), f = new n());
        b[c++] = f.x;
        b[c++] = f.y;
        b[c++] = f.z;
      }

      return this;
    },
    copyVector4sArray: function (a) {
      for (var b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
        var f = a[d];
        void 0 === f && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", d), f = new da());
        b[c++] = f.x;
        b[c++] = f.y;
        b[c++] = f.z;
        b[c++] = f.w;
      }

      return this;
    },
    set: function (a, b) {
      void 0 === b && (b = 0);
      this.array.set(a, b);
      return this;
    },
    getX: function (a) {
      return this.array[a * this.itemSize];
    },
    setX: function (a, b) {
      this.array[a * this.itemSize] = b;
      return this;
    },
    getY: function (a) {
      return this.array[a * this.itemSize + 1];
    },
    setY: function (a, b) {
      this.array[a * this.itemSize + 1] = b;
      return this;
    },
    getZ: function (a) {
      return this.array[a * this.itemSize + 2];
    },
    setZ: function (a, b) {
      this.array[a * this.itemSize + 2] = b;
      return this;
    },
    getW: function (a) {
      return this.array[a * this.itemSize + 3];
    },
    setW: function (a, b) {
      this.array[a * this.itemSize + 3] = b;
      return this;
    },
    setXY: function (a, b, c) {
      a *= this.itemSize;
      this.array[a + 0] = b;
      this.array[a + 1] = c;
      return this;
    },
    setXYZ: function (a, b, c, d) {
      a *= this.itemSize;
      this.array[a + 0] = b;
      this.array[a + 1] = c;
      this.array[a + 2] = d;
      return this;
    },
    setXYZW: function (a, b, c, d, e) {
      a *= this.itemSize;
      this.array[a + 0] = b;
      this.array[a + 1] = c;
      this.array[a + 2] = d;
      this.array[a + 3] = e;
      return this;
    },
    onUpload: function (a) {
      this.onUploadCallback = a;
      return this;
    },
    clone: function () {
      return new this.constructor(this.array, this.itemSize).copy(this);
    },
    toJSON: function () {
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.prototype.slice.call(this.array),
        normalized: this.normalized
      };
    }
  });
  wd.prototype = Object.create(N.prototype);
  wd.prototype.constructor = wd;
  xd.prototype = Object.create(N.prototype);
  xd.prototype.constructor = xd;
  yd.prototype = Object.create(N.prototype);
  yd.prototype.constructor = yd;
  zd.prototype = Object.create(N.prototype);
  zd.prototype.constructor = zd;
  Sb.prototype = Object.create(N.prototype);
  Sb.prototype.constructor = Sb;
  Ad.prototype = Object.create(N.prototype);
  Ad.prototype.constructor = Ad;
  Tb.prototype = Object.create(N.prototype);
  Tb.prototype.constructor = Tb;
  A.prototype = Object.create(N.prototype);
  A.prototype.constructor = A;
  Bd.prototype = Object.create(N.prototype);
  Bd.prototype.constructor = Bd;
  Object.assign(ih.prototype, {
    computeGroups: function (a) {
      var b = [],
          c = void 0;
      a = a.faces;

      for (var d = 0; d < a.length; d++) {
        var e = a[d];

        if (e.materialIndex !== c) {
          c = e.materialIndex;
          void 0 !== f && (f.count = 3 * d - f.start, b.push(f));
          var f = {
            start: 3 * d,
            materialIndex: c
          };
        }
      }

      void 0 !== f && (f.count = 3 * d - f.start, b.push(f));
      this.groups = b;
    },
    fromGeometry: function (a) {
      var b = a.faces,
          c = a.vertices,
          d = a.faceVertexUvs,
          e = d[0] && 0 < d[0].length,
          f = d[1] && 0 < d[1].length,
          g = a.morphTargets,
          h = g.length;

      if (0 < h) {
        var l = [];

        for (var m = 0; m < h; m++) l[m] = {
          name: g[m].name,
          data: []
        };

        this.morphTargets.position = l;
      }

      var k = a.morphNormals,
          n = k.length;

      if (0 < n) {
        var u = [];

        for (m = 0; m < n; m++) u[m] = {
          name: k[m].name,
          data: []
        };

        this.morphTargets.normal = u;
      }

      var p = a.skinIndices,
          t = a.skinWeights,
          v = p.length === c.length,
          y = t.length === c.length;
      0 < c.length && 0 === b.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");

      for (m = 0; m < b.length; m++) {
        var w = b[m];
        this.vertices.push(c[w.a], c[w.b], c[w.c]);
        var x = w.vertexNormals;
        3 === x.length ? this.normals.push(x[0], x[1], x[2]) : (x = w.normal, this.normals.push(x, x, x));
        x = w.vertexColors;
        3 === x.length ? this.colors.push(x[0], x[1], x[2]) : (x = w.color, this.colors.push(x, x, x));
        !0 === e && (x = d[0][m], void 0 !== x ? this.uvs.push(x[0], x[1], x[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", m), this.uvs.push(new B(), new B(), new B())));
        !0 === f && (x = d[1][m], void 0 !== x ? this.uvs2.push(x[0], x[1], x[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", m), this.uvs2.push(new B(), new B(), new B())));

        for (x = 0; x < h; x++) {
          var A = g[x].vertices;
          l[x].data.push(A[w.a], A[w.b], A[w.c]);
        }

        for (x = 0; x < n; x++) A = k[x].vertexNormals[m], u[x].data.push(A.a, A.b, A.c);

        v && this.skinIndices.push(p[w.a], p[w.b], p[w.c]);
        y && this.skinWeights.push(t[w.a], t[w.b], t[w.c]);
      }

      this.computeGroups(a);
      this.verticesNeedUpdate = a.verticesNeedUpdate;
      this.normalsNeedUpdate = a.normalsNeedUpdate;
      this.colorsNeedUpdate = a.colorsNeedUpdate;
      this.uvsNeedUpdate = a.uvsNeedUpdate;
      this.groupsNeedUpdate = a.groupsNeedUpdate;
      null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
      null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
      return this;
    }
  });
  var Vi = 1,
      jb = new Q(),
      Vg = new E(),
      Bf = new n(),
      qc = new ab(),
      Wg = new ab(),
      Za = new n();
  D.prototype = Object.assign(Object.create(Aa.prototype), {
    constructor: D,
    isBufferGeometry: !0,
    getIndex: function () {
      return this.index;
    },
    setIndex: function (a) {
      Array.isArray(a) ? this.index = new (65535 < jh(a) ? Tb : Sb)(a, 1) : this.index = a;
    },
    getAttribute: function (a) {
      return this.attributes[a];
    },
    setAttribute: function (a, b) {
      this.attributes[a] = b;
      return this;
    },
    deleteAttribute: function (a) {
      delete this.attributes[a];
      return this;
    },
    addGroup: function (a, b, c) {
      this.groups.push({
        start: a,
        count: b,
        materialIndex: void 0 !== c ? c : 0
      });
    },
    clearGroups: function () {
      this.groups = [];
    },
    setDrawRange: function (a, b) {
      this.drawRange.start = a;
      this.drawRange.count = b;
    },
    applyMatrix: function (a) {
      var b = this.attributes.position;
      void 0 !== b && (a.applyToBufferAttribute(b), b.needsUpdate = !0);
      var c = this.attributes.normal;
      void 0 !== c && (b = new Z().getNormalMatrix(a), b.applyToBufferAttribute(c), c.needsUpdate = !0);
      c = this.attributes.tangent;
      void 0 !== c && (b = new Z().getNormalMatrix(a), b.applyToBufferAttribute(c), c.needsUpdate = !0);
      null !== this.boundingBox && this.computeBoundingBox();
      null !== this.boundingSphere && this.computeBoundingSphere();
      return this;
    },
    rotateX: function (a) {
      jb.makeRotationX(a);
      this.applyMatrix(jb);
      return this;
    },
    rotateY: function (a) {
      jb.makeRotationY(a);
      this.applyMatrix(jb);
      return this;
    },
    rotateZ: function (a) {
      jb.makeRotationZ(a);
      this.applyMatrix(jb);
      return this;
    },
    translate: function (a, b, c) {
      jb.makeTranslation(a, b, c);
      this.applyMatrix(jb);
      return this;
    },
    scale: function (a, b, c) {
      jb.makeScale(a, b, c);
      this.applyMatrix(jb);
      return this;
    },
    lookAt: function (a) {
      Vg.lookAt(a);
      Vg.updateMatrix();
      this.applyMatrix(Vg.matrix);
      return this;
    },
    center: function () {
      this.computeBoundingBox();
      this.boundingBox.getCenter(Bf).negate();
      this.translate(Bf.x, Bf.y, Bf.z);
      return this;
    },
    setFromObject: function (a) {
      var b = a.geometry;

      if (a.isPoints || a.isLine) {
        a = new A(3 * b.vertices.length, 3);
        var c = new A(3 * b.colors.length, 3);
        this.setAttribute("position", a.copyVector3sArray(b.vertices));
        this.setAttribute("color", c.copyColorsArray(b.colors));
        b.lineDistances && b.lineDistances.length === b.vertices.length && (a = new A(b.lineDistances.length, 1), this.setAttribute("lineDistance", a.copyArray(b.lineDistances)));
        null !== b.boundingSphere && (this.boundingSphere = b.boundingSphere.clone());
        null !== b.boundingBox && (this.boundingBox = b.boundingBox.clone());
      } else a.isMesh && b && b.isGeometry && this.fromGeometry(b);

      return this;
    },
    setFromPoints: function (a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) {
        var e = a[c];
        b.push(e.x, e.y, e.z || 0);
      }

      this.setAttribute("position", new A(b, 3));
      return this;
    },
    updateFromObject: function (a) {
      var b = a.geometry;

      if (a.isMesh) {
        var c = b.__directGeometry;
        !0 === b.elementsNeedUpdate && (c = void 0, b.elementsNeedUpdate = !1);
        if (void 0 === c) return this.fromGeometry(b);
        c.verticesNeedUpdate = b.verticesNeedUpdate;
        c.normalsNeedUpdate = b.normalsNeedUpdate;
        c.colorsNeedUpdate = b.colorsNeedUpdate;
        c.uvsNeedUpdate = b.uvsNeedUpdate;
        c.groupsNeedUpdate = b.groupsNeedUpdate;
        b.verticesNeedUpdate = !1;
        b.normalsNeedUpdate = !1;
        b.colorsNeedUpdate = !1;
        b.uvsNeedUpdate = !1;
        b.groupsNeedUpdate = !1;
        b = c;
      }

      !0 === b.verticesNeedUpdate && (c = this.attributes.position, void 0 !== c && (c.copyVector3sArray(b.vertices), c.needsUpdate = !0), b.verticesNeedUpdate = !1);
      !0 === b.normalsNeedUpdate && (c = this.attributes.normal, void 0 !== c && (c.copyVector3sArray(b.normals), c.needsUpdate = !0), b.normalsNeedUpdate = !1);
      !0 === b.colorsNeedUpdate && (c = this.attributes.color, void 0 !== c && (c.copyColorsArray(b.colors), c.needsUpdate = !0), b.colorsNeedUpdate = !1);
      b.uvsNeedUpdate && (c = this.attributes.uv, void 0 !== c && (c.copyVector2sArray(b.uvs), c.needsUpdate = !0), b.uvsNeedUpdate = !1);
      b.lineDistancesNeedUpdate && (c = this.attributes.lineDistance, void 0 !== c && (c.copyArray(b.lineDistances), c.needsUpdate = !0), b.lineDistancesNeedUpdate = !1);
      b.groupsNeedUpdate && (b.computeGroups(a.geometry), this.groups = b.groups, b.groupsNeedUpdate = !1);
      return this;
    },
    fromGeometry: function (a) {
      a.__directGeometry = new ih().fromGeometry(a);
      return this.fromDirectGeometry(a.__directGeometry);
    },
    fromDirectGeometry: function (a) {
      var b = new Float32Array(3 * a.vertices.length);
      this.setAttribute("position", new N(b, 3).copyVector3sArray(a.vertices));
      0 < a.normals.length && (b = new Float32Array(3 * a.normals.length), this.setAttribute("normal", new N(b, 3).copyVector3sArray(a.normals)));
      0 < a.colors.length && (b = new Float32Array(3 * a.colors.length), this.setAttribute("color", new N(b, 3).copyColorsArray(a.colors)));
      0 < a.uvs.length && (b = new Float32Array(2 * a.uvs.length), this.setAttribute("uv", new N(b, 2).copyVector2sArray(a.uvs)));
      0 < a.uvs2.length && (b = new Float32Array(2 * a.uvs2.length), this.setAttribute("uv2", new N(b, 2).copyVector2sArray(a.uvs2)));
      this.groups = a.groups;

      for (var c in a.morphTargets) {
        b = [];

        for (var d = a.morphTargets[c], e = 0, f = d.length; e < f; e++) {
          var g = d[e],
              h = new A(3 * g.data.length, 3);
          h.name = g.name;
          b.push(h.copyVector3sArray(g.data));
        }

        this.morphAttributes[c] = b;
      }

      0 < a.skinIndices.length && (c = new A(4 * a.skinIndices.length, 4), this.setAttribute("skinIndex", c.copyVector4sArray(a.skinIndices)));
      0 < a.skinWeights.length && (c = new A(4 * a.skinWeights.length, 4), this.setAttribute("skinWeight", c.copyVector4sArray(a.skinWeights)));
      null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
      null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
      return this;
    },
    computeBoundingBox: function () {
      null === this.boundingBox && (this.boundingBox = new ab());
      var a = this.attributes.position,
          b = this.morphAttributes.position;

      if (void 0 !== a) {
        if (this.boundingBox.setFromBufferAttribute(a), b) {
          a = 0;

          for (var c = b.length; a < c; a++) qc.setFromBufferAttribute(b[a]), this.boundingBox.expandByPoint(qc.min), this.boundingBox.expandByPoint(qc.max);
        }
      } else this.boundingBox.makeEmpty();

      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    },
    computeBoundingSphere: function () {
      null === this.boundingSphere && (this.boundingSphere = new mb());
      var a = this.attributes.position,
          b = this.morphAttributes.position;

      if (a) {
        var c = this.boundingSphere.center;
        qc.setFromBufferAttribute(a);
        if (b) for (var d = 0, e = b.length; d < e; d++) {
          var f = b[d];
          Wg.setFromBufferAttribute(f);
          qc.expandByPoint(Wg.min);
          qc.expandByPoint(Wg.max);
        }
        qc.getCenter(c);
        var g = 0;
        d = 0;

        for (e = a.count; d < e; d++) Za.fromBufferAttribute(a, d), g = Math.max(g, c.distanceToSquared(Za));

        if (b) for (d = 0, e = b.length; d < e; d++) {
          f = b[d];
          a = 0;

          for (var h = f.count; a < h; a++) Za.fromBufferAttribute(f, a), g = Math.max(g, c.distanceToSquared(Za));
        }
        this.boundingSphere.radius = Math.sqrt(g);
        isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    },
    computeFaceNormals: function () {},
    computeVertexNormals: function () {
      var a = this.index,
          b = this.attributes;

      if (b.position) {
        var c = b.position.array;
        if (void 0 === b.normal) this.setAttribute("normal", new N(new Float32Array(c.length), 3));else for (var d = b.normal.array, e = 0, f = d.length; e < f; e++) d[e] = 0;
        d = b.normal.array;
        var g = new n(),
            h = new n(),
            l = new n(),
            m = new n(),
            k = new n();

        if (a) {
          var q = a.array;
          e = 0;

          for (f = a.count; e < f; e += 3) {
            a = 3 * q[e + 0];
            var u = 3 * q[e + 1];
            var p = 3 * q[e + 2];
            g.fromArray(c, a);
            h.fromArray(c, u);
            l.fromArray(c, p);
            m.subVectors(l, h);
            k.subVectors(g, h);
            m.cross(k);
            d[a] += m.x;
            d[a + 1] += m.y;
            d[a + 2] += m.z;
            d[u] += m.x;
            d[u + 1] += m.y;
            d[u + 2] += m.z;
            d[p] += m.x;
            d[p + 1] += m.y;
            d[p + 2] += m.z;
          }
        } else for (e = 0, f = c.length; e < f; e += 9) g.fromArray(c, e), h.fromArray(c, e + 3), l.fromArray(c, e + 6), m.subVectors(l, h), k.subVectors(g, h), m.cross(k), d[e] = m.x, d[e + 1] = m.y, d[e + 2] = m.z, d[e + 3] = m.x, d[e + 4] = m.y, d[e + 5] = m.z, d[e + 6] = m.x, d[e + 7] = m.y, d[e + 8] = m.z;

        this.normalizeNormals();
        b.normal.needsUpdate = !0;
      }
    },
    merge: function (a, b) {
      if (a && a.isBufferGeometry) {
        void 0 === b && (b = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
        var c = this.attributes,
            d;

        for (d in c) if (void 0 !== a.attributes[d]) {
          var e = c[d].array,
              f = a.attributes[d],
              g = f.array,
              h = f.itemSize * b;
          f = Math.min(g.length, e.length - h);

          for (var l = 0; l < f; l++, h++) e[h] = g[l];
        }

        return this;
      }

      console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", a);
    },
    normalizeNormals: function () {
      for (var a = this.attributes.normal, b = 0, c = a.count; b < c; b++) Za.x = a.getX(b), Za.y = a.getY(b), Za.z = a.getZ(b), Za.normalize(), a.setXYZ(b, Za.x, Za.y, Za.z);
    },
    toNonIndexed: function () {
      function a(a, b) {
        var c = a.array;
        a = a.itemSize;

        for (var d = new c.constructor(b.length * a), e, f = 0, g = 0, h = b.length; g < h; g++) {
          e = b[g] * a;

          for (var l = 0; l < a; l++) d[f++] = c[e++];
        }

        return new N(d, a);
      }

      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
      var b = new D(),
          c = this.index.array,
          d = this.attributes,
          e;

      for (e in d) {
        var f = d[e];
        f = a(f, c);
        b.setAttribute(e, f);
      }

      var g = this.morphAttributes;

      for (e in g) {
        var h = [],
            l = g[e];
        d = 0;

        for (var m = l.length; d < m; d++) f = l[d], f = a(f, c), h.push(f);

        b.morphAttributes[e] = h;
      }

      c = this.groups;
      d = 0;

      for (e = c.length; d < e; d++) f = c[d], b.addGroup(f.start, f.count, f.materialIndex);

      return b;
    },
    toJSON: function () {
      var a = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      a.uuid = this.uuid;
      a.type = this.type;
      "" !== this.name && (a.name = this.name);
      0 < Object.keys(this.userData).length && (a.userData = this.userData);

      if (void 0 !== this.parameters) {
        var b = this.parameters;

        for (m in b) void 0 !== b[m] && (a[m] = b[m]);

        return a;
      }

      a.data = {
        attributes: {}
      };
      b = this.index;
      null !== b && (a.data.index = {
        type: b.array.constructor.name,
        array: Array.prototype.slice.call(b.array)
      });
      var c = this.attributes;

      for (m in c) {
        b = c[m];
        var d = b.toJSON();
        "" !== b.name && (d.name = b.name);
        a.data.attributes[m] = d;
      }

      c = {};
      var e = !1;

      for (m in this.morphAttributes) {
        for (var f = this.morphAttributes[m], g = [], h = 0, l = f.length; h < l; h++) b = f[h], d = b.toJSON(), "" !== b.name && (d.name = b.name), g.push(d);

        0 < g.length && (c[m] = g, e = !0);
      }

      e && (a.data.morphAttributes = c);
      var m = this.groups;
      0 < m.length && (a.data.groups = JSON.parse(JSON.stringify(m)));
      m = this.boundingSphere;
      null !== m && (a.data.boundingSphere = {
        center: m.center.toArray(),
        radius: m.radius
      });
      return a;
    },
    clone: function () {
      return new D().copy(this);
    },
    copy: function (a) {
      var b;
      this.index = null;
      this.attributes = {};
      this.morphAttributes = {};
      this.groups = [];
      this.boundingSphere = this.boundingBox = null;
      this.name = a.name;
      var c = a.index;
      null !== c && this.setIndex(c.clone());
      c = a.attributes;

      for (g in c) this.setAttribute(g, c[g].clone());

      var d = a.morphAttributes;

      for (g in d) {
        var e = [],
            f = d[g];
        c = 0;

        for (b = f.length; c < b; c++) e.push(f[c].clone());

        this.morphAttributes[g] = e;
      }

      var g = a.groups;
      c = 0;

      for (b = g.length; c < b; c++) d = g[c], this.addGroup(d.start, d.count, d.materialIndex);

      g = a.boundingBox;
      null !== g && (this.boundingBox = g.clone());
      g = a.boundingSphere;
      null !== g && (this.boundingSphere = g.clone());
      this.drawRange.start = a.drawRange.start;
      this.drawRange.count = a.drawRange.count;
      this.userData = a.userData;
      return this;
    },
    dispose: function () {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });
  var ui = new Q(),
      rc = new Rb(),
      Xg = new mb(),
      Ub = new n(),
      Vb = new n(),
      Wb = new n(),
      lh = new n(),
      mh = new n(),
      nh = new n(),
      Yf = new n(),
      Zf = new n(),
      $f = new n(),
      yc = new B(),
      zc = new B(),
      Ac = new B(),
      Cd = new n(),
      Ee = new n();
  ea.prototype = Object.assign(Object.create(E.prototype), {
    constructor: ea,
    isMesh: !0,
    setDrawMode: function (a) {
      this.drawMode = a;
    },
    copy: function (a) {
      E.prototype.copy.call(this, a);
      this.drawMode = a.drawMode;
      void 0 !== a.morphTargetInfluences && (this.morphTargetInfluences = a.morphTargetInfluences.slice());
      void 0 !== a.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, a.morphTargetDictionary));
      return this;
    },
    updateMorphTargets: function () {
      var a = this.geometry;

      if (a.isBufferGeometry) {
        a = a.morphAttributes;
        var b = Object.keys(a);

        if (0 < b.length) {
          var c = a[b[0]];
          if (void 0 !== c) for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, a = 0, b = c.length; a < b; a++) {
            var d = c[a].name || String(a);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[d] = a;
          }
        }
      } else a = a.morphTargets, void 0 !== a && 0 < a.length && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    },
    raycast: function (a, b) {
      var c = this.geometry,
          d = this.material,
          e = this.matrixWorld;
      if (void 0 !== d && (null === c.boundingSphere && c.computeBoundingSphere(), Xg.copy(c.boundingSphere), Xg.applyMatrix4(e), !1 !== a.ray.intersectsSphere(Xg) && (ui.getInverse(e), rc.copy(a.ray).applyMatrix4(ui), null === c.boundingBox || !1 !== rc.intersectsBox(c.boundingBox)))) if (0 !== this.drawMode) console.warn("THREE.Mesh: TriangleStripDrawMode and TriangleFanDrawMode are not supported by .raycast().");else if (c.isBufferGeometry) {
        var f = c.index;
        e = c.attributes.position;
        var g = c.morphAttributes.position,
            h = c.attributes.uv,
            l = c.attributes.uv2,
            m = c.groups,
            k = c.drawRange,
            n,
            u;
        if (null !== f) {
          if (Array.isArray(d)) {
            var p = 0;

            for (n = m.length; p < n; p++) {
              var t = m[p];
              var v = d[t.materialIndex];
              var y = Math.max(t.start, k.start);

              for (u = c = Math.min(t.start + t.count, k.start + k.count); y < u; y += 3) {
                c = f.getX(y);
                var w = f.getX(y + 1);
                var x = f.getX(y + 2);
                if (c = Fe(this, v, a, rc, e, g, h, l, c, w, x)) c.faceIndex = Math.floor(y / 3), c.face.materialIndex = t.materialIndex, b.push(c);
              }
            }
          } else for (y = Math.max(0, k.start), c = Math.min(f.count, k.start + k.count), p = y, n = c; p < n; p += 3) {
            if (c = f.getX(p), w = f.getX(p + 1), x = f.getX(p + 2), c = Fe(this, d, a, rc, e, g, h, l, c, w, x)) c.faceIndex = Math.floor(p / 3), b.push(c);
          }
        } else if (void 0 !== e) if (Array.isArray(d)) for (p = 0, n = m.length; p < n; p++) for (t = m[p], v = d[t.materialIndex], y = Math.max(t.start, k.start), u = c = Math.min(t.start + t.count, k.start + k.count); y < u; y += 3) {
          if (c = y, w = y + 1, x = y + 2, c = Fe(this, v, a, rc, e, g, h, l, c, w, x)) c.faceIndex = Math.floor(y / 3), c.face.materialIndex = t.materialIndex, b.push(c);
        } else for (y = Math.max(0, k.start), c = Math.min(e.count, k.start + k.count), p = y, n = c; p < n; p += 3) if (c = p, w = p + 1, x = p + 2, c = Fe(this, d, a, rc, e, g, h, l, c, w, x)) c.faceIndex = Math.floor(p / 3), b.push(c);
      } else if (c.isGeometry) for (e = Array.isArray(d), g = c.vertices, h = c.faces, c = c.faceVertexUvs[0], 0 < c.length && (f = c), p = 0, n = h.length; p < n; p++) if (t = h[p], c = e ? d[t.materialIndex] : d, void 0 !== c && (l = g[t.a], m = g[t.b], k = g[t.c], c = kh(this, c, a, rc, l, m, k, Cd))) f && f[p] && (v = f[p], yc.copy(v[0]), zc.copy(v[1]), Ac.copy(v[2]), c.uv = ba.getUV(Cd, l, m, k, yc, zc, Ac, new B())), c.face = t, c.faceIndex = p, b.push(c);
    },
    clone: function () {
      return new this.constructor(this.geometry, this.material).copy(this);
    }
  });
  var Wi = 0,
      kb = new Q(),
      Yg = new E(),
      Cf = new n();
  G.prototype = Object.assign(Object.create(Aa.prototype), {
    constructor: G,
    isGeometry: !0,
    applyMatrix: function (a) {
      for (var b = new Z().getNormalMatrix(a), c = 0, d = this.vertices.length; c < d; c++) this.vertices[c].applyMatrix4(a);

      c = 0;

      for (d = this.faces.length; c < d; c++) {
        a = this.faces[c];
        a.normal.applyMatrix3(b).normalize();

        for (var e = 0, f = a.vertexNormals.length; e < f; e++) a.vertexNormals[e].applyMatrix3(b).normalize();
      }

      null !== this.boundingBox && this.computeBoundingBox();
      null !== this.boundingSphere && this.computeBoundingSphere();
      this.normalsNeedUpdate = this.verticesNeedUpdate = !0;
      return this;
    },
    rotateX: function (a) {
      kb.makeRotationX(a);
      this.applyMatrix(kb);
      return this;
    },
    rotateY: function (a) {
      kb.makeRotationY(a);
      this.applyMatrix(kb);
      return this;
    },
    rotateZ: function (a) {
      kb.makeRotationZ(a);
      this.applyMatrix(kb);
      return this;
    },
    translate: function (a, b, c) {
      kb.makeTranslation(a, b, c);
      this.applyMatrix(kb);
      return this;
    },
    scale: function (a, b, c) {
      kb.makeScale(a, b, c);
      this.applyMatrix(kb);
      return this;
    },
    lookAt: function (a) {
      Yg.lookAt(a);
      Yg.updateMatrix();
      this.applyMatrix(Yg.matrix);
      return this;
    },
    fromBufferGeometry: function (a) {
      function b(a, b, d, e) {
        var f = void 0 === h ? [] : [c.colors[a].clone(), c.colors[b].clone(), c.colors[d].clone()],
            k = void 0 === g ? [] : [new n().fromArray(g, 3 * a), new n().fromArray(g, 3 * b), new n().fromArray(g, 3 * d)];
        e = new xc(a, b, d, k, f, e);
        c.faces.push(e);
        void 0 !== l && c.faceVertexUvs[0].push([new B().fromArray(l, 2 * a), new B().fromArray(l, 2 * b), new B().fromArray(l, 2 * d)]);
        void 0 !== m && c.faceVertexUvs[1].push([new B().fromArray(m, 2 * a), new B().fromArray(m, 2 * b), new B().fromArray(m, 2 * d)]);
      }

      var c = this,
          d = null !== a.index ? a.index.array : void 0,
          e = a.attributes;
      if (void 0 === e.position) return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."), this;
      var f = e.position.array,
          g = void 0 !== e.normal ? e.normal.array : void 0,
          h = void 0 !== e.color ? e.color.array : void 0,
          l = void 0 !== e.uv ? e.uv.array : void 0,
          m = void 0 !== e.uv2 ? e.uv2.array : void 0;
      void 0 !== m && (this.faceVertexUvs[1] = []);

      for (e = 0; e < f.length; e += 3) c.vertices.push(new n().fromArray(f, e)), void 0 !== h && c.colors.push(new J().fromArray(h, e));

      var k = a.groups;
      if (0 < k.length) for (e = 0; e < k.length; e++) {
        f = k[e];
        var q = f.start,
            u = q;

        for (q += f.count; u < q; u += 3) void 0 !== d ? b(d[u], d[u + 1], d[u + 2], f.materialIndex) : b(u, u + 1, u + 2, f.materialIndex);
      } else if (void 0 !== d) for (e = 0; e < d.length; e += 3) b(d[e], d[e + 1], d[e + 2]);else for (e = 0; e < f.length / 3; e += 3) b(e, e + 1, e + 2);
      this.computeFaceNormals();
      null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
      null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
      return this;
    },
    center: function () {
      this.computeBoundingBox();
      this.boundingBox.getCenter(Cf).negate();
      this.translate(Cf.x, Cf.y, Cf.z);
      return this;
    },
    normalize: function () {
      this.computeBoundingSphere();
      var a = this.boundingSphere.center,
          b = this.boundingSphere.radius;
      b = 0 === b ? 1 : 1 / b;
      var c = new Q();
      c.set(b, 0, 0, -b * a.x, 0, b, 0, -b * a.y, 0, 0, b, -b * a.z, 0, 0, 0, 1);
      this.applyMatrix(c);
      return this;
    },
    computeFaceNormals: function () {
      for (var a = new n(), b = new n(), c = 0, d = this.faces.length; c < d; c++) {
        var e = this.faces[c],
            f = this.vertices[e.a],
            g = this.vertices[e.b];
        a.subVectors(this.vertices[e.c], g);
        b.subVectors(f, g);
        a.cross(b);
        a.normalize();
        e.normal.copy(a);
      }
    },
    computeVertexNormals: function (a) {
      void 0 === a && (a = !0);
      var b;
      var c = Array(this.vertices.length);
      var d = 0;

      for (b = this.vertices.length; d < b; d++) c[d] = new n();

      if (a) {
        var e = new n(),
            f = new n();
        a = 0;

        for (d = this.faces.length; a < d; a++) {
          b = this.faces[a];
          var g = this.vertices[b.a];
          var h = this.vertices[b.b];
          var l = this.vertices[b.c];
          e.subVectors(l, h);
          f.subVectors(g, h);
          e.cross(f);
          c[b.a].add(e);
          c[b.b].add(e);
          c[b.c].add(e);
        }
      } else for (this.computeFaceNormals(), a = 0, d = this.faces.length; a < d; a++) b = this.faces[a], c[b.a].add(b.normal), c[b.b].add(b.normal), c[b.c].add(b.normal);

      d = 0;

      for (b = this.vertices.length; d < b; d++) c[d].normalize();

      a = 0;

      for (d = this.faces.length; a < d; a++) b = this.faces[a], g = b.vertexNormals, 3 === g.length ? (g[0].copy(c[b.a]), g[1].copy(c[b.b]), g[2].copy(c[b.c])) : (g[0] = c[b.a].clone(), g[1] = c[b.b].clone(), g[2] = c[b.c].clone());

      0 < this.faces.length && (this.normalsNeedUpdate = !0);
    },
    computeFlatVertexNormals: function () {
      var a;
      this.computeFaceNormals();
      var b = 0;

      for (a = this.faces.length; b < a; b++) {
        var c = this.faces[b];
        var d = c.vertexNormals;
        3 === d.length ? (d[0].copy(c.normal), d[1].copy(c.normal), d[2].copy(c.normal)) : (d[0] = c.normal.clone(), d[1] = c.normal.clone(), d[2] = c.normal.clone());
      }

      0 < this.faces.length && (this.normalsNeedUpdate = !0);
    },
    computeMorphNormals: function () {
      var a, b;
      var c = 0;

      for (b = this.faces.length; c < b; c++) {
        var d = this.faces[c];
        d.__originalFaceNormal ? d.__originalFaceNormal.copy(d.normal) : d.__originalFaceNormal = d.normal.clone();
        d.__originalVertexNormals || (d.__originalVertexNormals = []);
        var e = 0;

        for (a = d.vertexNormals.length; e < a; e++) d.__originalVertexNormals[e] ? d.__originalVertexNormals[e].copy(d.vertexNormals[e]) : d.__originalVertexNormals[e] = d.vertexNormals[e].clone();
      }

      var f = new G();
      f.faces = this.faces;
      e = 0;

      for (a = this.morphTargets.length; e < a; e++) {
        if (!this.morphNormals[e]) {
          this.morphNormals[e] = {};
          this.morphNormals[e].faceNormals = [];
          this.morphNormals[e].vertexNormals = [];
          d = this.morphNormals[e].faceNormals;
          var g = this.morphNormals[e].vertexNormals;
          c = 0;

          for (b = this.faces.length; c < b; c++) {
            var h = new n();
            var l = {
              a: new n(),
              b: new n(),
              c: new n()
            };
            d.push(h);
            g.push(l);
          }
        }

        g = this.morphNormals[e];
        f.vertices = this.morphTargets[e].vertices;
        f.computeFaceNormals();
        f.computeVertexNormals();
        c = 0;

        for (b = this.faces.length; c < b; c++) d = this.faces[c], h = g.faceNormals[c], l = g.vertexNormals[c], h.copy(d.normal), l.a.copy(d.vertexNormals[0]), l.b.copy(d.vertexNormals[1]), l.c.copy(d.vertexNormals[2]);
      }

      c = 0;

      for (b = this.faces.length; c < b; c++) d = this.faces[c], d.normal = d.__originalFaceNormal, d.vertexNormals = d.__originalVertexNormals;
    },
    computeBoundingBox: function () {
      null === this.boundingBox && (this.boundingBox = new ab());
      this.boundingBox.setFromPoints(this.vertices);
    },
    computeBoundingSphere: function () {
      null === this.boundingSphere && (this.boundingSphere = new mb());
      this.boundingSphere.setFromPoints(this.vertices);
    },
    merge: function (a, b, c) {
      if (a && a.isGeometry) {
        var d,
            e = this.vertices.length,
            f = this.vertices,
            g = a.vertices,
            h = this.faces,
            l = a.faces,
            m = this.colors,
            k = a.colors;
        void 0 === c && (c = 0);
        void 0 !== b && (d = new Z().getNormalMatrix(b));

        for (var n = 0, u = g.length; n < u; n++) {
          var p = g[n].clone();
          void 0 !== b && p.applyMatrix4(b);
          f.push(p);
        }

        n = 0;

        for (u = k.length; n < u; n++) m.push(k[n].clone());

        n = 0;

        for (u = l.length; n < u; n++) {
          g = l[n];
          var t = g.vertexNormals;
          k = g.vertexColors;
          m = new xc(g.a + e, g.b + e, g.c + e);
          m.normal.copy(g.normal);
          void 0 !== d && m.normal.applyMatrix3(d).normalize();
          b = 0;

          for (f = t.length; b < f; b++) p = t[b].clone(), void 0 !== d && p.applyMatrix3(d).normalize(), m.vertexNormals.push(p);

          m.color.copy(g.color);
          b = 0;

          for (f = k.length; b < f; b++) p = k[b], m.vertexColors.push(p.clone());

          m.materialIndex = g.materialIndex + c;
          h.push(m);
        }

        n = 0;

        for (u = a.faceVertexUvs.length; n < u; n++) for (c = a.faceVertexUvs[n], void 0 === this.faceVertexUvs[n] && (this.faceVertexUvs[n] = []), b = 0, f = c.length; b < f; b++) {
          d = c[b];
          e = [];
          h = 0;

          for (l = d.length; h < l; h++) e.push(d[h].clone());

          this.faceVertexUvs[n].push(e);
        }
      } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", a);
    },
    mergeMesh: function (a) {
      a && a.isMesh ? (a.matrixAutoUpdate && a.updateMatrix(), this.merge(a.geometry, a.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", a);
    },
    mergeVertices: function () {
      var a = {},
          b = [],
          c = [],
          d = Math.pow(10, 4),
          e;
      var f = 0;

      for (e = this.vertices.length; f < e; f++) {
        var g = this.vertices[f];
        g = Math.round(g.x * d) + "_" + Math.round(g.y * d) + "_" + Math.round(g.z * d);
        void 0 === a[g] ? (a[g] = f, b.push(this.vertices[f]), c[f] = b.length - 1) : c[f] = c[a[g]];
      }

      a = [];
      f = 0;

      for (e = this.faces.length; f < e; f++) for (d = this.faces[f], d.a = c[d.a], d.b = c[d.b], d.c = c[d.c], d = [d.a, d.b, d.c], g = 0; 3 > g; g++) if (d[g] === d[(g + 1) % 3]) {
        a.push(f);
        break;
      }

      for (f = a.length - 1; 0 <= f; f--) for (d = a[f], this.faces.splice(d, 1), c = 0, e = this.faceVertexUvs.length; c < e; c++) this.faceVertexUvs[c].splice(d, 1);

      f = this.vertices.length - b.length;
      this.vertices = b;
      return f;
    },
    setFromPoints: function (a) {
      this.vertices = [];

      for (var b = 0, c = a.length; b < c; b++) {
        var d = a[b];
        this.vertices.push(new n(d.x, d.y, d.z || 0));
      }

      return this;
    },
    sortFacesByMaterialIndex: function () {
      for (var a = this.faces, b = a.length, c = 0; c < b; c++) a[c]._id = c;

      a.sort(function (a, b) {
        return a.materialIndex - b.materialIndex;
      });
      var d = this.faceVertexUvs[0],
          e = this.faceVertexUvs[1],
          f,
          g;
      d && d.length === b && (f = []);
      e && e.length === b && (g = []);

      for (c = 0; c < b; c++) {
        var h = a[c]._id;
        f && f.push(d[h]);
        g && g.push(e[h]);
      }

      f && (this.faceVertexUvs[0] = f);
      g && (this.faceVertexUvs[1] = g);
    },
    toJSON: function () {
      function a(a, b, c) {
        return c ? a | 1 << b : a & ~(1 << b);
      }

      function b(a) {
        var b = a.x.toString() + a.y.toString() + a.z.toString();
        if (void 0 !== m[b]) return m[b];
        m[b] = l.length / 3;
        l.push(a.x, a.y, a.z);
        return m[b];
      }

      function c(a) {
        var b = a.r.toString() + a.g.toString() + a.b.toString();
        if (void 0 !== n[b]) return n[b];
        n[b] = k.length;
        k.push(a.getHex());
        return n[b];
      }

      function d(a) {
        var b = a.x.toString() + a.y.toString();
        if (void 0 !== p[b]) return p[b];
        p[b] = u.length / 2;
        u.push(a.x, a.y);
        return p[b];
      }

      var e = {
        metadata: {
          version: 4.5,
          type: "Geometry",
          generator: "Geometry.toJSON"
        }
      };
      e.uuid = this.uuid;
      e.type = this.type;
      "" !== this.name && (e.name = this.name);

      if (void 0 !== this.parameters) {
        var f = this.parameters,
            g;

        for (g in f) void 0 !== f[g] && (e[g] = f[g]);

        return e;
      }

      f = [];

      for (g = 0; g < this.vertices.length; g++) {
        var h = this.vertices[g];
        f.push(h.x, h.y, h.z);
      }

      h = [];
      var l = [],
          m = {},
          k = [],
          n = {},
          u = [],
          p = {};

      for (g = 0; g < this.faces.length; g++) {
        var t = this.faces[g],
            v = void 0 !== this.faceVertexUvs[0][g],
            y = 0 < t.normal.length(),
            w = 0 < t.vertexNormals.length,
            x = 1 !== t.color.r || 1 !== t.color.g || 1 !== t.color.b,
            B = 0 < t.vertexColors.length,
            A = 0;
        A = a(A, 0, 0);
        A = a(A, 1, !0);
        A = a(A, 2, !1);
        A = a(A, 3, v);
        A = a(A, 4, y);
        A = a(A, 5, w);
        A = a(A, 6, x);
        A = a(A, 7, B);
        h.push(A);
        h.push(t.a, t.b, t.c);
        h.push(t.materialIndex);
        v && (v = this.faceVertexUvs[0][g], h.push(d(v[0]), d(v[1]), d(v[2])));
        y && h.push(b(t.normal));
        w && (y = t.vertexNormals, h.push(b(y[0]), b(y[1]), b(y[2])));
        x && h.push(c(t.color));
        B && (t = t.vertexColors, h.push(c(t[0]), c(t[1]), c(t[2])));
      }

      e.data = {};
      e.data.vertices = f;
      e.data.normals = l;
      0 < k.length && (e.data.colors = k);
      0 < u.length && (e.data.uvs = [u]);
      e.data.faces = h;
      return e;
    },
    clone: function () {
      return new G().copy(this);
    },
    copy: function (a) {
      var b, c, d;
      this.vertices = [];
      this.colors = [];
      this.faces = [];
      this.faceVertexUvs = [[]];
      this.morphTargets = [];
      this.morphNormals = [];
      this.skinWeights = [];
      this.skinIndices = [];
      this.lineDistances = [];
      this.boundingSphere = this.boundingBox = null;
      this.name = a.name;
      var e = a.vertices;
      var f = 0;

      for (b = e.length; f < b; f++) this.vertices.push(e[f].clone());

      e = a.colors;
      f = 0;

      for (b = e.length; f < b; f++) this.colors.push(e[f].clone());

      e = a.faces;
      f = 0;

      for (b = e.length; f < b; f++) this.faces.push(e[f].clone());

      f = 0;

      for (b = a.faceVertexUvs.length; f < b; f++) {
        var g = a.faceVertexUvs[f];
        void 0 === this.faceVertexUvs[f] && (this.faceVertexUvs[f] = []);
        e = 0;

        for (c = g.length; e < c; e++) {
          var h = g[e],
              l = [];
          var m = 0;

          for (d = h.length; m < d; m++) l.push(h[m].clone());

          this.faceVertexUvs[f].push(l);
        }
      }

      m = a.morphTargets;
      f = 0;

      for (b = m.length; f < b; f++) {
        d = {};
        d.name = m[f].name;
        if (void 0 !== m[f].vertices) for (d.vertices = [], e = 0, c = m[f].vertices.length; e < c; e++) d.vertices.push(m[f].vertices[e].clone());
        if (void 0 !== m[f].normals) for (d.normals = [], e = 0, c = m[f].normals.length; e < c; e++) d.normals.push(m[f].normals[e].clone());
        this.morphTargets.push(d);
      }

      m = a.morphNormals;
      f = 0;

      for (b = m.length; f < b; f++) {
        d = {};
        if (void 0 !== m[f].vertexNormals) for (d.vertexNormals = [], e = 0, c = m[f].vertexNormals.length; e < c; e++) g = m[f].vertexNormals[e], h = {}, h.a = g.a.clone(), h.b = g.b.clone(), h.c = g.c.clone(), d.vertexNormals.push(h);
        if (void 0 !== m[f].faceNormals) for (d.faceNormals = [], e = 0, c = m[f].faceNormals.length; e < c; e++) d.faceNormals.push(m[f].faceNormals[e].clone());
        this.morphNormals.push(d);
      }

      e = a.skinWeights;
      f = 0;

      for (b = e.length; f < b; f++) this.skinWeights.push(e[f].clone());

      e = a.skinIndices;
      f = 0;

      for (b = e.length; f < b; f++) this.skinIndices.push(e[f].clone());

      e = a.lineDistances;
      f = 0;

      for (b = e.length; f < b; f++) this.lineDistances.push(e[f]);

      f = a.boundingBox;
      null !== f && (this.boundingBox = f.clone());
      f = a.boundingSphere;
      null !== f && (this.boundingSphere = f.clone());
      this.elementsNeedUpdate = a.elementsNeedUpdate;
      this.verticesNeedUpdate = a.verticesNeedUpdate;
      this.uvsNeedUpdate = a.uvsNeedUpdate;
      this.normalsNeedUpdate = a.normalsNeedUpdate;
      this.colorsNeedUpdate = a.colorsNeedUpdate;
      this.lineDistancesNeedUpdate = a.lineDistancesNeedUpdate;
      this.groupsNeedUpdate = a.groupsNeedUpdate;
      return this;
    },
    dispose: function () {
      this.dispatchEvent({
        type: "dispose"
      });
    }
  });

  var Zg = function (a) {
    function b(b, d, e, f, g, h) {
      a.call(this);
      this.type = "BoxGeometry";
      this.parameters = {
        width: b,
        height: d,
        depth: e,
        widthSegments: f,
        heightSegments: g,
        depthSegments: h
      };
      this.fromBufferGeometry(new Fd(b, d, e, f, g, h));
      this.mergeVertices();
    }

    a && (b.__proto__ = a);
    b.prototype = Object.create(a && a.prototype);
    return b.prototype.constructor = b;
  }(G),
      Fd = function (a) {
    function b(b, d, e, f, g, h) {
      function c(a, b, c, d, e, f, g, h, l, r, A) {
        var w = f / l,
            y = g / r,
            x = f / 2,
            z = g / 2,
            B = h / 2;
        g = l + 1;
        var E = r + 1,
            I = f = 0,
            C,
            F,
            D = new n();

        for (F = 0; F < E; F++) {
          var G = F * y - z;

          for (C = 0; C < g; C++) D[a] = (C * w - x) * d, D[b] = G * e, D[c] = B, q.push(D.x, D.y, D.z), D[a] = 0, D[b] = 0, D[c] = 0 < h ? 1 : -1, u.push(D.x, D.y, D.z), p.push(C / l), p.push(1 - F / r), f += 1;
        }

        for (F = 0; F < r; F++) for (C = 0; C < l; C++) a = t + C + g * (F + 1), b = t + (C + 1) + g * (F + 1), c = t + (C + 1) + g * F, k.push(t + C + g * F, a, c), k.push(a, b, c), I += 6;

        m.addGroup(v, I, A);
        v += I;
        t += f;
      }

      a.call(this);
      this.type = "BoxBufferGeometry";
      this.parameters = {
        width: b,
        height: d,
        depth: e,
        widthSegments: f,
        heightSegments: g,
        depthSegments: h
      };
      var m = this;
      b = b || 1;
      d = d || 1;
      e = e || 1;
      f = Math.floor(f) || 1;
      g = Math.floor(g) || 1;
      h = Math.floor(h) || 1;
      var k = [],
          q = [],
          u = [],
          p = [],
          t = 0,
          v = 0;
      c("z", "y", "x", -1, -1, e, d, b, h, g, 0);
      c("z", "y", "x", 1, -1, e, d, -b, h, g, 1);
      c("x", "z", "y", 1, 1, b, e, d, f, h, 2);
      c("x", "z", "y", 1, -1, b, e, -d, f, h, 3);
      c("x", "y", "z", 1, -1, b, d, e, f, g, 4);
      c("x", "y", "z", -1, -1, b, d, -e, f, g, 5);
      this.setIndex(k);
      this.setAttribute("position", new A(q, 3));
      this.setAttribute("normal", new A(u, 3));
      this.setAttribute("uv", new A(p, 2));
    }

    a && (b.__proto__ = a);
    b.prototype = Object.create(a && a.prototype);
    return b.prototype.constructor = b;
  }(D),
      Ck = {
    clone: Xb,
    merge: ua
  };

  va.prototype = Object.create(O.prototype);
  va.prototype.constructor = va;
  va.prototype.isShaderMaterial = !0;

  va.prototype.copy = function (a) {
    O.prototype.copy.call(this, a);
    this.fragmentShader = a.fragmentShader;
    this.vertexShader = a.vertexShader;
    this.uniforms = Xb(a.uniforms);
    this.defines = Object.assign({}, a.defines);
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.lights = a.lights;
    this.clipping = a.clipping;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    this.extensions = a.extensions;
    return this;
  };

  va.prototype.toJSON = function (a) {
    var b = O.prototype.toJSON.call(this, a);
    b.uniforms = {};

    for (var c in this.uniforms) {
      var d = this.uniforms[c].value;
      b.uniforms[c] = d && d.isTexture ? {
        type: "t",
        value: d.toJSON(a).uuid
      } : d && d.isColor ? {
        type: "c",
        value: d.getHex()
      } : d && d.isVector2 ? {
        type: "v2",
        value: d.toArray()
      } : d && d.isVector3 ? {
        type: "v3",
        value: d.toArray()
      } : d && d.isVector4 ? {
        type: "v4",
        value: d.toArray()
      } : d && d.isMatrix3 ? {
        type: "m3",
        value: d.toArray()
      } : d && d.isMatrix4 ? {
        type: "m4",
        value: d.toArray()
      } : {
        value: d
      };
    }

    0 < Object.keys(this.defines).length && (b.defines = this.defines);
    b.vertexShader = this.vertexShader;
    b.fragmentShader = this.fragmentShader;
    a = {};

    for (var e in this.extensions) !0 === this.extensions[e] && (a[e] = !0);

    0 < Object.keys(a).length && (b.extensions = a);
    return b;
  };

  bb.prototype = Object.assign(Object.create(E.prototype), {
    constructor: bb,
    isCamera: !0,
    copy: function (a, b) {
      E.prototype.copy.call(this, a, b);
      this.matrixWorldInverse.copy(a.matrixWorldInverse);
      this.projectionMatrix.copy(a.projectionMatrix);
      this.projectionMatrixInverse.copy(a.projectionMatrixInverse);
      return this;
    },
    getWorldDirection: function (a) {
      void 0 === a && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), a = new n());
      this.updateMatrixWorld(!0);
      var b = this.matrixWorld.elements;
      return a.set(-b[8], -b[9], -b[10]).normalize();
    },
    updateMatrixWorld: function (a) {
      E.prototype.updateMatrixWorld.call(this, a);
      this.matrixWorldInverse.getInverse(this.matrixWorld);
    },
    clone: function () {
      return new this.constructor().copy(this);
    }
  });
  U.prototype = Object.assign(Object.create(bb.prototype), {
    constructor: U,
    isPerspectiveCamera: !0,
    copy: function (a, b) {
      bb.prototype.copy.call(this, a, b);
      this.fov = a.fov;
      this.zoom = a.zoom;
      this.near = a.near;
      this.far = a.far;
      this.focus = a.focus;
      this.aspect = a.aspect;
      this.view = null === a.view ? null : Object.assign({}, a.view);
      this.filmGauge = a.filmGauge;
      this.filmOffset = a.filmOffset;
      return this;
    },
    setFocalLength: function (a) {
      a = .5 * this.getFilmHeight() / a;
      this.fov = 2 * P.RAD2DEG * Math.atan(a);
      this.updateProjectionMatrix();
    },
    getFocalLength: function () {
      var a = Math.tan(.5 * P.DEG2RAD * this.fov);
      return .5 * this.getFilmHeight() / a;
    },
    getEffectiveFOV: function () {
      return 2 * P.RAD2DEG * Math.atan(Math.tan(.5 * P.DEG2RAD * this.fov) / this.zoom);
    },
    getFilmWidth: function () {
      return this.filmGauge * Math.min(this.aspect, 1);
    },
    getFilmHeight: function () {
      return this.filmGauge / Math.max(this.aspect, 1);
    },
    setViewOffset: function (a, b, c, d, e, f) {
      this.aspect = a / b;
      null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      });
      this.view.enabled = !0;
      this.view.fullWidth = a;
      this.view.fullHeight = b;
      this.view.offsetX = c;
      this.view.offsetY = d;
      this.view.width = e;
      this.view.height = f;
      this.updateProjectionMatrix();
    },
    clearViewOffset: function () {
      null !== this.view && (this.view.enabled = !1);
      this.updateProjectionMatrix();
    },
    updateProjectionMatrix: function () {
      var a = this.near,
          b = a * Math.tan(.5 * P.DEG2RAD * this.fov) / this.zoom,
          c = 2 * b,
          d = this.aspect * c,
          e = -.5 * d,
          f = this.view;

      if (null !== this.view && this.view.enabled) {
        var g = f.fullWidth,
            h = f.fullHeight;
        e += f.offsetX * d / g;
        b -= f.offsetY * c / h;
        d *= f.width / g;
        c *= f.height / h;
      }

      f = this.filmOffset;
      0 !== f && (e += a * f / this.getFilmWidth());
      this.projectionMatrix.makePerspective(e, e + d, b, b - c, a, this.far);
      this.projectionMatrixInverse.getInverse(this.projectionMatrix);
    },
    toJSON: function (a) {
      a = E.prototype.toJSON.call(this, a);
      a.object.fov = this.fov;
      a.object.zoom = this.zoom;
      a.object.near = this.near;
      a.object.far = this.far;
      a.object.focus = this.focus;
      a.object.aspect = this.aspect;
      null !== this.view && (a.object.view = Object.assign({}, this.view));
      a.object.filmGauge = this.filmGauge;
      a.object.filmOffset = this.filmOffset;
      return a;
    }
  });
  Bc.prototype = Object.create(E.prototype);
  Bc.prototype.constructor = Bc;
  Bb.prototype = Object.create(Ba.prototype);
  Bb.prototype.constructor = Bb;
  Bb.prototype.isWebGLRenderTargetCube = !0;

  Bb.prototype.fromEquirectangularTexture = function (a, b) {
    this.texture.type = b.type;
    this.texture.format = b.format;
    this.texture.encoding = b.encoding;
    var c = new vd(),
        d = new va({
      type: "CubemapFromEquirect",
      uniforms: Xb({
        tEquirect: {
          value: null
        }
      }),
      vertexShader: "varying vec3 vWorldDirection;\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
      fragmentShader: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}",
      side: 1,
      blending: 0
    });
    d.uniforms.tEquirect.value = b;
    b = new ea(new Fd(5, 5, 5), d);
    c.add(b);
    d = new Bc(1, 10, 1);
    d.renderTarget = this;
    d.renderTarget.texture.name = "CubeCameraTexture";
    d.update(a, c);
    b.geometry.dispose();
    b.material.dispose();
    return this;
  };

  Yb.prototype = Object.create(Y.prototype);
  Yb.prototype.constructor = Yb;
  Yb.prototype.isDataTexture = !0;
  var sd = new mb(),
      Df = new n();
  Object.assign(Dd.prototype, {
    set: function (a, b, c, d, e, f) {
      var g = this.planes;
      g[0].copy(a);
      g[1].copy(b);
      g[2].copy(c);
      g[3].copy(d);
      g[4].copy(e);
      g[5].copy(f);
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      for (var b = this.planes, c = 0; 6 > c; c++) b[c].copy(a.planes[c]);

      return this;
    },
    setFromMatrix: function (a) {
      var b = this.planes,
          c = a.elements;
      a = c[0];
      var d = c[1],
          e = c[2],
          f = c[3],
          g = c[4],
          h = c[5],
          l = c[6],
          m = c[7],
          k = c[8],
          n = c[9],
          u = c[10],
          p = c[11],
          t = c[12],
          v = c[13],
          y = c[14];
      c = c[15];
      b[0].setComponents(f - a, m - g, p - k, c - t).normalize();
      b[1].setComponents(f + a, m + g, p + k, c + t).normalize();
      b[2].setComponents(f + d, m + h, p + n, c + v).normalize();
      b[3].setComponents(f - d, m - h, p - n, c - v).normalize();
      b[4].setComponents(f - e, m - l, p - u, c - y).normalize();
      b[5].setComponents(f + e, m + l, p + u, c + y).normalize();
      return this;
    },
    intersectsObject: function (a) {
      var b = a.geometry;
      null === b.boundingSphere && b.computeBoundingSphere();
      sd.copy(b.boundingSphere).applyMatrix4(a.matrixWorld);
      return this.intersectsSphere(sd);
    },
    intersectsSprite: function (a) {
      sd.center.set(0, 0, 0);
      sd.radius = .7071067811865476;
      sd.applyMatrix4(a.matrixWorld);
      return this.intersectsSphere(sd);
    },
    intersectsSphere: function (a) {
      var b = this.planes,
          c = a.center;
      a = -a.radius;

      for (var d = 0; 6 > d; d++) if (b[d].distanceToPoint(c) < a) return !1;

      return !0;
    },
    intersectsBox: function (a) {
      for (var b = this.planes, c = 0; 6 > c; c++) {
        var d = b[c];
        Df.x = 0 < d.normal.x ? a.max.x : a.min.x;
        Df.y = 0 < d.normal.y ? a.max.y : a.min.y;
        Df.z = 0 < d.normal.z ? a.max.z : a.min.z;
        if (0 > d.distanceToPoint(Df)) return !1;
      }

      return !0;
    },
    containsPoint: function (a) {
      for (var b = this.planes, c = 0; 6 > c; c++) if (0 > b[c].distanceToPoint(a)) return !1;

      return !0;
    }
  });
  var S = {
    alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
    alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
    aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
    aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
    begin_vertex: "vec3 transformed = vec3( position );",
    beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
    bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
    bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
    clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
    clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
    clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",
    clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",
    color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
    color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
    color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
    color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
    common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}",
    cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif",
    defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\ttransformedNormal = mat3( instanceMatrix ) * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = normalMatrix * objectTangent;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
    displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
    displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
    emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
    encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
    envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\t\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t}  else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
    envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
    envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
    envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
    envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
    envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) { \n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
    fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
    fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
    gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif",
    lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif",
    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
    lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",
    lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
    lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
    lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
    lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = saturate( clearcoat );\tmaterial.clearcoatRoughness = clamp( clearcoatRoughness, 0.04, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
    lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
    lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
    lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
    lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
    logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
    logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
    logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
    map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
    map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
    map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
    morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif",
    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
    normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
    normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\t#ifdef USE_TANGENT\n\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, normalScale, normalMap );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec2 normalScale, in sampler2D normalMap ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy *= normalScale;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tbool frontFacing = dot( cross( S, T ), N ) > 0.0;\n\t\t\tmapN.xy *= ( float( frontFacing ) * 2.0 - 1.0 );\n\t\t#else\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
    clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
    clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = clearcoatNormalScale * mapN.xy;\n\t\tclearcoatNormal = normalize( vTBN * mapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatNormalScale, clearcoatNormalMap );\n\t#endif\n#endif",
    clearcoat_normalmap_pars_fragment: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
    packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 encodeHalfRGBA ( vec2 v ) {\n\tvec4 encoded = vec4( 0.0 );\n\tconst vec2 offset = vec2( 1.0 / 255.0, 0.0 );\n\tencoded.xy = vec2( v.x, fract( v.x * 255.0 ) );\n\tencoded.xy = encoded.xy - ( encoded.yy * offset );\n\tencoded.zw = vec2( v.y, fract( v.y * 255.0 ) );\n\tencoded.zw = encoded.zw - ( encoded.ww * offset );\n\treturn encoded;\n}\nvec2 decodeHalfRGBA( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
    premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
    project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
    dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
    dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
    roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn decodeHalfRGBA( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
    shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",
    shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",
    skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
    skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
    skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
    specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
    tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
    tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
    uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
    uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
    uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
    uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
    uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
    uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
    worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
    background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",
    depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",
    distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
    distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
    equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
    linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
    meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
    meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
    normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
    points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
    shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}",
    shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
  },
      L = {
    common: {
      diffuse: {
        value: new J(15658734)
      },
      opacity: {
        value: 1
      },
      map: {
        value: null
      },
      uvTransform: {
        value: new Z()
      },
      alphaMap: {
        value: null
      }
    },
    specularmap: {
      specularMap: {
        value: null
      }
    },
    envmap: {
      envMap: {
        value: null
      },
      flipEnvMap: {
        value: -1
      },
      reflectivity: {
        value: 1
      },
      refractionRatio: {
        value: .98
      },
      maxMipLevel: {
        value: 0
      }
    },
    aomap: {
      aoMap: {
        value: null
      },
      aoMapIntensity: {
        value: 1
      }
    },
    lightmap: {
      lightMap: {
        value: null
      },
      lightMapIntensity: {
        value: 1
      }
    },
    emissivemap: {
      emissiveMap: {
        value: null
      }
    },
    bumpmap: {
      bumpMap: {
        value: null
      },
      bumpScale: {
        value: 1
      }
    },
    normalmap: {
      normalMap: {
        value: null
      },
      normalScale: {
        value: new B(1, 1)
      }
    },
    displacementmap: {
      displacementMap: {
        value: null
      },
      displacementScale: {
        value: 1
      },
      displacementBias: {
        value: 0
      }
    },
    roughnessmap: {
      roughnessMap: {
        value: null
      }
    },
    metalnessmap: {
      metalnessMap: {
        value: null
      }
    },
    gradientmap: {
      gradientMap: {
        value: null
      }
    },
    fog: {
      fogDensity: {
        value: 2.5E-4
      },
      fogNear: {
        value: 1
      },
      fogFar: {
        value: 2E3
      },
      fogColor: {
        value: new J(16777215)
      }
    },
    lights: {
      ambientLightColor: {
        value: []
      },
      lightProbe: {
        value: []
      },
      directionalLights: {
        value: [],
        properties: {
          direction: {},
          color: {},
          shadow: {},
          shadowBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      directionalShadowMap: {
        value: []
      },
      directionalShadowMatrix: {
        value: []
      },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
          shadow: {},
          shadowBias: {},
          shadowRadius: {},
          shadowMapSize: {}
        }
      },
      spotShadowMap: {
        value: []
      },
      spotShadowMatrix: {
        value: []
      },
      pointLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          decay: {},
          distance: {},
          shadow: {},
          shadowBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {}
        }
      },
      pointShadowMap: {
        value: []
      },
      pointShadowMatrix: {
        value: []
      },
      hemisphereLights: {
        value: [],
        properties: {
          direction: {},
          skyColor: {},
          groundColor: {}
        }
      },
      rectAreaLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          width: {},
          height: {}
        }
      }
    },
    points: {
      diffuse: {
        value: new J(15658734)
      },
      opacity: {
        value: 1
      },
      size: {
        value: 1
      },
      scale: {
        value: 1
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      uvTransform: {
        value: new Z()
      }
    },
    sprite: {
      diffuse: {
        value: new J(15658734)
      },
      opacity: {
        value: 1
      },
      center: {
        value: new B(.5, .5)
      },
      rotation: {
        value: 0
      },
      map: {
        value: null
      },
      alphaMap: {
        value: null
      },
      uvTransform: {
        value: new Z()
      }
    }
  },
      cb = {
    basic: {
      uniforms: ua([L.common, L.specularmap, L.envmap, L.aomap, L.lightmap, L.fog]),
      vertexShader: S.meshbasic_vert,
      fragmentShader: S.meshbasic_frag
    },
    lambert: {
      uniforms: ua([L.common, L.specularmap, L.envmap, L.aomap, L.lightmap, L.emissivemap, L.fog, L.lights, {
        emissive: {
          value: new J(0)
        }
      }]),
      vertexShader: S.meshlambert_vert,
      fragmentShader: S.meshlambert_frag
    },
    phong: {
      uniforms: ua([L.common, L.specularmap, L.envmap, L.aomap, L.lightmap, L.emissivemap, L.bumpmap, L.normalmap, L.displacementmap, L.gradientmap, L.fog, L.lights, {
        emissive: {
          value: new J(0)
        },
        specular: {
          value: new J(1118481)
        },
        shininess: {
          value: 30
        }
      }]),
      vertexShader: S.meshphong_vert,
      fragmentShader: S.meshphong_frag
    },
    standard: {
      uniforms: ua([L.common, L.envmap, L.aomap, L.lightmap, L.emissivemap, L.bumpmap, L.normalmap, L.displacementmap, L.roughnessmap, L.metalnessmap, L.fog, L.lights, {
        emissive: {
          value: new J(0)
        },
        roughness: {
          value: .5
        },
        metalness: {
          value: .5
        },
        envMapIntensity: {
          value: 1
        }
      }]),
      vertexShader: S.meshphysical_vert,
      fragmentShader: S.meshphysical_frag
    },
    matcap: {
      uniforms: ua([L.common, L.bumpmap, L.normalmap, L.displacementmap, L.fog, {
        matcap: {
          value: null
        }
      }]),
      vertexShader: S.meshmatcap_vert,
      fragmentShader: S.meshmatcap_frag
    },
    points: {
      uniforms: ua([L.points, L.fog]),
      vertexShader: S.points_vert,
      fragmentShader: S.points_frag
    },
    dashed: {
      uniforms: ua([L.common, L.fog, {
        scale: {
          value: 1
        },
        dashSize: {
          value: 1
        },
        totalSize: {
          value: 2
        }
      }]),
      vertexShader: S.linedashed_vert,
      fragmentShader: S.linedashed_frag
    },
    depth: {
      uniforms: ua([L.common, L.displacementmap]),
      vertexShader: S.depth_vert,
      fragmentShader: S.depth_frag
    },
    normal: {
      uniforms: ua([L.common, L.bumpmap, L.normalmap, L.displacementmap, {
        opacity: {
          value: 1
        }
      }]),
      vertexShader: S.normal_vert,
      fragmentShader: S.normal_frag
    },
    sprite: {
      uniforms: ua([L.sprite, L.fog]),
      vertexShader: S.sprite_vert,
      fragmentShader: S.sprite_frag
    },
    background: {
      uniforms: {
        uvTransform: {
          value: new Z()
        },
        t2D: {
          value: null
        }
      },
      vertexShader: S.background_vert,
      fragmentShader: S.background_frag
    },
    cube: {
      uniforms: {
        tCube: {
          value: null
        },
        tFlip: {
          value: -1
        },
        opacity: {
          value: 1
        }
      },
      vertexShader: S.cube_vert,
      fragmentShader: S.cube_frag
    },
    equirect: {
      uniforms: {
        tEquirect: {
          value: null
        }
      },
      vertexShader: S.equirect_vert,
      fragmentShader: S.equirect_frag
    },
    distanceRGBA: {
      uniforms: ua([L.common, L.displacementmap, {
        referencePosition: {
          value: new n()
        },
        nearDistance: {
          value: 1
        },
        farDistance: {
          value: 1E3
        }
      }]),
      vertexShader: S.distanceRGBA_vert,
      fragmentShader: S.distanceRGBA_frag
    },
    shadow: {
      uniforms: ua([L.lights, L.fog, {
        color: {
          value: new J(0)
        },
        opacity: {
          value: 1
        }
      }]),
      vertexShader: S.shadow_vert,
      fragmentShader: S.shadow_frag
    }
  };
  cb.physical = {
    uniforms: ua([cb.standard.uniforms, {
      transparency: {
        value: 0
      },
      clearcoat: {
        value: 0
      },
      clearcoatRoughness: {
        value: 0
      },
      sheen: {
        value: new J(0)
      },
      clearcoatNormalScale: {
        value: new B(1, 1)
      },
      clearcoatNormalMap: {
        value: null
      }
    }]),
    vertexShader: S.meshphysical_vert,
    fragmentShader: S.meshphysical_frag
  };
  Ed.prototype = Object.create(G.prototype);
  Ed.prototype.constructor = Ed;
  Zb.prototype = Object.create(D.prototype);
  Zb.prototype.constructor = Zb;
  nb.prototype = Object.create(Y.prototype);
  nb.prototype.constructor = nb;
  nb.prototype.isCubeTexture = !0;
  Object.defineProperty(nb.prototype, "images", {
    get: function () {
      return this.image;
    },
    set: function (a) {
      this.image = a;
    }
  });
  Cc.prototype = Object.create(Y.prototype);
  Cc.prototype.constructor = Cc;
  Cc.prototype.isDataTexture2DArray = !0;
  Dc.prototype = Object.create(Y.prototype);
  Dc.prototype.constructor = Dc;
  Dc.prototype.isDataTexture3D = !0;
  var uh = new Y(),
      rj = new Cc(),
      tj = new Dc(),
      vh = new nb(),
      oh = [],
      qh = [],
      th = new Float32Array(16),
      sh = new Float32Array(9),
      rh = new Float32Array(4);

  wh.prototype.updateCache = function (a) {
    var b = this.cache;
    a instanceof Float32Array && b.length !== a.length && (this.cache = new Float32Array(a.length));
    Ha(b, a);
  };

  xh.prototype.setValue = function (a, b, c) {
    for (var d = this.seq, e = 0, f = d.length; e !== f; ++e) {
      var g = d[e];
      g.setValue(a, b[g.id], c);
    }
  };

  var bg = /([\w\d_]+)(\])?(\[|\.)?/g;

  Cb.prototype.setValue = function (a, b, c, d) {
    b = this.map[b];
    void 0 !== b && b.setValue(a, c, d);
  };

  Cb.prototype.setOptional = function (a, b, c) {
    b = b[c];
    void 0 !== b && this.setValue(a, c, b);
  };

  Cb.upload = function (a, b, c, d) {
    for (var e = 0, f = b.length; e !== f; ++e) {
      var g = b[e],
          h = c[g.id];
      !1 !== h.needsUpdate && g.setValue(a, h.value, d);
    }
  };

  Cb.seqWithValue = function (a, b) {
    for (var c = [], d = 0, e = a.length; d !== e; ++d) {
      var f = a[d];
      f.id in b && c.push(f);
    }

    return c;
  };

  var Yj = 0,
      dg = /^[ \t]*#include +<([\w\d./]+)>/gm,
      Fh = /#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
      hk = 0;
  Db.prototype = Object.create(O.prototype);
  Db.prototype.constructor = Db;
  Db.prototype.isMeshDepthMaterial = !0;

  Db.prototype.copy = function (a) {
    O.prototype.copy.call(this, a);
    this.depthPacking = a.depthPacking;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.map = a.map;
    this.alphaMap = a.alphaMap;
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    return this;
  };

  Eb.prototype = Object.create(O.prototype);
  Eb.prototype.constructor = Eb;
  Eb.prototype.isMeshDistanceMaterial = !0;

  Eb.prototype.copy = function (a) {
    O.prototype.copy.call(this, a);
    this.referencePosition.copy(a.referencePosition);
    this.nearDistance = a.nearDistance;
    this.farDistance = a.farDistance;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.map = a.map;
    this.alphaMap = a.alphaMap;
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    return this;
  };

  fg.prototype = Object.assign(Object.create(Ba.prototype), {
    constructor: fg,
    isWebGLMultiviewRenderTarget: !0,
    copy: function (a) {
      Ba.prototype.copy.call(this, a);
      this.numViews = a.numViews;
      return this;
    },
    setNumViews: function (a) {
      this.numViews !== a && (this.numViews = a, this.dispose());
      return this;
    }
  });
  Gc.prototype = Object.assign(Object.create(E.prototype), {
    constructor: Gc,
    isGroup: !0
  });
  Jd.prototype = Object.assign(Object.create(U.prototype), {
    constructor: Jd,
    isArrayCamera: !0
  });
  var Mh = new n(),
      Nh = new n();
  Object.assign(gg.prototype, Aa.prototype);
  Object.assign(Oh.prototype, Aa.prototype);
  Object.assign(Le.prototype, {
    isFogExp2: !0,
    clone: function () {
      return new Le(this.color, this.density);
    },
    toJSON: function () {
      return {
        type: "FogExp2",
        color: this.color.getHex(),
        density: this.density
      };
    }
  });
  Object.assign(Me.prototype, {
    isFog: !0,
    clone: function () {
      return new Me(this.color, this.near, this.far);
    },
    toJSON: function () {
      return {
        type: "Fog",
        color: this.color.getHex(),
        near: this.near,
        far: this.far
      };
    }
  });
  Object.defineProperty(pb.prototype, "needsUpdate", {
    set: function (a) {
      !0 === a && this.version++;
    }
  });
  Object.assign(pb.prototype, {
    isInterleavedBuffer: !0,
    onUploadCallback: function () {},
    setUsage: function (a) {
      this.usage = a;
      return this;
    },
    copy: function (a) {
      this.array = new a.array.constructor(a.array);
      this.count = a.count;
      this.stride = a.stride;
      this.usage = a.usage;
      return this;
    },
    copyAt: function (a, b, c) {
      a *= this.stride;
      c *= b.stride;

      for (var d = 0, e = this.stride; d < e; d++) this.array[a + d] = b.array[c + d];

      return this;
    },
    set: function (a, b) {
      void 0 === b && (b = 0);
      this.array.set(a, b);
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    onUpload: function (a) {
      this.onUploadCallback = a;
      return this;
    }
  });
  Object.defineProperties(Kd.prototype, {
    count: {
      get: function () {
        return this.data.count;
      }
    },
    array: {
      get: function () {
        return this.data.array;
      }
    }
  });
  Object.assign(Kd.prototype, {
    isInterleavedBufferAttribute: !0,
    setX: function (a, b) {
      this.data.array[a * this.data.stride + this.offset] = b;
      return this;
    },
    setY: function (a, b) {
      this.data.array[a * this.data.stride + this.offset + 1] = b;
      return this;
    },
    setZ: function (a, b) {
      this.data.array[a * this.data.stride + this.offset + 2] = b;
      return this;
    },
    setW: function (a, b) {
      this.data.array[a * this.data.stride + this.offset + 3] = b;
      return this;
    },
    getX: function (a) {
      return this.data.array[a * this.data.stride + this.offset];
    },
    getY: function (a) {
      return this.data.array[a * this.data.stride + this.offset + 1];
    },
    getZ: function (a) {
      return this.data.array[a * this.data.stride + this.offset + 2];
    },
    getW: function (a) {
      return this.data.array[a * this.data.stride + this.offset + 3];
    },
    setXY: function (a, b, c) {
      a = a * this.data.stride + this.offset;
      this.data.array[a + 0] = b;
      this.data.array[a + 1] = c;
      return this;
    },
    setXYZ: function (a, b, c, d) {
      a = a * this.data.stride + this.offset;
      this.data.array[a + 0] = b;
      this.data.array[a + 1] = c;
      this.data.array[a + 2] = d;
      return this;
    },
    setXYZW: function (a, b, c, d, e) {
      a = a * this.data.stride + this.offset;
      this.data.array[a + 0] = b;
      this.data.array[a + 1] = c;
      this.data.array[a + 2] = d;
      this.data.array[a + 3] = e;
      return this;
    }
  });
  Gb.prototype = Object.create(O.prototype);
  Gb.prototype.constructor = Gb;
  Gb.prototype.isSpriteMaterial = !0;

  Gb.prototype.copy = function (a) {
    O.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.alphaMap = a.alphaMap;
    this.rotation = a.rotation;
    this.sizeAttenuation = a.sizeAttenuation;
    return this;
  };

  var Hc,
      ze = new n(),
      td = new n(),
      ud = new n(),
      Ic = new B(),
      Md = new B(),
      Qh = new Q(),
      Ef = new n(),
      Ae = new n(),
      Ff = new n(),
      vi = new B(),
      $g = new B(),
      wi = new B();
  Ld.prototype = Object.assign(Object.create(E.prototype), {
    constructor: Ld,
    isSprite: !0,
    raycast: function (a, b) {
      null === a.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');
      td.setFromMatrixScale(this.matrixWorld);
      Qh.copy(a.camera.matrixWorld);
      this.modelViewMatrix.multiplyMatrices(a.camera.matrixWorldInverse, this.matrixWorld);
      ud.setFromMatrixPosition(this.modelViewMatrix);
      a.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && td.multiplyScalar(-ud.z);
      var c = this.material.rotation;

      if (0 !== c) {
        var d = Math.cos(c);
        var e = Math.sin(c);
      }

      c = this.center;
      Ne(Ef.set(-.5, -.5, 0), ud, c, td, e, d);
      Ne(Ae.set(.5, -.5, 0), ud, c, td, e, d);
      Ne(Ff.set(.5, .5, 0), ud, c, td, e, d);
      vi.set(0, 0);
      $g.set(1, 0);
      wi.set(1, 1);
      var f = a.ray.intersectTriangle(Ef, Ae, Ff, !1, ze);
      if (null === f && (Ne(Ae.set(-.5, .5, 0), ud, c, td, e, d), $g.set(0, 1), f = a.ray.intersectTriangle(Ef, Ff, Ae, !1, ze), null === f)) return;
      e = a.ray.origin.distanceTo(ze);
      e < a.near || e > a.far || b.push({
        distance: e,
        point: ze.clone(),
        uv: ba.getUV(ze, Ef, Ae, Ff, vi, $g, wi, new B()),
        face: null,
        object: this
      });
    },
    clone: function () {
      return new this.constructor(this.material).copy(this);
    },
    copy: function (a) {
      E.prototype.copy.call(this, a);
      void 0 !== a.center && this.center.copy(a.center);
      return this;
    }
  });
  var Gf = new n(),
      xi = new n();
  Nd.prototype = Object.assign(Object.create(E.prototype), {
    constructor: Nd,
    isLOD: !0,
    copy: function (a) {
      E.prototype.copy.call(this, a, !1);
      a = a.levels;

      for (var b = 0, c = a.length; b < c; b++) {
        var d = a[b];
        this.addLevel(d.object.clone(), d.distance);
      }

      return this;
    },
    addLevel: function (a, b) {
      void 0 === b && (b = 0);
      b = Math.abs(b);

      for (var c = this.levels, d = 0; d < c.length && !(b < c[d].distance); d++);

      c.splice(d, 0, {
        distance: b,
        object: a
      });
      this.add(a);
      return this;
    },
    getObjectForDistance: function (a) {
      for (var b = this.levels, c = 1, d = b.length; c < d && !(a < b[c].distance); c++);

      return b[c - 1].object;
    },
    raycast: function (a, b) {
      Gf.setFromMatrixPosition(this.matrixWorld);
      var c = a.ray.origin.distanceTo(Gf);
      this.getObjectForDistance(c).raycast(a, b);
    },
    update: function (a) {
      var b = this.levels;

      if (1 < b.length) {
        Gf.setFromMatrixPosition(a.matrixWorld);
        xi.setFromMatrixPosition(this.matrixWorld);
        a = Gf.distanceTo(xi);
        b[0].object.visible = !0;

        for (var c = 1, d = b.length; c < d; c++) if (a >= b[c].distance) b[c - 1].object.visible = !1, b[c].object.visible = !0;else break;

        for (; c < d; c++) b[c].object.visible = !1;
      }
    },
    toJSON: function (a) {
      a = E.prototype.toJSON.call(this, a);
      a.object.levels = [];

      for (var b = this.levels, c = 0, d = b.length; c < d; c++) {
        var e = b[c];
        a.object.levels.push({
          object: e.object.uuid,
          distance: e.distance
        });
      }

      return a;
    }
  });
  Od.prototype = Object.assign(Object.create(ea.prototype), {
    constructor: Od,
    isSkinnedMesh: !0,
    bind: function (a, b) {
      this.skeleton = a;
      void 0 === b && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), b = this.matrixWorld);
      this.bindMatrix.copy(b);
      this.bindMatrixInverse.getInverse(b);
    },
    pose: function () {
      this.skeleton.pose();
    },
    normalizeSkinWeights: function () {
      for (var a = new da(), b = this.geometry.attributes.skinWeight, c = 0, d = b.count; c < d; c++) {
        a.x = b.getX(c);
        a.y = b.getY(c);
        a.z = b.getZ(c);
        a.w = b.getW(c);
        var e = 1 / a.manhattanLength();
        Infinity !== e ? a.multiplyScalar(e) : a.set(1, 0, 0, 0);
        b.setXYZW(c, a.x, a.y, a.z, a.w);
      }
    },
    updateMatrixWorld: function (a) {
      ea.prototype.updateMatrixWorld.call(this, a);
      "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
    },
    clone: function () {
      return new this.constructor(this.geometry, this.material).copy(this);
    }
  });
  var yi = new Q(),
      Dk = new Q();
  Object.assign(Oe.prototype, {
    calculateInverses: function () {
      this.boneInverses = [];

      for (var a = 0, b = this.bones.length; a < b; a++) {
        var c = new Q();
        this.bones[a] && c.getInverse(this.bones[a].matrixWorld);
        this.boneInverses.push(c);
      }
    },
    pose: function () {
      var a, b;
      var c = 0;

      for (b = this.bones.length; c < b; c++) (a = this.bones[c]) && a.matrixWorld.getInverse(this.boneInverses[c]);

      c = 0;

      for (b = this.bones.length; c < b; c++) if (a = this.bones[c]) a.parent && a.parent.isBone ? (a.matrix.getInverse(a.parent.matrixWorld), a.matrix.multiply(a.matrixWorld)) : a.matrix.copy(a.matrixWorld), a.matrix.decompose(a.position, a.quaternion, a.scale);
    },
    update: function () {
      for (var a = this.bones, b = this.boneInverses, c = this.boneMatrices, d = this.boneTexture, e = 0, f = a.length; e < f; e++) yi.multiplyMatrices(a[e] ? a[e].matrixWorld : Dk, b[e]), yi.toArray(c, 16 * e);

      void 0 !== d && (d.needsUpdate = !0);
    },
    clone: function () {
      return new Oe(this.bones, this.boneInverses);
    },
    getBoneByName: function (a) {
      for (var b = 0, c = this.bones.length; b < c; b++) {
        var d = this.bones[b];
        if (d.name === a) return d;
      }
    }
  });
  ig.prototype = Object.assign(Object.create(E.prototype), {
    constructor: ig,
    isBone: !0
  });
  Pe.prototype = Object.assign(Object.create(ea.prototype), {
    constructor: Pe,
    isInstancedMesh: !0,
    raycast: function () {},
    setMatrixAt: function (a, b) {
      b.toArray(this.instanceMatrix.array, 16 * a);
    },
    updateMorphTargets: function () {}
  });
  R.prototype = Object.create(O.prototype);
  R.prototype.constructor = R;
  R.prototype.isLineBasicMaterial = !0;

  R.prototype.copy = function (a) {
    O.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.linewidth = a.linewidth;
    this.linecap = a.linecap;
    this.linejoin = a.linejoin;
    return this;
  };

  var zi = new n(),
      Ai = new n(),
      Bi = new Q(),
      Hf = new Rb(),
      Be = new mb();
  ra.prototype = Object.assign(Object.create(E.prototype), {
    constructor: ra,
    isLine: !0,
    computeLineDistances: function () {
      var a = this.geometry;
      if (a.isBufferGeometry) {
        if (null === a.index) {
          for (var b = a.attributes.position, c = [0], d = 1, e = b.count; d < e; d++) zi.fromBufferAttribute(b, d - 1), Ai.fromBufferAttribute(b, d), c[d] = c[d - 1], c[d] += zi.distanceTo(Ai);

          a.setAttribute("lineDistance", new A(c, 1));
        } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      } else if (a.isGeometry) for (b = a.vertices, c = a.lineDistances, c[0] = 0, d = 1, e = b.length; d < e; d++) c[d] = c[d - 1], c[d] += b[d - 1].distanceTo(b[d]);
      return this;
    },
    raycast: function (a, b) {
      var c = a.linePrecision,
          d = this.geometry,
          e = this.matrixWorld;
      null === d.boundingSphere && d.computeBoundingSphere();
      Be.copy(d.boundingSphere);
      Be.applyMatrix4(e);
      Be.radius += c;

      if (!1 !== a.ray.intersectsSphere(Be)) {
        Bi.getInverse(e);
        Hf.copy(a.ray).applyMatrix4(Bi);
        c /= (this.scale.x + this.scale.y + this.scale.z) / 3;
        c *= c;
        var f = new n(),
            g = new n();
        e = new n();
        var h = new n(),
            l = this && this.isLineSegments ? 2 : 1;

        if (d.isBufferGeometry) {
          var m = d.index,
              k = d.attributes.position.array;

          if (null !== m) {
            m = m.array;
            d = 0;

            for (var q = m.length - 1; d < q; d += l) {
              var u = m[d + 1];
              f.fromArray(k, 3 * m[d]);
              g.fromArray(k, 3 * u);
              u = Hf.distanceSqToSegment(f, g, h, e);
              u > c || (h.applyMatrix4(this.matrixWorld), u = a.ray.origin.distanceTo(h), u < a.near || u > a.far || b.push({
                distance: u,
                point: e.clone().applyMatrix4(this.matrixWorld),
                index: d,
                face: null,
                faceIndex: null,
                object: this
              }));
            }
          } else for (d = 0, q = k.length / 3 - 1; d < q; d += l) f.fromArray(k, 3 * d), g.fromArray(k, 3 * d + 3), u = Hf.distanceSqToSegment(f, g, h, e), u > c || (h.applyMatrix4(this.matrixWorld), u = a.ray.origin.distanceTo(h), u < a.near || u > a.far || b.push({
            distance: u,
            point: e.clone().applyMatrix4(this.matrixWorld),
            index: d,
            face: null,
            faceIndex: null,
            object: this
          }));
        } else if (d.isGeometry) for (f = d.vertices, g = f.length, d = 0; d < g - 1; d += l) u = Hf.distanceSqToSegment(f[d], f[d + 1], h, e), u > c || (h.applyMatrix4(this.matrixWorld), u = a.ray.origin.distanceTo(h), u < a.near || u > a.far || b.push({
          distance: u,
          point: e.clone().applyMatrix4(this.matrixWorld),
          index: d,
          face: null,
          faceIndex: null,
          object: this
        }));
      }
    },
    clone: function () {
      return new this.constructor(this.geometry, this.material).copy(this);
    }
  });
  var If = new n(),
      Jf = new n();
  X.prototype = Object.assign(Object.create(ra.prototype), {
    constructor: X,
    isLineSegments: !0,
    computeLineDistances: function () {
      var a = this.geometry;
      if (a.isBufferGeometry) {
        if (null === a.index) {
          for (var b = a.attributes.position, c = [], d = 0, e = b.count; d < e; d += 2) If.fromBufferAttribute(b, d), Jf.fromBufferAttribute(b, d + 1), c[d] = 0 === d ? 0 : c[d - 1], c[d + 1] = c[d] + If.distanceTo(Jf);

          a.setAttribute("lineDistance", new A(c, 1));
        } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      } else if (a.isGeometry) for (b = a.vertices, c = a.lineDistances, d = 0, e = b.length; d < e; d += 2) If.copy(b[d]), Jf.copy(b[d + 1]), c[d] = 0 === d ? 0 : c[d - 1], c[d + 1] = c[d] + If.distanceTo(Jf);
      return this;
    }
  });
  Qe.prototype = Object.assign(Object.create(ra.prototype), {
    constructor: Qe,
    isLineLoop: !0
  });
  Qa.prototype = Object.create(O.prototype);
  Qa.prototype.constructor = Qa;
  Qa.prototype.isPointsMaterial = !0;

  Qa.prototype.copy = function (a) {
    O.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.alphaMap = a.alphaMap;
    this.size = a.size;
    this.sizeAttenuation = a.sizeAttenuation;
    this.morphTargets = a.morphTargets;
    return this;
  };

  var Ci = new Q(),
      kg = new Rb(),
      Ce = new mb(),
      Kf = new n();
  Jc.prototype = Object.assign(Object.create(E.prototype), {
    constructor: Jc,
    isPoints: !0,
    raycast: function (a, b) {
      var c = this.geometry,
          d = this.matrixWorld,
          e = a.params.Points.threshold;
      null === c.boundingSphere && c.computeBoundingSphere();
      Ce.copy(c.boundingSphere);
      Ce.applyMatrix4(d);
      Ce.radius += e;
      if (!1 !== a.ray.intersectsSphere(Ce)) if (Ci.getInverse(d), kg.copy(a.ray).applyMatrix4(Ci), e /= (this.scale.x + this.scale.y + this.scale.z) / 3, e *= e, c.isBufferGeometry) {
        var f = c.index;
        c = c.attributes.position.array;

        if (null !== f) {
          var g = f.array;
          f = 0;

          for (var h = g.length; f < h; f++) {
            var l = g[f];
            Kf.fromArray(c, 3 * l);
            jg(Kf, l, e, d, a, b, this);
          }
        } else for (f = 0, g = c.length / 3; f < g; f++) Kf.fromArray(c, 3 * f), jg(Kf, f, e, d, a, b, this);
      } else for (c = c.vertices, f = 0, g = c.length; f < g; f++) jg(c[f], f, e, d, a, b, this);
    },
    updateMorphTargets: function () {
      var a = this.geometry;

      if (a.isBufferGeometry) {
        a = a.morphAttributes;
        var b = Object.keys(a);

        if (0 < b.length) {
          var c = a[b[0]];
          if (void 0 !== c) for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, a = 0, b = c.length; a < b; a++) {
            var d = c[a].name || String(a);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[d] = a;
          }
        }
      } else a = a.morphTargets, void 0 !== a && 0 < a.length && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
    },
    clone: function () {
      return new this.constructor(this.geometry, this.material).copy(this);
    }
  });
  lg.prototype = Object.assign(Object.create(Y.prototype), {
    constructor: lg,
    isVideoTexture: !0,
    update: function () {
      var a = this.image;
      a.readyState >= a.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
    }
  });
  Kc.prototype = Object.create(Y.prototype);
  Kc.prototype.constructor = Kc;
  Kc.prototype.isCompressedTexture = !0;
  Pd.prototype = Object.create(Y.prototype);
  Pd.prototype.constructor = Pd;
  Pd.prototype.isCanvasTexture = !0;
  Qd.prototype = Object.create(Y.prototype);
  Qd.prototype.constructor = Qd;
  Qd.prototype.isDepthTexture = !0;
  Lc.prototype = Object.create(D.prototype);
  Lc.prototype.constructor = Lc;
  Rd.prototype = Object.create(G.prototype);
  Rd.prototype.constructor = Rd;
  Mc.prototype = Object.create(D.prototype);
  Mc.prototype.constructor = Mc;
  Sd.prototype = Object.create(G.prototype);
  Sd.prototype.constructor = Sd;
  Ea.prototype = Object.create(D.prototype);
  Ea.prototype.constructor = Ea;
  Td.prototype = Object.create(G.prototype);
  Td.prototype.constructor = Td;
  Nc.prototype = Object.create(Ea.prototype);
  Nc.prototype.constructor = Nc;
  Ud.prototype = Object.create(G.prototype);
  Ud.prototype.constructor = Ud;
  ac.prototype = Object.create(Ea.prototype);
  ac.prototype.constructor = ac;
  Vd.prototype = Object.create(G.prototype);
  Vd.prototype.constructor = Vd;
  Oc.prototype = Object.create(Ea.prototype);
  Oc.prototype.constructor = Oc;
  Wd.prototype = Object.create(G.prototype);
  Wd.prototype.constructor = Wd;
  Pc.prototype = Object.create(Ea.prototype);
  Pc.prototype.constructor = Pc;
  Xd.prototype = Object.create(G.prototype);
  Xd.prototype.constructor = Xd;
  bc.prototype = Object.create(D.prototype);
  bc.prototype.constructor = bc;

  bc.prototype.toJSON = function () {
    var a = D.prototype.toJSON.call(this);
    a.path = this.parameters.path.toJSON();
    return a;
  };

  Yd.prototype = Object.create(G.prototype);
  Yd.prototype.constructor = Yd;
  Qc.prototype = Object.create(D.prototype);
  Qc.prototype.constructor = Qc;
  Zd.prototype = Object.create(G.prototype);
  Zd.prototype.constructor = Zd;
  Rc.prototype = Object.create(D.prototype);
  Rc.prototype.constructor = Rc;
  var Ek = {
    triangulate: function (a, b, c) {
      c = c || 2;
      var d = b && b.length,
          e = d ? b[0] * c : a.length,
          f = Rh(a, 0, e, c, !0),
          g = [];
      if (!f || f.next === f.prev) return g;
      var h;

      if (d) {
        var l = c;
        d = [];
        var m;
        var k = 0;

        for (m = b.length; k < m; k++) {
          var n = b[k] * l;
          var u = k < m - 1 ? b[k + 1] * l : a.length;
          n = Rh(a, n, u, l, !1);
          n === n.next && (n.steiner = !0);
          d.push(pk(n));
        }

        d.sort(nk);

        for (k = 0; k < d.length; k++) {
          b = d[k];
          l = f;
          if (l = ok(b, l)) b = Uh(l, b), ae(b, b.next);
          f = ae(f, f.next);
        }
      }

      if (a.length > 80 * c) {
        var p = h = a[0];
        var t = d = a[1];

        for (l = c; l < e; l += c) k = a[l], b = a[l + 1], k < p && (p = k), b < t && (t = b), k > h && (h = k), b > d && (d = b);

        h = Math.max(h - p, d - t);
        h = 0 !== h ? 1 / h : 0;
      }

      be(f, g, c, p, t, h);
      return g;
    }
  },
      qb = {
    area: function (a) {
      for (var b = a.length, c = 0, d = b - 1, e = 0; e < b; d = e++) c += a[d].x * a[e].y - a[e].x * a[d].y;

      return .5 * c;
    },
    isClockWise: function (a) {
      return 0 > qb.area(a);
    },
    triangulateShape: function (a, b) {
      var c = [],
          d = [],
          e = [];
      Vh(a);
      Wh(c, a);
      var f = a.length;
      b.forEach(Vh);

      for (a = 0; a < b.length; a++) d.push(f), f += b[a].length, Wh(c, b[a]);

      b = Ek.triangulate(c, d);

      for (a = 0; a < b.length; a += 3) e.push(b.slice(a, a + 3));

      return e;
    }
  };
  dc.prototype = Object.create(G.prototype);
  dc.prototype.constructor = dc;

  dc.prototype.toJSON = function () {
    var a = G.prototype.toJSON.call(this);
    return Xh(this.parameters.shapes, this.parameters.options, a);
  };

  db.prototype = Object.create(D.prototype);
  db.prototype.constructor = db;

  db.prototype.toJSON = function () {
    var a = D.prototype.toJSON.call(this);
    return Xh(this.parameters.shapes, this.parameters.options, a);
  };

  var qk = {
    generateTopUV: function (a, b, c, d, e) {
      a = b[3 * d];
      d = b[3 * d + 1];
      var f = b[3 * e];
      e = b[3 * e + 1];
      return [new B(b[3 * c], b[3 * c + 1]), new B(a, d), new B(f, e)];
    },
    generateSideWallUV: function (a, b, c, d, e, f) {
      a = b[3 * c];
      var g = b[3 * c + 1];
      c = b[3 * c + 2];
      var h = b[3 * d],
          l = b[3 * d + 1];
      d = b[3 * d + 2];
      var k = b[3 * e],
          n = b[3 * e + 1];
      e = b[3 * e + 2];
      var q = b[3 * f],
          u = b[3 * f + 1];
      b = b[3 * f + 2];
      return .01 > Math.abs(g - l) ? [new B(a, 1 - c), new B(h, 1 - d), new B(k, 1 - e), new B(q, 1 - b)] : [new B(g, 1 - c), new B(l, 1 - d), new B(n, 1 - e), new B(u, 1 - b)];
    }
  };
  de.prototype = Object.create(G.prototype);
  de.prototype.constructor = de;
  Tc.prototype = Object.create(db.prototype);
  Tc.prototype.constructor = Tc;
  ee.prototype = Object.create(G.prototype);
  ee.prototype.constructor = ee;
  Hb.prototype = Object.create(D.prototype);
  Hb.prototype.constructor = Hb;
  fe.prototype = Object.create(G.prototype);
  fe.prototype.constructor = fe;
  Uc.prototype = Object.create(D.prototype);
  Uc.prototype.constructor = Uc;
  ge.prototype = Object.create(G.prototype);
  ge.prototype.constructor = ge;
  Vc.prototype = Object.create(D.prototype);
  Vc.prototype.constructor = Vc;
  ec.prototype = Object.create(G.prototype);
  ec.prototype.constructor = ec;

  ec.prototype.toJSON = function () {
    var a = G.prototype.toJSON.call(this);
    return Yh(this.parameters.shapes, a);
  };

  fc.prototype = Object.create(D.prototype);
  fc.prototype.constructor = fc;

  fc.prototype.toJSON = function () {
    var a = D.prototype.toJSON.call(this);
    return Yh(this.parameters.shapes, a);
  };

  Wc.prototype = Object.create(D.prototype);
  Wc.prototype.constructor = Wc;
  gc.prototype = Object.create(G.prototype);
  gc.prototype.constructor = gc;
  rb.prototype = Object.create(D.prototype);
  rb.prototype.constructor = rb;
  he.prototype = Object.create(gc.prototype);
  he.prototype.constructor = he;
  ie.prototype = Object.create(rb.prototype);
  ie.prototype.constructor = ie;
  je.prototype = Object.create(G.prototype);
  je.prototype.constructor = je;
  Xc.prototype = Object.create(D.prototype);
  Xc.prototype.constructor = Xc;
  var ja = Object.freeze({
    __proto__: null,
    WireframeGeometry: Lc,
    ParametricGeometry: Rd,
    ParametricBufferGeometry: Mc,
    TetrahedronGeometry: Td,
    TetrahedronBufferGeometry: Nc,
    OctahedronGeometry: Ud,
    OctahedronBufferGeometry: ac,
    IcosahedronGeometry: Vd,
    IcosahedronBufferGeometry: Oc,
    DodecahedronGeometry: Wd,
    DodecahedronBufferGeometry: Pc,
    PolyhedronGeometry: Sd,
    PolyhedronBufferGeometry: Ea,
    TubeGeometry: Xd,
    TubeBufferGeometry: bc,
    TorusKnotGeometry: Yd,
    TorusKnotBufferGeometry: Qc,
    TorusGeometry: Zd,
    TorusBufferGeometry: Rc,
    TextGeometry: de,
    TextBufferGeometry: Tc,
    SphereGeometry: ee,
    SphereBufferGeometry: Hb,
    RingGeometry: fe,
    RingBufferGeometry: Uc,
    PlaneGeometry: Ed,
    PlaneBufferGeometry: Zb,
    LatheGeometry: ge,
    LatheBufferGeometry: Vc,
    ShapeGeometry: ec,
    ShapeBufferGeometry: fc,
    ExtrudeGeometry: dc,
    ExtrudeBufferGeometry: db,
    EdgesGeometry: Wc,
    ConeGeometry: he,
    ConeBufferGeometry: ie,
    CylinderGeometry: gc,
    CylinderBufferGeometry: rb,
    CircleGeometry: je,
    CircleBufferGeometry: Xc,
    BoxGeometry: Zg,
    BoxBufferGeometry: Fd
  });
  hc.prototype = Object.create(O.prototype);
  hc.prototype.constructor = hc;
  hc.prototype.isShadowMaterial = !0;

  hc.prototype.copy = function (a) {
    O.prototype.copy.call(this, a);
    this.color.copy(a.color);
    return this;
  };

  Yc.prototype = Object.create(va.prototype);
  Yc.prototype.constructor = Yc;
  Yc.prototype.isRawShaderMaterial = !0;
  eb.prototype = Object.create(O.prototype);
  eb.prototype.constructor = eb;
  eb.prototype.isMeshStandardMaterial = !0;

  eb.prototype.copy = function (a) {
    O.prototype.copy.call(this, a);
    this.defines = {
      STANDARD: ""
    };
    this.color.copy(a.color);
    this.roughness = a.roughness;
    this.metalness = a.metalness;
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.emissive.copy(a.emissive);
    this.emissiveMap = a.emissiveMap;
    this.emissiveIntensity = a.emissiveIntensity;
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap = a.normalMap;
    this.normalMapType = a.normalMapType;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.roughnessMap = a.roughnessMap;
    this.metalnessMap = a.metalnessMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.envMapIntensity = a.envMapIntensity;
    this.refractionRatio = a.refractionRatio;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this;
  };

  ic.prototype = Object.create(eb.prototype);
  ic.prototype.constructor = ic;
  ic.prototype.isMeshPhysicalMaterial = !0;

  ic.prototype.copy = function (a) {
    eb.prototype.copy.call(this, a);
    this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    };
    this.reflectivity = a.reflectivity;
    this.clearcoat = a.clearcoat;
    this.clearcoatRoughness = a.clearcoatRoughness;
    this.sheen = a.sheen ? (this.sheen || new J()).copy(a.sheen) : null;
    this.clearcoatNormalMap = a.clearcoatNormalMap;
    this.clearcoatNormalScale.copy(a.clearcoatNormalScale);
    this.transparency = a.transparency;
    return this;
  };

  Ra.prototype = Object.create(O.prototype);
  Ra.prototype.constructor = Ra;
  Ra.prototype.isMeshPhongMaterial = !0;

  Ra.prototype.copy = function (a) {
    O.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.specular.copy(a.specular);
    this.shininess = a.shininess;
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.emissive.copy(a.emissive);
    this.emissiveMap = a.emissiveMap;
    this.emissiveIntensity = a.emissiveIntensity;
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap = a.normalMap;
    this.normalMapType = a.normalMapType;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.specularMap = a.specularMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.combine = a.combine;
    this.reflectivity = a.reflectivity;
    this.refractionRatio = a.refractionRatio;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this;
  };

  jc.prototype = Object.create(Ra.prototype);
  jc.prototype.constructor = jc;
  jc.prototype.isMeshToonMaterial = !0;

  jc.prototype.copy = function (a) {
    Ra.prototype.copy.call(this, a);
    this.gradientMap = a.gradientMap;
    return this;
  };

  kc.prototype = Object.create(O.prototype);
  kc.prototype.constructor = kc;
  kc.prototype.isMeshNormalMaterial = !0;

  kc.prototype.copy = function (a) {
    O.prototype.copy.call(this, a);
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap = a.normalMap;
    this.normalMapType = a.normalMapType;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this;
  };

  lc.prototype = Object.create(O.prototype);
  lc.prototype.constructor = lc;
  lc.prototype.isMeshLambertMaterial = !0;

  lc.prototype.copy = function (a) {
    O.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.emissive.copy(a.emissive);
    this.emissiveMap = a.emissiveMap;
    this.emissiveIntensity = a.emissiveIntensity;
    this.specularMap = a.specularMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.combine = a.combine;
    this.reflectivity = a.reflectivity;
    this.refractionRatio = a.refractionRatio;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this;
  };

  mc.prototype = Object.create(O.prototype);
  mc.prototype.constructor = mc;
  mc.prototype.isMeshMatcapMaterial = !0;

  mc.prototype.copy = function (a) {
    O.prototype.copy.call(this, a);
    this.defines = {
      MATCAP: ""
    };
    this.color.copy(a.color);
    this.matcap = a.matcap;
    this.map = a.map;
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap = a.normalMap;
    this.normalMapType = a.normalMapType;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.alphaMap = a.alphaMap;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this;
  };

  nc.prototype = Object.create(R.prototype);
  nc.prototype.constructor = nc;
  nc.prototype.isLineDashedMaterial = !0;

  nc.prototype.copy = function (a) {
    R.prototype.copy.call(this, a);
    this.scale = a.scale;
    this.dashSize = a.dashSize;
    this.gapSize = a.gapSize;
    return this;
  };

  var Fk = Object.freeze({
    __proto__: null,
    ShadowMaterial: hc,
    SpriteMaterial: Gb,
    RawShaderMaterial: Yc,
    ShaderMaterial: va,
    PointsMaterial: Qa,
    MeshPhysicalMaterial: ic,
    MeshStandardMaterial: eb,
    MeshPhongMaterial: Ra,
    MeshToonMaterial: jc,
    MeshNormalMaterial: kc,
    MeshLambertMaterial: lc,
    MeshDepthMaterial: Db,
    MeshDistanceMaterial: Eb,
    MeshBasicMaterial: Ga,
    MeshMatcapMaterial: mc,
    LineDashedMaterial: nc,
    LineBasicMaterial: R,
    Material: O
  }),
      ta = {
    arraySlice: function (a, b, c) {
      return ta.isTypedArray(a) ? new a.constructor(a.subarray(b, void 0 !== c ? c : a.length)) : a.slice(b, c);
    },
    convertArray: function (a, b, c) {
      return !a || !c && a.constructor === b ? a : "number" === typeof b.BYTES_PER_ELEMENT ? new b(a) : Array.prototype.slice.call(a);
    },
    isTypedArray: function (a) {
      return ArrayBuffer.isView(a) && !(a instanceof DataView);
    },
    getKeyframeOrder: function (a) {
      for (var b = a.length, c = Array(b), d = 0; d !== b; ++d) c[d] = d;

      c.sort(function (b, c) {
        return a[b] - a[c];
      });
      return c;
    },
    sortedArray: function (a, b, c) {
      for (var d = a.length, e = new a.constructor(d), f = 0, g = 0; g !== d; ++f) for (var h = c[f] * b, l = 0; l !== b; ++l) e[g++] = a[h + l];

      return e;
    },
    flattenJSON: function (a, b, c, d) {
      for (var e = 1, f = a[0]; void 0 !== f && void 0 === f[d];) f = a[e++];

      if (void 0 !== f) {
        var g = f[d];
        if (void 0 !== g) if (Array.isArray(g)) {
          do g = f[d], void 0 !== g && (b.push(f.time), c.push.apply(c, g)), f = a[e++]; while (void 0 !== f);
        } else if (void 0 !== g.toArray) {
          do g = f[d], void 0 !== g && (b.push(f.time), g.toArray(c, c.length)), f = a[e++]; while (void 0 !== f);
        } else {
          do g = f[d], void 0 !== g && (b.push(f.time), c.push(g)), f = a[e++]; while (void 0 !== f);
        }
      }
    },
    subclip: function (a, b, c, d, e) {
      e = e || 30;
      a = a.clone();
      a.name = b;
      var f = [];

      for (b = 0; b < a.tracks.length; ++b) {
        for (var g = a.tracks[b], h = g.getValueSize(), l = [], k = [], n = 0; n < g.times.length; ++n) {
          var q = g.times[n] * e;
          if (!(q < c || q >= d)) for (l.push(g.times[n]), q = 0; q < h; ++q) k.push(g.values[n * h + q]);
        }

        0 !== l.length && (g.times = ta.convertArray(l, g.times.constructor), g.values = ta.convertArray(k, g.values.constructor), f.push(g));
      }

      a.tracks = f;
      c = Infinity;

      for (b = 0; b < a.tracks.length; ++b) c > a.tracks[b].times[0] && (c = a.tracks[b].times[0]);

      for (b = 0; b < a.tracks.length; ++b) a.tracks[b].shift(-1 * c);

      a.resetDuration();
      return a;
    }
  };
  Object.assign(Ia.prototype, {
    evaluate: function (a) {
      var b = this.parameterPositions,
          c = this._cachedIndex,
          d = b[c],
          e = b[c - 1];

      a: {
        b: {
          c: {
            d: if (!(a < d)) {
              for (var f = c + 2;;) {
                if (void 0 === d) {
                  if (a < e) break d;
                  this._cachedIndex = c = b.length;
                  return this.afterEnd_(c - 1, a, e);
                }

                if (c === f) break;
                e = d;
                d = b[++c];
                if (a < d) break b;
              }

              d = b.length;
              break c;
            }

            if (a >= e) break a;else {
              f = b[1];
              a < f && (c = 2, e = f);

              for (f = c - 2;;) {
                if (void 0 === e) return this._cachedIndex = 0, this.beforeStart_(0, a, d);
                if (c === f) break;
                d = e;
                e = b[--c - 1];
                if (a >= e) break b;
              }

              d = c;
              c = 0;
            }
          }

          for (; c < d;) e = c + d >>> 1, a < b[e] ? d = e : c = e + 1;

          d = b[c];
          e = b[c - 1];
          if (void 0 === e) return this._cachedIndex = 0, this.beforeStart_(0, a, d);
          if (void 0 === d) return this._cachedIndex = c = b.length, this.afterEnd_(c - 1, e, a);
        }

        this._cachedIndex = c;
        this.intervalChanged_(c, e, d);
      }

      return this.interpolate_(c, e, a, d);
    },
    settings: null,
    DefaultSettings_: {},
    getSettings_: function () {
      return this.settings || this.DefaultSettings_;
    },
    copySampleValue_: function (a) {
      var b = this.resultBuffer,
          c = this.sampleValues,
          d = this.valueSize;
      a *= d;

      for (var e = 0; e !== d; ++e) b[e] = c[a + e];

      return b;
    },
    interpolate_: function () {
      throw Error("call to abstract method");
    },
    intervalChanged_: function () {}
  });
  Object.assign(Ia.prototype, {
    beforeStart_: Ia.prototype.copySampleValue_,
    afterEnd_: Ia.prototype.copySampleValue_
  });
  Re.prototype = Object.assign(Object.create(Ia.prototype), {
    constructor: Re,
    DefaultSettings_: {
      endingStart: 2400,
      endingEnd: 2400
    },
    intervalChanged_: function (a, b, c) {
      var d = this.parameterPositions,
          e = a - 2,
          f = a + 1,
          g = d[e],
          h = d[f];
      if (void 0 === g) switch (this.getSettings_().endingStart) {
        case 2401:
          e = a;
          g = 2 * b - c;
          break;

        case 2402:
          e = d.length - 2;
          g = b + d[e] - d[e + 1];
          break;

        default:
          e = a, g = c;
      }
      if (void 0 === h) switch (this.getSettings_().endingEnd) {
        case 2401:
          f = a;
          h = 2 * c - b;
          break;

        case 2402:
          f = 1;
          h = c + d[1] - d[0];
          break;

        default:
          f = a - 1, h = b;
      }
      a = .5 * (c - b);
      d = this.valueSize;
      this._weightPrev = a / (b - g);
      this._weightNext = a / (h - c);
      this._offsetPrev = e * d;
      this._offsetNext = f * d;
    },
    interpolate_: function (a, b, c, d) {
      var e = this.resultBuffer,
          f = this.sampleValues,
          g = this.valueSize;
      a *= g;
      var h = a - g,
          l = this._offsetPrev,
          k = this._offsetNext,
          n = this._weightPrev,
          q = this._weightNext,
          u = (c - b) / (d - b);
      c = u * u;
      d = c * u;
      b = -n * d + 2 * n * c - n * u;
      n = (1 + n) * d + (-1.5 - 2 * n) * c + (-.5 + n) * u + 1;
      u = (-1 - q) * d + (1.5 + q) * c + .5 * u;
      q = q * d - q * c;

      for (c = 0; c !== g; ++c) e[c] = b * f[l + c] + n * f[h + c] + u * f[a + c] + q * f[k + c];

      return e;
    }
  });
  ke.prototype = Object.assign(Object.create(Ia.prototype), {
    constructor: ke,
    interpolate_: function (a, b, c, d) {
      var e = this.resultBuffer,
          f = this.sampleValues,
          g = this.valueSize;
      a *= g;
      var h = a - g;
      b = (c - b) / (d - b);
      c = 1 - b;

      for (d = 0; d !== g; ++d) e[d] = f[h + d] * c + f[a + d] * b;

      return e;
    }
  });
  Se.prototype = Object.assign(Object.create(Ia.prototype), {
    constructor: Se,
    interpolate_: function (a) {
      return this.copySampleValue_(a - 1);
    }
  });
  Object.assign(sa, {
    toJSON: function (a) {
      var b = a.constructor;
      if (void 0 !== b.toJSON) b = b.toJSON(a);else {
        b = {
          name: a.name,
          times: ta.convertArray(a.times, Array),
          values: ta.convertArray(a.values, Array)
        };
        var c = a.getInterpolation();
        c !== a.DefaultInterpolation && (b.interpolation = c);
      }
      b.type = a.ValueTypeName;
      return b;
    }
  });
  Object.assign(sa.prototype, {
    constructor: sa,
    TimeBufferType: Float32Array,
    ValueBufferType: Float32Array,
    DefaultInterpolation: 2301,
    InterpolantFactoryMethodDiscrete: function (a) {
      return new Se(this.times, this.values, this.getValueSize(), a);
    },
    InterpolantFactoryMethodLinear: function (a) {
      return new ke(this.times, this.values, this.getValueSize(), a);
    },
    InterpolantFactoryMethodSmooth: function (a) {
      return new Re(this.times, this.values, this.getValueSize(), a);
    },
    setInterpolation: function (a) {
      switch (a) {
        case 2300:
          var b = this.InterpolantFactoryMethodDiscrete;
          break;

        case 2301:
          b = this.InterpolantFactoryMethodLinear;
          break;

        case 2302:
          b = this.InterpolantFactoryMethodSmooth;
      }

      if (void 0 === b) {
        b = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (void 0 === this.createInterpolant) if (a !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);else throw Error(b);
        console.warn("THREE.KeyframeTrack:", b);
        return this;
      }

      this.createInterpolant = b;
      return this;
    },
    getInterpolation: function () {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return 2300;

        case this.InterpolantFactoryMethodLinear:
          return 2301;

        case this.InterpolantFactoryMethodSmooth:
          return 2302;
      }
    },
    getValueSize: function () {
      return this.values.length / this.times.length;
    },
    shift: function (a) {
      if (0 !== a) for (var b = this.times, c = 0, d = b.length; c !== d; ++c) b[c] += a;
      return this;
    },
    scale: function (a) {
      if (1 !== a) for (var b = this.times, c = 0, d = b.length; c !== d; ++c) b[c] *= a;
      return this;
    },
    trim: function (a, b) {
      for (var c = this.times, d = c.length, e = 0, f = d - 1; e !== d && c[e] < a;) ++e;

      for (; -1 !== f && c[f] > b;) --f;

      ++f;
      if (0 !== e || f !== d) e >= f && (f = Math.max(f, 1), e = f - 1), a = this.getValueSize(), this.times = ta.arraySlice(c, e, f), this.values = ta.arraySlice(this.values, e * a, f * a);
      return this;
    },
    validate: function () {
      var a = !0,
          b = this.getValueSize();
      0 !== b - Math.floor(b) && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), a = !1);
      var c = this.times;
      b = this.values;
      var d = c.length;
      0 === d && (console.error("THREE.KeyframeTrack: Track is empty.", this), a = !1);

      for (var e = null, f = 0; f !== d; f++) {
        var g = c[f];

        if ("number" === typeof g && isNaN(g)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, f, g);
          a = !1;
          break;
        }

        if (null !== e && e > g) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, f, g, e);
          a = !1;
          break;
        }

        e = g;
      }

      if (void 0 !== b && ta.isTypedArray(b)) for (f = 0, c = b.length; f !== c; ++f) if (d = b[f], isNaN(d)) {
        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, f, d);
        a = !1;
        break;
      }
      return a;
    },
    optimize: function () {
      for (var a = this.times, b = this.values, c = this.getValueSize(), d = 2302 === this.getInterpolation(), e = 1, f = a.length - 1, g = 1; g < f; ++g) {
        var h = !1,
            l = a[g];
        if (l !== a[g + 1] && (1 !== g || l !== l[0])) if (d) h = !0;else {
          var k = g * c,
              n = k - c,
              q = k + c;

          for (l = 0; l !== c; ++l) {
            var u = b[k + l];

            if (u !== b[n + l] || u !== b[q + l]) {
              h = !0;
              break;
            }
          }
        }

        if (h) {
          if (g !== e) for (a[e] = a[g], h = g * c, k = e * c, l = 0; l !== c; ++l) b[k + l] = b[h + l];
          ++e;
        }
      }

      if (0 < f) {
        a[e] = a[f];
        h = f * c;
        k = e * c;

        for (l = 0; l !== c; ++l) b[k + l] = b[h + l];

        ++e;
      }

      e !== a.length && (this.times = ta.arraySlice(a, 0, e), this.values = ta.arraySlice(b, 0, e * c));
      return this;
    },
    clone: function () {
      var a = ta.arraySlice(this.times, 0),
          b = ta.arraySlice(this.values, 0);
      a = new this.constructor(this.name, a, b);
      a.createInterpolant = this.createInterpolant;
      return a;
    }
  });
  Te.prototype = Object.assign(Object.create(sa.prototype), {
    constructor: Te,
    ValueTypeName: "bool",
    ValueBufferType: Array,
    DefaultInterpolation: 2300,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
  });
  Ue.prototype = Object.assign(Object.create(sa.prototype), {
    constructor: Ue,
    ValueTypeName: "color"
  });
  Zc.prototype = Object.assign(Object.create(sa.prototype), {
    constructor: Zc,
    ValueTypeName: "number"
  });
  Ve.prototype = Object.assign(Object.create(Ia.prototype), {
    constructor: Ve,
    interpolate_: function (a, b, c, d) {
      var e = this.resultBuffer,
          f = this.sampleValues,
          g = this.valueSize;
      a *= g;
      b = (c - b) / (d - b);

      for (c = a + g; a !== c; a += 4) wa.slerpFlat(e, 0, f, a - g, f, a, b);

      return e;
    }
  });
  le.prototype = Object.assign(Object.create(sa.prototype), {
    constructor: le,
    ValueTypeName: "quaternion",
    DefaultInterpolation: 2301,
    InterpolantFactoryMethodLinear: function (a) {
      return new Ve(this.times, this.values, this.getValueSize(), a);
    },
    InterpolantFactoryMethodSmooth: void 0
  });
  We.prototype = Object.assign(Object.create(sa.prototype), {
    constructor: We,
    ValueTypeName: "string",
    ValueBufferType: Array,
    DefaultInterpolation: 2300,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0
  });
  $c.prototype = Object.assign(Object.create(sa.prototype), {
    constructor: $c,
    ValueTypeName: "vector"
  });
  Object.assign(Ma, {
    parse: function (a) {
      for (var b = [], c = a.tracks, d = 1 / (a.fps || 1), e = 0, f = c.length; e !== f; ++e) b.push(sk(c[e]).scale(d));

      return new Ma(a.name, a.duration, b);
    },
    toJSON: function (a) {
      var b = [],
          c = a.tracks;
      a = {
        name: a.name,
        duration: a.duration,
        tracks: b,
        uuid: a.uuid
      };

      for (var d = 0, e = c.length; d !== e; ++d) b.push(sa.toJSON(c[d]));

      return a;
    },
    CreateFromMorphTargetSequence: function (a, b, c, d) {
      for (var e = b.length, f = [], g = 0; g < e; g++) {
        var h = [],
            l = [];
        h.push((g + e - 1) % e, g, (g + 1) % e);
        l.push(0, 1, 0);
        var k = ta.getKeyframeOrder(h);
        h = ta.sortedArray(h, 1, k);
        l = ta.sortedArray(l, 1, k);
        d || 0 !== h[0] || (h.push(e), l.push(l[0]));
        f.push(new Zc(".morphTargetInfluences[" + b[g].name + "]", h, l).scale(1 / c));
      }

      return new Ma(a, -1, f);
    },
    findByName: function (a, b) {
      var c = a;
      Array.isArray(a) || (c = a.geometry && a.geometry.animations || a.animations);

      for (a = 0; a < c.length; a++) if (c[a].name === b) return c[a];

      return null;
    },
    CreateClipsFromMorphTargetSequences: function (a, b, c) {
      for (var d = {}, e = /^([\w-]*?)([\d]+)$/, f = 0, g = a.length; f < g; f++) {
        var h = a[f],
            l = h.name.match(e);

        if (l && 1 < l.length) {
          var k = l[1];
          (l = d[k]) || (d[k] = l = []);
          l.push(h);
        }
      }

      a = [];

      for (k in d) a.push(Ma.CreateFromMorphTargetSequence(k, d[k], b, c));

      return a;
    },
    parseAnimation: function (a, b) {
      if (!a) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;

      var c = function (a, b, c, d, e) {
        if (0 !== c.length) {
          var f = [],
              g = [];
          ta.flattenJSON(c, f, g, d);
          0 !== f.length && e.push(new a(b, f, g));
        }
      },
          d = [],
          e = a.name || "default",
          f = a.length || -1,
          g = a.fps || 30;

      a = a.hierarchy || [];

      for (var h = 0; h < a.length; h++) {
        var l = a[h].keys;
        if (l && 0 !== l.length) if (l[0].morphTargets) {
          f = {};

          for (var k = 0; k < l.length; k++) if (l[k].morphTargets) for (var n = 0; n < l[k].morphTargets.length; n++) f[l[k].morphTargets[n]] = -1;

          for (var q in f) {
            var u = [],
                p = [];

            for (n = 0; n !== l[k].morphTargets.length; ++n) {
              var t = l[k];
              u.push(t.time);
              p.push(t.morphTarget === q ? 1 : 0);
            }

            d.push(new Zc(".morphTargetInfluence[" + q + "]", u, p));
          }

          f = f.length * (g || 1);
        } else k = ".bones[" + b[h].name + "]", c($c, k + ".position", l, "pos", d), c(le, k + ".quaternion", l, "rot", d), c($c, k + ".scale", l, "scl", d);
      }

      return 0 === d.length ? null : new Ma(e, f, d);
    }
  });
  Object.assign(Ma.prototype, {
    resetDuration: function () {
      for (var a = 0, b = 0, c = this.tracks.length; b !== c; ++b) {
        var d = this.tracks[b];
        a = Math.max(a, d.times[d.times.length - 1]);
      }

      this.duration = a;
      return this;
    },
    trim: function () {
      for (var a = 0; a < this.tracks.length; a++) this.tracks[a].trim(0, this.duration);

      return this;
    },
    validate: function () {
      for (var a = !0, b = 0; b < this.tracks.length; b++) a = a && this.tracks[b].validate();

      return a;
    },
    optimize: function () {
      for (var a = 0; a < this.tracks.length; a++) this.tracks[a].optimize();

      return this;
    },
    clone: function () {
      for (var a = [], b = 0; b < this.tracks.length; b++) a.push(this.tracks[b].clone());

      return new Ma(this.name, this.duration, a);
    }
  });
  var sc = {
    enabled: !1,
    files: {},
    add: function (a, b) {
      !1 !== this.enabled && (this.files[a] = b);
    },
    get: function (a) {
      if (!1 !== this.enabled) return this.files[a];
    },
    remove: function (a) {
      delete this.files[a];
    },
    clear: function () {
      this.files = {};
    }
  },
      Zh = new og();
  Object.assign(V.prototype, {
    load: function () {},
    parse: function () {},
    setCrossOrigin: function (a) {
      this.crossOrigin = a;
      return this;
    },
    setPath: function (a) {
      this.path = a;
      return this;
    },
    setResourcePath: function (a) {
      this.resourcePath = a;
      return this;
    }
  });
  var $a = {};
  Na.prototype = Object.assign(Object.create(V.prototype), {
    constructor: Na,
    load: function (a, b, c, d) {
      void 0 === a && (a = "");
      void 0 !== this.path && (a = this.path + a);
      a = this.manager.resolveURL(a);
      var e = this,
          f = sc.get(a);
      if (void 0 !== f) return e.manager.itemStart(a), setTimeout(function () {
        b && b(f);
        e.manager.itemEnd(a);
      }, 0), f;
      if (void 0 !== $a[a]) $a[a].push({
        onLoad: b,
        onProgress: c,
        onError: d
      });else {
        var g = a.match(/^data:(.*?)(;base64)?,(.*)$/);

        if (g) {
          c = g[1];
          var h = !!g[2];
          g = g[3];
          g = decodeURIComponent(g);
          h && (g = atob(g));

          try {
            var l = (this.responseType || "").toLowerCase();

            switch (l) {
              case "arraybuffer":
              case "blob":
                var k = new Uint8Array(g.length);

                for (h = 0; h < g.length; h++) k[h] = g.charCodeAt(h);

                var n = "blob" === l ? new Blob([k.buffer], {
                  type: c
                }) : k.buffer;
                break;

              case "document":
                n = new DOMParser().parseFromString(g, c);
                break;

              case "json":
                n = JSON.parse(g);
                break;

              default:
                n = g;
            }

            setTimeout(function () {
              b && b(n);
              e.manager.itemEnd(a);
            }, 0);
          } catch (u) {
            setTimeout(function () {
              d && d(u);
              e.manager.itemError(a);
              e.manager.itemEnd(a);
            }, 0);
          }
        } else {
          $a[a] = [];
          $a[a].push({
            onLoad: b,
            onProgress: c,
            onError: d
          });
          var q = new XMLHttpRequest();
          q.open("GET", a, !0);
          q.addEventListener("load", function (b) {
            var c = this.response,
                d = $a[a];
            delete $a[a];

            if (200 === this.status || 0 === this.status) {
              0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
              sc.add(a, c);

              for (var f = 0, g = d.length; f < g; f++) {
                var h = d[f];
                if (h.onLoad) h.onLoad(c);
              }
            } else {
              f = 0;

              for (g = d.length; f < g; f++) if (h = d[f], h.onError) h.onError(b);

              e.manager.itemError(a);
            }

            e.manager.itemEnd(a);
          }, !1);
          q.addEventListener("progress", function (b) {
            for (var c = $a[a], d = 0, e = c.length; d < e; d++) {
              var f = c[d];
              if (f.onProgress) f.onProgress(b);
            }
          }, !1);
          q.addEventListener("error", function (b) {
            var c = $a[a];
            delete $a[a];

            for (var d = 0, f = c.length; d < f; d++) {
              var g = c[d];
              if (g.onError) g.onError(b);
            }

            e.manager.itemError(a);
            e.manager.itemEnd(a);
          }, !1);
          q.addEventListener("abort", function (b) {
            var c = $a[a];
            delete $a[a];

            for (var d = 0, f = c.length; d < f; d++) {
              var g = c[d];
              if (g.onError) g.onError(b);
            }

            e.manager.itemError(a);
            e.manager.itemEnd(a);
          }, !1);
          void 0 !== this.responseType && (q.responseType = this.responseType);
          void 0 !== this.withCredentials && (q.withCredentials = this.withCredentials);
          q.overrideMimeType && q.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");

          for (h in this.requestHeader) q.setRequestHeader(h, this.requestHeader[h]);

          q.send(null);
        }

        e.manager.itemStart(a);
        return q;
      }
    },
    setResponseType: function (a) {
      this.responseType = a;
      return this;
    },
    setWithCredentials: function (a) {
      this.withCredentials = a;
      return this;
    },
    setMimeType: function (a) {
      this.mimeType = a;
      return this;
    },
    setRequestHeader: function (a) {
      this.requestHeader = a;
      return this;
    }
  });
  pg.prototype = Object.assign(Object.create(V.prototype), {
    constructor: pg,
    load: function (a, b, c, d) {
      var e = this,
          f = new Na(e.manager);
      f.setPath(e.path);
      f.load(a, function (a) {
        b(e.parse(JSON.parse(a)));
      }, c, d);
    },
    parse: function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = Ma.parse(a[c]);
        b.push(d);
      }

      return b;
    }
  });
  qg.prototype = Object.assign(Object.create(V.prototype), {
    constructor: qg,
    load: function (a, b, c, d) {
      function e(e) {
        l.load(a[e], function (a) {
          a = f.parse(a, !0);
          g[e] = {
            width: a.width,
            height: a.height,
            format: a.format,
            mipmaps: a.mipmaps
          };
          k += 1;
          6 === k && (1 === a.mipmapCount && (h.minFilter = 1006), h.format = a.format, h.needsUpdate = !0, b && b(h));
        }, c, d);
      }

      var f = this,
          g = [],
          h = new Kc();
      h.image = g;
      var l = new Na(this.manager);
      l.setPath(this.path);
      l.setResponseType("arraybuffer");
      if (Array.isArray(a)) for (var k = 0, n = 0, q = a.length; n < q; ++n) e(n);else l.load(a, function (a) {
        a = f.parse(a, !0);
        if (a.isCubemap) for (var c = a.mipmaps.length / a.mipmapCount, d = 0; d < c; d++) {
          g[d] = {
            mipmaps: []
          };

          for (var e = 0; e < a.mipmapCount; e++) g[d].mipmaps.push(a.mipmaps[d * a.mipmapCount + e]), g[d].format = a.format, g[d].width = a.width, g[d].height = a.height;
        } else h.image.width = a.width, h.image.height = a.height, h.mipmaps = a.mipmaps;
        1 === a.mipmapCount && (h.minFilter = 1006);
        h.format = a.format;
        h.needsUpdate = !0;
        b && b(h);
      }, c, d);
      return h;
    }
  });
  Xe.prototype = Object.assign(Object.create(V.prototype), {
    constructor: Xe,
    load: function (a, b, c, d) {
      var e = this,
          f = new Yb(),
          g = new Na(this.manager);
      g.setResponseType("arraybuffer");
      g.setPath(this.path);
      g.load(a, function (a) {
        if (a = e.parse(a)) void 0 !== a.image ? f.image = a.image : void 0 !== a.data && (f.image.width = a.width, f.image.height = a.height, f.image.data = a.data), f.wrapS = void 0 !== a.wrapS ? a.wrapS : 1001, f.wrapT = void 0 !== a.wrapT ? a.wrapT : 1001, f.magFilter = void 0 !== a.magFilter ? a.magFilter : 1006, f.minFilter = void 0 !== a.minFilter ? a.minFilter : 1006, f.anisotropy = void 0 !== a.anisotropy ? a.anisotropy : 1, void 0 !== a.format && (f.format = a.format), void 0 !== a.type && (f.type = a.type), void 0 !== a.mipmaps && (f.mipmaps = a.mipmaps, f.minFilter = 1008), 1 === a.mipmapCount && (f.minFilter = 1006), f.needsUpdate = !0, b && b(f, a);
      }, c, d);
      return f;
    }
  });
  ad.prototype = Object.assign(Object.create(V.prototype), {
    constructor: ad,
    load: function (a, b, c, d) {
      function e() {
        l.removeEventListener("load", e, !1);
        l.removeEventListener("error", f, !1);
        sc.add(a, this);
        b && b(this);
        g.manager.itemEnd(a);
      }

      function f(b) {
        l.removeEventListener("load", e, !1);
        l.removeEventListener("error", f, !1);
        d && d(b);
        g.manager.itemError(a);
        g.manager.itemEnd(a);
      }

      void 0 !== this.path && (a = this.path + a);
      a = this.manager.resolveURL(a);
      var g = this,
          h = sc.get(a);
      if (void 0 !== h) return g.manager.itemStart(a), setTimeout(function () {
        b && b(h);
        g.manager.itemEnd(a);
      }, 0), h;
      var l = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
      l.addEventListener("load", e, !1);
      l.addEventListener("error", f, !1);
      "data:" !== a.substr(0, 5) && void 0 !== this.crossOrigin && (l.crossOrigin = this.crossOrigin);
      g.manager.itemStart(a);
      l.src = a;
      return l;
    }
  });
  Ye.prototype = Object.assign(Object.create(V.prototype), {
    constructor: Ye,
    load: function (a, b, c, d) {
      function e(c) {
        g.load(a[c], function (a) {
          f.images[c] = a;
          h++;
          6 === h && (f.needsUpdate = !0, b && b(f));
        }, void 0, d);
      }

      var f = new nb(),
          g = new ad(this.manager);
      g.setCrossOrigin(this.crossOrigin);
      g.setPath(this.path);
      var h = 0;

      for (c = 0; c < a.length; ++c) e(c);

      return f;
    }
  });
  Ze.prototype = Object.assign(Object.create(V.prototype), {
    constructor: Ze,
    load: function (a, b, c, d) {
      var e = new Y(),
          f = new ad(this.manager);
      f.setCrossOrigin(this.crossOrigin);
      f.setPath(this.path);
      f.load(a, function (c) {
        e.image = c;
        c = 0 < a.search(/\.jpe?g($|\?)/i) || 0 === a.search(/^data:image\/jpeg/);
        e.format = c ? 1022 : 1023;
        e.needsUpdate = !0;
        void 0 !== b && b(e);
      }, c, d);
      return e;
    }
  });
  Object.assign(C.prototype, {
    getPoint: function () {
      console.warn("THREE.Curve: .getPoint() not implemented.");
      return null;
    },
    getPointAt: function (a, b) {
      a = this.getUtoTmapping(a);
      return this.getPoint(a, b);
    },
    getPoints: function (a) {
      void 0 === a && (a = 5);

      for (var b = [], c = 0; c <= a; c++) b.push(this.getPoint(c / a));

      return b;
    },
    getSpacedPoints: function (a) {
      void 0 === a && (a = 5);

      for (var b = [], c = 0; c <= a; c++) b.push(this.getPointAt(c / a));

      return b;
    },
    getLength: function () {
      var a = this.getLengths();
      return a[a.length - 1];
    },
    getLengths: function (a) {
      void 0 === a && (a = this.arcLengthDivisions);
      if (this.cacheArcLengths && this.cacheArcLengths.length === a + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = !1;
      var b = [],
          c = this.getPoint(0),
          d,
          e = 0;
      b.push(0);

      for (d = 1; d <= a; d++) {
        var f = this.getPoint(d / a);
        e += f.distanceTo(c);
        b.push(e);
        c = f;
      }

      return this.cacheArcLengths = b;
    },
    updateArcLengths: function () {
      this.needsUpdate = !0;
      this.getLengths();
    },
    getUtoTmapping: function (a, b) {
      var c = this.getLengths(),
          d = c.length;
      b = b ? b : a * c[d - 1];

      for (var e = 0, f = d - 1, g; e <= f;) if (a = Math.floor(e + (f - e) / 2), g = c[a] - b, 0 > g) e = a + 1;else if (0 < g) f = a - 1;else {
        f = a;
        break;
      }

      a = f;
      if (c[a] === b) return a / (d - 1);
      e = c[a];
      return (a + (b - e) / (c[a + 1] - e)) / (d - 1);
    },
    getTangent: function (a) {
      var b = a - 1E-4;
      a += 1E-4;
      0 > b && (b = 0);
      1 < a && (a = 1);
      b = this.getPoint(b);
      return this.getPoint(a).clone().sub(b).normalize();
    },
    getTangentAt: function (a) {
      a = this.getUtoTmapping(a);
      return this.getTangent(a);
    },
    computeFrenetFrames: function (a, b) {
      var c = new n(),
          d = [],
          e = [],
          f = [],
          g = new n(),
          h = new Q(),
          l;

      for (l = 0; l <= a; l++) {
        var k = l / a;
        d[l] = this.getTangentAt(k);
        d[l].normalize();
      }

      e[0] = new n();
      f[0] = new n();
      l = Number.MAX_VALUE;
      k = Math.abs(d[0].x);
      var r = Math.abs(d[0].y),
          q = Math.abs(d[0].z);
      k <= l && (l = k, c.set(1, 0, 0));
      r <= l && (l = r, c.set(0, 1, 0));
      q <= l && c.set(0, 0, 1);
      g.crossVectors(d[0], c).normalize();
      e[0].crossVectors(d[0], g);
      f[0].crossVectors(d[0], e[0]);

      for (l = 1; l <= a; l++) e[l] = e[l - 1].clone(), f[l] = f[l - 1].clone(), g.crossVectors(d[l - 1], d[l]), g.length() > Number.EPSILON && (g.normalize(), c = Math.acos(P.clamp(d[l - 1].dot(d[l]), -1, 1)), e[l].applyMatrix4(h.makeRotationAxis(g, c))), f[l].crossVectors(d[l], e[l]);

      if (!0 === b) for (c = Math.acos(P.clamp(e[0].dot(e[a]), -1, 1)), c /= a, 0 < d[0].dot(g.crossVectors(e[0], e[a])) && (c = -c), l = 1; l <= a; l++) e[l].applyMatrix4(h.makeRotationAxis(d[l], c * l)), f[l].crossVectors(d[l], e[l]);
      return {
        tangents: d,
        normals: e,
        binormals: f
      };
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      this.arcLengthDivisions = a.arcLengthDivisions;
      return this;
    },
    toJSON: function () {
      var a = {
        metadata: {
          version: 4.5,
          type: "Curve",
          generator: "Curve.toJSON"
        }
      };
      a.arcLengthDivisions = this.arcLengthDivisions;
      a.type = this.type;
      return a;
    },
    fromJSON: function (a) {
      this.arcLengthDivisions = a.arcLengthDivisions;
      return this;
    }
  });
  Ja.prototype = Object.create(C.prototype);
  Ja.prototype.constructor = Ja;
  Ja.prototype.isEllipseCurve = !0;

  Ja.prototype.getPoint = function (a, b) {
    b = b || new B();

    for (var c = 2 * Math.PI, d = this.aEndAngle - this.aStartAngle, e = Math.abs(d) < Number.EPSILON; 0 > d;) d += c;

    for (; d > c;) d -= c;

    d < Number.EPSILON && (d = e ? 0 : c);
    !0 !== this.aClockwise || e || (d = d === c ? -c : d - c);
    c = this.aStartAngle + a * d;
    a = this.aX + this.xRadius * Math.cos(c);
    var f = this.aY + this.yRadius * Math.sin(c);
    0 !== this.aRotation && (c = Math.cos(this.aRotation), d = Math.sin(this.aRotation), e = a - this.aX, f -= this.aY, a = e * c - f * d + this.aX, f = e * d + f * c + this.aY);
    return b.set(a, f);
  };

  Ja.prototype.copy = function (a) {
    C.prototype.copy.call(this, a);
    this.aX = a.aX;
    this.aY = a.aY;
    this.xRadius = a.xRadius;
    this.yRadius = a.yRadius;
    this.aStartAngle = a.aStartAngle;
    this.aEndAngle = a.aEndAngle;
    this.aClockwise = a.aClockwise;
    this.aRotation = a.aRotation;
    return this;
  };

  Ja.prototype.toJSON = function () {
    var a = C.prototype.toJSON.call(this);
    a.aX = this.aX;
    a.aY = this.aY;
    a.xRadius = this.xRadius;
    a.yRadius = this.yRadius;
    a.aStartAngle = this.aStartAngle;
    a.aEndAngle = this.aEndAngle;
    a.aClockwise = this.aClockwise;
    a.aRotation = this.aRotation;
    return a;
  };

  Ja.prototype.fromJSON = function (a) {
    C.prototype.fromJSON.call(this, a);
    this.aX = a.aX;
    this.aY = a.aY;
    this.xRadius = a.xRadius;
    this.yRadius = a.yRadius;
    this.aStartAngle = a.aStartAngle;
    this.aEndAngle = a.aEndAngle;
    this.aClockwise = a.aClockwise;
    this.aRotation = a.aRotation;
    return this;
  };

  bd.prototype = Object.create(Ja.prototype);
  bd.prototype.constructor = bd;
  bd.prototype.isArcCurve = !0;
  var Lf = new n(),
      ah = new rg(),
      bh = new rg(),
      ch = new rg();
  ma.prototype = Object.create(C.prototype);
  ma.prototype.constructor = ma;
  ma.prototype.isCatmullRomCurve3 = !0;

  ma.prototype.getPoint = function (a, b) {
    b = b || new n();
    var c = this.points,
        d = c.length;
    a *= d - (this.closed ? 0 : 1);
    var e = Math.floor(a);
    a -= e;
    this.closed ? e += 0 < e ? 0 : (Math.floor(Math.abs(e) / d) + 1) * d : 0 === a && e === d - 1 && (e = d - 2, a = 1);
    if (this.closed || 0 < e) var f = c[(e - 1) % d];else Lf.subVectors(c[0], c[1]).add(c[0]), f = Lf;
    var g = c[e % d];
    var h = c[(e + 1) % d];
    this.closed || e + 2 < d ? c = c[(e + 2) % d] : (Lf.subVectors(c[d - 1], c[d - 2]).add(c[d - 1]), c = Lf);

    if ("centripetal" === this.curveType || "chordal" === this.curveType) {
      var l = "chordal" === this.curveType ? .5 : .25;
      d = Math.pow(f.distanceToSquared(g), l);
      e = Math.pow(g.distanceToSquared(h), l);
      l = Math.pow(h.distanceToSquared(c), l);
      1E-4 > e && (e = 1);
      1E-4 > d && (d = e);
      1E-4 > l && (l = e);
      ah.initNonuniformCatmullRom(f.x, g.x, h.x, c.x, d, e, l);
      bh.initNonuniformCatmullRom(f.y, g.y, h.y, c.y, d, e, l);
      ch.initNonuniformCatmullRom(f.z, g.z, h.z, c.z, d, e, l);
    } else "catmullrom" === this.curveType && (ah.initCatmullRom(f.x, g.x, h.x, c.x, this.tension), bh.initCatmullRom(f.y, g.y, h.y, c.y, this.tension), ch.initCatmullRom(f.z, g.z, h.z, c.z, this.tension));

    b.set(ah.calc(a), bh.calc(a), ch.calc(a));
    return b;
  };

  ma.prototype.copy = function (a) {
    C.prototype.copy.call(this, a);
    this.points = [];

    for (var b = 0, c = a.points.length; b < c; b++) this.points.push(a.points[b].clone());

    this.closed = a.closed;
    this.curveType = a.curveType;
    this.tension = a.tension;
    return this;
  };

  ma.prototype.toJSON = function () {
    var a = C.prototype.toJSON.call(this);
    a.points = [];

    for (var b = 0, c = this.points.length; b < c; b++) a.points.push(this.points[b].toArray());

    a.closed = this.closed;
    a.curveType = this.curveType;
    a.tension = this.tension;
    return a;
  };

  ma.prototype.fromJSON = function (a) {
    C.prototype.fromJSON.call(this, a);
    this.points = [];

    for (var b = 0, c = a.points.length; b < c; b++) {
      var d = a.points[b];
      this.points.push(new n().fromArray(d));
    }

    this.closed = a.closed;
    this.curveType = a.curveType;
    this.tension = a.tension;
    return this;
  };

  Sa.prototype = Object.create(C.prototype);
  Sa.prototype.constructor = Sa;
  Sa.prototype.isCubicBezierCurve = !0;

  Sa.prototype.getPoint = function (a, b) {
    b = b || new B();
    var c = this.v0,
        d = this.v1,
        e = this.v2,
        f = this.v3;
    b.set(ne(a, c.x, d.x, e.x, f.x), ne(a, c.y, d.y, e.y, f.y));
    return b;
  };

  Sa.prototype.copy = function (a) {
    C.prototype.copy.call(this, a);
    this.v0.copy(a.v0);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    this.v3.copy(a.v3);
    return this;
  };

  Sa.prototype.toJSON = function () {
    var a = C.prototype.toJSON.call(this);
    a.v0 = this.v0.toArray();
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    a.v3 = this.v3.toArray();
    return a;
  };

  Sa.prototype.fromJSON = function (a) {
    C.prototype.fromJSON.call(this, a);
    this.v0.fromArray(a.v0);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    this.v3.fromArray(a.v3);
    return this;
  };

  fb.prototype = Object.create(C.prototype);
  fb.prototype.constructor = fb;
  fb.prototype.isCubicBezierCurve3 = !0;

  fb.prototype.getPoint = function (a, b) {
    b = b || new n();
    var c = this.v0,
        d = this.v1,
        e = this.v2,
        f = this.v3;
    b.set(ne(a, c.x, d.x, e.x, f.x), ne(a, c.y, d.y, e.y, f.y), ne(a, c.z, d.z, e.z, f.z));
    return b;
  };

  fb.prototype.copy = function (a) {
    C.prototype.copy.call(this, a);
    this.v0.copy(a.v0);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    this.v3.copy(a.v3);
    return this;
  };

  fb.prototype.toJSON = function () {
    var a = C.prototype.toJSON.call(this);
    a.v0 = this.v0.toArray();
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    a.v3 = this.v3.toArray();
    return a;
  };

  fb.prototype.fromJSON = function (a) {
    C.prototype.fromJSON.call(this, a);
    this.v0.fromArray(a.v0);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    this.v3.fromArray(a.v3);
    return this;
  };

  Da.prototype = Object.create(C.prototype);
  Da.prototype.constructor = Da;
  Da.prototype.isLineCurve = !0;

  Da.prototype.getPoint = function (a, b) {
    b = b || new B();
    1 === a ? b.copy(this.v2) : (b.copy(this.v2).sub(this.v1), b.multiplyScalar(a).add(this.v1));
    return b;
  };

  Da.prototype.getPointAt = function (a, b) {
    return this.getPoint(a, b);
  };

  Da.prototype.getTangent = function () {
    return this.v2.clone().sub(this.v1).normalize();
  };

  Da.prototype.copy = function (a) {
    C.prototype.copy.call(this, a);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    return this;
  };

  Da.prototype.toJSON = function () {
    var a = C.prototype.toJSON.call(this);
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    return a;
  };

  Da.prototype.fromJSON = function (a) {
    C.prototype.fromJSON.call(this, a);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    return this;
  };

  Ta.prototype = Object.create(C.prototype);
  Ta.prototype.constructor = Ta;
  Ta.prototype.isLineCurve3 = !0;

  Ta.prototype.getPoint = function (a, b) {
    b = b || new n();
    1 === a ? b.copy(this.v2) : (b.copy(this.v2).sub(this.v1), b.multiplyScalar(a).add(this.v1));
    return b;
  };

  Ta.prototype.getPointAt = function (a, b) {
    return this.getPoint(a, b);
  };

  Ta.prototype.copy = function (a) {
    C.prototype.copy.call(this, a);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    return this;
  };

  Ta.prototype.toJSON = function () {
    var a = C.prototype.toJSON.call(this);
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    return a;
  };

  Ta.prototype.fromJSON = function (a) {
    C.prototype.fromJSON.call(this, a);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    return this;
  };

  Ua.prototype = Object.create(C.prototype);
  Ua.prototype.constructor = Ua;
  Ua.prototype.isQuadraticBezierCurve = !0;

  Ua.prototype.getPoint = function (a, b) {
    b = b || new B();
    var c = this.v0,
        d = this.v1,
        e = this.v2;
    b.set(me(a, c.x, d.x, e.x), me(a, c.y, d.y, e.y));
    return b;
  };

  Ua.prototype.copy = function (a) {
    C.prototype.copy.call(this, a);
    this.v0.copy(a.v0);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    return this;
  };

  Ua.prototype.toJSON = function () {
    var a = C.prototype.toJSON.call(this);
    a.v0 = this.v0.toArray();
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    return a;
  };

  Ua.prototype.fromJSON = function (a) {
    C.prototype.fromJSON.call(this, a);
    this.v0.fromArray(a.v0);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    return this;
  };

  gb.prototype = Object.create(C.prototype);
  gb.prototype.constructor = gb;
  gb.prototype.isQuadraticBezierCurve3 = !0;

  gb.prototype.getPoint = function (a, b) {
    b = b || new n();
    var c = this.v0,
        d = this.v1,
        e = this.v2;
    b.set(me(a, c.x, d.x, e.x), me(a, c.y, d.y, e.y), me(a, c.z, d.z, e.z));
    return b;
  };

  gb.prototype.copy = function (a) {
    C.prototype.copy.call(this, a);
    this.v0.copy(a.v0);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    return this;
  };

  gb.prototype.toJSON = function () {
    var a = C.prototype.toJSON.call(this);
    a.v0 = this.v0.toArray();
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    return a;
  };

  gb.prototype.fromJSON = function (a) {
    C.prototype.fromJSON.call(this, a);
    this.v0.fromArray(a.v0);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    return this;
  };

  Va.prototype = Object.create(C.prototype);
  Va.prototype.constructor = Va;
  Va.prototype.isSplineCurve = !0;

  Va.prototype.getPoint = function (a, b) {
    b = b || new B();
    var c = this.points,
        d = (c.length - 1) * a;
    a = Math.floor(d);
    d -= a;
    var e = c[0 === a ? a : a - 1],
        f = c[a],
        g = c[a > c.length - 2 ? c.length - 1 : a + 1];
    c = c[a > c.length - 3 ? c.length - 1 : a + 2];
    b.set($h(d, e.x, f.x, g.x, c.x), $h(d, e.y, f.y, g.y, c.y));
    return b;
  };

  Va.prototype.copy = function (a) {
    C.prototype.copy.call(this, a);
    this.points = [];

    for (var b = 0, c = a.points.length; b < c; b++) this.points.push(a.points[b].clone());

    return this;
  };

  Va.prototype.toJSON = function () {
    var a = C.prototype.toJSON.call(this);
    a.points = [];

    for (var b = 0, c = this.points.length; b < c; b++) a.points.push(this.points[b].toArray());

    return a;
  };

  Va.prototype.fromJSON = function (a) {
    C.prototype.fromJSON.call(this, a);
    this.points = [];

    for (var b = 0, c = a.points.length; b < c; b++) {
      var d = a.points[b];
      this.points.push(new B().fromArray(d));
    }

    return this;
  };

  var dh = Object.freeze({
    __proto__: null,
    ArcCurve: bd,
    CatmullRomCurve3: ma,
    CubicBezierCurve: Sa,
    CubicBezierCurve3: fb,
    EllipseCurve: Ja,
    LineCurve: Da,
    LineCurve3: Ta,
    QuadraticBezierCurve: Ua,
    QuadraticBezierCurve3: gb,
    SplineCurve: Va
  });
  sb.prototype = Object.assign(Object.create(C.prototype), {
    constructor: sb,
    add: function (a) {
      this.curves.push(a);
    },
    closePath: function () {
      var a = this.curves[0].getPoint(0),
          b = this.curves[this.curves.length - 1].getPoint(1);
      a.equals(b) || this.curves.push(new Da(b, a));
    },
    getPoint: function (a) {
      var b = a * this.getLength(),
          c = this.getCurveLengths();

      for (a = 0; a < c.length;) {
        if (c[a] >= b) return b = c[a] - b, a = this.curves[a], c = a.getLength(), a.getPointAt(0 === c ? 0 : 1 - b / c);
        a++;
      }

      return null;
    },
    getLength: function () {
      var a = this.getCurveLengths();
      return a[a.length - 1];
    },
    updateArcLengths: function () {
      this.needsUpdate = !0;
      this.cacheLengths = null;
      this.getCurveLengths();
    },
    getCurveLengths: function () {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;

      for (var a = [], b = 0, c = 0, d = this.curves.length; c < d; c++) b += this.curves[c].getLength(), a.push(b);

      return this.cacheLengths = a;
    },
    getSpacedPoints: function (a) {
      void 0 === a && (a = 40);

      for (var b = [], c = 0; c <= a; c++) b.push(this.getPoint(c / a));

      this.autoClose && b.push(b[0]);
      return b;
    },
    getPoints: function (a) {
      a = a || 12;

      for (var b = [], c, d = 0, e = this.curves; d < e.length; d++) {
        var f = e[d];
        f = f.getPoints(f && f.isEllipseCurve ? 2 * a : f && (f.isLineCurve || f.isLineCurve3) ? 1 : f && f.isSplineCurve ? a * f.points.length : a);

        for (var g = 0; g < f.length; g++) {
          var h = f[g];
          c && c.equals(h) || (b.push(h), c = h);
        }
      }

      this.autoClose && 1 < b.length && !b[b.length - 1].equals(b[0]) && b.push(b[0]);
      return b;
    },
    copy: function (a) {
      C.prototype.copy.call(this, a);
      this.curves = [];

      for (var b = 0, c = a.curves.length; b < c; b++) this.curves.push(a.curves[b].clone());

      this.autoClose = a.autoClose;
      return this;
    },
    toJSON: function () {
      var a = C.prototype.toJSON.call(this);
      a.autoClose = this.autoClose;
      a.curves = [];

      for (var b = 0, c = this.curves.length; b < c; b++) a.curves.push(this.curves[b].toJSON());

      return a;
    },
    fromJSON: function (a) {
      C.prototype.fromJSON.call(this, a);
      this.autoClose = a.autoClose;
      this.curves = [];

      for (var b = 0, c = a.curves.length; b < c; b++) {
        var d = a.curves[b];
        this.curves.push(new dh[d.type]().fromJSON(d));
      }

      return this;
    }
  });
  Wa.prototype = Object.assign(Object.create(sb.prototype), {
    constructor: Wa,
    setFromPoints: function (a) {
      this.moveTo(a[0].x, a[0].y);

      for (var b = 1, c = a.length; b < c; b++) this.lineTo(a[b].x, a[b].y);

      return this;
    },
    moveTo: function (a, b) {
      this.currentPoint.set(a, b);
      return this;
    },
    lineTo: function (a, b) {
      var c = new Da(this.currentPoint.clone(), new B(a, b));
      this.curves.push(c);
      this.currentPoint.set(a, b);
      return this;
    },
    quadraticCurveTo: function (a, b, c, d) {
      a = new Ua(this.currentPoint.clone(), new B(a, b), new B(c, d));
      this.curves.push(a);
      this.currentPoint.set(c, d);
      return this;
    },
    bezierCurveTo: function (a, b, c, d, e, f) {
      a = new Sa(this.currentPoint.clone(), new B(a, b), new B(c, d), new B(e, f));
      this.curves.push(a);
      this.currentPoint.set(e, f);
      return this;
    },
    splineThru: function (a) {
      var b = [this.currentPoint.clone()].concat(a);
      b = new Va(b);
      this.curves.push(b);
      this.currentPoint.copy(a[a.length - 1]);
      return this;
    },
    arc: function (a, b, c, d, e, f) {
      this.absarc(a + this.currentPoint.x, b + this.currentPoint.y, c, d, e, f);
      return this;
    },
    absarc: function (a, b, c, d, e, f) {
      this.absellipse(a, b, c, c, d, e, f);
      return this;
    },
    ellipse: function (a, b, c, d, e, f, g, h) {
      this.absellipse(a + this.currentPoint.x, b + this.currentPoint.y, c, d, e, f, g, h);
      return this;
    },
    absellipse: function (a, b, c, d, e, f, g, h) {
      a = new Ja(a, b, c, d, e, f, g, h);
      0 < this.curves.length && (b = a.getPoint(0), b.equals(this.currentPoint) || this.lineTo(b.x, b.y));
      this.curves.push(a);
      a = a.getPoint(1);
      this.currentPoint.copy(a);
      return this;
    },
    copy: function (a) {
      sb.prototype.copy.call(this, a);
      this.currentPoint.copy(a.currentPoint);
      return this;
    },
    toJSON: function () {
      var a = sb.prototype.toJSON.call(this);
      a.currentPoint = this.currentPoint.toArray();
      return a;
    },
    fromJSON: function (a) {
      sb.prototype.fromJSON.call(this, a);
      this.currentPoint.fromArray(a.currentPoint);
      return this;
    }
  });
  Ib.prototype = Object.assign(Object.create(Wa.prototype), {
    constructor: Ib,
    getPointsHoles: function (a) {
      for (var b = [], c = 0, d = this.holes.length; c < d; c++) b[c] = this.holes[c].getPoints(a);

      return b;
    },
    extractPoints: function (a) {
      return {
        shape: this.getPoints(a),
        holes: this.getPointsHoles(a)
      };
    },
    copy: function (a) {
      Wa.prototype.copy.call(this, a);
      this.holes = [];

      for (var b = 0, c = a.holes.length; b < c; b++) this.holes.push(a.holes[b].clone());

      return this;
    },
    toJSON: function () {
      var a = Wa.prototype.toJSON.call(this);
      a.uuid = this.uuid;
      a.holes = [];

      for (var b = 0, c = this.holes.length; b < c; b++) a.holes.push(this.holes[b].toJSON());

      return a;
    },
    fromJSON: function (a) {
      Wa.prototype.fromJSON.call(this, a);
      this.uuid = a.uuid;
      this.holes = [];

      for (var b = 0, c = a.holes.length; b < c; b++) {
        var d = a.holes[b];
        this.holes.push(new Wa().fromJSON(d));
      }

      return this;
    }
  });
  T.prototype = Object.assign(Object.create(E.prototype), {
    constructor: T,
    isLight: !0,
    copy: function (a) {
      E.prototype.copy.call(this, a);
      this.color.copy(a.color);
      this.intensity = a.intensity;
      return this;
    },
    toJSON: function (a) {
      a = E.prototype.toJSON.call(this, a);
      a.object.color = this.color.getHex();
      a.object.intensity = this.intensity;
      void 0 !== this.groundColor && (a.object.groundColor = this.groundColor.getHex());
      void 0 !== this.distance && (a.object.distance = this.distance);
      void 0 !== this.angle && (a.object.angle = this.angle);
      void 0 !== this.decay && (a.object.decay = this.decay);
      void 0 !== this.penumbra && (a.object.penumbra = this.penumbra);
      void 0 !== this.shadow && (a.object.shadow = this.shadow.toJSON());
      return a;
    }
  });
  $e.prototype = Object.assign(Object.create(T.prototype), {
    constructor: $e,
    isHemisphereLight: !0,
    copy: function (a) {
      T.prototype.copy.call(this, a);
      this.groundColor.copy(a.groundColor);
      return this;
    }
  });
  Object.assign(hb.prototype, {
    _projScreenMatrix: new Q(),
    _lightPositionWorld: new n(),
    _lookTarget: new n(),
    getViewportCount: function () {
      return this._viewportCount;
    },
    getFrustum: function () {
      return this._frustum;
    },
    updateMatrices: function (a) {
      var b = this.camera,
          c = this.matrix,
          d = this._projScreenMatrix,
          e = this._lookTarget,
          f = this._lightPositionWorld;
      f.setFromMatrixPosition(a.matrixWorld);
      b.position.copy(f);
      e.setFromMatrixPosition(a.target.matrixWorld);
      b.lookAt(e);
      b.updateMatrixWorld();
      d.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);

      this._frustum.setFromMatrix(d);

      c.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1);
      c.multiply(b.projectionMatrix);
      c.multiply(b.matrixWorldInverse);
    },
    getViewport: function (a) {
      return this._viewports[a];
    },
    getFrameExtents: function () {
      return this._frameExtents;
    },
    copy: function (a) {
      this.camera = a.camera.clone();
      this.bias = a.bias;
      this.radius = a.radius;
      this.mapSize.copy(a.mapSize);
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    toJSON: function () {
      var a = {};
      0 !== this.bias && (a.bias = this.bias);
      1 !== this.radius && (a.radius = this.radius);
      if (512 !== this.mapSize.x || 512 !== this.mapSize.y) a.mapSize = this.mapSize.toArray();
      a.camera = this.camera.toJSON(!1).object;
      delete a.camera.matrix;
      return a;
    }
  });
  af.prototype = Object.assign(Object.create(hb.prototype), {
    constructor: af,
    isSpotLightShadow: !0,
    updateMatrices: function (a) {
      var b = this.camera,
          c = 2 * P.RAD2DEG * a.angle,
          d = this.mapSize.width / this.mapSize.height,
          e = a.distance || b.far;
      if (c !== b.fov || d !== b.aspect || e !== b.far) b.fov = c, b.aspect = d, b.far = e, b.updateProjectionMatrix();
      hb.prototype.updateMatrices.call(this, a);
    }
  });
  bf.prototype = Object.assign(Object.create(T.prototype), {
    constructor: bf,
    isSpotLight: !0,
    copy: function (a) {
      T.prototype.copy.call(this, a);
      this.distance = a.distance;
      this.angle = a.angle;
      this.penumbra = a.penumbra;
      this.decay = a.decay;
      this.target = a.target.clone();
      this.shadow = a.shadow.clone();
      return this;
    }
  });
  sg.prototype = Object.assign(Object.create(hb.prototype), {
    constructor: sg,
    isPointLightShadow: !0,
    updateMatrices: function (a, b) {
      void 0 === b && (b = 0);
      var c = this.camera,
          d = this.matrix,
          e = this._lightPositionWorld,
          f = this._lookTarget,
          g = this._projScreenMatrix;
      e.setFromMatrixPosition(a.matrixWorld);
      c.position.copy(e);
      f.copy(c.position);
      f.add(this._cubeDirections[b]);
      c.up.copy(this._cubeUps[b]);
      c.lookAt(f);
      c.updateMatrixWorld();
      d.makeTranslation(-e.x, -e.y, -e.z);
      g.multiplyMatrices(c.projectionMatrix, c.matrixWorldInverse);

      this._frustum.setFromMatrix(g);
    }
  });
  cf.prototype = Object.assign(Object.create(T.prototype), {
    constructor: cf,
    isPointLight: !0,
    copy: function (a) {
      T.prototype.copy.call(this, a);
      this.distance = a.distance;
      this.decay = a.decay;
      this.shadow = a.shadow.clone();
      return this;
    }
  });
  oe.prototype = Object.assign(Object.create(bb.prototype), {
    constructor: oe,
    isOrthographicCamera: !0,
    copy: function (a, b) {
      bb.prototype.copy.call(this, a, b);
      this.left = a.left;
      this.right = a.right;
      this.top = a.top;
      this.bottom = a.bottom;
      this.near = a.near;
      this.far = a.far;
      this.zoom = a.zoom;
      this.view = null === a.view ? null : Object.assign({}, a.view);
      return this;
    },
    setViewOffset: function (a, b, c, d, e, f) {
      null === this.view && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      });
      this.view.enabled = !0;
      this.view.fullWidth = a;
      this.view.fullHeight = b;
      this.view.offsetX = c;
      this.view.offsetY = d;
      this.view.width = e;
      this.view.height = f;
      this.updateProjectionMatrix();
    },
    clearViewOffset: function () {
      null !== this.view && (this.view.enabled = !1);
      this.updateProjectionMatrix();
    },
    updateProjectionMatrix: function () {
      var a = (this.right - this.left) / (2 * this.zoom),
          b = (this.top - this.bottom) / (2 * this.zoom),
          c = (this.right + this.left) / 2,
          d = (this.top + this.bottom) / 2,
          e = c - a;
      c += a;
      a = d + b;
      b = d - b;

      if (null !== this.view && this.view.enabled) {
        c = this.zoom / (this.view.width / this.view.fullWidth);
        b = this.zoom / (this.view.height / this.view.fullHeight);
        var f = (this.right - this.left) / this.view.width;
        d = (this.top - this.bottom) / this.view.height;
        e += this.view.offsetX / c * f;
        c = e + this.view.width / c * f;
        a -= this.view.offsetY / b * d;
        b = a - this.view.height / b * d;
      }

      this.projectionMatrix.makeOrthographic(e, c, a, b, this.near, this.far);
      this.projectionMatrixInverse.getInverse(this.projectionMatrix);
    },
    toJSON: function (a) {
      a = E.prototype.toJSON.call(this, a);
      a.object.zoom = this.zoom;
      a.object.left = this.left;
      a.object.right = this.right;
      a.object.top = this.top;
      a.object.bottom = this.bottom;
      a.object.near = this.near;
      a.object.far = this.far;
      null !== this.view && (a.object.view = Object.assign({}, this.view));
      return a;
    }
  });
  df.prototype = Object.assign(Object.create(hb.prototype), {
    constructor: df,
    isDirectionalLightShadow: !0,
    updateMatrices: function (a) {
      hb.prototype.updateMatrices.call(this, a);
    }
  });
  ef.prototype = Object.assign(Object.create(T.prototype), {
    constructor: ef,
    isDirectionalLight: !0,
    copy: function (a) {
      T.prototype.copy.call(this, a);
      this.target = a.target.clone();
      this.shadow = a.shadow.clone();
      return this;
    }
  });
  ff.prototype = Object.assign(Object.create(T.prototype), {
    constructor: ff,
    isAmbientLight: !0
  });
  gf.prototype = Object.assign(Object.create(T.prototype), {
    constructor: gf,
    isRectAreaLight: !0,
    copy: function (a) {
      T.prototype.copy.call(this, a);
      this.width = a.width;
      this.height = a.height;
      return this;
    },
    toJSON: function (a) {
      a = T.prototype.toJSON.call(this, a);
      a.object.width = this.width;
      a.object.height = this.height;
      return a;
    }
  });
  hf.prototype = Object.assign(Object.create(V.prototype), {
    constructor: hf,
    load: function (a, b, c, d) {
      var e = this,
          f = new Na(e.manager);
      f.setPath(e.path);
      f.load(a, function (a) {
        b(e.parse(JSON.parse(a)));
      }, c, d);
    },
    parse: function (a) {
      function b(a) {
        void 0 === c[a] && console.warn("THREE.MaterialLoader: Undefined texture", a);
        return c[a];
      }

      var c = this.textures,
          d = new Fk[a.type]();
      void 0 !== a.uuid && (d.uuid = a.uuid);
      void 0 !== a.name && (d.name = a.name);
      void 0 !== a.color && d.color.setHex(a.color);
      void 0 !== a.roughness && (d.roughness = a.roughness);
      void 0 !== a.metalness && (d.metalness = a.metalness);
      void 0 !== a.sheen && (d.sheen = new J().setHex(a.sheen));
      void 0 !== a.emissive && d.emissive.setHex(a.emissive);
      void 0 !== a.specular && d.specular.setHex(a.specular);
      void 0 !== a.shininess && (d.shininess = a.shininess);
      void 0 !== a.clearcoat && (d.clearcoat = a.clearcoat);
      void 0 !== a.clearcoatRoughness && (d.clearcoatRoughness = a.clearcoatRoughness);
      void 0 !== a.vertexColors && (d.vertexColors = a.vertexColors);
      void 0 !== a.fog && (d.fog = a.fog);
      void 0 !== a.flatShading && (d.flatShading = a.flatShading);
      void 0 !== a.blending && (d.blending = a.blending);
      void 0 !== a.combine && (d.combine = a.combine);
      void 0 !== a.side && (d.side = a.side);
      void 0 !== a.opacity && (d.opacity = a.opacity);
      void 0 !== a.transparent && (d.transparent = a.transparent);
      void 0 !== a.alphaTest && (d.alphaTest = a.alphaTest);
      void 0 !== a.depthTest && (d.depthTest = a.depthTest);
      void 0 !== a.depthWrite && (d.depthWrite = a.depthWrite);
      void 0 !== a.colorWrite && (d.colorWrite = a.colorWrite);
      void 0 !== a.stencilWrite && (d.stencilWrite = a.stencilWrite);
      void 0 !== a.stencilWriteMask && (d.stencilWriteMask = a.stencilWriteMask);
      void 0 !== a.stencilFunc && (d.stencilFunc = a.stencilFunc);
      void 0 !== a.stencilRef && (d.stencilRef = a.stencilRef);
      void 0 !== a.stencilFuncMask && (d.stencilFuncMask = a.stencilFuncMask);
      void 0 !== a.stencilFail && (d.stencilFail = a.stencilFail);
      void 0 !== a.stencilZFail && (d.stencilZFail = a.stencilZFail);
      void 0 !== a.stencilZPass && (d.stencilZPass = a.stencilZPass);
      void 0 !== a.wireframe && (d.wireframe = a.wireframe);
      void 0 !== a.wireframeLinewidth && (d.wireframeLinewidth = a.wireframeLinewidth);
      void 0 !== a.wireframeLinecap && (d.wireframeLinecap = a.wireframeLinecap);
      void 0 !== a.wireframeLinejoin && (d.wireframeLinejoin = a.wireframeLinejoin);
      void 0 !== a.rotation && (d.rotation = a.rotation);
      1 !== a.linewidth && (d.linewidth = a.linewidth);
      void 0 !== a.dashSize && (d.dashSize = a.dashSize);
      void 0 !== a.gapSize && (d.gapSize = a.gapSize);
      void 0 !== a.scale && (d.scale = a.scale);
      void 0 !== a.polygonOffset && (d.polygonOffset = a.polygonOffset);
      void 0 !== a.polygonOffsetFactor && (d.polygonOffsetFactor = a.polygonOffsetFactor);
      void 0 !== a.polygonOffsetUnits && (d.polygonOffsetUnits = a.polygonOffsetUnits);
      void 0 !== a.skinning && (d.skinning = a.skinning);
      void 0 !== a.morphTargets && (d.morphTargets = a.morphTargets);
      void 0 !== a.morphNormals && (d.morphNormals = a.morphNormals);
      void 0 !== a.dithering && (d.dithering = a.dithering);
      void 0 !== a.visible && (d.visible = a.visible);
      void 0 !== a.toneMapped && (d.toneMapped = a.toneMapped);
      void 0 !== a.userData && (d.userData = a.userData);
      if (void 0 !== a.uniforms) for (var e in a.uniforms) {
        var f = a.uniforms[e];
        d.uniforms[e] = {};

        switch (f.type) {
          case "t":
            d.uniforms[e].value = b(f.value);
            break;

          case "c":
            d.uniforms[e].value = new J().setHex(f.value);
            break;

          case "v2":
            d.uniforms[e].value = new B().fromArray(f.value);
            break;

          case "v3":
            d.uniforms[e].value = new n().fromArray(f.value);
            break;

          case "v4":
            d.uniforms[e].value = new da().fromArray(f.value);
            break;

          case "m3":
            d.uniforms[e].value = new Z().fromArray(f.value);

          case "m4":
            d.uniforms[e].value = new Q().fromArray(f.value);
            break;

          default:
            d.uniforms[e].value = f.value;
        }
      }
      void 0 !== a.defines && (d.defines = a.defines);
      void 0 !== a.vertexShader && (d.vertexShader = a.vertexShader);
      void 0 !== a.fragmentShader && (d.fragmentShader = a.fragmentShader);
      if (void 0 !== a.extensions) for (var g in a.extensions) d.extensions[g] = a.extensions[g];
      void 0 !== a.shading && (d.flatShading = 1 === a.shading);
      void 0 !== a.size && (d.size = a.size);
      void 0 !== a.sizeAttenuation && (d.sizeAttenuation = a.sizeAttenuation);
      void 0 !== a.map && (d.map = b(a.map));
      void 0 !== a.matcap && (d.matcap = b(a.matcap));
      void 0 !== a.alphaMap && (d.alphaMap = b(a.alphaMap), d.transparent = !0);
      void 0 !== a.bumpMap && (d.bumpMap = b(a.bumpMap));
      void 0 !== a.bumpScale && (d.bumpScale = a.bumpScale);
      void 0 !== a.normalMap && (d.normalMap = b(a.normalMap));
      void 0 !== a.normalMapType && (d.normalMapType = a.normalMapType);
      void 0 !== a.normalScale && (e = a.normalScale, !1 === Array.isArray(e) && (e = [e, e]), d.normalScale = new B().fromArray(e));
      void 0 !== a.displacementMap && (d.displacementMap = b(a.displacementMap));
      void 0 !== a.displacementScale && (d.displacementScale = a.displacementScale);
      void 0 !== a.displacementBias && (d.displacementBias = a.displacementBias);
      void 0 !== a.roughnessMap && (d.roughnessMap = b(a.roughnessMap));
      void 0 !== a.metalnessMap && (d.metalnessMap = b(a.metalnessMap));
      void 0 !== a.emissiveMap && (d.emissiveMap = b(a.emissiveMap));
      void 0 !== a.emissiveIntensity && (d.emissiveIntensity = a.emissiveIntensity);
      void 0 !== a.specularMap && (d.specularMap = b(a.specularMap));
      void 0 !== a.envMap && (d.envMap = b(a.envMap));
      void 0 !== a.envMapIntensity && (d.envMapIntensity = a.envMapIntensity);
      void 0 !== a.reflectivity && (d.reflectivity = a.reflectivity);
      void 0 !== a.refractionRatio && (d.refractionRatio = a.refractionRatio);
      void 0 !== a.lightMap && (d.lightMap = b(a.lightMap));
      void 0 !== a.lightMapIntensity && (d.lightMapIntensity = a.lightMapIntensity);
      void 0 !== a.aoMap && (d.aoMap = b(a.aoMap));
      void 0 !== a.aoMapIntensity && (d.aoMapIntensity = a.aoMapIntensity);
      void 0 !== a.gradientMap && (d.gradientMap = b(a.gradientMap));
      void 0 !== a.clearcoatNormalMap && (d.clearcoatNormalMap = b(a.clearcoatNormalMap));
      void 0 !== a.clearcoatNormalScale && (d.clearcoatNormalScale = new B().fromArray(a.clearcoatNormalScale));
      return d;
    },
    setTextures: function (a) {
      this.textures = a;
      return this;
    }
  });
  var eh = {
    decodeText: function (a) {
      if ("undefined" !== typeof TextDecoder) return new TextDecoder().decode(a);

      for (var b = "", c = 0, d = a.length; c < d; c++) b += String.fromCharCode(a[c]);

      try {
        return decodeURIComponent(escape(b));
      } catch (e) {
        return b;
      }
    },
    extractUrlBase: function (a) {
      var b = a.lastIndexOf("/");
      return -1 === b ? "./" : a.substr(0, b + 1);
    }
  };
  jf.prototype = Object.assign(Object.create(D.prototype), {
    constructor: jf,
    isInstancedBufferGeometry: !0,
    copy: function (a) {
      D.prototype.copy.call(this, a);
      this.maxInstancedCount = a.maxInstancedCount;
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    toJSON: function () {
      var a = D.prototype.toJSON.call(this);
      a.maxInstancedCount = this.maxInstancedCount;
      a.isInstancedBufferGeometry = !0;
      return a;
    }
  });
  kf.prototype = Object.assign(Object.create(N.prototype), {
    constructor: kf,
    isInstancedBufferAttribute: !0,
    copy: function (a) {
      N.prototype.copy.call(this, a);
      this.meshPerAttribute = a.meshPerAttribute;
      return this;
    },
    toJSON: function () {
      var a = N.prototype.toJSON.call(this);
      a.meshPerAttribute = this.meshPerAttribute;
      a.isInstancedBufferAttribute = !0;
      return a;
    }
  });
  lf.prototype = Object.assign(Object.create(V.prototype), {
    constructor: lf,
    load: function (a, b, c, d) {
      var e = this,
          f = new Na(e.manager);
      f.setPath(e.path);
      f.load(a, function (a) {
        b(e.parse(JSON.parse(a)));
      }, c, d);
    },
    parse: function (a) {
      var b = a.isInstancedBufferGeometry ? new jf() : new D(),
          c = a.data.index;

      if (void 0 !== c) {
        var d = new fh[c.type](c.array);
        b.setIndex(new N(d, 1));
      }

      c = a.data.attributes;

      for (var e in c) {
        var f = c[e];
        d = new fh[f.type](f.array);
        d = new (f.isInstancedBufferAttribute ? kf : N)(d, f.itemSize, f.normalized);
        void 0 !== f.name && (d.name = f.name);
        b.setAttribute(e, d);
      }

      var g = a.data.morphAttributes;
      if (g) for (e in g) {
        var h = g[e],
            l = [];
        c = 0;

        for (var k = h.length; c < k; c++) f = h[c], d = new fh[f.type](f.array), d = new N(d, f.itemSize, f.normalized), void 0 !== f.name && (d.name = f.name), l.push(d);

        b.morphAttributes[e] = l;
      }
      e = a.data.groups || a.data.drawcalls || a.data.offsets;
      if (void 0 !== e) for (c = 0, f = e.length; c !== f; ++c) d = e[c], b.addGroup(d.start, d.count, d.materialIndex);
      c = a.data.boundingSphere;
      void 0 !== c && (e = new n(), void 0 !== c.center && e.fromArray(c.center), b.boundingSphere = new mb(e, c.radius));
      a.name && (b.name = a.name);
      a.userData && (b.userData = a.userData);
      return b;
    }
  });
  var fh = {
    Int8Array: Int8Array,
    Uint8Array: Uint8Array,
    Uint8ClampedArray: "undefined" !== typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
    Int16Array: Int16Array,
    Uint16Array: Uint16Array,
    Int32Array: Int32Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array
  };
  mf.prototype = Object.assign(Object.create(V.prototype), {
    constructor: mf,
    load: function (a, b, c, d) {
      var e = this,
          f = "" === this.path ? eh.extractUrlBase(a) : this.path;
      this.resourcePath = this.resourcePath || f;
      f = new Na(e.manager);
      f.setPath(this.path);
      f.load(a, function (c) {
        var f = null;

        try {
          f = JSON.parse(c);
        } catch (l) {
          void 0 !== d && d(l);
          console.error("THREE:ObjectLoader: Can't parse " + a + ".", l.message);
          return;
        }

        c = f.metadata;
        void 0 === c || void 0 === c.type || "geometry" === c.type.toLowerCase() ? console.error("THREE.ObjectLoader: Can't load " + a) : e.parse(f, b);
      }, c, d);
    },
    parse: function (a, b) {
      var c = this.parseShape(a.shapes);
      c = this.parseGeometries(a.geometries, c);
      var d = this.parseImages(a.images, function () {
        void 0 !== b && b(e);
      });
      d = this.parseTextures(a.textures, d);
      d = this.parseMaterials(a.materials, d);
      var e = this.parseObject(a.object, c, d);
      a.animations && (e.animations = this.parseAnimations(a.animations));
      void 0 !== a.images && 0 !== a.images.length || void 0 === b || b(e);
      return e;
    },
    parseShape: function (a) {
      var b = {};
      if (void 0 !== a) for (var c = 0, d = a.length; c < d; c++) {
        var e = new Ib().fromJSON(a[c]);
        b[e.uuid] = e;
      }
      return b;
    },
    parseGeometries: function (a, b) {
      var c = {};
      if (void 0 !== a) for (var d = new lf(), e = 0, f = a.length; e < f; e++) {
        var g = a[e];

        switch (g.type) {
          case "PlaneGeometry":
          case "PlaneBufferGeometry":
            var h = new ja[g.type](g.width, g.height, g.widthSegments, g.heightSegments);
            break;

          case "BoxGeometry":
          case "BoxBufferGeometry":
          case "CubeGeometry":
            h = new ja[g.type](g.width, g.height, g.depth, g.widthSegments, g.heightSegments, g.depthSegments);
            break;

          case "CircleGeometry":
          case "CircleBufferGeometry":
            h = new ja[g.type](g.radius, g.segments, g.thetaStart, g.thetaLength);
            break;

          case "CylinderGeometry":
          case "CylinderBufferGeometry":
            h = new ja[g.type](g.radiusTop, g.radiusBottom, g.height, g.radialSegments, g.heightSegments, g.openEnded, g.thetaStart, g.thetaLength);
            break;

          case "ConeGeometry":
          case "ConeBufferGeometry":
            h = new ja[g.type](g.radius, g.height, g.radialSegments, g.heightSegments, g.openEnded, g.thetaStart, g.thetaLength);
            break;

          case "SphereGeometry":
          case "SphereBufferGeometry":
            h = new ja[g.type](g.radius, g.widthSegments, g.heightSegments, g.phiStart, g.phiLength, g.thetaStart, g.thetaLength);
            break;

          case "DodecahedronGeometry":
          case "DodecahedronBufferGeometry":
          case "IcosahedronGeometry":
          case "IcosahedronBufferGeometry":
          case "OctahedronGeometry":
          case "OctahedronBufferGeometry":
          case "TetrahedronGeometry":
          case "TetrahedronBufferGeometry":
            h = new ja[g.type](g.radius, g.detail);
            break;

          case "RingGeometry":
          case "RingBufferGeometry":
            h = new ja[g.type](g.innerRadius, g.outerRadius, g.thetaSegments, g.phiSegments, g.thetaStart, g.thetaLength);
            break;

          case "TorusGeometry":
          case "TorusBufferGeometry":
            h = new ja[g.type](g.radius, g.tube, g.radialSegments, g.tubularSegments, g.arc);
            break;

          case "TorusKnotGeometry":
          case "TorusKnotBufferGeometry":
            h = new ja[g.type](g.radius, g.tube, g.tubularSegments, g.radialSegments, g.p, g.q);
            break;

          case "TubeGeometry":
          case "TubeBufferGeometry":
            h = new ja[g.type](new dh[g.path.type]().fromJSON(g.path), g.tubularSegments, g.radius, g.radialSegments, g.closed);
            break;

          case "LatheGeometry":
          case "LatheBufferGeometry":
            h = new ja[g.type](g.points, g.segments, g.phiStart, g.phiLength);
            break;

          case "PolyhedronGeometry":
          case "PolyhedronBufferGeometry":
            h = new ja[g.type](g.vertices, g.indices, g.radius, g.details);
            break;

          case "ShapeGeometry":
          case "ShapeBufferGeometry":
            h = [];

            for (var l = 0, k = g.shapes.length; l < k; l++) {
              var n = b[g.shapes[l]];
              h.push(n);
            }

            h = new ja[g.type](h, g.curveSegments);
            break;

          case "ExtrudeGeometry":
          case "ExtrudeBufferGeometry":
            h = [];
            l = 0;

            for (k = g.shapes.length; l < k; l++) n = b[g.shapes[l]], h.push(n);

            l = g.options.extrudePath;
            void 0 !== l && (g.options.extrudePath = new dh[l.type]().fromJSON(l));
            h = new ja[g.type](h, g.options);
            break;

          case "BufferGeometry":
          case "InstancedBufferGeometry":
            h = d.parse(g);
            break;

          case "Geometry":
            "THREE" in window && "LegacyJSONLoader" in THREE ? h = new THREE.LegacyJSONLoader().parse(g, this.resourcePath).geometry : console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');
            break;

          default:
            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + g.type + '"');
            continue;
        }

        h.uuid = g.uuid;
        void 0 !== g.name && (h.name = g.name);
        !0 === h.isBufferGeometry && void 0 !== g.userData && (h.userData = g.userData);
        c[g.uuid] = h;
      }
      return c;
    },
    parseMaterials: function (a, b) {
      var c = {},
          d = {};

      if (void 0 !== a) {
        var e = new hf();
        e.setTextures(b);
        b = 0;

        for (var f = a.length; b < f; b++) {
          var g = a[b];

          if ("MultiMaterial" === g.type) {
            for (var h = [], l = 0; l < g.materials.length; l++) {
              var k = g.materials[l];
              void 0 === c[k.uuid] && (c[k.uuid] = e.parse(k));
              h.push(c[k.uuid]);
            }

            d[g.uuid] = h;
          } else void 0 === c[g.uuid] && (c[g.uuid] = e.parse(g)), d[g.uuid] = c[g.uuid];
        }
      }

      return d;
    },
    parseAnimations: function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
            e = Ma.parse(d);
        void 0 !== d.uuid && (e.uuid = d.uuid);
        b.push(e);
      }

      return b;
    },
    parseImages: function (a, b) {
      function c(a) {
        d.manager.itemStart(a);
        return f.load(a, function () {
          d.manager.itemEnd(a);
        }, void 0, function () {
          d.manager.itemError(a);
          d.manager.itemEnd(a);
        });
      }

      var d = this,
          e = {};

      if (void 0 !== a && 0 < a.length) {
        b = new og(b);
        var f = new ad(b);
        f.setCrossOrigin(this.crossOrigin);
        b = 0;

        for (var g = a.length; b < g; b++) {
          var h = a[b],
              l = h.url;

          if (Array.isArray(l)) {
            e[h.uuid] = [];

            for (var k = 0, n = l.length; k < n; k++) {
              var q = l[k];
              q = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(q) ? q : d.resourcePath + q;
              e[h.uuid].push(c(q));
            }
          } else q = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : d.resourcePath + h.url, e[h.uuid] = c(q);
        }
      }

      return e;
    },
    parseTextures: function (a, b) {
      function c(a, b) {
        if ("number" === typeof a) return a;
        console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", a);
        return b[a];
      }

      var d = {};
      if (void 0 !== a) for (var e = 0, f = a.length; e < f; e++) {
        var g = a[e];
        void 0 === g.image && console.warn('THREE.ObjectLoader: No "image" specified for', g.uuid);
        void 0 === b[g.image] && console.warn("THREE.ObjectLoader: Undefined image", g.image);
        var h = Array.isArray(b[g.image]) ? new nb(b[g.image]) : new Y(b[g.image]);
        h.needsUpdate = !0;
        h.uuid = g.uuid;
        void 0 !== g.name && (h.name = g.name);
        void 0 !== g.mapping && (h.mapping = c(g.mapping, Gk));
        void 0 !== g.offset && h.offset.fromArray(g.offset);
        void 0 !== g.repeat && h.repeat.fromArray(g.repeat);
        void 0 !== g.center && h.center.fromArray(g.center);
        void 0 !== g.rotation && (h.rotation = g.rotation);
        void 0 !== g.wrap && (h.wrapS = c(g.wrap[0], Di), h.wrapT = c(g.wrap[1], Di));
        void 0 !== g.format && (h.format = g.format);
        void 0 !== g.type && (h.type = g.type);
        void 0 !== g.encoding && (h.encoding = g.encoding);
        void 0 !== g.minFilter && (h.minFilter = c(g.minFilter, Ei));
        void 0 !== g.magFilter && (h.magFilter = c(g.magFilter, Ei));
        void 0 !== g.anisotropy && (h.anisotropy = g.anisotropy);
        void 0 !== g.flipY && (h.flipY = g.flipY);
        void 0 !== g.premultiplyAlpha && (h.premultiplyAlpha = g.premultiplyAlpha);
        void 0 !== g.unpackAlignment && (h.unpackAlignment = g.unpackAlignment);
        d[g.uuid] = h;
      }
      return d;
    },
    parseObject: function (a, b, c) {
      function d(a) {
        void 0 === b[a] && console.warn("THREE.ObjectLoader: Undefined geometry", a);
        return b[a];
      }

      function e(a) {
        if (void 0 !== a) {
          if (Array.isArray(a)) {
            for (var b = [], d = 0, e = a.length; d < e; d++) {
              var f = a[d];
              void 0 === c[f] && console.warn("THREE.ObjectLoader: Undefined material", f);
              b.push(c[f]);
            }

            return b;
          }

          void 0 === c[a] && console.warn("THREE.ObjectLoader: Undefined material", a);
          return c[a];
        }
      }

      switch (a.type) {
        case "Scene":
          var f = new vd();
          void 0 !== a.background && Number.isInteger(a.background) && (f.background = new J(a.background));
          void 0 !== a.fog && ("Fog" === a.fog.type ? f.fog = new Me(a.fog.color, a.fog.near, a.fog.far) : "FogExp2" === a.fog.type && (f.fog = new Le(a.fog.color, a.fog.density)));
          break;

        case "PerspectiveCamera":
          f = new U(a.fov, a.aspect, a.near, a.far);
          void 0 !== a.focus && (f.focus = a.focus);
          void 0 !== a.zoom && (f.zoom = a.zoom);
          void 0 !== a.filmGauge && (f.filmGauge = a.filmGauge);
          void 0 !== a.filmOffset && (f.filmOffset = a.filmOffset);
          void 0 !== a.view && (f.view = Object.assign({}, a.view));
          break;

        case "OrthographicCamera":
          f = new oe(a.left, a.right, a.top, a.bottom, a.near, a.far);
          void 0 !== a.zoom && (f.zoom = a.zoom);
          void 0 !== a.view && (f.view = Object.assign({}, a.view));
          break;

        case "AmbientLight":
          f = new ff(a.color, a.intensity);
          break;

        case "DirectionalLight":
          f = new ef(a.color, a.intensity);
          break;

        case "PointLight":
          f = new cf(a.color, a.intensity, a.distance, a.decay);
          break;

        case "RectAreaLight":
          f = new gf(a.color, a.intensity, a.width, a.height);
          break;

        case "SpotLight":
          f = new bf(a.color, a.intensity, a.distance, a.angle, a.penumbra, a.decay);
          break;

        case "HemisphereLight":
          f = new $e(a.color, a.groundColor, a.intensity);
          break;

        case "SkinnedMesh":
          console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");

        case "Mesh":
          f = d(a.geometry);
          var g = e(a.material);
          f = f.bones && 0 < f.bones.length ? new Od(f, g) : new ea(f, g);
          break;

        case "InstancedMesh":
          f = d(a.geometry);
          g = e(a.material);
          var h = a.instanceMatrix;
          f = new Pe(f, g, a.count);
          f.instanceMatrix = new N(new Float32Array(h.array), 16);
          break;

        case "LOD":
          f = new Nd();
          break;

        case "Line":
          f = new ra(d(a.geometry), e(a.material), a.mode);
          break;

        case "LineLoop":
          f = new Qe(d(a.geometry), e(a.material));
          break;

        case "LineSegments":
          f = new X(d(a.geometry), e(a.material));
          break;

        case "PointCloud":
        case "Points":
          f = new Jc(d(a.geometry), e(a.material));
          break;

        case "Sprite":
          f = new Ld(e(a.material));
          break;

        case "Group":
          f = new Gc();
          break;

        default:
          f = new E();
      }

      f.uuid = a.uuid;
      void 0 !== a.name && (f.name = a.name);
      void 0 !== a.matrix ? (f.matrix.fromArray(a.matrix), void 0 !== a.matrixAutoUpdate && (f.matrixAutoUpdate = a.matrixAutoUpdate), f.matrixAutoUpdate && f.matrix.decompose(f.position, f.quaternion, f.scale)) : (void 0 !== a.position && f.position.fromArray(a.position), void 0 !== a.rotation && f.rotation.fromArray(a.rotation), void 0 !== a.quaternion && f.quaternion.fromArray(a.quaternion), void 0 !== a.scale && f.scale.fromArray(a.scale));
      void 0 !== a.castShadow && (f.castShadow = a.castShadow);
      void 0 !== a.receiveShadow && (f.receiveShadow = a.receiveShadow);
      a.shadow && (void 0 !== a.shadow.bias && (f.shadow.bias = a.shadow.bias), void 0 !== a.shadow.radius && (f.shadow.radius = a.shadow.radius), void 0 !== a.shadow.mapSize && f.shadow.mapSize.fromArray(a.shadow.mapSize), void 0 !== a.shadow.camera && (f.shadow.camera = this.parseObject(a.shadow.camera)));
      void 0 !== a.visible && (f.visible = a.visible);
      void 0 !== a.frustumCulled && (f.frustumCulled = a.frustumCulled);
      void 0 !== a.renderOrder && (f.renderOrder = a.renderOrder);
      void 0 !== a.userData && (f.userData = a.userData);
      void 0 !== a.layers && (f.layers.mask = a.layers);
      void 0 !== a.drawMode && f.setDrawMode(a.drawMode);
      if (void 0 !== a.children) for (h = a.children, g = 0; g < h.length; g++) f.add(this.parseObject(h[g], b, c));
      if ("LOD" === a.type) for (a = a.levels, h = 0; h < a.length; h++) {
        g = a[h];
        var l = f.getObjectByProperty("uuid", g.object);
        void 0 !== l && f.addLevel(l, g.distance);
      }
      return f;
    }
  });
  var Gk = {
    UVMapping: 300,
    CubeReflectionMapping: 301,
    CubeRefractionMapping: 302,
    EquirectangularReflectionMapping: 303,
    EquirectangularRefractionMapping: 304,
    SphericalReflectionMapping: 305,
    CubeUVReflectionMapping: 306,
    CubeUVRefractionMapping: 307
  },
      Di = {
    RepeatWrapping: 1E3,
    ClampToEdgeWrapping: 1001,
    MirroredRepeatWrapping: 1002
  },
      Ei = {
    NearestFilter: 1003,
    NearestMipmapNearestFilter: 1004,
    NearestMipmapLinearFilter: 1005,
    LinearFilter: 1006,
    LinearMipmapNearestFilter: 1007,
    LinearMipmapLinearFilter: 1008
  };
  tg.prototype = Object.assign(Object.create(V.prototype), {
    constructor: tg,
    setOptions: function (a) {
      this.options = a;
      return this;
    },
    load: function (a, b, c, d) {
      void 0 === a && (a = "");
      void 0 !== this.path && (a = this.path + a);
      a = this.manager.resolveURL(a);
      var e = this,
          f = sc.get(a);
      if (void 0 !== f) return e.manager.itemStart(a), setTimeout(function () {
        b && b(f);
        e.manager.itemEnd(a);
      }, 0), f;
      fetch(a).then(function (a) {
        return a.blob();
      }).then(function (a) {
        return void 0 === e.options ? createImageBitmap(a) : createImageBitmap(a, e.options);
      }).then(function (c) {
        sc.add(a, c);
        b && b(c);
        e.manager.itemEnd(a);
      }).catch(function (b) {
        d && d(b);
        e.manager.itemError(a);
        e.manager.itemEnd(a);
      });
      e.manager.itemStart(a);
    }
  });
  Object.assign(ug.prototype, {
    moveTo: function (a, b) {
      this.currentPath = new Wa();
      this.subPaths.push(this.currentPath);
      this.currentPath.moveTo(a, b);
      return this;
    },
    lineTo: function (a, b) {
      this.currentPath.lineTo(a, b);
      return this;
    },
    quadraticCurveTo: function (a, b, c, d) {
      this.currentPath.quadraticCurveTo(a, b, c, d);
      return this;
    },
    bezierCurveTo: function (a, b, c, d, e, f) {
      this.currentPath.bezierCurveTo(a, b, c, d, e, f);
      return this;
    },
    splineThru: function (a) {
      this.currentPath.splineThru(a);
      return this;
    },
    toShapes: function (a, b) {
      function c(a) {
        for (var b = [], c = 0, d = a.length; c < d; c++) {
          var e = a[c],
              f = new Ib();
          f.curves = e.curves;
          b.push(f);
        }

        return b;
      }

      function d(a, b) {
        for (var c = b.length, d = !1, e = c - 1, f = 0; f < c; e = f++) {
          var g = b[e],
              h = b[f],
              l = h.x - g.x,
              k = h.y - g.y;

          if (Math.abs(k) > Number.EPSILON) {
            if (0 > k && (g = b[f], l = -l, h = b[e], k = -k), !(a.y < g.y || a.y > h.y)) if (a.y === g.y) {
              if (a.x === g.x) return !0;
            } else {
              e = k * (a.x - g.x) - l * (a.y - g.y);
              if (0 === e) return !0;
              0 > e || (d = !d);
            }
          } else if (a.y === g.y && (h.x <= a.x && a.x <= g.x || g.x <= a.x && a.x <= h.x)) return !0;
        }

        return d;
      }

      var e = qb.isClockWise,
          f = this.subPaths;
      if (0 === f.length) return [];
      if (!0 === b) return c(f);
      b = [];

      if (1 === f.length) {
        var g = f[0];
        var h = new Ib();
        h.curves = g.curves;
        b.push(h);
        return b;
      }

      var l = !e(f[0].getPoints());
      l = a ? !l : l;
      h = [];
      var k = [],
          n = [],
          q = 0;
      k[q] = void 0;
      n[q] = [];

      for (var u = 0, p = f.length; u < p; u++) {
        g = f[u];
        var t = g.getPoints();
        var v = e(t);
        (v = a ? !v : v) ? (!l && k[q] && q++, k[q] = {
          s: new Ib(),
          p: t
        }, k[q].s.curves = g.curves, l && q++, n[q] = []) : n[q].push({
          h: g,
          p: t[0]
        });
      }

      if (!k[0]) return c(f);

      if (1 < k.length) {
        u = !1;
        a = [];
        e = 0;

        for (f = k.length; e < f; e++) h[e] = [];

        e = 0;

        for (f = k.length; e < f; e++) for (g = n[e], v = 0; v < g.length; v++) {
          l = g[v];
          q = !0;

          for (t = 0; t < k.length; t++) d(l.p, k[t].p) && (e !== t && a.push({
            froms: e,
            tos: t,
            hole: v
          }), q ? (q = !1, h[t].push(l)) : u = !0);

          q && h[e].push(l);
        }

        0 < a.length && (u || (n = h));
      }

      u = 0;

      for (e = k.length; u < e; u++) for (h = k[u].s, b.push(h), a = n[u], f = 0, g = a.length; f < g; f++) h.holes.push(a[f].h);

      return b;
    }
  });
  Object.assign(vg.prototype, {
    isFont: !0,
    generateShapes: function (a, b) {
      void 0 === b && (b = 100);
      var c = [],
          d = b;
      b = this.data;
      var e = Array.from ? Array.from(a) : String(a).split("");
      d /= b.resolution;
      var f = (b.boundingBox.yMax - b.boundingBox.yMin + b.underlineThickness) * d;
      a = [];

      for (var g = 0, h = 0, l = 0; l < e.length; l++) {
        var k = e[l];
        if ("\n" === k) g = 0, h -= f;else {
          var n = k;
          k = d;
          var q = g,
              u = h,
              p = b,
              t = p.glyphs[n] || p.glyphs["?"];

          if (t) {
            n = new ug();

            if (t.o) {
              p = t._cachedOutline || (t._cachedOutline = t.o.split(" "));

              for (var v = 0, y = p.length; v < y;) switch (p[v++]) {
                case "m":
                  var w = p[v++] * k + q;
                  var x = p[v++] * k + u;
                  n.moveTo(w, x);
                  break;

                case "l":
                  w = p[v++] * k + q;
                  x = p[v++] * k + u;
                  n.lineTo(w, x);
                  break;

                case "q":
                  var A = p[v++] * k + q;
                  var B = p[v++] * k + u;
                  var z = p[v++] * k + q;
                  var C = p[v++] * k + u;
                  n.quadraticCurveTo(z, C, A, B);
                  break;

                case "b":
                  A = p[v++] * k + q, B = p[v++] * k + u, z = p[v++] * k + q, C = p[v++] * k + u, w = p[v++] * k + q, x = p[v++] * k + u, n.bezierCurveTo(z, C, w, x, A, B);
              }
            }

            k = {
              offsetX: t.ha * k,
              path: n
            };
          } else console.error('THREE.Font: character "' + n + '" does not exists in font family ' + p.familyName + "."), k = void 0;

          g += k.offsetX;
          a.push(k.path);
        }
      }

      b = 0;

      for (e = a.length; b < e; b++) Array.prototype.push.apply(c, a[b].toShapes());

      return c;
    }
  });
  wg.prototype = Object.assign(Object.create(V.prototype), {
    constructor: wg,
    load: function (a, b, c, d) {
      var e = this,
          f = new Na(this.manager);
      f.setPath(this.path);
      f.load(a, function (a) {
        try {
          var c = JSON.parse(a);
        } catch (l) {
          console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), c = JSON.parse(a.substring(65, a.length - 2));
        }

        a = e.parse(c);
        b && b(a);
      }, c, d);
    },
    parse: function (a) {
      return new vg(a);
    }
  });
  var Mf,
      Bg = {
    getContext: function () {
      void 0 === Mf && (Mf = new (window.AudioContext || window.webkitAudioContext)());
      return Mf;
    },
    setContext: function (a) {
      Mf = a;
    }
  };
  nf.prototype = Object.assign(Object.create(V.prototype), {
    constructor: nf,
    load: function (a, b, c, d) {
      var e = new Na(this.manager);
      e.setResponseType("arraybuffer");
      e.setPath(this.path);
      e.load(a, function (a) {
        a = a.slice(0);
        Bg.getContext().decodeAudioData(a, function (a) {
          b(a);
        });
      }, c, d);
    }
  });
  Object.assign(of.prototype, {
    isSphericalHarmonics3: !0,
    set: function (a) {
      for (var b = 0; 9 > b; b++) this.coefficients[b].copy(a[b]);

      return this;
    },
    zero: function () {
      for (var a = 0; 9 > a; a++) this.coefficients[a].set(0, 0, 0);

      return this;
    },
    getAt: function (a, b) {
      var c = a.x,
          d = a.y;
      a = a.z;
      var e = this.coefficients;
      b.copy(e[0]).multiplyScalar(.282095);
      b.addScale(e[1], .488603 * d);
      b.addScale(e[2], .488603 * a);
      b.addScale(e[3], .488603 * c);
      b.addScale(e[4], 1.092548 * c * d);
      b.addScale(e[5], 1.092548 * d * a);
      b.addScale(e[6], .315392 * (3 * a * a - 1));
      b.addScale(e[7], 1.092548 * c * a);
      b.addScale(e[8], .546274 * (c * c - d * d));
      return b;
    },
    getIrradianceAt: function (a, b) {
      var c = a.x,
          d = a.y;
      a = a.z;
      var e = this.coefficients;
      b.copy(e[0]).multiplyScalar(.886227);
      b.addScale(e[1], 1.023328 * d);
      b.addScale(e[2], 1.023328 * a);
      b.addScale(e[3], 1.023328 * c);
      b.addScale(e[4], .858086 * c * d);
      b.addScale(e[5], .858086 * d * a);
      b.addScale(e[6], .743125 * a * a - .247708);
      b.addScale(e[7], .858086 * c * a);
      b.addScale(e[8], .429043 * (c * c - d * d));
      return b;
    },
    add: function (a) {
      for (var b = 0; 9 > b; b++) this.coefficients[b].add(a.coefficients[b]);

      return this;
    },
    scale: function (a) {
      for (var b = 0; 9 > b; b++) this.coefficients[b].multiplyScalar(a);

      return this;
    },
    lerp: function (a, b) {
      for (var c = 0; 9 > c; c++) this.coefficients[c].lerp(a.coefficients[c], b);

      return this;
    },
    equals: function (a) {
      for (var b = 0; 9 > b; b++) if (!this.coefficients[b].equals(a.coefficients[b])) return !1;

      return !0;
    },
    copy: function (a) {
      return this.set(a.coefficients);
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    fromArray: function (a, b) {
      void 0 === b && (b = 0);

      for (var c = this.coefficients, d = 0; 9 > d; d++) c[d].fromArray(a, b + 3 * d);

      return this;
    },
    toArray: function (a, b) {
      void 0 === a && (a = []);
      void 0 === b && (b = 0);

      for (var c = this.coefficients, d = 0; 9 > d; d++) c[d].toArray(a, b + 3 * d);

      return a;
    }
  });
  Object.assign(of, {
    getBasisAt: function (a, b) {
      var c = a.x,
          d = a.y;
      a = a.z;
      b[0] = .282095;
      b[1] = .488603 * d;
      b[2] = .488603 * a;
      b[3] = .488603 * c;
      b[4] = 1.092548 * c * d;
      b[5] = 1.092548 * d * a;
      b[6] = .315392 * (3 * a * a - 1);
      b[7] = 1.092548 * c * a;
      b[8] = .546274 * (c * c - d * d);
    }
  });
  Xa.prototype = Object.assign(Object.create(T.prototype), {
    constructor: Xa,
    isLightProbe: !0,
    copy: function (a) {
      T.prototype.copy.call(this, a);
      this.sh.copy(a.sh);
      this.intensity = a.intensity;
      return this;
    },
    toJSON: function (a) {
      return T.prototype.toJSON.call(this, a);
    }
  });
  xg.prototype = Object.assign(Object.create(Xa.prototype), {
    constructor: xg,
    isHemisphereLightProbe: !0,
    copy: function (a) {
      Xa.prototype.copy.call(this, a);
      return this;
    },
    toJSON: function (a) {
      return Xa.prototype.toJSON.call(this, a);
    }
  });
  yg.prototype = Object.assign(Object.create(Xa.prototype), {
    constructor: yg,
    isAmbientLightProbe: !0,
    copy: function (a) {
      Xa.prototype.copy.call(this, a);
      return this;
    },
    toJSON: function (a) {
      return Xa.prototype.toJSON.call(this, a);
    }
  });
  var Fi = new Q(),
      Gi = new Q();
  Object.assign(ai.prototype, {
    update: function (a) {
      var b = this._cache;

      if (b.focus !== a.focus || b.fov !== a.fov || b.aspect !== a.aspect * this.aspect || b.near !== a.near || b.far !== a.far || b.zoom !== a.zoom || b.eyeSep !== this.eyeSep) {
        b.focus = a.focus;
        b.fov = a.fov;
        b.aspect = a.aspect * this.aspect;
        b.near = a.near;
        b.far = a.far;
        b.zoom = a.zoom;
        b.eyeSep = this.eyeSep;
        var c = a.projectionMatrix.clone(),
            d = b.eyeSep / 2,
            e = d * b.near / b.focus,
            f = b.near * Math.tan(P.DEG2RAD * b.fov * .5) / b.zoom;
        Gi.elements[12] = -d;
        Fi.elements[12] = d;
        d = -f * b.aspect + e;
        var g = f * b.aspect + e;
        c.elements[0] = 2 * b.near / (g - d);
        c.elements[8] = (g + d) / (g - d);
        this.cameraL.projectionMatrix.copy(c);
        d = -f * b.aspect - e;
        g = f * b.aspect - e;
        c.elements[0] = 2 * b.near / (g - d);
        c.elements[8] = (g + d) / (g - d);
        this.cameraR.projectionMatrix.copy(c);
      }

      this.cameraL.matrixWorld.copy(a.matrixWorld).multiply(Gi);
      this.cameraR.matrixWorld.copy(a.matrixWorld).multiply(Fi);
    }
  });
  Object.assign(zg.prototype, {
    start: function () {
      this.oldTime = this.startTime = ("undefined" === typeof performance ? Date : performance).now();
      this.elapsedTime = 0;
      this.running = !0;
    },
    stop: function () {
      this.getElapsedTime();
      this.autoStart = this.running = !1;
    },
    getElapsedTime: function () {
      this.getDelta();
      return this.elapsedTime;
    },
    getDelta: function () {
      var a = 0;
      if (this.autoStart && !this.running) return this.start(), 0;

      if (this.running) {
        var b = ("undefined" === typeof performance ? Date : performance).now();
        a = (b - this.oldTime) / 1E3;
        this.oldTime = b;
        this.elapsedTime += a;
      }

      return a;
    }
  });
  var tc = new n(),
      Hi = new wa(),
      Hk = new n(),
      uc = new n();
  Ag.prototype = Object.assign(Object.create(E.prototype), {
    constructor: Ag,
    getInput: function () {
      return this.gain;
    },
    removeFilter: function () {
      null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null);
      return this;
    },
    getFilter: function () {
      return this.filter;
    },
    setFilter: function (a) {
      null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination);
      this.filter = a;
      this.gain.connect(this.filter);
      this.filter.connect(this.context.destination);
      return this;
    },
    getMasterVolume: function () {
      return this.gain.gain.value;
    },
    setMasterVolume: function (a) {
      this.gain.gain.setTargetAtTime(a, this.context.currentTime, .01);
      return this;
    },
    updateMatrixWorld: function (a) {
      E.prototype.updateMatrixWorld.call(this, a);
      a = this.context.listener;
      var b = this.up;
      this.timeDelta = this._clock.getDelta();
      this.matrixWorld.decompose(tc, Hi, Hk);
      uc.set(0, 0, -1).applyQuaternion(Hi);

      if (a.positionX) {
        var c = this.context.currentTime + this.timeDelta;
        a.positionX.linearRampToValueAtTime(tc.x, c);
        a.positionY.linearRampToValueAtTime(tc.y, c);
        a.positionZ.linearRampToValueAtTime(tc.z, c);
        a.forwardX.linearRampToValueAtTime(uc.x, c);
        a.forwardY.linearRampToValueAtTime(uc.y, c);
        a.forwardZ.linearRampToValueAtTime(uc.z, c);
        a.upX.linearRampToValueAtTime(b.x, c);
        a.upY.linearRampToValueAtTime(b.y, c);
        a.upZ.linearRampToValueAtTime(b.z, c);
      } else a.setPosition(tc.x, tc.y, tc.z), a.setOrientation(uc.x, uc.y, uc.z, b.x, b.y, b.z);
    }
  });
  cd.prototype = Object.assign(Object.create(E.prototype), {
    constructor: cd,
    getOutput: function () {
      return this.gain;
    },
    setNodeSource: function (a) {
      this.hasPlaybackControl = !1;
      this.sourceType = "audioNode";
      this.source = a;
      this.connect();
      return this;
    },
    setMediaElementSource: function (a) {
      this.hasPlaybackControl = !1;
      this.sourceType = "mediaNode";
      this.source = this.context.createMediaElementSource(a);
      this.connect();
      return this;
    },
    setMediaStreamSource: function (a) {
      this.hasPlaybackControl = !1;
      this.sourceType = "mediaStreamNode";
      this.source = this.context.createMediaStreamSource(a);
      this.connect();
      return this;
    },
    setBuffer: function (a) {
      this.buffer = a;
      this.sourceType = "buffer";
      this.autoplay && this.play();
      return this;
    },
    play: function (a) {
      void 0 === a && (a = 0);
      if (!0 === this.isPlaying) console.warn("THREE.Audio: Audio is already playing.");else if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");else return this._startedAt = this.context.currentTime + a, a = this.context.createBufferSource(), a.buffer = this.buffer, a.loop = this.loop, a.loopStart = this.loopStart, a.loopEnd = this.loopEnd, a.onended = this.onEnded.bind(this), a.start(this._startedAt, this._pausedAt + this.offset, this.duration), this.isPlaying = !0, this.source = a, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
    },
    pause: function () {
      if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");else return !0 === this.isPlaying && (this._pausedAt = (this.context.currentTime - this._startedAt) * this.playbackRate, this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
    },
    stop: function () {
      if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");else return this._pausedAt = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
    },
    connect: function () {
      if (0 < this.filters.length) {
        this.source.connect(this.filters[0]);

        for (var a = 1, b = this.filters.length; a < b; a++) this.filters[a - 1].connect(this.filters[a]);

        this.filters[this.filters.length - 1].connect(this.getOutput());
      } else this.source.connect(this.getOutput());

      return this;
    },
    disconnect: function () {
      if (0 < this.filters.length) {
        this.source.disconnect(this.filters[0]);

        for (var a = 1, b = this.filters.length; a < b; a++) this.filters[a - 1].disconnect(this.filters[a]);

        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else this.source.disconnect(this.getOutput());

      return this;
    },
    getFilters: function () {
      return this.filters;
    },
    setFilters: function (a) {
      a || (a = []);
      !0 === this.isPlaying ? (this.disconnect(), this.filters = a, this.connect()) : this.filters = a;
      return this;
    },
    setDetune: function (a) {
      this.detune = a;
      if (void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this;
    },
    getDetune: function () {
      return this.detune;
    },
    getFilter: function () {
      return this.getFilters()[0];
    },
    setFilter: function (a) {
      return this.setFilters(a ? [a] : []);
    },
    setPlaybackRate: function (a) {
      if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");else return this.playbackRate = a, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
    },
    getPlaybackRate: function () {
      return this.playbackRate;
    },
    onEnded: function () {
      this.isPlaying = !1;
    },
    getLoop: function () {
      return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
    },
    setLoop: function (a) {
      if (!1 === this.hasPlaybackControl) console.warn("THREE.Audio: this Audio has no playback control.");else return this.loop = a, !0 === this.isPlaying && (this.source.loop = this.loop), this;
    },
    setLoopStart: function (a) {
      this.loopStart = a;
      return this;
    },
    setLoopEnd: function (a) {
      this.loopEnd = a;
      return this;
    },
    getVolume: function () {
      return this.gain.gain.value;
    },
    setVolume: function (a) {
      this.gain.gain.setTargetAtTime(a, this.context.currentTime, .01);
      return this;
    }
  });
  var vc = new n(),
      Ii = new wa(),
      Ik = new n(),
      wc = new n();
  Cg.prototype = Object.assign(Object.create(cd.prototype), {
    constructor: Cg,
    getOutput: function () {
      return this.panner;
    },
    getRefDistance: function () {
      return this.panner.refDistance;
    },
    setRefDistance: function (a) {
      this.panner.refDistance = a;
      return this;
    },
    getRolloffFactor: function () {
      return this.panner.rolloffFactor;
    },
    setRolloffFactor: function (a) {
      this.panner.rolloffFactor = a;
      return this;
    },
    getDistanceModel: function () {
      return this.panner.distanceModel;
    },
    setDistanceModel: function (a) {
      this.panner.distanceModel = a;
      return this;
    },
    getMaxDistance: function () {
      return this.panner.maxDistance;
    },
    setMaxDistance: function (a) {
      this.panner.maxDistance = a;
      return this;
    },
    setDirectionalCone: function (a, b, c) {
      this.panner.coneInnerAngle = a;
      this.panner.coneOuterAngle = b;
      this.panner.coneOuterGain = c;
      return this;
    },
    updateMatrixWorld: function (a) {
      E.prototype.updateMatrixWorld.call(this, a);
      if (!0 !== this.hasPlaybackControl || !1 !== this.isPlaying) if (this.matrixWorld.decompose(vc, Ii, Ik), wc.set(0, 0, 1).applyQuaternion(Ii), a = this.panner, a.positionX) {
        var b = this.context.currentTime + this.listener.timeDelta;
        a.positionX.linearRampToValueAtTime(vc.x, b);
        a.positionY.linearRampToValueAtTime(vc.y, b);
        a.positionZ.linearRampToValueAtTime(vc.z, b);
        a.orientationX.linearRampToValueAtTime(wc.x, b);
        a.orientationY.linearRampToValueAtTime(wc.y, b);
        a.orientationZ.linearRampToValueAtTime(wc.z, b);
      } else a.setPosition(vc.x, vc.y, vc.z), a.setOrientation(wc.x, wc.y, wc.z);
    }
  });
  Object.assign(Dg.prototype, {
    getFrequencyData: function () {
      this.analyser.getByteFrequencyData(this.data);
      return this.data;
    },
    getAverageFrequency: function () {
      for (var a = 0, b = this.getFrequencyData(), c = 0; c < b.length; c++) a += b[c];

      return a / b.length;
    }
  });
  Object.assign(Eg.prototype, {
    accumulate: function (a, b) {
      var c = this.buffer,
          d = this.valueSize;
      a = a * d + d;
      var e = this.cumulativeWeight;

      if (0 === e) {
        for (e = 0; e !== d; ++e) c[a + e] = c[e];

        e = b;
      } else e += b, this._mixBufferRegion(c, a, 0, b / e, d);

      this.cumulativeWeight = e;
    },
    apply: function (a) {
      var b = this.valueSize,
          c = this.buffer;
      a = a * b + b;
      var d = this.cumulativeWeight,
          e = this.binding;
      this.cumulativeWeight = 0;
      1 > d && this._mixBufferRegion(c, a, 3 * b, 1 - d, b);
      d = b;

      for (var f = b + b; d !== f; ++d) if (c[d] !== c[d + b]) {
        e.setValue(c, a);
        break;
      }
    },
    saveOriginalState: function () {
      var a = this.buffer,
          b = this.valueSize,
          c = 3 * b;
      this.binding.getValue(a, c);

      for (var d = b; d !== c; ++d) a[d] = a[c + d % b];

      this.cumulativeWeight = 0;
    },
    restoreOriginalState: function () {
      this.binding.setValue(this.buffer, 3 * this.valueSize);
    },
    _select: function (a, b, c, d, e) {
      if (.5 <= d) for (d = 0; d !== e; ++d) a[b + d] = a[c + d];
    },
    _slerp: function (a, b, c, d) {
      wa.slerpFlat(a, b, a, b, a, c, d);
    },
    _lerp: function (a, b, c, d, e) {
      for (var f = 1 - d, g = 0; g !== e; ++g) {
        var h = b + g;
        a[h] = a[h] * f + a[c + g] * d;
      }
    }
  });
  var Jk = /[\[\]\.:\/]/g,
      Kk = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
      Lk = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
      Mk = /(WCOD+)?/.source.replace("WCOD", Kk),
      Nk = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
      Ok = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
      Pk = new RegExp("^" + Lk + Mk + Nk + Ok + "$"),
      Qk = ["material", "materials", "bones"];
  Object.assign(bi.prototype, {
    getValue: function (a, b) {
      this.bind();
      var c = this._bindings[this._targetGroup.nCachedObjects_];
      void 0 !== c && c.getValue(a, b);
    },
    setValue: function (a, b) {
      for (var c = this._bindings, d = this._targetGroup.nCachedObjects_, e = c.length; d !== e; ++d) c[d].setValue(a, b);
    },
    bind: function () {
      for (var a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b) a[b].bind();
    },
    unbind: function () {
      for (var a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b) a[b].unbind();
    }
  });
  Object.assign(ya, {
    Composite: bi,
    create: function (a, b, c) {
      return a && a.isAnimationObjectGroup ? new ya.Composite(a, b, c) : new ya(a, b, c);
    },
    sanitizeNodeName: function (a) {
      return a.replace(/\s/g, "_").replace(Jk, "");
    },
    parseTrackName: function (a) {
      var b = Pk.exec(a);
      if (!b) throw Error("PropertyBinding: Cannot parse trackName: " + a);
      b = {
        nodeName: b[2],
        objectName: b[3],
        objectIndex: b[4],
        propertyName: b[5],
        propertyIndex: b[6]
      };
      var c = b.nodeName && b.nodeName.lastIndexOf(".");

      if (void 0 !== c && -1 !== c) {
        var d = b.nodeName.substring(c + 1);
        -1 !== Qk.indexOf(d) && (b.nodeName = b.nodeName.substring(0, c), b.objectName = d);
      }

      if (null === b.propertyName || 0 === b.propertyName.length) throw Error("PropertyBinding: can not parse propertyName from trackName: " + a);
      return b;
    },
    findNode: function (a, b) {
      if (!b || "" === b || "root" === b || "." === b || -1 === b || b === a.name || b === a.uuid) return a;

      if (a.skeleton) {
        var c = a.skeleton.getBoneByName(b);
        if (void 0 !== c) return c;
      }

      if (a.children) {
        var d = function (a) {
          for (var c = 0; c < a.length; c++) {
            var e = a[c];
            if (e.name === b || e.uuid === b || (e = d(e.children))) return e;
          }

          return null;
        };

        if (a = d(a.children)) return a;
      }

      return null;
    }
  });
  Object.assign(ya.prototype, {
    _getValue_unavailable: function () {},
    _setValue_unavailable: function () {},
    BindingType: {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3
    },
    Versioning: {
      None: 0,
      NeedsUpdate: 1,
      MatrixWorldNeedsUpdate: 2
    },
    GetterByBindingType: [function (a, b) {
      a[b] = this.node[this.propertyName];
    }, function (a, b) {
      for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d) a[b++] = c[d];
    }, function (a, b) {
      a[b] = this.resolvedProperty[this.propertyIndex];
    }, function (a, b) {
      this.resolvedProperty.toArray(a, b);
    }],
    SetterByBindingTypeAndVersioning: [[function (a, b) {
      this.targetObject[this.propertyName] = a[b];
    }, function (a, b) {
      this.targetObject[this.propertyName] = a[b];
      this.targetObject.needsUpdate = !0;
    }, function (a, b) {
      this.targetObject[this.propertyName] = a[b];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }], [function (a, b) {
      for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d) c[d] = a[b++];
    }, function (a, b) {
      for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d) c[d] = a[b++];

      this.targetObject.needsUpdate = !0;
    }, function (a, b) {
      for (var c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d) c[d] = a[b++];

      this.targetObject.matrixWorldNeedsUpdate = !0;
    }], [function (a, b) {
      this.resolvedProperty[this.propertyIndex] = a[b];
    }, function (a, b) {
      this.resolvedProperty[this.propertyIndex] = a[b];
      this.targetObject.needsUpdate = !0;
    }, function (a, b) {
      this.resolvedProperty[this.propertyIndex] = a[b];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }], [function (a, b) {
      this.resolvedProperty.fromArray(a, b);
    }, function (a, b) {
      this.resolvedProperty.fromArray(a, b);
      this.targetObject.needsUpdate = !0;
    }, function (a, b) {
      this.resolvedProperty.fromArray(a, b);
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }]],
    getValue: function (a, b) {
      this.bind();
      this.getValue(a, b);
    },
    setValue: function (a, b) {
      this.bind();
      this.setValue(a, b);
    },
    bind: function () {
      var a = this.node,
          b = this.parsedPath,
          c = b.objectName,
          d = b.propertyName,
          e = b.propertyIndex;
      a || (this.node = a = ya.findNode(this.rootNode, b.nodeName) || this.rootNode);
      this.getValue = this._getValue_unavailable;
      this.setValue = this._setValue_unavailable;

      if (a) {
        if (c) {
          var f = b.objectIndex;

          switch (c) {
            case "materials":
              if (!a.material) {
                console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                return;
              }

              if (!a.material.materials) {
                console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                return;
              }

              a = a.material.materials;
              break;

            case "bones":
              if (!a.skeleton) {
                console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                return;
              }

              a = a.skeleton.bones;

              for (c = 0; c < a.length; c++) if (a[c].name === f) {
                f = c;
                break;
              }

              break;

            default:
              if (void 0 === a[c]) {
                console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                return;
              }

              a = a[c];
          }

          if (void 0 !== f) {
            if (void 0 === a[f]) {
              console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, a);
              return;
            }

            a = a[f];
          }
        }

        f = a[d];
        if (void 0 === f) console.error("THREE.PropertyBinding: Trying to update property for track: " + b.nodeName + "." + d + " but it wasn't found.", a);else {
          b = this.Versioning.None;
          this.targetObject = a;
          void 0 !== a.needsUpdate ? b = this.Versioning.NeedsUpdate : void 0 !== a.matrixWorldNeedsUpdate && (b = this.Versioning.MatrixWorldNeedsUpdate);
          c = this.BindingType.Direct;

          if (void 0 !== e) {
            if ("morphTargetInfluences" === d) {
              if (!a.geometry) {
                console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                return;
              }

              if (a.geometry.isBufferGeometry) {
                if (!a.geometry.morphAttributes) {
                  console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                  return;
                }

                for (c = 0; c < this.node.geometry.morphAttributes.position.length; c++) if (a.geometry.morphAttributes.position[c].name === e) {
                  e = c;
                  break;
                }
              } else {
                if (!a.geometry.morphTargets) {
                  console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                  return;
                }

                for (c = 0; c < this.node.geometry.morphTargets.length; c++) if (a.geometry.morphTargets[c].name === e) {
                  e = c;
                  break;
                }
              }
            }

            c = this.BindingType.ArrayElement;
            this.resolvedProperty = f;
            this.propertyIndex = e;
          } else void 0 !== f.fromArray && void 0 !== f.toArray ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = f) : Array.isArray(f) ? (c = this.BindingType.EntireArray, this.resolvedProperty = f) : this.propertyName = d;

          this.getValue = this.GetterByBindingType[c];
          this.setValue = this.SetterByBindingTypeAndVersioning[c][b];
        }
      } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
    },
    unbind: function () {
      this.node = null;
      this.getValue = this._getValue_unbound;
      this.setValue = this._setValue_unbound;
    }
  });
  Object.assign(ya.prototype, {
    _getValue_unbound: ya.prototype.getValue,
    _setValue_unbound: ya.prototype.setValue
  });
  Object.assign(ci.prototype, {
    isAnimationObjectGroup: !0,
    add: function () {
      for (var a = this._objects, b = a.length, c = this.nCachedObjects_, d = this._indicesByUUID, e = this._paths, f = this._parsedPaths, g = this._bindings, h = g.length, k = void 0, m = 0, n = arguments.length; m !== n; ++m) {
        var q = arguments[m],
            u = q.uuid,
            p = d[u];

        if (void 0 === p) {
          p = b++;
          d[u] = p;
          a.push(q);
          u = 0;

          for (var t = h; u !== t; ++u) g[u].push(new ya(q, e[u], f[u]));
        } else if (p < c) {
          k = a[p];
          var v = --c;
          t = a[v];
          d[t.uuid] = p;
          a[p] = t;
          d[u] = v;
          a[v] = q;
          u = 0;

          for (t = h; u !== t; ++u) {
            var y = g[u],
                w = y[p];
            y[p] = y[v];
            void 0 === w && (w = new ya(q, e[u], f[u]));
            y[v] = w;
          }
        } else a[p] !== k && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
      }

      this.nCachedObjects_ = c;
    },
    remove: function () {
      for (var a = this._objects, b = this.nCachedObjects_, c = this._indicesByUUID, d = this._bindings, e = d.length, f = 0, g = arguments.length; f !== g; ++f) {
        var h = arguments[f],
            k = h.uuid,
            m = c[k];

        if (void 0 !== m && m >= b) {
          var n = b++,
              q = a[n];
          c[q.uuid] = m;
          a[m] = q;
          c[k] = n;
          a[n] = h;
          h = 0;

          for (k = e; h !== k; ++h) {
            q = d[h];
            var u = q[m];
            q[m] = q[n];
            q[n] = u;
          }
        }
      }

      this.nCachedObjects_ = b;
    },
    uncache: function () {
      for (var a = this._objects, b = a.length, c = this.nCachedObjects_, d = this._indicesByUUID, e = this._bindings, f = e.length, g = 0, h = arguments.length; g !== h; ++g) {
        var k = arguments[g].uuid,
            m = d[k];
        if (void 0 !== m) if (delete d[k], m < c) {
          k = --c;
          var n = a[k],
              q = --b,
              u = a[q];
          d[n.uuid] = m;
          a[m] = n;
          d[u.uuid] = k;
          a[k] = u;
          a.pop();
          n = 0;

          for (u = f; n !== u; ++n) {
            var p = e[n],
                t = p[q];
            p[m] = p[k];
            p[k] = t;
            p.pop();
          }
        } else for (q = --b, u = a[q], d[u.uuid] = m, a[m] = u, a.pop(), n = 0, u = f; n !== u; ++n) p = e[n], p[m] = p[q], p.pop();
      }

      this.nCachedObjects_ = c;
    },
    subscribe_: function (a, b) {
      var c = this._bindingsIndicesByPath,
          d = c[a],
          e = this._bindings;
      if (void 0 !== d) return e[d];
      var f = this._paths,
          g = this._parsedPaths,
          h = this._objects,
          k = this.nCachedObjects_,
          m = Array(h.length);
      d = e.length;
      c[a] = d;
      f.push(a);
      g.push(b);
      e.push(m);
      c = k;

      for (d = h.length; c !== d; ++c) m[c] = new ya(h[c], a, b);

      return m;
    },
    unsubscribe_: function (a) {
      var b = this._bindingsIndicesByPath,
          c = b[a];

      if (void 0 !== c) {
        var d = this._paths,
            e = this._parsedPaths,
            f = this._bindings,
            g = f.length - 1,
            h = f[g];
        b[a[g]] = c;
        f[c] = h;
        f.pop();
        e[c] = e[g];
        e.pop();
        d[c] = d[g];
        d.pop();
      }
    }
  });
  Object.assign(di.prototype, {
    play: function () {
      this._mixer._activateAction(this);

      return this;
    },
    stop: function () {
      this._mixer._deactivateAction(this);

      return this.reset();
    },
    reset: function () {
      this.paused = !1;
      this.enabled = !0;
      this.time = 0;
      this._loopCount = -1;
      this._startTime = null;
      return this.stopFading().stopWarping();
    },
    isRunning: function () {
      return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
    },
    isScheduled: function () {
      return this._mixer._isActiveAction(this);
    },
    startAt: function (a) {
      this._startTime = a;
      return this;
    },
    setLoop: function (a, b) {
      this.loop = a;
      this.repetitions = b;
      return this;
    },
    setEffectiveWeight: function (a) {
      this.weight = a;
      this._effectiveWeight = this.enabled ? a : 0;
      return this.stopFading();
    },
    getEffectiveWeight: function () {
      return this._effectiveWeight;
    },
    fadeIn: function (a) {
      return this._scheduleFading(a, 0, 1);
    },
    fadeOut: function (a) {
      return this._scheduleFading(a, 1, 0);
    },
    crossFadeFrom: function (a, b, c) {
      a.fadeOut(b);
      this.fadeIn(b);

      if (c) {
        c = this._clip.duration;
        var d = a._clip.duration,
            e = c / d;
        a.warp(1, d / c, b);
        this.warp(e, 1, b);
      }

      return this;
    },
    crossFadeTo: function (a, b, c) {
      return a.crossFadeFrom(this, b, c);
    },
    stopFading: function () {
      var a = this._weightInterpolant;
      null !== a && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(a));
      return this;
    },
    setEffectiveTimeScale: function (a) {
      this.timeScale = a;
      this._effectiveTimeScale = this.paused ? 0 : a;
      return this.stopWarping();
    },
    getEffectiveTimeScale: function () {
      return this._effectiveTimeScale;
    },
    setDuration: function (a) {
      this.timeScale = this._clip.duration / a;
      return this.stopWarping();
    },
    syncWith: function (a) {
      this.time = a.time;
      this.timeScale = a.timeScale;
      return this.stopWarping();
    },
    halt: function (a) {
      return this.warp(this._effectiveTimeScale, 0, a);
    },
    warp: function (a, b, c) {
      var d = this._mixer,
          e = d.time,
          f = this._timeScaleInterpolant,
          g = this.timeScale;
      null === f && (this._timeScaleInterpolant = f = d._lendControlInterpolant());
      d = f.parameterPositions;
      f = f.sampleValues;
      d[0] = e;
      d[1] = e + c;
      f[0] = a / g;
      f[1] = b / g;
      return this;
    },
    stopWarping: function () {
      var a = this._timeScaleInterpolant;
      null !== a && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(a));
      return this;
    },
    getMixer: function () {
      return this._mixer;
    },
    getClip: function () {
      return this._clip;
    },
    getRoot: function () {
      return this._localRoot || this._mixer._root;
    },
    _update: function (a, b, c, d) {
      if (this.enabled) {
        var e = this._startTime;

        if (null !== e) {
          b = (a - e) * c;
          if (0 > b || 0 === c) return;
          this._startTime = null;
          b *= c;
        }

        b *= this._updateTimeScale(a);
        c = this._updateTime(b);
        a = this._updateWeight(a);

        if (0 < a) {
          b = this._interpolants;
          e = this._propertyBindings;

          for (var f = 0, g = b.length; f !== g; ++f) b[f].evaluate(c), e[f].accumulate(d, a);
        }
      } else this._updateWeight(a);
    },
    _updateWeight: function (a) {
      var b = 0;

      if (this.enabled) {
        b = this.weight;
        var c = this._weightInterpolant;

        if (null !== c) {
          var d = c.evaluate(a)[0];
          b *= d;
          a > c.parameterPositions[1] && (this.stopFading(), 0 === d && (this.enabled = !1));
        }
      }

      return this._effectiveWeight = b;
    },
    _updateTimeScale: function (a) {
      var b = 0;

      if (!this.paused) {
        b = this.timeScale;
        var c = this._timeScaleInterpolant;

        if (null !== c) {
          var d = c.evaluate(a)[0];
          b *= d;
          a > c.parameterPositions[1] && (this.stopWarping(), 0 === b ? this.paused = !0 : this.timeScale = b);
        }
      }

      return this._effectiveTimeScale = b;
    },
    _updateTime: function (a) {
      var b = this.time + a,
          c = this._clip.duration,
          d = this.loop,
          e = this._loopCount,
          f = 2202 === d;
      if (0 === a) return -1 === e ? b : f && 1 === (e & 1) ? c - b : b;
      if (2200 === d) a: {
        if (-1 === e && (this._loopCount = 0, this._setEndings(!0, !0, !1)), b >= c) b = c;else if (0 > b) b = 0;else {
          this.time = b;
          break a;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1;
        this.time = b;

        this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: 0 > a ? -1 : 1
        });
      } else {
        -1 === e && (0 <= a ? (e = 0, this._setEndings(!0, 0 === this.repetitions, f)) : this._setEndings(0 === this.repetitions, !0, f));

        if (b >= c || 0 > b) {
          d = Math.floor(b / c);
          b -= c * d;
          e += Math.abs(d);
          var g = this.repetitions - e;
          0 >= g ? (this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = b = 0 < a ? c : 0, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: 0 < a ? 1 : -1
          })) : (1 === g ? (a = 0 > a, this._setEndings(a, !a, f)) : this._setEndings(!1, !1, f), this._loopCount = e, this.time = b, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: d
          }));
        } else this.time = b;

        if (f && 1 === (e & 1)) return c - b;
      }
      return b;
    },
    _setEndings: function (a, b, c) {
      var d = this._interpolantSettings;
      c ? (d.endingStart = 2401, d.endingEnd = 2401) : (d.endingStart = a ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, d.endingEnd = b ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402);
    },
    _scheduleFading: function (a, b, c) {
      var d = this._mixer,
          e = d.time,
          f = this._weightInterpolant;
      null === f && (this._weightInterpolant = f = d._lendControlInterpolant());
      d = f.parameterPositions;
      f = f.sampleValues;
      d[0] = e;
      f[0] = b;
      d[1] = e + a;
      f[1] = c;
      return this;
    }
  });
  Fg.prototype = Object.assign(Object.create(Aa.prototype), {
    constructor: Fg,
    _bindAction: function (a, b) {
      var c = a._localRoot || this._root,
          d = a._clip.tracks,
          e = d.length,
          f = a._propertyBindings;
      a = a._interpolants;
      var g = c.uuid,
          h = this._bindingsByRootAndName,
          k = h[g];
      void 0 === k && (k = {}, h[g] = k);

      for (h = 0; h !== e; ++h) {
        var m = d[h],
            n = m.name,
            q = k[n];

        if (void 0 === q) {
          q = f[h];

          if (void 0 !== q) {
            null === q._cacheIndex && (++q.referenceCount, this._addInactiveBinding(q, g, n));
            continue;
          }

          q = new Eg(ya.create(c, n, b && b._propertyBindings[h].binding.parsedPath), m.ValueTypeName, m.getValueSize());
          ++q.referenceCount;

          this._addInactiveBinding(q, g, n);
        }

        f[h] = q;
        a[h].resultBuffer = q.buffer;
      }
    },
    _activateAction: function (a) {
      if (!this._isActiveAction(a)) {
        if (null === a._cacheIndex) {
          var b = (a._localRoot || this._root).uuid,
              c = a._clip.uuid,
              d = this._actionsByClip[c];

          this._bindAction(a, d && d.knownActions[0]);

          this._addInactiveAction(a, c, b);
        }

        b = a._propertyBindings;
        c = 0;

        for (d = b.length; c !== d; ++c) {
          var e = b[c];
          0 === e.useCount++ && (this._lendBinding(e), e.saveOriginalState());
        }

        this._lendAction(a);
      }
    },
    _deactivateAction: function (a) {
      if (this._isActiveAction(a)) {
        for (var b = a._propertyBindings, c = 0, d = b.length; c !== d; ++c) {
          var e = b[c];
          0 === --e.useCount && (e.restoreOriginalState(), this._takeBackBinding(e));
        }

        this._takeBackAction(a);
      }
    },
    _initMemoryManager: function () {
      this._actions = [];
      this._nActiveActions = 0;
      this._actionsByClip = {};
      this._bindings = [];
      this._nActiveBindings = 0;
      this._bindingsByRootAndName = {};
      this._controlInterpolants = [];
      this._nActiveControlInterpolants = 0;
      var a = this;
      this.stats = {
        actions: {
          get total() {
            return a._actions.length;
          },

          get inUse() {
            return a._nActiveActions;
          }

        },
        bindings: {
          get total() {
            return a._bindings.length;
          },

          get inUse() {
            return a._nActiveBindings;
          }

        },
        controlInterpolants: {
          get total() {
            return a._controlInterpolants.length;
          },

          get inUse() {
            return a._nActiveControlInterpolants;
          }

        }
      };
    },
    _isActiveAction: function (a) {
      a = a._cacheIndex;
      return null !== a && a < this._nActiveActions;
    },
    _addInactiveAction: function (a, b, c) {
      var d = this._actions,
          e = this._actionsByClip,
          f = e[b];
      void 0 === f ? (f = {
        knownActions: [a],
        actionByRoot: {}
      }, a._byClipCacheIndex = 0, e[b] = f) : (b = f.knownActions, a._byClipCacheIndex = b.length, b.push(a));
      a._cacheIndex = d.length;
      d.push(a);
      f.actionByRoot[c] = a;
    },
    _removeInactiveAction: function (a) {
      var b = this._actions,
          c = b[b.length - 1],
          d = a._cacheIndex;
      c._cacheIndex = d;
      b[d] = c;
      b.pop();
      a._cacheIndex = null;
      b = a._clip.uuid;
      c = this._actionsByClip;
      d = c[b];
      var e = d.knownActions,
          f = e[e.length - 1],
          g = a._byClipCacheIndex;
      f._byClipCacheIndex = g;
      e[g] = f;
      e.pop();
      a._byClipCacheIndex = null;
      delete d.actionByRoot[(a._localRoot || this._root).uuid];
      0 === e.length && delete c[b];

      this._removeInactiveBindingsForAction(a);
    },
    _removeInactiveBindingsForAction: function (a) {
      a = a._propertyBindings;

      for (var b = 0, c = a.length; b !== c; ++b) {
        var d = a[b];
        0 === --d.referenceCount && this._removeInactiveBinding(d);
      }
    },
    _lendAction: function (a) {
      var b = this._actions,
          c = a._cacheIndex,
          d = this._nActiveActions++,
          e = b[d];
      a._cacheIndex = d;
      b[d] = a;
      e._cacheIndex = c;
      b[c] = e;
    },
    _takeBackAction: function (a) {
      var b = this._actions,
          c = a._cacheIndex,
          d = --this._nActiveActions,
          e = b[d];
      a._cacheIndex = d;
      b[d] = a;
      e._cacheIndex = c;
      b[c] = e;
    },
    _addInactiveBinding: function (a, b, c) {
      var d = this._bindingsByRootAndName,
          e = d[b],
          f = this._bindings;
      void 0 === e && (e = {}, d[b] = e);
      e[c] = a;
      a._cacheIndex = f.length;
      f.push(a);
    },
    _removeInactiveBinding: function (a) {
      var b = this._bindings,
          c = a.binding,
          d = c.rootNode.uuid;
      c = c.path;
      var e = this._bindingsByRootAndName,
          f = e[d],
          g = b[b.length - 1];
      a = a._cacheIndex;
      g._cacheIndex = a;
      b[a] = g;
      b.pop();
      delete f[c];
      0 === Object.keys(f).length && delete e[d];
    },
    _lendBinding: function (a) {
      var b = this._bindings,
          c = a._cacheIndex,
          d = this._nActiveBindings++,
          e = b[d];
      a._cacheIndex = d;
      b[d] = a;
      e._cacheIndex = c;
      b[c] = e;
    },
    _takeBackBinding: function (a) {
      var b = this._bindings,
          c = a._cacheIndex,
          d = --this._nActiveBindings,
          e = b[d];
      a._cacheIndex = d;
      b[d] = a;
      e._cacheIndex = c;
      b[c] = e;
    },
    _lendControlInterpolant: function () {
      var a = this._controlInterpolants,
          b = this._nActiveControlInterpolants++,
          c = a[b];
      void 0 === c && (c = new ke(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), c.__cacheIndex = b, a[b] = c);
      return c;
    },
    _takeBackControlInterpolant: function (a) {
      var b = this._controlInterpolants,
          c = a.__cacheIndex,
          d = --this._nActiveControlInterpolants,
          e = b[d];
      a.__cacheIndex = d;
      b[d] = a;
      e.__cacheIndex = c;
      b[c] = e;
    },
    _controlInterpolantsResultBuffer: new Float32Array(1),
    clipAction: function (a, b) {
      var c = b || this._root,
          d = c.uuid;
      c = "string" === typeof a ? Ma.findByName(c, a) : a;
      a = null !== c ? c.uuid : a;
      var e = this._actionsByClip[a],
          f = null;

      if (void 0 !== e) {
        f = e.actionByRoot[d];
        if (void 0 !== f) return f;
        f = e.knownActions[0];
        null === c && (c = f._clip);
      }

      if (null === c) return null;
      b = new di(this, c, b);

      this._bindAction(b, f);

      this._addInactiveAction(b, a, d);

      return b;
    },
    existingAction: function (a, b) {
      var c = b || this._root;
      b = c.uuid;
      c = "string" === typeof a ? Ma.findByName(c, a) : a;
      a = this._actionsByClip[c ? c.uuid : a];
      return void 0 !== a ? a.actionByRoot[b] || null : null;
    },
    stopAllAction: function () {
      for (var a = this._actions, b = this._nActiveActions, c = this._bindings, d = this._nActiveBindings, e = this._nActiveBindings = this._nActiveActions = 0; e !== b; ++e) a[e].reset();

      for (e = 0; e !== d; ++e) c[e].useCount = 0;

      return this;
    },
    update: function (a) {
      a *= this.timeScale;

      for (var b = this._actions, c = this._nActiveActions, d = this.time += a, e = Math.sign(a), f = this._accuIndex ^= 1, g = 0; g !== c; ++g) b[g]._update(d, a, e, f);

      a = this._bindings;
      b = this._nActiveBindings;

      for (g = 0; g !== b; ++g) a[g].apply(f);

      return this;
    },
    setTime: function (a) {
      for (var b = this.time = 0; b < this._actions.length; b++) this._actions[b].time = 0;

      return this.update(a);
    },
    getRoot: function () {
      return this._root;
    },
    uncacheClip: function (a) {
      var b = this._actions;
      a = a.uuid;
      var c = this._actionsByClip,
          d = c[a];

      if (void 0 !== d) {
        d = d.knownActions;

        for (var e = 0, f = d.length; e !== f; ++e) {
          var g = d[e];

          this._deactivateAction(g);

          var h = g._cacheIndex,
              k = b[b.length - 1];
          g._cacheIndex = null;
          g._byClipCacheIndex = null;
          k._cacheIndex = h;
          b[h] = k;
          b.pop();

          this._removeInactiveBindingsForAction(g);
        }

        delete c[a];
      }
    },
    uncacheRoot: function (a) {
      a = a.uuid;
      var b = this._actionsByClip;

      for (d in b) {
        var c = b[d].actionByRoot[a];
        void 0 !== c && (this._deactivateAction(c), this._removeInactiveAction(c));
      }

      var d = this._bindingsByRootAndName[a];
      if (void 0 !== d) for (var e in d) a = d[e], a.restoreOriginalState(), this._removeInactiveBinding(a);
    },
    uncacheAction: function (a, b) {
      a = this.existingAction(a, b);
      null !== a && (this._deactivateAction(a), this._removeInactiveAction(a));
    }
  });

  pf.prototype.clone = function () {
    return new pf(void 0 === this.value.clone ? this.value : this.value.clone());
  };

  Gg.prototype = Object.assign(Object.create(pb.prototype), {
    constructor: Gg,
    isInstancedInterleavedBuffer: !0,
    copy: function (a) {
      pb.prototype.copy.call(this, a);
      this.meshPerAttribute = a.meshPerAttribute;
      return this;
    }
  });
  Object.assign(ei.prototype, {
    linePrecision: 1,
    set: function (a, b) {
      this.ray.set(a, b);
    },
    setFromCamera: function (a, b) {
      b && b.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(b.matrixWorld), this.ray.direction.set(a.x, a.y, .5).unproject(b).sub(this.ray.origin).normalize(), this.camera = b) : b && b.isOrthographicCamera ? (this.ray.origin.set(a.x, a.y, (b.near + b.far) / (b.near - b.far)).unproject(b), this.ray.direction.set(0, 0, -1).transformDirection(b.matrixWorld), this.camera = b) : console.error("THREE.Raycaster: Unsupported camera type.");
    },
    intersectObject: function (a, b, c) {
      c = c || [];
      Hg(a, this, c, b);
      c.sort(fi);
      return c;
    },
    intersectObjects: function (a, b, c) {
      c = c || [];
      if (!1 === Array.isArray(a)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), c;

      for (var d = 0, e = a.length; d < e; d++) Hg(a[d], this, c, b);

      c.sort(fi);
      return c;
    }
  });
  Object.assign(gi.prototype, {
    set: function (a, b, c) {
      this.radius = a;
      this.phi = b;
      this.theta = c;
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      this.radius = a.radius;
      this.phi = a.phi;
      this.theta = a.theta;
      return this;
    },
    makeSafe: function () {
      this.phi = Math.max(1E-6, Math.min(Math.PI - 1E-6, this.phi));
      return this;
    },
    setFromVector3: function (a) {
      return this.setFromCartesianCoords(a.x, a.y, a.z);
    },
    setFromCartesianCoords: function (a, b, c) {
      this.radius = Math.sqrt(a * a + b * b + c * c);
      0 === this.radius ? this.phi = this.theta = 0 : (this.theta = Math.atan2(a, c), this.phi = Math.acos(P.clamp(b / this.radius, -1, 1)));
      return this;
    }
  });
  Object.assign(hi.prototype, {
    set: function (a, b, c) {
      this.radius = a;
      this.theta = b;
      this.y = c;
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      this.radius = a.radius;
      this.theta = a.theta;
      this.y = a.y;
      return this;
    },
    setFromVector3: function (a) {
      return this.setFromCartesianCoords(a.x, a.y, a.z);
    },
    setFromCartesianCoords: function (a, b, c) {
      this.radius = Math.sqrt(a * a + c * c);
      this.theta = Math.atan2(a, c);
      this.y = b;
      return this;
    }
  });
  var Ji = new B();
  Object.assign(Ig.prototype, {
    set: function (a, b) {
      this.min.copy(a);
      this.max.copy(b);
      return this;
    },
    setFromPoints: function (a) {
      this.makeEmpty();

      for (var b = 0, c = a.length; b < c; b++) this.expandByPoint(a[b]);

      return this;
    },
    setFromCenterAndSize: function (a, b) {
      b = Ji.copy(b).multiplyScalar(.5);
      this.min.copy(a).sub(b);
      this.max.copy(a).add(b);
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      this.min.copy(a.min);
      this.max.copy(a.max);
      return this;
    },
    makeEmpty: function () {
      this.min.x = this.min.y = Infinity;
      this.max.x = this.max.y = -Infinity;
      return this;
    },
    isEmpty: function () {
      return this.max.x < this.min.x || this.max.y < this.min.y;
    },
    getCenter: function (a) {
      void 0 === a && (console.warn("THREE.Box2: .getCenter() target is now required"), a = new B());
      return this.isEmpty() ? a.set(0, 0) : a.addVectors(this.min, this.max).multiplyScalar(.5);
    },
    getSize: function (a) {
      void 0 === a && (console.warn("THREE.Box2: .getSize() target is now required"), a = new B());
      return this.isEmpty() ? a.set(0, 0) : a.subVectors(this.max, this.min);
    },
    expandByPoint: function (a) {
      this.min.min(a);
      this.max.max(a);
      return this;
    },
    expandByVector: function (a) {
      this.min.sub(a);
      this.max.add(a);
      return this;
    },
    expandByScalar: function (a) {
      this.min.addScalar(-a);
      this.max.addScalar(a);
      return this;
    },
    containsPoint: function (a) {
      return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ? !1 : !0;
    },
    containsBox: function (a) {
      return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y;
    },
    getParameter: function (a, b) {
      void 0 === b && (console.warn("THREE.Box2: .getParameter() target is now required"), b = new B());
      return b.set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y));
    },
    intersectsBox: function (a) {
      return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y ? !1 : !0;
    },
    clampPoint: function (a, b) {
      void 0 === b && (console.warn("THREE.Box2: .clampPoint() target is now required"), b = new B());
      return b.copy(a).clamp(this.min, this.max);
    },
    distanceToPoint: function (a) {
      return Ji.copy(a).clamp(this.min, this.max).sub(a).length();
    },
    intersect: function (a) {
      this.min.max(a.min);
      this.max.min(a.max);
      return this;
    },
    union: function (a) {
      this.min.min(a.min);
      this.max.max(a.max);
      return this;
    },
    translate: function (a) {
      this.min.add(a);
      this.max.add(a);
      return this;
    },
    equals: function (a) {
      return a.min.equals(this.min) && a.max.equals(this.max);
    }
  });
  var Ki = new n(),
      Nf = new n();
  Object.assign(Jg.prototype, {
    set: function (a, b) {
      this.start.copy(a);
      this.end.copy(b);
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      this.start.copy(a.start);
      this.end.copy(a.end);
      return this;
    },
    getCenter: function (a) {
      void 0 === a && (console.warn("THREE.Line3: .getCenter() target is now required"), a = new n());
      return a.addVectors(this.start, this.end).multiplyScalar(.5);
    },
    delta: function (a) {
      void 0 === a && (console.warn("THREE.Line3: .delta() target is now required"), a = new n());
      return a.subVectors(this.end, this.start);
    },
    distanceSq: function () {
      return this.start.distanceToSquared(this.end);
    },
    distance: function () {
      return this.start.distanceTo(this.end);
    },
    at: function (a, b) {
      void 0 === b && (console.warn("THREE.Line3: .at() target is now required"), b = new n());
      return this.delta(b).multiplyScalar(a).add(this.start);
    },
    closestPointToPointParameter: function (a, b) {
      Ki.subVectors(a, this.start);
      Nf.subVectors(this.end, this.start);
      a = Nf.dot(Nf);
      a = Nf.dot(Ki) / a;
      b && (a = P.clamp(a, 0, 1));
      return a;
    },
    closestPointToPoint: function (a, b, c) {
      a = this.closestPointToPointParameter(a, b);
      void 0 === c && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), c = new n());
      return this.delta(c).multiplyScalar(a).add(this.start);
    },
    applyMatrix4: function (a) {
      this.start.applyMatrix4(a);
      this.end.applyMatrix4(a);
      return this;
    },
    equals: function (a) {
      return a.start.equals(this.start) && a.end.equals(this.end);
    }
  });
  pe.prototype = Object.create(E.prototype);
  pe.prototype.constructor = pe;
  pe.prototype.isImmediateRenderObject = !0;
  var lb = new n(),
      Ab = new n(),
      gh = new Z(),
      Rk = ["a", "b", "c"];
  qe.prototype = Object.create(X.prototype);
  qe.prototype.constructor = qe;

  qe.prototype.update = function () {
    this.object.updateMatrixWorld(!0);
    gh.getNormalMatrix(this.object.matrixWorld);
    var a = this.object.matrixWorld,
        b = this.geometry.attributes.position,
        c = this.object.geometry;
    if (c && c.isGeometry) for (var d = c.vertices, e = c.faces, f = c = 0, g = e.length; f < g; f++) for (var h = e[f], k = 0, m = h.vertexNormals.length; k < m; k++) {
      var n = h.vertexNormals[k];
      lb.copy(d[h[Rk[k]]]).applyMatrix4(a);
      Ab.copy(n).applyMatrix3(gh).normalize().multiplyScalar(this.size).add(lb);
      b.setXYZ(c, lb.x, lb.y, lb.z);
      c += 1;
      b.setXYZ(c, Ab.x, Ab.y, Ab.z);
      c += 1;
    } else if (c && c.isBufferGeometry) for (d = c.attributes.position, e = c.attributes.normal, k = c = 0, m = d.count; k < m; k++) lb.set(d.getX(k), d.getY(k), d.getZ(k)).applyMatrix4(a), Ab.set(e.getX(k), e.getY(k), e.getZ(k)), Ab.applyMatrix3(gh).normalize().multiplyScalar(this.size).add(lb), b.setXYZ(c, lb.x, lb.y, lb.z), c += 1, b.setXYZ(c, Ab.x, Ab.y, Ab.z), c += 1;
    b.needsUpdate = !0;
  };

  var Li = new n();
  dd.prototype = Object.create(E.prototype);
  dd.prototype.constructor = dd;

  dd.prototype.dispose = function () {
    this.cone.geometry.dispose();
    this.cone.material.dispose();
  };

  dd.prototype.update = function () {
    this.light.updateMatrixWorld();
    var a = this.light.distance ? this.light.distance : 1E3,
        b = a * Math.tan(this.light.angle);
    this.cone.scale.set(b, b, a);
    Li.setFromMatrixPosition(this.light.target.matrixWorld);
    this.cone.lookAt(Li);
    void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
  };

  var Ob = new n(),
      Of = new Q(),
      hh = new Q();
  ed.prototype = Object.create(X.prototype);
  ed.prototype.constructor = ed;

  ed.prototype.updateMatrixWorld = function (a) {
    var b = this.bones,
        c = this.geometry,
        d = c.getAttribute("position");
    hh.getInverse(this.root.matrixWorld);

    for (var e = 0, f = 0; e < b.length; e++) {
      var g = b[e];
      g.parent && g.parent.isBone && (Of.multiplyMatrices(hh, g.matrixWorld), Ob.setFromMatrixPosition(Of), d.setXYZ(f, Ob.x, Ob.y, Ob.z), Of.multiplyMatrices(hh, g.parent.matrixWorld), Ob.setFromMatrixPosition(Of), d.setXYZ(f + 1, Ob.x, Ob.y, Ob.z), f += 2);
    }

    c.getAttribute("position").needsUpdate = !0;
    E.prototype.updateMatrixWorld.call(this, a);
  };

  fd.prototype = Object.create(ea.prototype);
  fd.prototype.constructor = fd;

  fd.prototype.dispose = function () {
    this.geometry.dispose();
    this.material.dispose();
  };

  fd.prototype.update = function () {
    void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
  };

  gd.prototype = Object.create(ra.prototype);
  gd.prototype.constructor = gd;

  gd.prototype.update = function () {
    this.scale.set(.5 * this.light.width, .5 * this.light.height, 1);
    if (void 0 !== this.color) this.material.color.set(this.color), this.children[0].material.color.set(this.color);else {
      this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
      var a = this.material.color,
          b = Math.max(a.r, a.g, a.b);
      1 < b && a.multiplyScalar(1 / b);
      this.children[0].material.color.copy(this.material.color);
    }
  };

  gd.prototype.dispose = function () {
    this.geometry.dispose();
    this.material.dispose();
    this.children[0].geometry.dispose();
    this.children[0].material.dispose();
  };

  var Sk = new n(),
      Mi = new J(),
      Ni = new J();
  hd.prototype = Object.create(E.prototype);
  hd.prototype.constructor = hd;

  hd.prototype.dispose = function () {
    this.children[0].geometry.dispose();
    this.children[0].material.dispose();
  };

  hd.prototype.update = function () {
    var a = this.children[0];
    if (void 0 !== this.color) this.material.color.set(this.color);else {
      var b = a.geometry.getAttribute("color");
      Mi.copy(this.light.color);
      Ni.copy(this.light.groundColor);

      for (var c = 0, d = b.count; c < d; c++) {
        var e = c < d / 2 ? Mi : Ni;
        b.setXYZ(c, e.r, e.g, e.b);
      }

      b.needsUpdate = !0;
    }
    a.lookAt(Sk.setFromMatrixPosition(this.light.matrixWorld).negate());
  };

  id.prototype = Object.create(ea.prototype);
  id.prototype.constructor = id;

  id.prototype.dispose = function () {
    this.geometry.dispose();
    this.material.dispose();
  };

  id.prototype.onBeforeRender = function () {
    this.position.copy(this.lightProbe.position);
    this.scale.set(1, 1, 1).multiplyScalar(this.size);
    this.material.uniforms.intensity.value = this.lightProbe.intensity;
  };

  qf.prototype = Object.assign(Object.create(X.prototype), {
    constructor: qf,
    copy: function (a) {
      X.prototype.copy.call(this, a);
      this.geometry.copy(a.geometry);
      this.material.copy(a.material);
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    }
  });
  rf.prototype = Object.create(X.prototype);
  rf.prototype.constructor = rf;
  jd.prototype = Object.create(ra.prototype);
  jd.prototype.constructor = jd;

  jd.prototype.update = function () {
    function a(a, b, d, e) {
      d = (b - a) / d;
      p.setXYZ(k, 0, 0, 0);
      m++;

      for (n = a; n < b; n += d) q = k + m, p.setXYZ(q, Math.sin(n) * c, 0, Math.cos(n) * c), p.setXYZ(q + 1, Math.sin(Math.min(n + d, b)) * c, 0, Math.cos(Math.min(n + d, b)) * c), p.setXYZ(q + 2, 0, 0, 0), m += 3;

      u.addGroup(k, m, e);
      k += m;
      m = 0;
    }

    var b = this.audio,
        c = this.range,
        d = this.divisionsInnerAngle,
        e = this.divisionsOuterAngle,
        f = P.degToRad(b.panner.coneInnerAngle);
    b = P.degToRad(b.panner.coneOuterAngle);
    var g = f / 2,
        h = b / 2,
        k = 0,
        m = 0,
        n,
        q,
        u = this.geometry,
        p = u.attributes.position;
    u.clearGroups();
    a(-h, -g, e, 0);
    a(-g, g, d, 1);
    a(g, h, e, 0);
    p.needsUpdate = !0;
    f === b && (this.material[0].visible = !1);
  };

  jd.prototype.dispose = function () {
    this.geometry.dispose();
    this.material[0].dispose();
    this.material[1].dispose();
  };

  var De = new n(),
      Pf = new n(),
      Oi = new Z();
  re.prototype = Object.create(X.prototype);
  re.prototype.constructor = re;

  re.prototype.update = function () {
    this.object.updateMatrixWorld(!0);
    Oi.getNormalMatrix(this.object.matrixWorld);
    var a = this.object.matrixWorld,
        b = this.geometry.attributes.position,
        c = this.object.geometry,
        d = c.vertices;
    c = c.faces;

    for (var e = 0, f = 0, g = c.length; f < g; f++) {
      var h = c[f],
          k = h.normal;
      De.copy(d[h.a]).add(d[h.b]).add(d[h.c]).divideScalar(3).applyMatrix4(a);
      Pf.copy(k).applyMatrix3(Oi).normalize().multiplyScalar(this.size).add(De);
      b.setXYZ(e, De.x, De.y, De.z);
      e += 1;
      b.setXYZ(e, Pf.x, Pf.y, Pf.z);
      e += 1;
    }

    b.needsUpdate = !0;
  };

  var Pi = new n(),
      Qf = new n(),
      Qi = new n();
  kd.prototype = Object.create(E.prototype);
  kd.prototype.constructor = kd;

  kd.prototype.dispose = function () {
    this.lightPlane.geometry.dispose();
    this.lightPlane.material.dispose();
    this.targetLine.geometry.dispose();
    this.targetLine.material.dispose();
  };

  kd.prototype.update = function () {
    Pi.setFromMatrixPosition(this.light.matrixWorld);
    Qf.setFromMatrixPosition(this.light.target.matrixWorld);
    Qi.subVectors(Qf, Pi);
    this.lightPlane.lookAt(Qf);
    void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color));
    this.targetLine.lookAt(Qf);
    this.targetLine.scale.z = Qi.length();
  };

  var sf = new n(),
      ka = new bb();
  se.prototype = Object.create(X.prototype);
  se.prototype.constructor = se;

  se.prototype.update = function () {
    var a = this.geometry,
        b = this.pointMap;
    ka.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);
    na("c", b, a, ka, 0, 0, -1);
    na("t", b, a, ka, 0, 0, 1);
    na("n1", b, a, ka, -1, -1, -1);
    na("n2", b, a, ka, 1, -1, -1);
    na("n3", b, a, ka, -1, 1, -1);
    na("n4", b, a, ka, 1, 1, -1);
    na("f1", b, a, ka, -1, -1, 1);
    na("f2", b, a, ka, 1, -1, 1);
    na("f3", b, a, ka, -1, 1, 1);
    na("f4", b, a, ka, 1, 1, 1);
    na("u1", b, a, ka, .7, 1.1, -1);
    na("u2", b, a, ka, -.7, 1.1, -1);
    na("u3", b, a, ka, 0, 2, -1);
    na("cf1", b, a, ka, -1, 0, 1);
    na("cf2", b, a, ka, 1, 0, 1);
    na("cf3", b, a, ka, 0, -1, 1);
    na("cf4", b, a, ka, 0, 1, 1);
    na("cn1", b, a, ka, -1, 0, -1);
    na("cn2", b, a, ka, 1, 0, -1);
    na("cn3", b, a, ka, 0, -1, -1);
    na("cn4", b, a, ka, 0, 1, -1);
    a.getAttribute("position").needsUpdate = !0;
  };

  var Rf = new ab();
  tb.prototype = Object.create(X.prototype);
  tb.prototype.constructor = tb;

  tb.prototype.update = function (a) {
    void 0 !== a && console.warn("THREE.BoxHelper: .update() has no longer arguments.");
    void 0 !== this.object && Rf.setFromObject(this.object);

    if (!Rf.isEmpty()) {
      a = Rf.min;
      var b = Rf.max,
          c = this.geometry.attributes.position,
          d = c.array;
      d[0] = b.x;
      d[1] = b.y;
      d[2] = b.z;
      d[3] = a.x;
      d[4] = b.y;
      d[5] = b.z;
      d[6] = a.x;
      d[7] = a.y;
      d[8] = b.z;
      d[9] = b.x;
      d[10] = a.y;
      d[11] = b.z;
      d[12] = b.x;
      d[13] = b.y;
      d[14] = a.z;
      d[15] = a.x;
      d[16] = b.y;
      d[17] = a.z;
      d[18] = a.x;
      d[19] = a.y;
      d[20] = a.z;
      d[21] = b.x;
      d[22] = a.y;
      d[23] = a.z;
      c.needsUpdate = !0;
      this.geometry.computeBoundingSphere();
    }
  };

  tb.prototype.setFromObject = function (a) {
    this.object = a;
    this.update();
    return this;
  };

  tb.prototype.copy = function (a) {
    X.prototype.copy.call(this, a);
    this.object = a.object;
    return this;
  };

  tb.prototype.clone = function () {
    return new this.constructor().copy(this);
  };

  te.prototype = Object.create(X.prototype);
  te.prototype.constructor = te;

  te.prototype.updateMatrixWorld = function (a) {
    var b = this.box;
    b.isEmpty() || (b.getCenter(this.position), b.getSize(this.scale), this.scale.multiplyScalar(.5), E.prototype.updateMatrixWorld.call(this, a));
  };

  ue.prototype = Object.create(ra.prototype);
  ue.prototype.constructor = ue;

  ue.prototype.updateMatrixWorld = function (a) {
    var b = -this.plane.constant;
    1E-8 > Math.abs(b) && (b = 1E-8);
    this.scale.set(.5 * this.size, .5 * this.size, b);
    this.children[0].material.side = 0 > b ? 1 : 0;
    this.lookAt(this.plane.normal);
    E.prototype.updateMatrixWorld.call(this, a);
  };

  var Ri = new n(),
      tf,
      Kg;
  ub.prototype = Object.create(E.prototype);
  ub.prototype.constructor = ub;

  ub.prototype.setDirection = function (a) {
    .99999 < a.y ? this.quaternion.set(0, 0, 0, 1) : -.99999 > a.y ? this.quaternion.set(1, 0, 0, 0) : (Ri.set(a.z, 0, -a.x).normalize(), this.quaternion.setFromAxisAngle(Ri, Math.acos(a.y)));
  };

  ub.prototype.setLength = function (a, b, c) {
    void 0 === b && (b = .2 * a);
    void 0 === c && (c = .2 * b);
    this.line.scale.set(1, Math.max(1E-4, a - b), 1);
    this.line.updateMatrix();
    this.cone.scale.set(c, b, c);
    this.cone.position.y = a;
    this.cone.updateMatrix();
  };

  ub.prototype.setColor = function (a) {
    this.line.material.color.set(a);
    this.cone.material.color.set(a);
  };

  ub.prototype.copy = function (a) {
    E.prototype.copy.call(this, a, !1);
    this.line.copy(a.line);
    this.cone.copy(a.cone);
    return this;
  };

  ub.prototype.clone = function () {
    return new this.constructor().copy(this);
  };

  ve.prototype = Object.create(X.prototype);
  ve.prototype.constructor = ve;

  C.create = function (a, b) {
    console.log("THREE.Curve.create() has been deprecated");
    a.prototype = Object.create(C.prototype);
    a.prototype.constructor = a;
    a.prototype.getPoint = b;
    return a;
  };

  Object.assign(sb.prototype, {
    createPointsGeometry: function (a) {
      console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
      a = this.getPoints(a);
      return this.createGeometry(a);
    },
    createSpacedPointsGeometry: function (a) {
      console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
      a = this.getSpacedPoints(a);
      return this.createGeometry(a);
    },
    createGeometry: function (a) {
      console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");

      for (var b = new G(), c = 0, d = a.length; c < d; c++) {
        var e = a[c];
        b.vertices.push(new n(e.x, e.y, e.z || 0));
      }

      return b;
    }
  });
  Object.assign(Wa.prototype, {
    fromPoints: function (a) {
      console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints().");
      return this.setFromPoints(a);
    }
  });
  ji.prototype = Object.create(ma.prototype);
  ki.prototype = Object.create(ma.prototype);
  Lg.prototype = Object.create(ma.prototype);
  Object.assign(Lg.prototype, {
    initFromArray: function () {
      console.error("THREE.Spline: .initFromArray() has been removed.");
    },
    getControlPointsArray: function () {
      console.error("THREE.Spline: .getControlPointsArray() has been removed.");
    },
    reparametrizeByArcLength: function () {
      console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.");
    }
  });

  qf.prototype.setColors = function () {
    console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
  };

  ed.prototype.update = function () {
    console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
  };

  Object.assign(V.prototype, {
    extractUrlBase: function (a) {
      console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.");
      return eh.extractUrlBase(a);
    }
  });
  V.Handlers = {
    add: function () {
      console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
    },
    get: function () {
      console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
    }
  };
  Object.assign(mf.prototype, {
    setTexturePath: function (a) {
      console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().");
      return this.setResourcePath(a);
    }
  });
  Object.assign(Ig.prototype, {
    center: function (a) {
      console.warn("THREE.Box2: .center() has been renamed to .getCenter().");
      return this.getCenter(a);
    },
    empty: function () {
      console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");
      return this.isEmpty();
    },
    isIntersectionBox: function (a) {
      console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");
      return this.intersectsBox(a);
    },
    size: function (a) {
      console.warn("THREE.Box2: .size() has been renamed to .getSize().");
      return this.getSize(a);
    }
  });
  Object.assign(ab.prototype, {
    center: function (a) {
      console.warn("THREE.Box3: .center() has been renamed to .getCenter().");
      return this.getCenter(a);
    },
    empty: function () {
      console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");
      return this.isEmpty();
    },
    isIntersectionBox: function (a) {
      console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");
      return this.intersectsBox(a);
    },
    isIntersectionSphere: function (a) {
      console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");
      return this.intersectsSphere(a);
    },
    size: function (a) {
      console.warn("THREE.Box3: .size() has been renamed to .getSize().");
      return this.getSize(a);
    }
  });

  Jg.prototype.center = function (a) {
    console.warn("THREE.Line3: .center() has been renamed to .getCenter().");
    return this.getCenter(a);
  };

  Object.assign(P, {
    random16: function () {
      console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead.");
      return Math.random();
    },
    nearestPowerOfTwo: function (a) {
      console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().");
      return P.floorPowerOfTwo(a);
    },
    nextPowerOfTwo: function (a) {
      console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().");
      return P.ceilPowerOfTwo(a);
    }
  });
  Object.assign(Z.prototype, {
    flattenToArrayOffset: function (a, b) {
      console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
      return this.toArray(a, b);
    },
    multiplyVector3: function (a) {
      console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
      return a.applyMatrix3(this);
    },
    multiplyVector3Array: function () {
      console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
    },
    applyToBuffer: function (a) {
      console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");
      return this.applyToBufferAttribute(a);
    },
    applyToVector3Array: function () {
      console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
    }
  });
  Object.assign(Q.prototype, {
    extractPosition: function (a) {
      console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
      return this.copyPosition(a);
    },
    flattenToArrayOffset: function (a, b) {
      console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
      return this.toArray(a, b);
    },
    getPosition: function () {
      console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
      return new n().setFromMatrixColumn(this, 3);
    },
    setRotationFromQuaternion: function (a) {
      console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
      return this.makeRotationFromQuaternion(a);
    },
    multiplyToArray: function () {
      console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
    },
    multiplyVector3: function (a) {
      console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");
      return a.applyMatrix4(this);
    },
    multiplyVector4: function (a) {
      console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
      return a.applyMatrix4(this);
    },
    multiplyVector3Array: function () {
      console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
    },
    rotateAxis: function (a) {
      console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
      a.transformDirection(this);
    },
    crossVector: function (a) {
      console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
      return a.applyMatrix4(this);
    },
    translate: function () {
      console.error("THREE.Matrix4: .translate() has been removed.");
    },
    rotateX: function () {
      console.error("THREE.Matrix4: .rotateX() has been removed.");
    },
    rotateY: function () {
      console.error("THREE.Matrix4: .rotateY() has been removed.");
    },
    rotateZ: function () {
      console.error("THREE.Matrix4: .rotateZ() has been removed.");
    },
    rotateByAxis: function () {
      console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
    },
    applyToBuffer: function (a) {
      console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");
      return this.applyToBufferAttribute(a);
    },
    applyToVector3Array: function () {
      console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
    },
    makeFrustum: function (a, b, c, d, e, f) {
      console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");
      return this.makePerspective(a, b, d, c, e, f);
    }
  });

  Oa.prototype.isIntersectionLine = function (a) {
    console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");
    return this.intersectsLine(a);
  };

  wa.prototype.multiplyVector3 = function (a) {
    console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
    return a.applyQuaternion(this);
  };

  Object.assign(Rb.prototype, {
    isIntersectionBox: function (a) {
      console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");
      return this.intersectsBox(a);
    },
    isIntersectionPlane: function (a) {
      console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");
      return this.intersectsPlane(a);
    },
    isIntersectionSphere: function (a) {
      console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");
      return this.intersectsSphere(a);
    }
  });
  Object.assign(ba.prototype, {
    area: function () {
      console.warn("THREE.Triangle: .area() has been renamed to .getArea().");
      return this.getArea();
    },
    barycoordFromPoint: function (a, b) {
      console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");
      return this.getBarycoord(a, b);
    },
    midpoint: function (a) {
      console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint().");
      return this.getMidpoint(a);
    },
    normal: function (a) {
      console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
      return this.getNormal(a);
    },
    plane: function (a) {
      console.warn("THREE.Triangle: .plane() has been renamed to .getPlane().");
      return this.getPlane(a);
    }
  });
  Object.assign(ba, {
    barycoordFromPoint: function (a, b, c, d, e) {
      console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");
      return ba.getBarycoord(a, b, c, d, e);
    },
    normal: function (a, b, c, d) {
      console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
      return ba.getNormal(a, b, c, d);
    }
  });
  Object.assign(Ib.prototype, {
    extractAllPoints: function (a) {
      console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.");
      return this.extractPoints(a);
    },
    extrude: function (a) {
      console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");
      return new dc(this, a);
    },
    makeGeometry: function (a) {
      console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");
      return new ec(this, a);
    }
  });
  Object.assign(B.prototype, {
    fromAttribute: function (a, b, c) {
      console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");
      return this.fromBufferAttribute(a, b, c);
    },
    distanceToManhattan: function (a) {
      console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
      return this.manhattanDistanceTo(a);
    },
    lengthManhattan: function () {
      console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().");
      return this.manhattanLength();
    }
  });
  Object.assign(n.prototype, {
    setEulerFromRotationMatrix: function () {
      console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
    },
    setEulerFromQuaternion: function () {
      console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
    },
    getPositionFromMatrix: function (a) {
      console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
      return this.setFromMatrixPosition(a);
    },
    getScaleFromMatrix: function (a) {
      console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
      return this.setFromMatrixScale(a);
    },
    getColumnFromMatrix: function (a, b) {
      console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
      return this.setFromMatrixColumn(b, a);
    },
    applyProjection: function (a) {
      console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");
      return this.applyMatrix4(a);
    },
    fromAttribute: function (a, b, c) {
      console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");
      return this.fromBufferAttribute(a, b, c);
    },
    distanceToManhattan: function (a) {
      console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
      return this.manhattanDistanceTo(a);
    },
    lengthManhattan: function () {
      console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().");
      return this.manhattanLength();
    }
  });
  Object.assign(da.prototype, {
    fromAttribute: function (a, b, c) {
      console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");
      return this.fromBufferAttribute(a, b, c);
    },
    lengthManhattan: function () {
      console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().");
      return this.manhattanLength();
    }
  });
  Object.assign(G.prototype, {
    computeTangents: function () {
      console.error("THREE.Geometry: .computeTangents() has been removed.");
    },
    computeLineDistances: function () {
      console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.");
    }
  });
  Object.assign(E.prototype, {
    getChildByName: function (a) {
      console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
      return this.getObjectByName(a);
    },
    renderDepth: function () {
      console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
    },
    translate: function (a, b) {
      console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
      return this.translateOnAxis(b, a);
    },
    getWorldRotation: function () {
      console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
    }
  });
  Object.defineProperties(E.prototype, {
    eulerOrder: {
      get: function () {
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
        return this.rotation.order;
      },
      set: function (a) {
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
        this.rotation.order = a;
      }
    },
    useQuaternion: {
      get: function () {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
      },
      set: function () {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
      }
    }
  });
  Object.defineProperties(Nd.prototype, {
    objects: {
      get: function () {
        console.warn("THREE.LOD: .objects has been renamed to .levels.");
        return this.levels;
      }
    }
  });
  Object.defineProperty(Oe.prototype, "useVertexTexture", {
    get: function () {
      console.warn("THREE.Skeleton: useVertexTexture has been removed.");
    },
    set: function () {
      console.warn("THREE.Skeleton: useVertexTexture has been removed.");
    }
  });

  Od.prototype.initBones = function () {
    console.error("THREE.SkinnedMesh: initBones() has been removed.");
  };

  Object.defineProperty(C.prototype, "__arcLengthDivisions", {
    get: function () {
      console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
      return this.arcLengthDivisions;
    },
    set: function (a) {
      console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
      this.arcLengthDivisions = a;
    }
  });

  U.prototype.setLens = function (a, b) {
    console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");
    void 0 !== b && (this.filmGauge = b);
    this.setFocalLength(a);
  };

  Object.defineProperties(T.prototype, {
    onlyShadow: {
      set: function () {
        console.warn("THREE.Light: .onlyShadow has been removed.");
      }
    },
    shadowCameraFov: {
      set: function (a) {
        console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");
        this.shadow.camera.fov = a;
      }
    },
    shadowCameraLeft: {
      set: function (a) {
        console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");
        this.shadow.camera.left = a;
      }
    },
    shadowCameraRight: {
      set: function (a) {
        console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");
        this.shadow.camera.right = a;
      }
    },
    shadowCameraTop: {
      set: function (a) {
        console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");
        this.shadow.camera.top = a;
      }
    },
    shadowCameraBottom: {
      set: function (a) {
        console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
        this.shadow.camera.bottom = a;
      }
    },
    shadowCameraNear: {
      set: function (a) {
        console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");
        this.shadow.camera.near = a;
      }
    },
    shadowCameraFar: {
      set: function (a) {
        console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");
        this.shadow.camera.far = a;
      }
    },
    shadowCameraVisible: {
      set: function () {
        console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
      }
    },
    shadowBias: {
      set: function (a) {
        console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
        this.shadow.bias = a;
      }
    },
    shadowDarkness: {
      set: function () {
        console.warn("THREE.Light: .shadowDarkness has been removed.");
      }
    },
    shadowMapWidth: {
      set: function (a) {
        console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");
        this.shadow.mapSize.width = a;
      }
    },
    shadowMapHeight: {
      set: function (a) {
        console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");
        this.shadow.mapSize.height = a;
      }
    }
  });
  Object.defineProperties(N.prototype, {
    length: {
      get: function () {
        console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");
        return this.array.length;
      }
    },
    dynamic: {
      get: function () {
        console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");
        return 35048 === this.usage;
      },
      set: function () {
        console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");
        this.setUsage(35048);
      }
    }
  });
  Object.assign(N.prototype, {
    setDynamic: function (a) {
      console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.");
      this.setUsage(!0 === a ? 35048 : 35044);
      return this;
    },
    copyIndicesArray: function () {
      console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
    },
    setArray: function () {
      console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
    }
  });
  Object.assign(D.prototype, {
    addIndex: function (a) {
      console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");
      this.setIndex(a);
    },
    addAttribute: function (a, b, c) {
      console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().");
      return b && b.isBufferAttribute || b && b.isInterleavedBufferAttribute ? "index" === a ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(b), this) : this.setAttribute(a, b) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(a, new N(b, c)));
    },
    addDrawCall: function (a, b, c) {
      void 0 !== c && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");
      console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
      this.addGroup(a, b);
    },
    clearDrawCalls: function () {
      console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
      this.clearGroups();
    },
    computeTangents: function () {
      console.warn("THREE.BufferGeometry: .computeTangents() has been removed.");
    },
    computeOffsets: function () {
      console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
    },
    removeAttribute: function (a) {
      console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().");
      return this.deleteAttribute(a);
    }
  });
  Object.defineProperties(D.prototype, {
    drawcalls: {
      get: function () {
        console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");
        return this.groups;
      }
    },
    offsets: {
      get: function () {
        console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");
        return this.groups;
      }
    }
  });
  Object.defineProperties(pb.prototype, {
    dynamic: {
      get: function () {
        console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.");
        return 35048 === this.usage;
      },
      set: function (a) {
        console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.");
        this.setUsage(a);
      }
    }
  });
  Object.assign(pb.prototype, {
    setDynamic: function (a) {
      console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.");
      this.setUsage(!0 === a ? 35048 : 35044);
      return this;
    },
    setArray: function () {
      console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
    }
  });
  Object.assign(db.prototype, {
    getArrays: function () {
      console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.");
    },
    addShapeList: function () {
      console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.");
    },
    addShape: function () {
      console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.");
    }
  });
  Object.defineProperties(pf.prototype, {
    dynamic: {
      set: function () {
        console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.");
      }
    },
    onUpdate: {
      value: function () {
        console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");
        return this;
      }
    }
  });
  Object.defineProperties(O.prototype, {
    wrapAround: {
      get: function () {
        console.warn("THREE.Material: .wrapAround has been removed.");
      },
      set: function () {
        console.warn("THREE.Material: .wrapAround has been removed.");
      }
    },
    overdraw: {
      get: function () {
        console.warn("THREE.Material: .overdraw has been removed.");
      },
      set: function () {
        console.warn("THREE.Material: .overdraw has been removed.");
      }
    },
    wrapRGB: {
      get: function () {
        console.warn("THREE.Material: .wrapRGB has been removed.");
        return new J();
      }
    },
    shading: {
      get: function () {
        console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
      },
      set: function (a) {
        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
        this.flatShading = 1 === a;
      }
    },
    stencilMask: {
      get: function () {
        console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead.");
        return this.stencilFuncMask;
      },
      set: function (a) {
        console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead.");
        this.stencilFuncMask = a;
      }
    }
  });
  Object.defineProperties(Ra.prototype, {
    metal: {
      get: function () {
        console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");
        return !1;
      },
      set: function () {
        console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead");
      }
    }
  });
  Object.defineProperties(va.prototype, {
    derivatives: {
      get: function () {
        console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
        return this.extensions.derivatives;
      },
      set: function (a) {
        console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
        this.extensions.derivatives = a;
      }
    }
  });
  Object.assign(hg.prototype, {
    clearTarget: function (a, b, c, d) {
      console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.");
      this.setRenderTarget(a);
      this.clear(b, c, d);
    },
    animate: function (a) {
      console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop().");
      this.setAnimationLoop(a);
    },
    getCurrentRenderTarget: function () {
      console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");
      return this.getRenderTarget();
    },
    getMaxAnisotropy: function () {
      console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");
      return this.capabilities.getMaxAnisotropy();
    },
    getPrecision: function () {
      console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");
      return this.capabilities.precision;
    },
    resetGLState: function () {
      console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset().");
      return this.state.reset();
    },
    supportsFloatTextures: function () {
      console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
      return this.extensions.get("OES_texture_float");
    },
    supportsHalfFloatTextures: function () {
      console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");
      return this.extensions.get("OES_texture_half_float");
    },
    supportsStandardDerivatives: function () {
      console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
      return this.extensions.get("OES_standard_derivatives");
    },
    supportsCompressedTextureS3TC: function () {
      console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
      return this.extensions.get("WEBGL_compressed_texture_s3tc");
    },
    supportsCompressedTexturePVRTC: function () {
      console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");
      return this.extensions.get("WEBGL_compressed_texture_pvrtc");
    },
    supportsBlendMinMax: function () {
      console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");
      return this.extensions.get("EXT_blend_minmax");
    },
    supportsVertexTextures: function () {
      console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");
      return this.capabilities.vertexTextures;
    },
    supportsInstancedArrays: function () {
      console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
      return this.extensions.get("ANGLE_instanced_arrays");
    },
    enableScissorTest: function (a) {
      console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");
      this.setScissorTest(a);
    },
    initMaterial: function () {
      console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
    },
    addPrePlugin: function () {
      console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
    },
    addPostPlugin: function () {
      console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
    },
    updateShadowMap: function () {
      console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
    },
    setFaceCulling: function () {
      console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
    },
    allocTextureUnit: function () {
      console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
    },
    setTexture: function () {
      console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
    },
    setTexture2D: function () {
      console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
    },
    setTextureCube: function () {
      console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
    },
    getActiveMipMapLevel: function () {
      console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().");
      return this.getActiveMipmapLevel();
    }
  });
  Object.defineProperties(hg.prototype, {
    shadowMapEnabled: {
      get: function () {
        return this.shadowMap.enabled;
      },
      set: function (a) {
        console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");
        this.shadowMap.enabled = a;
      }
    },
    shadowMapType: {
      get: function () {
        return this.shadowMap.type;
      },
      set: function (a) {
        console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");
        this.shadowMap.type = a;
      }
    },
    shadowMapCullFace: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
      },
      set: function () {
        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
      }
    },
    context: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.");
        return this.getContext();
      }
    }
  });
  Object.defineProperties(Ih.prototype, {
    cullFace: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
      },
      set: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
      }
    },
    renderReverseSided: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
      },
      set: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
      }
    },
    renderSingleSided: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
      },
      set: function () {
        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
      }
    }
  });
  Object.defineProperties(Bb.prototype, {
    activeCubeFace: {
      set: function () {
        console.warn("THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget().");
      }
    },
    activeMipMapLevel: {
      set: function () {
        console.warn("THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget().");
      }
    }
  });
  Object.defineProperties(Ba.prototype, {
    wrapS: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
        return this.texture.wrapS;
      },
      set: function (a) {
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
        this.texture.wrapS = a;
      }
    },
    wrapT: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
        return this.texture.wrapT;
      },
      set: function (a) {
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
        this.texture.wrapT = a;
      }
    },
    magFilter: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
        return this.texture.magFilter;
      },
      set: function (a) {
        console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
        this.texture.magFilter = a;
      }
    },
    minFilter: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
        return this.texture.minFilter;
      },
      set: function (a) {
        console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
        this.texture.minFilter = a;
      }
    },
    anisotropy: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
        return this.texture.anisotropy;
      },
      set: function (a) {
        console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
        this.texture.anisotropy = a;
      }
    },
    offset: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
        return this.texture.offset;
      },
      set: function (a) {
        console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
        this.texture.offset = a;
      }
    },
    repeat: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
        return this.texture.repeat;
      },
      set: function (a) {
        console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
        this.texture.repeat = a;
      }
    },
    format: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
        return this.texture.format;
      },
      set: function (a) {
        console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
        this.texture.format = a;
      }
    },
    type: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
        return this.texture.type;
      },
      set: function (a) {
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
        this.texture.type = a;
      }
    },
    generateMipmaps: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
        return this.texture.generateMipmaps;
      },
      set: function (a) {
        console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
        this.texture.generateMipmaps = a;
      }
    }
  });
  Object.defineProperties(gg.prototype, {
    standing: {
      set: function () {
        console.warn("THREE.WebVRManager: .standing has been removed.");
      }
    },
    userHeight: {
      set: function () {
        console.warn("THREE.WebVRManager: .userHeight has been removed.");
      }
    }
  });
  Object.defineProperties(cd.prototype, {
    load: {
      value: function (a) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var b = this;
        new nf().load(a, function (a) {
          b.setBuffer(a);
        });
        return this;
      }
    },
    startTime: {
      set: function () {
        console.warn("THREE.Audio: .startTime is now .play( delay ).");
      }
    }
  });

  Dg.prototype.getData = function () {
    console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");
    return this.getFrequencyData();
  };

  Bc.prototype.updateCubeMap = function (a, b) {
    console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");
    return this.update(a, b);
  };

  Jb.crossOrigin = void 0;

  Jb.loadTexture = function (a, b, c, d) {
    console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
    var e = new Ze();
    e.setCrossOrigin(this.crossOrigin);
    a = e.load(a, c, void 0, d);
    b && (a.mapping = b);
    return a;
  };

  Jb.loadTextureCube = function (a, b, c, d) {
    console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
    var e = new Ye();
    e.setCrossOrigin(this.crossOrigin);
    a = e.load(a, c, void 0, d);
    b && (a.mapping = b);
    return a;
  };

  Jb.loadCompressedTexture = function () {
    console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
  };

  Jb.loadCompressedTextureCube = function () {
    console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
  };

  "undefined" !== typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
      revision: "110"
    }
  }));
  k.ACESFilmicToneMapping = 5;
  k.AddEquation = 100;
  k.AddOperation = 2;
  k.AdditiveBlending = 2;
  k.AlphaFormat = 1021;
  k.AlwaysDepth = 1;
  k.AlwaysStencilFunc = 519;
  k.AmbientLight = ff;
  k.AmbientLightProbe = yg;
  k.AnimationClip = Ma;
  k.AnimationLoader = pg;
  k.AnimationMixer = Fg;
  k.AnimationObjectGroup = ci;
  k.AnimationUtils = ta;
  k.ArcCurve = bd;
  k.ArrayCamera = Jd;
  k.ArrowHelper = ub;
  k.Audio = cd;
  k.AudioAnalyser = Dg;
  k.AudioContext = Bg;
  k.AudioListener = Ag;
  k.AudioLoader = nf;
  k.AxesHelper = ve;

  k.AxisHelper = function (a) {
    console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");
    return new ve(a);
  };

  k.BackSide = 1;
  k.BasicDepthPacking = 3200;
  k.BasicShadowMap = 0;

  k.BinaryTextureLoader = function (a) {
    console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");
    return new Xe(a);
  };

  k.Bone = ig;
  k.BooleanKeyframeTrack = Te;

  k.BoundingBoxHelper = function (a, b) {
    console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");
    return new tb(a, b);
  };

  k.Box2 = Ig;
  k.Box3 = ab;
  k.Box3Helper = te;
  k.BoxBufferGeometry = Fd;
  k.BoxGeometry = Zg;
  k.BoxHelper = tb;
  k.BufferAttribute = N;
  k.BufferGeometry = D;
  k.BufferGeometryLoader = lf;
  k.ByteType = 1010;
  k.Cache = sc;
  k.Camera = bb;
  k.CameraHelper = se;

  k.CanvasRenderer = function () {
    console.error("THREE.CanvasRenderer has been removed");
  };

  k.CanvasTexture = Pd;
  k.CatmullRomCurve3 = ma;
  k.CineonToneMapping = 4;
  k.CircleBufferGeometry = Xc;
  k.CircleGeometry = je;
  k.ClampToEdgeWrapping = 1001;
  k.Clock = zg;
  k.ClosedSplineCurve3 = ji;
  k.Color = J;
  k.ColorKeyframeTrack = Ue;
  k.CompressedTexture = Kc;
  k.CompressedTextureLoader = qg;
  k.ConeBufferGeometry = ie;
  k.ConeGeometry = he;
  k.CubeCamera = Bc;
  k.CubeGeometry = Zg;
  k.CubeReflectionMapping = 301;
  k.CubeRefractionMapping = 302;
  k.CubeTexture = nb;
  k.CubeTextureLoader = Ye;
  k.CubeUVReflectionMapping = 306;
  k.CubeUVRefractionMapping = 307;
  k.CubicBezierCurve = Sa;
  k.CubicBezierCurve3 = fb;
  k.CubicInterpolant = Re;
  k.CullFaceBack = 1;
  k.CullFaceFront = 2;
  k.CullFaceFrontBack = 3;
  k.CullFaceNone = 0;
  k.Curve = C;
  k.CurvePath = sb;
  k.CustomBlending = 5;
  k.CylinderBufferGeometry = rb;
  k.CylinderGeometry = gc;
  k.Cylindrical = hi;
  k.DataTexture = Yb;
  k.DataTexture2DArray = Cc;
  k.DataTexture3D = Dc;
  k.DataTextureLoader = Xe;
  k.DecrementStencilOp = 7683;
  k.DecrementWrapStencilOp = 34056;
  k.DefaultLoadingManager = Zh;
  k.DepthFormat = 1026;
  k.DepthStencilFormat = 1027;
  k.DepthTexture = Qd;
  k.DirectionalLight = ef;
  k.DirectionalLightHelper = kd;
  k.DirectionalLightShadow = df;
  k.DiscreteInterpolant = Se;
  k.DodecahedronBufferGeometry = Pc;
  k.DodecahedronGeometry = Wd;
  k.DoubleSide = 2;
  k.DstAlphaFactor = 206;
  k.DstColorFactor = 208;

  k.DynamicBufferAttribute = function (a, b) {
    console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");
    return new N(a, b).setDynamic(!0);
  };

  k.DynamicCopyUsage = 35050;
  k.DynamicDrawUsage = 35048;
  k.DynamicReadUsage = 35049;
  k.EdgesGeometry = Wc;

  k.EdgesHelper = function (a, b) {
    console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");
    return new X(new Wc(a.geometry), new R({
      color: void 0 !== b ? b : 16777215
    }));
  };

  k.EllipseCurve = Ja;
  k.EqualDepth = 4;
  k.EqualStencilFunc = 514;
  k.EquirectangularReflectionMapping = 303;
  k.EquirectangularRefractionMapping = 304;
  k.Euler = Pb;
  k.EventDispatcher = Aa;
  k.ExtrudeBufferGeometry = db;
  k.ExtrudeGeometry = dc;
  k.Face3 = xc;

  k.Face4 = function (a, b, c, d, e, f, g) {
    console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
    return new xc(a, b, c, e, f, g);
  };

  k.FaceColors = 1;
  k.FaceNormalsHelper = re;
  k.FileLoader = Na;
  k.FlatShading = 1;

  k.Float32Attribute = function (a, b) {
    console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");
    return new A(a, b);
  };

  k.Float32BufferAttribute = A;

  k.Float64Attribute = function (a, b) {
    console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");
    return new Bd(a, b);
  };

  k.Float64BufferAttribute = Bd;
  k.FloatType = 1015;
  k.Fog = Me;
  k.FogExp2 = Le;
  k.Font = vg;
  k.FontLoader = wg;
  k.FrontFaceDirectionCCW = 1;
  k.FrontFaceDirectionCW = 0;
  k.FrontSide = 0;
  k.Frustum = Dd;
  k.GammaEncoding = 3007;
  k.Geometry = G;
  k.GeometryUtils = {
    merge: function (a, b, c) {
      console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");

      if (b.isMesh) {
        b.matrixAutoUpdate && b.updateMatrix();
        var d = b.matrix;
        b = b.geometry;
      }

      a.merge(b, d, c);
    },
    center: function (a) {
      console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
      return a.center();
    }
  };
  k.GreaterDepth = 6;
  k.GreaterEqualDepth = 5;
  k.GreaterEqualStencilFunc = 518;
  k.GreaterStencilFunc = 516;
  k.GridHelper = qf;
  k.Group = Gc;
  k.HalfFloatType = 1016;
  k.HemisphereLight = $e;
  k.HemisphereLightHelper = hd;
  k.HemisphereLightProbe = xg;
  k.IcosahedronBufferGeometry = Oc;
  k.IcosahedronGeometry = Vd;
  k.ImageBitmapLoader = tg;
  k.ImageLoader = ad;
  k.ImageUtils = Jb;
  k.ImmediateRenderObject = pe;
  k.IncrementStencilOp = 7682;
  k.IncrementWrapStencilOp = 34055;
  k.InstancedBufferAttribute = kf;
  k.InstancedBufferGeometry = jf;
  k.InstancedInterleavedBuffer = Gg;
  k.InstancedMesh = Pe;

  k.Int16Attribute = function (a, b) {
    console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");
    return new zd(a, b);
  };

  k.Int16BufferAttribute = zd;

  k.Int32Attribute = function (a, b) {
    console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");
    return new Ad(a, b);
  };

  k.Int32BufferAttribute = Ad;

  k.Int8Attribute = function (a, b) {
    console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");
    return new wd(a, b);
  };

  k.Int8BufferAttribute = wd;
  k.IntType = 1013;
  k.InterleavedBuffer = pb;
  k.InterleavedBufferAttribute = Kd;
  k.Interpolant = Ia;
  k.InterpolateDiscrete = 2300;
  k.InterpolateLinear = 2301;
  k.InterpolateSmooth = 2302;
  k.InvertStencilOp = 5386;

  k.JSONLoader = function () {
    console.error("THREE.JSONLoader has been removed.");
  };

  k.KeepStencilOp = 7680;
  k.KeyframeTrack = sa;
  k.LOD = Nd;
  k.LatheBufferGeometry = Vc;
  k.LatheGeometry = ge;
  k.Layers = Tf;

  k.LensFlare = function () {
    console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js");
  };

  k.LessDepth = 2;
  k.LessEqualDepth = 3;
  k.LessEqualStencilFunc = 515;
  k.LessStencilFunc = 513;
  k.Light = T;
  k.LightProbe = Xa;
  k.LightProbeHelper = id;
  k.LightShadow = hb;
  k.Line = ra;
  k.Line3 = Jg;
  k.LineBasicMaterial = R;
  k.LineCurve = Da;
  k.LineCurve3 = Ta;
  k.LineDashedMaterial = nc;
  k.LineLoop = Qe;
  k.LinePieces = 1;
  k.LineSegments = X;
  k.LineStrip = 0;
  k.LinearEncoding = 3E3;
  k.LinearFilter = 1006;
  k.LinearInterpolant = ke;
  k.LinearMipMapLinearFilter = 1008;
  k.LinearMipMapNearestFilter = 1007;
  k.LinearMipmapLinearFilter = 1008;
  k.LinearMipmapNearestFilter = 1007;
  k.LinearToneMapping = 1;
  k.Loader = V;
  k.LoaderUtils = eh;
  k.LoadingManager = og;
  k.LogLuvEncoding = 3003;
  k.LoopOnce = 2200;
  k.LoopPingPong = 2202;
  k.LoopRepeat = 2201;
  k.LuminanceAlphaFormat = 1025;
  k.LuminanceFormat = 1024;
  k.MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
  };
  k.Material = O;
  k.MaterialLoader = hf;
  k.Math = P;
  k.Matrix3 = Z;
  k.Matrix4 = Q;
  k.MaxEquation = 104;
  k.Mesh = ea;
  k.MeshBasicMaterial = Ga;
  k.MeshDepthMaterial = Db;
  k.MeshDistanceMaterial = Eb;

  k.MeshFaceMaterial = function (a) {
    console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");
    return a;
  };

  k.MeshLambertMaterial = lc;
  k.MeshMatcapMaterial = mc;
  k.MeshNormalMaterial = kc;
  k.MeshPhongMaterial = Ra;
  k.MeshPhysicalMaterial = ic;
  k.MeshStandardMaterial = eb;
  k.MeshToonMaterial = jc;
  k.MinEquation = 103;
  k.MirroredRepeatWrapping = 1002;
  k.MixOperation = 1;

  k.MultiMaterial = function (a) {
    void 0 === a && (a = []);
    console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");
    a.isMultiMaterial = !0;
    a.materials = a;

    a.clone = function () {
      return a.slice();
    };

    return a;
  };

  k.MultiplyBlending = 4;
  k.MultiplyOperation = 0;
  k.NearestFilter = 1003;
  k.NearestMipMapLinearFilter = 1005;
  k.NearestMipMapNearestFilter = 1004;
  k.NearestMipmapLinearFilter = 1005;
  k.NearestMipmapNearestFilter = 1004;
  k.NeverDepth = 0;
  k.NeverStencilFunc = 512;
  k.NoBlending = 0;
  k.NoColors = 0;
  k.NoToneMapping = 0;
  k.NormalBlending = 1;
  k.NotEqualDepth = 7;
  k.NotEqualStencilFunc = 517;
  k.NumberKeyframeTrack = Zc;
  k.Object3D = E;
  k.ObjectLoader = mf;
  k.ObjectSpaceNormalMap = 1;
  k.OctahedronBufferGeometry = ac;
  k.OctahedronGeometry = Ud;
  k.OneFactor = 201;
  k.OneMinusDstAlphaFactor = 207;
  k.OneMinusDstColorFactor = 209;
  k.OneMinusSrcAlphaFactor = 205;
  k.OneMinusSrcColorFactor = 203;
  k.OrthographicCamera = oe;
  k.PCFShadowMap = 1;
  k.PCFSoftShadowMap = 2;
  k.ParametricBufferGeometry = Mc;
  k.ParametricGeometry = Rd;

  k.Particle = function (a) {
    console.warn("THREE.Particle has been renamed to THREE.Sprite.");
    return new Ld(a);
  };

  k.ParticleBasicMaterial = function (a) {
    console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");
    return new Qa(a);
  };

  k.ParticleSystem = function (a, b) {
    console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");
    return new Jc(a, b);
  };

  k.ParticleSystemMaterial = function (a) {
    console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");
    return new Qa(a);
  };

  k.Path = Wa;
  k.PerspectiveCamera = U;
  k.Plane = Oa;
  k.PlaneBufferGeometry = Zb;
  k.PlaneGeometry = Ed;
  k.PlaneHelper = ue;

  k.PointCloud = function (a, b) {
    console.warn("THREE.PointCloud has been renamed to THREE.Points.");
    return new Jc(a, b);
  };

  k.PointCloudMaterial = function (a) {
    console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");
    return new Qa(a);
  };

  k.PointLight = cf;
  k.PointLightHelper = fd;
  k.Points = Jc;
  k.PointsMaterial = Qa;
  k.PolarGridHelper = rf;
  k.PolyhedronBufferGeometry = Ea;
  k.PolyhedronGeometry = Sd;
  k.PositionalAudio = Cg;
  k.PositionalAudioHelper = jd;
  k.PropertyBinding = ya;
  k.PropertyMixer = Eg;
  k.QuadraticBezierCurve = Ua;
  k.QuadraticBezierCurve3 = gb;
  k.Quaternion = wa;
  k.QuaternionKeyframeTrack = le;
  k.QuaternionLinearInterpolant = Ve;
  k.REVISION = "110";
  k.RGBADepthPacking = 3201;
  k.RGBAFormat = 1023;
  k.RGBA_ASTC_10x10_Format = 37819;
  k.RGBA_ASTC_10x5_Format = 37816;
  k.RGBA_ASTC_10x6_Format = 37817;
  k.RGBA_ASTC_10x8_Format = 37818;
  k.RGBA_ASTC_12x10_Format = 37820;
  k.RGBA_ASTC_12x12_Format = 37821;
  k.RGBA_ASTC_4x4_Format = 37808;
  k.RGBA_ASTC_5x4_Format = 37809;
  k.RGBA_ASTC_5x5_Format = 37810;
  k.RGBA_ASTC_6x5_Format = 37811;
  k.RGBA_ASTC_6x6_Format = 37812;
  k.RGBA_ASTC_8x5_Format = 37813;
  k.RGBA_ASTC_8x6_Format = 37814;
  k.RGBA_ASTC_8x8_Format = 37815;
  k.RGBA_PVRTC_2BPPV1_Format = 35843;
  k.RGBA_PVRTC_4BPPV1_Format = 35842;
  k.RGBA_S3TC_DXT1_Format = 33777;
  k.RGBA_S3TC_DXT3_Format = 33778;
  k.RGBA_S3TC_DXT5_Format = 33779;
  k.RGBDEncoding = 3006;
  k.RGBEEncoding = 3002;
  k.RGBEFormat = 1023;
  k.RGBFormat = 1022;
  k.RGBM16Encoding = 3005;
  k.RGBM7Encoding = 3004;
  k.RGB_ETC1_Format = 36196;
  k.RGB_PVRTC_2BPPV1_Format = 35841;
  k.RGB_PVRTC_4BPPV1_Format = 35840;
  k.RGB_S3TC_DXT1_Format = 33776;
  k.RawShaderMaterial = Yc;
  k.Ray = Rb;
  k.Raycaster = ei;
  k.RectAreaLight = gf;
  k.RectAreaLightHelper = gd;
  k.RedFormat = 1028;
  k.ReinhardToneMapping = 2;
  k.RepeatWrapping = 1E3;
  k.ReplaceStencilOp = 7681;
  k.ReverseSubtractEquation = 102;
  k.RingBufferGeometry = Uc;
  k.RingGeometry = fe;
  k.Scene = vd;
  k.SceneUtils = {
    createMultiMaterialObject: function () {
      console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js");
    },
    detach: function () {
      console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js");
    },
    attach: function () {
      console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js");
    }
  };
  k.ShaderChunk = S;
  k.ShaderLib = cb;
  k.ShaderMaterial = va;
  k.ShadowMaterial = hc;
  k.Shape = Ib;
  k.ShapeBufferGeometry = fc;
  k.ShapeGeometry = ec;
  k.ShapePath = ug;
  k.ShapeUtils = qb;
  k.ShortType = 1011;
  k.Skeleton = Oe;
  k.SkeletonHelper = ed;
  k.SkinnedMesh = Od;
  k.SmoothShading = 2;
  k.Sphere = mb;
  k.SphereBufferGeometry = Hb;
  k.SphereGeometry = ee;
  k.Spherical = gi;
  k.SphericalHarmonics3 = of;
  k.SphericalReflectionMapping = 305;
  k.Spline = Lg;
  k.SplineCurve = Va;
  k.SplineCurve3 = ki;
  k.SpotLight = bf;
  k.SpotLightHelper = dd;
  k.SpotLightShadow = af;
  k.Sprite = Ld;
  k.SpriteMaterial = Gb;
  k.SrcAlphaFactor = 204;
  k.SrcAlphaSaturateFactor = 210;
  k.SrcColorFactor = 202;
  k.StaticCopyUsage = 35046;
  k.StaticDrawUsage = 35044;
  k.StaticReadUsage = 35045;
  k.StereoCamera = ai;
  k.StreamCopyUsage = 35042;
  k.StreamDrawUsage = 35040;
  k.StreamReadUsage = 35041;
  k.StringKeyframeTrack = We;
  k.SubtractEquation = 101;
  k.SubtractiveBlending = 3;
  k.TOUCH = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
  };
  k.TangentSpaceNormalMap = 0;
  k.TetrahedronBufferGeometry = Nc;
  k.TetrahedronGeometry = Td;
  k.TextBufferGeometry = Tc;
  k.TextGeometry = de;
  k.Texture = Y;
  k.TextureLoader = Ze;
  k.TorusBufferGeometry = Rc;
  k.TorusGeometry = Zd;
  k.TorusKnotBufferGeometry = Qc;
  k.TorusKnotGeometry = Yd;
  k.Triangle = ba;
  k.TriangleFanDrawMode = 2;
  k.TriangleStripDrawMode = 1;
  k.TrianglesDrawMode = 0;
  k.TubeBufferGeometry = bc;
  k.TubeGeometry = Xd;
  k.UVMapping = 300;

  k.Uint16Attribute = function (a, b) {
    console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");
    return new Sb(a, b);
  };

  k.Uint16BufferAttribute = Sb;

  k.Uint32Attribute = function (a, b) {
    console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");
    return new Tb(a, b);
  };

  k.Uint32BufferAttribute = Tb;

  k.Uint8Attribute = function (a, b) {
    console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");
    return new xd(a, b);
  };

  k.Uint8BufferAttribute = xd;

  k.Uint8ClampedAttribute = function (a, b) {
    console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");
    return new yd(a, b);
  };

  k.Uint8ClampedBufferAttribute = yd;
  k.Uncharted2ToneMapping = 3;
  k.Uniform = pf;
  k.UniformsLib = L;
  k.UniformsUtils = Ck;
  k.UnsignedByteType = 1009;
  k.UnsignedInt248Type = 1020;
  k.UnsignedIntType = 1014;
  k.UnsignedShort4444Type = 1017;
  k.UnsignedShort5551Type = 1018;
  k.UnsignedShort565Type = 1019;
  k.UnsignedShortType = 1012;
  k.VSMShadowMap = 3;
  k.Vector2 = B;
  k.Vector3 = n;
  k.Vector4 = da;
  k.VectorKeyframeTrack = $c;

  k.Vertex = function (a, b, c) {
    console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");
    return new n(a, b, c);
  };

  k.VertexColors = 2;
  k.VertexNormalsHelper = qe;
  k.VideoTexture = lg;
  k.WebGLMultisampleRenderTarget = Sf;
  k.WebGLRenderTarget = Ba;
  k.WebGLRenderTargetCube = Bb;
  k.WebGLRenderer = hg;
  k.WebGLUtils = Kh;
  k.WireframeGeometry = Lc;

  k.WireframeHelper = function (a, b) {
    console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");
    return new X(new Lc(a.geometry), new R({
      color: void 0 !== b ? b : 16777215
    }));
  };

  k.WrapAroundEnding = 2402;

  k.XHRLoader = function (a) {
    console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");
    return new Na(a);
  };

  k.ZeroCurvatureEnding = 2400;
  k.ZeroFactor = 200;
  k.ZeroSlopeEnding = 2401;
  k.ZeroStencilOp = 0;
  k.sRGBEncoding = 3001;
  Object.defineProperty(k, "__esModule", {
    value: !0
  });
});
},{}],"src/js/tfjs-brain.js":[function(require,module,exports) {
"use strict";

var _threeMin = require("./three.min.js");

// An agent is in state0 and does action0
// environment then assigns reward0 and provides new state, state1
// Experience nodes store all this information, which is used in the
// Q-learning update step
class Experience {
  constructor(state0, action0, reward0, state1) {
    this.state0 = state0;
    this.action0 = action0;
    this.reward0 = reward0;
    this.state1 = state1;
  }

} // A Brain object does all the magic.
// over time it receives some inputs and some rewards
// and its job is to set the outputs to maximize the expected reward


class Brain {
  constructor(num_states, num_actions, opt = {}) {
    // in number of time steps, of temporal memory
    // the ACTUAL input to the net will be (x,a) temporal_window times, and followed by current x
    // so to have no information from previous time step going into value function, set to 0.
    this.temporal_window = typeof opt.temporal_window !== 'undefined' ? opt.temporal_window : 1; // size of experience replay memory

    this.experience_size = typeof opt.experience_size !== 'undefined' ? opt.experience_size : 30000; // number of examples in experience replay memory before we begin learning

    this.start_learn_threshold = typeof opt.start_learn_threshold !== 'undefined' ? opt.start_learn_threshold : Math.floor(Math.min(this.experience_size * 0.1, 1000)); // gamma is a crucial parameter that controls how much plan-ahead the agent does. In [0,1]

    this.gamma = typeof opt.gamma !== 'undefined' ? opt.gamma : 0.8; // number of steps we will learn for

    this.learning_steps_total = typeof opt.learning_steps_total !== 'undefined' ? opt.learning_steps_total : 100000; // how many steps of the above to perform only random actions (in the beginning)?

    this.learning_steps_burnin = typeof opt.learning_steps_burnin !== 'undefined' ? opt.learning_steps_burnin : 3000; // what epsilon value do we bottom out on? 0.0 => purely deterministic policy at end

    this.epsilon_min = typeof opt.epsilon_min !== 'undefined' ? opt.epsilon_min : 0.05; // what epsilon to use at test time? (i.e. when learning is disabled)

    this.epsilon_test_time = typeof opt.epsilon_test_time !== 'undefined' ? opt.epsilon_test_time : 0.01; // advanced feature. Sometimes a random action should be biased towards some values
    // for example in flappy bird, we may want to choose to not flap more often

    if (typeof opt.random_action_distribution !== 'undefined') {
      // this better sum to 1 by the way, and be of length this.num_actions
      this.random_action_distribution = opt.random_action_distribution;

      if (this.random_action_distribution.length !== num_actions) {
        console.log('TROUBLE. random_action_distribution should be same length as num_actions.');
      }

      var a = this.random_action_distribution;
      var s = 0.0;

      for (var k = 0; k < a.length; k++) {
        s += a[k];
      }

      if (Math.abs(s - 1.0) > 0.0001) {
        console.log('TROUBLE. random_action_distribution should sum to 1!');
      }
    } else {
      this.random_action_distribution = [];
    } // states that go into neural net to predict optimal action look as
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
    this.net_window = new Array(this.window_size); // create [state -> value of all possible actions] modeling net for the value function

    var layer_defs = [];
    this.NN = new tf.sequential();
    this.NN.add(tf.layers.dense({
      inputShape: [65],
      units: 20,
      activation: 'relu'
    }));
    this.NN.add(tf.layers.dense({
      units: 20,
      activation: 'relu'
    }));
    this.NN.add(tf.layers.dense({
      units: 5,
      kernelInitializer: 'varianceScaling',
      kernelRegularizer: 'l1l2'
    }));
    this.BATCH_SIZE = 64;
    this.tdtrainer = tf.train.sgd(0.01); // experience replay

    this.experience = []; // various housekeeping variables

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
    if (this.random_action_distribution.length === 0) {
      return convnetjs.randi(0, this.num_actions);
    } else {
      // okay, lets do some fancier sampling:
      var p = convnetjs.randf(0, 1.0);
      var cumprob = 0.0;

      for (var k = 0; k < this.num_actions; k++) {
        cumprob += this.random_action_distribution[k];

        if (p < cumprob) {
          return k;
        }
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
    var action_values = this.NN.predict(tens);
    let ret = {
      action: action_values.max().dataSync(),
      value: action_values.argMax(1).dataSync()
    };
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

    for (var k = 0; k < this.temporal_window; k++) {
      // state
      w = w.concat(this.state_window[n - 1 - k]); // action, encoded as 1-of-k indicator vector. We scale it up a bit because
      // we dont want weight regularization to undervalue this information, as it only exists once

      var action1ofk = new Array(this.num_actions);

      for (var q = 0; q < this.num_actions; q++) action1ofk[q] = 0.0;

      action1ofk[this.action_window[n - 1 - k]] = 1.0 * this.num_states;
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

    if (this.forward_passes > this.temporal_window) {
      // we have enough to actually do something reasonable
      var net_input = this.getNetInput(input_array);

      if (this.learning) {
        // compute epsilon for the epsilon-greedy policy
        this.epsilon = Math.min(1.0, Math.max(this.epsilon_min, 1.0 - (this.age - this.learning_steps_burnin) / (this.learning_steps_total - this.learning_steps_burnin)));
      } else {
        this.epsilon = this.epsilon_test_time; // use test-time value
      }

      var rf = Math.random();

      if (rf < this.epsilon) {
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
    } // remember the state and action we took for backward pass


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

    if (!this.learning) {
      return;
    } // various book-keeping


    this.age += 1; // it is time t+1 and we have to store (s_t, a_t, r_t, s_{t+1}) as new experience
    // (given that an appropriate number of state measurements already exist, of course)

    if (this.forward_passes > this.temporal_window + 1) {
      var e = new Experience();
      var n = this.window_size;
      e.state0 = this.net_window[n - 2];
      e.action0 = this.action_window[n - 2];
      e.reward0 = this.reward_window[n - 2];
      e.state1 = this.net_window[n - 1];

      if (this.experience.length < this.experience_size) {
        this.experience.push(e);
      } else {
        // replace. finite memory!
        var ri = convnetjs.randi(0, this.experience_size);
        this.experience[ri] = e;
      }
    } // learn based on experience, once we have some samples to go on
    // this is where the magic happens...


    if (this.experience.length > this.start_learn_threshold) {
      var avcost = 0.0;

      for (var k = 0; k < this.BATCH_SIZE; k++) {
        var re = convnetjs.randi(0, this.experience.length);
        var e = this.experience[re];
        var x = new convnetjs.Vol(1, 1, this.net_inputs);
        x.w = e.state0;
        var maxact = this.policy(e.state1);
        var r = e.reward0 + this.gamma * maxact.value;
        var ystruct = {
          dim: e.action0,
          val: r
        };
        var loss = this.NN.fit(x, ystruct, {
          batchSize: BATCH_SIZE,
          epochs: 10,
          shuffle: true,
          callbacks: fitCallbacks
        });
        avcost += loss.loss;
      }

      avcost = avcost / this.tdtrainer.batch_size;
      this.average_loss_window.add(avcost);
    }
  }

  visSelf(elt) {
    elt.innerHTML = ''; // erase elt first
    // elt is a DOM element that this function fills with brain-related information

    var brainvis = document.createElement('div'); // basic information

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
},{"./three.min.js":"src/js/three.min.js"}]},{},["src/js/tfjs-brain.js"], "window")
//# sourceMappingURL=/tfjs-brain.map