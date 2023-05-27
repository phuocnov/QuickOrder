import { Box, Button, Divider, Flex, Spacer, Text } from '@react-native-material/core'
import React from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'
export default function OrderItem ({ data, cancleOrder, recivedOrder }) {
  const { width } = useWindowDimensions()
  return <Box style={{ width, backgroundColor: '#fff', marginTop: 15, padding: 10 }}>
    <Flex direction='row' style={{ alignItems: 'center', marginVertical: 10 }}>
      <Text style={data.status === 'Completed' ? style.recivedLabel : style.failedLabel}>{data.status === 'Preparing' ? 'Đang chuẩn bị' : 'Đang giao hàng'}</Text>
      <Spacer />
      <Text style={style.date}>{data.orderdate}</Text>
    </Flex>
    <Flex style={{ alignItems: 'center', marginVertical: 10 }} direction="row">
      <Ionicons name='home-outline' style={style.icon} />
      <Text style={style.location}>97 Man thiện, Hiệp Phú, Quận 9, tp Thủ Đức </Text>
    </Flex>
    <Divider style={{ height: 3 }} />
    <Flex style={{ alignItems: 'center', marginVertical: 10 }} direction="row">
      <Ionicons name='location-outline' style={style.icon} />
      <Text style={style.location} numberOfLines={1}>{data.address}</Text>
    </Flex>
    <Flex direction='row' style={{}}>
      <Text style={{ fontSize: 14, width: width * 0.7 }}>{data.orderdetail}</Text>
      <Text style={{ color: '#F6AC31', fontFamily: 'Roboto_700Bold', alignSelf: 'center', justifyContent: 'center', textAlign: 'center' }}>{data.totalprice + ' VND'}</Text>
    </Flex>

    <Flex direction='row'>
      <Spacer/>
      <Button
      style={{ color: '#fff', backgroundColor: '#F6AC31', width: 175, marginTop: 10 }}
      title={data.status === 'Preparing' ? 'Huỷ đơn hàng' : 'Đã nhận hàng'}
      onPress={() => {
        if (data.status === 'Preparing') {
          cancleOrder()
        } else {
          recivedOrder()
        }
      }}/>
    </Flex>
  </Box>
}

const style = StyleSheet.create({
  recivedLabel: {
    backgroundColor: '#FFEFD4',
    color: '#F6AC31',
    padding: 5,
    borderRadius: 5
  },
  failedLabel: {
    backgroundColor: '#FFEFD4',
    color: '#F6AC31',
    padding: 5,
    borderRadius: 5
  },
  date: {
    color: '#888'
  },
  icon: {
    fontSize: 24,
    color: '#888'
  },
  location: {
    color: '#272727',
    fontSize: 16
  }
})

OrderItem.propTypes = {
  data: PropTypes.object,
  cancleOrder: PropTypes.func,
  recivedOrder: PropTypes.func
}
