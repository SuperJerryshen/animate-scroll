'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Constructor Scroller
 */
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

      var y = this.wrap ? this.wrap.scrollTop : window.scrollY;
      var container = this.wrap || window;
      var top = y;
      var distance = y - h;
      var gap = distance / 16;
      if (h === top) return;
      // if this.timer is not null, then clearInterval
      this.cancel();
      // add wheel event, used for stopping the scroll automatically when user uses the wheel
      container.addEventListener('wheel', this.cancelFunc);
      this.timer = setInterval(function () {
        // two situations: distance > 0 & distance < 0
        if (distance > 0) {
          if (top < gap * 6) {
            top -= top / 6;
          } else {
            top -= gap;
          }
          if (top <= h + 1) {
            top = h;
            clearInterval(_this2.timer);
          }
        } else {
          if (top > -gap * 6) {
            top += (h - top) / 6;
          } else {
            top -= gap;
          }
          if (top >= h - 1) {
            top = h;
            clearInterval(_this2.timer);
          }
        }
        _this2.scroll(top);
      }, 16);
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
