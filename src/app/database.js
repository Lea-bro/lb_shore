const mysql = require('mysql2');
const config = require('./config');

const connections = mysql.createPool({
    host:config.MYSQL_HOST,
    port:config.MYSQL_PORT,
    database:config.MYSQL_DATABASE,
    user:config.MYSQL_USER,
    password:config.MYSQL_PASSWORD
});



connections.getConnection((err, conn) => {
    conn?.connect((err) => {
        if (err) {
            console.los('连接失败', err)
        } else {
            console.log('数据库成功连上')
        }
    })
})

// async function foo (){
//     const statemoment = `SELECT * FROM users WHERE id = ?;`
//     const [result] =await connections.promise().execute(statemoment,[1])
//     console.log(result)
// }
// foo()

// const statemoment = `SELECT * FROM users WHERE id = ?;`
//     const result =connections.promise().execute(statemoment,[1])
//     console.log(result)
module.exports = connections.promise()