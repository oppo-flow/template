import axios from 'axios'
import server from './server'
import qs from 'qs'
let path = server[process.env.NODE_ENV]
let withCredentials = path.withCredentials
let baseURL = path.root

function getToken() {
  return window.$store.state.token
}

const instance = axios.create({
  baseURL: baseURL,
  validateStatus: () => true, // 所有的状态码全归为正常
  withCredentials: withCredentials,
  headers: {
    'X-Requested-With': 'XMLHttpRequest' // 标记ajax请求
  }
})
instance.interceptors.request.handlers = []
instance.interceptors.request.use(
  function (config) {
    const data = Object.assign({}, config, {
      // withCredentials: false,
      data: {
        eid: (window.$store.state.myinfo && window.$store.state.myinfo.eid) || '2021042801',
        accessToken: getToken(),
        data: JSON.stringify(config.data)
      }
    })
    if (
      config.headers['Content-Type'] &&
      config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
    ) {
      data.data = qs.stringify(data.data)
    }
    return data
  },
  function (error) {
    return Promise.reject(error)
  }
)
instance.interceptors.response.handlers = []
instance.interceptors.response.use(function (res) {
  if (res.status === 200) {
    if (res.data) {
      if (res.data.success === true) {
        return res.data.data
      } else {
        return Promise.reject(res.data.error || res.data.errorCode)
      }
    } else {
      return Promise.reject(res.data)
    }
  }
  if (res.status < 200 || res.status >= 300) {
    return Promise.reject(res.data)
  }
  throw res
})

export default instance
