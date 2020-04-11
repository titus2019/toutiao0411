import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入element
import Element from 'element-ui'
// 引入样式
import 'element-ui/lib/theme-chalk/index.css'

import '../styles/index.less'

Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
