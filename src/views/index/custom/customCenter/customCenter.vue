<template>
  <div>
    <Breadcrumb style="margin:20px">
      <BreadcrumbItem to="/index">首页</BreadcrumbItem>
      <BreadcrumbItem>客户中心</BreadcrumbItem>
    </Breadcrumb>
    <div class="title">—客户中心—</div>
    <div class="handle">
      <Button type="error" @click="addCustom" shape="circle">添加客户</Button>
      <Input suffix="ios-search" placeholder="搜索一下" style="width: auto" />
    </div>
    <Tabs @on-click='toggleTab' value='person'>
      <TabPane label="个人客户" name='person'>
        <div class="table">
          <Table border :columns="columns" :data="customList">
            <template slot-scope="{ row, index }" slot="type">
              <div class="custom-type" v-if="['personEconomic','personMarry','personInherit','personLabour','personHouse','personProperty','personLoans'].indexOf(row.type)>0"></div>
              <div class="custom-type" style="background-color:#f2a52d" v-if="row.type==='personHarm'"></div>
              <div class="custom-type" style="background-color:#fc2313" v-if="row.type==='personDrive'"></div>
              <div class="custom-type" style="background-color:#04970b" v-if="row.type==='personExam'"></div>
              <div class="custom-type" style="background-color:#ee1284" v-if="row.type==='personInsure'"></div>
            </template>
            <template slot-scope="{ row, index }" slot="action">
              <Button type="warning" size="small" @click="seeMore(row)">查看跟踪</Button>
              <!-- <Button type="error" size="small">跟踪</Button> -->
            </template>
          </Table>
        </div>
      </TabPane>
      <TabPane label="企业客户" name='company'>
        <div class="table">
          <Table border :columns="columns2" :data="companyList">
            <template slot-scope="{ row, index }" slot="action">
              <Button type="warning" size="small" @click="seeMoreBusiness(row)">查看跟踪</Button>
            </template>
          </Table>
        </div>
      </TabPane>
    </Tabs>
    <!-- <div class="pagination">
      <Page :total="40" size="small" show-elevator show-sizer />
    </div> -->
    <Modal v-model="modal" width='80' @on-cancel="cancel">
      <p slot="header" style="color:#f60;text-align:center">
        <span class="title">—添加客户—</span>
      </p>
      <div class="model-content" v-if="step==='s1'||step==='s2'">
        <div class="model-left">
          <img src="@/assets/images/custom2.png" alt="">
        </div>
        <div class="model-right" v-if="step==='s1'">
          <div>请选择客户类型（单选）</div>
          <RadioGroup v-model="type" style="margin:40px 2em">
            <Radio label="s2">
              <span>个人客户</span>
            </Radio>
            <Radio label="s3">
              <span>企业客户</span>
            </Radio>
          </RadioGroup>
          <div style="text-align:center">
            <Button class="nextstep" type="error" shape='circle' @click="nextStep1()" size='small'>下一步</Button>
          </div>
        </div>
        <div class="model-right" v-if="step==='s2'">
          <div>请选择个人客户类型（单选）</div>
          <RadioGroup v-model="personType" vertical style="margin:10px 2em">
            <Radio label="personHarm">
              <span>道交人伤客户</span>
            </Radio>
            <Radio label="personDrive">
              <span>御驾无忧客户</span>
            </Radio>
            <Radio label="s2.3">
              <span>法律服务客户</span>
            </Radio>
            <Radio label="personExam">
              <span>体检通客户</span>
            </Radio>
            <Radio label="personInsure">
              <span>保险服务客户</span>
            </Radio>
          </RadioGroup>
          <div style="text-align:center">
            <Button class="nextstep" type="error" shape='circle' @click="nextStep2()" size='small'>下一步</Button>
          </div>
        </div>
      </div>
      <div class="model-content" v-if="step==='s3'">
        <div>
          <div>请选择企业客户类型（可多选）</div>
          <CheckboxGroup v-model="businessType">
            <Checkbox label="道交人伤客户">道交人伤客户</Checkbox>
            <Checkbox label="御驾无忧客户">御驾无忧客户</Checkbox>
            <Checkbox label="企业法顾客户">企业法顾客户</Checkbox>
            <Checkbox label="体检通客户">体检通客户</Checkbox>
            <Checkbox label="保险服务客户">保险服务客户</Checkbox>
            <Checkbox label="法律诉讼客户">法律诉讼客户</Checkbox>
            <Checkbox label="财税咨询服务">财税咨询服务</Checkbox>
            <Checkbox label="财税账务服务">财税账务服务</Checkbox>
            <Checkbox label="人事管理方案">人事管理方案</Checkbox>
            <Checkbox label="财税专项审计">财税专项审计</Checkbox>
            <Checkbox label="税收整体筹划">税收整体筹划</Checkbox>
            <Checkbox label="单项税收规划">单项税收规划</Checkbox>
            <Checkbox label="财务专项方案">财务专项方案</Checkbox>
            <Checkbox label="财税法人整体方案">财税法人整体方案</Checkbox>
            <Checkbox label="财务专项方案规划辅导">财务专项方案规划辅导</Checkbox>
            <Checkbox label="其他类型企业客户">其他类型企业客户</Checkbox>
          </CheckboxGroup>
          <div style="text-align:center;margin-top:10px">
            <Button class="nextstep" type="error" shape='circle' @click="nextStep3()" size='small'>下一步</Button>
          </div>
        </div>
      </div>
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
      <!-- 个人客户 -->
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
      <!-- 企业客户 -->
      <div class="model-content" v-if="step==='s3.1'">
        <business-custom :businessType='businessType' :businessCustomList='businessCustomList'></business-custom>
      </div>
    </Modal>
    <div class="explain">
      <h4>图例说明</h4>
      <div class="explain-item">
        <div class="person color">
          <div>个人客户</div>
          <ul>
            <li>道交人伤客户</li>
            <li>御驾无忧客户</li>
            <li>法律服务客户</li>
            <li>体检通客户</li>
            <li>保险服务客户</li>
            <li>其他类型客户</li>
          </ul>
        </div>
        <div class="business color">
          <div>企业客服</div>
          <ul>
            <li>企业道交人伤客户</li>
            <li>企业御驾无忧客户</li>
            <li>企业法顾客户</li>
            <li>企业体检通客户</li>
            <li>企业保险服务客户</li>
            <li>企业法律诉讼客户</li>
          </ul>
        </div>
        <div class="tax">
          <div class="space"></div>
          <ul>
            <li>财税咨询服务</li>
            <li>财税账务服务</li>
            <li>人事管理方案</li>
            <li>财税法人整体方案</li>
            <li>财税专项审计</li>
            <li>税收整体筹划</li>
          </ul>
        </div>
        <div class="tax tax-last">
          <div class="space"></div>
          <ul>
            <li>单项税收规划</li>
            <li>财务专项方案</li>
            <li>财务专项方案规划辅导</li>
            <li>其他类型企业客户</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    applicate,
    showApplication,
    getAllCustoms,
    seeCustomInfo,
    getBusinessCustoms
  } from '@/api/login'
  import ExpandInfo from '@/components/expandInfo'
  import BusinessExpand from '@/components/businessExpand'
  import {
    changeExpand,
    changeExpand2
  } from '@/utils/auditing'
  import RoadInjury from './personCustom/roadInjury.vue'
  import NoWorries from './personCustom/noWorries.vue'
  import MarriageDispute from './personCustom/marriageDispute.vue'
  import EconomicDispute from './personCustom/economicDispute.vue'
  import LendDispute from './personCustom/lendDispute.vue'
  import LaborDispute from './personCustom/laborDispute.vue'
  import HousingDispute from './personCustom/housingDispute.vue'
  import PropertyDispute from './personCustom/propertyDispute.vue'
  import PropertyAccede from './personCustom/propertyAccede.vue'
  import PhysicalExamination from './personCustom/physicalExamination.vue'
  import InsuranceService from './personCustom/insuranceService.vue'
  import BusinessCustom from './businessCustom/businessCustom.vue'
  export default {
    components: {
      ExpandInfo,
      BusinessExpand,
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
    created() {
      this.$store.dispatch('ShowAllCustoms')
      this.columns = changeExpand(this.screenWidth, ExpandInfo)
      console.log(this.columns)
      // this.showAllCustoms()
      this.$store.commit('TOGGLE_MODAL', false)
    },
    mounted() {
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    },
    watch: {
      screenWidth(val) {
        if (this.activeTab === 'person') {
          this.columns = changeExpand(this.screenWidth, ExpandInfo)
        } else {
          this.columns2 = changeExpand2(this.screenWidth, BusinessExpand)
        }
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if (!this.timer) {
          // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
          this.screenWidth = val
          this.timer = true
          let that = this
          setTimeout(function () {
            // 打印screenWidth变化的值
            console.log(that.screenWidth)
            that.timer = false
          }, 400)
        }
      }
    },
    computed: {
      customList() {
        return this.$store.getters.customList
      },
      companyList() {
        return this.$store.getters.companyList
      },
      modal: {
        get: function () {
          return this.$store.getters.modal
        },
        set: function (newValue) {
          console.log(newValue)
        }
      }
    },
    methods: {
      // 切换标签
      toggleTab(name) {
        this.activeTab = name
        if (name === 'company') {
           this.$store.commit('TOGGLE_CUSTOMLIST', [])
          this.columns2 = changeExpand2(this.screenWidth, BusinessExpand)
          console.log(this.columns2)
          this.showBusinessCustoms()
        } else {
          this.columns = changeExpand(this.screenWidth, ExpandInfo)
          this.showAllCustoms()
        }
      },
      cancel() {
        this.$store.commit('TOGGLE_MODAL', false)
      },
      // 添加客户
      addCustom() {
        this.$store.commit('TOGGLE_MODAL', true)
        this.step = 's1'
      },
      nextStep1() {
        if (this.type) {
          this.step = this.type
        } else {
          this.$Message.error('请选择客户类型！')
        }
      },
      nextStep2() {
        if (this.personType) {
          this.step = this.personType
          if (this.step === 'personHarm') {
            this.roadInjuryList = {
              name: '',
              sex: '',
              phone: '',
              creditCard: '',
              haveResident: '',
              residentCreate: '',
              mail: '',
              houseAddr: '',
              nowerAddr: '',
              type: '',
              content: '',
              tips: '',
            }
          } else if (this.step === 'personDrive') {
            this.noWorriesList = {
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
            }
          } else if (this.step === 'personExam') {
            this.physicalExaminationList = {
              name: '',
              sex: '',
              phone: '',
              creditCard: '',
              nowerAddr: '',
              type: '',
              content: '',
            }
          } else if (this.step === 'personInsure') {
            this.insuranceServiceList = {
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
            }
          }
        } else {
          this.$Message.error('请选择个人客户类型！')
        }
      },
      nextStep3() {
        if (this.businessType.length) {
          this.step = 's3.1'
          this.businessCustomList = {
            name: '',
            registAddr: '',
            officeAddr: '',
            relationPerson: '',
            relationType: '',
            websit: '',
            shareholder: '',
            executer: '',
            struct: '',
            relationCompany: '',
            branch: '',
            product: '',
            specific: '',
            honor: '',
            isRisk: '',
            comScale: '',
            personnel: '',
            createTime: '',
            scribe: '',
            controllType: '',
            content: '',
            type: '',
            tips: '',
            usic: '',
            nodeArray: [],
          }
        } else {
          this.$Message.error('请至少选择一个企业客户！')
        }
      },
      nextStep4() {
        if (this.lawService) {
          this.step = this.lawService
          if (this.step === 'personMarry') {
            this.marriageDisputeList = {
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
            }
          } else if (this.step === 'personEconomic') {
            this.economicDisputeList = {
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
            }
          } else if (this.step === 'personLoans') {
            this.lendDisputeList = {
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
            }
          } else if (this.step === 'personLabour') {
            this.laborDisputeList = {
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
            }
          } else if (this.step === 'personHouse') {
            this.housingDisputeList = {
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
            }
          } else if (this.step === 'personProperty') {
            this.propertyDisputeList = {
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
            }
          } else if (this.step === 'personInherit') {
            this.propertyAccedeList = {
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
            }
          }

        } else {
          this.$Message.error('请选择法律服务客户！')
        }
      },
      handleSubmit(name) {
        console.log(this.applicationForm)
        // this.applicationForm.copyList = this.applicationForm.items
        // this.applicationForm.approverList = this.applicationForm.items2
        this.applicationForm.userName = this.$store.getters.userInfo.userName
        console.table(this.applicationForm)
        applicate(this.applicationForm).then(res => {
          console.log(res)
          if (res.data.success) {
            this.$Message.info('申请成功');
          } else {
            this.$Message.error('提交失败')
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 显示全部客户
      showAllCustoms() {
        getAllCustoms(this.$store.getters.userInfo.Id).then(res => {
          console.log(res)
          if (res.data.success) {
            // this.customList = res.data.msg
            this.$store.commit('TOGGLE_CUSTOMLIST', res.data.msg)
            this.$Message.success(res.data.display)
          } else {
            this.$Message.error(res.data.display)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 显示企业客户
      showBusinessCustoms() {
        getBusinessCustoms(this.$store.getters.userInfo.Id).then(res => {
          console.log(res)
          if (res.data.success) {
            this.$store.commit('TOGGLE_COMPANYLIST', res.data.msg)
            this.$Message.success(res.data.display)
          } else {
            this.$Message.error(res.data.display)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 查看更多公司
      seeMoreBusiness(row) {
        seeCustomInfo(row.id, row.type).then(res => {
          console.log(res)
          if (res.data.success) {
            this.$store.commit('TOGGLE_MODAL', true)
            this.step = 's3.1'
            this.businessCustomList = res.data.msg.case
            this.businessCustomList.follow = res.data.msg.track
            this.businessType=this.businessCustomList.node.split(',')
            this.$Message.success(res.data.display)
          } else {
            this.$Message.error(res.data.display)
          }
        }).catch(err => {
          console.log(err)
        })
      },
      // 查看更多
      seeMore(row) {
        seeCustomInfo(row.id, row.type).then(res => {
          if (res.data.success) {
            console.log(res)
            let caseInfo = res.data.msg.case
            let personInfo = res.data.msg.person
            let trackInfo = res.data.msg.track
            let singleInfo = {}
            for (let ele in caseInfo) {
              singleInfo[ele] = caseInfo[ele]
            }
            for (let ele in personInfo) {
              singleInfo[ele] = personInfo[ele]
            }
            singleInfo.follow = trackInfo
            console.log(singleInfo)
            this.step = singleInfo.type
            if (singleInfo.type === 'personHarm') {
              this.roadInjuryList = singleInfo
            } else if (singleInfo.type === 'personDrive') {
              this.noWorriesList = singleInfo
            } else if (singleInfo.type === 'personMarry') {
              this.marriageDisputeList = singleInfo
            } else if (singleInfo.type === 'personEconomic') {
              this.economicDisputeList = singleInfo
            } else if (singleInfo.type === 'personLoans') {
              this.lendDisputeList = singleInfo
            } else if (singleInfo.type === 'personLabour') {
              this.laborDisputeList = singleInfo
            } else if (singleInfo.type === 'personHouse') {
              this.housingDisputeList = singleInfo
            } else if (singleInfo.type === 'personProperty') {
              this.propertyDisputeList = singleInfo
            } else if (singleInfo.type === 'personInherit') {
              this.propertyAccedeList = singleInfo
            } else if (singleInfo.type === 'personExam') {
              this.physicalExaminationList = singleInfo
            } else {
              this.insuranceServiceList = singleInfo
            }
            // this.modal = true
            this.$store.commit('TOGGLE_MODAL', true)
          } else {
            console.log(res)
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    data() {
      return {
        activeTab: 'person',
        roadInjuryList: {
          name: '',
          sex: '',
          phone: '',
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
        businessCustomList: {
          name: '',
          registAddr: '',
          officeAddr: '',
          relationPerson: '',
          relationType: '',
          websit: '',
          shareholder: '',
          executer: '',
          struct: '',
          relationCompany: '',
          branch: '',
          product: '',
          specific: '',
          honor: '',
          isRisk: '',
          comScale: '',
          personnel: '',
          createTime: '',
          scribe: '',
          controllType: '',
          content: '',
          type: '',
          tips: '',
          usic: '',
          nodeArray: [],
        },
        lawService: '',
        type: '',
        personType: '',
        businessType: [],
        screenWidth: document.body.clientWidth,
        timer: false,
        index: 1,
        // 步骤
        step: 's1',
        // modal:this.$store.getters.modal,
        columns: [],
        columns2: [],
        // customList: [
        //   {
        //   name: '张敏',
        //   sex: '男',
        //   age: '60',
        //   phone: '123123413',
        //   creditCard: '1234134543',
        //   type: 1,
        //   followingType: '电话、面谈',
        //   followingStatus: '80%',
        // }, {
        //   name: '张敏',
        //   sex: '男',
        //   age: '60',
        //   phone: '18860912786',
        //   creditCard: '320724199302161235',
        //   type: 1,
        //   followingType: '电话、面谈',
        //   followingStatus: '80%',
        // }, {
        //   name: '张敏',
        //   sex: '男',
        //   age: '60',
        //   phone: '123123413',
        //   creditCard: '1234134543',
        //   type: 1,
        //   followingType: '电话、面谈',
        //   followingStatus: '80%',
        // }
        // ]
      }
    },
  }
</script>

<style scoped>
  .handle {
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
  }

  .pagination {
    text-align: center;
    margin-top: 10px;
  }

  tr:nth-child(odd) {
    display: inline;
  }

  .explain {
    margin-top: 20px;
  }

  @media screen and (min-width: 1000px) {
    .explain .explain-item {
      display: flex;
      margin-top: 10px;
    }

    .space {
      height: 21px;
    }
  }

  @media screen and(max-width:1000px) {
    .explain .explain-item {
      margin-top: 10px;
    }
  }

  .explain .explain-item ul li {
    margin-top: 10px;
  }

  .explain .explain-item .person {
    margin-right: 20px;
  }

  ul {
    list-style-type: none;
  }

  li::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 5px;
    margin-left: 2em;
  }

  .person ul>li::before {
    border-radius: 50%
  }

  .color ul>li:first-child {
    color: #f2a52d;
  }

  .color ul>li:first-child::before {
    background-color: #f2a52d;
  }

  .color ul>li:nth-child(2) {
    color: #fc2e13
  }

  .color ul>li:nth-child(2)::before {
    background-color: #fc2e13;
  }

  .color ul>li:nth-child(3) {
    color: #1376fc;
  }

  .color ul>li:nth-child(3)::before {
    background-color: #1376fc;
  }

  .color ul>li:nth-child(4) {
    color: #04970b;
  }

  .color ul>li:nth-child(4)::before {
    background-color: #04970b;
  }

  .color ul>li:nth-child(5) {
    color: #ee1284;
  }

  .color ul>li:nth-child(5)::before {
    background-color: #ee1284;
  }

  .person ul>li:nth-child(6) {
    color: #484848;
  }

  .person ul>li:nth-child(6)::before {
    background-color: #484848;
  }

  .business ul>li:nth-child(6) {
    color: #8a2202;
  }

  .business ul>li:nth-child(6)::before {
    background-color: #8a2202;
  }

  .tax ul>li {
    color: #013da1;
  }

  .tax-last ul>li:last-child {
    color: #484848;
  }

  .tax ul>li::before {
    background-color: #013da1;
  }

  .tax-last ul>li:last-child::before {
    background-color: #484848;
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

  @media screen and (min-width:640px) {
    .ivu-checkbox-group .ivu-checkbox-group-item {
      width: 160px;
    }

    .ivu-checkbox-wrapper {
      margin-top: 10px;
    }

    .nextstep {
      width: 150px;
    }
  }

  @media screen and (max-width:640px) {
    img {
      display: none
    }

    .nextstep {
      width: 100px;
    }
  }

  .custom-type {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #1376fc;
    margin: 0 auto;
  }
</style>