import { Box, Divider, Flex, Spacer, Text } from '@react-native-material/core'
import React from 'react'
import { Image, ScrollView, useWindowDimensions, View, StyleSheet, TouchableOpacity } from 'react-native'
import BackButton from '../../components/backButton'
import PropTypes from 'prop-types'
import AddressBar from '../../components/shoppingCart/addressBar'
import store from '../../redux/store'
import { formatCurrency } from 'react-native-format-currency'
import OrderFooter from '../../components/shoppingCart/orderFooter'

export default function ShoppingCart ({ navigation }) {
  const { width } = useWindowDimensions()
  return <View style={{ backgroundColor: '#ddd', flex: 1 }}>
    <ScrollView>
      {/* Header */}
      <Box style={{ width, height: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{
          marginTop: 30,
          fontFamily: 'Roboto_400Regular',
          fontSize: 20,
          paddingTop: 5
        }}>Đơn hàng</Text>
      </Box>

      {/* Address */}
      <Box style={{ width, height: 100, backgroundColor: '#fff', justifyContent: 'center', marginTop: 10 }}>
        <Text style={{ textAlign: 'left', marginLeft: 25, marginBottom: 10 }}>Địa chỉ giao hàng</Text>
        <AddressBar onChange={() => { }} />
      </Box>
      <Box style={{ width, backgroundColor: '#fff', justifyContent: 'center', marginTop: 10 }}>
        <Text style={{ textAlign: 'left', margin: 25, marginBottom: 10 }}>Chi tiết đơn hàng</Text>

        {store.getState().cart.items.map((item, index) => {
          return <Box key={index} style={{ width: width * 0.9, marginLeft: 20 }}>
            <Flex direction='row'>
              <Image style={{ width: 80, height: 80, borderRadius: 20 }} source={require('../../../assets/image/coffee.jpg')} />
              <Spacer />
              <Box style={{ width: 300, marginLeft: 20 }}>
                <Text style={style.drinkText}>{item.drinkData.drinkName}</Text>
                <Text style={style.detailText}>{`Size: ${item.size}`}</Text>
                <Text style={style.detailText}>{`Số lượng: ${item.number}`}</Text>
                <Text style={style.detailText}>{`Topping: ${item.toppings.map(topping => { return ` ${topping} ` })}`}</Text>
                <Text style={style.drinkPrice}>{formatCurrency({ amount: item.price, code: 'VND' })[0]}</Text>
                <Text>{item.note}</Text>
              </Box>
            </Flex>
          </Box>
        })}
        <Divider />
        <TouchableOpacity onPress={() => { navigation.goBack() }} >
          <Text style={{ textAlign: 'center', color: '#F6AB31', marginVertical: 10 }}>+ Thêm sản phẩm</Text>
        </TouchableOpacity>
      </Box>
      <Box style={{ height: 300 }}/>
    </ScrollView>
    <BackButton clickHandler={() => { navigation.goBack() }} />
    <OrderFooter />
  </View>
}

const style = StyleSheet.create({
  drinkText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#272727'
  },
  detailText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: '#aaa',
    marginTop: 5
  },
  drinkPrice: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: '#F6AC31',
    marginTop: 15
  }
})

ShoppingCart.propTypes = {
  navigation: PropTypes.any
}
