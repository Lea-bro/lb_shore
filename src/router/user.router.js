const router = require('koa-router');

const { 
    verifyUser,
    handlePassword
 } = require('../middleware/user.middleware');

 const {
     create,
     avatarInfo
 } = require('../controller/user.controller')

const userRoter = new router({prefix:"/user"})

const {vueVerify} = require('../middleware/vueVerify')

// 用户注册： 验证注册账号 -> 密码加密 -> 存储到数据库
userRoter.post('/',vueVerify,verifyUser,handlePassword,create)

// 获取用户头像：
userRoter.get('/:userId/avatar',vueVerify,avatarInfo)


module.exports = userRoter