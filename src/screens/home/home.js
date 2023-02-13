import { Ionicons } from '@expo/vector-icons'
import { Box, Wrap } from '@react-native-material/core'
import React from 'react'
import { StyleSheet, View, Text, useWindowDimensions, Image, ScrollView } from 'react-native'
import CategoryButton from '../../components/categoryButton'
import Item from '../../components/item'
import MySearchBar from '../../components/searchBar'
import { Flex } from 'react-native-flex-layout'
import PropTypes from 'prop-types'

export default function HomePage ({ navigation }) {
  const { width, height } = useWindowDimensions()
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
  function gotoDetail () {
    navigation.navigate('product-detail')
  }
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
            <CategoryButton selected={true} />
            <CategoryButton selected={false} />
            <CategoryButton selected={false} />
            <CategoryButton selected={false} />
            <CategoryButton selected={false} />
            <CategoryButton selected={false} />
            <CategoryButton selected={false} />
            <CategoryButton selected={false} />
          </Flex>
        </Box>
        <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
          <Item handleClick={gotoDetail}/>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </View>
      </ScrollView>
    </View >
  )
}

HomePage.propTypes = {
  navigation: PropTypes.any
}
