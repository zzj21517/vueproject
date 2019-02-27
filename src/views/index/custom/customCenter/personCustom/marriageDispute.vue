<template>
  <div>
    <div>请继续完善个人客户信息：</div>
    <div style="text-align:center">
      <Tag color="error">婚姻纠纷客户</Tag>
    </div>
    <Form ref="marriageDisputeList" :model='marriageDisputeList' :rules='rules' :label-width="120">
      <Row>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="姓名" prop="name">
          <Input type="text" v-model="marriageDisputeList.name" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="性别" prop="sex">
          <Select v-model="marriageDisputeList.sex" placeholder="">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="身份证号" prop="creditCard">
          <Input type="text" v-model="marriageDisputeList.creditCard" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="户口性质" prop="accountProperty">
          <Input type="text" v-model="marriageDisputeList.accountProperty" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="联系方式" prop="phone">
          <Input type="text" v-model="marriageDisputeList.phone" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="地址" prop="nowerAddr">
          <Input type="text" v-model="marriageDisputeList.nowerAddr" ></Input>
        </FormItem>
        </Col>
        <!-- <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否是会员" prop="pass">
          <Select v-model="marriageDisputeList.pass" placeholder="">
            <Option value="是">是</Option>
            <Option value="否">否</Option>
          </Select>
        </FormItem>
        </Col> -->
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="结婚时间" prop="marryTime">
          <DatePicker type="date" v-model="marriageDisputeList.marryTime"></DatePicker>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="哪方提出离婚" prop="divorcePerson">
          <Select v-model="marriageDisputeList.divorcePerson" placeholder="">
            <Option value="男方">男方</Option>
            <Option value="女方">女方</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="男方工作性质" prop="manWork">
          <Input type="text" v-model="marriageDisputeList.manWork" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="女方工作性质" prop="womanWork">
          <Input type="text" v-model="marriageDisputeList.womanWork" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="男方收入" prop="manIncome">
          <Input type="text" v-model="marriageDisputeList.manIncome" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="女方收入" prop="womanIncome">
          <Input type="text" v-model="marriageDisputeList.womanIncome" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="离婚原因" prop="divorceReason">
          <Input type="text" v-model="marriageDisputeList.divorceReason" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="男方婚前房贷" prop="manPreHouseLoans">
          <Select v-model="marriageDisputeList.manPreHouseLoans" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="男方婚前首付" prop="manPreHouseDownPayment">
          <Select v-model="marriageDisputeList.manPreHouseDownPayment" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="男方婚前还款情况" prop="manPreHousePay">
          <Input type="text" v-model="marriageDisputeList.manPreHousePay" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="女方婚前房贷" prop="womanPreHouseLoans">
          <Select v-model="marriageDisputeList.womanPreHouseLoans" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="女方婚前首付" prop="womanPreHouseDownPayment">
          <Select v-model="marriageDisputeList.womanPreHouseDownPayment" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="女方婚前还款情况" prop="womanPreHousePay">
          <Input type="text" v-model="marriageDisputeList.womanPreHousePay" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="婚后房贷" prop="preHouseLoans">
          <Select v-model="marriageDisputeList.preHouseLoans" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="婚后首付" prop="preHouseDownPayment">
          <Select v-model="marriageDisputeList.preHouseDownPayment" placeholder="">
            <Option value="男方">男方</Option>
            <Option value="女方">女方</Option>
            <Option value="其他">其他</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="婚后还款情况" prop="preHousePay">
          <Input type="text" v-model="marriageDisputeList.preHousePay" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="是否有车" prop="isCar">
          <Select v-model="marriageDisputeList.isCar" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="车贷情况" prop="carLoans">
          <Input type="text" v-model="marriageDisputeList.carLoans" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="男方婚前债务" prop="manPreLoansSum">
          <Input type="text" v-model="marriageDisputeList.manPreLoansSum" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="男方婚前资产抵押" prop="manPreLoansPledge">
          <Select v-model="marriageDisputeList.manPreLoansPledge" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="男方婚前抵押形式" prop="manPreLoansType">
          <Input type="text" v-model="marriageDisputeList.manPreLoansType" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="女方婚前债务" prop="womanPreLoansPledge">
          <Input type="text" v-model="marriageDisputeList.womanPreLoansPledge" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="女方婚前资产抵押" prop="womanPreLoansSum">
          <Select v-model="marriageDisputeList.womanPreLoansPledge" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="女方婚前抵押形式" prop="womanPreLoansType">
          <Input type="text" v-model="marriageDisputeList.womanPreLoansType" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="婚后债务" prop="preLoansSum">
          <Input type="text" v-model="marriageDisputeList.preLoansSum" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="婚后资产抵押" prop="preLoansPledge">
          <Select v-model="marriageDisputeList.preLoansPledge" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="婚后抵押形式" prop="preLoansType">
          <Input type="text" v-model="marriageDisputeList.preLoansType" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="孩子年龄" prop="childrenAge">
          <Input type="text" v-model="marriageDisputeList.childrenAge" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="抚养情况" prop="raisePerson">
          <Input type="text" v-model="marriageDisputeList.raisePerson" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="有无婚外情" prop="isAffair">
          <Select v-model="marriageDisputeList.isAffair" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="有无相关证据" prop="isConfirm">
          <Select v-model="marriageDisputeList.isConfirm" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="婚外情时间" prop="affairDate">
          <Input type="text" v-model="marriageDisputeList.affairDate" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="有无受到家庭暴力" prop="isViolence">
          <Select v-model="marriageDisputeList.isViolence" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="有无分居" prop="isSeparation">
          <Select v-model="marriageDisputeList.isSeparation" placeholder="">
            <Option value="有">有</Option>
            <Option value="无">无</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="分居时间" prop="sepDate">
          <Input type="text" v-model="marriageDisputeList.sepDate" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="房子诉求" prop="houseAppeal">
          <Input type="text" v-model="marriageDisputeList.houseAppeal" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="车辆诉求" prop="carAppeal">
          <Input type="text" v-model="marriageDisputeList.carAppeal" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="孩子诉求" prop="childrenAppeal">
          <Input type="text" v-model="marriageDisputeList.childrenAppeal" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="财产诉求" prop="propertyAppeal">
          <Input type="text" v-model="marriageDisputeList.propertyAppeal" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="债务诉求" prop="loansAppeal">
          <Input type="text" v-model="marriageDisputeList.loansAppeal" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="离婚形式" prop="divorceType">
          <Select v-model="marriageDisputeList.divorceType" placeholder="">
            <Option value="协议">协议</Option>
            <Option value="诉讼">诉讼</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="备注" prop="tips">
          <Input type="text" v-model="marriageDisputeList.tips" ></Input>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪类型" prop="type">
          <Select v-model="marriageDisputeList.type" placeholder="">
            <Option value="电话">电话</Option>
            <Option value="面谈">面谈</Option>
            <Option value="QQ/微信">QQ/微信</Option>
          </Select>
        </FormItem>
        </Col>
        <Col :xs='24' :sm='12' :md='8' :lg='6'>
        <FormItem label="跟踪内容" prop="content">
          <Input type="textarea" v-model="marriageDisputeList.content" ></Input>
        </FormItem>
        </Col>
      </Row>
      <div v-for="(item,index) in marriageDisputeList.follow" style="margin-bottom:10px">
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
import {addMarry} from '@/api/login'
  export default {
    props:['marriageDisputeList'],
    data() {
      return {
        cusPerson: {},
        personMarry: {},
        custrack: {},
        resultList: {},
        // marriageDisputeList: {
        //   name: '',
        //   sex: '',
        //   creditCard: '',
        //   phone: '',
        //   nowerAddr: '',
        //   accountProperty: '',
        //   marryTime: '',
        //   divorcePerson: '',
        //   manWork: '',
        //   womanWork: '',
        //   manIncome: '',
        //   womanIncome: '',
        //   divorceReason: '',
        //   manPreHouseLoans: '',
        //   manPreHouseDownPayment: '',
        //   manPreHousePay: '',
        //   womanPreHouseDownPayment: '',
        //   womanPreHousePay: '',
        //   preHouseLoans: '',
        //   preHouseDownPayment: '',
        //   preHousePay: '',
        //   isCar: '',
        //   carLoans: '',
        //   manPreLoansSum: '',
        //   manPreLoansPledge: '',
        //   manPreLoansType: '',
        //   womanPreLoansSum: '',
        //   womanPreLoansPledge: '',
        //   womanPreLoansType: '',
        //   preLoansSum: '',
        //   preLoansPledge: '',
        //   preLoansType: '',
        //   childrenAge: '',
        //   raisePerson: '',
        //   isAffair: '',
        //   isConfirm: '',
        //   affairDate: '',
        //   isViolence: '',
        //   isSeparation: '',
        //   sepDate: '',
        //   houseAppeal: '',
        //   carAppeal: '',
        //   childrenAppeal: '',
        //   propertyAppeal: '',
        //   loansAppeal: '',
        //   divorceType: '',
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
        this.$refs.marriageDisputeList.validate((valid) => {
          if (valid) {
          addMarry(this.resultList).then(res=>{
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
        })
      },
      handleInfo() {
        this.cusPerson.name = this.marriageDisputeList.name;
        this.cusPerson.sex = this.marriageDisputeList.sex;
        this.cusPerson.phone = this.marriageDisputeList.phone;
        this.cusPerson.creditCard=this.marriageDisputeList.creditCard
        this.cusPerson.accountProperty=this.marriageDisputeList.accountProperty
        this.cusPerson.nowerAddr = this.marriageDisputeList.nowerAddr;
        this.cusPerson.tips = this.marriageDisputeList.tips;
        this.personMarry=this.marriageDisputeList
        this.custrack.type = this.marriageDisputeList.type;
        this.custrack.content = this.marriageDisputeList.content;
        this.resultList.cusPerson = this.cusPerson;
        this.resultList.personMarry = this.personMarry;
        this.resultList.custrack = this.custrack;
        this.resultList.userId = this.$store.getters.userInfo.Id;
        console.log(this.resultList);
      }
    },
  }
</script>

<style scoped>

</style>