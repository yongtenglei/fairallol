import helper from './request.js'

const divideAndChooseApi = (data) => {
  return helper.post({
    url: '/dividechoose',
    data,
  })
}

export default divideAndChooseApi
