import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import store from '../redux/store'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MyTabBar from '../components/bottomNavigationBar'
import HistoryPage from '../screens/history/history'
import OrderPage from '../screens/orders/order'
import ProfilePage from '../screens/profile/profile'
import LoginPage from '../screens/auth/login'
import SignupPage from '../screens/auth/signup'
import RootHomepage from '../screens/home/rootHomePage'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const noHeaderOptions = {
  headerShown: false
}

export default function MyNavigator () {
  return (
    <NavigationContainer>
      {store.getState().auth.isLogin
        ? <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
          <Tab.Screen name='Home' component={RootHomepage} options={noHeaderOptions} />
          <Tab.Screen name='History' component={HistoryPage} options={noHeaderOptions} />
          <Tab.Screen name='Order' component={OrderPage} options={noHeaderOptions} />
          <Tab.Screen name='Profile' component={ProfilePage} options={noHeaderOptions} />
        </Tab.Navigator>
        : <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage} options={noHeaderOptions} />
          <Stack.Screen name="Sign up" component={SignupPage} options={noHeaderOptions} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  )
}
