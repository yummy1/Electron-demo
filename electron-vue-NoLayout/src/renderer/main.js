import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
// 引用element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import animate from 'animate.css'

//自定义全局Loading组件
import CusLoading from './components/Loading'

import directives from '@/directives'

import './permission'
// 日志
import './error'
import './icons'
import '@/styles/index.scss'

if (!process.env.IS_WEB) {
  if (!require('../../config').IsUseSysTitle) {
    require('@/styles/custom-title.scss')
  }
}

Vue.use(ElementUI)
Vue.use(animate)
Vue.use(directives)

Vue.prototype.$CusLoading = CusLoading.install;

Vue.config.productionTip = false
/* eslint-disable no-new */
const vue = new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

export default vue
