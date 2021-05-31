import axios from 'axios'

export function request(config) {
  // 创建instance实例
  const instance = axios.create({
    baseURL: 'codewhy',
    timeout: 5000
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {

  })

  // 发生真正的网络请求
  return instance(config)
}