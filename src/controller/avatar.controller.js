const fileService = require('../service/file.service');
const userService = require('../service/user.service');
const {APP_HOST,APP_PORT} = require('../app/config');

class FileController{
    async saveAvatarInfo(ctx,next){
        // 1.获取头像相关信息
        const {filename, mimetype,size} = ctx.req.file
        const { id } = ctx.user

        // 2.将图片数据保存到数据库中
        const result = await fileService.createAvatar(filename,mimetype,size,id)

        console.log('111',result)
        // 3.将图片地址保存到users表中
        // 拼接的地址
        const avatarUrl = `${APP_HOST}:${APP_PORT}/users/${id}/avatar`;
        const result1 = await userService.updateAvatarUrlById(avatarUrl,id)
        console.log('222',result1)

        ctx.body = "上传头像成功"
    }
}

module.exports = new FileController()