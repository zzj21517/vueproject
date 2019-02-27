<template>
  <div>
    <div>请继续完善个人客户信息：</div>
    <div style="text-align:center">
      <Tag color="error">经济纠纷客户</Tag>
    </div>
    <Form ref="economicDisputeList" :model='economicDisputeList' :rules='rules' :label-width="120">
      <Row>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="姓名" prop="name">
          <Input type="text" v-model="economicDisputeList.name" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="性别" prop="sex">
          <Select v-model="economicDisputeList.sex" placeholder="">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="身份证号" prop="creditCard">
          <Input type="text" v-model="economicDisputeList.creditCard" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="户口性质" prop="accountProperty">
          <Input type="text" v-model="economicDisputeList.accountProperty" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="联系方式" prop="phone">
          <Input type="text" v-model="economicDisputeList.phone" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="地址" prop="nowerAddr">
          <Input type="text" v-model="economicDisputeList.nowerAddr" ></Input>
        </FormItem>
        </Col>
        <!-- <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否是会员" prop="pass">
          <Select v-model="economicDisputeList.pass" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col> -->
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="问题描述" prop="descri">
          <Input type="text" v-model="economicDisputeList.descri" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="拒付原因" prop="refuseReason">
          <Input type="text" v-model="economicDisputeList.refuseReason" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="诉求" prop="appeal">
          <Input type="text" v-model="economicDisputeList.appeal" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="合同签署日期" prop="contractDate">
          <Input type="text" v-model="economicDisputeList.contractDate" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否支付定金" prop="isSubscription">
          <Select v-model="economicDisputeList.isSubscription" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="定金支付时间" prop="subscriptionDate">
          <Input type="text" v-model="economicDisputeList.subscriptionDate" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="贷款支付时间" prop="loansPayDate">
          <Input type="text" v-model="economicDisputeList.loansPayDate" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="支付方式" prop="payType">
          <Select v-model="economicDisputeList.payType" placeholder="">
            <Option value="对公账户">对公账户</Option>
            <Option value="对私账户">对私账户</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否打印凭证" prop="isProve">
          <Select v-model="economicDisputeList.isProve" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否备注打款说明" prop="isTips">
          <Select v-model="economicDisputeList.isTips" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="（发、退）货时间" prop="shipmentsDate">
          <Input type="text" v-model="economicDisputeList.shipmentsDate" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否有签收单据" prop="isSignFor">
          <Select v-model="economicDisputeList.isSignFor" placeholder="">
            <Option value="送货单">送货单</Option>
            <Option value="退货单">退货单</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否存在质量问题" prop="isQuality">
          <Select v-model="economicDisputeList.isQuality" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="约定付款期限" prop="payDate">
          <Input type="text" v-model="economicDisputeList.payDate" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="约定货物交付期限" prop="payDays">
          <Input type="text" v-model="economicDisputeList.payDays" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="逾期天数" prop="supDays">
          <Input type="text" v-model="economicDisputeList.supDays" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否有对账确认函" prop="isAffirm">
          <Select v-model="economicDisputeList.isAffirm" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否到期提醒" prop="isRemind">
          <Select v-model="economicDisputeList.isRemind" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="付款时间是否违约" prop="paytimeBreak">
          <Select v-model="economicDisputeList.paytimeBreak" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="产品质量是否违约" prop="qualityBreak">
          <Select v-model="economicDisputeList.qualityBreak" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="交货时间是否违约" prop="deliveryBreak">
          <Select v-model="economicDisputeList.deliveryBreak" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="解决方案" prop="resolveType">
          <Select v-model="economicDisputeList.resolveType" placeholder="">
            <Option value="调解">调解</Option>
            <Option value="诉讼">诉讼</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="备注" prop="tips">
          <Input type="text" v-model="economicDisputeList.tips" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪类型" prop="type">
          <Select v-model="economicDisputeList.type" placeholder="">
            <Option value="电话">电话</Option>
            <Option value="面谈">面谈</Option>
            <Option value="QQ/微信">QQ/微信</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪内容" prop="content">
            <Input v-model="economicDisputeList.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
        </FormItem>
        </Col>
      </Row>
      <div v-for="(item,index) in economicDisputeList.follow" style="margin-bottom:10px">
        <span style="margin-right:10px;margin-left:2em">第{{index+1}}次</span>
        <span style='margin-right:10px'>跟踪方式：{{item.type}}</span>
        <span>跟踪内容：{{item.content}}</span>
      </div>
      <div style="text-align:center">
        <Button type="error" shape='circle' @click="handleSubmit()" size='small' style="width:150px">提交</Button>
      </div>
    </Form>
  </div>
</template>

<script>
  import {
    addEconomic
  } from '@/api/login'
  export default {
    props:['economicDisputeList'],
    data() {
      return {
        cusPerson: {},
        personEconomic: {},
        custrack: {},
        resultList: {},
        // economicDisputeList: {
        //   name: '',
        //   sex: '',
        //   creditCard: '',
        //   accountProperty: '',
        //   phone: '',
        //   nowerAddr: '',
        //   descri: '',
        //   refuseReason: '',
        //   appeal: '',
        //   contractDate: '',
        //   isSubscription: '',
        //   subscriptionDate: '',
        //   loansPayDate: '',
        //   payType: '',
        //   isProve: '',
        //   isTips: '',
        //   shipmentsDate: '',
        //   isSignFor: '',
        //   isQuality: '',
        //   payDate: '',
        //   payDays: '',
        //   supDays: '',
        //   isAffirm: '',
        //   isRemind: '',
        //   resolveType: '',
        //   paytimeBreak: '',
        //   qualityBreak: '',
        //   deliveryBreak: '',
        //   tips: '',
        //   type: '',
        //   content: '',
        // },
        rules: {
          phone: [{
            required: true,
            message: '请填写手机号',
            trigger: 'blur'
          }],
          type: [{
            required: true,
            message: "跟踪类型必填",
            trigger: "blur"
          }],
          content: [{
            required: true,
            message: "跟踪内容必填",
            trigger: "blur"
          }]
        }
      }
    },
    methods: {
      handleSubmit() {
        this.handleInfo()
        this.$refs.economicDisputeList.validate((valid) => {
          if (valid) {
            addEconomic(this.resultList).then(res => {
              if (res.data.success) {
                console.log(res)
                this.$store.dispatch('ShowAllCustoms')
                this.$store.commit('TOGGLE_MODAL',false)
                this.$Message.success(res.data.display);
              } else {
                this.$Message.error(res.data.display)
              }
            }).catch(err => {
              console.log(err)
            })
          } else {
            this.$Message.error("请检查表单信息！");
          }
        })
      },
      handleInfo() {
        this.cusPerson.name = this.economicDisputeList.name;
        this.cusPerson.sex = this.economicDisputeList.sex;
        this.cusPerson.phone = this.economicDisputeList.phone;
        this.cusPerson.creditCard = this.economicDisputeList.creditCard
        this.cusPerson.accountProperty = this.economicDisputeList.accountProperty
        this.cusPerson.nowerAddr = this.economicDisputeList.nowerAddr;
        this.cusPerson.tips = this.economicDisputeList.tips;
        this.personEconomic = this.economicDisputeList
        this.custrack.type = this.economicDisputeList.type;
        this.custrack.content = this.economicDisputeList.content;
        this.resultList.cusPerson = this.cusPerson;
        this.resultList.personEconomic = this.personEconomic;
        this.resultList.custrack = this.custrack;
        this.resultList.userId = this.$store.getters.userInfo.Id;
        console.log(this.resultList);
      }
    },
  }
</script>

<style scoped>

</style>