<template>
  <div>
    <div>请继续完善个人客户信息：</div>
    <div style="text-align:center">
      <Tag color="error">借贷纠纷客户</Tag>
    </div>
    <Form ref="lendDisputeList" :model='lendDisputeList' :rules='rules' :label-width="120">
      <Row>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="姓名" prop="name">
          <Input type="text" v-model="lendDisputeList.name" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="性别" prop="sex">
          <Select v-model="lendDisputeList.sex" placeholder="">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="身份证号" prop="creditCard">
          <Input type="text" v-model="lendDisputeList.creditCard" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="户口性质" prop="accountProperty">
          <Input type="text" v-model="lendDisputeList.accountProperty" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="联系方式" prop="phone">
          <Input type="text" v-model="lendDisputeList.phone" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="地址" prop="nowerAddr">
          <Input type="text" v-model="lendDisputeList.nowerAddr" ></Input>
        </FormItem>
        </Col>
        <!-- <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否是会员" prop="pass">
          <Select v-model="lendDisputeList.pass" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col> -->
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="问题" prop="problem">
          <Input type="text" v-model="lendDisputeList.problem" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="借款双方关系" prop="loansRelation">
          <Input type="text" v-model="lendDisputeList.loansRelation" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="借款金额" prop="loansSum">
          <Input type="text" v-model="lendDisputeList.loansSum" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="借款时间" prop="loansDate">
          <Input type="text" v-model="lendDisputeList.loansDate" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="约定还款时间" prop="repaymentDate">
          <Input type="text" v-model="lendDisputeList.repaymentDate" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="借款利息" prop="loansInterest">
          <Input type="text" v-model="lendDisputeList.loansInterest" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="资金来源" prop="fundSource">
          <Input type="text" v-model="lendDisputeList.fundSource" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否有借款协议" prop="isLoanAgreement">
          <Select v-model="lendDisputeList.isLoanAgreement" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="打款形式" prop="repaymentType">
          <Select v-model="lendDisputeList.repaymentType" placeholder="">
            <Option value="现金">现金</Option>
            <Option value="转账">转账</Option>
            <Option value="其他">其他</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否有收条" prop="isReceipt">
          <Select v-model="lendDisputeList.isReceipt" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否备注转账说明" prop="isState">
          <Select v-model="lendDisputeList.isState" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="对方有无固定资产" prop="isFixedAssets">
          <Select v-model="lendDisputeList.isFixedAssets" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
            <Option value="不清楚">不清楚</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否了解贷款用途" prop="isLoansWay">
          <Select v-model="lendDisputeList.isLoansWay" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否有担保人" prop="isBondsman">
          <Select v-model="lendDisputeList.isBondsman" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否有抵押物" prop="isGuarantee">
          <Select v-model="lendDisputeList.isGuarantee" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="追债时间" prop="recoverDebtDate">
          <Input type="text" v-model="lendDisputeList.recoverDebtDate" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="对方如何回复" prop="reply">
          <Input type="text" v-model="lendDisputeList.reply" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否保留沟通证据" prop="evidence">
          <Select v-model="lendDisputeList.evidence" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="诉求" prop="appeal">
          <Input type="text" v-model="lendDisputeList.appeal" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="备注" prop="tips">
          <Input type="text" v-model="lendDisputeList.tips" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪类型" prop="type">
          <Select v-model="lendDisputeList.type" placeholder="">
            <Option value="电话">电话</Option>
            <Option value="面谈">面谈</Option>
            <Option value="QQ/微信">QQ/微信</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪内容" prop="content">
          <Input type="textarea" v-model="lendDisputeList.content" ></Input>
        </FormItem>
        </Col>
      </Row>
      <div v-for="(item,index) in lendDisputeList.follow" style="margin-bottom:10px">
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
import {addLend} from '@/api/login'
  export default {
    props:['lendDisputeList'],
    data() {
      return {
        cusPerson: {},
        personLoans: {},
        custrack: {},
        resultList: {},
        // lendDisputeList: {
        //   name: '',
        //   sex: '',
        //   creditCard: '',
        //   accountProperty: '',
        //   phone: '',
        //   nowerAddr: '',
        //   problems: '',
        //   loansRelation: '',
        //   loansSum: '',
        //   repaymentDate: '',
        //   loansInterest: '',
        //   fundSource: '',
        //   isLoanAgreement: '',
        //   repaymentType: '',
        //   isReceipt: '',
        //   isState: '',
        //   isFixedAssets: '',
        //   isLoansWay: '',
        //   isBondsman: '',
        //   isGuarantee: '',
        //   recoverDebtDate: '',
        //   reply: '',
        //   evidence: '',
        //   tips: '',
        //   appeal: '',
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
        this.$refs.lendDisputeList.validate((valid) => {
          if (valid) {
            addLend(this.resultList).then(res => {
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
        this.cusPerson.name = this.lendDisputeList.name;
        this.cusPerson.sex = this.lendDisputeList.sex;
        this.cusPerson.phone = this.lendDisputeList.phone;
        this.cusPerson.creditCard = this.lendDisputeList.creditCard
        this.cusPerson.accountProperty = this.lendDisputeList.accountProperty
        this.cusPerson.nowerAddr = this.lendDisputeList.nowerAddr;
        this.cusPerson.tips = this.lendDisputeList.tips;
        this.personLoans = this.lendDisputeList
        this.custrack.type = this.lendDisputeList.type;
        this.custrack.content = this.lendDisputeList.content;
        this.resultList.cusPerson = this.cusPerson;
        this.resultList.personLoans = this.personLoans;
        this.resultList.custrack = this.custrack;
        this.resultList.userId = this.$store.getters.userInfo.Id;
        console.log(this.resultList);
      }
    },
  }
</script>

<style scoped>

</style>