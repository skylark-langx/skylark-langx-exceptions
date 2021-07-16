define([
    "./exceptions",
    "./base-exception"
],function(exceptions,BaseException){
    class AbortException extends BaseException {
    }
    return exceptions.AbortException = AbortException;
});