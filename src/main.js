import Vue from 'vue'
import App from './App'
import router from './router'
// 导入axios
import axios from 'axios'
// 导入ui组件iView
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(router)
Vue.use(iView)
Object.defineProperty(Vue.prototype, '$axios', { value: axios })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
