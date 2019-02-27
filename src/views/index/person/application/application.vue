<template>
  <div style="margin-bottom:30px;">
    <Breadcrumb style="margin:20px">
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/personal">个人中心</BreadcrumbItem>
        <BreadcrumbItem>我的申请</BreadcrumbItem>
    </Breadcrumb>
    <div class="title">—我的申请—</div>
    <div class="handle">
      <Button type="error" @click="addAppli" shape="circle">添加申请</Button>
      <Input suffix="ios-search" placeholder="搜索一下" style="width: auto" />
    </div>
    <div class="table">
      <Table border :columns="columns" :data="applyData">
        <template slot-scope="{ row, index }" slot="status">
          <div v-if="row.status">同意</div>
          <div v-if="!row.status">未审批</div>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="error" size="small">撤销</Button>
        </template>
      </Table>
    </div>
    <!-- <div class="pagination">
      <Page :total="40" size="small" show-elevator show-sizer />
    </div> -->
    <Modal v-model="modal" title="请完善申请内容">
      <Form ref="applicationForm" :model="applicationForm" :label-width="80">
        <FormItem label="申请类型" prop="msgType">
          <Select v-model="applicationForm.msgType" placeholder="">
            <Option value="采购">采购</Option>
            <Option value="用印申请">用印申请</Option>
            <Option value="平面设计">平面设计</Option>
            <Option value="培训申请">培训申请</Option>
          </Select>
        </FormItem>
        <FormItem label="申请事由" prop="msgBody">
          <Input type="text" v-model="applicationForm.msgBody"></Input>
        </FormItem>
        <FormItem label="申请备注" prop="msgTips">
          <Input type="text" v-model="applicationForm.msgTips" number></Input>
        </FormItem>
        <FormItem label="申请时间" prop="runTime">
          <DatePicker type="date" v-model="applicationForm.runTime"></DatePicker>
        </FormItem>
        <FormItem label="审批人" prop="approverList">
          <Select v-model="applicationForm.approverList" multiple>
            <Option v-for="item in approvers" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="抄送人" prop="copyList">
          <Select v-model="applicationForm.copyList" multiple>
            <Option v-for="item in copyers" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <div style="text-align:center">
            <Button type="error" shape='circle' @click="handleSubmit()" size='small' style="width:150px">提交</Button>
        </div>
      </Form>
    </Modal>
  </div>
</template>

<script>
  import {
    applicate,
    showApplication,
    getleadlist
  } from '@/api/login'
  import TableExpand from '@/components/tableExpand'
  import {changeTable} from '@/utils/auditing'
  export default {
    components: {
      TableExpand
    },
    created() {
      this.showAll()
      console.log(this.screenWidth)
      this.columns=changeTable(this.screenWidth,TableExpand)
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
        this.columns=changeTable(val,TableExpand)
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
    methods: {
      addAppli(){
        getleadlist(this.$store.getters.userInfo.Id).then(res=>{
          console.log(res)
          if(res.data.success){
            this.approvers=res.data.leadList
            this.copyers=res.data.sLevelList
            this.modal=true
          }else{
            this.$Message.error('为获取到审批人、抄送人信息')
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      showAll() {
        showApplication(this.$store.getters.userInfo.Id,'apply').then(res => {
          console.log(res)
          if (res.data.success) {
            this.applyData = res.data.list
          } else {
            this.$Message.error('暂无数据')
          }
        }).catch(err => {
          console.log(err)
        })
      },
      handleSubmit(name) {
        console.log(this.applicationForm)
        this.applicationForm.userId = this.$store.getters.userInfo.Id
        console.table(this.applicationForm)
        applicate(this.applicationForm).then(res => {
          console.log(res)
          if (res.data.success) {
            this.$Message.info('申请成功');
            this.modal=false
            this.showAll()
          } else {
            this.$Message.error('提交失败')
          }
        }).catch(err => {
          console.log(err)
        })
      },
      cancel() {
        this.$Message.info('取消');
      }
    },
    data() {
      return {
        screenWidth: document.body.clientWidth,
        timer: false,
        index: 1,
        modal: false,
        approvers: [
        ],
        copyers: [
        ],
        applicationForm: {
          msgType: '',
          msgBody: '',
          msgTips: '',
          approverList: [],
          runTime: '',
          copyList: [],
          // items2: [{
          //   value: null,
          //   index: 1,
          //   status: 1
          // }],
          // items: [{
          //   value: null,
          //   index: 1,
          //   status: 1
          // }]
        },
        columns: [],
        applyData: [
        //   {
        //   runTimes: '2018-12-25',
        //   msgType: '请假申请',
        //   msgBody: '有事情休年假',
        //   msgTips: '请假2天',
        //   approver: '主管',
        //   copy: '抄送人',
        //   status: false,
        //   approveStatus: '等待审批',
        // },{
        //   runTimes: '2018-12-25',
        //   msgType: '请假申请',
        //   msgBody: '有事情休年假',
        //   msgTips: '请假2天',
        //   approver: '主管',
        //   copy: '抄送人',
        //   status: false,
        //   approveStatus: '等待审批',
        // }
        ]
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
  
  tr:nth-child(odd){
    display: inline;
  }

</style>