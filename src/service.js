import axios from 'axios'

const service = axios.create({
  // api的base_url
  baseURL: '',
  // 请求超时时间
  timeout: 5000
})

service.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

export default service
