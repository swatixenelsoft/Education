import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/Account.styles'
import AccountBG from '../assets/images/Account-Bg.svg' 
import Harsh from '../assets/images/Harsh-user.svg'
import ArrowBack from '../assets/icons/Arrow-back.svg'
import { Divider } from 'native-base'








const Attendance = ({navigation}) => {
  return (
    <View>
         <AccountBG width={'100%'} style={{position:'absolute',top:0,left:0}}/>
    <View style={styles.profileImageContainer}>
        <Harsh/>
    <Text style={styles.profileName}>Harsh Kumar</Text>
        <View style={styles.IDcontainer}>
            <Text style={{color:'rgba(38, 136, 243, 1)'}}>ID: 3492203</Text>
        
        </View>

    </View>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
    <View style={[styles.flexContainer,{marginTop:24,width:'90%',marginHorizontal:'auto'}]}>
    <ArrowBack/>
            <Text style={styles.headerContent}>Attendance</Text>
            </View> 
            </TouchableOpacity>

            <View style={styles.attendanceContainer}>
                <View style={styles.flexBetweenContainer}>
                    <Text style={styles.numberText}>115</Text>
                    <Text style={styles.prsesnt}>Present</Text>
                </View>

<Divider
orientation='vertical' height={'9'}></Divider>
                <View style={styles.flexBetweenContainer}>
                    <Text style={styles.numberText}>48</Text>
                    <Text style={styles.prsesnt}>Absents</Text>
                </View>
                <Divider
orientation='vertical'  height={'9'}></Divider>
                <View style={styles.flexBetweenContainer}>
                    <Text style={styles.numberText}>340</Text>
                    <Text style={styles.prsesnt}>Total Days</Text>
                </View>
              

            </View>
    </View>
  )
}

export default Attendance