import { Ionicons } from '@expo/vector-icons'
import { Box, Wrap } from '@react-native-material/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, useWindowDimensions, Image, ScrollView } from 'react-native'
import CategoryButton from '../../components/categoryButton'
import Item from '../../components/item'
import MySearchBar from '../../components/searchBar'
import { Flex } from 'react-native-flex-layout'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { categoryActions } from '../../redux/category'
import store from '../../redux/store'
import { drinkItemActions } from '../../redux/drinkItem'
import CartButton from '../../components/cartButton'
import storage from '../../helper/storage'
import { cartActions } from '../../redux/cart'
import product from '../../api/product'

export default function HomePage ({ navigation }) {
  const { width, height } = useWindowDimensions()
  const dispatch = useDispatch()
  const [cateSelected, setCateSelected] = useState(-1)
  const [drinkList, setDrinkList] = useState([])
  const [categories, setCategories] = useState([])
  store.subscribe(() => {
    setDrinkList(store.getState().drink.drinks)
    setCateSelected(store.getState().category.selected)
    setCategories(store.getState().category.categories)
  })
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

  async function fetchDrink () {
    product.getProducts().then((res) => {
      const data = res.data.data
      dispatch(drinkItemActions.setDrink(data))
    })
  }

  async function fetchCategories () {
    product.getCategories().then((res) => {
      const data = res.data.categories
      dispatch(categoryActions.set(data))
    })
  }
  useEffect(() => {
    fetchDrink()
    fetchCategories()
  }, [])

  useEffect(() => {
  }, [cateSelected, drinkList])

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
            {categories.map((cate, index) => {
              return <CategoryButton
                key={index}
                selected={cate.categoryid === store.getState().category.selected}
                title={cate.categoryname}
                onPress={() => {
                  if (store.getState().category.selected !== -1) {
                    dispatch(categoryActions.select(-1))
                    dispatch(drinkItemActions.filterByTag(-1))
                  } else {
                    dispatch(categoryActions.select(cate.categoryid))
                    dispatch(drinkItemActions.filterByTag(cate.categoryid))
                  }
                }} />
            })}
          </Flex>
        </Box>
        {drinkList.length > 0
          ? <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
            {drinkList.map((drink, index) => {
              return <Item
                handleClick={() => gotoDetail(drink.drinkID)}
                key={`drink ${index}`}
                title={drink.drinkname}
                price={parseInt(drink.price)}
                imgsrc={drink.drinkimage}/>
            })}
          </View>
          : <></>}
      </ScrollView>
      <CartButton handleClick={() => gotoCart()} />
    </View >
  )
}

HomePage.propTypes = {
  navigation: PropTypes.any
}
