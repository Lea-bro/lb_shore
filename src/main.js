const app = require('./app');
require('./app/database')
const config = require('./app/config')  //常量



app.listen(config.APP_PORT, () => {
    console.log(`服务器在端口${config.APP_PORT}启动成功`);
});