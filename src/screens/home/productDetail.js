import React from 'react'
import { View, Image, Text, useWindowDimensions, StyleSheet, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import BackButton from '../../components/backButton'
import { Box, Flex, Spacer, TextInput } from '@react-native-material/core'
import { FormikProvider, useFormik, FieldArray } from 'formik'
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button'
import CheckBox from 'expo-checkbox'
import { formatCurrency, getSupportedCurrencies } from 'react-native-format-currency'
export default function ProductDetail ({ navigation }) {
  const { width } = useWindowDimensions()
  getSupportedCurrencies()
  const toppingDatas = [
    {
      name: 'Trân châu trắng',
      price: 5000,
      value: 'tran_chau_trang'
    },
    {
      name: 'Trân châu đen',
      price: 5000,
      value: 'tran_chau_den'
    },
    {
      name: 'Bánh plan',
      price: 7000,
      value: 'banh_plan'
    }
  ]
  const sizeData = [
    {
      value: 'S',
      label: 'Size S',
      price: 20000
    },
    {
      value: 'M',
      label: 'Size M',
      price: 30000
    },
    {
      value: 'L',
      label: 'Size L',
      price: 40000
    }
  ]
  const formik = useFormik({
    initialValues: {
      size: 'S',
      toppings: [],
      note: '',
      number: 1
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#f5f5f5' }}>
    <ScrollView style={{ flex: 1 }}>
      <Box style={style.headerContainer}>
        <Image source={require('../../../assets/image/coffee.jpg')} style={{ width, height: 200 }} />
        <Box style={{ padding: 20 }}>
          <Text style={style.name}>Trà chanh hoa đậu biếc</Text>
          <Text style={style.price}>30.000 VNĐ</Text>
          <Text style={style.description}>Thơm ngon, thanh mát, màu sắc đẹp, tốt cho sức khỏe, Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry.</Text>
        </Box>
      </Box>
      <FormikProvider value={formik}>
        <Box style={{ width, backgroundColor: '#fff', marginTop: 10, padding: 10 }}>
          <Box>
            <Text style={style.sectionTitle}>Size</Text>
            <RadioButtonGroup selected={formik.values.size}
              onSelected={(value) => { formik.setFieldValue('size', value) }}
              radioBackground={'#F6AC31'}>
              {sizeData.map((size, index) => {
                return <RadioButtonItem value={size.value}
                  key={index}
                  style={{ marginTop: 10, alignItems: 'center' }}
                  label={<Flex direction='row' style={{ width: width * 0.9, alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 16 }}>{size.label}</Text>
                    <Spacer />
                    <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 16 }}>{formatCurrency({ amount: size.price, code: 'VND' })[0]}</Text>
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
              return toppingDatas.map((topping, index) => {
                return <Flex key={index} direction="row" style={{ marginTop: 10 }}>
                  <CheckBox
                    color={'#F6AC31'}
                    value={formik.values.toppings.indexOf(topping.value) !== -1}
                    onValueChange={() => {
                      formik.values.toppings.indexOf(topping.value) === -1
                        ? arrayHelper.push(topping.value)
                        : arrayHelper.remove(formik.values.toppings.indexOf(topping.value))
                    }} />
                  <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 16, marginLeft: 5 }}>{topping.name}</Text>
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
            selectionColor={ '#F6AC31'}
            color={'#F6AC31'}
            onChangeText={(text) => formik.setFieldValue('note', text)}/>
        </Box>
      </FormikProvider>
    </ScrollView>
    <BackButton clickHandler={() => { navigation.goBack() }} />
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
  }
})

ProductDetail.propTypes = {
  navigation: PropTypes.any
}
