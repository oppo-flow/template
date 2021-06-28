export function highlight(str, keyword) {
  const Reg = new RegExp(keyword, 'i')
  if (str) {
    return str.replace(Reg, `<span style="color: #00C00E;">${keyword}</span>`)
  }
  return str
}

/**
 * 获取url上的字段参数
 * @param { string } name 字段名
 * @param { string } url
 */
export const getUrlParam = (name, url) => {
  if (!url) {
    url = window.location.href
  }
  const reg = new RegExp('[\\[\\]]', 'g')
  name = name.replace(reg, '\\$&')
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  const results = regex.exec(url)
  if (!results) return ''
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
