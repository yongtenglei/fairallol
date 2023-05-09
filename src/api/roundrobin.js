import helper from './request.js'

const roundRobinApi = (data) => {
  return helper.post({
    url: '/roundrobin',
    data,
  })
}

export default roundRobinApi
