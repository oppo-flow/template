import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '*',
      name: 'test',
      component: (resolve) => require(['@/pages/test/index.vue'], resolve)
    }
  ]
})
