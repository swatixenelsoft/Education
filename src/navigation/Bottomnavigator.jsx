import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeIcon from '../assets/images/Homeicon.svg'
import Home from '../screens/Home'
import Library from '../screens/Library'
import LibraryIcon from '../assets/images/library.svg'
import Idiary from '../screens/Idiary' 
import Account from '../screens/Account'



const Bottomnavigator = () => {


    const BottomTab = createBottomTabNavigator()


  return (

    <BottomTab.Navigator screenOptions={{
      tabBarActiveTintColor:'rgba(233, 64, 87, 1)',
      tabBarStyle: { backgroundColor:'rgba(243, 243, 243, 1)' },
    
    }}>
<BottomTab.Screen
  name="Home"
  component={Home}
  options={{
    headerShown: false,
    tabBarIcon: ({size,color}) => (
      <HomeIcon width={size} height={size} fill={color} />
    ),
  }}
/>

<BottomTab.Screen
  name="Idiary"
  component={Idiary}
  options={{
    headerShown: false,
    tabBarIcon: ({size,color}) => (
      <HomeIcon width={size} height={size} fill={color} />
    ),
  }}
/>










    </BottomTab.Navigator>
  )
}

export default Bottomnavigator