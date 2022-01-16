const fs = require('fs');

const userService = require('../service/user.service');
const fileService = require('../service/file.service');

const { AVATAR_PATH } = require('../constants/file-path')

// 
const create = async(ctx,next) => {
    //获取用户请求传递的参数
    const user = ctx.request.body

    // 查询数据
    const result = await userService.create(user);

    // 返回数据
    ctx.body = result
}

const avatarInfo = async(ctx,next) => {
    // 1.获取需要头像的用户id
    const {userId} = ctx.params
    const avatarInfo = await fileService.getAvatarByUserId(userId)
    // ctx.body = avatarInfo

    // 2.提供图像信息
    ctx.response.set('content-type',avatarInfo.mimetype)
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`)
}






module.exports = {
    create,
    avatarInfo
}