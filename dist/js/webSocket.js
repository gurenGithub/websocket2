!function(t,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e=r();for(var n in e)("object"==typeof exports?exports:t)[n]=e[n]}}(window,function(){return function(t){var r={};function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(r){return t[r]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=6)}([function(t,r,e){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var n=e(8),i=e(9),o=e(10);function s(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function u(t,r){if(s()<r)throw new RangeError("Invalid typed array length");return f.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=f.prototype:(null===t&&(t=new f(r)),t.length=r),t}function f(t,r,e){if(!(f.TYPED_ARRAY_SUPPORT||this instanceof f))return new f(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return c(this,t)}return a(this,t,r,e)}function a(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);f.TYPED_ARRAY_SUPPORT?(t=r).__proto__=f.prototype:t=l(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!f.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|d(r,e),i=(t=u(t,n)).write(r,e);i!==n&&(t=t.slice(0,i));return t}(t,r,e):function(t,r){if(f.isBuffer(r)){var e=0|p(r.length);return 0===(t=u(t,e)).length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?u(t,0):l(t,r);if("Buffer"===r.type&&o(r.data))return l(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function h(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function c(t,r){if(h(r),t=u(t,r<0?0:0|p(r)),!f.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function l(t,r){var e=r.length<0?0:0|p(r.length);t=u(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function p(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function d(t,r){if(f.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return F(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return j(t).length;default:if(n)return F(t).length;r=(""+r).toLowerCase(),n=!0}}function g(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function w(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=f.from(r,n)),f.isBuffer(r))return 0===r.length?-1:y(t,r,e,n,i);if("number"==typeof r)return r&=255,f.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):y(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function y(t,r,e,n,i){var o,s=1,u=t.length,f=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;s=2,u/=2,f/=2,e/=2}function a(t,r){return 1===s?t[r]:t.readUInt16BE(r*s)}if(i){var h=-1;for(o=e;o<u;o++)if(a(t,o)===a(r,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===f)return h*s}else-1!==h&&(o-=o-h),h=-1}else for(e+f>u&&(e=u-f),o=e;o>=0;o--){for(var c=!0,l=0;l<f;l++)if(a(t,o+l)!==a(r,l)){c=!1;break}if(c)return o}return-1}function v(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var s=0;s<n;++s){var u=parseInt(r.substr(2*s,2),16);if(isNaN(u))return s;t[e+s]=u}return s}function E(t,r,e,n){return z(F(r,t.length-e),t,e,n)}function b(t,r,e,n){return z(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function m(t,r,e,n){return b(t,r,e,n)}function A(t,r,e,n){return z(j(r),t,e,n)}function I(t,r,e,n){return z(function(t,r){for(var e,n,i,o=[],s=0;s<t.length&&!((r-=2)<0);++s)e=t.charCodeAt(s),n=e>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function B(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function _(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,s,u,f,a=t[i],h=null,c=a>239?4:a>223?3:a>191?2:1;if(i+c<=e)switch(c){case 1:a<128&&(h=a);break;case 2:128==(192&(o=t[i+1]))&&(f=(31&a)<<6|63&o)>127&&(h=f);break;case 3:o=t[i+1],s=t[i+2],128==(192&o)&&128==(192&s)&&(f=(15&a)<<12|(63&o)<<6|63&s)>2047&&(f<55296||f>57343)&&(h=f);break;case 4:o=t[i+1],s=t[i+2],u=t[i+3],128==(192&o)&&128==(192&s)&&128==(192&u)&&(f=(15&a)<<18|(63&o)<<12|(63&s)<<6|63&u)>65535&&f<1114112&&(h=f)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return function(t){var r=t.length;if(r<=R)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=R));return e}(n)}r.Buffer=f,r.SlowBuffer=function(t){+t!=t&&(t=0);return f.alloc(+t)},r.INSPECT_MAX_BYTES=50,f.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),r.kMaxLength=s(),f.poolSize=8192,f._augment=function(t){return t.__proto__=f.prototype,t},f.from=function(t,r,e){return a(null,t,r,e)},f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&f[Symbol.species]===f&&Object.defineProperty(f,Symbol.species,{value:null,configurable:!0})),f.alloc=function(t,r,e){return function(t,r,e,n){return h(r),r<=0?u(t,r):void 0!==e?"string"==typeof n?u(t,r).fill(e,n):u(t,r).fill(e):u(t,r)}(null,t,r,e)},f.allocUnsafe=function(t){return c(null,t)},f.allocUnsafeSlow=function(t){return c(null,t)},f.isBuffer=function(t){return!(null==t||!t._isBuffer)},f.compare=function(t,r){if(!f.isBuffer(t)||!f.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,r){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=f.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var s=t[e];if(!f.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,i),i+=s.length}return n},f.byteLength=d,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)g(this,r,r+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)g(this,r,r+3),g(this,r+1,r+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)g(this,r,r+7),g(this,r+1,r+6),g(this,r+2,r+5),g(this,r+3,r+4);return this},f.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?_(this,0,t):function(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return U(this,r,e);case"utf8":case"utf-8":return _(this,r,e);case"ascii":return S(this,r,e);case"latin1":case"binary":return T(this,r,e);case"base64":return B(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}.apply(this,arguments)},f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},f.prototype.compare=function(t,r,e,n,i){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),s=(e>>>=0)-(r>>>=0),u=Math.min(o,s),a=this.slice(n,i),h=t.slice(r,e),c=0;c<u;++c)if(a[c]!==h[c]){o=a[c],s=h[c];break}return o<s?-1:s<o?1:0},f.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},f.prototype.indexOf=function(t,r,e){return w(this,t,r,e,!0)},f.prototype.lastIndexOf=function(t,r,e){return w(this,t,r,e,!1)},f.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return v(this,t,r,e);case"utf8":case"utf-8":return E(this,t,r,e);case"ascii":return b(this,t,r,e);case"latin1":case"binary":return m(this,t,r,e);case"base64":return A(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var R=4096;function S(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function T(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function U(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=N(t[o]);return i}function P(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function L(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function M(t,r,e,n,i,o){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function k(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function C(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function O(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function Y(t,r,e,n,o){return o||O(t,0,e,4),i.write(t,r,e,n,23,4),e+4}function x(t,r,e,n,o){return o||O(t,0,e,8),i.write(t,r,e,n,52,8),e+8}f.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),f.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=f.prototype;else{var i=r-t;e=new f(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},f.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||L(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},f.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||L(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},f.prototype.readUInt8=function(t,r){return r||L(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,r){return r||L(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,r){return r||L(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,r){return r||L(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,r){return r||L(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||L(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},f.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||L(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},f.prototype.readInt8=function(t,r){return r||L(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,r){r||L(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},f.prototype.readInt16BE=function(t,r){r||L(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},f.prototype.readInt32LE=function(t,r){return r||L(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,r){return r||L(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,r){return r||L(t,4,this.length),i.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,r){return r||L(t,4,this.length),i.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,r){return r||L(t,8,this.length),i.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,r){return r||L(t,8,this.length),i.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||M(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},f.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||M(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},f.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,1,255,0),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},f.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):k(this,t,r,!0),r+2},f.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):k(this,t,r,!1),r+2},f.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):C(this,t,r,!0),r+4},f.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):C(this,t,r,!1),r+4},f.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);M(this,t,r,e,i-1,-i)}var o=0,s=1,u=0;for(this[r]=255&t;++o<e&&(s*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/s>>0)-u&255;return r+e},f.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);M(this,t,r,e,i-1,-i)}var o=e-1,s=1,u=0;for(this[r+o]=255&t;--o>=0&&(s*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/s>>0)-u&255;return r+e},f.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,1,127,-128),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},f.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):k(this,t,r,!0),r+2},f.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):k(this,t,r,!1),r+2},f.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):C(this,t,r,!0),r+4},f.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):C(this,t,r,!1),r+4},f.prototype.writeFloatLE=function(t,r,e){return Y(this,t,r,!0,e)},f.prototype.writeFloatBE=function(t,r,e){return Y(this,t,r,!1,e)},f.prototype.writeDoubleLE=function(t,r,e){return x(this,t,r,!0,e)},f.prototype.writeDoubleBE=function(t,r,e){return x(this,t,r,!1,e)},f.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!f.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},f.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var s=f.isBuffer(t)?t:F(new f(t,n).toString()),u=s.length;for(o=0;o<e-r;++o)this[o+r]=s[o%u]}return this};var D=/[^+\/0-9A-Za-z-_]/g;function N(t){return t<16?"0"+t.toString(16):t.toString(16)}function F(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],s=0;s<n;++s){if((e=t.charCodeAt(s))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function j(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(D,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function z(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}}).call(this,e(7))},function(t,r,e){"use strict";var n=e(5),i=e.n(n);const o="";r.a=class{constructor(t){t=t||{},this.isSupport=void 0!==window.WebSocket,this.socket=null,this.callback=t.callback||new window.Function,this.heartbeatTimer=null,this.reConnectCount=0,this.connectTimeout=500,this.failCount=1}static NP(){return i.a}connect(t){return this.socket=new window.WebSocket(t||o),this.socket.binaryType="arraybuffer",new Promise((t,r)=>{this.socket.addEventListener("open",r=>{console.log("connected"),this._sendHeartbeat(),t()}),this.socket.addEventListener("error",t=>{console.log("error")}),this.socket.addEventListener("close",t=>{console.log("close"),this.socket=null,this.reconnect(),r(new Error("close"))})})}reconnect(){this.reConnectCount>=6*this.failCount&&(this.failCount=2,this.connectTimeout>=3e4?this.connectTimeout=3e4:this.connectTimeout=this.connectTimeout*this.failCount),this.reConnectCount++,setTimeout(()=>{setTimeout(()=>{this.destory(),this.callback()},1)},this.connectTimeout)}send(t){if(!this.socket||this.socket.readyState!==window.WebSocket.OPEN)return!1;this.socket.send(t)}destory(){this.socket&&this.socket.readyState!==window.WebSocket.CLOSED&&this.socket.close(),this.socket=null,clearInterval(this.heartbeatTimer)}_sendHeartbeat(){if(!this.socket)return!1;this.heartbeatTimer=setInterval(()=>{this.send("")},1e4)}}},function(t,r,e){"use strict";r.a=class{constructor(t,r,e){if(this.receiveCallback=r,this.code=e,this.data=t,!e)throw"Resolver code 不能为空"}setData(t){this.data=t}setCode(t){this.code=t}getData(){return this.data}getCode(){return this.code}send(t){return t||this.getData()}receive(t){return this.receiveCallback&&this.receiveCallback(t)}}},function(t,r,e){"use strict";var n=e(0),i=e.n(n);const o=i.a.Buffer;for(var s=[],u=0;u<256;u++)s[u]=(u>15?"":"0")+u.toString(16);function f(t,r){t instanceof o?(this.buffer=t,this.offset=r||0):"[object Uint8Array]"===Object.prototype.toString.call(t)?(this.buffer=new o(t),this.offset=r||0):(this.buffer=this.buffer||new o(8),this.offset=0,this.setValue.apply(this,arguments))}f.MAX_INT=Math.pow(2,53),f.MIN_INT=-Math.pow(2,53),f.prototype={constructor:f,_2scomp:function(){for(var t=this.buffer,r=this.offset,e=1,n=r+7;n>=r;n--){var i=(255^t[n])+e;t[n]=255&i,e=i>>8}},setValue:function(t,r){var e=!1;if(1===arguments.length)if("number"==typeof t){if(e=t<0,r=(t=Math.abs(t))%4294967296,(t/=4294967296)>4294967296)throw new RangeError(t+" is outside Int64 range");t|=0}else{if("string"!=typeof t)throw new Error(t+" must be a Number or String");r=(t=(t+"").replace(/^0x/,"")).substr(-8),t=t.length>8?t.substr(0,t.length-8):"",t=parseInt(t,16),r=parseInt(r,16)}for(var n=this.buffer,i=this.offset,o=7;o>=0;o--)n[i+o]=255&r,r=4===o?t:r>>>8;e&&this._2scomp()},toNumber:function(t){for(var r=this.buffer,e=this.offset,n=128&r[e],i=0,o=1,s=7,u=1;s>=0;s--,u*=256){var a=r[e+s];n&&(o=(a=(255^a)+o)>>8,a&=255),i+=a*u}return!t&&i>=f.MAX_INT?n?-1/0:1/0:n?-i:i},valueOf:function(){return this.toNumber(!1)},toString:function(t){return this.valueOf().toString(t||10)},toOctetString:function(t){for(var r=new Array(8),e=this.buffer,n=this.offset,i=0;i<8;i++)r[i]=s[e[n+i]];return r.join(t||"")},toBuffer:function(t){if(t&&0===this.offset)return this.buffer;var r=new o(8);return this.buffer.copy(r,0,this.offset,this.offset+8),r},copy:function(t,r){this.buffer.copy(t,r||0,this.offset,this.offset+8)},compare:function(t){if((128&this.buffer[this.offset])!=(128&t.buffer[t.offset]))return t.buffer[t.offset]-this.buffer[this.offset];for(var r=0;r<8;r++)if(this.buffer[this.offset+r]!==t.buffer[t.offset+r])return this.buffer[this.offset+r]-t.buffer[t.offset+r];return 0},equals:function(t){return 0===this.compare(t)},inspect:function(){return"[Int64 value:"+this+" octets:"+this.toOctetString(" ")+"]"}};var a=f;const h=i.a.Buffer,c=102400;r.a=class{constructor(t){null==t&&(t=h.alloc(c),this.writeMode=!0),this.buf=t,this.position=0}remain(){return this.buf.length-this.position}read(t,r){const e=this.buf[t](this.position);return this.position+=r,e}write(t,r,e){if(!this.writeMode)throw new Error("不是写入模式");if(this.position+e>this.buf.length){const t=Math.ceil((this.position+e)/c)*c,r=h.alloc(t);this.buf.copy(r),this.buf=r}this.buf[t](r,this.position),this.position+=e}readInt8(){return this.read("readInt8",1)}readInt16BE(){return this.read("readInt16BE",2)}readInt16LE(){return this.read("readInt16LE",2)}readInt32BE(){return this.read("readInt32BE",4)}readInt32LE(){return this.read("readInt32LE",4)}readInt64LE(){const t=this.read("readInt32LE",4),r=this.read("readInt32LE",4);return new a(r,t).toNumber(!0)}readUInt64LE(){const t=this.read("readInt32LE",4),r=this.read("readInt32LE",4);return new a(r,t).toNumber(!0)}readUInt8(){return this.read("readUInt8",1)}readUInt16BE(){return this.read("readUInt16BE",2)}readUInt16LE(){return this.read("readUInt16LE",2)}readUInt32BE(){return this.read("readUInt32BE",4)}readUInt32LE(){return this.read("readUInt32LE",4)}readFloatBE(){return this.read("readFloatBE",4)}readFloatLE(){return this.read("readFloatLE",4)}readDoubleBE(){return this.read("readDoubleBE",8)}readDoubleLE(){return this.read("readDoubleLE",8)}writeInt8(t){return this.write("writeInt8",t,1)}writeInt16BE(t){return this.write("writeInt16BE",t,2)}writeInt16LE(t){return this.write("writeInt16LE",t,2)}writeInt32BE(t){return this.write("writeInt32BE",t,4)}writeInt32LE(t){return this.write("writeInt32LE",t,4)}writeInt64LE(t){const r=new a(t).toBuffer(),e=[7,6,5,4,3,2,1,0];let n="";for(n of e)this.write("writeUInt8",r[n],1)}writeUInt8(t){return this.write("writeUInt8",t,1)}writeUInt16BE(t){return this.write("writeUInt16BE",t,2)}writeUInt16LE(t){return this.write("writeUInt16LE",t,2)}writeUInt32BE(t){return this.write("writeUInt32BE",t,4)}writeUInt32LE(t){return this.write("writeUInt32LE",t,4)}writeFloatBE(t){return this.write("writeFloatBE",t,4)}writeFloatLE(t){return this.write("writeFloatLE",t,4)}writeDoubleBE(t){return this.write("writeDoubleBE",t,8)}writeDoubleLE(t){return this.write("writeDoubleLE",t,8)}readStringBE(){const t=this.readUInt16BE(),r=this.buf.toString("utf-8",this.position,this.position+t);return this.position+=t,r}readStringLE(){const t=this.readUInt16LE(),r=this.buf.toString("utf-8",this.position,this.position+t);return this.position+=t,r}writeStringBE(t){const r=h.from(t).length;this.writeInt16BE(r),this.buf.write(t,this.position),this.position+=r}writeStringLE(t){const r=h.from(t).length;this.writeInt16LE(r),this.buf.write(t,this.position),this.position+=r}length(){return this.buf.length}toBuffer(){return this.buf.slice(0,this.position)}toPackageBufferBE(){const t=h.alloc(this.position+2);return this.buf.copy(t,2),t.writeInt16BE(t.length,0),t}toPackageBufferLE(){const t=h.alloc(this.position+2);return this.buf.copy(t,2),t.writeInt16LE(t.length,0),t}}},function(t,r,e){"use strict";(function(t){var n=e(1),i=e(3),o=e(2);const s="";r.a=class{constructor(t){this.socketMarket=new n.a({}),this.resolveris=[],this.url=t||s}addResolver(t){if(!(t instanceof o.a))throw"解析器必须实现Resolver类";this.resolveris.push(t)}open(){return new Promise((t,r)=>{this.socketMarket.connect(this.url).then(()=>{this.listen(),t({})},r)})}listen(){let r=this;this.socketMarket.socket.addEventListener("message",e=>{const n=new Uint8Array(e.data),o=new i.a(t.from(n)),s=o.readUInt16LE();r.resolveris.map(t=>{s===t.getCode()&&t.receive(o,e)})})}close(){this.socketMarket.destory()}send(t,r){this.addResolver(t);let e=t&&t.send(r);this.socketMarket.send(e)}on(t){this.addResolver(t)}}}).call(this,e(0).Buffer)},function(t,r,e){"use strict";function n(t,r){return void 0===r&&(r=12),+parseFloat(t.toPrecision(r))}function i(t){var r=t.toString().split(/[eE]/),e=(r[0].split(".")[1]||"").length-+(r[1]||0);return e>0?e:0}function o(t){if(-1===t.toString().indexOf("e"))return Number(t.toString().replace(".",""));var r=i(t);return r>0?n(t*Math.pow(10,r)):t}function s(t){l&&(t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER)&&console.warn(t+" is beyond boundary when transfer to integer, the results may not be accurate")}function u(t,r){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];if(e.length>0)return u.apply(void 0,[u(t,r),e[0]].concat(e.slice(1)));var f=o(t),a=o(r),h=i(t)+i(r),c=f*a;return s(c),c/Math.pow(10,h)}function f(t,r){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];if(e.length>0)return f.apply(void 0,[f(t,r),e[0]].concat(e.slice(1)));var o=Math.pow(10,Math.max(i(t),i(r)));return(u(t,o)+u(r,o))/o}function a(t,r){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];if(e.length>0)return a.apply(void 0,[a(t,r),e[0]].concat(e.slice(1)));var o=Math.pow(10,Math.max(i(t),i(r)));return(u(t,o)-u(r,o))/o}function h(t,r){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];if(e.length>0)return h.apply(void 0,[h(t,r),e[0]].concat(e.slice(1)));var f=o(t),a=o(r);return s(f),s(a),u(f/a,Math.pow(10,i(r)-i(t)))}function c(t,r){var e=Math.pow(10,r);return h(Math.round(u(t,e)),e)}Object.defineProperty(r,"__esModule",{value:!0});var l=!0;function p(t){void 0===t&&(t=!0),l=t}var d={strip:n,plus:f,minus:a,times:u,divide:h,round:c,digitLength:i,float2Fixed:o,enableBoundaryChecking:p};r.strip=n,r.plus=f,r.minus=a,r.times=u,r.divide=h,r.round=c,r.digitLength=i,r.float2Fixed=o,r.enableBoundaryChecking=p,r.default=d},function(t,r,e){"use strict";e.r(r),e.d(r,"WebSocket2",function(){return u}),e.d(r,"Resolver",function(){return f}),e.d(r,"ByteBuffer",function(){return a}),e.d(r,"KilaSocket",function(){return h});var n=e(4),i=e(2),o=e(3),s=e(1);const u=n.a,f=i.a,a=o.a,h=s.a;r.default=u},function(t,r){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,r,e){"use strict";r.byteLength=function(t){var r=a(t),e=r[0],n=r[1];return 3*(e+n)/4-n},r.toByteArray=function(t){var r,e,n=a(t),s=n[0],u=n[1],f=new o(function(t,r,e){return 3*(r+e)/4-e}(0,s,u)),h=0,c=u>0?s-4:s;for(e=0;e<c;e+=4)r=i[t.charCodeAt(e)]<<18|i[t.charCodeAt(e+1)]<<12|i[t.charCodeAt(e+2)]<<6|i[t.charCodeAt(e+3)],f[h++]=r>>16&255,f[h++]=r>>8&255,f[h++]=255&r;2===u&&(r=i[t.charCodeAt(e)]<<2|i[t.charCodeAt(e+1)]>>4,f[h++]=255&r);1===u&&(r=i[t.charCodeAt(e)]<<10|i[t.charCodeAt(e+1)]<<4|i[t.charCodeAt(e+2)]>>2,f[h++]=r>>8&255,f[h++]=255&r);return f},r.fromByteArray=function(t){for(var r,e=t.length,i=e%3,o=[],s=0,u=e-i;s<u;s+=16383)o.push(h(t,s,s+16383>u?u:s+16383));1===i?(r=t[e-1],o.push(n[r>>2]+n[r<<4&63]+"==")):2===i&&(r=(t[e-2]<<8)+t[e-1],o.push(n[r>>10]+n[r>>4&63]+n[r<<2&63]+"="));return o.join("")};for(var n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,f=s.length;u<f;++u)n[u]=s[u],i[s.charCodeAt(u)]=u;function a(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");return-1===e&&(e=r),[e,e===r?0:4-e%4]}function h(t,r,e){for(var i,o,s=[],u=r;u<e;u+=3)i=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),s.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return s.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(t,r){r.read=function(t,r,e,n,i){var o,s,u=8*i-n-1,f=(1<<u)-1,a=f>>1,h=-7,c=e?i-1:0,l=e?-1:1,p=t[r+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=u;h>0;o=256*o+t[r+c],c+=l,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=n;h>0;s=256*s+t[r+c],c+=l,h-=8);if(0===o)o=1-a;else{if(o===f)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=a}return(p?-1:1)*s*Math.pow(2,o-n)},r.write=function(t,r,e,n,i,o){var s,u,f,a=8*o-i-1,h=(1<<a)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,g=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,s=h):(s=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-s))<1&&(s--,f*=2),(r+=s+c>=1?l/f:l*Math.pow(2,1-c))*f>=2&&(s++,f/=2),s+c>=h?(u=0,s=h):s+c>=1?(u=(r*f-1)*Math.pow(2,i),s+=c):(u=r*Math.pow(2,c-1)*Math.pow(2,i),s=0));i>=8;t[e+p]=255&u,p+=d,u/=256,i-=8);for(s=s<<i|u,a+=i;a>0;t[e+p]=255&s,p+=d,s/=256,a-=8);t[e+p-d]|=128*g}},function(t,r){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}}])});