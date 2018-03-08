"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function handler$1(e,t){if(!e)throw new Error("event must be defined");if("object"!==(void 0===e?"undefined":_typeof(e)))throw new Error("event must be an object");if("function"!=typeof this.setState)throw new Error("react-input-handler must be bound to the component instance");if(void 0===t&&"function"!=typeof t)throw new Error("the 2nd argument of react-input-handler must be a function");var r=e.target,n=r.name;if(!n)throw new Error("all input must have a name prop");if("[]"===n.substr(-2)){var o=n.substr(0,n.length-2),u=getValue(r),a=this.state[o]||[],i=r.value;if(u)-1===a.indexOf(i)&&this.setState(function(e){return defineProperty({},o,a.concat(i))});else{var f=a.indexOf(i);f>-1&&a.splice(f,1),this.setState(function(e){return set(e,o,a)},t)}}else this.setState(function(e){return set(e,n,getValue(r))},t)}function getValue(e){switch(e.type){case"checkbox":return e.checked;case"select-multiple":return[].concat(toConsumableArray(e.querySelectorAll(":checked"))).map(function(e){return e.value});default:return e.value}}var set=_interopDefault(require("lodash.set")),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},defineProperty=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)};module.exports=handler$1;
//# sourceMappingURL=react-input-handler.js.map
