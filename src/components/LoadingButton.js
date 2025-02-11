import { View  } from 'react-native'
import React from 'react'
import { Button, Text } from 'native-base';

const LoadingButton = ({ title,  ...props }) => {
  return (
    <Button
    isLoading 
    isLoadingText={title}
    width="90%"
    borderRadius="md"
    marginX="auto"
    {...props} // Spreading additional props to allow for more customization
    style={{height:56,borderRadius:15}}
    color={'#000000'}
    _loading={{
        bg: "rgba(233, 64, 87, 0.6)",
        _text: {
          color: "#000000"
        }
      }} _spinner={{
        color: "black"
      }} 
  >
    <Text
      fontSize="xl"
      fontWeight="medium"
      color="#000000"
      marginY="1"
    >
      Button
    </Text>
  </Button>
  )
}

export default LoadingButton