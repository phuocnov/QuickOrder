import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from './home'
import MyTabBar from '../../components/bottomNavigationBar'
import HistoryPage from '../history/history'
import OrderPage from '../orders/order'
import ProfilePage from '../profile/profile'

const noHeaderOptions = {
  headerShown: false
}
const Tab = createBottomTabNavigator()

export default function RootHomepage () {
  return <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
    <Tab.Screen name='Home' component={HomePage} options={noHeaderOptions} />
    <Tab.Screen name='History' component={HistoryPage} options={noHeaderOptions} />
    <Tab.Screen name='Order' component={OrderPage} options={noHeaderOptions} />
    <Tab.Screen name='Profile' component={ProfilePage} options={noHeaderOptions} />
  </Tab.Navigator>
}
