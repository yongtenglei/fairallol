import helper from './request.js'

const saveWorldApi = (data) => {
  return helper.post({
    url: '/saveworld',
    data,
  })
}

export default saveWorldApi
