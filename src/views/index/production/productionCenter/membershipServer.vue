<template>
  <div class="humanInjury">
    <Breadcrumb v-if="$route.path==='/production/membershipServer'">
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/production">产品中心</BreadcrumbItem>
        <BreadcrumbItem>会员服务</BreadcrumbItem>
    </Breadcrumb>
    <div class="title" v-if="$route.path==='/production/membershipServer'">—企服中心—</div>
    <div class="goodsList production-flex">
      <Goods v-for="(goods,index) in businessServerList" :key="index" :goods='goods'></Goods>
    </div>
  </div>
</template>

<script>
  import Goods from '@/components/goods'
  import {
    getProductionsList
  } from '@/api/login'
  export default {
    components: {
      Goods
    },
    created() {
      getProductionsList().then(res => {
        console.log(res)
        this.businessServerList = res.data.goodsList
        this.businessServerList.map((item) => {
          item.imgDetail = `http://${item.imgDetail}`
        })
      }).catch(err => {
        console.log(err)
      })
    },
    data() {
      return {
        businessServerList: '',
      }
    },
  }
</script>

<style scoped>
  .goodsList {
    overflow: hidden;
  }
</style>