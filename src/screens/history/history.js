// import { Text } from '@react-native-material/core'
import React, { useState, useEffect } from 'react'
import { ScrollView, useWindowDimensions, View } from 'react-native'
import HistoryItem from '../../components/history/historyItem'
import order from '../../api/order'

export default function HistoryPage (props) {
  // const orders = [
  //   {
  //     status: 'Completed',
  //     address: '123/89 Võ Văn Ngân, TP Thủ Đức',
  //     orderdate: 'Mon, 20 Feb 2023 17:44:01 GMT',
  //     totalprice: '200000',
  //     orderdetail: 'Trà sữa thập cẩm(x2), Size L, Cafe sữa(X1), Size S, Topping: Trân Châu Trắng, Thạch dừa'
  //   },
  //   {
  //     status: 'Cancelled',
  //     address: '97 Man Thiện, phường Hiệp Phú, thành phố Thủ Đức, thành phố Hồ Chí Minh',
  //     orderdate: 'Wed, 15 Mar 2023 10:02:40 GMT',
  //     totalprice: '200000',
  //     orderdetail: 'Trà sữa thập cẩm(x2), Size L, Cafe sữa(X1), Size S, Topping: Trân Châu Trắng, Thạch dừa'
  //   }
  // ]
  const [orders, setOrders] = useState([])

  async function fetchOrder () {
    const data = await order.history()
    setOrders(data.data.data)
    console.log(data.data.data)
  }
  useEffect(() => {
    fetchOrder()
  }, [])

  const { width, height } = useWindowDimensions()
  return <View style={{ display: 'flex', width, height, flex: 1, backgroundColor: '#ccc' }}>
    <ScrollView>
      {
      orders.length > 0
        ? orders.map((order, index) => {
          return <HistoryItem data={order} key={index}/>
        })
        : <></>}
    </ScrollView>
  </View>
};
