!function(o){var e={};function r(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return o[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=o,r.c=e,r.d=function(n,t,o){r.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=8)}({8:function(n,t,o){"use strict";var u;(u=jQuery).fn.scrollClass=function(n){var t=this;n||(n={});var r=n.className,i=n.delay,c=n.increment;function o(){var e=1;t.each(function(n){var t=u(this),o=t.offset().top;c&&u(window).scrollTop()>o-u(window).height()&&u(window).scrollTop()<o?setTimeout(function(){t.addClass(r)},i*e++):u(window).scrollTop()>o-u(window).height()&&setTimeout(function(){t.addClass(r)},i)})}return i||(i=0),u(document).ready(function(){o()}),u(window).scroll(function(){o()}),this}}});