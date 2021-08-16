```js

// 引入axios模块
import axios from 'axios'

// 引入路由组件进行跳转
// 为跳转至404和登录页面
import router from '../router/index.js'

// 创建实例
// timeout 配置过期时间
// withCredentials 是否接受 cookie
// headers 配置请求头
const service = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
})

// 请求拦截
service.interceptors.request.use(
  config => {
    // 在请求头添加与服务端协商好的token字段
    config.headers['token'] = JSON.parse(localStorage.getItem('zhqh-gjyw-token'))
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
// 401, token失效
service.interceptors.response.use(
  response => {
    if (response.data && response.data.code === 401) {
      localStorage.removeItem('zhqh-gjyw-token')
      router.push({ name: 'Login' })
    }
    if (response.data && response.data.code === 302) {
      router.push('/')
    }
    return response
  },
  error => {
    if (error.status === 404) {
      router.push({ name: '404' })
    }
    return Promise.reject(error)
  }
)

// axios无权限限制 封装 HTTP 请求
// ----------------------------
// _get(url, potions, callback)
// *  description: 封装get请求
// *  param url {String}
// *  param potions {Object} 默认为{} 传入参数params参数
// *  return:  Promise
// *  ps: 根据约定 数据成功获取code === 0
class HTTP_UNLIMITED {
  // get请求
  _get(url, options = {}) {
    return new Promise((resolve, reject) => {
      //console.log(options)
      axios
        .get(url, options)
        .then(function(response) {
          const data = response.data
          if (data.code === 0) {
            resolve(data)
          }
        })
        .catch(function(error) {
          reject(error)
        })
    })
  }

  // post请求
  _post(url, options = {}) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, options)
        .then(function(response) {
          const data = response.data
          if (data.code === 0) {
            resolve(data)
          }
        })
        .catch(function(error) {
          reject(error)
        })
    })
  }
}

// axios有权限 封装 HTTP 请求
// ----------------------------
// _get(url, potions, callback)
// *  description: 封装get请求
// *  param url {String}
// *  param potions {Object} 默认为{} 传入参数params参数
// *  return:  Promise
// *  ps: 根据约定 数据成功获取code === 0
class HTTP_LIMITED {
  // get请求
  _get(url, options = {}) {
    return new Promise((resolve, reject) => {
      service
        .get(url, options)
        .then(function(response) {
          const data = response.data
          if (data.code === 0) {
            resolve(data)
          }
        })
        .catch(function(error) {
          reject(error)
        })
    })
  }

  // post请求
  _post(url, options = {}) {
    return new Promise((resolve, reject) => {
      service
        .post(url, options)
        .then(function(response) {
          const data = response.data
          if (data.code === 0) {
            resolve(data)
          }
        })
        .catch(function(error) {
          reject(error)
        })
    })
  }
}

// 导出
export { service, HTTP_UNLIMITED, HTTP_LIMITED }

```