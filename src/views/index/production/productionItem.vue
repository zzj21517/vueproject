<template>
  <div class="xs-card">
    <card>
      <div class="title">—产品中心—</div>
      <div class="content">
        <div class="left">
          <nav-item :navs='navs'></nav-item>
        </div>
        <div class="right">
          <router-view></router-view>
          <!-- <template v-for="(item,index) in goodsList">
            <goods :goods="item"></goods>
          </template> -->
        </div>
      </div>
    </card>
  </div>
</template>

<script>
  import Goods from '@/components/goods'
  import NavItem from '@/components/navItem'
  export default {
    components: {
      Goods,
      NavItem
    },
    methods: {
    },
    data() {
      return {
        navs: [{
          route: '/index/humanInjury',
          name: '人伤产品'
        }, {
          route: '/index/membershipServer',
          name: '会员服务'
        }, {
          route: '/index/businessServer',
          name: '企服中心',
        }],
        goodsList: [{
            imgUrl: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '道交人伤整体服务',
            price: '3000+9%',
          },
          {
            imgUrl: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '道交人伤整体服务',
            price: '3000+9%',
          },
          {
            imgUrl: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '道交人伤整体服务',
            price: '3000+9%',
          },
          {
            imgUrl: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '道交人伤整体服务',
            price: '3000+9%',
          },
          {
            imgUrl: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '道交人伤整体服务',
            price: '3000+9%',
          },
          {
            imgUrl: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '道交人伤整体服务',
            price: '3000+9%',
          },
          {
            imgUrl: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '道交人伤整体服务',
            price: '3000+9%',
          },
          {
            imgUrl: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '道交人伤整体服务',
            price: '3000+9%',
          },
          {
            imgUrl: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '道交人伤整体服务',
            price: '3000+9%',
          },
          {
            imgUrl: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '道交人伤整体服务',
            price: '3000+9%',
          },
          {
            imgUrl: require('@/assets/images/productions/checkA/bannerA1.png'),
            name: '道交人伤整体服务',
            price: '3000+9%',
          }
        ]
      }
    },
  }
</script>
<style scoped>
  .ivu-card {
    height: auto;
    overflow: hidden;
    padding: 0px;
  }
    .left{
    text-align: center;
  }
  @media screen and (max-width:640px) {
    .content{
      flex-direction: column;
    }
  }
 @media screen and (min-width:640px){
   .left{
     width:200px;
     border-right: 1px solid #e1e1e1;
   }
   .right{
     width: 100%;
   }
    
 }
</style>