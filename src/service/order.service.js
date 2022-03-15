const connection = require('../app/database');

class OrserService{
    async orderAdd({orderNum,title,iid,count,image,price,id}){
        const statement = `INSERT INTO orders 
                           (order_number,goods_title,goods_id,count,imageUrl,price,user_id)VALUE (?,?,?,?,?,?,?)`

        const [result] = await connection.execute(statement,[orderNum,title,iid,count,image,price,id])
        return result
    }

    // 获取用户订单
    async orderNum(userId){
        const statement = `SELECT * FROM orders WHERE user_id = ?;`

        const [result] = await connection.execute(statement,[userId])
        return result
    }

    // 获取所有订单
    async allGetOrder(){
        const statement = `SELECT * FROM orders`
        const [result] = await connection.execute(statement)
        return result
    }
}

module.exports = new OrserService()