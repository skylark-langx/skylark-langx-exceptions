define([
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
