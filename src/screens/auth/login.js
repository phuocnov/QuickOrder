import { Button, Flex } from '@react-native-material/core'
import { useFormik } from 'formik'
import React from 'react'
import { View, Text, useWindowDimensions, TouchableOpacity, StyleSheet } from 'react-native'
import MyAuthInput from '../../components/auth/authFieldInput'
import PropTypes from 'prop-types'
import auth from '../../api/auth'
import { authActions } from '../../redux/auth'
import { useDispatch } from 'react-redux'

export default function LoginPage ({ navigation }) {
  const { width } = useWindowDimensions()
  const formik = useFormik({
    initialValues: {
    },
    onSubmit: (value) => {
      console.log(value)
      login(value)
    }
  })

  const dispatch = useDispatch()
  async function login (value) {
    auth.login(value).then((res) => {
      console.log(res.data)
      dispatch(authActions.login(res.data))
    })
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={style.title}>Xin chào !</Text>
      <Text style={style.subtitle}>Đăng nhập để tiếp tục</Text>
      <MyAuthInput
        placeholder={'Email đăng ký'}
        icon="mail-outline"
        style={style.inputField}
        onChange={(text) => { formik.setFieldValue('phonenumber', text) }} />
      <MyAuthInput
        placeholder={'Mật khẩu'}
        icon="key-outline"
        style={style.inputField}
        onChange={(text) => { formik.setFieldValue('password', text) }}
        isPasswordField={true} />
      <Button
        style={{ ...style.button, ...{ width: width * 0.9 } }}
        title="Đăng nhập"
        color='#F6ab31'
        titleStyle={{ color: '#fff' }}
        onPress={() => {
          formik.submitForm()
        }} />
      <TouchableOpacity>
        <Text style={style.pressableText}>Quên mật khẩu?</Text>
      </TouchableOpacity>
      <Flex direction='row'>
        <Text style={{ fontFamily: 'Roboto_400Regular' }}>Chưa có tài khoản? </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('sign-up') }}>
          <Text style={style.pressableText}>Đăng ký ngay</Text>
        </TouchableOpacity>
      </Flex>
    </View>
  )
}

const style = StyleSheet.create({
  title: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    marginTop: 150
  },
  subtitle: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginVertical: 5,
    color: '#979797'
  },
  inputField: {
    marginTop: 20
  },
  button: {
    marginTop: 20,
    marginBottom: 100,
    height: 50,
    justifyContent: 'center'
  },
  pressableText: {
    color: '#f6ab21',
    fontFamily: 'Roboto_400Regular'
  }
})

LoginPage.propTypes = {
  navigation: PropTypes.any
}
