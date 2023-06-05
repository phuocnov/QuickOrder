// import { Text } from '@react-native-material/core'
import React, { useState, useEffect } from 'react'
import { ScrollView, useWindowDimensions, View } from 'react-native'
import HistoryItem from '../../components/history/historyItem'
import order from '../../api/order'
import { useDispatch } from 'react-redux'
import { orderActions } from '../../redux/order'
import store from '../../redux/store'

export default function HistoryPage (props) {
  const [orders, setOrders] = useState([])
  const dispatch = useDispatch()

  store.subscribe(() => {
    setOrders(store.getState().order.historyOrders)
    if (store.getState().order.requestFetch === true) fetchOrder()
  })

  async function fetchOrder () {
    const data = await order.history()
    console.log(data.data.data)
    dispatch(orderActions.setHistoryOrders(data.data.data))
    dispatch(orderActions.setRequestFetch(false))
  }
  useEffect(() => {
    if (store.getState().order.historyOrders.length === 0) {
      console.log('fetching....')
      fetchOrder()
    }
    if (orders.length === 0) {
      setOrders(store.getState().order.historyOrders)
    }
  }, [orders])

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
