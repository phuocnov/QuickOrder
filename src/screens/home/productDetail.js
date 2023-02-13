import React from 'react'
import { View, Text, Button } from 'react-native'
import PropTypes from 'prop-types'

export default function ProductDetail ({ navigation }) {
  return <View style={{ flex: 1, alignItems: 'center' }}>
    <Text>Product Detail</Text>
    <Button title='Back' onPress={() => { navigation.goBack() }}/>
  </View>
}

ProductDetail.propTypes = {
  navigation: PropTypes.any
}
