const orderService = require('../service/order.service');
class OrderController{
    // 添加订单
    async orderAdd(ctx,next){
        console.log("1111")
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
            await orderService.orderAdd(dataArray[i])
        }
        ctx.body = "商品购买成功"
        
    }

    // 获取订单数量
    async orderNumber(ctx,next){
        // console.log(ctx.user)
        const { id } = ctx.user
        const result = await orderService.orderNum(id)
        // console.log(result)
        ctx.body = result
    }

    async allGetOrder(ctx,next){
        const result =  await orderService.allGetOrder()
        ctx.body = result
    }
}

module.exports = new OrderController()