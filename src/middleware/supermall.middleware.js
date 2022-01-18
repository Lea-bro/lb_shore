const { default: axios } = require("axios");


const homeMultidata = async(ctx,next) => {

    const result = await axios('http://152.136.185.210:7878/api/hy66/home/multidata')
    ctx.response.set("Access-Control-Allow-Origin", "*")
    
    ctx.body = result.data
}

const honmData = async(ctx,next) => {
    const {type,page} = ctx.query
    const result = await axios(`http://152.136.185.210:7878/api/hy66/home/data?type=${type}&page=${page}`)
    
    ctx.response.set("Access-Control-Allow-Origin", "*")
    ctx.body = result.data
}

const detail = async (ctx,next) => {
    const {iid} = ctx.query
    const result = await axios(`http://152.136.185.210:7878/api/hy66/detail?iid=${iid}`)
    ctx.response.set("Access-Control-Allow-Origin", "*")
    ctx.body = result.data
}

const recommend = async(ctx,next) => {
    const result = await axios('http://152.136.185.210:7878/api/hy66/recommend')
    
    ctx.response.set("Access-Control-Allow-Origin", "*")
    ctx.body = result.data
}

const category = async(ctx,next) => {
    const result = await axios('http://152.136.185.210:7878/api/hy66/category')
    
    ctx.response.set("Access-Control-Allow-Origin", "*")
    ctx.body = result.data
}

const subcategory = async(ctx,next) => {
    const {maitKey} = ctx.query
    const result = await axios(`http://152.136.185.210:7878/api/hy66/subcategory?maitKey=${maitKey}`)

    ctx.response.set("Access-Control-Allow-Origin", "*")
    ctx.body = result.data
}

const subDetail = async(ctx ,next) => {
    const {miniWallkey,type} = ctx.query;

    const result = await axios(`http://152.136.185.210:7878/api/hy66/subcategory?miniWallkey=${miniWallkey}&type=${type}`)

    ctx.response.set("Access-Control-Allow-Origin", "*")
    ctx.body = result.data
}

module.exports = {
    homeMultidata,
    honmData,
    detail,
    recommend,
    category,
    subcategory,
    subDetail
}