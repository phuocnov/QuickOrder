import { authActions, authReducers } from './auth'
import { cartActions, cartReducer } from './cart'
import { categoryActions, categoryReducer } from './category'
import { drinkItemActions, drinkItemReducer } from './drinkItem'
import { orderActions, orderReducer } from './order'
import { profileActions, profileReducer } from './profile'
import { toppingActions, toppingReducer } from './topping'

const actions = {
  auth: authActions,
  drinkItem: drinkItemActions,
  category: categoryActions,
  topping: toppingActions,
  cart: cartActions,
  profile: profileActions,
  order: orderActions
}

const reducer = {
  authReducers,
  drinkItemReducer,
  categoryReducer,
  toppingReducer,
  cartReducer,
  profileReducer,
  orderReducer
}

export { actions, reducer }
