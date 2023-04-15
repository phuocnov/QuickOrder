import { authActions, authReducers } from './auth'
import { cartActions, cartReducer } from './cart'
import { categoryActions, categoryReducer } from './category'
import { drinkItemActions, drinkItemReducer } from './drinkItem'
import { profileActions, profileReducer } from './profile'
import { toppingActions, toppingReducer } from './topping'

const actions = {
  auth: authActions,
  drinkItem: drinkItemActions,
  category: categoryActions,
  topping: toppingActions,
  cart: cartActions,
  profile: profileActions
}

const reducer = {
  authReducers,
  drinkItemReducer,
  categoryReducer,
  toppingReducer,
  cartReducer,
  profileReducer
}

export { actions, reducer }
