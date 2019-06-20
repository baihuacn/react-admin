/**
 * @file 封装请求
 */
import axios from 'axios'
import { Modal, message } from 'antd'
import { store } from '@/store'

// 创建axios 实例
const request = axios.create({
  baseURL: '/api',
})
// 拦截请求
request.interceptors.request.use(
  config => {
    const {
      account: { token },
    } = store.getState()
    config.headers.token = token
    return config
  },
  error => {
    message.error('发送请求失败')
    return Promise.reject(error)
  },
)
// 拦截响应
request.interceptors.response.use(
  response => {
    const { data } = response
    if (data instanceof Blob) {
      // 文件流
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsText(data)
        reader.onload = e => {
          const result = e.target.result
          if (result.code) {
            // 处理错误信息
            message.error(result.msg)
            reject()
          } else {
            resolve(data)
          }
        }
      })
    } else if (data.code === 0) {
      // 数据成功响应
      return Promise.resolve(data.data)
    } else if (data.code === 4001) {
      // 请求认证失败
      Modal.destroyAll()
      Modal.error({
        title: '请求认证失败，请重新登录！',
        okText: '确定',
        onOk() {
          window.location.href = '/login'
        },
      })
      return Promise.reject()
    } else {
      // 业务逻辑报错，抛出后端错误提示
      message.error(data.msg)
      return Promise.reject()
    }
  },
  error => {
    message.error('服务器响应失败')
    return Promise.reject(error)
  },
)

export default request
