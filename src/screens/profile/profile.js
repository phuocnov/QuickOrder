import { Ionicons } from '@expo/vector-icons'
import { Box, Button, Flex, Spacer } from '@react-native-material/core'
import React, { useState, useEffect } from 'react'
import { View, Text, useWindowDimensions, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { authActions } from '../../redux/auth'
import user from '../../api/user'
import store from '../../redux/store'
import { profileActions } from '../../redux/profile'

export default function ProfilePage ({ navigation }) {
  const [userInfo, setUserInfo] = useState({
    address: '91, Lê Văn Việt, phường Hiệp Phú, thành phố Thủ Đức',
    email: 'hanamthai02@gmail.com',
    fullname: 'Nguyễn Văn Anh',
    phonenumber: '0383295427',
    rolename: 'admin',
    userid: 2
  })
  const dispatch = useDispatch()
  function logout () {
    dispatch(authActions.logout())
  }

  store.subscribe(() => [
    setUserInfo(store.getState().profile.profile)
  ])

  async function fetchUserProfile () {
    const data = await user.getUserInfo()
    store.dispatch(profileActions.setProfile(data.data.data))
  }
  useEffect(() => {
    fetchUserProfile()
  }, [])

  const { width } = useWindowDimensions()
  return (
    <View style={{ flex: 1 }}>
      <Box style={{ width, height: 200, backgroundColor: '#fff' }}>
        <Text style={style.fullname}>{userInfo.fullname}</Text>
        <Text style={style.email}>{userInfo.email}</Text>
        <Button color='#F6AC31'
          titleStyle={style.button}
          style={{ width: 220, marginTop: 30, marginLeft: 20 }} title='Chỉnh sửa thông tin'
          onPress={() => { navigation.navigate('Edit Profile') }} />
      </Box>

      <TouchableOpacity
        style={{ backgroundColor: '#fff', marginTop: 20, padding: 10 }}
        onPress={() => { navigation.navigate('Security') }}>
        <Flex direction='row'>
          <Text>Bảo mật</Text>
          <Spacer />
          <Ionicons name='arrow-forward-outline' />
        </Flex>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: '#fff', marginTop: 20, padding: 10 }}
        onPress={() => { navigation.navigate('Policy') }}>
        <Flex direction='row'>
          <Text>Chính sách</Text>
          <Spacer />
          <Ionicons name='arrow-forward-outline' />
        </Flex>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: '#fff', marginTop: 20, padding: 10 }}
        onPress={() => { logout() }}>
        <Flex direction='row'>
          <Text>Đăng xuất</Text>
          <Spacer />
          <Ionicons name='arrow-forward-outline' />
        </Flex>
      </TouchableOpacity>
    </View>
  )
}
const style = StyleSheet.create({
  fullname: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 24,
    marginTop: 50,
    marginLeft: 20
  },
  email: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#888',
    marginTop: 10,
    marginLeft: 20
  },
  button: {
    color: '#fff',
    fontSize: 14
  }
})

ProfilePage.propTypes = {
  navigation: PropTypes.any
}
