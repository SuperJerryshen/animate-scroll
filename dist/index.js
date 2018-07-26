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