<template>
  <div>
    <card>
      <div class="title">—个人中心—</div>
      <div class="content">
        <div class='left'>
          <router-link to="/personal">
            <img src="@/assets/images/person2.png" width="150px" />
          </router-link>
        </div>
        <div class="right">
          <div>
            <div class="info">
              <h4>我的个人信息</h4>
              <p>姓名：{{userInfo.userName}}</p>
              <p>部门：{{userInfo.role}}</p>
              <p>TEL：{{userInfo.phone}}</p>
              <p v-if="$store.getters.userInfo.Id===34"><Button type="warning" @click="seeProblem">查看问题反馈</Button></p>
            </div>
          </div>
        </div>
      </div>
    </card>
    <Modal v-model="modal" width='80'>
      <p slot="header" style="color:#f60;text-align:center">
        <span class="title">—问题反馈详情—</span>
      </p>
      <div class="model-content">
        <p v-for="(item,index) in problems" :key="index" style="font-size:16px;border:1px solid #e1e1e1;padding:10px">
          <span style="margin:0px 20px">反馈Id：{{item.id}}</span>
          <span>反馈内容：{{item.name}}</span>
        </p>
      </div>
    </Modal>
  </div>
</template>

<script>
  import {
    getQuestion
  } from '@/api/login'
  export default {
    data() {
      return {
        imgWidth: '80px',
        userInfo: this.$store.getters.userInfo,
        modal: false,
        problems: [],
      }
    },
    methods: {
      seeProblem() {
        this.modal = true
        getQuestion().then(res => {
          console.log(res)
          if (res.data.success) {
            this.problems = res.data.msg
            this.$Message.success(res.data.display)
          }
        }).catch(err => {
          console.log(err)
          this.$Message.error(res.data.display)
        })
      }
    },
  }
</script>

<style scoped>
  .content {
    align-items: center;
    justify-content: space-around;
  }


  @media screen and (min-width:640px) {
    .right .info p {
      text-indent: 2em;
      margin-top: 20px;
    }
  }

  @media screen and (max-width:640px) {
    .left img {
      width: 100px;
    }

    .right .info h4 {
      display: none
    }

    .right .info p {
      margin-top: 10px;
    }
  }
</style>