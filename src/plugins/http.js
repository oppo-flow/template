export default {
  install(Vue) {
    Vue.mixin({
      beforeCreate() {
        this.$http = (api, ...datas) => {
          let call = null
          switch (typeof api) {
            case 'function':
              call = api.call(this, ...datas)
              break
            case 'object':
              call = api
              break
            default:
              console.error(api)
          }
          if (!call) {
            console.error(api)
          }
          return call.catch((code) => {
            return Promise.reject(code)
          })
        }
      }
    })
  }
}
