import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    selected: -1
  },
  reducers: {
    select: (state, actions) => {
      state.selected = actions.payload
    },
    set: (state, actions) => {
      state.categories = actions.payload
    }
  }
})

export const categoryActions = slice.actions
export const categoryReducer = slice.reducer
