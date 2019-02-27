<template>
  <div>
    <card>
      <div class="title">—学习中心—</div>
      <div class="content">
        <div class='left'>
          <router-link to="/study/companyRules">
            <img src="@/assets/images/study2.png" width="150px" />
          </router-link>
        </div>
        <div class="right">
          <router-link v-for="(nav,index) in navs" :key="index" :to="nav.route">
            {{nav.name}}
            <Icon type="ios-arrow-forward" />
          </router-link>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navs: [{
            route: '/study/companyRules',
            name: '公司介绍'
          }, {
            route: '/study/newIntroduce',
            name: '产品介绍'
          }, {
            route: '/study/salesGuidance',
            name: '销售指导',
          }, {
            route: '/study/trainingAdvice',
            name: '培训学习',
          },
          //  {
          //   route: '/study/activityAdvice',
          //   name: '活动通知',
          // },
          // {
          //   route: '/study/activityAdvice',
          //   name: '查看更多',
          // }
        ]
      }
    },
  }
</script>

<style scoped>
  .ivu-btn {
    margin-top: 10px;
    margin-left: 2em;
  }

  .more .ivu-btn {
    width: 112px;
  }

  .content {
    align-items: center;
    justify-content: space-around;
  }

  @media screen and (min-width:640px) {
    .right a {
      width: 150px
    }
  }

  @media screen and (max-width:640px) {
    .left img {
      width: 100px;
    }

    .right a {
      width: 100px
    }
  }

  .right a {
    display: block;
    color: #fff;
    background-color: #fc361d;
    border-radius: 20px;
    text-align: center;
    margin-top: 10px;
    font-size: 12px;
    padding: 2px;
  }
</style>