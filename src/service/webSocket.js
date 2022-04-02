const webSocket = require('ws');


const usersMap = new Map()
const webSocketFn = (server) => {
   const ws = new webSocket.Server({server:server})

   ws.on("connection",(client,req) => {
        console.log("有客服端连接成功------")
        console.log(req.url)
        const id = req.url.split("%22")[1] ?? req.url.split("=")[1]
        client.id = id
        client.isConnectionStatus = true
        // const isUserClient = usersMap.get(id)
        usersMap.set(id,client)
        // if(!isUserClient || !isUserClient.isConnectionStatus){
        //     usersMap.set(id,client)
        // }

        // 监听消息
        client.on("message",(data) => {
            const { userId, text} = JSON.parse(data)
            const userClient = usersMap.get(userId)
            // console.log(typeof userId)
            if(userClient){
                // console.log("222",userClient.isConnectionStatus)
                if(userClient.isConnectionStatus){
                    userClient.send(JSON.stringify(text))
                } else{
                    client.send(JSON.stringify("对方不在线"))
                }
            } else{
                client.send(JSON.stringify("不存在用户"))
            }
        })
        client.on("close",() => {
            client.isConnectionStatus = false
            console.log("用户关闭连接",client.id)
        })
   })
}


module.exports = {
    webSocketFn
}