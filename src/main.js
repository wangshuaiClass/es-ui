import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './utils/_register'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
