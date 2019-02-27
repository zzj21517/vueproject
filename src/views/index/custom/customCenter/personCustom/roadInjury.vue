<template>
  <div>
    <div>请继续完善个人客户信息：</div>
    <div style="text-align:center">
      <Tag color="error">道交人伤客户</Tag>
    </div>
    <Form ref="roadInjuryList" :model='roadInjuryList' :rules='rules' :label-width="120">
      <Row>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="姓名" prop="name">
          <Input type="text" v-model="roadInjuryList.name"></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="性别" prop="sex">
          <Select v-model="roadInjuryList.sex" placeholder="">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="手机号(必填)" prop="phone">
          <Input type="text" v-model="roadInjuryList.phone"></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="身份证号" prop="creditCard">
          <Input type="text" v-model="roadInjuryList.creditCard"></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否有居住证" prop="haveResident">
          <Select v-model="roadInjuryList.haveResident" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="居住证签发日期" prop="residentCreate">
          <DatePicker type="date" v-model="roadInjuryList.residentCreate"></DatePicker>
        </FormItem>
        </Col>
        <!-- <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="QQ/微信" prop="pass">
          <Input type="text" v-model="roadInjuryList.pass" ></Input>
        </FormItem>
        </Col> -->
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="E-mail" prop="mail">
          <Input type="text" v-model="roadInjuryList.mail"></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="户籍地址" prop="houseAddr">
          <Input type="text" v-model="roadInjuryList.houseAddr"></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="现居地址" prop="nowerAddr">
          <Input type="text" v-model="roadInjuryList.nowerAddr"></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="备注" prop="tips">
          <Input type="text" v-model="roadInjuryList.tips"></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪类型" prop="type">
          <Select v-model="roadInjuryList.type" placeholder="">
            <Option value="电话">电话</Option>
            <Option value="面谈">面谈</Option>
            <Option value="QQ/微信">QQ/微信</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪内容" prop="content">
          <Input type="text" v-model="roadInjuryList.content"></Input>
        </FormItem>
        </Col>
      </Row>
      <div v-for="(item,index) in roadInjuryList.follow" style="margin-bottom:10px">
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
    addInjury
  } from '@/api/login'
  export default {
    props: ['roadInjuryList'],
    data() {
      return {
        cusPerson: {},
        custrack: {},
        resultList: {},
        // roadInjuryList:{
        //   name: '',
        //   sex: '',
        //   phone: '',
        //   creditCard: '',
        //   haveResident: '',
        //   residentCreate: '',
        //   mail: '',
        //   houseAddr: '',
        //   nowerAddr: '',
        //   type: '',
        //   content: '',
        //   tips: '',
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
        this.$refs.roadInjuryList.validate((valid) => {
          if (valid) {
            addInjury(this.resultList).then(res => {
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
        this.cusPerson.name = this.roadInjuryList.name;
        this.cusPerson.sex = this.roadInjuryList.sex;
        this.cusPerson.phone = this.roadInjuryList.phone;
        this.cusPerson.creditCard = this.roadInjuryList.creditCard
        this.cusPerson.haveResident = this.roadInjuryList.haveResident
        this.cusPerson.residentCreate = this.roadInjuryList.residentCreate
        this.cusPerson.mail=this.roadInjuryList.mail
        this.cusPerson.houseAddr=this.roadInjuryList.houseAddr
        this.cusPerson.nowerAddr = this.roadInjuryList.nowerAddr;
        this.cusPerson.tips = this.roadInjuryList.tips;
        this.custrack.type = this.roadInjuryList.type;
        this.custrack.content = this.roadInjuryList.content;
        this.resultList.cusPerson = this.cusPerson;
        this.resultList.custrack = this.custrack;
        this.resultList.userId = this.$store.getters.userInfo.Id;
        console.log(this.resultList);
      }
    },
  }
</script>

<style scoped>

</style>