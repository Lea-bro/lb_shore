// 信息存到数据库
const connection = require('../app/database');

class UserService{
    async getUserName(name){
        const statement = `SELECT * FROM users WHERE name = ?;`
        const [result] = await connection.execute(statement,[name])
        return result
    }

    async create({ name, password }){
        const statement = `INSERT INTO users (name,password) VALUE (?,?);`
        const result = await connection.execute(statement, [name, password])
        return result[0]
    }

    async updateAvatarUrlById(avatarUrl,userId){
        const statement = `UPDATE users SET avatar_url = ? WHERE id = ?;`
        const [result] = await connection.execute(statement,[avatarUrl,userId])
        return result
    }
}

module.exports = new UserService()