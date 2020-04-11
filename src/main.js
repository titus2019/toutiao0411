import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入element
import Element from '/element-ui'

Vue.use(Element);
// 引入样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
