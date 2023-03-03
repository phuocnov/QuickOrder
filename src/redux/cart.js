import { createSlice } from '@reduxjs/toolkit'
import storage from '../helper/storage'
const slice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0
  },
  reducers: {
    addItem: (state, actions) => {
      state.items.push(actions.payload)
    },
    removeItemL: (state, actions) => {
      const index = state.items.findIndex(actions.payload)
      state.items.splice(index)
    },
    clear: (state) => {
      state.items = []
    },
    calculatePrice: (state) => {

    },
    saveToStorage: (state) => {
      storage.set('cart', state)
    },
    loadFromStorage: (state) => {
      state = storage.get('cart')
    }
  }
})

export const cartActions = slice.actions
export const cartReducer = slice.reducer
