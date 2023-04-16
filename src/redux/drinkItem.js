import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'drink-items',
  initialState: {
    drinks: [],
    drinkStorage: []
  },
  reducers: {
    search: (state, actions) => {
      state.drinks.forEach(drink => {
        if (drink.drinkName.search(actions.payload) !== -1) {
          state.displayDrinks.push(drink)
        }
      })
    },
    setDrink: (state, actions) => {
      state.drinks = actions.payload
      state.drinkStorage = actions.payload
    },
    filterByTag: (state, actions) => {
      if (actions.payload === -1) {
        state.drinks = state.drinkStorage
      } else {
        state.drinks = state.drinkStorage.filter(drink => drink.categoryid === actions.payload)
      }
    },
    filterbyName: (state, action) => {
      if (action.payload === '') {
        state.drinks = state.drinkStorage
      } else state.drinks = state.drinks.filter(drink => drink.drinkname.search(action.payload) !== -1)
    }
  }
})

export const drinkItemActions = slice.actions
export const drinkItemReducer = slice.reducer
