import { configureStore } from '@reduxjs/toolkit'
import { reducer } from '.'

const rootReducer = {
  auth: reducer.authReducers,
  drink: reducer.drinkItemReducer,
  category: reducer.categoryReducer,
  topping: reducer.toppingReducer,
  cart: reducer.cartReducer,
  profile: reducer.profileReducer
}

const store = configureStore({
  reducer: rootReducer
})

export default store
