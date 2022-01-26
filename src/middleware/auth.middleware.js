const sendError = require('../utils/sendError');
const jwt = require('jsonwebtoken');
const {PUBLIC_KEY} = require('../app/config');
const userService = require('../service/user.service');
const md5password = require('../utils/password-handle.js');

class authVerify{
    async verifyLogin(ctx,next){
        // 1.获取用户名和密码
        // console.log('123')
        const { name, password} = ctx.request.body;
        // console.log(name,password)

        // 2.判断账号密码是否为空
        if(!name || !password){
            return sendError.NAME_OR_PASSWORD_IS_REQUIRED(ctx)
        }

        // 3.判断用户是否存在（用户不存在）
        const result = await userService.getUserName(name);
        const user = result[0]
        if(!user){
            return sendError.USER_DOES_NOT_EXISTS(ctx)
        }

        // 4.判断密码是否和数据库中的密码一致
        const encrypPassword = md5password(password)
        if(user.password !== encrypPassword){
            return sendError.PASSWORD_IS_INCORRECTNESS(ctx)
        }

        ctx.user = user
        await next()
    }

    async verifyAuth(ctx,next){
        // 获取token
        const authorization = ctx.headers.authorization;
        if(!authorization){//没有token
            return sendError.UNAUTHORIZATION(ctx)
        }
        const token = authorization.replace('Bearer ',"")

        // 验证token
        try {
            const result = jwt.verify(token,PUBLIC_KEY,{
                algorithms:["RS256"]
            })
            ctx.user = result
            await next()
        } catch (error) {
            console.log(error)
            return sendError.UNAUTHORIZATION(ctx);
        }
    }
}

module.exports = new authVerify()