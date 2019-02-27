import {
  getAllCustoms,
  getBusinessCustoms
} from '@/api/login'
import Vue from 'vue'
import {
  Message
} from 'iview';
import 'iview/dist/styles/iview.css';
Vue.component('Message', Message)
const app = {
  state: {
    orders: [{
        goodsSelect: false,
        goodsImg: '',
        goodsDetail: {
          detailTitle: '安孚安检通套餐A',
          detailFeature: '特色：一卡在手 多家体检',
          detailServer: '服务：★项目全面 检查完善...'
        },
        goodsPrice: 360,
        goodsNumber: 1,
        goodsTotal: 360,
      },
      {
        goodsSelect: false,
        goodsImg: '',
        goodsDetail: {
          detailTitle: '安孚安检通套餐B',
          detailFeature: '特色：一卡在手 多家体检',
          detailServer: '服务：★项目全面 检查完善...'
        },
        goodsPrice: 550,
        goodsNumber: 1,
        goodsTotal: 550,
      },
      {
        goodsSelect: false,
        goodsImg: '',
        goodsDetail: {
          detailTitle: '安孚安检通套餐C',
          detailFeature: '特色：一卡在手 多家体检',
          detailServer: '服务：★项目全面 检查完善...'
        },
        goodsPrice: 880,
        goodsNumber: 1,
        goodsTotal: 880,
      },
    ],
    productions: '',
    device: 'desktop',
    userInfo: JSON.parse(sessionStorage.getItem('userInfo')) || {
      Id: '',
      userName: '',
    },
    totalNumber: 0,
    totalPrice: 0,
    seletedGoods: 0,
    selectAll: false,
    goodsList: '',
    payStatus: '',
    customList: [],
    companyList: [],
    modal: false,
  },
  mutations: {
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    // modal弹出层
    TOGGLE_MODAL: (state, modal) => {
      state.modal = modal
    },
    // 所有个人客户
    TOGGLE_CUSTOMLIST: (state, customList) => {
      state.customList = customList
    },
    // 所有企业客户
    TOGGLE_COMPANYLIST: (state, companyList) => {
      state.companyList = companyList
    },
    // 所有产品
    TOGGLE_PRODUCTIONS: (state, productions) => {
      state.productions = productions
    },
    // 商品清单
    TOGGLE_GOODSLIST: (state, singleOrder) => {
      state.goodsList = singleOrder
    },
    // 更新购物车订单
    TOGGLE_ORDERS: (state, index) => {
      state.orders.splice(index, 1)
    },
    TOGGLE_ADDORDERS: (state, singleOrder) => {
      state.orders.push(singleOrder)
    },
    // 登录的个人信息
    TOGGLE_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    // 增加单个商品数量
    TOGGLE_ADDSINGLEGOODS: (state, goodsPrice) => {
      state.totalNumber++
      state.totalPrice += goodsPrice
    },
    // 减少单个商品数量
    TOGGLE_REDUCESINGLEGOODS: (state, goodsPrice) => {
      state.totalNumber--
      state.totalPrice -= goodsPrice
    },
    //添加单个商品数量
    TOGGLE_ADDTOTALNUMBER: (state, goodsNumber) => {
      state.totalNumber += goodsNumber
      state.seletedGoods++
    },
    // 添加单个商品总价
    TOGGLE_ADDTOTALPRICE: (state, goodsTotal) => {
      state.totalPrice += goodsTotal
    },
    // 去除单个商品数量
    TOGGLE_REDUCETOTALNUMBER: (state, goodsNumber) => {
      state.totalNumber -= goodsNumber
      state.seletedGoods--
    },
    // 去除单个商品总价
    TOGGLE_REDUCETOTALPRICE: (state, goodsTotal) => {
      state.totalPrice -= goodsTotal
    },
    // 全选
    TOGGLE_SELECTALL: (state, selectAll) => {
      state.selectAll = selectAll
    },
    // 选中商品数量
    TOGGLE_SELETEDGOODS: (state, seletedGoods) => {
      state.seletedGoods = seletedGoods
    },
  },
  actions: {
    // 所用客户
    ShowAllCustoms({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        // 显示全部客户
        getAllCustoms(state.userInfo.Id).then(res => {
          console.log(res)
          if (res.data.success) {
            commit('TOGGLE_CUSTOMLIST', res.data.msg)
            // Message.success(res.data.display)
          } else {
            // Message.error(res.data.display)
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 显示企业用户
    ShowBusinessCustoms({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        // 显示全部客户
        getBusinessCustoms(state.userInfo.Id).then(res => {
          console.log(res)
          if (res.data.success) {
            commit('TOGGLE_COMPANYLIST', res.data.msg)
            // Message.success(res.data.display)
          } else {
            // Message.error(res.data.display)
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
}

export default app