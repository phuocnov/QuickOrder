import { Ionicons } from '@expo/vector-icons'
import { Box } from '@react-native-material/core'
import React from 'react'
import { useWindowDimensions, TextInput } from 'react-native'

export default function MySearchBar () {
  const { width } = useWindowDimensions()
  return (
    <Box style={{
      width: 0.9 * width,
      height: 32,
      backgroundColor: '#eee',
      justifyContent: 'center',
      paddingLeft: 10,
      borderRadius: 8
    }}>
      <TextInput cursorColor={'#F6AC31'} variant='standard' placeholder="Bạn đang tìm món gì" style={{ height: 20, paddingLeft: 25 }} />
      <Ionicons name='search-outline' style={{ position: 'absolute', fontSize: 20, color: '#888', left: 10 }} />
    </Box>
  )
}
