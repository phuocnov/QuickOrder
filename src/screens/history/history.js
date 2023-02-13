import { Flex } from '@react-native-material/core'
import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function HistoryPage () {
  return (
    <Flex wrap={true}>
      <Text style={styles.item}>TEXT</Text>
      <Text style={styles.item}>TEXT</Text>
      <Text style={styles.item}>TEXT</Text>
      <Text style={styles.item}>TEXT</Text>
      <Text style={styles.item}>TEXT</Text>
      <Text style={styles.item}>TEXT</Text>
      <Text style={styles.item}>TEXT</Text>
      <Text style={styles.item}>TEXT</Text>
      <Text style={styles.item}>TEXT</Text>
      <Text style={styles.item}>TEXT</Text>
      <Text style={styles.item}>TEXT</Text>
      <Text style={styles.item}>TEXT</Text>
      <Text style={styles.item}>TEXT</Text>
    </Flex>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
    width: 100,
    flex: 0.5
  }
})
