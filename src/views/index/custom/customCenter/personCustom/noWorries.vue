<template>
  <div>
    <div>请继续完善个人客户信息：</div>
    <div style="text-align:center">
      <Tag color="error">御驾无忧客户</Tag>
    </div>
    <Form ref="noWorriesList" :model="noWorriesList" :rules="rules" :label-width="120">
      <Row>
        <Col :xs="24" :sm="12" :md="8" :lg="6">
          <FormItem label="姓名" prop="name">
            <Input type="text" v-model="noWorriesList.name" ></Input>
          </FormItem>
        </Col>
        <Col :xs="24" :sm="12" :md="8" :lg="6">
          <FormItem label="性别" prop="sex">
            <Select v-model="noWorriesList.sex" placeholder>
              <Option value="男">男</Option>
              <Option value="女">女</Option>
            </Select>
          </FormItem>
        </Col>
        <Col :xs="24" :sm="12" :md="8" :lg="6">
          <FormItem label="手机号(必填)" prop="phone">
            <Input type="text" v-model="noWorriesList.phone"></Input>
          </FormItem>
        </Col>
        <Col :xs="24" :sm="12" :md="8" :lg="6">
          <FormItem label="身份证号" prop="creditCard">
            <Input type="text" v-model="noWorriesList.creditCard" ></Input>
          </FormItem>
        </Col>
        <Col :xs="24" :sm="12" :md="8" :lg="6">
          <FormItem label="车牌号" prop="licensePlates">
            <Input type="text" v-model="noWorriesList.licensePlates" ></Input>
          </FormItem>
        </Col>
        <Col :xs="24" :sm="12" :md="8" :lg="6">
          <FormItem label="车险有效期" prop="endTime">
            <DatePicker type="date" v-model="noWorriesList.endTime"></DatePicker>
          </FormItem>
        </Col>
        <Col :xs="24" :sm="12" :md="8" :lg="6">
          <FormItem label="联系地址" prop="nowerAddr">
            <Input type="text" v-model="noWorriesList.nowerAddr" ></Input>
          </FormItem>
        </Col>
        <Col :xs="24" :sm="12" :md="8" :lg="6">
          <FormItem label="备注" prop="tips">
            <Input type="text" v-model="noWorriesList.tips" ></Input>
          </FormItem>
        </Col>
        <Col :xs="24" :sm="12" :md="8" :lg="6">
          <FormItem label="跟踪类型" prop="type">
            <Select v-model="noWorriesList.type" placeholder>
              <Option value="电话">电话</Option>
              <Option value="面谈">面谈</Option>
              <Option value="QQ/微信">QQ/微信</Option>
            </Select>
          </FormItem>
        </Col>
        <Col :xs="24" :sm="12" :md="8" :lg="6">
          <FormItem label="跟踪内容" prop="content">
            <Input type="textarea" v-model="noWorriesList.content" ></Input>
          </FormItem>
        </Col>
      </Row>
      <div v-for="(item,index) in noWorriesList.follow" style="margin-bottom:10px">
        <span style="margin-right:10px;margin-left:2em">第{{index+1}}次</span>
        <span style='margin-right:10px'>跟踪方式：{{item.type}}</span>
        <span>跟踪内容：{{item.content}}</span>
      </div>
      <div style="text-align:center">
        <Button
          type="error"
          shape="circle"
          @click="handleSubmit()"
          size="small"
          style="width:150px"
        >提交</Button>
      </div>
    </Form>
  </div>
</template>

<script>
import {noWorryDrive} from '@/api/login'
export default {
  props:['noWorriesList'],
  data() {
    return {
      cusPerson: {},
      cusVehicle: {},
      custrack: {},
      resultList: {},
      // noWorriesList: {
      //   name: "",
      //   sex: "",
      //   phone: "",
      //   creditCard: "",
      //   nowerAddr: "",
      //   type: "",
      //   content: "",
      //   licensePlates: "",
      //   endTime: "",
      //   tips: ""
      // },
      rules: {
        phone: [
          {
            required: true,
            message: "手机号必填",
            trigger: "blur"
          },
        ],
        licensePlates: [
          {
            required: true,
            message: "车牌号必填",
            trigger: "blur"
          }
        ],
        type: [
          {
            required: true,
            message: "跟踪类型必填",
            trigger: "blur"
          }
        ],
        content: [
          {
            required: true,
            message: "跟踪内容必填",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.handleInfo();
      this.$refs.noWorriesList.validate(valid => {
        if (valid) {
          noWorryDrive(this.resultList).then(res=>{
            if(res.data.success){
              console.log(res)
              this.$store.dispatch('ShowAllCustoms')
                this.$store.commit('TOGGLE_MODAL',false)
            this.$Message.success(res.data.display);
            }else{
              this.$Message.error(res.data.display)
            }
          }).catch(err=>{
            console.log(err)
          })
        } else {
          this.$Message.error("请检查表单信息！");
        }
      });
    },
    handleInfo() {
      this.cusPerson.name = this.noWorriesList.name;
      this.cusPerson.sex = this.noWorriesList.sex;
      this.cusPerson.phone = this.noWorriesList.phone;
      this.cusPerson.creditCard=this.noWorriesList.creditCard;
      this.cusPerson.nowerAddr = this.noWorriesList.nowerAddr;
      this.cusPerson.tips = this.noWorriesList.tips;
      this.cusVehicle.licensePlates = this.noWorriesList.licensePlates;
      this.cusVehicle.endTime = this.noWorriesList.endTime;
      this.custrack.type = this.noWorriesList.type;
      this.custrack.content = this.noWorriesList.content;
      this.resultList.cusPerson = this.cusPerson;
      this.resultList.cusVehicle = this.cusVehicle;
      this.resultList.custrack = this.custrack;
      this.resultList.userId = this.$store.getters.userInfo.Id;
      console.log(this.resultList);
    }
  }
};
</script>

<style scoped>
</style>