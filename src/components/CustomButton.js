import React from 'react';
import { Button, Text } from 'native-base';

const CustomButton = ({ title, onPress, ...props }) => {
  return (
    <Button
    onPress={() => onPress()}  // Ensure no event leakage here
    width="90%"
      backgroundColor="#343A40"
      borderRadius="md"
      marginX="auto"
      {...props} // Spreading additional props to allow for more customization
    >
      <Text
        fontSize="md"
        fontWeight="medium"
        color="#FFFFFF"
      >
        {title}
      </Text>
    </Button>
  );
};

export default CustomButton;
