import Vue from 'vue'

// 引入常用文件
const libs = require.context('./lib', false, /\.js$/)
if (!window.loadingLib) {
  libs.keys().forEach((lib) => {
    libs(lib)
  })
  window.loadingLib = true
}
// 引入自定义指令
const directives = require.context('./directives', false, /\.js$/)
directives.keys().forEach((key) => {
  const directive = directives(key).default
  directive(Vue)
})
// 引入公用的 过滤器
const filters = require.context('./filters', false, /\.js$/)
filters.keys().forEach((key) => {
  const filter = filters(key).default
  filter(Vue)
})
// 引入插件
const plugins = require.context('./plugins', false, /\.js$/)
plugins.keys().forEach((key) => {
  const plugin = plugins(key).default
  if (!plugin.disabled) {
    Vue.use(plugin)
  }
})
