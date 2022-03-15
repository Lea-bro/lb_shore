const router = require('koa-router');

const { 
    verifyUser,
    handlePassword
 } = require('../middleware/user.middleware');

 const {
     create,
     avatarInfo,
     getUserList,
     deleteUser
 } = require('../controller/user.controller')

const userRoter = new router({prefix:"/user"})



// 用户注册： 验证注册账号 -> 密码加密 -> 存储到数据库
userRoter.post('/',verifyUser,handlePassword,create)
// 获取所有用户列表:
userRoter.get('/',getUserList)
// 删除用户
userRoter.post('/delete',deleteUser)
// 获取用户头像：
userRoter.get('/:userId/avatar',avatarInfo)


module.exports = userRoter