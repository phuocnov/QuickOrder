import { Button } from '@react-native-material/core'
import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { authActions } from '../../redux/auth'

export default function ProfilePage () {
  const dispatch = useDispatch()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button title="Đăng xuất" onPress={() => { dispatch(authActions.logout()) }}/>
    </View>
  )
}
