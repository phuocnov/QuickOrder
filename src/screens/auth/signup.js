import { Button, Flex } from '@react-native-material/core'
import { useFormik } from 'formik'
import React from 'react'
import { View, Text, useWindowDimensions, TouchableOpacity, StyleSheet } from 'react-native'
import MyAuthInput from '../../components/auth/authFieldInput'
import PropTypes from 'prop-types'
import auth from '../../api/auth'
// import { stringify } from 'query-string/base'

export default function SignupPage ({ navigation }) {
  const { width } = useWindowDimensions()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phonenumber: '',
      password: '',
      rePassword: ''
    },
    onSubmit: (value) => {
      console.log('submit value: ', value)
      auth.signup(value).then(result => {
        console.log(result``)
      })
      // navigation.navigate('login')
    }
  })
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={style.title}>Bắt đầu nào !</Text>
      <Text style={style.subtitle}>Tạo một tài khoản</Text>
      <MyAuthInput
        placeholder={'Họ và tên'}
        icon="person-outline"
        style={style.inputField}
        onChange={(text) => { formik.setFieldValue('name', text) }} />
      <MyAuthInput
        placeholder={'Số điện thoại'}
        icon="call-outline"
        style={style.inputField}
        onChange={(text) => { formik.setFieldValue('phonenumber', text) }} />
      <MyAuthInput
        placeholder={'Email'}
        icon="mail-outline"
        style={style.inputField}
        onChange={(text) => { formik.setFieldValue('email', text) }} />
      <MyAuthInput
        placeholder={'Mật khẩu'}
        icon="key-outline"
        style={style.inputField}
        onChange={(text) => { formik.setFieldValue('password', text) }}
        isPasswordField={true} />
      <MyAuthInput
        placeholder={'Nhập lại mật khẩu'}
        icon="key-outline"
        style={style.inputField}
        onChange={(text) => { formik.setFieldValue('rePassword', text) }}
        isPasswordField={true} />
      <Button
        style={{ ...style.button, ...{ width: width * 0.9 } }}
        title="Đăng ký"
        color='#F6ab31'
        titleStyle={{ color: '#fff' }}
        onPress={() => { formik.submitForm() }} />
      <Flex direction='row'>
        <Text style={{ fontFamily: 'Roboto_400Regular' }}>Đã có tài khoản ? </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('login') }}>
          <Text style={style.pressableText}>Đăng ký</Text>
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

SignupPage.propTypes = {
  navigation: PropTypes.any
}
