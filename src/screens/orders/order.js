import React, { useState, useEffect } from 'react'
import { View, ScrollView, useWindowDimensions } from 'react-native'
import OrderItem from '../../components/order/orderItem'
import order from '../../api/order'

export default function OrderPage () {
  const { width, height } = useWindowDimensions()

  const [orders, setOrders] = useState([])

  async function fetchOrder () {
    const data = await order.current()
    setOrders(data.data.data)
    console.log(orders)
  }
  useEffect(() => {
    fetchOrder()
  }, [])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width, height, backgroundColor: '#ccc' }}>
      <ScrollView>
        {
          orders.map((ord, index) => {
            return <OrderItem
            data={ord}
            key={index}
            cancleOrder={() => { order.cancle(ord.orderid) }}
            recivedOrder={() => { order.recived(ord.orderid) }}/>
          })
        }
      </ScrollView>
    </View>
  )
}
