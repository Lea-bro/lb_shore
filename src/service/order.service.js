const connection = require('../app/database');

class OrserService{
    async orderAdd({orderNum,title,iid,count,image,price,id}){
        const statement = `INSERT INTO orders 
                           (order_number,goods_title,goods_id,count,imageUrl,price,user_id)VALUE (?,?,?,?,?,?,?)`

        const [result] = await connection.execute(statement,[orderNum,title,iid,count,image,price,id])
        return result
    }

    // 订单数量
    async orderNum(userId){
        const statement = `SELECT * FROM orders WHERE user_id = ?;`

        const [result] = await connection.execute(statement,[userId])
        return result
    }
}

module.exports = new OrserService()