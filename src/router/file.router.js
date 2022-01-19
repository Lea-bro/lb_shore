const Router = require('koa-router');

const {
    verifyAuth
} = require('../middleware/auth.middleware');

const {
    avatarHandle
} = require('../middleware/file.middleware');

const {
    saveAvatarInfo
} = require('../controller/avatar.controller');
const fileRouter = new Router({prefix:"/upload"});

const {vueVerify} = require('../middleware/vueVerify')

// 上传用户头像： token验证 -> 头像文件处理 -> 获取头像信息再存储
fileRouter.post('/avatar',vueVerify,verifyAuth,avatarHandle,saveAvatarInfo)



module.exports = fileRouter