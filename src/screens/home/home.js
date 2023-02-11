import { Ionicons } from '@expo/vector-icons'
import { Flex, Box, Wrap } from '@react-native-material/core'
import React from 'react'
import { StyleSheet, View, Text, useWindowDimensions, Image } from 'react-native'
import MySearchBar from '../../components/searchBar'

export default function HomePage () {
  const { width } = useWindowDimensions()
  const style = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    header: {
      backgroundColor: '#fff',
      height: 420,
      width
    },
    headerText: {
      fontSize: 12,
      color: '#888',
      fontFamily: 'Roboto_400Regular'
    }
  })

  return (
    <View>
      <Flex>
        <Box style={style.header}>
          <Image style={{ height: 230 }} source={require('../../../assets/image/banner.jpg')} />
          <Box style={{ paddingLeft: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', fontFamily: 'Roboto_700Bold', marginBottom: 20, marginTop: 20 }}>DIAMON MILKTEA</Text>
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
            <MySearchBar/>
          </Box>
        </Box>
      </Flex>
    </View>
  )
}
