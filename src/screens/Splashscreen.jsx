import React, { useEffect, useState } from 'react';
import { View, StyleSheet , Text} from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, withDelay, runOnJS } from 'react-native-reanimated';


const Splashscreen = ({ navigation }) => {

  console.log("opened")

  const [animationComplete, setAnimationComplete] = useState(false); // Track animation completion

  const scaleValue = useSharedValue(0); // Initial scale
  const opacityValue = useSharedValue(0); // Initial opacity


  // Check authentication status first


  // Animation effect
  useEffect(() => {
    // Start the zoom-in animation
    scaleValue.value = withTiming(1, { duration: 1500, easing: Easing.out(Easing.ease) });
    opacityValue.value = withTiming(1, { duration: 1500, easing: Easing.ease }, () => {
      // Set animationComplete to true once the animation finishes
      opacityValue.value = withDelay(500, withTiming(1, { duration: 0 }, () => {
        runOnJS(setAnimationComplete)(true); // Mark animation as complete
      }));
    });
  }, [scaleValue, opacityValue]);

  // Combined useEffect to handle navigation once both conditions are met
  useEffect(() => {
    if (animationComplete) {
      handleNavigation();
    }
  }, [ animationComplete]);

  const handleNavigation = () => {
   navigation.navigate('Loginscreen')
  };


  // Animated styles for the logo (scale and opacity)
  const animatedLogoStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleValue.value }],
      opacity: opacityValue.value,
    };
  });

  return (
    <View style={styles.container}>
      {/* Animated Logo */}
      <Animated.View style={[styles.logoContainer, animatedLogoStyle]}>
        <Text style={{fontSize:18}}>Education App</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set background color
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default Splashscreen;
