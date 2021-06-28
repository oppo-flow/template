export default function (Vue) {
  Vue.directive('xxx', {
    bind(el, bind, vnode) {
      console.log(el, bind, vnode)
    },
    unbind(el, bind, vnode) {
      console.log(el, bind, vnode)
    }
  })
}
