import { createSlice } from '@reduxjs/toolkit'

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

    }
  }
})

export const cartActions = slice.actions
export const cartReducer = slice.reducer
