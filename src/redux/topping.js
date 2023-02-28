import { createSlice } from '@reduxjs/toolkit'

const sampleToppingDatas = [
  {
    name: 'Trân châu trắng',
    price: 5000,
    value: 'tran_chau_trang'
  },
  {
    name: 'Trân châu đen',
    price: 5000,
    value: 'tran_chau_den'
  },
  {
    name: 'Bánh plan',
    price: 7000,
    value: 'banh_plan'
  }
]

const slice = createSlice({
  name: 'category',
  initialState: {
    toppings: sampleToppingDatas
  },
  reducers: {

  }
})

export const toppingActions = slice.actions
export const toppingReducer = slice.reducer
