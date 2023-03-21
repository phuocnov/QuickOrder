import { Ionicons } from '@expo/vector-icons'
import { Box } from '@react-native-material/core'
import React from 'react'
import { useWindowDimensions, TextInput } from 'react-native'
import PropTypes from 'prop-types'

export default function MyAuthInput ({ icon, placeholder, onChange, style, isPasswordField }) {
  // const [value, setValue] = useState('')
  const { width } = useWindowDimensions()
  return (
    <Box style={{
      ...{
        width: 0.9 * width,
        height: 50,
        backgroundColor: '#eee',
        justifyContent: 'center',
        paddingLeft: 10,
        borderRadius: 8
      },
      ...style
    }}>
      <TextInput
        cursorColor={'#F6AC31'}
        variant='standard'
        placeholder={placeholder}
        style={{ height: 20, paddingLeft: 25 }}
        onChangeText={text => { onChange(text) }}
        multiline={false}
        secureTextEntry={isPasswordField}/>
      <Ionicons name={icon} style={{ position: 'absolute', fontSize: 20, color: '#888', left: 10 }} />
    </Box>
  )
}

MyAuthInput.propTypes = {
  onChange: PropTypes.func,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  isPasswordField: PropTypes.bool
}
