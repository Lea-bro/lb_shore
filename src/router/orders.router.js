const Router = require('koa-router');
const orderRouter = new Router({prefix:'/order'});

const {
    verifyAuth,
} = require('../middleware/auth.middleware');

const {
    orderAdd,
    orderNumber,
    allGetOrder
} = require('../controller/order.controller');

// 添加订单：验证token -> 获取订单详情进行存储 
orderRouter.post('/',verifyAuth,orderAdd)

// 查询用户订单：验证token -> 获取用户订单
orderRouter.get('/',verifyAuth,orderNumber)
// 获取所有订单
orderRouter.get('/orders',allGetOrder)



module.exports = orderRouter;