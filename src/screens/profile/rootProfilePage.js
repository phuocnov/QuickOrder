import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ProfilePage from './profile'
import EditProfile from './editProfile'
import Security from './security'
import Policy from './policy'
import ChangePassword from './changePassword'

const Stack = createNativeStackNavigator()
const noHeaderOptions = {
  headerShown: false
}
export default function RootProfilePage () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='profile' component={ProfilePage} options={noHeaderOptions}/>
      <Stack.Screen name='Edit Profile' component={EditProfile}/>
      <Stack.Screen name='Security' component={Security}></Stack.Screen>
      <Stack.Screen name='Policy' component={Policy}></Stack.Screen>
      <Stack.Screen name='Change Password' component={ChangePassword}></Stack.Screen>
    </Stack.Navigator>
  )
}
