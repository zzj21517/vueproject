<template>
  <div class="membershipServer">
    <Breadcrumb v-if="$route.path==='/production/businessServer'">
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/production">产品中心</BreadcrumbItem>
        <BreadcrumbItem>企服中心</BreadcrumbItem>
    </Breadcrumb>
    <div class="title" v-if="$route.path==='/production/businessServer'">—会员服务—</div>
    <div class="serverList production-flex">
        <Goods v-for="(server,index) in serverList" :key="index" :goods='server'></Goods>
    </div>
  </div>
</template>

<script>
  import Goods from '@/components/goods'
  export default {
    components:{
        Goods
    },
    data() {
      return {
        serverList: [
          {
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '企业法顾',
            nowPrice: '5000',
            id:'103',
          },
        ]
      }
    },
  }
</script>

<style scoped>
</style>