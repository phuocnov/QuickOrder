import { useFormik } from 'formik'
import React from 'react'
import { View, Text } from 'react-native'
import store from '../../redux/store'
import { Button, Flex, TextInput } from '@react-native-material/core'
import PropTypes from 'prop-types'

export default function Security ({ navigation }) {
  const profile = store.getState().profile.profile
  const formik = useFormik({
    initialValues: {
      email: profile.email
    },
    onSubmit: (value) => {
      console.log(value)
      // update here
    }
  })

  return (
    <View style={{ backgroundColor: '#fff', paddingVertical: 20 }}>
      <Flex style={{ margin: 10 }}>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 16, marginBottom: 10 }}>Email</Text>
        <TextInput
          style={{ borderRadius: 10 }}
          // onChange={(text) => { formik.setFieldValue('fullname', text) }}
          editable= {false}
          value={formik.initialValues.email}/>
      </Flex>

      <Flex style={{ margin: 10 }}>
        <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 16, marginBottom: 10 }}>Mật khẩu</Text>
        <TextInput style={{ borderRadius: 10 }} editable={false} value='88888888' secureTextEntry={true}/>
      </Flex>

      <Button style={{ margin: 10 }} title="Đổi mật khẩu" onPress={() => { navigation.navigate('Change Password') }} />
    </View>
  )
}

Security.propTypes = {
  navigation: PropTypes.any
}
