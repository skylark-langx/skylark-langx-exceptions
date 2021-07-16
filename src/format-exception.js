define([
    "./exceptions",
    "./base-exception"
],function(exceptions,BaseException){
    class FormatException extends BaseException {
    }
    return exceptions.FormatException = FormatException;
});