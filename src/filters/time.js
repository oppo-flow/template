import datef from 'datef'
export default function (Vue) {
  Vue.filter('fdatetime', function (val, format) {
    return datef(format || 'YYYY-MM-dd HH:mm:ss', parseInt(val))
  })

  Vue.filter('fdatetimes', function (val) {
    return datef('YYYY-MM-dd HH:mm:ss:f', parseInt(val))
  })
  Vue.filter('fday', function (val, format) {
    if (!val) return ''
    return datef(format || 'YYYY-MM-dd', parseInt(val))
  })
  Vue.filter('fmsdatetime', function (val, format) {
    return datef(format || 'YYYY-MM-dd HH:mm:ss', parseInt(val) * 1000)
  })
}
