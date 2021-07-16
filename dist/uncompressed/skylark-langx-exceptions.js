/**
 * skylark-langx-exceptions - The skylark exception utility library
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
(function(factory,globals) {
  var define = globals.define,
      require = globals.require,
      isAmd = (typeof define === 'function' && define.amd),
      isCmd = (!isAmd && typeof exports !== 'undefined');

  if (!isAmd && !define) {
    var map = {};
    function absolute(relative, base) {
        if (relative[0]!==".") {
          return relative;
        }
        var stack = base.split("/"),
            parts = relative.split("/");
        stack.pop(); 
        for (var i=0; i<parts.length; i++) {
            if (parts[i] == ".")
                continue;
            if (parts[i] == "..")
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join("/");
    }
    define = globals.define = function(id, deps, factory) {
        if (typeof factory == 'function') {
            map[id] = {
                factory: factory,
                deps: deps.map(function(dep){
                  return absolute(dep,id);
                }),
                resolved: false,
                exports: null
            };
            require(id);
        } else {
            map[id] = {
                factory : null,
                resolved : true,
                exports : factory
            };
        }
    };
    require = globals.require = function(id) {
        if (!map.hasOwnProperty(id)) {
            throw new Error('Module ' + id + ' has not been defined');
        }
        var module = map[id];
        if (!module.resolved) {
            var args = [];

            module.deps.forEach(function(dep){
                args.push(require(dep));
            })

            module.exports = module.factory.apply(globals, args) || null;
            module.resolved = true;
        }
        return module.exports;
    };
  }
  
  if (!define) {
     throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");
  }

  factory(define,require);

  if (!isAmd) {
    var skylarkjs = require("skylark-langx-ns");

    if (isCmd) {
      module.exports = skylarkjs;
    } else {
      globals.skylarkjs  = skylarkjs;
    }
  }

})(function(define,require) {

define('skylark-langx-exceptions/exceptions',[
    "skylark-langx-ns"
],function(skylark){

    return skylark.attach("langx.exceptions");


});
define('skylark-langx-exceptions/base-exception',[
    "./exceptions"
],function(exceptions){
    function BaseException(message) {
        if (this.constructor === BaseException) {
            throw new Error('Cannot initialize BaseException.');
        }
        this.message = message;
        this.name = this.constructor.name;
    }
    BaseException.prototype = new Error();
    BaseException.constructor = BaseException;

    return exceptions.BaseException = BaseException;
});

define('skylark-langx-exceptions/abort-exception',[
    "./exceptions",
    "./base-exception"
],function(exceptions,BaseException){
    class AbortException extends BaseException {
    }
    return exceptions.AbortException = AbortException;
});
define('skylark-langx-exceptions/format-exception',[
    "./exceptions",
    "./base-exception"
],function(exceptions,BaseException){
    class FormatException extends BaseException {
    }
    return exceptions.FormatException = FormatException;
});
define('skylark-langx-exceptions/unkown-error-exception',[
    "./exceptions",
    "./base-exception"
],function(exceptions,BaseException){
    class UnknownErrorException extends BaseException {
        constructor(msg, details) {
            super(msg);
            this.details = details;
        }
    }

    return exceptions.UnknownErrorException = UnknownErrorException;
});
define('skylark-langx-exceptions/main',[
	"./exceptions",
	"./base-exception",
	"./abort-exception",
	"./format-exception",
	"./unkown-error-exception"
],function(exceptions){
	return exceptions;
});
define('skylark-langx-exceptions', ['skylark-langx-exceptions/main'], function (main) { return main; });


},this);
//# sourceMappingURL=sourcemaps/skylark-langx-exceptions.js.map
