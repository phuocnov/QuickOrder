import { createSlice } from '@reduxjs/toolkit'

const sampleCategoryDatas = [
  {
    id: 0,
    value: 'coffee',
    name: 'Coffee'
  },
  {
    id: 1,
    value: 'milk-tea',
    name: 'Trà sữa'
  },
  {
    id: 2,
    value: 'tea',
    name: 'Trà'
  }
]

const slice = createSlice({
  name: 'category',
  initialState: {
    categories: sampleCategoryDatas,
    selected: -1
  },
  reducers: {
    select: (state, actions) => {
      state.selected = actions.payload
    }
  }
})

export const categoryActions = slice.actions
export const categoryReducer = slice.reducer
