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
    removeItem: (state, actions) => {
      const index = state.items.findIndex(actions.payload)
      state.items.splice(index)
    },
    clear: (state) => {
      state.items = []
    },
    calculatePrice: (state) => {
      let price = 0
      state.items.map(item => {
        price += item.price
        return price
      })
      state.totalPrice = price
    },
    saveToStorage: (state) => {
      storage.set('cart', state)
    },
    loadCart: (state, actions) => {
      state.items = actions.payload.items
      state.totalPrice = actions.payload.totalPrice
    }
  }
})

export const cartActions = slice.actions
export const cartReducer = slice.reducer
