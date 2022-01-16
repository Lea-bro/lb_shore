const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config() //将.env里的常量加入到process.env

//私钥：打开git bash：openssl -> genrsa -out private.key 1024
//公钥： rsa -in private.key -pubout -out public.key
const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname,'./keys/private.key'));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname,'./keys/public.key'));


module.exports = {
    APP_HOST,
    APP_PORT,
    
    MYSQL_HOAST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD,
} = process.env

module.exports.PRIVATE_KEY = PRIVATE_KEY;
module.exports.PUBLIC_KEY = PUBLIC_KEY;