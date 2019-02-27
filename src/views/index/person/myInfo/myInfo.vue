<template>
  <div>
    <div class="myInfo">
      <Breadcrumb style="margin:20px">
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/personal">个人中心</BreadcrumbItem>
        <BreadcrumbItem>我的信息</BreadcrumbItem>
    </Breadcrumb>
      <div class="title">—个人中心—</div>
      <div class="content">
        <div class="left">
          <img src="@/assets/images/person2.png" width="150px">
        </div>
        <div class="right">
          <!-- <table>
            <tr>
              <th>姓名：</th>
              <td>{{userInfo.userName}}</td>
            </tr>
            <tr>
              <th>工号：</th>
              <td>{{userInfo.departmentId}}</td>
            </tr>
            <tr>
              <th>部门：</th>
              <td>{{userInfo.role}}</td>
            </tr>
            <tr>
              <th>TEL：</th>
              <td>{{userInfo.phone}}</td>
            </tr>
            <tr>
              <th>职位：</th>
              <td>{{userInfo.role}}</td>
            </tr>
            <tr>
              <th>我的领导：</th>
              <td>{{userInfo.leaderNumber}}</td>
            </tr>
            <tr></tr>
          </table> -->
          <ul>
            <li>姓名：{{userInfo.userName}}</li>
            <li>工号：{{userInfo.departmentId}}</li>
            <li>部门：{{userInfo.role}}</li>
            <li>TEL:{{userInfo.phone}}</li>
            <li>职位：{{userInfo.role}}</li>
            <li>我的领导：{{userInfo.leaderNumber}}</li>
            <li>
              <Upload action="//jsonplaceholder.typicode.com/posts/">
                <Button icon="ios-cloud-upload-outline">上传文件资料</Button>
              </Upload>
            </li>
            <li>
              <Upload action="//jsonplaceholder.typicode.com/posts/">
                <Button icon="ios-cloud-upload-outline">上传身份证正反面</Button>
              </Upload>
            </li>

            <li>
              <Upload action="//jsonplaceholder.typicode.com/posts/">
                <Button icon="ios-cloud-upload-outline">上传银行卡正反面</Button>
              </Upload>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <div class="myTeam">
      <div class="title">—我的团队—</div>
      <div class="org-tree" style="margin:0 auto">
        <vue2-org-tree :data="orgTree" :horizontal="false" :collapsable="false" />
      </div>
      <div class="collapse">
        <Collapse v-model="value">
          <Panel name="1">
            {{team.title}}
            <div slot="content">
              <div class="member" v-for="(member,index) in team.members" :key="index">{{member.label}}--{{member.position}}</div>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: this.$store.getters.userInfo,
        // 折叠展开
        value: '1',
        // 折叠组织架构信息
        team: {
          title: 'IT信息部',
          members: [{
              label: '李阳',
              position: '研发主管',
            },
            {
              label: '付芳芳',
              position: 'UI设计师',
            },
            {
              label: '张海青',
              position: 'JAVA工程师',
            },
            {
              label: '张中杰',
              position: 'Web前端工程师',
            },
          ]
        },
        // 树形组织架构信息
        orgTree: {
          id: 0,
          label: '销售A组',
          children: [{
            id: 1,
            label: '销售组长',
            children: [{
              id: 2,
              label: '某某某某',
              children: [{
                id: 3,
                label: '销售组员',
                children: [{
                  id: 8,
                  label: '王大晓',
                }]
              }, {
                id: 4,
                label: '销售组员',
                children: [{
                  id: 9,
                  label: '李小力',
                }]
              }, {
                id: 5,
                label: '销售组员',
                children: [{
                  id: 10,
                  label: '欧阳明明',
                }]
              }, {
                id: 6,
                label: '销售组员',
                children: [{
                  id: 11,
                  label: '张小米',
                }]
              }, {
                id: 7,
                label: '销售组员',
                children: [{
                  id: 12,
                  label: '李明明',
                }]
              }]
            }]
          }, ]
        },
      }
    },
  }
</script>

<style scoped>
  .myInfo {
    /* border-bottom: 1px solid #e1e1e1; */
    margin-bottom: 20px;
  }

  .myInfo .content {
    display: flex;
    align-items: center;
  }

  .myInfo .content .left {
    width: 500px;
    text-align: center;
  }

  /* 屏幕尺寸小于640像素 */
  @media screen and (max-width:640px) {
    .myInfo .content .left {
      display: none;
    }

    .myInfo .content .right ul {
      justify-content: center;
    }

    .org-tree {
      display: none;
    }

    .collapse {
      margin: 20px 0;
    }

    .member {
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #eee;
    }

    .ivu-collapse-content>.ivu-collapse-content-box {
      padding: 0px;
    }
  }

  /* 屏幕尺寸大于640像素 */
  @media screen and (min-width:640px) {
    .collapse {
      display: none;
    }
  }

  .myInfo .content .right ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  .myInfo .content .right ul li:nth-child(-n+6) {
    width: 200px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #e1e1e1;
    margin: 10px;
    padding: 0 5px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }

  .myInfo .content .right ul li:nth-child(n+6) {
    width: 200px;
    height: 40px;
    margin: 10px;
  }

  .ivu-btn {
    width: 200px;
    height: 40px;
  }
</style>