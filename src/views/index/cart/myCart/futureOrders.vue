<template>
  <div class="futureOrders">
      <Breadcrumb>
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/shoppingCart">购物车</BreadcrumbItem>
        <BreadcrumbItem>待完成订单</BreadcrumbItem>
    </Breadcrumb>
    <div class="title">—全部订单—</div>
    <div class="cart-tip">
      <div class="tip-item" v-for="(tip,index) in tips" :key="index">
        {{tip}}
      </div>
    </div>
    <Order v-for="(order,index) in allOrders" :key="index" :order='order'></Order>
  </div>
</template>

<script>
  import Order from '@/components/order'
  export default {
      components:{
          Order
      },
      data() {
      return {
        tips: ['商品', '订单金额', '订单状态', '操作'],
        allOrders:[
            {
                orderNumber:'ASOS20190103001',
                orderTime:'2019-01-02 15:30:45',
                orderImg:'',
                orderDetail:{
                    orderTitle:'安孚体检通套餐A',
                    orderFeature:'特色：一卡在手 多家体检',
                    orderServer:'服务：★项目全面 体检完善...'
                },
                orderPrice:360,
                orderStatus:'已完成',
            },
            {
                orderNumber:'ASOS20190103002',
                orderTime:'2019-01-02 15:30:45',
                orderImg:'',
                orderDetail:{
                    orderTitle:'安孚体检通套餐B',
                    orderFeature:'特色：一卡在手 多家体检',
                    orderServer:'服务：★项目全面 体检完善...'
                },
                orderPrice:550,
                orderStatus:'待支付',
            },
            {
                orderNumber:'ASOS20190103003',
                orderTime:'2019-01-02 15:30:45',
                orderImg:'',
                orderDetail:{
                    orderTitle:'安孚体检通套餐C',
                    orderFeature:'特色：一卡在手 多家体检',
                    orderServer:'服务：★项目全面 体检完善...'
                },
                orderPrice:880,
                orderStatus:'已取消',
            }
        ]
      }
    },
  }
</script>

<style scoped>
.cart-tip .tip-item:first-child{
    flex:1.3;
}
</style>