<template>
    <div class="order">
        <div class="order-title">
            <div class="order-number">订单号：{{order.orderId}}</div>
            <div class="goods-name">商品：{{order.goodsName}}</div>
            <div class="order-time">{{order.createTime}}</div>
        </div>
        <div class="order-content">
            <div class="order-goods order-item">
                <div class="order-img">
                    <img :src="order.img" alt="">
                </div>  
                <div class="order-detail">
                    <h3 class="order-title">{{order.goodsName}}</h3>
                    <div class="order-feature">{{order.features}}</div>
                    <div class="order-server">{{order.service}}</div>
                </div>
            </div>
            <div class="order-price order-item">{{order.account}}</div>
            <div class="order-status order-item">{{order.status}}</div>
            <div class="order-handle order-item">
                <!-- <a href="javascript:void(0)" style="margin-right:5px">删除</a>
                <a href="javascript:void(0)" v-if="order.orderStatus==='待支付'">立即支付</a>
                <a href="javascript:void(0)" v-else>再次购买</a> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['order']
    }
</script>

<style scoped>
.order{
    margin-top: 20px;
}
.order-title{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}
.order-title .order-number{
    font-size: 15px;
    font-weight: 550;
}
.order-title .order-time{
    font-size: 13px;
}
.order-content{
    display: flex;
    align-items: center;
    border:1px solid #e1e1e1;
    padding:10px;
}
.order-content .order-item{
    flex: 1;
    text-align: center;
}
.order-content .order-item:first-child{
    flex:1.3;
}
.order-goods{
    display: flex;
    justify-content: center;
    align-items: center;
}
.order-goods .order-img{
    width:80px;
    height:80px;
    background-color: #fd988b;
    margin-right: 10px;
}
.order-goods .order-detail{
    text-align: left;
}
.order-goods .order-detail .order-title{
    margin-bottom: 5px;
}
@media screen and (min-width:1200px) {
    .goods-name{
        display: none;
    }
}
@media screen and (max-width:1200px) and (min-width:800px){
    .order-img{
        display: none;
    }
}
@media screen and (max-width:800px){
    .order-goods{
        display: none;
    }
}
</style>