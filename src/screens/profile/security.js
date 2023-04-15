import { useFormik } from 'formik'
import React from 'react'
import { View, Text } from 'react-native'
import store from '../../redux/store'
import { Button, TextInput } from '@react-native-material/core'

export default function Security () {
  const profile = store.getState().profile.profile
  const formik = useFormik({
    initialValues: {
      fullname: profile.fullname,
      phoneNumber: profile.phonenumber
    },
    onSubmit: (value) => {
      console.log(value)
      // update here
    }
  })

  return (
    <View>
      <Text>Họ tên</Text>
      <TextInput onChange={(text) => { formik.setFieldValue('fullname', text) }}/>

      <Text>Số điện thoại</Text>
      <TextInput onChange={(text) => { formik.setFieldValue('phoneNumber', text) }}/>

      <Button title="Lưu thông tin" onPress={() => { formik.submitForm() }}/>
    </View>
  )
}
