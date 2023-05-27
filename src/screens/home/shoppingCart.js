import { Box, Divider, Flex, Spacer, Text } from '@react-native-material/core'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, useWindowDimensions, View, StyleSheet, TouchableOpacity } from 'react-native'
import BackButton from '../../components/backButton'
import PropTypes from 'prop-types'
import AddressBar from '../../components/shoppingCart/addressBar'
import store from '../../redux/store'
import { formatCurrency } from 'react-native-format-currency'
import OrderFooter from '../../components/shoppingCart/orderFooter'
import { Ionicons } from '@expo/vector-icons'
import { cartActions } from '../../redux/cart'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import order from '../../api/order'

export default function ShoppingCart ({ navigation }) {
  const { width } = useWindowDimensions()
  const dispatch = useDispatch()
  const [cartItems, setCartItem] = useState(store.getState().cart.items)

  function deleteItem (index) {
    dispatch(cartActions.removeItem(index))
    dispatch(cartActions.calculatePrice())
    dispatch(cartActions.saveToStorage())
  }

  store.subscribe(() => {
    setCartItem(store.getState().cart.items)
  })

  const formik = useFormik({
    initialValues: {
      order: {
        totalprice: store.getState().cart.totalPrice,
        address: '',
        phonenumber: '',
        note: ''
      },
      item: []
    },
    onSubmit: (values) => {
      console.log(values)
      order.order(values).then(res => {
        console.log(res)
      })
    }
  })

  function IOrder () {
    const items = []
    console.log(cartItems)
    if (cartItems.length > 0) {
      cartItems.forEach(cartItem => {
        const toppings = []
        cartItem.productData.topping.map(topping => {
          return toppings.push(topping.colorid)
        })
        const item = {
          drinkid: cartItem.productData.drink.drinkid,
          price: cartItem.price,
          itemquantity: cartItem.number,
          sizeid: cartItem.size.sizeid,
          colorid: toppings
        }
        items.push(item)
      })

      formik.setFieldValue('item', items)
    }
  }

  useEffect(() => {
    IOrder()
  }, cartItems)
  return <View style={{ backgroundColor: '#ddd', flex: 1 }}>
    <ScrollView>

      <Box style={{ width, height: 100, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{
          marginTop: 30,
          fontFamily: 'Roboto_400Regular',
          fontSize: 20,
          paddingTop: 5
        }}>Đơn hàng</Text>
      </Box>

      <Box style={{ width, height: 100, backgroundColor: '#fff', justifyContent: 'center', marginTop: 10 }}>
        <Text style={{ textAlign: 'left', marginLeft: 25, marginBottom: 10 }}>Địa chỉ giao hàng</Text>
        <AddressBar onChange={(value) => {
          const temporder = formik.values.order
          temporder.address = value
          formik.setFieldValue('order', temporder)
        }} />
      </Box>
      <Box style={{ width, backgroundColor: '#fff', justifyContent: 'center', marginTop: 10 }}>
        <Text style={{ textAlign: 'left', margin: 25, marginBottom: 10 }}>Chi tiết đơn hàng</Text>

        { cartItems.length > 0
          ? cartItems.map((item, index) => {
            console.log(item)
            return <Box key={index} style={{ width: width * 0.9, marginLeft: 20 }}>
              <Flex direction='row'>
                <Image style={{ width: 80, height: 80, borderRadius: 20 }} source={{ uri: item.productData.drink.drinkimage }} />
                <Spacer />
                <Box style={{ width: 300, marginLeft: 20 }}>
                  <Text style={style.drinkText}>{item.productData.drink.drinkname}</Text>
                  <Text style={style.detailText}>{`Size: ${item.size.namesize}`}</Text>
                  <Text style={style.detailText}>{`Số lượng: ${item.number}`}</Text>
                  {/* <Text style={style.detailText}>{`Topping: ${item.topping.map(topping => { return ` ${topping} ` })}`}</Text> */}
                  <Text style={style.drinkPrice}>{formatCurrency({ amount: item.price, code: 'VND' })[0]}</Text>
                  <Text>{item.note}</Text>
                  <TouchableOpacity onPress={() => {
                    deleteItem(index)
                  }}>
                    <Ionicons size={20} name='trash-bin-outline' />
                  </TouchableOpacity>
                </Box>
              </Flex>
            </Box>
          })
          : <></>
        }
        <Divider />
        <TouchableOpacity onPress={() => { navigation.goBack() }} >
          <Text style={{ textAlign: 'center', color: '#F6AB31', marginVertical: 10 }}>+ Thêm sản phẩm</Text>
        </TouchableOpacity>
      </Box>
      <Box style={{ height: 300 }} />
    </ScrollView>
    <BackButton clickHandler={() => { navigation.goBack() }} />
    <OrderFooter orderHandler={() => { formik.submitForm() }} />
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
