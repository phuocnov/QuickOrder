import { Ionicons } from '@expo/vector-icons'
import { Box } from '@react-native-material/core'
import React from 'react'
import { useWindowDimensions, TextInput } from 'react-native'
import PropTypes from 'prop-types'

export default function AddressBar ({ onChange }) {
  const { width } = useWindowDimensions()
  return (
    <Box style={{
      width: 0.9 * width,
      height: 32,
      backgroundColor: '#eee',
      justifyContent: 'center',
      paddingLeft: 10,
      borderRadius: 8,
      alignSelf: 'center'
    }}>
      <TextInput
        cursorColor={'#F6AC31'}
        variant='standard'
        placeholder="Nhập địa chỉ giao hàng"
        style={{ height: 20, paddingLeft: 25 }}
        onChangeText={(value) => { onChange(value) }}/>
      <Ionicons name='location-outline' style={{ position: 'absolute', fontSize: 20, color: '#888', left: 10 }} />
    </Box>
  )
}

AddressBar.propTypes = {
  onChange: PropTypes.func
}
