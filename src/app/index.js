const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const useRoutes = require('../router')
const errorHandle = require('./errorHandle') //错误处理

const app = new Koa();

app.use(bodyParser()); //对JSON数据解析

useRoutes(app);

app.on('error',errorHandle)

module.exports = app