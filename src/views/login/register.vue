<template>
  <div class="bg">
    <div class="login" :class="[{preLogin:$store.getters.device==='mobile'?false:true}]">
      <div class="top">用爱为生命续航 让生活不再麻烦</div>
      <div class="center">—安孚医疗救援系统—</div>
      <div class="bottom">
        <Form ref="registerForm" :model="registerForm" :rules="ruleForm" >
          <FormItem prop="user">
            <Input type="text" v-model="registerForm.userName" placeholder="账号">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="registerForm.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button :loading='registerLoading' type="error" @click="handleRegister('registerForm')">注册</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import ResizeMixin from '../index/mixin/resizeHandler'
import {registerUser} from '@/api/login'
  export default {
      data() {
          return {
            registerLoading:false,
             registerForm: {
                    userName: '18860912786',
                    password: '123456'
                },
                ruleForm: {
                    userName: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' }
                    ]
                }
          }
      },
      mixins: [ResizeMixin],
      computed:{
        device() {
                return this.$store.state.app.device
    },
    },
      methods: {
            handleRegister(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.registerLoading=true
                        registerUser(this.registerForm).then(res=>{
                            console.log(res)
                            if(res.data.code===200){
                                this.$Message.success(res.data.message)
                                this.$router.push('/login')
                            }else{
                                this.$Message.error('注册失败')
                            }
                            this.registerLoading=false
                        }).catch(err=>{
                            console.log(err)
                            this.registerLoading=false
                        })
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
  }
</script>

<style scoped>
  .bg {
    position:fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: linear-gradient(to right, #fb3614, #f2a32c);
  }
  .login {
    position: absolute;
    height: 300px;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;
    border-radius: 10px;
    text-align: center;
    color:#fff;
  }
  .preLogin{
      width: 400px;
      background-color: #f97a49;
  }
  .top{
      font-size: 14px;
      margin-top: 20px;
  }
  .center{
      font-size: 20px;
      margin-top: 20px;
      font-weight: bold;
  }
  .bottom{
      width:300px;
      margin:20px auto;
  }
  .ivu-form-item-error-tip{
      color:#fff !important;
  }
</style>