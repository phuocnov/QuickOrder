import React, { useEffect, useState } from 'react'
import { View, Image, Text, useWindowDimensions, StyleSheet, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import BackButton from '../../components/backButton'
import { Box, Flex, Spacer, TextInput, Button } from '@react-native-material/core'
import { FormikProvider, useFormik, FieldArray } from 'formik'
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button'
import CheckBox from 'expo-checkbox'
import { formatCurrency, getSupportedCurrencies } from 'react-native-format-currency'
import store from '../../redux/store'
import ItemCountButton from '../../components/productDetail/itemCountButton'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/cart'
import product from '../../api/product'

export default function ProductDetail ({ route, navigation }) {
  const { width } = useWindowDimensions()
  const { drinkId } = route.params
  const [price, setPrice] = useState(0)
  const [productData, setProductData] = useState({
    drink: {
      categoryid: 3,
      description: '30 gram trà + 20 gram sữa.',
      drinkid: 3,
      drinkimage: 'https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2022/10/27/photo-1-1666869235187680523516.jpg',
      drinkname: 'Trà Sữa Thập Cẩm',
      status: 'Available'
    },
    size: [
      {
        namesize: 'Vừa',
        price: '30000',
        sizeid: 6
      },
      {
        namesize: 'Lớn',
        price: '40000',
        sizeid: 7
      }
    ],
    topping: [
      {
        nametopping: 'TRÂN CHÂU TRẮNG',
        price: '5000',
        toppingid: 1
      },
      {
        nametopping: 'KEM CHESSE',
        price: '5000',
        toppingid: 2
      },
      {
        nametopping: 'THẠCH CỦ NĂNG',
        price: '5000',
        toppingid: 3
      }
    ]
  })
  const dispatch = useDispatch()

  getSupportedCurrencies()
  const formik = useFormik({
    initialValues: {
      sizeid: -1,
      toppingid: [],
      note: '',
      number: 1,
      price: 0
    },
    onSubmit: (values) => {
      dispatch(cartActions.addItem(values))
      dispatch(cartActions.calculatePrice())
      dispatch(cartActions.saveToStorage())
      console.log(values)
    }
  })

  function caculateItemPrice () {
    const basePrice = formik.values.sizeid !== -1
      ? productData.size.find(size => size.sizeid === formik.values.sizeid).price
      : 0
    const selectedTopping = []
    let toppingPrice = 0
    formik.values.toppingid.map((topping) => selectedTopping.push(store.getState().topping.toppings.find(tp => tp.value === topping)))
    selectedTopping.map(topping => {
      toppingPrice += topping.price
      return toppingPrice
    })
    setPrice((basePrice + toppingPrice) * formik.values.number)
  }

  function increaseNumber () {
    const number = formik.values.number + 1
    formik.setFieldValue('number', number)
  }
  function decreaseNumber () {
    if (formik.values.number > 1) {
      const number = formik.values.number - 1
      formik.setFieldValue('number', number)
    }
  }

  async function fetchProductDetail () {
    product.getProduct(drinkId).then(res => {
      const data = res.data.data
      setProductData(data)
      formik.setFieldValue('productData', data)
      console.log(data)
    })
  }

  useEffect(() => {
    fetchProductDetail()
  }, [])
  useEffect(() => {
    caculateItemPrice()
  }, [formik])
  return <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#f5f5f5' }}>
    {productData !== undefined
      ? <FormikProvider value={formik}>
        <ScrollView style={{ flex: 1 }}>
          <Box style={style.headerContainer}>
            <Image source={{ uri: productData.drink.drinkimage }} style={{ width, height: 200 }} />
            <Box style={{ padding: 20 }}>
              <Text style={style.name}>{productData.drink.drinkname}</Text>
              <Text style={style.price}>{formatCurrency({ amount: price, code: 'VND' })[0]}</Text>
              <Text style={style.description}>{productData.drink.description}</Text>
            </Box>
          </Box>
          <Box style={{ width, backgroundColor: '#fff', marginTop: 10, padding: 10 }}>
            <Box>
              <Text style={style.sectionTitle}>Size</Text>
              <RadioButtonGroup selected={formik.values.sizeid}
                onSelected={(value) => { formik.setFieldValue('sizeid', value) }}
                radioBackground={'#F6AC31'}>
                {productData.size.map((size, index) => {
                  return <RadioButtonItem value={size.sizeid}
                    key={index}
                    style={{ marginTop: 10, alignItems: 'center' }}
                    label={<Flex direction='row' style={{ width: width * 0.9, alignItems: 'center' }}>
                      <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 16 }}>{size.namesize}</Text>
                      <Spacer />
                      <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 16 }}>{formatCurrency({ amount: parseInt(size.price), code: 'VND' })[0]}</Text>
                    </Flex>} />
                })}
              </RadioButtonGroup>
            </Box>
          </Box>
          <Box style={{ width, backgroundColor: '#fff', marginTop: 10, padding: 10 }}>
            <Text style={style.sectionTitle}>Topping</Text>
            <FieldArray
              name='toppings'
              render={arrayHelper => {
                return productData.topping.map((topping, index) => {
                  return <Flex key={index} direction="row" style={{ marginTop: 10 }}>
                    <CheckBox
                      color={'#F6AC31'}
                      value={formik.values.toppingid.indexOf(topping.toppingid) !== -1}
                      onValueChange={() => {
                        formik.values.toppingid.indexOf(topping.value) === -1
                          ? arrayHelper.push(topping.toppingid)
                          : arrayHelper.remove(formik.values.toppingid.indexOf(topping.toppingid))
                      }} />
                    <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 16, marginLeft: 5 }}>{topping.nametopping}</Text>
                    <Spacer />
                    <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 16 }}>{formatCurrency({ amount: topping.price, code: 'VND' })[0]}</Text>
                  </Flex>
                })
              }}
            />
          </Box>
          <Box style={{ width, backgroundColor: '#fff', marginTop: 10, padding: 10 }}>
            <Text style={style.sectionTitle}>Ghi chú</Text>
            <TextInput style={{ width: width * 0.9, height: 100 }}
              placeholder="ghi chú của bạn"
              cursorColor={'#F6AC31'}
              selectionColor={'#F6AC31'}
              color={'#F6AC31'}
              onChangeText={(text) => formik.setFieldValue('note', text)} />
          </Box>
          <Box style={{ height: 130 }} />
        </ScrollView>
        {/* Footer */}
        <Box
          style={{ ...style.footerContainer, ...{ width } }}>
          <Flex
            direction='row'
            style={{
              width: 120,
              height: 70,
              backgroundColor: '#fff',
              justifyContent: 'center',
              marginTop: 10
            }}>
            <ItemCountButton title={'-'} onPress={() => { decreaseNumber() }}
              disabled={formik.values.number === 1} />
            <Spacer />
            <Text style={style.footerCountText}>{formik.values.number}</Text>
            <Spacer />
            <ItemCountButton title={'+'} onPress={() => increaseNumber()} />
          </Flex>
          <Button title={<Flex direction='row'>
            <Text style={{
              fontFamily: 'Roboto_500Medium',
              color: '#fff',
              fontSize: 14
            }}>Thêm vào giỏ hàng</Text>
            <Spacer />
            <Text style={{
              fontFamily: 'Roboto_500Medium',
              color: '#fff',
              fontSize: 14
            }}>{formatCurrency({ amount: price, code: 'VND' })[0]}</Text>
          </Flex>}
            style={{ width: width * 0.8, bottom: 20, height: 40, justifyContent: 'center' }}
            color={'#F6AC31'}
            titleStyle={{ color: '#fff' }}
            onPress={() => {
              formik.setFieldValue('price', price).then(() => {
                formik.submitForm()
                navigation.goBack()
              })
            }} />
        </Box>
        <BackButton clickHandler={() => { navigation.goBack() }} />
      </FormikProvider>
      : <></>}
  </View>
}
const style = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff'
  },
  name: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    color: '#272727'
  },
  price: {
    fontFamily: 'Roboto_500Medium',
    color: '#F6AC31',
    fontSize: 20,
    paddingTop: 5
  },
  description: {
    flexWrap: 'wrap',
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: '#888',
    paddingTop: 15
  },
  sectionTitle: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 20,
    color: '#272727',
    marginBottom: 10
  },
  footerContainer: {
    height: 120,
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 1,
    alignItems: 'center'
  },
  footerCountText: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto_400Regular',
    color: '#aaa',
    borderWidth: 1,
    padding: 10,
    borderColor: '#aaa',
    height: 40,
    borderRadius: 7
  }
})

ProductDetail.propTypes = {
  navigation: PropTypes.any,
  route: PropTypes.any
}
