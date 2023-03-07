import AsyncStorage from '@react-native-async-storage/async-storage'

export default {
  get: async (key) => {
    const value = await AsyncStorage.getItem(key)
    return value === null ? null : JSON.parse(value)
  },

  getAllKeys: async () => {
    let keys = []
    keys = await AsyncStorage.getAllKeys()
    return keys
  },

  set: async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  },

  remove: async (key) => {
    await AsyncStorage.removeItem(key)
  },

  clear: async () => {
    await AsyncStorage.clear()
  },
  clearWithout: async (args) => {
    const allKeys = await AsyncStorage.getAllKeys()
    for (const key of allKeys) {
      if (!args.includes(key)) {
        await AsyncStorage.removeItem(key)
      }
    }
  }
}
