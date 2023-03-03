import { Box, Button, Divider, Flex, Spacer, Text } from '@react-native-material/core'
import React from 'react'
import { useWindowDimensions, StyleSheet } from 'react-native'

export default function OrderFooter () {
  const { width } = useWindowDimensions()
  return <Box style={{ position: 'absolute', width, bottom: 1, backgroundColor: '#fff', height: 250, padding: 15 }}>
    <Flex direction='row' style={{ marginBottom: 10 }}>
      <Text style={style.leftColumn}>Thanh toán</Text>
      <Spacer/>
      <Text style={style.rightColumn}>Thanh toán khi nhận hàng</Text>
    </Flex>
    <Divider style={{ height: 2 }}/>
    <Text style={{ ...style.leftColumn, ...{ marginTop: 10 } }}>Hoá đơn</Text>
    <Flex direction='row'style={{ marginTop: 10 }}>
      <Text style={style.leftColumn}>Tạm tính</Text>
      <Spacer/>
      <Text style={style.rightColumn}>20,000VNĐ</Text>
    </Flex>
    <Flex direction='row' style={{ marginTop: 10 }}>
      <Text style={style.leftColumn}>Khuyến mãi</Text>
      <Spacer/>
      <Text style={style.rightColumn}>0VNĐ</Text>
    </Flex>
    <Flex direction='row' style={{ marginTop: 10 }}>
      <Text style={style.leftColumn}>Phí giao hàng</Text>
      <Spacer/>
      <Text style={style.rightColumn}>20,000VNĐ</Text>
    </Flex>
    <Flex direction='row' style={{ marginTop: 10 }}>
      <Text style={style.leftColumn}>Tổng tiền</Text>
      <Spacer/>
      <Text style={style.rightColumn}>20,000VNĐ</Text>
    </Flex>

    <Button title="Xác nhận" color='#F6AB31' titleStyle={{ color: '#fff' }} style={{ marginTop: 10 }}/>
  </Box>
}

const style = StyleSheet.create({
  leftColumn: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
    color: '#272727'
  },
  rightColumn: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 14,
    color: '#F6AB31'
  }
})
