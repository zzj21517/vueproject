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
        navs: [
        //   {
        //   route: '/shoppingCart/myCart',
        //   name: '我的购物车'
        // }, 
        {
          route: '/shoppingCart/allOrders',
          name: '全部订单'
        }, 
        // {
        //   route: '/shoppingCart/futureOrders',
        //   name: '待完成订单',
        // },{
        //   route: '/shoppingCart/paidOrders',
        //   name: '已支付订单',
        // },{
        //   route: '/shoppingCart/lastOrders',
        //   name: '已完成订单',
        // }
        ]
      }
    },
  }
</script>

<style scoped>


</style>