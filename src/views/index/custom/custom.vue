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
  export default {
    components: {
      Header,
      NavItem
    },
    data() {
      return {
        navs: [{
          route: '/custom/customCenter',
          name: '客户中心'
        }]
      }
    },
  }
</script>

<style scoped>
</style>