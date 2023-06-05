import React, { useState, useEffect } from 'react'
import { View, ScrollView, useWindowDimensions } from 'react-native'
import OrderItem from '../../components/order/orderItem'
import order from '../../api/order'
import store from '../../redux/store'
import { orderActions } from '../../redux/order'
import { useDispatch } from 'react-redux'

export default function OrderPage () {
  const { width, height } = useWindowDimensions()
  const [orders, setOrders] = useState([])
  const dispatch = useDispatch()
  store.subscribe(() => {
    setOrders(store.getState().order.currentOrders)
    if (store.getState().order.requestFetch === true) fetchOrder()
  })

  async function fetchOrder () {
    const data = await (await order.current()).data
    dispatch(orderActions.setCurrentOrders(data.data))
    dispatch(orderActions.setRequestFetch(false))
  }
  useEffect(() => {
    if (store.getState().order.currentOrders.length === 0) {
      console.log('fetching....')
      fetchOrder()
    }
    if (orders.length === 0) {
      setOrders(store.getState().order.currentOrders)
    }
  }, [orders])

  function cancleOrder (id) {
    order.cancle(id).then(data => {
      console.log(data.status)
      if (data.status === 200) {
        dispatch(orderActions.moveCurrentToHistory(id))
      }
    })
  }

  function recivedOrder (id) {
    order.recived(id)
    dispatch(orderActions.moveCurrentToHistory(id))
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width, height, backgroundColor: '#ccc' }}>
      <ScrollView>
        {
          orders.map((ord, index) => {
            return <OrderItem
            data={ord}
            key={index}
            cancleOrder={() => { cancleOrder(ord.orderid) }}
            recivedOrder={() => { recivedOrder(ord.orderid) }}/>
          })
        }
      </ScrollView>
    </View>
  )
}
