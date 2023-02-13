import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export default function Item ({ handleClick }) {
  return <TouchableOpacity
    onPress={handleClick}
    style={{
      width: 180,
      height: 180,
      paddingTop: 10,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#ddd',
      flexBasis: '50%'
    }}>
    <Image
      source={require('../../assets/image/coffee.jpg')}
      style={{
        width: 156,
        height: 100,
        borderRadius: 8,
        alignSelf: 'center'
      }} />
    <Text style={style.drinkName}>Cà phê sữa nóng</Text>
    <Text style={style.price}>30.000VND</Text>
  </TouchableOpacity>
}

const style = StyleSheet.create({
  drinkName: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    left: 10,
    paddingTop: 10
  },
  price: {
    fontSize: 14,
    fontFamily: 'Roboto_500Medium',
    left: 10,
    color: '#F6AC31',
    paddingTop: 5
  }
})

Item.propTypes = {
  handleClick: PropTypes.func
}
