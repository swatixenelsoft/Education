import React, { useState } from 'react';
import { View, TextInput , TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text, Box } from 'native-base';
import CustomButton from '../components/CustomButton';
import styles from '../styles/Loginscreen.style';
import { login } from '../services/authservices';
import { showToast } from '../components/CustomToast';
import Ionicons from 'react-native-vector-icons/Ionicons'

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
      const response = await login(email, password);
      console.log(response.data);
      showToast('success', 'Login Successful');
      navigation.navigate('bottomnav',{user:response.data})
      // Navigate to another screen after successful login
    } catch (error) {
      console.error(error.response?.data);
      showToast('error', error?.response?.data?.message || 'Login failed. Please try again.');
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
                  <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
                </TouchableOpacity>
              </View>
        <Text style={styles.forgot}>Forgot password?</Text>
        <CustomButton title={'Login'} marginTop={'9'} width={'100%'} onPress={handlePress} isLoading={isLoading} />
      </View>
    </LinearGradient>
  );
};

export default Loginscreen;