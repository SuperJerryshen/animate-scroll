!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["animate-scroll"]=e():t.AnimateScroll=e()}(window,function(){return function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(1);e.scroller=new r.default,e.scrollToY=r.default.prototype.scrollToY.bind(e.scroller),e.Scroller=r.default},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(2),n={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},i=function(){function t(t){var e=this;this.timer=null,this.wrap=t||null,this.container=t||window,this.cancelFunc=function(){e.cancel()}}return t.prototype.scroll=function(t){this.wrap?this.wrap.scrollTop=t:window.scrollTo(0,t)},t.prototype.cancel=function(){this.timer&&clearInterval(this.timer),this.container.removeEventListener("wheel",this.cancelFunc)},t.prototype.scrollToY=function(t,e){var o=this;if(void 0===t&&(t=0),void 0===e&&(e={}),"number"!=typeof t)throw new Error("the target height must be a number.");var i=e.duration,u=void 0===i?600:i,c=e.easing,a=void 0===c?"ease":c;if("number"!=typeof u)throw new Error('"duration" must be a number.');var l=this.wrap?this.wrap.scrollTop:window.scrollY,s="string"==typeof a?n[a]:a;if(!Array.isArray(s))throw new Error('option "easing" is not right, please confirm!');var f=new(r.default.bind.apply(r.default,[void 0].concat(s))),d=l,p=t-l,h=0;if(t!==d)return this.cancel(),this.container.addEventListener("wheel",this.cancelFunc),new Promise(function(e,r){try{o.timer=window.setInterval(function(){var r=f.getY(h/u),n=r*p;o.scroll(d+n),r>=1?(o.cancel(),e(t)):h+=16.67},16.67)}catch(t){r(t)}})},t}();e.default=i},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,o,r,n){void 0===t&&(t=.25),void 0===e&&(e=.1),void 0===o&&(o=.25),void 0===r&&(r=1),void 0===n&&(n={});var i=n.precision,u=void 0===i?120:i;this.controlPoints=[t,e,o,r],this.initialPoints=[0,0,1,1],this.coords=null,this.getCoordAmount(u)}return t.prototype.getCoord=function(t){var e=1-t,o=this.controlPoints,r=o[0],n=o[1],i=o[2],u=o[3],c=3*t*Math.pow(e,2),a=3*e*Math.pow(t,2),l=Math.pow(t,3),s=c*n+a*u+l;return[parseFloat((c*r+a*i+l).toFixed(3)),parseFloat(s.toFixed(3))]},t.prototype.getY=function(t){if(t>=1)return 1;if(t<=0)return 0;for(var e=0,o=0;o<this.coords.length;o++)if(this.coords[o][0]>=t){e=o;break}var r=this.coords[e],n=this.coords[e-1],i=(n[1]-r[1])/(n[0]-r[0]);return i*t+(r[1]-i*r[0])},t.prototype.getCoordAmount=function(t){for(var e=1/(t+1),o=[],r=0;r<=t+1;r++)o.push(this.getCoord(r*e));return this.coords=o,o},t}();e.default=r}])});