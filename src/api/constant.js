const API_CONSTAINTS = {
  AUTH: {
    LOGIN: '/login',
    SIGNUP: '/register',
    LOGOUT: '/logout',
    RESET_PASSWORD: '/resetPassword'
  },
  PRODUCTS: {
    GET_PRODUCTS: '/alldrink',
    DETAIL_PRODUCT: (id) => `/drink/${id}`,
    CATEGORIES: '/drink/category'
  },
  USER: {
    INFO: '/userInfo',
    CHANGE: '/userInfo'
  },
  ORDER: {
    ORDER: '/order/preparing',
    COMPLETE: (id) => `/order/complete/${id}`,
    CANCEL: (id) => `/order/cancel/${id}`,
    HISTORY: '/order/history',
    CURRENT: '/order/current'
  }

}
export default API_CONSTAINTS
