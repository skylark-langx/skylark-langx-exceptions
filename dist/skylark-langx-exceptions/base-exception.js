/**
 * skylark-langx-exceptions - The skylark exception utility library
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./exceptions"],function(t){function n(t){if(this.constructor===n)throw new Error("Cannot initialize BaseException.");this.message=t,this.name=this.constructor.name}return n.prototype=new Error,n.constructor=n,t.BaseException=n});
//# sourceMappingURL=sourcemaps/base-exception.js.map
