<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <!-- logo -->
      <div class="logo" style="font-size:0px">
        <router-link to="/index">
          <img class="lg-hide" src="@/assets/images/logoanfu.png" width="200px" />
          <img class="xs-hide" src="@/assets/images/logoanfu.png" width="120px" />
        </router-link>
      </div>
      <!-- tip -->
      <div class="tips">
        <img src="@/assets/images/trumpet.png" />
        <span>{{tips}}</span>
      </div>
      <!-- 问题反馈 -->
      <div class="problem">
        <Button type="warning" size='small' @click="handleProblem()">问题反馈</Button>
      </div>
      <!-- 线下支付 -->
      <div class="offline-payment">
        <Button type="error" size='small' @click="offline()">线下支付</Button>
      </div>
      <!-- navbar -->
      <div class="navbar">
        <!-- 大屏幕下的导航栏 -->
        <div class="lg-hide lg-nav">
          <router-link v-for="(item,index) in navLinks" :to="item.path" :key="index">
            <img :src="item.imgUrl" />
            <div class="nav-title">{{item.title}}</div>
          </router-link>
          <a href="javascript:void(0)" @click="logout">
            <img src="@/assets/images/loginOut.png" />
            <div class="nav-title">退出登录</div>
          </a>
        </div>
        <!-- 小屏幕下的菜单栏 -->
        <div class="xs-hide xs-menu" style="font-size:0px">
          <img class="menu" v-if="!xsNavShow" src="@/assets/images/xs-menu.png" @click="showNav" />
          <img v-else src="@/assets/images/xs-delete.png" @click="deleteNav" />
        </div>
      </div>
    </div>
    <Modal v-model="modal">
      <p slot="header" style="color:#f60;text-align:center">
        <span class="title">—反馈您的问题—</span>
      </p>
      <div class="model-content">
        <Form ref="problem" :model="problem" :label-width="50">
          <FormItem label="问题" prop="desc">
            <Input v-model="problem.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请描述您的问题"></Input>
          </FormItem>
          <div style="text-align:center">
            <Button type="error" shape='circle' @click="handleSubmit()" size='small' style="width:150px">提交</Button>
          </div>
        </Form>
      </div>
    </Modal>

    <Modal v-model="modal1">
      <p slot="header" style="color:#f60;text-align:center">
        <span class="title">—线下支付—</span>
      </p>
      <div class="model-content">
        <img src="@/assets/images/offlinePayment.jpg" width="100%" alt="">
      </div>
    </Modal>

    <!-- 小屏幕下的导航栏 -->
    <div class="xs-hide xs-nav" v-show='xsNavShow'>
      <router-link v-for="(item,index) in navLinks" :to="item.path" :key="index">
        <img :src="item.imgUrl" width="30px" />
        <div class="nav-title">{{item.title}}</div>
      </router-link>
      <a href="javascript:void(0)" @click="logout">
        <img src="@/assets/images/loginOut.png" width="30px" />
        <div class="nav-title">退出登录</div>
      </a>
    </div>
  </div>
</template>

<script>
import {addQuestion} from '@/api/login'
  export default {
    methods: {
      offline(){
        this.modal1=true
      },
      showNav() {
        this.xsNavShow = true
      },
      deleteNav() {
        this.xsNavShow = false
      },
      logout() {
        this.$router.push('/login')
      },
      handleProblem() {
        this.modal = true
      },
      handleSubmit(){
        addQuestion(this.problem.desc).then(res=>{
          console.log(res)
          if(res.data.success){
            this.$Message.success(res.data.display)
            this.modal=false
          }
        }).catch(err=>{
          console.log(err)
          this.$Message.error(res.data.display)
        })
      }
    },
    data() {
      return {
        problem: {
          desc: ''
        },
        modal: false,
        modal1:false,
        xsNavShow: false,
        tips: '建议使用谷歌、火狐浏览器！',
        navLinks: [{
            path: '/personal',
            imgUrl: require('@/assets/images/person.png'),
            title: '个人中心'
          },
          {
            path: '/custom',
            imgUrl: require('@/assets/images/custom.png'),
            title: '客户中心'
          },
          {
            path: '/study',
            imgUrl: require('@/assets/images/study.png'),
            title: '学习中心'
          },
          {
            path: '/production',
            imgUrl: require('@/assets/images/production.png'),
            title: '产品中心'
          },
          {
            path: '/shoppingCart',
            imgUrl: require('@/assets/images/shoppingCar.png'),
            title: '订单'
          },
          // {
          //   path: '/loginOut',
          //   imgUrl: require('@/assets/images/loginOut.png'),
          //   title: '退出登录'
          // },
        ]
      }
    },
  }
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 1001;
    background-color: #fff;
    border-bottom: 1px solid #e1e1e1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tips img {
    vertical-align: -5px;
  }

  .lg-nav {
    display: flex;
  }

  .lg-nav a {
    display: block;
    width: 80px;
    text-align: center;
    color: black;
    font-size: 8px;
  }

  .router-link-active {
    color: #fc361d !important;
  }

  .lg-nav a img {
    width: 35px;
    height: 35px;
  }

  .nav-title {
    margin-top: -3px;
  }

  .xs-menu img {
    width: 25px;
    height: 25px;
  }

  .xs-nav {
    position: fixed;
    background-color: #fff;
    border-bottom: 1px solid #e1e1e1;
    z-index: 1001;
    height: 60px;
    top: 40px;
    left: 0px;
    right: 0px;
    display: flex;
    align-items: center;
  }

  .xs-nav a {
    flex: 1;
    text-align: center;
    font-size: 5px;
    color: black;
  }

  /* 屏幕尺寸大于640像素 */
  @media screen and (min-width:640px) {
    .header {
      height: 60px;
      border-bottom: 1px solid #e1e1e1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }

    .xs-hide {
      display: none;
    }
  }

  /* 屏幕尺寸小于640像素 */
  @media screen and (max-width:640px) {
    .header {
      height: 40px;
      padding: 0 10px;
    }

    .lg-hide {
      display: none;
    }
  }

  /* 屏幕尺寸大于1200像素 */
  @media screen and (min-width:1200px) {
    .tips {
      line-height: 20px;
      height: 20px;
    }
  }

  /* 屏幕尺寸小于1200像素 */
  @media screen and (max-width:1200px) {
    .tips {
      display: none;
    }
  }
</style>