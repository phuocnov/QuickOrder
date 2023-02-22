import { Box } from '@react-native-material/core'
import CheckBox from '@react-native-community/checkbox'
import React from 'react'

export default function ToppingSelect ({ children, ...props }) {
  return <Box>
    <CheckBox type={'checkbox'}/>
  </Box>
}
