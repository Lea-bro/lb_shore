const connection = require('../app/database');

class fileService{
    async createAvatar(filename,mimetype,size,id){
        const statement = `INSERT INTO avatar (filename,mimetype,size,user_id) VALUE(?,?,?,?);`
        const [result] = await connection.execute(statement,[filename,mimetype,size,id])
        return result
    }

    async getAvatarByUserId(userId){
        const statement = `SELECT * FROM avatar WHERE  user_id = ?`
        const [result] = await connection.execute(statement,[userId])
        
        // 当数据库中同个用户上传过多个头像的话，返回的数组中会pop出最后一个更新的头像
        return result.pop();
    }
}

module.exports= new fileService()