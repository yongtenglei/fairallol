import Service from './config.js'
import qs from 'qs'

const get = (config) => {
  return Service({
    ...config,
    method: 'get',
    params: config.data,
    //paramsSerializer: function (params) {
    //return qs.stringify(params)
    //},
  })
}

const post = (config) => {
  return Service({
    ...config,
    method: 'post',
    data: config.data,
  })
}

export default {
  get,
  post,
}
