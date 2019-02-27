<template>
  <div class="productionDetail">
    <Header></Header>
    <Breadcrumb style="margin-top:80px;margin-left:20px">
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/production">产品中心</BreadcrumbItem>
        <BreadcrumbItem>产品详情</BreadcrumbItem>
    </Breadcrumb>
    <div class="title">—会员服务—</div>
    <div class="goods-width">
      <div class="goods">
        <div class="goodsImg">
          <div class="imgArea">
            <img :src="banner" alt="">
          </div>
          <div class="imgPagination">
            <div class="thumbnail" v-for="(thumbnail,index) in goodsDetails.imgThumbnailList" :key="index">
              <img :src="thumbnail" alt="" @click="toggleBanner(index)" @mouseover="toggleBanner(index)">
            </div>
          </div>
        </div>
        <div class="goodsInfo">
          <div class="goodsTitle item">{{goodsDetails.name}}</div>
          <div class="goodsPrice item">安孚价: ￥<span class="current-price">{{goodsDetails.nowPrice}}</span> <span class="last-price">市场价：{{goodsDetails.priPrice}}</span></div>
          <div class="goodsFeature item">特色：{{goodsDetails.features}}</div>
          <div class="goodsServer item">
            <div>服务：</div>
            <div v-for="(server,index) in goodsDetails.serviceList" :key="index">{{server}}</div>
          </div>
          <div class="goodsNumber item">
            <div>数量：</div>
            <a href="javascript:void(0)" class="reduce" @click="reduce()">-</a>
            <div class="num">
              <input type="text" v-model="goodsDetails.number" />
            </div>
            <a href="javascript:void(0)" class="add" @click="add">+</a>
          </div>
          <div class="goodsOrder item">
            <!-- <Button type="error" shape="circle" @click="addToCart">加入购物车</Button> -->
            <Button type="error" shape="circle" @click="buyNow">立即购买</Button>
          </div>
        </div>
        <div class="goodsRecommend">
          <div class="recommend-title">—— 为您推荐 ——</div>
          <div>
            <div class="recommend-item">
              <div class="item-img"></div>
              <div class="item-title">体检通套餐B</div>
            </div>
            <div class="recommend-item">
              <div class="item-img"></div>
              <div class="item-title">御驾无忧A款</div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail">
        <div class="detail-title">
          <div class="title-item">
            <router-link to="goodsDetail">商品详情</router-link>
          </div>
          <div class="title-item">
            <router-link to="productionSize">产品规格</router-link>
          </div>
        </div>
        <div class="detail-img">
          <img :src="goodsDetails.imgDetail" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/views/index/header'
  import {
    getProductionsDetail
  } from '@/api/login'
  export default {
    components: {
      Header
    },
    created() {
      getProductionsDetail(this.$route.query.id).then(res => {
        console.log(res)
        if (res.data.success) {
          this.goodsDetails = res.data.saleGoods
          this.goodsDetails.imgDetail = `http://${this.goodsDetails.imgDetail}`
          for (let item in this.goodsDetails.imgBannerList) {
            this.goodsDetails.imgThumbnailList[item] = `http://${this.goodsDetails.imgThumbnailList[item]}`
          }
          for (let item in this.goodsDetails.imgThumbnailList) {
            this.goodsDetails.imgBannerList[item] = `http://${this.goodsDetails.imgBannerList[item]}`
            console.log(this.goodsDetails.imgBannerList[item])
          }
          this.banner = this.goodsDetails.imgBannerList[0]
        } else {

        }
      }).catch(err => {
        console.log(err)
      })
    },
    methods: {
      // 减少
      reduce() {
        if (this.goodsDetails.number > 1) {
          this.goodsDetails.number--
        } else {
          this.goodsDetails.number = 1
        }
      },
      // 添加
      add() {
        this.goodsDetails.number++
      },
      // 切换banner
      toggleBanner(index) {
        this.banner = this.goodsDetails.imgBannerList[index]
      },
      // 加入购物车
      addToCart() {
        // this.createOrderData()

        // this.$store.commit('TOGGLE_ADDORDERS', this.singleOrder)
        // console.log(this.$store.getters.orders)

        // this.$store.commit('TOGGLE_ADDTOTALNUMBER', this.singleOrder.goodsNumber)
        // this.$store.commit('TOGGLE_ADDTOTALPRICE', this.singleOrder.goodsTotal)

        // if (this.$store.getters.seletedGoods === this.$store.getters.orders.length) {
        //   this.$store.commit('TOGGLE_SELECTALL', true)
        // } else {
        //   this.$store.commit('TOGGLE_SELECTALL', false)
        // }
        // this.$router.push('/shoppingCart/myCart')
      },
      // 立即购买
      buyNow() {
        this.productionsInfo.goodsImg = this.goodsDetails.imgThumbnailList[0]
        this.productionsInfo.goodsNumber = this.goodsDetails.number
        this.productionsInfo.goodsPrice = this.goodsDetails.nowPrice
        this.productionsInfo.goodsTotal = this.goodsDetails.number * this.goodsDetails.nowPrice
        this.productionsInfo.goodsTitle = this.goodsDetails.name
        this.productionsInfo.goodsFeature = this.goodsDetails.features
        this.productionsInfo.goodsServer = this.goodsDetails.serviceList[0] + '...'
        this.$router.push({
          path: '/orderDetail',
          query: this.productionsInfo
        })
      }
    },
    data() {
      return {
        banner: '',
        productionsInfo: {},
        goodsDetails: {
          imgBannerList: [require('@/assets/images/productions/checkA/bannerA1.png'), require(
            '@/assets/images/productions/checkA/bannerA2.png'), require(
            '@/assets/images/productions/checkA/bannerA3.png')],
          imgThumbnailList: [require('@/assets/images/productions/checkA/bannerAs1.png'), require(
            '@/assets/images/productions/checkA/bannerAs2.png'), require(
            '@/assets/images/productions/checkA/bannerAs3.png')],
          name: '测试',
          nowPrice: 0.01,
          priPrice: 360,
          feature: '一卡在手多家体检',
          serviceList: ['★项目全面检查完善', '★专业解读 体检报告', '★检后跟踪 健康管理'],
          number: 1,
          imgDetail: require('@/assets/images/productions/checkA/detailA.jpg')
        },
      }
    },
  }
</script>

<style scoped>

  @media screen and (min-width:1050px) {
    .goods-width {
      width: 1000px;
      margin: 20px auto;
    }

    .goods {
      display: flex;
      justify-content: space-between;
    }

    .goodsInfo .item {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width:800px) and (max-width:1050px) {
    .goods-width {
      padding: 20px;
    }

    .goods {
      display: flex;
      justify-content: space-around;
    }

    .goodsInfo .item {
      margin-bottom: 30px;
    }

    .goodsRecommend {
      display: none
    }
  }

  @media screen and (min-width:640px) and (max-width:800px) {
    .goods-width {
      padding: 20px;
    }

    .goodsImg .imgArea {
      width: 450px;
      margin: auto;
    }

    .goodsInfo {
      width: 450px;
      margin: 20px auto;
    }

    .goodsInfo .item {
      margin-bottom: 20px;
    }

    .goodsOrder {
      text-align: center;
    }

    .goodsRecommend {
      display: none
    }
  }

  @media screen and (max-width:640px) {

    .goods-width {
      padding: 10px;
    }

    .goodsImg .imgArea img {
      width: 100%
    }

    .goodsInfo {
      margin-top: 20px;
    }

    .goodsInfo .item {
      margin-bottom: 10px;
    }

    .goodsOrder {
      text-align: center;
      margin-top: 20px;
    }

    .goodsRecommend {
      display: none
    }
  }


  .goods .goodsImg .imgPagination {
    display: flex;
    justify-content: center;
  }

  .goods .goodsImg .imgPagination .thumbnail {
    margin-left: 10px;
    margin-top: 10px;
    font-size: 0px;
    cursor: pointer;
  }

  .goods .goodsImg .imgPagination .thumbnail img {
    width: 50px;
    height: 50px;
  }

  .goods .goodsImg .imgPagination .thumbnail img:hover {
    border: 2px solid red;
  }

  .goods .goodsInfo .item:not(:first-child) {
    text-indent: 2em;
  }

  .goods .goodsInfo .goodsTitle {
    font-size: 18px;
    font-weight: 500;
  }

  .goods .goodsInfo .goodsPrice .current-price {
    color: red;
    font-size: 16px;
  }

  .goods .goodsInfo .goodsPrice .last-price {
    color: gray;
    font-size: 12px
  }

  .goods .goodsInfo .goodsServer div:not(:first-child) {
    text-indent: 4em;
  }

  .goods .goodsInfo .goodsNumber {
    display: flex;
  }

  .goods .goodsInfo .goodsNumber .reduce,
  .goods .goodsInfo .goodsNumber .add {
    text-align: center;
    border: 1px solid;
    border-color: #e1e1e1;
    text-indent: 0px;
    width: 25px;
    cursor: pointer;
    color: gray;
    transition: all 1s;
  }
  .goods .goodsInfo .goodsNumber .reduce:hover,
  .goods .goodsInfo .goodsNumber .add:hover{
    border-color: gray
  }

  .goods .goodsInfo .goodsNumber .num {
    text-indent: 0px;
    margin: 0 10px;

  }

  .goods .goodsInfo .goodsNumber .num input {
    width: 50px;
    text-align: center;
  }

  .goodsRecommend {
    width: 150px;
  }

  .goodsRecommend .recommend-title {
    text-align: center;
    margin-bottom: 10px;
  }

  .goodsRecommend .recommend-item {
    margin-bottom: 10px;
  }

  .goodsRecommend .recommend-item .item-img {
    width: 150px;
    height: 150px;
    background-color: #fd988b;
  }

  .detail {
    box-sizing: border-box;
    margin: 20px auto;
  }

  .detail-title {
    border: 1px solid gray;
    height: 60px;
    display: flex;
    align-items: center;
  }

  .detail-title .title-item {
    flex: 1;
    text-align: center;
    font-size: 20px;
  }

  .detail-title .title-item:nth-child(1) {
    border-right: 1px solid gray;
  }

  .detail-title .title-item a {
    color: gray;
  }

  .detail .detail-img {
    margin-top: 10px;
    border: 1px solid #e1e1e1;
  }

  .detail .detail-img img {
    width: 100%;
  }
</style>