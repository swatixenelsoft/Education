import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splashscreen from '../screens/Splashscreen'
import Bottomnavigator from './Bottomnavigator'
import Loginscreen from '../screens/Loginscreen'
import Forgetpassword from '../screens/Forgetpassword'


const AuthNavigator = () => {

const AuthStack = createStackNavigator()

  return (
    <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen name='Splash' component={Splashscreen} options={{headerShown:false}}></AuthStack.Screen>
            <AuthStack.Screen name='Loginscreen' component={Loginscreen} options={{headerShown:false}}></AuthStack.Screen>
            <AuthStack.Screen name='forgot' component={Forgetpassword} options={{headerShown:false}}></AuthStack.Screen>
            <AuthStack.Screen name='bottomnav' component={Bottomnavigator} options={{headerShown:false}}></AuthStack.Screen>

        </AuthStack.Navigator>
        </NavigationContainer>
        
  )
}

export default AuthNavigator