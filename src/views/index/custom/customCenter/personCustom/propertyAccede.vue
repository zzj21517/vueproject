<template>
  <div>
    <div>请继续完善个人客户信息：</div>
    <div style="text-align:center">
      <Tag color="error">财产继承客户</Tag>
    </div>
    <Form ref="propertyAccedeList" :model='propertyAccedeList' :rules='rules' :label-width="120">
      <Row>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="姓名" prop="name">
          <Input type="text" v-model="propertyAccedeList.name" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="性别" prop="sex">
          <Select v-model="propertyAccedeList.sex" placeholder="">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="身份证号" prop="creditCard">
          <Input type="text" v-model="propertyAccedeList.creditCard" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="户口性质" prop="accountProperty">
          <Input type="text" v-model="propertyAccedeList.accountProperty" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="联系方式" prop="phone">
          <Input type="text" v-model="propertyAccedeList.phone" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="地址" prop="nowerAddr">
          <Input type="text" v-model="propertyAccedeList.nowerAddr" ></Input>
        </FormItem>
        </Col>
        <!-- <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否是会员" prop="pass">
          <Select v-model="propertyAccedeList.pass" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col> -->
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="遗嘱数量" prop="testamentNum">
          <Input type="text" v-model="propertyAccedeList.testamentNum" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="配偶是否健在" prop="isMate">
          <Select v-model="propertyAccedeList.isMate" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="子女情况说明" prop="children">
          <Input type="text" v-model="propertyAccedeList.children" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="父母情况说明" prop="parent">
          <Select v-model="propertyAccedeList.parent" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="遗嘱方式" prop="testament">
          <Select v-model="propertyAccedeList.testament" placeholder="">
            <Option value="自书">自书</Option>
            <Option value="代书">代书</Option>
            <Option value="口头">口头</Option>
            <Option value="公证">公证</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="立遗嘱时间" prop="testamentTime">
          <Input type="text" v-model="propertyAccedeList.testamentTime" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="共有财产" prop="publicProperty">
          <Input type="text" v-model="propertyAccedeList.publicProperty" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="个人财产" prop="privateProperty">
          <Input type="text" v-model="propertyAccedeList.privateProperty" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="遗嘱内容" prop="teatamentText">
          <Input type="text" v-model="propertyAccedeList.teatamentText" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="与财产所有人关系" prop="inhertRelation">
          <Input type="text" v-model="propertyAccedeList.inhertRelation" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="备注" prop="tips">
          <Input type="text" v-model="propertyAccedeList.tips" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪类型" prop="type">
          <Select v-model="propertyAccedeList.type" placeholder="">
            <Option value="电话">电话</Option>
            <Option value="面谈">面谈</Option>
            <Option value="QQ/微信">QQ/微信</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪内容" prop="content">
          <Input type="textarea" v-model="propertyAccedeList.content"></Input>
        </FormItem>
        </Col>
      </Row>
      <div v-for="(item,index) in propertyAccedeList.follow" style="margin-bottom:10px">
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
import {addAccede} from '@/api/login'
  export default {
    props:['propertyAccedeList'],
    data() {
      return {
        cusPerson: {},
        personInherit: {},
        custrack: {},
        resultList: {},
        // propertyAccedeList: {
        //   name: '',
        //   sex: '',
        //   creditCard: '',
        //   accountProperty: '',
        //   phone: '',
        //   nowerAddr: '',
        //   testamentNum: '',
        //   testamentTime: '',
        //   publicProperty: '',
        //   privateProperty: '',
        //   testament: '',
        //   parent: '',
        //   children: '',
        //   isMate: '',
        //   inhertRelation: '',
        //   teatamentText: '',
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
        this.$refs.propertyAccedeList.validate((valid) => {
          if (valid) {
            addAccede(this.resultList).then(res => {
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
        this.cusPerson.name = this.propertyAccedeList.name;
        this.cusPerson.sex = this.propertyAccedeList.sex;
        this.cusPerson.phone = this.propertyAccedeList.phone;
        this.cusPerson.creditCard = this.propertyAccedeList.creditCard
        this.cusPerson.accountProperty = this.propertyAccedeList.accountProperty
        this.cusPerson.nowerAddr = this.propertyAccedeList.nowerAddr;
        this.cusPerson.tips = this.propertyAccedeList.tips;
        this.personInherit = this.propertyAccedeList
        this.custrack.type = this.propertyAccedeList.type;
        this.custrack.content = this.propertyAccedeList.content;
        this.resultList.cusPerson = this.cusPerson;
        this.resultList.personInherit = this.personInherit;
        this.resultList.custrack = this.custrack;
        this.resultList.userId = this.$store.getters.userInfo.Id;
        console.log(this.resultList);
      }
    },
  }
</script>

<style scoped>

</style>