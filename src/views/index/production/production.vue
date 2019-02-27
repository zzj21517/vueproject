<template>
  <div>
    <Header></Header>
    <div class="layout-left">
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
  import {getImg} from '@/api/login'
  export default {
    components: {
      Header,
      NavItem
    },
    data() {
        return {
            navs: [{
          route: '/production/humanInjury',
          name: '人伤产品'
        }, {
          route: '/production/membershipServer',
          name: '会员服务'
        }, {
          route: '/production/businessServer',
          name: '企服中心',
        }]
        }
    },
  }
</script>

<style scoped>
</style>