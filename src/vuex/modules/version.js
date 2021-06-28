export default {
  namespaced: true,
  state: {
    flag: true
  },
  getters: {
    getFlag(state) {
      return state.flag
    }
  },
  mutations: {
    setFlag(state, data) {
      state.flag = data
    }
  },
  actions: {
    setFlag({ commit }, data) {
      commit('setFlag', data)
    }
  }
}
