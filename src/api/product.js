import api from './api'
import API_CONSTAINTS from './constant'
export default {
  getProducts: () => {
    return api.get(API_CONSTAINTS.PRODUCTS.GET_PRODUCTS)
  },
  getProduct: (id) => {
    return api.get(API_CONSTAINTS.PRODUCTS.DETAIL_PRODUCT(id))
  },
  getCategories: () => {
    return api.get(API_CONSTAINTS.PRODUCTS.CATEGORIES)
  }
}
