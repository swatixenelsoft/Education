import { View, TextInput } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Box, Text, VStack, Button, Center } from 'native-base'
import styles from '../styles/Loginscreen.style'
import CustomButton from '../components/CustomButton'

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('')

  return (
    <LinearGradient colors={['#87CEEB', '#4682B4']} style={styles.gradientContainer}>
      <Center flex={1} px={4}>
        <Box style={styles.card}>
          <VStack space={4} alignItems="center">
            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              Forgot Password?
            </Text>
            <Text fontSize="sm" color="gray.600" textAlign="center">
              Please provide your email address to reset your password.
            </Text>

            {/* Custom TextInput */}
            <TextInput
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
            />
        <CustomButton title={'Login'} marginTop={'9'} width={'100%'} onPress={()=>navigation.navigate('bottomnav')}/>

          </VStack>
        </Box>
      </Center>
    </LinearGradient>
  )
}

export default ForgetPassword
