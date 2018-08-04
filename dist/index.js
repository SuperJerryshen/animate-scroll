"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bezier = function () {
  function Bezier() {
    var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.25;
    var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
    var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.25;
    var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    _classCallCheck(this, Bezier);

    this.controlPoints = [x1, y1, x2, y2];
    this.initialPoints = [0, 0, 1, 1];
    this.coords = null;
  }

  _createClass(Bezier, [{
    key: "getCoord",
    value: function getCoord(t) {
      var _t = 1 - t;

      var _controlPoints = _slicedToArray(this.controlPoints, 4),
          x1 = _controlPoints[0],
          y1 = _controlPoints[1],
          x2 = _controlPoints[2],
          y2 = _controlPoints[3];

      var coefficient1 = 3 * t * Math.pow(_t, 2);
      var coefficient2 = 3 * _t * Math.pow(t, 2);
      var coefficient3 = Math.pow(t, 3);
      var px = coefficient1 * x1 + coefficient2 * x2 + coefficient3;
      var py = coefficient1 * y1 + coefficient2 * y2 + coefficient3;
      return [parseFloat(px.toFixed(3), 10), parseFloat(py.toFixed(3), 10)];
    }
  }, {
    key: "getY",
    value: function getY(x) {
      this.getCoordAmount(120);
      if (x >= 1) {
        return 1;
      }
      if (x <= 0) {
        return 0;
      }
      var startX = 0;
      for (var i = 0; i < this.coords.length; i++) {
        if (this.coords[i][0] >= x) {
          startX = i;
          break;
        }
      }
      var axis1 = this.coords[startX];
      var axis2 = this.coords[startX - 1];
      var k = (axis2[1] - axis1[1]) / (axis2[0] - axis1[0]);
      var b = axis1[1] - k * axis1[0];
      return k * x + b;
    }
  }, {
    key: "getCoordAmount",
    value: function getCoordAmount(num) {
      var step = 1 / (num + 1);
      var result = [];
      for (var t = 0; t <= num + 1; t++) {
        result.push(this.getCoord(t * step));
      }
      this.coords = result;
      return result;
    }
  }]);

  return Bezier;
}();

exports.default = Bezier;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Constructor Scroller
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Bezier = require('./Bezier');

var _Bezier2 = _interopRequireDefault(_Bezier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bezierEffect = {
  ease: [0.25, 0.1, 0.25, 1],
  linear: [0, 0, 1, 1],
  'ease-in': [0.42, 0, 1, 1],
  'ease-out': [0, 0, 0.58, 1],
  'ease-in-out': [0.42, 0, 0.58, 1]
};

var Scroller = function () {
  function Scroller(wrap) {
    var _this = this;

    _classCallCheck(this, Scroller);

    this.timer = null;
    this.wrap = wrap || null;
    this.container = wrap || window;
    this.cancelFunc = function () {
      _this.cancel();
    };
  }

  /**
   * scroll without animation
   * @param {*} top
   */


  _createClass(Scroller, [{
    key: 'scroll',
    value: function scroll(top) {
      if (this.wrap) {
        this.wrap.scrollTop = top;
      } else {
        window.scrollTo(0, top);
      }
    }

    /**
     * stop the scroll
     */

  }, {
    key: 'cancel',
    value: function cancel() {
      // clear timer if `this.timer` exists
      this.timer && clearInterval(this.timer);
      // remove the wheel event listener when the scroll is stopped
      this.container.removeEventListener('wheel', this.cancelFunc);
    }

    /**
     * scroll to the position given
     * @param {*} h
     * @param {*} config
     */

  }, {
    key: 'scrollToY',
    value: function scrollToY() {
      var _this2 = this;

      var h = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (typeof h !== 'number') {
        throw new Error('the target height must be a number.');
      }
      var _config$duration = config.duration,
          duration = _config$duration === undefined ? 600 : _config$duration,
          _config$easing = config.easing,
          easing = _config$easing === undefined ? 'ease' : _config$easing;

      if (typeof duration !== 'number') {
        throw new Error('"duration" must be a number.');
      }
      var y = this.wrap ? this.wrap.scrollTop : window.scrollY;
      var container = this.wrap || window;
      // get the effet params of transition
      var bezierParams = typeof easing === 'string' ? bezierEffect[easing] : easing;
      if (!Array.isArray(bezierParams)) {
        throw new Error('option "easing" is not right, please confirm!');
      }
      var bezier = new (Function.prototype.bind.apply(_Bezier2.default, [null].concat(_toConsumableArray(bezierParams))))();
      var top = y;
      var distance = h - y;
      var interval = 16.67;
      var time = 0;
      if (h === top) return;
      // if this.timer is not null, then clearInterval
      this.cancel();
      // add wheel event, used for stopping the scroll automatically when user uses the wheel
      container.addEventListener('wheel', this.cancelFunc);
      this.timer = setInterval(function () {
        // two situations: distance > 0 & distance < 0
        var ratio = bezier.getY(time / duration);
        var move = ratio * distance;
        _this2.scroll(top + move);
        if (ratio >= 1) {
          _this2.cancel();
        } else {
          time += interval;
        }
      }, interval);
    }
  }]);

  return Scroller;
}();

exports.default = Scroller;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollToY = exports.scroller = undefined;

var _Scroller = require('./Scroller');

var _Scroller2 = _interopRequireDefault(_Scroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scroller = exports.scroller = new _Scroller2.default();
var scrollToY = exports.scrollToY = _Scroller2.default.prototype.scrollToY.bind(scroller);
exports.default = _Scroller2.default;
