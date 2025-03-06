import React, { useState } from 'react';
import { View, TextInput , TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text, Box } from 'native-base';
import CustomButton from '../components/CustomButton';
import styles from '../styles/Loginscreen.style';
import { login } from '../services/authservices';
import { showToast } from '../components/CustomToast';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {jwtDecode} from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Loginscreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePress = async () => {
    if (!email.trim() || !password.trim()) {
      return showToast('error', 'Email and Password are required');
    }

    if (!validateEmail(email)) {
      return showToast('error', 'Enter a valid email address');
    }

    try {
      setIsLoading(true);
      // navigation.navigate('bottomnav')

      const response = await login(email, password);
      console.log(response.data);
      showToast('success', 'Login Successful');
      console.log(response.data.token.accessToken)
      const decodedToken = jwtDecode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIyOTZhMDQ2OC00N2E4LTRiN2YtYTA0MC1kOWZjYzc3MjNiZDkiLCJlbWFpbCI6InMzQGVuZmluaXRlLmluIiwidW5pcXVlX25hbWUiOiJzMyBrdW1hciIsImF2YXRhciI6IiIsInJvbGUiOiJUZWFjaGVyIiwic2Nob29sTG9nbyI6Imh0dHBzOi8vZW5maW5pdGUtc20uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tLzYvaW1hZ2VzL2IyNDZiYTJlLWM2ZmEtNDBkOC05Y2Y3LTIyZDVkNjk5YWRkNTYzODY5OTc4OTEwNjA5NzE2Ni5qcGVnIiwic2Nob29sTmFtZSI6IkVuZmluaXRlIFNjaG9vbCIsImVuZmluaXRlc21hcnRzY2hvbGxjbGFpbXR5cGVzLXNjaG9vbGlkZW50aWZpZXIiOiI2IiwibmJmIjoxNzQwMjM4MDc4LCJleHAiOjE3NDAyNDUyNzgsImlhdCI6MTc0MDIzODA3OCwiaXNzIjoiRW5maW5pdGUgU21hcnQgU2Nob29sIiwiYXVkIjoiRW5maW5pdGUgU21hcnQgU2Nob29sIFVzZXJzIn0.d7OYCurIGYYfjkSVQakkIdC7NpFoECWLUrDW_6HqGw8");
      console.log(decodedToken.nameid,'hgh')
      AsyncStorage.setItem('Userid',decodedToken.nameid)

      navigation.navigate('bottomnav')
      // Navigate to another screen after successful login
    } catch (error) {
      console.error(error);
      // showToast('error', error?.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#ADD8E6', '#87CEFA']} style={styles.gradientContainer}>
      <View style={styles.container}>
        <Box style={styles.upperContainer}>
          <Text fontSize={'2xl'}>Welcome to</Text>
          <Text fontSize={'2xl'} color={'#007BFF'}>Enfinite Smart School</Text>
        </Box>
        <TextInput
          placeholder="Enter email"
          value={email}
          onChangeText={(text)=>setEmail(text)}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Enter password"
                  value={password}
                  onChangeText={(text)=>setPassword(text)}
                  style={styles.passwordInput}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
                  <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="#000000sss" />
                </TouchableOpacity>
              </View>
        <Text style={styles.forgot}>Forgot password?</Text>
        <CustomButton title={'Login'} marginTop={'9'} width={'100%'} onPress={handlePress} isLoading={isLoading} />
      </View>
    </LinearGradient>
  );
};

export default Loginscreen;