// import { Text } from '@react-native-material/core'
import React from 'react'
import { ScrollView, useWindowDimensions, View } from 'react-native'
import HistoryItem from '../../components/history/historyItem'

export default function HistoryPage (props) {
  const orders = [
    {
      status: 'Completed',
      address: '123/89 Võ Văn Ngân, TP Thủ Đức',
      orderdate: 'Mon, 20 Feb 2023 17:44:01 GMT',
      totalprice: '200000',
      orderdetail: 'Trà sữa thập cẩm(x2), Size L, Cafe sữa(X1), Size S, Topping: Trân Châu Trắng, Thạch dừa'
    },
    {
      status: 'Cancelled',
      address: '97 Man Thiện, phường Hiệp Phú, thành phố Thủ Đức, thành phố Hồ Chí Minh',
      orderdate: 'Wed, 15 Mar 2023 10:02:40 GMT',
      totalprice: '200000',
      orderdetail: 'Trà sữa thập cẩm(x2), Size L, Cafe sữa(X1), Size S, Topping: Trân Châu Trắng, Thạch dừa'
    }
  ]

  const { width, height } = useWindowDimensions()
  return <View style={{ display: 'flex', width, height, flex: 1, backgroundColor: '#ccc' }}>
    <ScrollView>
      {orders.map((order, index) => {
        return <HistoryItem data={order} key={index}/>
      })}
    </ScrollView>
  </View>
};
