<template>
  <div class="bg">
    <div class="login">
      <div class="top">用爱为生命续航 让生活不再麻烦</div>
      <div class="center">—安孚股份公司系统—</div>
      <div class="bottom">
        <Form ref="loginForm" :model="loginForm" :rules="ruleForm">
          <FormItem prop="user">
            <Input type="text" v-model="loginForm.userPhone" placeholder="账号">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="loginForm.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem style="text-align:left">
            <CheckboxGroup v-model="loginForm.remember">
              <Checkbox label="记住密码"></Checkbox>
            </CheckboxGroup>
          </FormItem>
          <FormItem>
            <Button :loading='loginLoading' type="error" @click="handleLogin('loginForm')">登录</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    loginUser
  } from '@/api/login'
  export default {
    data() {
      return {
        loginLoading: false,
        loginForm: {
          userPhone: '',
          password: '',
          remember: [],
        },
        ruleForm: {
          userPhone: [{
            required: true,
            message: '请填写用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请填写密码',
            trigger: 'blur'
          }]
        }
      }
    },
    created() {
        console.log(localStorage.loginForm)
      if (localStorage.loginForm) {
        this.loginForm = JSON.parse(localStorage.getItem('loginForm'))
      }
    },
    methods: {
      handleLogin(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            if (this.loginForm.remember.length) {
              localStorage.setItem('loginForm', JSON.stringify(this.loginForm))
            } else {
              localStorage.removeItem('loginForm')
            }
            this.loginLoading = true
            loginUser(this.loginForm).then(res => {
              console.log(res)
              if (res.data.success) {
                sessionStorage.setItem('userInfo', JSON.stringify(res.data))
                let a = JSON.parse(sessionStorage.getItem('userInfo'))
                console.log(a.role)
                console.log('sessionstorage:' + sessionStorage.getItem('userInfo'))
                this.$store.commit('TOGGLE_USERINFO', res.data)
                console.log(this.$store.getters.userInfo)
                this.$router.push('/index')
              } else {
                this.$Message.error('登录失败')
              }
              this.loginLoading = false
            }).catch(err => {
              console.log(err)
              this.loginLoading = false
            })
          } else {
            this.$Message.error('校验失败！');
          }
        })
      }
    }
  }
</script>

<style scoped>
  .bg {
    position: fixed;
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
    color: #fff;
  }

  .top {
    font-size: 14px;
    margin-top: 20px;
  }

  .center {
    font-size: 20px;
    margin-top: 20px;
    font-weight: bold;
  }

  .bottom {
    width: 300px;
    margin: 20px auto;
  }

  .ivu-form-item-error-tip {
    color: #fff !important;
  }
</style>