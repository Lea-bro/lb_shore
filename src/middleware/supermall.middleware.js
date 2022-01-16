const { default: axios } = require("axios");


const homeMultidata = async(ctx,next) => {

    const result = await axios('http://152.136.185.210:7878/api/hy66/home/multidata')
    // console.log(ctx.response.header)

    ctx.body = result.data
}

const honmData = async(ctx,next) => {
    const {type,page} = ctx.query
    const result = await axios(`http://152.136.185.210:7878/api/hy66/home/data?type=${type}&page=${page}`)

    ctx.body = result.data
}

const detail = async (ctx,next) => {
    const {iid} = ctx.query
    const result = await axios(`http://152.136.185.210:7878/api/hy66/detail?iid=${iid}`)
    ctx.body = result.data
}

const recommend = async(ctx,next) => {
    const result = await axios('http://152.136.185.210:7878/api/hy66/recommend')

    ctx.body = result.data
}

module.exports = {
    homeMultidata,
    honmData,
    detail,
    recommend
}