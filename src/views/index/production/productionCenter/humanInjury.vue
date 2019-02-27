<template>
  <div class="humanInjury">
    <Breadcrumb v-if="$route.path==='/production/humanInjury'">
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/production">产品中心</BreadcrumbItem>
        <BreadcrumbItem>人伤产品</BreadcrumbItem>
    </Breadcrumb>
    <div class="title" v-if="$route.path==='/production/humanInjury'">—人伤产品—</div>
    <div class="fowardServer">
      <div class="small-title"><span style="border-bottom:1px solid #fd988b">前段</span>服务</div>
      <div class="goodsList production-flex">
        <Goods v-for="(forwardServer,index) in forwardServerList" :key="index" :goods='forwardServer'></Goods>
      </div>
    </div>
    <div class="claimServer">
      <div class="small-title"><span style="border-bottom:1px solid #fd988b">理赔</span>服务</div>
      <div class="goodsList production-flex">
        <Goods v-for="(claimServer,index) in claimServerList" :key="index" :goods='claimServer'></Goods>
      </div>
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
        this.humanInjuryList=res.data.goodsList
        this.humanInjuryList.map((item)=>{
          item.imgDetail=`http://${item.imgDetail}`
        })
      }).catch(err => {
        console.log(err)
      })
    },
    data() {
      return {
          humanInjuryList:'',
        forwardServerList: [{
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '道交人伤整体服务',
            nowPrice: '3000+9%',
            id:201,
          },
          {
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '陪同出院材料整理',
            nowPrice: '200',
            id:202,
          },
          {
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '陪同交警定责',
            nowPrice: '500',
            id:203,
          },
          {
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '伤残鉴定陪同',
            nowPrice: '500',
            id:204,
          },
          {
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '三期鉴定陪同',
            nowPrice: '700',
            id:205,
          },
          {
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '陪同复诊',
            nowPrice: '1',
            id:206,
          },
          {
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '康复训练医院对接',
            nowPrice: '20',
            id:207,
          },
          {
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '陪同交警队定责',
            nowPrice: '500',
            id:208,
          },
        ],
        claimServerList: [{
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '三期调解',
            nowPrice: '388',
            id:209,
          },
          {
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '三期调解',
            nowPrice: '500',
            id:210,
          },
          {
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '三期调解',
            nowPrice: '500',
            id:211,
          },
          {
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '伤残调解方案',
            nowPrice: '388',
            id:212,
          },
          {
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '伤残调解',
            nowPrice: '伤残赔偿金的4%',
            id:213,
          },
          {
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '伤残调解',
            nowPrice: '500',
            id:214,
          },
          {
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '单独诉讼',
            nowPrice: '3000',
            id:215,
          },
          {
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '单独诉讼',
            nowPrice: '伤残赔偿金的5%',
            id:216,
          },
          {
            imgDetail: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '单独医疗费诉讼',
            nowPrice: '3000',
            id:217,
          },
        ],
      }
    },
  }
</script>

<style scoped>
  .goodsList {
    overflow: hidden;
  }
</style>