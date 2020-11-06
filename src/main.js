import Vue from 'vue'
import Default from './layouts/default.vue'
import router from './router/index.js'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Default)
}).$mount('#app')
