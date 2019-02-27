<template>
  <div>
    <Breadcrumb style="margin:20px">
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/personal">个人中心</BreadcrumbItem>
        <BreadcrumbItem>组织架构</BreadcrumbItem>
    </Breadcrumb>
    <div class="title">—组织架构—</div>
    <div class="org-tree" style="margin:0 auto">
      <vue2-org-tree :data="orgTree" :horizontal="true" :collapsable="false" />
    </div>
    <div class="collapse">
          <department v-for="(item,index) in xsOrgTree" :key="index" :item='item'></department>
    </div>
  </div>
</template>

<script>
import  Department from './department.vue'
  export default {
    components:{
      Department,
    },
    data() {
      return {
        xsOrgTree:[
          {
            title:'总经办',
            members:[
              {
                label:'孙宇光',
                position:'总裁'
              },
              {
                label:'汪敏',
                position:'副总经理',
              },
              {
                label:'苏国栋',
                position:'CEO',
              }
            ]
          },
          {
            title:'客户服务部',
            members:[
              {
                label:'张荣',
                position:'客户服务部主管',
              },
              {
                label:'王慕容',
                position:'实习律师',
              },
              {
                label:'王梅',
                position:'内勤文员',
              },
              {
                label:'赵奕芸',
                position:'运营理算',
              }
            ]
          },
          {
            title:'法律部',
            members:[
              {
                label:'范小婷',
                position:'主管',
              },
              {
                label:'刘雨婷',
                position:'律师',
              },
              {
                label:'刘士传',
                position:'授薪律师',
              },
              {
                label:'蒋小源',
                position:'律师',
              },
              {
                label:'张敏学',
                position:'律师',
              },
              {
                label:'叶桂洪',
                position:'律师',
              }
            ]
          },
          {
            title:'人伤事物部',
            members:[
              {
                label:'吴洁',
                position:'垫付办经理',
              },
              {
                label:'尹述梅',
                position:'垫付专员',
              },
              {
                label:'吉庆',
                position:'垫付专员',
              },
              {
                label:'张松林',
                position:'垫付专员',
              },
              {
                label:'沈珏',
                position:'垫付专员',
              },
              {
                label:'陈伟',
                position:'垫付专员',
              },
              {
                label:'刘凤明',
                position:'垫付专员',
              },
              {
                label:'张卫忠',
                position:'分支负责人',
              },
              {
                label:'沈冲',
                position:'垫付专员',
              }
            ]
          },
          {
            title:'渠道资源部',
            members:[
              {
                label:'冯碧蕾',
                position:'运营总监',
              },
            ]
          },
          {
            title:'财务部',
            members:[
              {
                label:'江蓉',
                position:'财务主管',
              },
              {
                label:'周甜',
                position:'会计',
              },
              {
                label:'高欢欢',
                position:'财务助理',
              },
            ]
          },
          {
            title:'IT信息部',
            members:[
              {
                label:'李杨',
                position:'研发主管',
              },
              {
                label:'付芳芳',
                position:'UI设计师',
              },
              {
                label:'张海青',
                position:'JAVA工程师',
              },
              {
                label:'张中杰',
                position:'Web前端工程师',
              },
            ]
          },
          {
            title:'会员卡部',
            members:[
              {
                label:'周凤清',
                position:'助理营销员',
              },
              {
                label:'沈华',
                position:'营销员',
              },
              {
                label:'司亮',
                position:'营销员',
              },
              {
                label:'卜慧',
                position:'助理营销员',
              },
              {
                label:'肖细英',
                position:'助理营销员',
              },
              {
                label:'陆盼盼',
                position:'助理营销员',
              },
              {
                label:'康乐',
                position:'营销员',
              },
              {
                label:'刘康',
                position:'助理营销员'
              },
              {
                label:'鲍纯黎',
                position:'助理营销员',
              },
              {
                label:'徐勤华',
                position:'助理营销员',
              },
              {
                label:'张会利',
                position:'助理营销员',
              },
              {
                label:'徐良波',
                position:'助理营销员',
              },
              {
                label:'缪伟',
                position:'分支负责人',
              },
              {
                label:'陈隽',
                position:'助理营销员',
              },
              {
                label:'查军明',
                position:'助理营销员',
              },
              {
                label:'黄秋月',
                position:'行政内勤',
              },
              {
                label:'邵峰燕',
                position:'助理营销员',
              },
            ]
          },
          {
            title:'审核鉴定中心',
            members:[
              {
                label:'钱志超',
                position:'审核办主管',
              },
              {
                label:'余艳',
                position:'医学鉴定专员',
              },
            ]
          },
          {
            title:'人力资源部',
            members:[
              {
                label:'许娇',
                position:'人力资源经理',
              },
              {
                label:'黄沁芳',
                position:'行政前台',
              },
            ]
          },
          {
            title:'培训部',
            members:[
              {
                label:'王春燕',
                position:'培训主管',
              },
              {
                label:'王祥',
                position:'培训助理',
              },
            ]
          },
          {
            title:'业务发展部',
            members:[
              {
                label:'袁伟',
                position:'部门经理',
              },
              {
                label:'陈莺',
                position:'实习律师',
              },
            ]
          },
        ],
        orgTree: {
          label: '总裁：孙总',
          id:'',
          pid:'',
          children: [{
            label: '副总经理：汪总、苏总',
            children: [{
                label: '财务部',
                children: [{
                  label: '财务主管：江荣',
                  children: [{
                      label: '会计：周甜',
                    },
                    {
                      label: '助理：高欢欢',
                    }
                  ]
                }]
              },
              {
                label: '人力资源部',
                children: [{
                  label: '部门经理：许娇',
                  children: [{
                    label: '行政前台：黄沁芳',
                  }]
                }]
              },
              {
                label: 'IT信息部',
                children: [{
                  label: '部门经理：李杨',
                  children: [{
                      label: 'UI：付方芳'
                    },
                    {
                      label: 'Java：张海青'
                    },
                    {
                      label: 'Web：张中杰'
                    }
                  ]
                }]
              },
              {
                label: '市场',
                children: [{
                    label: '人伤事业部',
                    children: [{
                      label: '苏州部门经理：吴洁',
                      children: [{
                          label: '垫付专员：尹述梅',
                        },
                        {
                          label: '垫付专员：吉庆'
                        }, {
                          label: '垫付专员：沈珏',
                        }, {
                          label: '垫付专员：陈伟',
                        }, {
                          label: '垫付专员：张松林',
                        }, {
                          label: '垫付专员：刘凤明'
                        }
                      ]
                    }, ]
                  },
                  {
                    label: '会员卡部',
                    children: [{
                      label: '销售经理：周凤清',
                    }, {
                      label: '销售经理：司亮',
                    }, {
                      label: '销售经理：刘康'
                    }, {
                      label: '销售经理：沈华',
                    }, {
                      label: '销售经理：康乐',
                    }, {
                      label: '销售经理：鲍纯黎',
                    }, {
                      label: '销售经理：肖细英',
                    }, {
                      label: '销售经理：陆盼盼',
                    }, {
                      label: '销售经理：徐勤华',
                    }]
                  },
                  {
                    label: '业务发展部',
                    children: [{
                      label: '部门经理：袁伟',
                    }]
                  },
                  {
                    label: '培训部',
                    children: [{
                      label: '部门经理：王春燕',
                      children: [{
                        label: '部门助理：王祥',
                      }]
                    }]
                  },
                ]
              },
              {
                label: '运营',
                children: [{
                    label: '客户服务部',
                    children: [{
                      label: '部门主管：张荣',
                      children: [{
                          label: '运营理算：王慕蓉',
                        },
                        {
                          label: '运营理算：赵奕芸',
                        },
                        {
                          label: '医疗建档：王梅'
                        }
                      ]
                    }]
                  },
                  {
                    label: '法务部',
                    children: [{
                      label: '部门主管：范小婷',
                      children: [{
                        label: '授薪律师：张敏学',
                      }, {
                        label: '授薪律师：刘雨婷'
                      }, {
                        label: '授薪律师：叶桂洪',
                      }, {
                        label: '授薪律师：刘士传'
                      }, {
                        label: '授薪律师：蒋小源',
                      }]
                    }]
                  },
                  {
                    label: '审核办',
                    children: [{
                      label: '审核主管：钱志超',
                      children: [{
                        label: '医学鉴定：余艳'
                      }]
                    }]
                  }
                ]
              },
              {
                label: '常熟分公司',
                children: [{
                    label: '销售经理：缪伟',
                  },
                  {
                    label: '销售经理：陈隽'
                  },
                  {
                    label: '销售经理：查军明',
                  },
                  {
                    label: '销售经理：黄秋月'
                  }
                ]
              }
            ]
          }]
        }
      }
    },
  }
</script>

<style scoped>
 @media screen and (min-width:640px){
   .collapse{
     display: none;
   }
 }
 @media screen and (max-width:640px){
   .org-tree{
     display: none;
   }
   .collapse{
     margin-top: 10px;
   }
 }
</style>