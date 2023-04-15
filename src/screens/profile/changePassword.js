import { useFormik } from 'formik'
import React from 'react'
import { View, Text } from 'react-native'
import { Button, Flex, TextInput } from '@react-native-material/core'
import PropTypes from 'prop-types'

export default function ChangePassword ({ navigation }) {
  const formik = useFormik({
    initialValues: {
      currentPass: '',
      newPassword: '',
      reNewPassword: ''
    },
    onSubmit: (value) => {
      console.log(value)
      // update here
    }
  })
  return <View>
    <Flex style={{ margin: 10 }}>
      <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 16, marginBottom: 10 }}>Mật khẩu hiện tại</Text>
      <TextInput
        style={{ borderRadius: 10 }}
        onChange={(text) => { formik.setFieldValue('currentPass', text) }} />
    </Flex>
    <Flex style={{ margin: 10 }}>
      <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 16, marginBottom: 10 }}>Mật khẩu mới</Text>
      <TextInput
        style={{ borderRadius: 10 }}
        onChange={(text) => { formik.setFieldValue('newPassword', text) }} />
    </Flex>
    <Flex style={{ margin: 10 }}>
      <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 16, marginBottom: 10 }}>Nhập lại mật khẩu</Text>
      <TextInput
        style={{ borderRadius: 10 }}
        onChange={(text) => { formik.setFieldValue('reNewPassword', text) }} />
    </Flex>

    <Button style={{ margin: 10 }} title="Cập nhật mật khẩu" onPress={() => { formik.submitForm() }} />
  </View>
}

ChangePassword.propTypes = {
  navigation: PropTypes.any
}
