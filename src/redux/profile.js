import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'profile',
  initialState: {
    profile: {
      address: '91, Lê Văn Việt, phường Hiệp Phú, thành phố Thủ Đức',
      email: 'hanamthai02@gmail.com',
      fullname: 'Nguyễn Văn Anh',
      phonenumber: '0383295427',
      rolename: 'admin',
      userid: 2
    }
  },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload
    }
  }
})

export const profileActions = slice.actions
export const profileReducer = slice.reducer
