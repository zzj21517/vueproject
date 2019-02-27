<template>
  <div>
    <div>请继续完善个人客户信息：</div>
    <div style="text-align:center">
      <Tag color="error">劳动纠纷客户</Tag>
    </div>
    <Form ref="laborDisputeList" :model='laborDisputeList' :rules='rules' :label-width="120">
      <Row>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="姓名" prop="name">
          <Input type="text" v-model="laborDisputeList.name" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="性别" prop="sex">
          <Select v-model="laborDisputeList.sex" placeholder="">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="身份证号" prop="creditCard">
          <Input type="text" v-model="laborDisputeList.creditCard" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="户口性质" prop="accountProperty">
          <Input type="text" v-model="laborDisputeList.accountProperty" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="联系方式" prop="phone">
          <Input type="text" v-model="laborDisputeList.phone" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="地址" prop="nowerAddr">
          <Input type="text" v-model="laborDisputeList.nowerAddr" ></Input>
        </FormItem>
        </Col>
        <!-- <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否是会员" prop="pass">
          <Select v-model="laborDisputeList.pass" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col> -->
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="公司名称" prop="comName">
          <Input type="text" v-model="laborDisputeList.comName" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="公司所属行业" prop="comIndustry">
          <Input type="text" v-model="laborDisputeList.comIndustry" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="公司地址" prop="comAddr">
          <Input type="text" v-model="laborDisputeList.comAddr" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="工作性质" prop="workProperty">
          <Input type="text" v-model="laborDisputeList.workProperty" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="工作年限" prop="workYears">
          <Input type="text" v-model="laborDisputeList.workYears" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="合同约定月工资" prop="salary">
          <Input type="text" v-model="laborDisputeList.salary" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否签订劳动合同" prop="isLaborContract">
          <Select v-model="laborDisputeList.isLaborContract" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="合同时效" prop="endTime">
          <Input type="text" v-model="laborDisputeList.endTime" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="其他关系证明" prop="otherConfirm">
          <Input type="text" v-model="laborDisputeList.otherConfirm" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="社保缴纳证明" prop="">
          <Input type="text" v-model="laborDisputeList.socialDays" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否有考勤记录" prop="isWorkRecord">
          <Select v-model="laborDisputeList.isWorkRecord" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="工作支付方式" prop="payType">
          <Input type="text" v-model="laborDisputeList.payType" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="最近一次支付时间" prop="lastPayTime">
          <Input type="text" v-model="laborDisputeList.lastPayTime" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="最近一次支付金额" prop="paySum">
          <Input type="text" v-model="laborDisputeList.paySum" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="有无公司员工手册" prop="isHandbook">
          <Select v-model="laborDisputeList.isHandbook" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="违纪行为" prop="breakRules">
          <Input type="text" v-model="laborDisputeList.breakRules" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="自动离职原因" prop="resignReason">
          <Input type="text" v-model="laborDisputeList.resignReason" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="单位辞退原因" prop="kickOutReason">
          <Input type="text" v-model="laborDisputeList.kickOutReason" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="有无解除合同通知" prop="isKickOutBook">
          <Select v-model="laborDisputeList.isKickOutBook" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="诉求" prop="appeal">
          <Input type="text" v-model="laborDisputeList.appeal" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="备注" prop="tips">
          <Input type="text" v-model="laborDisputeList.tips" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪类型" prop="type">
          <Select v-model="laborDisputeList.type" placeholder="">
            <Option value="电话">电话</Option>
            <Option value="面谈">面谈</Option>
            <Option value="QQ/微信">QQ/微信</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪内容" prop="content">
          <Input type="textarea" v-model="laborDisputeList.content"></Input>
        </FormItem>
        </Col>
      </Row>
      <div v-for="(item,index) in laborDisputeList.follow" style="margin-bottom:10px">
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
import {addLabor} from '@/api/login'
  export default {
    props:['laborDisputeList'],
    data() {
      return {
        cusPerson: {},
        personLabour: {},
        custrack: {},
        resultList: {},
        // laborDisputeList: {
        //   name: '',
        //   sex: '',
        //   creditCard: '',
        //   accountProperty: '',
        //   phone: '',
        //   nowerAddr: '',
        //   comName: '',
        //   comIndustry: '',
        //   comAddr: '',
        //   workProperty: '',
        //   workYears: '',
        //   salary: '',
        //   isLaborContract: '',
        //   endTime: '',
        //   otherConfirm: '',
        //   socialDays: '',
        //   isWorkRecord: '',
        //   lastPayTime: '',
        //   payType: '',
        //   paySum: '',
        //   isHandbook: '',
        //   breakRules: '',
        //   resignReason: '',
        //   kickOutReason: '',
        //   isKickOutBook: '',
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
        this.$refs.laborDisputeList.validate((valid) => {
          if (valid) {
            addLabor(this.resultList).then(res => {
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
        this.cusPerson.name = this.laborDisputeList.name;
        this.cusPerson.sex = this.laborDisputeList.sex;
        this.cusPerson.phone = this.laborDisputeList.phone;
        this.cusPerson.creditCard = this.laborDisputeList.creditCard
        this.cusPerson.accountProperty = this.laborDisputeList.accountProperty
        this.cusPerson.nowerAddr = this.laborDisputeList.nowerAddr;
        this.cusPerson.tips = this.laborDisputeList.tips;
        this.personLabour = this.laborDisputeList
        this.custrack.type = this.laborDisputeList.type;
        this.custrack.content = this.laborDisputeList.content;
        this.resultList.cusPerson = this.cusPerson;
        this.resultList.personLabour = this.personLabour;
        this.resultList.custrack = this.custrack;
        this.resultList.userId = this.$store.getters.userInfo.Id;
        console.log(this.resultList);
      }
    },
  }
</script>

<style scoped>

</style>