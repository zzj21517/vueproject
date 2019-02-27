<template>
  <div>
    <div>请继续完善个人客户信息：</div>
    <div style="text-align:center">
      <Tag color="error">房屋买卖客户</Tag>
    </div>
    <Form ref="housingDisputeList" :model='housingDisputeList' :rules='rules' :label-width="120">
      <Row>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="姓名" prop="name">
          <Input type="text" v-model="housingDisputeList.name" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="性别" prop="sex">
          <Select v-model="housingDisputeList.sex" placeholder="">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="身份证号" prop="creditCard">
          <Input type="text" v-model="housingDisputeList.creditCard" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="户口性质" prop="accountProperty">
          <Input type="text" v-model="housingDisputeList.accountProperty" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="联系方式" prop="phone">
          <Input type="text" v-model="housingDisputeList.phone" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="地址" prop="nowerAddr">
          <Input type="text" v-model="housingDisputeList.nowerAddr" ></Input>
        </FormItem>
        </Col>
        <!-- <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否是会员" prop="pass">
          <Select v-model="housingDisputeList.pass" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col> -->
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="问题描述" prop="descri">
          <Input type="text" v-model="housingDisputeList.descri" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="房源" prop="houseResource">
          <Select v-model="housingDisputeList.houseResource" placeholder="">
            <Option value="一手房">一手房</Option>
            <Option value="二手房">二手房</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="纠纷主体" prop="disputePerson">
          <Select v-model="housingDisputeList.disputePerson" placeholder="">
            <Option value="购房者">购房者</Option>
            <Option value="房产中介">房产中介</Option>
            <Option value="售房者">售房者</Option>
            <Option value="开发商">开发商</Option>
            <Option value="银行">银行</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="房子所在区" prop="houseAddr">
          <Input type="text" v-model="housingDisputeList.houseAddr" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="楼盘名称" prop="houseName">
          <Input type="text" v-model="housingDisputeList.houseName" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="合同签订时间" prop="signDate">
          <Input type="text" v-model="housingDisputeList.signDate" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="支付定金时间" prop="paySubscriptionTime">
          <Input type="text" v-model="housingDisputeList.paySubscriptionTime" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="定金金额" prop="paySum">
          <Input type="text" v-model="housingDisputeList.paySum" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="支付首付时间" prop="downPaymentTime">
          <Input type="text" v-model="housingDisputeList.downPaymentTime" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="首付金额" prop="downPaymentSum">
          <Input type="text" v-model="housingDisputeList.downPaymentSum" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="贷款金额" prop="loansSum">
          <Input type="text" v-model="housingDisputeList.loansSum" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="房子约定交付时间" prop="leadTime">
          <Input type="text" v-model="housingDisputeList.leadTime" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="房子实际交付时间" prop="realLeadTime">
          <Input type="text" v-model="housingDisputeList.realLeadTime" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="房产证办理时间" prop="houseTime">
          <Input type="text" v-model="housingDisputeList.houseTime" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="合同约定房屋面积" prop="houseArea">
          <Input type="text" v-model="housingDisputeList.houseArea" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="实际交付面积" prop="realHouseArea">
          <Input type="text" v-model="housingDisputeList.realHouseArea" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="贷款手续办理时间" prop="loansTime">
          <Input type="text" v-model="housingDisputeList.loansTime" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="房贷时间" prop="lendingTime">
          <Input type="text" v-model="housingDisputeList.lendingTime" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="拒贷原因" prop="refuseReason">
          <Input type="text" v-model="housingDisputeList.refuseReason" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="有无放款支付凭证" prop="isPayConfirm">
          <Select v-model="housingDisputeList.isPayConfirm" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="凭证有无款项用途" prop="tipsWays">
          <Select v-model="housingDisputeList.tipsWays" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="房子有无质量问题" prop="isQuality">
          <Select v-model="housingDisputeList.isQuality" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="诉求" prop="appeal">
          <Input type="text" v-model="housingDisputeList.appeal" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪类型" prop="type">
          <Select v-model="housingDisputeList.type" placeholder="">
            <Option value="电话">电话</Option>
            <Option value="面谈">面谈</Option>
            <Option value="QQ/微信">QQ/微信</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪内容" prop="content">
          <Input type="textarea" v-model="housingDisputeList.content" :autosize="{minRows: 2,maxRows: 5}"></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="备注" prop="tips">
          <Input type="text" v-model="housingDisputeList.tips" ></Input>
        </FormItem>
        </Col>
      </Row>
      <div v-for="(item,index) in housingDisputeList.follow" style="margin-bottom:10px">
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
import {addHouse} from '@/api/login'
  export default {
    props:['housingDisputeList'],
    data() {
      return {
        cusPerson: {},
        personHouse: {},
        custrack: {},
        resultList: {},
        // housingDisputeList: {
        //   name: '',
        //   sex: '',
        //   creditCard: '',
        //   accountProperty: '',
        //   phone: '',
        //   nowerAddr: '',
        //   descri: '',
        //   houseResource: '',
        //   disputePerson: '',
        //   houseAddr: '',
        //   houseName: '',
        //   signDate: '',
        //   paySubscriptionTime: '',
        //   paySum: '',
        //   downPaymentTime: '',
        //   downPaymentSum: '',
        //   loansSum: '',
        //   leadTime: '',
        //   realLeadTime: '',
        //   houseTime: '',
        //   houseArea: '',
        //   realHouseArea: '',
        //   loansTime: '',
        //   lendingTime: '',
        //   refuseReason: '',
        //   isPayConfirm: '',
        //   tipsWays: '',
        //   isQuality: '',
        //   appeal: '',
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
        this.$refs.housingDisputeList.validate((valid) => {
          if (valid) {
            addHouse(this.resultList).then(res => {
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
        this.cusPerson.name = this.housingDisputeList.name;
        this.cusPerson.sex = this.housingDisputeList.sex;
        this.cusPerson.phone = this.housingDisputeList.phone;
        this.cusPerson.creditCard = this.housingDisputeList.creditCard
        this.cusPerson.accountProperty = this.housingDisputeList.accountProperty
        this.cusPerson.nowerAddr = this.housingDisputeList.nowerAddr;
        this.cusPerson.tips = this.housingDisputeList.tips;
        this.personHouse = this.housingDisputeList
        this.custrack.type = this.housingDisputeList.type;
        this.custrack.content = this.housingDisputeList.content;
        this.resultList.cusPerson = this.cusPerson;
        this.resultList.personHouse = this.personHouse;
        this.resultList.custrack = this.custrack;
        this.resultList.userId = this.$store.getters.userInfo.Id;
        console.log(this.resultList);
      }
    },
  }
</script>

<style scoped>

</style>