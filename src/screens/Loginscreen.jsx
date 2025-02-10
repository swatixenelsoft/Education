import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';  // Import gradient
import { Button, Text } from 'native-base';
import CustomButton from '../components/CustomButton';
import { Box } from 'native-base';
import styles from '../styles/Loginscreen.style';

const Loginscreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient 
      colors={['#ADD8E6', '#87CEFA']} // Light blue gradient
      style={styles.gradientContainer}
    >
      <View style={styles.container}>
        <Box style={styles.upperContainer}>
        <Text fontSize={'2xl'}>Welcome to</Text>
        <Text fontSize={'2xl'} color={'#007BFF'}>Enfinite Smart School</Text>

        </Box>
        <TextInput
          placeholder="Enter email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <Text style={styles.forgot}>Forgot password?</Text>
        <CustomButton title={'Login'} marginTop={'9'} width={'100%'} onPress={()=>navigation.navigate('forgot')}/>
      </View>
    </LinearGradient>
  );
};



export default Loginscreen;
