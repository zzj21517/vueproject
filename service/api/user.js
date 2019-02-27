const Router=require('koa-router')
const router=new Router()
const mongoose=require('mongoose')
router.get('/',async(ctx)=>{
    ctx.body='这是操作用户的首页'
})
//登录
router.post('/register',async(ctx)=>{
    const User=mongoose.model('User')
    let newUser=new User(ctx.request.body)

    await newUser.save().then(()=>{
        ctx.body={
            code:200,
            message:'注册成功'
        }
    }).catch(err=>{
        ctx.body={
            //服务器异常
            code:500,
            message:err
        }
    })
})
//注册
router.post('/login',async(ctx)=>{
    let loginUser=ctx.request.body
    console.log(loginUser)
    let userName=loginUser.userName
    let password=loginUser.password

    //引入user中的model
    const User=mongoose.model('User')
    //查找用户名是否存在，如果存在开始比对密码
    await User.findOne({userName:userName}).exec().then(async(result)=>{
        console.log(result)
        if(result){
            //当用户名存在时，开始比对密码
            let newUser=new User()//因为是实例方法，所以要new出对象，才能调用
            await newUser.comparePassword(password,result.password)
                .then(isMatch=>{
                    //返回比对结果
                    ctx.body={
                        code:200,
                        message:'登录成功'
                    }
                }).catch(err=>{
                    console.log(err)
                    //出现异常返回异常
                    ctx.body={
                        code:500,
                        message:err
                    }
                })
        }else{
            ctx.body={
                code:200,
                message:'用户名不存在'
            }
        }
    }).catch(err=>{
        console.log(err)
        ctx.body={
            code:500,
            message:err
        }
    })
})
module.exports=router