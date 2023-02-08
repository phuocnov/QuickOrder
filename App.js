import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomePage from './src/screens/home/home'
import HistoryPage from './src/screens/history/history'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import OrderPage from './src/screens/orders/order'
import ProfilePage from './src/screens/profile/profile'
import store from './src/redux/store'
import { Provider } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from './src/screens/auth/login'
import SignupPage from './src/screens/auth/signup'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const noHeaderOptions = {
  headerShown: false
}
store.getState()
export default function App () {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {store.getState().auth.isLogin
          ? <Tab.Navigator>
        <Tab.Screen name='Home' component={HomePage} options={noHeaderOptions} />
        <Tab.Screen name='History' component={HistoryPage} options={noHeaderOptions} />
        <Tab.Screen name='Order' component={OrderPage} options={noHeaderOptions} />
        <Tab.Screen name='Profile' component={ProfilePage} options={noHeaderOptions} />
      </Tab.Navigator>
          : <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage} options={noHeaderOptions} />
          <Stack.Screen name="Sign up" component={SignupPage} options={noHeaderOptions}/>
        </Stack.Navigator>
      }

      </NavigationContainer>
    </Provider>
  )
}
