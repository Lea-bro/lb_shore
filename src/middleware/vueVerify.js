const vueVerify = async (ctx,next) => {
    ctx.response.set("Access-Control-Allow-Origin", "*")
    await next()
}
export {
    vueVerify
}
    
