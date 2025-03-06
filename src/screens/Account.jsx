import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Account.styles'
import AccountBG from '../assets/images/Account-Bg.svg' 
import User from '../assets/icons/User.svg'
import Arrow from '../assets/icons/Arrow.svg'
import Rupee from '../assets/icons/Rupee.svg' 
import Calendar from '../assets/icons/Calendar.svg'
import ArrowBack from '../assets/icons/Arrow-back.svg'
import Harsh from '../assets/images/Harsh-user.svg'
import { getUserData } from '../services/authservices'
import useUserId from '../hooks/useUserid'
import { Box, Image } from 'native-base'

const Account = ({navigation}) => {

    const userId = useUserId()
    const [isLoading , setIsLoading] = useState(false)
    const [userImage , setUserImage] = useState('')
    const [userData , setuserData] = useState('')
    const [attendanceData , setAttendanceData] = useState([])
    



    const get_User_Data = async()=>{
        setIsLoading(true)
        try{
            const response = await getUserData(userId)
            console.log(response.data.data?.profile?.basic?.studentImage)
            setuserData(response.data.data.profile)
            setAttendanceData(response?.data?.data)
            


        }
        catch(error){
            console.error(error)
            throw error
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        get_User_Data()
    },[userId])

    if(isLoading){

        return  (<Box width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <ActivityIndicator size="large" color="rgba(11, 112, 222, 1)"/>
        </Box>)
      }


  return (
    <View style={styles.container}>
        <AccountBG width={'100%'} style={{position:'absolute',top:0,left:0}}/>
        <View style={styles.profileImageContainer}>
            <Image source={{uri:userData?.basic?.studentImage}} width={'24'} height={'24'} borderRadius={'full'} borderWidth={'1'}></Image>
            {/* <Harsh/> */}
        <Text style={styles.profileName}>{userData?.basic?.firstName} {userData?.basic?.lastName}</Text>
            <View style={styles.IDcontainer}>
                <Text style={{color:'rgba(38, 136, 243, 1)'}}>ID: {userData?.basic?.uid}</Text>
            
            </View>

        </View>
        <View style={styles.contentContainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>

<View style={[styles.flexContainer,{marginTop:24}]}>
    <ArrowBack/>
            <Text style={styles.headerContent}>Account</Text>
            </View>
            </TouchableOpacity>

<View style={styles.mainContainer}>

    <TouchableOpacity onPress={()=>navigation.navigate('Profile',{userData:userData})}>
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

<TouchableOpacity onPress={()=>navigation.navigate('Attendance',{attendanceData:attendanceData})}>
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