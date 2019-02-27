<template>
  <div class="menu-list" >
    <div class="goods" @click="goToDetail()">
      <div class="goods-img" style="font-size:0px">
        <img :src="goods.imgDetail" />
      </div>
      <div class="goods-info">
        <div class="left">
          <div>
            <div class="goods-name">{{goods.name}}</div>
            <div class="goods-price">￥<span style="color:red">{{goods.nowPrice}}</span></div>
          </div>
        </div>
        <div class="right" style="font-size:0px">
          <img src="@/assets/images/shoppingCar2.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: ['goods'],
    methods: {
      goToDetail() {
        this.$router.push({
          path: '/productionDetail',
          query: {
            id: this.goods.id
          }
        })
      }
    },
  }
</script>

<style scoped>

  @media screen and (min-width:1600px) {
    .menu-list {
      width:14.2%;
    }
  }

  @media screen and (max-width:1600px) {
    .menu-list {
      width:16.6%;
    }
  }

  @media screen and (max-width:1400px) {
    .menu-list {
      width: 20%;
    }
  }

  @media screen and (max-width:1200px) {
    .menu-list {
      width: 25%;
    }
  }

  @media screen and (max-width:1000px) {
    .menu-list {
      width: 33.3%;
    }
  }

  @media screen and (max-width:800px) {
    .menu-list {
      width: 50%;
    }
  }

  @media screen and (min-width:360px) {
    .goods{
      width: 160px;
    }
    .goods-img{
      width:138px;
    }
    .goods-img img{
      width:138px;
       height:125px;
    }
    .goods-name{
      font-size:12px;
    }
  }

  @media screen and (max-width:360px) {
    .goods{
      width:120px;
    }
    .goods-img{
      width:100px;
    }
    .goods-img img{
      width:100px;
      height: 90px;
    }
    .goods-name{
      font-size: 8px;
    }
  }

  .menu-list {
    margin-top: 20px;
    box-sizing: border-box;
  }

  .goods {
    margin: 0 auto;
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 10px;
    padding-bottom: 0px;
    cursor: pointer;
  }

  .goods:hover {
    border: 1px solid red;
  }

  .goods:hover .goods-name {
    text-decoration: underline;
  }

  .goods-img {
    border-radius: 5px;
    margin-bottom: 5px;
    font-size: 0px;
    text-align: center;
  }

  .goods-img img {
    border-radius: 3px;
  }

  .goods-info {
    display: flex;
    justify-content: space-between;
  }

  .goods-info .right,
  .goods-info .left {
    display: flex;
    align-items: center;
  }

  .goods-info .right img {
    width: 20px;
  }
</style>