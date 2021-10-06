/*
 * @Author: your name
 * @Date: 2021-07-10 16:24:55
 * @LastEditTime: 2021-07-12 08:32:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \visual-ui\src\request\index.js
 */
import axios from 'axios'
import { serialize } from '@/util/util'
import errorCode from '@/const/errorCode'
import { Toast } from 'mint-ui'
import qs from 'qs'



// 返回其他状态码
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500 // 默认的
}




// 设置请求超时时间
axios.defaults.timeout = 30000

// 跨域请求，true为允许保存cookie
// 当允许保存cookie的时候，服务端设置允许跨域必须为具体地址，不能是通配符
axios.defaults.withCredentials = false



// HTTPrequest拦截
axios.interceptors.request.use(config => {


  config.headers['test'] = 1;
  // headers中配置serialize为true开启序列化
  if (config.method === 'post' && config.headers.serialize) {
    config.data = serialize(config.data)
    delete config.data.serialize
  }

  if (config.method === 'get') {
    config.paramsSerializer = function (params) {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    }
  }

  return config
}, error => {
  return Promise.reject(error)
})

// HTTPresponse拦截
axios.interceptors.response.use(res => {

  const status = Number(res.status) || 200
  const message = res.data.msg || errorCode[status] || errorCode['default']


  if (status !== 200) {
    Toast({
      message
    })
    return Promise.reject(new Error(message))
  }
  const { code, msg, data } = res.data;
  if (code != 0) {
    Toast({
      message: msg
    })
    return Promise.reject(new Error(msg))
  }
  return data
}, error => {

  return Promise.reject(new Error(error))
})


export default axios
