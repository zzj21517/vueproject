<template>
  <div>
    <div>请继续完善企业客户信息：</div>
    <div style="text-align:center">
      <Tag color="error" v-for="(item,index) in businessType" :key="index">{{item}}</Tag>
    </div>
    <Form ref="businessCustomList" :model='businessCustomList' :rules='rules' :label-width="120">
      <Row>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="企业名称" prop="name">
          <Input type="text" v-model="businessCustomList.name" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="办公地" prop="officeAddr">
          <Input type="text" v-model="businessCustomList.officeAddr" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="联系人" prop="relationPerson">
          <Input type="text" v-model="businessCustomList.relationPerson" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="联系方式" prop="relationType">
          <Input type="text" v-model="businessCustomList.relationType" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="统一社会信用代码" prop="usic">
          <Input type="text" v-model="businessCustomList.usic" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="注册地" prop="registAddr">
          <Input type="text" v-model="businessCustomList.registAddr" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="网站" prop="websit">
          <Input type="text" v-model="businessCustomList.websit" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="股东" prop="shareholder">
          <Input type="text" v-model="businessCustomList.shareholder" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="高管" prop="executer">
          <Input type="text" v-model="businessCustomList.executer" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="股权结构" prop="struct">
          <Input type="text" v-model="businessCustomList.struct" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="关联企业" prop="relationCompany">
          <Input type="text" v-model="businessCustomList.relationCompany" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="分支机构" prop="branch">
          <Input type="text" v-model="businessCustomList.branch" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="品牌产品" prop="product">
          <Input type="text" v-model="businessCustomList.product" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="特殊资质" prop="specific">
          <Input type="text" v-model="businessCustomList.specific" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="获得的主要荣誉" prop="honor">
          <Input type="text" v-model="businessCustomList.honor" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="企查查有无风险提示" prop="isPisk">
          <Input type="text" v-model="businessCustomList.isPisk" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="规模" prop="comScale">
          <Input type="text" v-model="businessCustomList.comScale" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="人员" prop="personnel">
          <Input type="text" v-model="businessCustomList.personnel" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="成立时间" prop="createTime">
          <Input type="text" v-model="businessCustomList.createTime" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="负责人背景经历" prop="scribe">
          <Input type="text" v-model="businessCustomList.scribe" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="对方的风控方式" prop="controllType">
          <Input type="text" v-model="businessCustomList.controllType" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="备注" prop="tips">
          <Input type="text" v-model="businessCustomList.tips" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪类型" prop="type">
          <Select v-model="businessCustomList.type" placeholder="">
            <Option value="电话">电话</Option>
            <Option value="面谈">面谈</Option>
            <Option value="QQ/微信">QQ/微信</Option>
          </Select>
        </FormItem>
        </Col>
          <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪内容" prop="content">
            <Input v-model="businessCustomList.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
        </FormItem>
        </Col>
      </Row>
      <div v-for="(item,index) in businessCustomList.follow" style="margin-bottom:10px">
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
    addCompany
  } from '@/api/login'
  export default {

    data() {
      return {
        // businessCustomList: {
        //   name: '',
        //   registAddr: '',
        //   officeAddr: '',
        //   relationPerson: '',
        //   relationType: '',
        //   websit: '',
        //   shareholder: '',
        //   executer: '',
        //   struct: '',
        //   relationCompany: '',
        //   branch: '',
        //   product: '',
        //   specific: '',
        //   honor: '',
        //   isRisk: '',
        //   comScale: '',
        //   personnel: '',
        //   createTime: '',
        //   scribe: '',
        //   controllType: '',
        //   content: '',
        //   type: '',
        //   tips: '',
        //   usic: '',
        //   nodeArray: [],
        // },
        rules: {
          relationType: [{
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
          }],
          relationPerson:[
            {
              required:true,
              message:'联系人必填',
              trigger:'blur'
            }
          ],
          officeAddr:[
            {
              required:true,
              message:'办公地址必填',
              trigger:'blur'
            }
          ],
          name:[
            {
              required:true,
              message:'企业名称必填',
              trigger:'blur'
            }
          ]
        }
      }
    },
    props: ['businessType','businessCustomList'],
    created() {
      console.log(this.businessType)
    },
    methods: {
      handleSubmit() {
        this.businessCustomList.userId=this.$store.getters.userInfo.Id
        this.businessCustomList.nodeArray = this.businessType
        console.log(this.businessCustomList)
        this.$refs.businessCustomList.validate((valid) => {
          if (valid) {
            addCompany(this.businessCustomList).then(res => {
              console.log(res)
              if(res.data.success){
                this.$store.dispatch('ShowBusinessCustoms')
                this.$store.commit('TOGGLE_MODAL',false)
                this.$Message.success(res.data.display)
              }else{
                this.$Message.error(res.data.display)
              }
            }).catch(err => {
              console.log(err)
            })
          } else {
            this.$Message.error("请检查表单信息！");
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>