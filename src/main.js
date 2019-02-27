import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
// 引入组织架构
import Vue2OrgTree from 'vue2-org-tree'
Vue.use(Vue2OrgTree)
Vue.config.productionTip = false
// import {Form,Input,Button,Icon,FormItem,Card,Row,Col,RadioGroup,Radio,Upload,Table} from 'iview'
// Vue.component('Button',Button)
// Vue.component('Input',Input)
// Vue.component('Form',Form)
// Vue.component('Icon',Icon)
// Vue.component('FormItem',FormItem)
// Vue.component('Card',Card)
// Vue.component('Row',Row)
// Vue.component('Col',Col)
// Vue.component('RadioGroup',RadioGroup)
// Vue.component('Radio',Radio)
// Vue.component('Upload',Upload)
// Vue.component('Table',Table)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
