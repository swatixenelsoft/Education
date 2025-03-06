import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splashscreen from '../screens/Splashscreen'
import Bottomnavigator from './Bottomnavigator'
import Loginscreen from '../screens/Loginscreen'
import Forgetpassword from '../screens/Forgetpassword'
import Account from '../screens/Account'
import Profile from '../screens/Profile'
import Attendance from '../screens/Attendance'
import Fees from '../screens/Fees'


const AuthNavigator = () => {

const AuthStack = createStackNavigator()

  return (
    <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen name='Splash' component={Splashscreen} options={{headerShown:false}}></AuthStack.Screen>
            <AuthStack.Screen name='Loginscreen' component={Loginscreen} options={{headerShown:false}}></AuthStack.Screen>
            <AuthStack.Screen name='forgot' component={Forgetpassword} options={{headerShown:false}}></AuthStack.Screen>
            <AuthStack.Screen name='bottomnav' component={Bottomnavigator} options={{headerShown:false}}></AuthStack.Screen>
            <AuthStack.Screen name='Account' component={Account} options={{headerShown:false}}>        

            </AuthStack.Screen>
            
            <AuthStack.Screen name='Profile' component={Profile} options={{headerShown:false}}>  
                         

</AuthStack.Screen>
<AuthStack.Screen name='Attendance' component={Attendance} options={{headerShown:false}}></AuthStack.Screen>    
<AuthStack.Screen name='Fees' component={Fees} options={{headerShown:false}}></AuthStack.Screen>  
{/* <AuthStack.Screen name='Onboard' component={Onboardscreen} options={{headerShown:false}}>        
</AuthStack.Screen> */}

        </AuthStack.Navigator>
        </NavigationContainer>
        
  )
}

export default AuthNavigator