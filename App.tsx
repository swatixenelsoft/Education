import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import Stacknavigator from './src/navigation/Stacknavigator'


const App = () => {
  return (
  <NativeBaseProvider>
    <Stacknavigator/>
  </NativeBaseProvider>
  )
}

export default App