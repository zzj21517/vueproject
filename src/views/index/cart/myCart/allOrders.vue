<template>
  <div class="allOrders">
    <Breadcrumb>
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/shoppingCart">购物车</BreadcrumbItem>
        <BreadcrumbItem>全部订单</BreadcrumbItem>
    </Breadcrumb>
    <div class="title">—全部订单—</div>
    <div class="cart-tip">
      <div class="tip-item" v-for="(tip,index) in tips" :key="index">
        {{tip}}
      </div>
    </div>
    <Order v-for="(order,index) in allOrders" :key="index" :order='order'></Order>
    <div style="margin-bottom:100px"></div>
  </div>
</template>

<script>
  import Order from '@/components/order'
  import {
    getAllOrders
  } from '@/api/login'
  export default {
    components: {
      Order
    },
    created(){
        this.showOrders()
    },
    methods:{
        showOrders(){
            getAllOrders(this.$store.getters.userInfo.Id).then(res=>{
                console.log(res)
                this.allOrders=res.data.customOrder
                this.allOrders.img=`http://${this.allOrders.img}`
                console.log(this.allOrders.img)
            }).catch(err=>{
                console.log(err)
            })
        }
    },
    data() {
      return {
        tips: ['商品', '订单金额', '订单状态', '佣金（正在开发）'],
        allOrders: [
        //     {
        //     orderId: 'ASOS20190103001',
        //     createTime: '2019-01-02 15:30:45',
        //     img: '',
        //     goodsName: '安孚体检通套餐A',
        //     features: '特色：一卡在手 多家体检',
        //     service: '服务：★项目全面 体检完善...',
        //     account: 360,
        //     status: '已完成',
        //   },
        //   {
        //     orderId: 'ASOS20190103002',
        //     createTime: '2019-01-02 15:30:45',
        //     img: '',
        //     goodsName: '安孚体检通套餐B',
        //     features: '特色：一卡在手 多家体检',
        //     service: '服务：★项目全面 体检完善...',
        //     account: 550,
        //     status: '待支付',
        //   },
        //   {
        //     orderId: 'ASOS20190103003',
        //     createTime: '2019-01-02 15:30:45',
        //     img: '',
        //     goodsName: '安孚体检通套餐C',
        //     features: '特色：一卡在手 多家体检',
        //     service: '服务：★项目全面 体检完善...',
        //     account: 880,
        //     status: '已取消',
        //   }
        ]
      }
    },
  }
</script>

<style scoped>
  .cart-tip .tip-item:first-child {
    flex: 1.3;
  }
  @media screen and (max-width:800px) {
    .cart-tip .tip-item:first-child{
      display: none;
    }
  }
</style>