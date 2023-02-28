import { Ionicons } from '@expo/vector-icons'
import { Box } from '@react-native-material/core'
import React from 'react'
import { useWindowDimensions, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { drinkItemActions } from '../redux/drinkItem'

export default function MySearchBar ({ onChange }) {
  const { width } = useWindowDimensions()
  const dispatch = useDispatch()
  return (
    <Box style={{
      width: 0.9 * width,
      height: 32,
      backgroundColor: '#eee',
      justifyContent: 'center',
      paddingLeft: 10,
      borderRadius: 8
    }}>
      <TextInput
        cursorColor={'#F6AC31'}
        variant='standard'
        placeholder="Bạn đang tìm món gì"
        style={{ height: 20, paddingLeft: 25 }}
        onChangeText={text => {
          dispatch(drinkItemActions.filterbyName(text))
        }}/>
      <Ionicons name='search-outline' style={{ position: 'absolute', fontSize: 20, color: '#888', left: 10 }} />
    </Box>
  )
}

MySearchBar.propTypes = {
  onChange: PropTypes.func
}
