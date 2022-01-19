const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors'); //解决跨域

const useRoutes = require('../router')
const errorHandle = require('./errorHandle') //错误处理

const app = new Koa();

app.use(bodyParser()); //对JSON数据解析
app.use(cors())

useRoutes(app);

app.on('error',errorHandle)

module.exports = app