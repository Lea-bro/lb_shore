const connection = require('../app/database');

class OrserService{
    async orderAdd({orderNum,title,iid,count,image,price,id}){
        const statement = `INSERT INTO orders 
                           (order_number,goods_title,goods_id,count,imageUrl,price,user_id)VALUE (?,?,?,?,?,?,?)`

        const [result] = await connection.execute(statement,[orderNum,title,iid,count,image,price,id])
        // console.log(result)
        return result
        
    }
}

module.exports = new OrserService()