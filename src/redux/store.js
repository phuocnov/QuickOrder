import { configureStore } from '@reduxjs/toolkit'
import { reducer } from '.'

const rootReducer = {
  auth: reducer.authReducers
}

const store = configureStore({
  reducer: rootReducer
})

export default store
