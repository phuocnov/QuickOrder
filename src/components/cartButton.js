import { Button } from '@react-native-material/core'
import React from 'react'
import PropTypes from 'prop-types'

export default function CartButton ({ handleClick }) {
  return <Button title="Giỏ hàng"
    style={{
      position: 'absolute',
      bottom: 40,
      right: 10
    }} onPress={handleClick} />
}

CartButton.propTypes = {
  handleClick: PropTypes.func
}
