<template>
  <div class="content">
    <div class='left'>
      <router-link to="/custom">
        <img src="@/assets/images/custom2.png"/>
      </router-link>
    </div>
    <div class="right">
      <div>
        <div>请选择客户类型（单选）</div>
        <div style="width:100%;">
          <RadioGroup v-model="personType" vertical>
            <Radio label="personHarm">道交人伤客户
            </Radio>
            <Radio label="personDrive">御驾无忧客户
            </Radio>
            <Radio label="s2.3">法律服务客户
            </Radio>
            <Radio label="personExam">体检通客户
            </Radio>
            <Radio label="personInsure">保险服务客户
            </Radio>
          </RadioGroup>
        </div>
        <div style="margin-left:1em;margin-top:10px">
          <Button type="error" shape="circle" size="small" style="width:90px" @click="nextStep2()">下一步</Button>
        </div>
      </div>
    </div>

    <Modal v-model="modal" width='80'>
      <p slot="header" style="color:#f60;text-align:center">
        <span class="title">—添加客户—</span>
      </p>
      <div class="model-content">
        <div class="model-content" v-if="step==='personHarm'">
          <road-injury :roadInjuryList='roadInjuryList'></road-injury>
        </div>
        <div class="model-content" v-if="step==='personDrive'">
          <no-worries :noWorriesList='noWorriesList'></no-worries>
        </div>
        <div class="model-content" v-if="step==='s2.3'">
          <div class="model-left">
            <img src="@/assets/images/custom2.png" alt="">
          </div>
          <div class="model-right">
            <div>请选择客户类型（单选）</div>
            <RadioGroup v-model="lawService" vertical style="margin:10px 2em">
              <Radio label="personMarry">
                <span>婚姻纠纷</span>
              </Radio>
              <Radio label="personEconomic">
                <span>经济纠纷（贷款）</span>
              </Radio>
              <Radio label="personLoans">
                <span>借贷纠纷</span>
              </Radio>
              <Radio label="personLabour">
                <span>劳动纠纷</span>
              </Radio>
              <Radio label="personHouse">
                <span>房屋买卖纠纷</span>
              </Radio>
              <Radio label="personProperty">
                <span>物业纠纷</span>
              </Radio>
              <Radio label="personInherit">
                <span>财产继承</span>
              </Radio>
            </RadioGroup>
            <div style="text-align:center">
              <Button class="nextstep" type="error" shape='circle' @click="nextStep4()" size='small'>下一步</Button>
            </div>
          </div>
        </div>
        <div class="model-content" v-if="step==='personMarry'">
          <marriage-dispute :marriageDisputeList='marriageDisputeList'></marriage-dispute>
        </div>
        <div class="model-content" v-if="step==='personEconomic'">
          <economic-dispute :economicDisputeList='economicDisputeList'></economic-dispute>
        </div>
        <div class="model-content" v-if="step==='personLoans'">
          <lend-dispute :lendDisputeList='lendDisputeList'></lend-dispute>
        </div>
        <div class="model-content" v-if="step==='personLabour'">
          <labor-dispute :laborDisputeList='laborDisputeList'></labor-dispute>
        </div>
        <div class="model-content" v-if="step==='personHouse'">
          <housing-dispute :housingDisputeList='housingDisputeList'></housing-dispute>
        </div>
        <div class="model-content" v-if="step==='personProperty'">
          <property-dispute :propertyDisputeList='propertyDisputeList'></property-dispute>
        </div>
        <div class="model-content" v-if="step==='personInherit'">
          <property-accede :propertyAccedeList='propertyAccedeList'></property-accede>
        </div>
        <div class="model-content" v-if="step==='personExam'">
          <physical-examination :physicalExaminationList='physicalExaminationList'></physical-examination>
        </div>
        <div class="model-content" v-if="step==='personInsure'">
          <insurance-service :insuranceServiceList='insuranceServiceList'></insurance-service>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
  import RoadInjury from '@/views/index/custom/customCenter/personCustom/roadInjury.vue'
  import NoWorries from '@/views/index/custom/customCenter/personCustom/noWorries.vue'
  import MarriageDispute from '@/views/index/custom/customCenter/personCustom/marriageDispute.vue'
  import EconomicDispute from '@/views/index/custom/customCenter/personCustom/economicDispute.vue'
  import LendDispute from '@/views/index/custom/customCenter/personCustom/lendDispute.vue'
  import LaborDispute from '@/views/index/custom/customCenter/personCustom/laborDispute.vue'
  import HousingDispute from '@/views/index/custom/customCenter/personCustom/housingDispute.vue'
  import PropertyDispute from '@/views/index/custom/customCenter/personCustom/propertyDispute.vue'
  import PropertyAccede from '@/views/index/custom/customCenter/personCustom/propertyAccede.vue'
  import PhysicalExamination from '@/views/index/custom/customCenter/personCustom/physicalExamination.vue'
  import InsuranceService from '@/views/index/custom/customCenter/personCustom/insuranceService.vue'
  import BusinessCustom from '@/views/index/custom/customCenter/businessCustom/businessCustom.vue'
  export default {
    components: {
      RoadInjury,
      NoWorries,
      MarriageDispute,
      EconomicDispute,
      LendDispute,
      LaborDispute,
      HousingDispute,
      PropertyDispute,
      PropertyAccede,
      PhysicalExamination,
      InsuranceService,
      BusinessCustom
    },
    data() {
      return {
        modal: false,
        step: '',
        personType: '',
        businessType: '',
        lawService: '',
         roadInjuryList: {
          name: '',
          sex: '',
          phone:'',
          creditCard: '',
          haveResident: '',
          residentCreate: '',
          mail: '',
          houseAddr: '',
          nowerAddr: '',
          type: '',
          content: '',
          tips: '',
        },
        noWorriesList: {
          name: "",
          sex: "",
          phone: "",
          creditCard: "",
          nowerAddr: "",
          type: "",
          content: "",
          licensePlates: "",
          endTime: "",
          tips: ""
        },
        marriageDisputeList: {
          name: '',
          sex: '',
          creditCard: '',
          phone: '',
          nowerAddr: '',
          accountProperty: '',
          marryTime: '',
          divorcePerson: '',
          manWork: '',
          womanWork: '',
          manIncome: '',
          womanIncome: '',
          divorceReason: '',
          manPreHouseLoans: '',
          manPreHouseDownPayment: '',
          manPreHousePay: '',
          womanPreHouseDownPayment: '',
          womanPreHousePay: '',
          preHouseLoans: '',
          preHouseDownPayment: '',
          preHousePay: '',
          isCar: '',
          carLoans: '',
          manPreLoansSum: '',
          manPreLoansPledge: '',
          manPreLoansType: '',
          womanPreLoansSum: '',
          womanPreLoansPledge: '',
          womanPreLoansType: '',
          preLoansSum: '',
          preLoansPledge: '',
          preLoansType: '',
          childrenAge: '',
          raisePerson: '',
          isAffair: '',
          isConfirm: '',
          affairDate: '',
          isViolence: '',
          isSeparation: '',
          sepDate: '',
          houseAppeal: '',
          carAppeal: '',
          childrenAppeal: '',
          propertyAppeal: '',
          loansAppeal: '',
          divorceType: '',
          tips: '',
          type: '',
          content: '',
        },
        economicDisputeList: {
          name: '',
          sex: '',
          creditCard: '',
          accountProperty: '',
          phone: '',
          nowerAddr: '',
          descri: '',
          refuseReason: '',
          appeal: '',
          contractDate: '',
          isSubscription: '',
          subscriptionDate: '',
          loansPayDate: '',
          payType: '',
          isProve: '',
          isTips: '',
          shipmentsDate: '',
          isSignFor: '',
          isQuality: '',
          payDate: '',
          payDays: '',
          supDays: '',
          isAffirm: '',
          isRemind: '',
          resolveType: '',
          paytimeBreak: '',
          qualityBreak: '',
          deliveryBreak: '',
          tips: '',
          type: '',
          content: '',
        },
        lendDisputeList: {
          name: '',
          sex: '',
          creditCard: '',
          accountProperty: '',
          phone: '',
          nowerAddr: '',
          problems: '',
          loansRelation: '',
          loansSum: '',
          repaymentDate: '',
          loansInterest: '',
          fundSource: '',
          isLoanAgreement: '',
          repaymentType: '',
          isReceipt: '',
          isState: '',
          isFixedAssets: '',
          isLoansWay: '',
          isBondsman: '',
          isGuarantee: '',
          recoverDebtDate: '',
          reply: '',
          evidence: '',
          tips: '',
          appeal: '',
          type: '',
          content: '',
        },
        laborDisputeList: {
          name: '',
          sex: '',
          creditCard: '',
          accountProperty: '',
          phone: '',
          nowerAddr: '',
          comName: '',
          comIndustry: '',
          comAddr: '',
          workProperty: '',
          workYears: '',
          salary: '',
          isLaborContract: '',
          endTime: '',
          otherConfirm: '',
          socialDays: '',
          isWorkRecord: '',
          lastPayTime: '',
          payType: '',
          paySum: '',
          isHandbook: '',
          breakRules: '',
          resignReason: '',
          kickOutReason: '',
          isKickOutBook: '',
          tips: '',
          appeal: '',
          type: '',
          content: '',
        },
        housingDisputeList: {
          name: '',
          sex: '',
          creditCard: '',
          accountProperty: '',
          phone: '',
          nowerAddr: '',
          descri: '',
          houseResource: '',
          disputePerson: '',
          houseAddr: '',
          houseName: '',
          signDate: '',
          paySubscriptionTime: '',
          paySum: '',
          downPaymentTime: '',
          downPaymentSum: '',
          loansSum: '',
          leadTime: '',
          realLeadTime: '',
          houseTime: '',
          houseArea: '',
          realHouseArea: '',
          loansTime: '',
          lendingTime: '',
          refuseReason: '',
          isPayConfirm: '',
          tipsWays: '',
          isQuality: '',
          appeal: '',
          tips: '',
          type: '',
          content: '',
        },
        propertyDisputeList: {
          name: '',
          sex: '',
          creditCard: '',
          accountProperty: '',
          phone: '',
          nowerAddr: '',
          descri: '',
          appeal: '',
          tips: '',
          type: '',
          content: '',
        },
        propertyAccedeList: {
          name: '',
          sex: '',
          creditCard: '',
          accountProperty: '',
          phone: '',
          nowerAddr: '',
          testamentNum: '',
          testamentTime: '',
          publicProperty: '',
          privateProperty: '',
          testament: '',
          parent: '',
          children: '',
          isMate: '',
          inhertRelation: '',
          teatamentText: '',
          tips: '',
          type: '',
          content: '',
        },
        physicalExaminationList: {
          name: '',
          sex: '',
          phone: '',
          creditCard: '',
          nowerAddr: '',
          type: '',
          content: '',
        },
        insuranceServiceList: {
          name: '',
          sex: '',
          phone: '',
          creditCard: '',
          licensePlates: '',
          endTime: '',
          vehicleBrand: '',
          vehicleModel: '',
          commercialAmount: '',
          perssion: '',
          nowerAddr: '',
          type: '',
          content: '',
          tips: '',
        },
      }
    },
    methods: {
      nextStep2() {
        if(this.personType){
          this.step = this.personType
        this.modal = true
        }else{
          this.$Message.error('请选择个人客户！')
        }
      },
      nextStep3() {
        if(this.businessType){
          this.step = this.businessType
        }else{
          this.$Message.error('请选择企业客户！')
        }
      },
      nextStep4() {
        if(this.lawService){
          this.step = this.lawService
        }else{
          this.$Message.error('请选择法律服务客户！')
        }
      }
    },
  }
</script>

<style scoped>
  .ivu-radio-group {
    margin-left: 1em;
  }

  .content {
    align-items: center;
    justify-content: space-around;
  }

  @media screen and (min-width:640px) {
    .right a {
      width: 150px
    }
    .nextstep{
      width:150px;
    }
  }

  @media screen and (max-width:640px) {
    .left img {
      width: 100px;
    }

    .right a {
      width: 100px
    }
    .nextstep{
      width:100px;
    }
    .model-left img{
      display: none
    }
  }

  .model-content {
    display: flex;
    align-items: center;
    justify-content: center
  }

  .model-content .model-right {
    margin-left: 20px;
  }

  .model-content .model-right .ivu-radio-group {
    margin: 30px 0;
  }
</style>