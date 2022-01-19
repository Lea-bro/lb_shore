const Router = require('koa-router');
const authRouter = new Router();

const {
    verifyLogin,
    verifyAuth
} = require('../middleware/auth.middleware');

const {
    login,
    success
} = require('../controller/auth.controller');

const {vueVerify} = require('../middleware/vueVerify')
// 用户登录： 验证账号密码 -> 颁发token
authRouter.post('/login',vueVerify,verifyLogin,login)
authRouter.get('/test', vueVerify,verifyAuth,success)

module.exports = authRouter