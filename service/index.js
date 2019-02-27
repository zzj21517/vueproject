const Koa = require('koa')

const app = new Koa()
const {
  connect,
  initSchemas
} = require('./database/init.js')
const mongoose = require('mongoose')

const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
app.use(cors())
//让后台服务接收post数据
app.use(bodyParser())
let user = require('./api/user.js')
let home = require('./api/home.js')
//装载所有子路由
let router = new Router()
router.use('/user', user.routes())
router.use('/home', home.routes())
//加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())

;(async () => {
  await connect()
  initSchemas()
})()

app.listen(3000, () => {
  console.log('service is starting at port 3000')
})