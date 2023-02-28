import { createSlice } from '@reduxjs/toolkit'

const sampleDrinkDatas = [
  {
    drinkID: 0,
    drinkName: 'Cà phê sữa nóng',
    drinkImage: '',
    description: 'Cà phê sữa nóng là một loại thức uống phổ biến nhất tại Việt Nam, vậy bạn đã biết cách pha cà phê sao cho chuẩn chưa, cùng vào bếp với Điện máy XANH thực hiện cách pha cà phê sữa nóng cho bữa sáng sảng khoái nha.',
    category: 0,
    status: 'available',
    size: [
      {
        value: 'S',
        label: 'Size S',
        price: 10000
      },
      {
        value: 'L',
        label: 'Size L',
        price: 20000
      }
    ]
  },
  {
    drinkID: 1,
    drinkName: 'Cà phê đen đá',
    drinkImage: '',
    description: 'Cà phê đen đá là một loại thức uống phổ biến nhất tại Việt Nam, vậy bạn đã biết cách pha cà phê sao cho chuẩn chưa, cùng vào bếp với Điện máy XANH thực hiện cách pha cà phê đen đá cho bữa sáng sảng khoái nha.',
    category: 0,
    status: 'available',
    size: [
      {
        value: 'S',
        label: 'Size S',
        price: 15000
      },
      {
        value: 'L',
        label: 'Size L',
        price: 25000
      }
    ]
  },
  {
    drinkID: 2,
    drinkName: 'Trà sữa truyền thống',
    drinkImage: '',
    description: 'Trà sữa truyền thống là một loại đồ uống có nguồn gốc từ Đài Loan. Trà sữa được làm từ trà đen hoặc trà xanh pha với sữa đặc và đường. Người ta thường sử dụng bột trà để pha trà, sau đó thêm sữa đặc và đường để tạo nên một hương vị ngọt ngào, thơm ngon đặc trưng.',
    category: 1,
    status: 'available',
    size: [
      {
        value: 'S',
        label: 'Size S',
        price: 20000
      },
      {
        value: 'L',
        label: 'Size L',
        price: 30000
      }
    ]
  }
]
const slice = createSlice({
  name: 'drink-items',
  initialState: {
    drinks: sampleDrinkDatas,
    drinkStorage: sampleDrinkDatas
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
    },
    filterByTag: (state, actions) => {
      if (actions.payload === -1) {
        state.drinks = state.drinkStorage
      } else {
        state.drinks = state.drinkStorage.filter(drink => drink.category === actions.payload)
      }
    },
    filterbyName: (state, action) => {
      if (action.payload === '') {
        state.drinks = state.drinkStorage
      } else state.drinks = state.drinks.filter(drink => drink.drinkName.search(action.payload) !== -1)
    }
  }
})

export const drinkItemActions = slice.actions
export const drinkItemReducer = slice.reducer
