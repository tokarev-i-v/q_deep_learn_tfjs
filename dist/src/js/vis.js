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
})({"src/js/vis.js":[function(require,module,exports) {
// contains various utility functions 
var cnnvis = function (exports) {
  // can be used to graph loss, or accuract over time
  var Graph = function (options) {
    var options = options || {};
    this.step_horizon = options.step_horizon || 1000;
    this.pts = [];
    this.maxy = -9999;
    this.miny = 9999;
  };

  Graph.prototype = {
    // canv is the canvas we wish to update with this new datapoint
    add: function (step, y) {
      var time = new Date().getTime(); // in ms

      if (y > this.maxy * 0.99) this.maxy = y * 1.05;
      if (y < this.miny * 1.01) this.miny = y * 0.95;
      this.pts.push({
        step: step,
        time: time,
        y: y
      });
      if (step > this.step_horizon) this.step_horizon *= 2;
    },
    // elt is a canvas we wish to draw into
    drawSelf: function (canv) {
      var pad = 25;
      var H = canv.height;
      var W = canv.width;
      var ctx = canv.getContext('2d');
      ctx.clearRect(0, 0, W, H);
      ctx.font = "10px Georgia";

      var f2t = function (x) {
        var dd = 1.0 * Math.pow(10, 2);
        return '' + Math.floor(x * dd) / dd;
      }; // draw guidelines and values


      ctx.strokeStyle = "#999";
      ctx.beginPath();
      var ng = 10;

      for (var i = 0; i <= ng; i++) {
        var xpos = i / ng * (W - 2 * pad) + pad;
        ctx.moveTo(xpos, pad);
        ctx.lineTo(xpos, H - pad);
        ctx.fillText(f2t(i / ng * this.step_horizon / 1000) + 'k', xpos, H - pad + 14);
      }

      for (var i = 0; i <= ng; i++) {
        var ypos = i / ng * (H - 2 * pad) + pad;
        ctx.moveTo(pad, ypos);
        ctx.lineTo(W - pad, ypos);
        ctx.fillText(f2t((ng - i) / ng * (this.maxy - this.miny) + this.miny), 0, ypos);
      }

      ctx.stroke();
      var N = this.pts.length;
      if (N < 2) return; // draw the actual curve

      var t = function (x, y, s) {
        var tx = x / s.step_horizon * (W - pad * 2) + pad;
        var ty = H - ((y - s.miny) / (s.maxy - s.miny) * (H - pad * 2) + pad);
        return {
          tx: tx,
          ty: ty
        };
      };

      ctx.strokeStyle = "red";
      ctx.beginPath();

      for (var i = 0; i < N; i++) {
        // draw line from i-1 to i
        var p = this.pts[i];
        var pt = t(p.step, p.y, this);
        if (i === 0) ctx.moveTo(pt.tx, pt.ty);else ctx.lineTo(pt.tx, pt.ty);
      }

      ctx.stroke();
    } // same as graph but draws multiple lines. For now I'm lazy and duplicating
    // the code, but in future I will merge these two more nicely.

  };

  var MultiGraph = function (legend, options) {
    var options = options || {};
    this.step_horizon = options.step_horizon || 1000;
    if (typeof options.maxy !== 'undefined') this.maxy_forced = options.maxy;
    if (typeof options.miny !== 'undefined') this.miny_forced = options.miny;
    this.pts = [];
    this.maxy = -9999;
    this.miny = 9999;
    this.numlines = 0;
    this.numlines = legend.length;
    this.legend = legend;
    this.styles = ["red", "blue", "green", "black", "magenta", "cyan", "purple", "aqua", "olive", "lime", "navy"]; // 17 basic colors: aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, orange, purple, red, silver, teal, white, and yellow
  };

  MultiGraph.prototype = {
    // canv is the canvas we wish to update with this new datapoint
    add: function (step, yl) {
      var time = new Date().getTime(); // in ms

      var n = yl.length;

      for (var k = 0; k < n; k++) {
        var y = yl[k];
        if (y > this.maxy * 0.99) this.maxy = y * 1.05;
        if (y < this.miny * 1.01) this.miny = y * 0.95;
      }

      if (typeof this.maxy_forced !== 'undefined') this.maxy = this.maxy_forced;
      if (typeof this.miny_forced !== 'undefined') this.miny = this.miny_forced;
      this.pts.push({
        step: step,
        time: time,
        yl: yl
      });
      if (step > this.step_horizon) this.step_horizon *= 2;
    },
    // elt is a canvas we wish to draw into
    drawSelf: function (canv) {
      var pad = 25;
      var H = canv.height;
      var W = canv.width;
      var ctx = canv.getContext('2d');
      ctx.clearRect(0, 0, W, H);
      ctx.font = "10px Georgia";

      var f2t = function (x) {
        var dd = 1.0 * Math.pow(10, 2);
        return '' + Math.floor(x * dd) / dd;
      }; // draw guidelines and values


      ctx.strokeStyle = "#999";
      ctx.beginPath();
      var ng = 10;

      for (var i = 0; i <= ng; i++) {
        var xpos = i / ng * (W - 2 * pad) + pad;
        ctx.moveTo(xpos, pad);
        ctx.lineTo(xpos, H - pad);
        ctx.fillText(f2t(i / ng * this.step_horizon / 1000) + 'k', xpos, H - pad + 14);
      }

      for (var i = 0; i <= ng; i++) {
        var ypos = i / ng * (H - 2 * pad) + pad;
        ctx.moveTo(pad, ypos);
        ctx.lineTo(W - pad, ypos);
        ctx.fillText(f2t((ng - i) / ng * (this.maxy - this.miny) + this.miny), 0, ypos);
      }

      ctx.stroke();
      var N = this.pts.length;
      if (N < 2) return; // draw legend

      for (var k = 0; k < this.numlines; k++) {
        ctx.fillStyle = this.styles[k % this.styles.length];
        ctx.fillText(this.legend[k], W - pad - 100, pad + 20 + k * 16);
      }

      ctx.fillStyle = "black"; // draw the actual curve

      var t = function (x, y, s) {
        var tx = x / s.step_horizon * (W - pad * 2) + pad;
        var ty = H - ((y - s.miny) / (s.maxy - s.miny) * (H - pad * 2) + pad);
        return {
          tx: tx,
          ty: ty
        };
      };

      for (var k = 0; k < this.numlines; k++) {
        ctx.strokeStyle = this.styles[k % this.styles.length];
        ctx.beginPath();

        for (var i = 0; i < N; i++) {
          // draw line from i-1 to i
          var p = this.pts[i];
          var pt = t(p.step, p.yl[k], this);
          if (i === 0) ctx.moveTo(pt.tx, pt.ty);else ctx.lineTo(pt.tx, pt.ty);
        }

        ctx.stroke();
      }
    }
  };
  exports = exports || {};
  exports.Graph = Graph;
  exports.MultiGraph = MultiGraph;
  return exports;
}(typeof module != 'undefined' && module.exports); // add exports to module.exports if in node.js
},{}]},{},["src/js/vis.js"], "window")
//# sourceMappingURL=/vis.map