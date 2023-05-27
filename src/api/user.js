import api from './api'
import API_CONSTAINTS from './constant'

export default {
  getUserInfo: () => {
    return api.get(API_CONSTAINTS.USER.INFO)
  }
}
