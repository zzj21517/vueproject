<template>
  <div class="payment">
    <Breadcrumb style="margin:20px">
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/shoppingCart">购物车</BreadcrumbItem>
        <BreadcrumbItem>支付页面</BreadcrumbItem>
    </Breadcrumb>
    <div class="payOrder">
      <div class="order">
      <div>订单提交成功，请尽快付款！订单号：{{id}}</div>
      <div>应付金额<span class="account">￥{{account}}</span>元</div>
    </div>
    <div class="alipay">
      <h3>支付宝支付</h3>
      <div>
        <!-- <div v-if="num" class="countTime">二维码将在{{num}}秒后过期</div>
        <div v-else class="countTime">二维码已过期，请<a href="#">刷新</a></div> -->
        <div class="qrcode" >
          <img :src="payQrcode" alt="" v-if="count<=15">
          <Button type="error" @click="referesh" v-else>请刷新二维码重新支付</Button>
        </div>
        <div class="pay-tips">
          <div>请使用支付宝扫一扫</div>
          <div>扫码二维码支付</div>
          <div style="color:red">{{payStatus}}</div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  import {
    isPaid
  } from '@/api/login'
  export default {
    data() {
      return {
        payQrcode: '',
        id: '',
        payStatus: '',
        account: '',
        num: 60,
        timer: '',
        count:0,
      }
    },
    created() {
      this.payQrcode = this.$route.query.url
      this.id = this.$route.query.id
      this.account = this.$route.query.account
      console.log(this.payQrcode)
      // this.timer=setInterval(this.conutTime,1000)
    },
    mounted() {
      this.checkPayStatus()
    },
    destroyed() {

    },
    methods: {
      // conutTime(){
      //   if(this.num>0){
      //      this.num--
      //     console.log(this.num)
      //   }else{
      //     setInterval(this.timer)
      //   }
      // },
      // 刷新二维码
      referesh(){
        this.count=0
        this.checkPayStatus()
      },
      checkPayStatus() {
        this.count++
        isPaid(this.id).then(res => {
          console.log(res)
          if (res.data.success) {
            if (res.data.msg === 'WAIT_BUYER_PAY') {
              console.log('待支付')
              if(this.count<=15){
              this.payStatus = '待支付'
                setTimeout(() => {
                this.checkPayStatus()
              }, 5000);
              }else{
                this.payStatus=''
                this.$Message.error('二维码失效，请刷新二维码重新支付')
              }
            } else if (res.data.msg === 'ACQ.TRADE_NOT_EXIST') {
              console.log('订单未生成')
             if(this.count<=15){
               this.payStatus = '待支付'
                setTimeout(() => {
                this.checkPayStatus()
              }, 5000);
              }else{
                this.payStatus=''
                this.$Message.error('二维码失效，请刷新二维码重新支付')
              }
            } else if (res.data.msg === 'TRADE_CLOSED') {

            } else if (res.data.msg === 'TRADE_SUCCESS') {
              this.payStatus = '支付成功'
              this.$Message.success('支付成功！')
              this.$router.push('/shoppingCart/allOrders')
            } else if (res.data.msg === 'TRADE_FINISHED') {

            }
          } else {
            //   setTimeout(() => {
            //     this.checkPayStatus()
            //   }, 5000);
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
  }
</script>

<style scoped>
  @media screen and (min-width:1100px) {
    .payOrder {
      width: 1000px;
      margin: 100px auto;
    }

    .payment .order {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      font-size: 18px;
      font-weight: 600;
    }

    .payment .alipay .qrcode {
      width: 402px;
      height: 402px;
      display:flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (max-width:1100px) {
    .payment {
      margin: 100px 50px;
    }

    .payment .order {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      font-size: 18px;
      font-weight: 600;
    }

    .payment .alipay .qrcode {
      width: 402px;
      height: 402px;
    }
  }

  @media screen and (max-width:640px) {
    .payment {
      margin: 0 20px;
    }

    .payment .order {
      flex-direction: column;
      font-size: 14px;
      font-weight: normal;
    }

    .payment .alipay .qrcode {
      width: 80%;
      height: 80%;
    }

    .payment .alipay .qrcode img {
      width: 100%
    }
  }


  .payment .order .account {
    color: red;
  }

  .payment .alipay {
    background-color: #fff;
    padding: 12px 30px;
    box-shadow: 0 6px 32px rgba(0, 0, 0, .13);
    margin-top: 20px;
  }

  .payment .alipay .qrcode {
    margin: 50px auto;
    border: 1px solid #e1e1e1;
  }

  .payment .alipay .pay-tips {
    text-align: center;
  }

  .countTime {
    text-align: center;
  }
</style>