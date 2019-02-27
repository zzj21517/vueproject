<template>
    <div class="goods">
        <div class="goods-select goods-item">
            <div class="select">
                <input class="checkbox" type="checkbox" v-model="order.goodsSelect" @click="singleSelect()" />
            </div>
            <div class="select-img">
                <img :src="order.goodsImg" alt="" width="100px" height="100px">
            </div>
        </div>
        <div class="goods-detail goods-item">
            <h3 class="detail-title">{{order.goodsDetail.detailTitle}}</h3>
            <div class="detail-feature">{{order.goodsDetail.detailFeature}}</div>
            <div class="detail-server">{{order.goodsDetail.detailServer}}</div>
        </div>
        <div class="goods-price goods-item">
            {{order.goodsPrice}}
        </div>
        <div class="goods-number goods-item">
            <a href="javascript:void(0)" class="reduce" @click="reduce()">-</a>
            <div class="num">
                 <input v-model="order.goodsNumber" type="text" />
            </div>
            <a href="javascript:void(0)" class="add" @click="add">+</a>
        </div>
        <div class="goods-total goods-item">
            {{order.goodsTotal}}
        </div>
        <div class="goods-handle goods-item">
            <a href="javascript:void(0)" @click="handleDelete()">删除</a>
        </div>
    </div>
</template>

<script>
    export default {
        props:['order','ordersLength','goodsIndex'],
        data() {
            return {
            }
        },
        methods: {
            // 单选
            singleSelect(){
                this.order.goodsSelect=!this.order.goodsSelect
                // 选中
                if(this.order.goodsSelect){
                    this.$store.commit('TOGGLE_ADDTOTALNUMBER',this.order.goodsNumber)
                    this.$store.commit('TOGGLE_ADDTOTALPRICE',this.order.goodsTotal)
                }
                // 未选中
                else{
                    this.$store.commit('TOGGLE_REDUCETOTALNUMBER',this.order.goodsNumber)
                    this.$store.commit('TOGGLE_REDUCETOTALPRICE',this.order.goodsTotal)
                }
                // 是否全选
                if(this.$store.getters.seletedGoods===this.ordersLength){
                    this.$store.commit('TOGGLE_SELECTALL',true)
                }else{
                    this.$store.commit('TOGGLE_SELECTALL',false)
                }
                console.log(this.$store.getters.selectAll)
                console.log(this.$store.getters.seletedGoods)
                console.log(this.ordersLength+'zzj')
            },
            // 减少
            reduce() {
                console.log(this.order.goodsNumber)
                if(this.order.goodsNumber>1){
                    this.order.goodsNumber--
                    if(this.order.goodsSelect){
                        this.$store.commit('TOGGLE_REDUCESINGLEGOODS',this.order.goodsPrice)
                    }
                }else{
                    this.order.goodsNumber=1
                }
                this.order.goodsTotal=this.order.goodsNumber*this.order.goodsPrice
            },
            // 添加
            add(){
                console.log(this.order.goodsNumber)
                this.order.goodsNumber++
                if(this.order.goodsSelect){
                        this.$store.commit('TOGGLE_ADDSINGLEGOODS',this.order.goodsPrice)
                    }
                this.order.goodsTotal=this.order.goodsNumber*this.order.goodsPrice
            },
            // 删除
            handleDelete(){
               if(this.order.goodsSelect){
                   this.$store.commit('TOGGLE_REDUCETOTALPRICE',this.order.goodsTotal)
                   this.$store.commit('TOGGLE_REDUCETOTALNUMBER',this.order.goodsNumber)
               }
               this.$store.commit('TOGGLE_ORDERS',this.goodsIndex)
               console.log(this.ordersLength+'sss')
               if(this.ordersLength<=1){
                   this.$store.commit('TOGGLE_SELECTALL',false)
               }
            }
        },
    }
</script>

<style scoped>
.goods{
    display: flex;
    border: 1px solid #e1e1e1;
    align-items: center;
    margin-top: 10px;
}
.goods:hover{
    border:1px solid red;
}
.goods-item{
    padding:10px;
    text-align: center;
    flex: 1;
}
.goods .goods-select{
    display: flex;
    align-items: center;
}
.goods .goods-select .select-img{
    width:100px;
    height: 100px;
    background-color:#fd988b;
    margin-left: 20px;
}
.goods .goods-detail{
    text-align: left;
    flex:1.3;
}
.goods .goods-detail .detail-title{
   margin-bottom: 5px;
}
.goods .goods-detail .detail-feature,.goods .goods-detail .detail-server{
    text-indent: 1em;
}
.goods .goods-number{
    display: flex;
    justify-content: center;
}
.goods .goods-number .reduce,.goods .goods-number .add{
    font-size: 20px;
    border:1px solid #e1e1e1;
    width:25px;
    height: 25px;
    line-height: 23px;
    cursor: pointer;
    color:gray;
    
}
.goods .goods-number input{
    width:50px;
    margin:0px 10px;
    text-align: center;
}

</style>