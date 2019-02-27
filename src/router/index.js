import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/views/login/register.vue'
import Login from '@/views/login/login.vue'
import Index from '@/views/index/index.vue'
import Personal from '@/views/index/person/personal.vue'
import MyInfo from '@/views/index/person/myInfo/myInfo.vue'
import OrgTree from '@/views/index/person/orgTree/orgTree.vue'
import Application from '@/views/index/person/application/application.vue'
import Approval from '@/views/index/person/approval/approval.vue'
import Production from '@/views/index/production/production.vue'
import HumanInjury from '@/views/index/production/productionCenter/humanInjury.vue'
import MembershipServer from '@/views/index/production/productionCenter/membershipServer.vue'
import ProductionDetail from '@/views/index/production/productionCenter/productionDetail.vue'
import BusinessServer from '@/views/index/production/productionCenter/businessServer.vue'
import ShoppingCart from '@/views/index/cart/shoppingCart.vue'
import MyCart from '@/views/index/cart/myCart/myCart.vue'
import OrderDetail from '@/views/index/cart/myCart/orderDetail.vue'
import AllOrders from '@/views/index/cart/myCart/allOrders.vue'
import FutureOrders from '@/views/index/cart/myCart/futureOrders.vue'
import LastOrders from '@/views/index/cart/myCart/lastOrders.vue'
import PaidOrders from '@/views/index/cart/myCart/paidOrders.vue'
import Payment from '@/views/index/cart/myCart/payment.vue'
import Study from '@/views/index/study/study.vue'
import CompanyIntroduce from '@/views/index/study/studyCenter/companyIntroduce.vue'
import NewIntroduce from '@/views/index/study/studyCenter/newIntroduce.vue'
import SalesGuidance from '@/views/index/study/studyCenter/salesGuidance.vue'
import TrainingAdvice from '@/views/index/study/studyCenter/trainingAdvice.vue'
import ActivityAdvice from '@/views/index/study/studyCenter/activityAdvice.vue'
import CompanyRules from '@/views/index/study/studyCenter/companyRules.vue'
import SalesDetail from '@/views/index/study/studyCenter/salesDetail.vue'
import RulesDetail from '@/views/index/study/studyCenter/rulesDetail.vue'
import CardAgreement from '@/views/index/agreement/cardAgreement.vue'
import WatchDoc from '@/views/index/agreement/watchDoc.vue'
import Custom from '@/views/index/custom/custom.vue'
import CustomCenter from '@/views/index/custom/customCenter/customCenter.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      component:Register,
      name:'Register',
      path:'/register'
    },
    {
      component:Login,
      name:'Login',
      path:'/login'
    },{
      component:Index,
      name:'Index',
      path:'/index',
      redirect:'/index/membershipServer',
      children:[
        {
          component:HumanInjury,
          name:'HumanInjury1',
          path:'humanInjury',
        },{
          component:MembershipServer,
          name:'MembershipServer1',
          path:'membershipServer',
        },{
          component:BusinessServer,
          name:'BusinessServer1',
          path:'businessServer'
        }
      ]
    },{
      component:Personal,
      name:'Personal',
      path:'/personal',
      redirect:'/personal/myInfo',
      children:[
        {
          component:MyInfo,
          name:'MyInfo',
          path:'myInfo'
        },
        {
          component:OrgTree,
          name:'OrgTree',
          path:'orgTree',
        },
        {
          component:Application,
          name:'Application',
          path:'application'
        },
        {
          component:Approval,
          name:'Approval',
          path:'approval'
        }
      ]
    },{
      component:Production,
      name:'Production',
      path:'/production',
      redirect:'/production/membershipServer',
      children:[
        {
          component:HumanInjury,
          name:'HumanInjury',
          path:'humanInjury',
        },{
          component:MembershipServer,
          name:'MembershipServer',
          path:'membershipServer',
        },{
          component:BusinessServer,
          name:'BusinessServer',
          path:'businessServer'
        },
      ]
    },{
      component:ShoppingCart,
      name:'ShoppingCart',
      path:'/shoppingCart',
      redirect:'/shoppingCart/allOrders',
      children:[
        // {
        //   component:MyCart,
        //   name:'MyCart',
        //   path:'myCart',
        // },
        {
          component:AllOrders,
          name:'AllOrders',
          path:'allOrders'
        },
        // {
        //   component:FutureOrders,
        //   name:'FutureOrders',
        //   path:'futureOrders'
        // },{
        //   component:LastOrders,
        //   name:'LastOrders',
        //   path:'lastOrders'
        // },{
        //   component:PaidOrders,
        //   name:'PaidOrders',
        //   path:'paidOrders'
        // },
        {
          component:Payment,
          name:'Payment',
          path:'payment',
        }
      ]
    },
    {
      component:Study,
      name:'Study',
      path:'/study',
      redirect:'/study/companyRules',
      children:[
        // {
        //   component:CompanyIntroduce,
        //   name:'CompanyIntroduce',
        //   path:'companyIntroduce',
        // },
        {
          component:NewIntroduce,
          name:'NewIntroduce',
          path:'newIntroduce',
        },
        {
          component:SalesGuidance,
          name:'SalesGuidance',
          path:'salesGuidance',
        },
        {
          component:TrainingAdvice,
          name:'TrainingAdvice',
          path:'trainingAdvice',
        },
        // {
        //   component:ActivityAdvice,
        //   name:'ActivityAdvice',
        //   path:'activityAdvice',
        // },
         {
          component:CompanyRules,
          name:'CompanyRules',
          path:'companyRules',
        },
        {
          component:SalesDetail,
          name:'SalesDetail',
          path:'salesDetail',
        },
        {
          component:RulesDetail,
          name:'RulesDetail',
          path:'rulesDetail'
        }
      ]
    },
    {
      component:CardAgreement,
      name:'CardAgreement',
      path:'/cardAgreement',
    },
    {
      component:WatchDoc,
      name:'WatchDoc',
      path:'/watchDoc'
    },
    {
      component:ProductionDetail,
      name:'ProductionDetail',
      path:'/productionDetail',
    },
    {
      component:Custom,
      name:'Custom',
      path:'/custom',
      redirect:'/custom/customCenter',
      children:[
        {
          component:CustomCenter,
          name:'CustomCenter',
          path:'customCenter'
        }
      ]
    },
    {
      component:OrderDetail,
      name:'OrderDetail',
      path:'/orderDetail'
    },
    {
      component:Payment,
      name:'Payment',
      path:'/payment',
    },
    {
      component:CompanyIntroduce,
      name:'CompanyIntroduce',
      path:'/companyIntroduce',
    },
  ]
})
