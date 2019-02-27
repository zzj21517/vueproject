<template>
  <div class="myCart">
    <Breadcrumb>
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/shoppingCart">购物车</BreadcrumbItem>
        <BreadcrumbItem>我的购物车</BreadcrumbItem>
    </Breadcrumb>
    <div class="title">—购物车—</div>
    <div class="cart-tip">
      <div class="tip-item">
        <input id="selectAll" type="checkbox" v-model="selectAll" @click="changeSelect()" />
        <label for="selectAll">{{selectAll?'全不选':'全选'}}</label>
      </div>
      <div class="tip-item" v-for="(tip,index) in tips" :key="index">
        {{tip}}
      </div>
    </div>
    <div v-if="this.$store.getters.orders.length">
      <goods-item v-for="(order,index) in orders" :key="index" :order="order" :goodsIndex='index' :ordersLength='orders.length'></goods-item>
    </div>
    <div v-else style="text-align:center;margin:50px;font-size:16px">
      购物车内暂时没有商品，<router-link to="/production">去添加</router-link>
    </div>
    <div class="balance">
      <div class="balance-item">
        <input id="selectAll" type="checkbox" v-model="selectAll" @click="changeSelect()" />
        <label for="selectAll">{{selectAll?'全不选':'全选'}}</label>
      </div>
      <div class="balance-item">
        已选择<span class="high-light">{{this.$store.getters.totalNumber}}</span>件商品 总价：<span class="high-light">{{this.$store.getters.totalPrice}}</span>
        <Button type="error" size="small" shape="circle">结算</Button>
      </div>
    </div>
  </div>
</template>

<script>
  import GoodsItem from '@/components/goodsItem'
  export default {
    components: {
      GoodsItem
    },
    computed: {
      selectAll() {
        return this.$store.getters.selectAll
      },
      orders() {
        return this.$store.getters.orders
      }
    },
    methods: {
      changeSelect() {
        // 全不选
        if (this.$store.getters.selectAll) {
          this.$store.commit('TOGGLE_SELECTALL', false)
          this.orders.map(item => {
            item.goodsSelect = false
            this.$store.commit('TOGGLE_REDUCETOTALNUMBER', item.goodsNumber)
            this.$store.commit('TOGGLE_REDUCETOTALPRICE', item.goodsTotal)
          })
        }
        // 全选
        else {
          this.$store.commit('TOGGLE_SELECTALL', true)
          this.orders.map(item => {
            item.goodsSelect = true
            this.$store.commit('TOGGLE_ADDTOTALNUMBER', item.goodsNumber)
            this.$store.commit('TOGGLE_ADDTOTALPRICE', item.goodsTotal)
          })
        }
      }
    },
    watch: {
      selectAll(value) {
        console.log(value)
      }
    },
    data() {
      return {
        tips: ['商品', '单价', '数量', '小计', '操作'],
      }
    },
  }
</script>

<style scoped>
.tip-item{
  padding:10px;
}
  .tip-item:first-child {
    display: flex;
    justify-content: flex-start;
  }

  .tip-item:nth-child(2) {
    flex: 1.3;
  }

  .tip-item:last-child {
    border-right: none;
  }

  input[type='checkbox'] {
    margin-top: -2px;
    margin-right:5px;
  }

  .balance {
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    border: 1px solid #e1e1e1;
    margin-top: 10px;
    padding: 0 10px;
    font-size: 16px;
  }

  .balance .balance-item .ivu-btn {
    width: 60px;
  }
</style>