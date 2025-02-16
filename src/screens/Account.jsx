import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/Account.styles'
import AccountBG from '../assets/images/Account-Bg.svg' 
import User from '../assets/icons/User.svg'
import Arrow from '../assets/icons/Arrow.svg'
import Rupee from '../assets/icons/Rupee.svg' 
import Calendar from '../assets/icons/Calendar.svg'
import ArrowBack from '../assets/icons/Arrow-back.svg'
import Harsh from '../assets/images/Harsh-user.svg'

const Account = ({navigation}) => {
  return (
    <View style={styles.container}>
        <AccountBG width={'100%'} style={{position:'absolute',top:0,left:0}}/>
        <View style={styles.profileImageContainer}>
            <Harsh/>
        <Text style={styles.profileName}>Harsh Kumar</Text>
            <View style={styles.IDcontainer}>
                <Text style={{color:'rgba(38, 136, 243, 1)'}}>ID: 3492203</Text>
            
            </View>

        </View>
        <View style={styles.contentContainer}>
<View style={[styles.flexContainer,{marginTop:24}]}>
    <ArrowBack/>
            <Text style={styles.headerContent}>Account</Text>
            </View>

<View style={styles.mainContainer}>

    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <View style={styles.content}>
                <View style={styles.flexSpaceBetween}>
                <View style={styles.flexContainer}>

               
                <View style={styles.iconContainer}>
                    <User/>

                </View>
                <Text style={styles.contentText}>Profile</Text>
                </View>
                <Arrow/>
                </View>

            </View>
            </TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('Attendance')}>
            <View style={styles.content}>
                <View style={styles.flexSpaceBetween}>
                <View style={styles.flexContainer}>

               
                <View style={styles.iconContainer}>
                    <Calendar/>

                </View>
                <Text style={styles.contentText}>Attendance</Text>
                </View>
                <Arrow/>
                </View>

            </View>
            </TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Fees')}>
            <View style={styles.content}>
                <View style={styles.flexSpaceBetween}>
                <View style={styles.flexContainer}>

               
                <View style={styles.iconContainer}>
                    <Rupee/>

                </View>
                <Text style={styles.contentText}>School Fees</Text>
                </View>
                <Arrow/>
                </View>

            </View>
            </TouchableOpacity>

            </View>

        </View>
    </View>
  )
}

export default Account