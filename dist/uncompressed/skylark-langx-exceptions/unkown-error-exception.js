define([
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