import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'

export default function ItemCountButton ({ title, onPress, disabled }) {
  return <TouchableOpacity
    style={{
      width: 40,
      borderColor: `${!disabled ? '#F6AC31' : '#bbb'}`,
      alignItems: 'center',
      height: 40,
      justifyContent: 'center',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 20
    }} onPress={onPress}>
    <Text style={{
      textAlign: 'center',
      color: `${!disabled ? '#F6AC31' : '#bbb'}`,
      fontFamily: 'Roboto_500Medium',
      fontSize: 25
    }}>{title}</Text>
  </TouchableOpacity>
}

ItemCountButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool
}
