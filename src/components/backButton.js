import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function BackButton ({ clickHandler }) {
  return <TouchableOpacity style={style.container} onPress={clickHandler}>
    <Ionicons name="arrow-back-outline" size={40} color={'#515151'}/>
  </TouchableOpacity>
}

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: '#ddd',
    top: 40,
    left: 20,
    borderRadius: 20,
    zIndex: 10
  }
})

BackButton.propTypes = {
  clickHandler: PropTypes.func
}
