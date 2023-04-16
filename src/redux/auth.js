import { createSlice } from '@reduxjs/toolkit'
import storage from '../helper/storage'

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false
  },
  reducers: {
    login: (state, actions) => {
      state.isLogin = true
      storage.set('token', actions.payload.access_token)
    },
    logout: state => {
      state.isLogin = false
      try {
        storage.clear()
      } catch (error) { }
    },
    loadToken: (state) => {
      state.isLogin = true
    }
  }
})

export const authActions = slice.actions
export const authReducers = slice.reducer
