<template>
  <div>
    <Header></Header>
    <div class="layout-left">
      <div class="person-info">
        <div class="avatar">
          <img src="@/assets/images/avatar.png" width="75px">
        </div>
        <div class="name">姓名：{{userInfo.userName}}</div>
        <div class="job">职位：{{userInfo.role}}</div>
      </div>
      <nav-item :navs='navs'></nav-item>
    </div>
    <div class="layout-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from '../header.vue'
  import NavItem from '@/components/navItem.vue'
  export default {
    components: {
      Header,
      NavItem
    },
    data() {
      return {
        userInfo: this.$store.getters.userInfo,
        navs: [{
          route: '/personal/myInfo',
          name: '我的信息'
        }, {
          route: '/personal/application',
          name: '我的申请'
        }, {
          route: '/personal/approval',
          name: '我的批准',
        }, {
          route: '/personal/orgTree',
          name: '组织架构',
        }]
      }
    },
  }
</script>

<style scoped>
  @media screen and (min-width:640px) {
    .layout-left .avatar {
      width: 75px;
      height: 75px;
      margin: 20px auto;
      background-color: red;
      border-radius: 50%;
    }
  }
  @media screen and (max-width:640px) {
    .person-info{
      display: none;
    }
  }
</style>