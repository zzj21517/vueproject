//连接node跟mongodb
const mongoose = require('mongoose')
//数据库路径
const db = 'mongodb://localhost/presale'
//引入全局变量
const glob=require('glob')
//引入resolve
const {resolve}=require('path')

exports.initSchemas=()=>{
    glob.sync(resolve(__dirname,'./schema','**/*.js')).forEach(require)
}
exports.connect = () => {
  //连接数据库
  mongoose.connect(db)
  let maxConnectTimes=0
  return new Promise((resolve, reject) => {
    //增加数据库监听事件
    mongoose.connection.on('disconnection', (err) => {
      console.log('*****数据库断开*****')
      if(maxConnectTimes<=3){
          maxConnectTimes++
        mongoose.connect(db)
      }else{
          reject(err)
          throw new Error('数据库出现问题，程序无法搞定，请人为处理....')
      }
    })

    mongoose.connection.on('error', (err) => {
      console.log('*****数据库错误*****')
      if(maxConnectTimes<=3){
        maxConnectTimes++
      mongoose.connect(db)
    }else{
        reject(err)
        throw new Error('数据库出现问题，程序无法搞定，请人为处理....')
    }
    })

    //链接打开时
    mongoose.connection.once('open', () => {
      console.log('Mongodb connected successfully')
      resolve()
    })
  })
}