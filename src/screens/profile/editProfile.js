import { useFormik } from 'formik'
import React from 'react'
import { View, Text } from 'react-native'
import store from '../../redux/store'
import { Button, Flex, TextInput } from '@react-native-material/core'
import PropTypes from 'prop-types'

export default function EditProfile ({ navigation }) {
  const profile = store.getState().profile.profile
  const formik = useFormik({
    initialValues: {
      fullname: profile.fullname,
      phoneNumner: profile.phonenumber
    },
    onSubmit: (value) => {
      console.log(value)
      // update here
    }
  })

  return (
    <View style={{ backgroundColor: '#fff', paddingVertical: 20 }}>
      <Flex style={{ margin: 10 }}>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 16, marginBottom: 10 }}>Họ tên</Text>
        <TextInput
          style={{ borderRadius: 10 }}
          defaultValue={formik.initialValues.fullname}
          onChange={(text) => { formik.setFieldValue('fullname', text) }} />
      </Flex>

      <Flex style={{ margin: 10 }}>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 16, marginBottom: 10 }}>Số điện thoại</Text>
        <TextInput style={{ borderRadius: 10 }} defaultValue={formik.initialValues.phoneNumner}
          onChange={(text) => { formik.setFieldValue('phoneNumber', text) }}
        />
      </Flex>

      <Button style={{ margin: 10 }} title="Lưu thông tin" onPress={() => { formik.submitForm() }} />
    </View>
  )
}

EditProfile.propTypes = {
  navigation: PropTypes.any
}
