import axios from 'axios'

// should be the same as the server side
const OK = 'OK'
const FAILED = 'Failed'
const COMPROMISE =
  'There is no a really fair allocation could be achieved, but here is a allocation you can infer'

const Service = axios.create({
  baseURL: 'http://localhost:8081',
  header: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  timeout: 1000,
})

//interceptor
Service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

Service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code == OK) {
      return res
    } else {
      return res
    }
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default Service
