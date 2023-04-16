import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { formatCurrency } from 'react-native-format-currency'

export default function Item ({ handleClick, title, price, imgsrc }) {
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
      source={{ uri: imgsrc }}
      style={{
        width: 156,
        height: 100,
        borderRadius: 8,
        alignSelf: 'center'
      }} />
    <Text style={style.drinkName}>{title}</Text>
    <Text style={style.price}>{formatCurrency({ amount: parseInt(price), code: 'VND' })[0]}</Text>
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
  handleClick: PropTypes.func,
  title: PropTypes.string,
  price: PropTypes.number,
  imgsrc: PropTypes.string
}
