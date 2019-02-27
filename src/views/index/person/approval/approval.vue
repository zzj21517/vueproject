<template>
  <div>
    <Breadcrumb style="margin:20px">
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/personal">个人中心</BreadcrumbItem>
        <BreadcrumbItem>我的批准</BreadcrumbItem>
    </Breadcrumb>
    <div class="title">—我的审批—</div>
    <div class="handle">
      <div></div>
      <Input suffix="ios-search" placeholder="搜索一下" style="width: auto" />
    </div>
    <div class="tabel">
      <Table border :columns="columns" :data="approveData">
         <template slot-scope="{ row, index }" slot="status">
          <div v-if="row.status">同意</div>
          <div v-if="!row.status">未审批</div>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="success" size="small" style="margin-right: 5px">同意</Button>
          <Button type="error" size="small">拒绝</Button>
        </template>
      </Table>
    </div>
    <!-- <div class="pagination">
      <Page :total="40" size="small" show-elevator show-sizer />
    </div> -->
  </div>
</template>

<script>
  import {
    showApplication
  } from '@/api/login'
  import TableExpand from '@/components/tableExpand'
  export default {
    components: {
      TableExpand
    },
    created() {
      this.showAll()
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
      showAll() {
        showApplication(this.$store.getters.userInfo.Id,'approve').then(res => {
          console.log(res)
          if (res.data.success) {
            this.approveData = res.data.list
          } else {
            this.$Message.error('未获取到数据！')
          }
        }).catch(err => {
          console.log(err)
        })
      },
    },
    data() {
      return {
        screenWidth: document.body.clientWidth,
        timer: false,
        columns:[],
        approveData: [
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
    height: 40px;
    align-items: center;
    justify-content: space-between;
  }

  .pagination {
    text-align: center;
    margin-top: 10px;
  }

  @media screen and (max-width:640px) {
    .ivu-btn {
      height: 27px;
      padding:0px 7px;
    }
  }
</style>