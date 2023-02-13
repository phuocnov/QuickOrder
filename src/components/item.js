import React from 'react'
import { Box } from '@react-native-material/core'
import { Image, StyleSheet, Text } from 'react-native'

export default function Item () {
  return <Box style={{
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
  </Box>
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
