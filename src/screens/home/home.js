import { Ionicons } from '@expo/vector-icons'
import { Box, Wrap } from '@react-native-material/core'
import React, { useEffect } from 'react'
import { StyleSheet, View, Text, useWindowDimensions, Image, ScrollView } from 'react-native'
import CategoryButton from '../../components/categoryButton'
import Item from '../../components/item'
import MySearchBar from '../../components/searchBar'
import { Flex } from 'react-native-flex-layout'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { categoryActions } from '../../redux/category'
import store from '../../redux/store'
import { drinkItemActions } from '../../redux/drinkItem'
import CartButton from '../../components/cartButton'
import storage from '../../helper/storage'
import { cartActions } from '../../redux/cart'

export default function HomePage ({ navigation }) {
  const { width, height } = useWindowDimensions()
  const dispatch = useDispatch()
  const cateSelected = useSelector(state => state.category.selected)
  const drinksList = useSelector(state => state.drink.drinks)
  const style = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    header: {
      backgroundColor: '#fff',
      width
    },
    headerText: {
      fontSize: 12,
      color: '#888',
      fontFamily: 'Roboto_400Regular'
    }
  })
  function gotoDetail (id) {
    navigation.navigate('product-detail', { drinkId: id })
  }
  function gotoCart () {
    navigation.navigate('shopping-cart')
  }
  useEffect(() => {
  }, [cateSelected, drinksList])

  // Load cart from storage on startup
  storage.get('cart').then(value => {
    if (store.getState().cart.items.length === 0 && value !== null) {
      dispatch(cartActions.loadCart(value))
    }
  })

  return (
    <View style={{ display: 'flex', width, height, flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Box style={style.header}>
          <Image style={{ height: 230 }} source={require('../../../assets/image/banner.jpg')} />
          <Box style={{ paddingLeft: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', fontFamily: 'Roboto_700Bold', marginBottom: 20, marginTop: 20 }}>DIAMOND MILKTEA</Text>
            <Wrap m={10} spacing={10} >
              <Ionicons style={{ ...style.headerText, fontSize: 16 }} name='location-outline'></Ionicons>
              <Text style={style.headerText}>97 Man Thiện, phường Hiệp Phú, TP Hồ Chí Minh</Text>
            </Wrap>
            <Wrap m={10} spacing={10}>
              <Ionicons style={{ ...style.headerText, fontSize: 16 }} name='time-outline'></Ionicons>
              <Text style={style.headerText} >Thời gian mở cửa 08:00-22:30</Text>
            </Wrap>
            <Wrap m={10} spacing={10}>
              <Ionicons style={{ ...style.headerText, fontSize: 16 }} name='call-outline'></Ionicons>
              <Text style={style.headerText} >Số điện thoại đặt hàng: 0346 343 459</Text>
            </Wrap>
            <MySearchBar />
          </Box>

          <Flex wrap={true} style={{ backgroundColor: '#eee', width, height: 100, marginTop: 20 }}>
            {store.getState().category.categories.map((cate, index) => {
              return <CategoryButton
                key={index}
                selected={cate.id === store.getState().category.selected}
                title={cate.name}
                onPress={() => {
                  if (store.getState().category.selected !== -1) {
                    dispatch(categoryActions.select(-1))
                    dispatch(drinkItemActions.filterByTag(-1))
                  } else {
                    dispatch(categoryActions.select(cate.id))
                    dispatch(drinkItemActions.filterByTag(cate.id))
                  }
                }} />
            })}
          </Flex>
        </Box>
        <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
          {store.getState().drink.drinks.map((drink, index) => {
            return <Item handleClick={() => gotoDetail(drink.drinkID)} key={`drink ${index}`} title={drink.drinkName} price={drink.size[0].price} />
          })}
        </View>
      </ScrollView>
      <CartButton handleClick={() => gotoCart()}/>
    </View >
  )
}

HomePage.propTypes = {
  navigation: PropTypes.any
}
