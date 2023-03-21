import { createSlice } from '@reduxjs/toolkit'
import storage from '../helper/storage'

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: true
  },
  reducers: {
    login: (state, actions) => {
      state.isLogin = true
      storage.set('token', actions.payload)
    },
    logout: state => {
      state.isLogin = false
      try {
        storage.clear()
      } catch (error) { }
    }
  }
})

export const authActions = slice.actions
export const authReducers = slice.reducer
