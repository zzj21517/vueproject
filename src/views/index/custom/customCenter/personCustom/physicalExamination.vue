<template>
  <div>
    <div>请继续完善个人客户信息：</div>
    <div style="text-align:center">
      <Tag color="error">体检通客户</Tag>
    </div>
    <Form ref="physicalExaminationList" :model='physicalExaminationList' :rules='rules' :label-width="120">
      <Row>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="姓名" prop="name">
          <Input type="text" v-model="physicalExaminationList.name" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="性别" prop="sex">
          <Select v-model="physicalExaminationList.sex" placeholder="">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="手机号" prop="phone">
          <Input type="text" v-model="physicalExaminationList.phone" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="身份证号" prop="creditCard">
          <Input type="text" v-model="physicalExaminationList.creditCard" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="联系地址" prop="nowerAddr">
          <Input type="text" v-model="physicalExaminationList.nowerAddr" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="备注" prop="tips">
          <Input type="text" v-model="physicalExaminationList.tips" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪类型" prop="type">
          <Select v-model="physicalExaminationList.type" placeholder="">
            <Option value="电话">电话</Option>
            <Option value="面谈">面谈</Option>
            <Option value="QQ/微信">QQ/微信</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪内容" prop="content">
          <Input type="textarea" v-model="physicalExaminationList.content" ></Input>
        </FormItem>
        </Col>
      </Row>
      <div v-for="(item,index) in physicalExaminationList.follow" style="margin-bottom:10px">
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
    addPhysical
  } from '@/api/login'
  export default {
    props:['physicalExaminationList'],
    data() {
      return {
        cusPerson: {},
        custrack: {},
        resultList: {},
        // physicalExaminationList: {
        //   name: '',
        //   sex: '',
        //   phone: '',
        //   creditCard: '',
        //   nowerAddr: '',
        //   type: '',
        //   content: '',
        // },
        rules: {
          phone: [{
            required: true,
            message: "手机号必填",
            trigger: "blur"
          }, ],
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
        this.handleInfo();
        this.$refs.physicalExaminationList.validate(valid => {
          if (valid) {
            addPhysical(this.resultList).then(res => {
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
        });
      },
      handleInfo() {
        this.cusPerson.name = this.physicalExaminationList.name;
        this.cusPerson.sex = this.physicalExaminationList.sex;
        this.cusPerson.phone = this.physicalExaminationList.phone;
        this.cusPerson.creditCard=this.physicalExaminationList.creditCard;
        this.cusPerson.nowerAddr = this.physicalExaminationList.nowerAddr;
        this.cusPerson.tips = this.physicalExaminationList.tips;
        this.custrack.type = this.physicalExaminationList.type;
        this.custrack.content = this.physicalExaminationList.content;
        this.resultList.cusPerson = this.cusPerson;
        this.resultList.custrack = this.custrack;
        this.resultList.userId = this.$store.getters.userInfo.Id;
        console.log(this.resultList);
      }
    }
  }
</script>

<style scoped>

</style>