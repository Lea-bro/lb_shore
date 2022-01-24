const Router = require('koa-router');
const orderRouter = new Router({prefix:'/order'});

const {
    verifyAuth,
} = require('../middleware/auth.middleware');

const {
    orderAdd
} = require('../controller/order.controller');
// 添加订单：验证token -> 获取订单详情进行存储 

orderRouter.post('/',verifyAuth,orderAdd)



module.exports = orderRouter;