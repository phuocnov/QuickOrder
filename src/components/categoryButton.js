import React from 'react'
import { Button } from '@react-native-material/core'
import PropTypes from 'prop-types'
export default function CategoryButton ({ selected }) {
  return <Button
    compact={true}
    title="Coffee"
    titleStyle={{ textAlign: 'center', fontSize: 12, color: selected ? '#fff' : '#333', fontFamily: 'Roboto_400Regular' }}
    style={{ width: 79, height: 32, margin: 5 }}
    color={selected ? '#F6AC31' : '#fff'}></Button>
}

CategoryButton.propTypes = {
  selected: PropTypes.bool
}
