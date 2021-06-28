import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const modules = require.context('./modules', false, /([\w]+)\.js/)
const storeModules = {}
modules.keys().forEach((key) => {
  const name = /([\w-]+)\.js$/i.exec(key)
  storeModules[name[1]] = modules(key).default
})
const store = new Vuex.Store({
  state: {
    myinfo: {},
    token: ''
  },
  getters: {
    getMyinfo(state) {
      return state.myinfo
    }
  },
  mutations: {
    setMyinfo(state, data) {
      state.myinfo = data
    },
    setToken(state, data) {
      state.token = data
    }
  },
  actions: {
    setMyinfo({ commit }, data) {
      commit('setMyinfo', data)
    }
  },
  modules: storeModules
})
window.$store = store
export default store
