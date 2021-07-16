/**
 * skylark-langx-exceptions - The skylark exception utility library
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,n){var t=n.define,require=n.require,r="function"==typeof t&&t.amd,o=!r&&"undefined"!=typeof exports;if(!r&&!t){var i={};t=n.define=function(e,n,t){"function"==typeof t?(i[e]={factory:t,deps:n.map(function(n){return function(e,n){if("."!==e[0])return e;var t=n.split("/"),r=e.split("/");t.pop();for(var o=0;o<r.length;o++)"."!=r[o]&&(".."==r[o]?t.pop():t.push(r[o]));return t.join("/")}(n,e)}),resolved:!1,exports:null},require(e)):i[e]={factory:null,resolved:!0,exports:t}},require=n.require=function(e){if(!i.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var module=i[e];if(!module.resolved){var t=[];module.deps.forEach(function(e){t.push(require(e))}),module.exports=module.factory.apply(n,t)||null,module.resolved=!0}return module.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,require){e("skylark-langx-exceptions/exceptions",["skylark-langx-ns"],function(e){return e.attach("langx.exceptions")}),e("skylark-langx-exceptions/base-exception",["./exceptions"],function(e){function n(e){if(this.constructor===n)throw new Error("Cannot initialize BaseException.");this.message=e,this.name=this.constructor.name}return n.prototype=new Error,n.constructor=n,e.BaseException=n}),e("skylark-langx-exceptions/abort-exception",["./exceptions","./base-exception"],function(e,n){return e.AbortException=class extends n{}}),e("skylark-langx-exceptions/unkown-error-exception",["./exceptions","./base-exception"],function(e,n){return e.UnknownErrorException=class extends n{constructor(e,n){super(e),this.details=n}}}),e("skylark-langx-exceptions/main",["./exceptions","./base-exception","./abort-exception","./unkown-error-exception"],function(e){return e}),e("skylark-langx-exceptions",["skylark-langx-exceptions/main"],function(e){return e})}(t),!r){var s=require("skylark-langx-ns");o?module.exports=s:n.skylarkjs=s}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-exceptions.js.map
