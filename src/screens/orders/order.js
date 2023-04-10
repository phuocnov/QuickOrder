import React from 'react'
import { View, ScrollView, useWindowDimensions } from 'react-native'
import OrderItem from '../../components/order/orderItem'

export default function OrderPage () {
  const { width, height } = useWindowDimensions()

  const orders = [
    {
      status: 'Prepare',
      address: '123/89 Võ Văn Ngân, TP Thủ Đức',
      orderdate: 'Mon, 20 Feb 2023 17:44:01 GMT',
      totalprice: '200000',
      orderdetail: 'Trà sữa thập cẩm(x2), Size L, Cafe sữa(X1), Size S, Topping: Trân Châu Trắng, Thạch dừa'
    },
    {
      status: 'Delivering',
      address: '97 Man Thiện, phường Hiệp Phú, thành phố Thủ Đức, thành phố Hồ Chí Minh',
      orderdate: 'Wed, 15 Mar 2023 10:02:40 GMT',
      totalprice: '200000',
      orderdetail: 'Trà sữa thập cẩm(x2), Size L, Cafe sữa(X1), Size S, Topping: Trân Châu Trắng, Thạch dừa'
    }
  ]

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width, height, backgroundColor: '#ccc' }}>
      <ScrollView>
        {orders.map((order, index) => {
          return <OrderItem data={order} key={index}/>
        })}
      </ScrollView>
    </View>
  )
}
