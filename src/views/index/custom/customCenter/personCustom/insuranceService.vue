<template>
  <div>
    <div>请继续完善个人客户信息：</div>
    <div style="text-align:center">
      <Tag color="error">保险服务客户</Tag>
    </div>
    <Form ref="insuranceServiceList" :model='insuranceServiceList' :rules=rules :label-width="120">
      <Row>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="姓名" prop="name">
          <Input type="text" v-model="insuranceServiceList.name" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="性别" prop="sex">
          <Select v-model="insuranceServiceList.sex" placeholder="">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="手机号" prop="phone">
          <Input type="text" v-model="insuranceServiceList.phone" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="身份证号" prop="creditCard">
          <Input type="text" v-model="insuranceServiceList.creditCard" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="车牌" prop="licensePlates">
          <Input type="text" v-model="insuranceServiceList.licensePlates" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="车险有效期" prop="endTime">
          <Input type="text" v-model="insuranceServiceList.endTime" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="车辆品牌" prop="vehicleBrand">
          <Input type="text" v-model="insuranceServiceList.vehicleBrand" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="车辆型号" prop="vehicleModel">
          <Input type="text" v-model="insuranceServiceList.vehicleModel" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="商业保险额度" prop="commercialAmount">
          <Input type="text" v-model="insuranceServiceList.commercialAmount" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="职业类别" prop="perssion">
          <Input type="text" v-model="insuranceServiceList.perssion" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="联系地址" prop="nowerAddr">
          <Input type="text" v-model="insuranceServiceList.nowerAddr" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="备注" prop="tips">
          <Input type="text" v-model="insuranceServiceList.tips" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪类型" prop="type">
          <Select v-model="insuranceServiceList.type" placeholder="">
            <Option value="电话">电话</Option>
            <Option value="面谈">面谈</Option>
            <Option value="QQ/微信">QQ/微信</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪内容" prop="content">
          <Input type="textarea" v-model="insuranceServiceList.content" ></Input>
        </FormItem>
        </Col>
      </Row>
      <div v-for="(item,index) in insuranceServiceList.follow" style="margin-bottom:10px">
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
    addInsurance
  } from '@/api/login'
  export default {
    props:['insuranceServiceList'],
    data() {
      return {
        cusPerson: {},
        cusVehicle: {},
        custrack: {},
        resultList: {},
        // insuranceServiceList: {
        //   name: '',
        //   sex: '',
        //   phone: '',
        //   creditCard: '',
        //   licensePlates: '',
        //   endTime: '',
        //   vehicleBrand: '',
        //   vehicleModel: '',
        //   commercialAmount: '',
        //   perssion: '',
        //   nowerAddr: '',
        //   type: '',
        //   content: '',
        //   tips: '',
        // },
        rules: {
          phone: [{
            required: true,
            message: "手机号必填",
            trigger: "blur"
          }, ],
          licensePlates: [{
            required: true,
            message: "车牌号必填",
            trigger: "blur"
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
        this.handleInfo();
        this.$refs.insuranceServiceList.validate(valid => {
          if (valid) {
            addInsurance(this.resultList).then(res => {
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
        this.cusPerson.name = this.insuranceServiceList.name;
        this.cusPerson.sex = this.insuranceServiceList.sex;
        this.cusPerson.phone = this.insuranceServiceList.phone;
        this.cusPerson.creditCard=this.insuranceServiceList.creditCard;
        this.cusPerson.nowerAddr = this.insuranceServiceList.nowerAddr;
        this.cusPerson.perssion = this.insuranceServiceList.perssion
        this.cusPerson.tips = this.insuranceServiceList.tips;
        this.cusVehicle.licensePlates = this.insuranceServiceList.licensePlates;
        this.cusVehicle.endTime = this.insuranceServiceList.endTime;
        this.cusVehicle.vehicleBrand = this.insuranceServiceList.vehicleBrand
        this.cusVehicle.vehicleModel = this.insuranceServiceList.vehicleModel
        this.cusVehicle.commercialAmount = this.insuranceServiceList.commercialAmount
        this.custrack.type = this.insuranceServiceList.type;
        this.custrack.content = this.insuranceServiceList.content;
        this.resultList.cusPerson = this.cusPerson;
        this.resultList.cusVehicle = this.cusVehicle;
        this.resultList.custrack = this.custrack;
        this.resultList.userId = this.$store.getters.userInfo.Id;
        console.log(this.resultList);
      }
    }
  }
</script>

<style scoped>

</style>