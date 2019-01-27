import Vue from 'vue'
import App from './App'

import WXrequest from './utils/fetch.js'
Vue.prototype.$httpWX = WXrequest

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
// vue1.0 的挂载方式
app.$mount()
