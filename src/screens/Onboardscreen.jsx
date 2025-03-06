import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/Onboard.styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Box } from 'native-base';
import { data } from '../utils/data';

const Onboardscreen = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);
  const navigation = useNavigation(); // Get navigation instance

  // Function to move to the next slide or navigate
  const nextSlide = () => {
    if (activeSlide < data.length - 1) {
      carouselRef.current?.snapToItem(activeSlide + 1);
    } else {
      navigation.navigate('Loginscreen'); // Replace with your screen name
    }
  };

  // Render each carousel item
  const renderItem = ({ item }) => (
    <View>
      {item.image}
      <View style={styles.contentContainer}>
        <Text
          style={[

          ]}
        >
          {item.text1}
        </Text>
        <Text
          style={[
          
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Box style={[styles.upperMainContainer]}>
        {/* Carousel Component */}
        <Carousel
          ref={carouselRef}
          data={data}
          renderItem={renderItem}
          sliderWidth={styles.sliderWidth} // Width of the carousel viewport
          itemWidth={styles.itemWidth} // Width of each item
          onSnapToItem={(index) => setActiveSlide(index)} // Update active slide
          loop={false} // Disable looping
          style={{borderWidth:1}}
        />

        {/* Pagination Indicator */}
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.carouselPagination}
          dotStyle={styles.carouselPaginationdot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />

        {/* Next Button */}
        {/* <TouchableOpacity style={styles.nextButton} onPress={nextSlide}>
          <Text style={styles.nextButtonText}>
            {activeSlide === data.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity> */}

     
      </Box>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <Text >SKIP TOUR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={nextSlide}>
            <Text >NEXT</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default Onboardscreen;
