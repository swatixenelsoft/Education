import React from 'react';
import { Input } from 'native-base';

const CustomInput = ({ placeholder, value, onChangeText }) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      borderWidth={1} // Explicit border width
      borderColor={'black'} // Define border color
      borderRadius={8} // Use a specific number
      _focus={{ borderColor: 'black', bg: 'white' }}
      width="90%"
    />
  );
};

export default CustomInput;
