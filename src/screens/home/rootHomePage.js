import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './home'
import ProductDetail from './productDetail'

const Stack = createNativeStackNavigator()
export default function RootHomepage () {
  return <Stack.Navigator>
    <Stack.Screen name='home' component={HomePage} options={{ headerShown: false }}/>
    <Stack.Screen name='product-detail' component={ProductDetail} options={{ headerShown: false }}/>
  </Stack.Navigator>
}
