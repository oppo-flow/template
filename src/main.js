import Vue from 'vue'
import App from './App.vue'
import store from './vuex'
import router from './router'
import './common'
import i18n from './i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
