import api from './api'
import API_CONSTAINTS from './constant'

export default {
  login: (params) => {
    return api.post(API_CONSTAINTS.AUTH.LOGIN, params)
  },
  signup: (params) => {
    try {
      return api.post(API_CONSTAINTS.AUTH.SIGNUP, params)
    } catch (error) {
      console.log(error)
    }
  }
}
