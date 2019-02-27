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
          //{
        //   route: '/study/companyIntroduce',
        //   name: '公司介绍'
        // },
        {
          route:'/study/companyRules',
          name:'公司介绍'
        },
         {
          route: '/study/newIntroduce',
          name: '产品介绍'
        }, {
          route: '/study/salesGuidance',
          name: '销售指导',
        }, {
          route: '/study/trainingAdvice',
          name: '培训学习',
        },
        //  {
        //   route: '/study/activityAdvice',
        //   name: '活动通知',
        //},
        ]
      }
    },
  }
</script>

<style scoped>
</style>