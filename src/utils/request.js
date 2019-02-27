import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const $axios = axios.create({
    baseURL:"http://114.55.38.89:8011", // api 的 base_urlhttp://192.168.101.96:8933  http://114.55.38.89:8011
    timeout: 2000 ,// request timeout http://192.168.101.229:8011
  })
  export default $axios