import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles/Actionsheet.style'
import { Image } from 'native-base'

const Actionsheets = () => {
  return (
    <View >
        <View style={styles.container}>
        <Text style={styles.subHeading}>Actionsheets</Text>
        <View style={styles.dateContainer}>
            <Text style={styles.dateText}>January 28, 2024</Text>
        </View>
        <Text style={styles.heading}>Revise Chapter 07</Text>
        <Text style={styles.contentText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


        </Text>

        <Text style={styles.contentText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


        </Text>

        <Image source={require('../assets/images/image.png')} marginTop={'8'}></Image>

        </View>
    </View>
  )
}

export default Actionsheets