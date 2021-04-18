import Axios from 'axios'

// axios实例
const Service = Axios.create({
  baseURL: 'http://116.62.9.209:8080/testBackend/',
})
// 请求拦截器
Service.interceptors.request.use((config) => {
  return config
})
// 响应拦截器
Service.interceptors.response.use((config) => {
  return config
})
export default Service
