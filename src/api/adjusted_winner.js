import helper from './request.js'

const adjustedWinnerApi = (data) => {
  return helper.post({
    url: '/adjustedwinner',
    data,
  })
}

export default adjustedWinnerApi
