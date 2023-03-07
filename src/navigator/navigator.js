import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import store from '../redux/store'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from '../screens/auth/login'
import SignupPage from '../screens/auth/signup'
import RootHomepage from '../screens/home/rootHomePage'
import ProductDetail from '../screens/home/productDetail'
import ShoppingCart from '../screens/home/shoppingCart'

import { useSelector } from 'react-redux'
const Stack = createNativeStackNavigator()
const noHeaderOptions = {
  headerShown: false
}
export default function MyNavigator () {
  const isLogin = useSelector(state => state.auth.isLogin)
  useEffect(() => {

  }, [isLogin])
  return (
    <NavigationContainer>
      {store.getState().auth.isLogin
        ? <Stack.Navigator>
          <Stack.Screen name='home' component={RootHomepage} options={{ headerShown: false }} />
          <Stack.Screen name='product-detail' component={ProductDetail} options={{ headerShown: false }} />
          <Stack.Screen name='shopping-cart' component={ShoppingCart} options={{ headerShown: false }} />
        </Stack.Navigator>
        : <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage} options={noHeaderOptions} />
          <Stack.Screen name="Sign up" component={SignupPage} options={noHeaderOptions} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  )
}
