<template>
  <div>
    <Header></Header>
    <div class="title">—确认订单—</div>
    <div class="order">
      <div class="order-title">
        <span style="border-bottom:2px solid #fc2e13">填写</span>并核对订单信息
      </div>
      <div class="line"></div>
      <Form>
        <FormItem>
          <Button type="warning" size="small" @click="selectCustom=true">个人客户</Button>
          <Button type="error" size="small" @click="selectCustom=false">公司客户</Button>
        </FormItem>
      </Form>
      <div class="add">
        <!-- 个人信息 -->
        <div class="person" v-if="selectCustom">
          <div class="add-form">
            <Form ref="receivePersonInfo" :model="receivePersonInfo" :label-width="80">
              <FormItem label="姓名：">
                <Input type="text" v-model="receivePersonInfo.name">
                </Input>
              </FormItem>
              <FormItem label="手机号：">
                <Input type="text" v-model="receivePersonInfo.phone">
                </Input>
              </FormItem>
              <FormItem label="详细地址：">
                <Input type="text" v-model="receivePersonInfo.addr">
                </Input>
              </FormItem>
              <FormItem label="备注：">
                <Input type="text" v-model="receivePersonInfo.tips">
                </Input>
              </FormItem>
              <FormItem style="color:red">提醒:御驾无忧客户请在备注中填写车牌号</FormItem>
            </Form>
          </div>
          <div class="add-select">
            <div class="add-title">从<span style="border-bottom:2px solid #fc2e13">个人</span>客户添加</div>
            <div class="add-content">
              <Form ref="personCustom" :model="personCustom" inline>
                 <FormItem>请输入个人姓名或者手机号</FormItem>
              <FormItem label="">
                <Input type="text" v-model="personCustom.name">
                </Input>
              </FormItem>
              <FormItem>
                <Button type="warning" @click="search('person')">搜索</Button>
              </FormItem>
            </Form>
            </div>
          </div>
        </div>
        <!-- 公司信息 -->
        <div class="company" v-else>
          <div class="add-form">
            <Form ref="receiveBusinessInfo" :model="receiveBusinessInfo" :label-width="100">
              <FormItem label="企业名称：">
                <Input type="text" v-model="receiveBusinessInfo.company">
                </Input>
              </FormItem>
              <FormItem label="企业联系人：">
                <Input type="text" v-model="receiveBusinessInfo.name">
                </Input>
              </FormItem>
              <FormItem label="联系方式：">
                <Input type="text" v-model="receiveBusinessInfo.phone">
                </Input>
              </FormItem>
              <FormItem label="办公地：">
                <Input type="text" v-model="receiveBusinessInfo.addr">
                </Input>
              </FormItem>
              <FormItem label="社会信用代码：">
                <Input type="text" v-model="receiveBusinessInfo.usic">
                </Input>
              </FormItem>
              <FormItem label="备注：">
                <Input type="text" v-model="receiveBusinessInfo.tips">
                </Input>
              </FormItem>
              <FormItem style="color:red">提醒:御驾无忧客户请在备注中填写车牌号</FormItem>
            </Form>
          </div>
          <div class="add-select">
            <div class="add-title">从<span style="border-bottom:2px solid #fc2e13">企业</span>客户添加</div>
               <div class="add-content">
              <Form ref="compnayCustom" :model="companyCustom" inline>
                <FormItem>请输入企业名称或者联系方式</FormItem>
              <FormItem label="">
                <Input type="text" v-model="companyCustom.name">
                </Input>
              </FormItem>
              <FormItem>
                <Button type="error" @click="search('company')">搜索</Button>
              </FormItem>
            </Form>
            </div>
          </div>
        </div>
      </div>
      <Modal v-model="modal">
      <p slot="header" style="color:#f60;text-align:center">
        <span class="title">—选择客户信息—</span>
      </p>
      <div class="model-content">
        <Form :ref="formItem" :v-model="formItem" :label-width="100">
          <FormItem>
            <RadioGroup v-model="formItem.radio" vertical>
              <template v-if="selectCustom">
                <Radio v-for="(item,index) in addresses" :key="index" :label='index'>
                  <span>姓名：</span><span>{{item.name}}</span>，<span>手机号：</span><span>{{item.phone}}</span>
                </Radio>
              </template>
              <template v-else>
                <Radio v-for="(item,index) in addresses" :key="index" :label='index'>
                  <span>企业名称：</span><span>{{item.name}}</span>，<span>联系方式：</span><span>{{item.phone}}</span>
                </Radio>
              </template>
            </RadioGroup>
        </FormItem>
        <FormItem>
          <Button type="error" size='small' @click="select">选择客户</Button>
        </FormItem>
        </Form>
      </div>
      </Modal>
      <div class="line"></div>
      <div class="goods-list">
        <div class="add-title">商品清单</div>
        <div class="goods">
          <div class="goods-detail">
            <div class="goods-img">
              <img :src="goodsList.goodsImg" alt="" width="100px" height="100px">
            </div>
            <div class="goods-name">
              <div>{{goodsList.goodsTitle}}</div>
              <div>{{goodsList.goodsFeature}}</div>
              <div>{{goodsList.goodsServer}}</div>
            </div>
          </div>
          <div class="goods-number">x{{goodsList.goodsNumber}}</div>
          <div class="goods-price">￥{{goodsList.goodsTotal}}</div>
          <div class="goods-action">返回修改购物车</div>
          <div class="isShow">
            <div>数量：{{goodsList.goodsNumber}}</div>
            <div>总价：￥{{goodsList.goodsTotal}}</div>
            <div>返回修改购物车</div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="bill">
        <div class="bill-form">
          <div class="add-title">发票信息</div>
          <Form ref="billInfo" :model="billInfo" :label-width="100">
            <FormItem label="发票抬头：">
              <Input type="text" v-model="billInfo.title">
              </Input>
            </FormItem>
            <FormItem label="纳税人识别号：">
              <Input type="text" v-model="billInfo.copyright">
              </Input>
            </FormItem>
            <FormItem label="发票接收邮箱：">
              <Input type="text" v-model="billInfo.email">
              </Input>
            </FormItem>
          </Form>
        </div>
      </div>
      <div class="line"></div>
      <div class="pay-type">
        <div class="add-title">
          支付方式
        </div>
        <div>
          <RadioGroup v-model="pay" type="button" size="small">
            <Radio label="扫码支付"></Radio>
          </RadioGroup>
        </div>
      </div>
      <div class="line"></div>
      <div class="agreement">
        <div class="add-title">
          电子协议
        </div>
        <div>
          <RadioGroup v-model="agreement">
            <Radio label="我已阅读并同意"></Radio>
          </RadioGroup>
          <a target="_blank" href="http://zzjbyx.top/pdf/360.pdf">《会员服务卡协议》</a>
        </div>
      </div>
      <div class="line"></div>
      <div class="submit-order" style="margin-bottom:100px">
        共<span class="order-num">1</span>件商品 应付金额：<span class="order-sum">￥{{goodsList.goodsTotal}}</span> <Button type="error"
          size="small" shape="circle" @click="handleSubmitOrder()">提交订单</Button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/views/index/header'
  import {getAddress} from '@/api/login'
  import {
    payfor
  } from '@/api/login'
  export default {
    components: {
      Header
    },
    created() {
      console.log(this.$route.query)
      this.goodsList = this.$route.query
    },
    methods: {
      // 搜索客户
      search(info){
        if(info==="person"){
          getAddress(this.$store.getters.userInfo.Id,this.personCustom.name,info).then(res=>{
            console.log(res)
            if(res.data.success){
              this.addresses=res.data.list
               this.modal=true
               this.$Message.success(res.data.msg)
            }else{
              this.$Message.error(res.data.msg)
            }
          }).catch(err=>{
            console.log(err)
          })
        }else{
          getAddress(this.$store.getters.userInfo.Id,this.companyCustom.name,info).then(res=>{
           console.log(res)
            if(res.data.success){
              this.addresses=res.data.list
               this.modal=true
               this.$Message.success(res.data.msg)
            }else{
              this.$Message.error(res.data.msg)
            }
          }).catch(err=>{
            console.log(err)
          })
        }
      },
      // 选择客户
      select(){
          if(typeof(this.formItem.radio)==='number'){
            console.log(this.formItem.radio)
            if(this.selectCustom){
              this.receivePersonInfo=this.addresses[this.formItem.radio]
            }else{
              this.receiveBusinessInfo=this.addresses[this.formItem.radio]
            }
          this.$Message.success('添加信息成功！')
          this.modal=false
          }else{
            this.$Message.error('请选择客户信息！')
          }
      },
      handleSubmitOrder() {
        console.log(this.$store.getters.goodsList)
        this.orderInfo.saleInvoice.invoiceHead = this.billInfo.title
        this.orderInfo.saleInvoice.identNumber = this.billInfo.copyright
        this.orderInfo.saleInvoice.mail = this.billInfo.email
        if(this.selectCustom){
          for(let item in this.receivePersonInfo){
            this.orderInfo.saleUser[item]=this.receivePersonInfo[item]
            }
        }else{
          for(let item in this.receiveBusinessInfo){
            this.orderInfo.saleUser[item]=this.receiveBusinessInfo[item]
          }
        }

        this.orderInfo.account = this.goodsList.goodsTotal
        this.orderInfo.saleGoods.nowPrice = this.goodsList.goodsPrice
        this.orderInfo.saleGoods.name = this.goodsList.goodsTitle
        this.orderInfo.userId=this.$store.getters.userInfo.Id
        console.log(this.orderInfo)
        if (!this.agreement) {
          this.$Message.warning('请勾选电子协议');
        } else {
          payfor(this.orderInfo).then(res => {
            console.log(res)
            if (res.data.success) {
              this.$router.push({
                path: '/payment',
                query: {
                  url: res.data.url,
                  id: res.data.id,
                  account: this.orderInfo.account,
                }
              })
            }
          }).catch(err => {
            console.log(err)
          })
        }
      }
    },
    data() {
      return {
        addresses:[
          // {
          //   name:'张三',
          //   phone:'18860912786',
          //   address:'苏大',
          //   tips:'哈哈哈'
          // },
          // {
          //   name:'李四',
          //   phone:'13701477559',
          //   address:'走遍',
          //   tips:'回电话'
          // }
        ],
        formItem:{},
        // 对话框
        modal:false,
        // 个人客户
        personCustom:{},
        // 企业客户
        companyCustom:{},
        // 选择客户类型
        selectCustom: true,
        agreement: '',
        goodsList: '',
        orderInfo: {
          saleUser: {
            name: '',
            addr: '',
            tips: '',
            phone: '',
          },
          saleInvoice: {
            invoiceHead: '',
            identNumber: '',
            mail: '',
          },
          saleGoods: {
            nowPrice: '',
            id: 1,
            name: '',
          },
          userId:1,
          goodsNum: 1,
          account: '',
        },
        isBillActive: '',
        isBtnActive: 0,
        isRadioActive: '',
        pay: '扫码支付',
        person: '1、王先生',
        receivePersonInfo: {
          name: '',
          phone: '',
          addr: '',
          tips: '',
        },
        receiveBusinessInfo:{
          company:'',
          name:'',
          phone:'',
          addr:'',
          tips:'',
          usic:'',
        },
        billInfo: {
          title: '',
          copyright: '',
          email: '',
        },
      }
    },
  }
</script>

<style scoped>
  .title {
    margin-top: 80px;
  }

  .btnActive {
    background-color: #fc3218;
    color: #fff;
  }

  .radioActive,
  .billActive {
    background-color: #fc3218;
    border: 1px solid #fc3218 !important;
  }

  @media screen and (min-width:640px) {
    .order {
      margin: 20px 50px;
    }
    .person,.company{
      display: flex
    }
    .add-form {
      width: 100%;
      margin-right: 20px;
    }

    .order .add-content {
      width: 260px;
    }

    .bill {
      display: flex;
    }

    .bill .bill-form {
      width: 100%;
      margin-right: 20px;
    }

    .goods-list .goods {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .goods .isShow {
      display: none;
    }

  }

  @media screen and (max-width:640px) {
    .order {
      margin: 20px
    }

    .order .add .add-form {
      width: 100%;
      margin-right: 20px;
    }

    .order .add-content {
      width: 260px;
      margin: 0 auto;
    }

    .bill .bill-form {
      width: 100%;
      margin-right: 20px;
    }


    .goods .goods-number,
    .goods .goods-price,
    .goods .goods-action {
      display: none;
    }

    .isShow {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }
  }


  .order .order-title {
    font-size: 18px;
  }

  .order .add-title {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .order .line {
    margin: 10px 0;
    border-bottom: 1px solid #e1e1e1;
  }



  .add-select .add-content {
    display: flex;
  }

  .add-select .production-select .btn {
    margin-bottom: 10px;
  }

  .add-select .production-select .btn a {
    color: #fc3218;
    border: 1px solid #fc3218;
    border-radius: 5px;
    padding: 3px 10px;
    font-size: 12px;
  }

  .add-select .production-select .btn .btnActive {
    color: #fff;
  }


  .ivu-input:focus,
  .ivu-input:hover {
    border-color: #fc2e13;
  }



  .goods-list .goods .goods-detail {
    display: flex;
    align-items: center;
  }

  .goods-list .goods .goods-detail .goods-img {
    width: 100px;
    height: 100px;
    background-color: #fd988b;
    margin-right: 20px;
  }

  .goods-list .goods .goods-detail .goods-name div:first-child {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .goods-list .goods .goods-detail .goods-name div:not(:first-child) {
    text-indent: 1em;
  }


  .pay-type .ivu-radio-group-button .ivu-radio-wrapper-checked {
    color: #fc2e13;
    border-color: #fc2e13;
  }

  .agreement a {
    vertical-align: middle;
  }

  .submit-order {
    text-align: right;
  }

  .submit-order .order-num,
  .submit-order .order-sum {
    color: #fc2e13;
  }

  .submit-order .order-sum {
    font-size: 16px;
  }

  .page {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .page span {
    margin: 0px 10px;
  }

  .page .ivu-icon {
    cursor: pointer;
  }
</style>