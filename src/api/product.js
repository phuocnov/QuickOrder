import api from './api'
import API_CONSTAINTS from './constant'
export default {
  getProducts: () => {
    return api.get(API_CONSTAINTS.PRODUCTS.GET_PRODUCTS)
  }
}
