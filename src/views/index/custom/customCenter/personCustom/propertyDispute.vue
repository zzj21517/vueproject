<template>
  <div>
    <div>请继续完善个人客户信息：</div>
    <div style="text-align:center">
      <Tag color="error">物业纠纷客户</Tag>
    </div>
    <Form ref="propertyDisputeList" :model='propertyDisputeList' :rules='rules' :label-width="120">
      <Row>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="姓名" prop="name">
          <Input type="text" v-model="propertyDisputeList.name" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="性别" prop="sex">
          <Select v-model="propertyDisputeList.sex" placeholder="">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="身份证号" prop="creditCard">
          <Input type="text" v-model="propertyDisputeList.creditCard" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="户口性质" prop="accountProperty">
          <Input type="text" v-model="propertyDisputeList.accountProperty" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="联系方式" prop="phone">
          <Input type="text" v-model="propertyDisputeList.phone" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="地址" prop="nowerAddr">
          <Input type="text" v-model="propertyDisputeList.nowerAddr" ></Input>
        </FormItem>
        </Col>
        <!-- <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否是会员" prop="pass">
          <Select v-model="propertyDisputeList.pass" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col> -->
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="问题描述" prop="descri">
          <Input type="text" v-model="propertyDisputeList.descri" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="诉求" prop="appeal">
          <Input type="text" v-model="propertyDisputeList.appeal" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="备注" prop="tips">
          <Input type="text" v-model="propertyDisputeList.tips" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪类型" prop="type">
          <Select v-model="propertyDisputeList.type" placeholder="">
            <Option value="电话">电话</Option>
            <Option value="面谈">面谈</Option>
            <Option value="QQ/微信">QQ/微信</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪内容" prop="content">
          <Input type="textarea" v-model="propertyDisputeList.content"></Input>
        </FormItem>
        </Col>
      </Row>
      <div v-for="(item,index) in propertyDisputeList.follow" style="margin-bottom:10px">
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
import {addProperty} from '@/api/login'
  export default {
    props:['propertyDisputeList'],
    data() {
      return {
        cusPerson: {},
        personProperty: {},
        custrack: {},
        resultList: {},
        // propertyDisputeList: {
        //   name: '',
        //   sex: '',
        //   creditCard: '',
        //   accountProperty: '',
        //   phone: '',
        //   nowerAddr: '',
        //   descri: '',
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
        this.$refs.propertyDisputeList.validate((valid) => {
          if (valid) {
            addProperty(this.resultList).then(res => {
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
        this.cusPerson.name = this.propertyDisputeList.name;
        this.cusPerson.sex = this.propertyDisputeList.sex;
        this.cusPerson.phone = this.propertyDisputeList.phone;
        this.cusPerson.creditCard = this.propertyDisputeList.creditCard
        this.cusPerson.accountProperty = this.propertyDisputeList.accountProperty
        this.cusPerson.nowerAddr = this.propertyDisputeList.nowerAddr;
        this.cusPerson.tips = this.propertyDisputeList.tips;
        this.personProperty = this.propertyDisputeList
        this.custrack.type = this.propertyDisputeList.type;
        this.custrack.content = this.propertyDisputeList.content;
        this.resultList.cusPerson = this.cusPerson;
        this.resultList.personProperty = this.personProperty;
        this.resultList.custrack = this.custrack;
        this.resultList.userId = this.$store.getters.userInfo.Id;
        console.log(this.resultList);
      }
    },
  }
</script>

<style scoped>

</style>