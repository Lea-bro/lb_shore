const sendError = require('../utils/sendError');
const service = require('../service/user.service');
const md5password = require('../utils/password-handle');

const verifyUser = async (ctx,next) => {
    console.log('用户注册')
    // 1、获取用户名和密码
    const {name,password} = ctx.request.body

    // 2、判断用户名或者密码不能为空
    if(!name || !password){
        return sendError.NAME_OR_PASSWORD_IS_REQUIRED(ctx)
    }
    
    // 3、判断这次户名是没有被注册过的
    const result = await service.getUserName(name);
    
    if(result.length){ //注册过的抛出错误
        return sendError.USER_ALREADY_EXISTS(ctx)
    }

    await next()
}


const handlePassword = async(ctx,next) => {
    let {password} = ctx.request.body;
    ctx.request.body.password = md5password(password)
    
    await next()
}


module.exports = {
    verifyUser,
    handlePassword
}