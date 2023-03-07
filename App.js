import React, { useEffect } from 'react'
import store from './src/redux/store'
import { Provider } from 'react-redux'
import MyNavigator from './src/navigator/navigator'
import * as SplashScreen from 'expo-splash-screen'
import FontLoader from './src/components/fontLoader'

SplashScreen.preventAutoHideAsync()
export default function App () {
  const fontsLoaded = FontLoader()

  useEffect(() => {
    if (fontsLoaded) {
      // Hide the splash screen after the fonts have loaded and the
      // UI is ready.
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])
  // Prevent rendering until the font has loaded
  if (!fontsLoaded) {
    return null
  }
  return (
    <Provider store={store}>
      <MyNavigator />
    </Provider>
  )
}
