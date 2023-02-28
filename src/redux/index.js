import { authActions, authReducers } from './auth'
import { cartActions, cartReducer } from './cart'
import { categoryActions, categoryReducer } from './category'
import { drinkItemActions, drinkItemReducer } from './drinkItem'
import { toppingActions, toppingReducer } from './topping'

const actions = {
  auth: authActions,
  drinkItem: drinkItemActions,
  category: categoryActions,
  topping: toppingActions,
  cart: cartActions
}

const reducer = {
  authReducers,
  drinkItemReducer,
  categoryReducer,
  toppingReducer,
  cartReducer
}

export { actions, reducer }
