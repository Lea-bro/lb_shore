const orserService = require('../service/order.service');
class OrderController{
    // 添加订单
    async orderAdd(ctx,next){
        const { id } = ctx.user
        const orderNum = new Date().getTime() + id
        const orderInfo = ctx.request.body.orderInfo
        let dataArray = []
        orderInfo.forEach(item => {
            const data = {...item,id,orderNum}
            dataArray.push(data)
        });
        // console.log(dataArray)
        for(let i = 0; i < dataArray.length;i++){
            // console.log(1)
            await orserService.orderAdd(dataArray[i])
        }
        ctx.body = "商品购买成功"
        
    }
}

module.exports = new OrderController()