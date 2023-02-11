import React from 'react'
import store from './src/redux/store'
import { Provider } from 'react-redux'
import MyNavigator from './src/navigator/navigator'

store.getState()
export default function App () {
  return (
    <Provider store={store}>
      <MyNavigator/>
    </Provider>
  )
}
