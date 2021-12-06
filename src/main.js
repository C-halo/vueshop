import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入axios包
import axios from 'axios'
import './plugins/element.js'

import './assets/css/global.css'
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 将axios挂载到Vue原型对象上
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
