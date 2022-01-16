const Router = require('koa-router')

const {
    homeMultidata,
    honmData,
    detail,
    recommend
} = require('../middleware/supermall.middleware')

const superRouter = new Router({prefix:'/supermall'})

// 接口一
superRouter.get('/home/multidata',homeMultidata)

// 接口二
superRouter.get('/home/data',honmData)

// 接口三
superRouter.get('/detail',detail)

// 接口四
superRouter.get('/recommend',recommend)

module.exports = superRouter