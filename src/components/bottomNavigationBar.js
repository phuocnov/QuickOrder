import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'

const IconList = ({ focused, itemIndex }) => {
  const nameList = ['home-outline', 'time-outline', 'receipt-outline', 'person-outline']
  return <Ionicons
    name={nameList[itemIndex]}
    size={20}
    color={focused ? '#F6AC31' : '#aaa'} />
}
IconList.propTypes = {
  focused: PropTypes.bool,
  itemIndex: PropTypes.number
}

export default function MyTabBar ({ state, descriptors, navigation }) {
  return (
    <View style={style.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true })
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={style.button}
            key={index}
          >
            <IconList focused={isFocused} itemIndex={index}></IconList>

            <Text style={isFocused ? style.focusedTextButton : style.textButton}>
              {label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60
  },
  button: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  textButton: {
    color: '#aaa'
  },
  focusedTextButton: {
    color: '#F6AC31'
  }
})

MyTabBar.propTypes = {
  state: PropTypes.any,
  descriptors: PropTypes.any,
  navigation: PropTypes.any
}
