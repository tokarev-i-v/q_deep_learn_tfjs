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
})({"src/js/util.js":[function(require,module,exports) {
// contains various utility functions 
var cnnutil = function (exports) {
  // a window stores _size_ number of values
  // and returns averages. Useful for keeping running
  // track of validation or training accuracy during SGD
  var Window = function (size, minsize) {
    this.v = [];
    this.size = typeof size === 'undefined' ? 100 : size;
    this.minsize = typeof minsize === 'undefined' ? 20 : minsize;
    this.sum = 0;
  };

  Window.prototype = {
    add: function (x) {
      this.v.push(x);
      this.sum += x;

      if (this.v.length > this.size) {
        var xold = this.v.shift();
        this.sum -= xold;
      }
    },
    get_average: function () {
      if (this.v.length < this.minsize) return -1;else return this.sum / this.v.length;
    },
    reset: function (x) {
      this.v = [];
      this.sum = 0;
    } // returns min, max and indeces of an array

  };

  var maxmin = function (w) {
    if (w.length === 0) {
      return {};
    } // ... ;s


    var maxv = w[0];
    var minv = w[0];
    var maxi = 0;
    var mini = 0;

    for (var i = 1; i < w.length; i++) {
      if (w[i] > maxv) {
        maxv = w[i];
        maxi = i;
      }

      if (w[i] < minv) {
        minv = w[i];
        mini = i;
      }
    }

    return {
      maxi: maxi,
      maxv: maxv,
      mini: mini,
      minv: minv,
      dv: maxv - minv
    };
  }; // returns string representation of float
  // but truncated to length of d digits


  var f2t = function (x, d) {
    if (typeof d === 'undefined') {
      var d = 5;
    }

    var dd = 1.0 * Math.pow(10, d);
    return '' + Math.floor(x * dd) / dd;
  };

  exports = exports || {};
  exports.Window = Window;
  exports.maxmin = maxmin;
  exports.f2t = f2t;
  return exports;
}(typeof module != 'undefined' && module.exports); // add exports to module.exports if in node.js
},{}]},{},["src/js/util.js"], "window")
//# sourceMappingURL=/util.map