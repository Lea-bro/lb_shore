const errorType = require('../constants/errorTypes');
class sendError{
    NAME_OR_PASSWORD_IS_REQUIRED(ctx){
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED);
        return ctx.app.emit('error',error,ctx)
    }

    USER_DOES_NOT_EXISTS(ctx){
        const error = new Error(errorType.USER_DOES_NOT_EXISTS)
        return ctx.app.emit('error',error,ctx)
    }

    USER_ALREADY_EXISTS(ctx){
        const error = new Error(errorType.USER_ALREADY_EXISTS)
        return ctx.app.emit('error',error,ctx)
    }

    PASSWORD_IS_INCORRECTNESS(ctx){
        const error = new Error(errorType.PASSWORD_IS_INCORRECTNESS)
        return ctx.app.emit('error',error,ctx)
    }

    UNAUTHORIZATION(ctx){
        const error = new Error(errorType.UNAUTHORIZATION)
        return ctx.app.emit('error',error,ctx)
    }
}

module.exports = new sendError()