import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import Stacknavigator from './src/navigation/Stacknavigator'
import Toast from 'react-native-toast-message';



const App = () => {
  return (
  <NativeBaseProvider>
    <Stacknavigator/>
    <Toast/>

  </NativeBaseProvider>
  )
}

export default App