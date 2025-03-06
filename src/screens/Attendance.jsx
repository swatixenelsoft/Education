import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Divider, Image, ScrollView } from 'native-base';
import AccountBG from '../assets/images/Account-Bg.svg';
import ArrowBack from '../assets/icons/Arrow-back.svg';
import styles from '../styles/Account.styles';

const Attendance = ({ navigation, route }) => {
  const { attendanceData } = route.params;
  const [selectedDate, setSelectedDate] = useState('');
  console.log(attendanceData)

  // Present and Absent Dates (These would normally come from your API or data)
  const presentDates = attendanceData?.presentDay || [] // Days in the month (example: March 1, 2, 3)
  const absentDates = attendanceData?.absentDays || [] // Days in the month (example: March 9, 12, 13)

  const currentMonth = '2025-03'; // YYYY-MM format (March 2025 in this example)

  const formatDate = (day) => `${currentMonth}-${day < 10 ? '0' + day : day}`;

  // Define marked dates based on present and absent dates
  const markedDates = {};
  presentDates.forEach(day => {
    markedDates[formatDate(day)] = {
      selected: true,
      selectedColor: 'green', // Green for present
      selectedTextColor: 'white',
    };
  });
  absentDates.forEach(day => {
    markedDates[formatDate(day)] = {
      selected: true,
      selectedColor: 'red', // Red for absent
      selectedTextColor: 'white',
    };
  });

  return (
    <ScrollView>
      <View style={{ backgroundColor: '#F5F5F5' }}>
        <AccountBG width={'100%'} style={{ position: 'absolute', top: 0, left: 0 }} />
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: attendanceData?.user?.photo }}
            width={'24'}
            height={'24'}
            borderRadius={'full'}
            borderWidth={'1'}
            borderColor={'rgba(56, 148, 248, 1)'}
          />
          <Text style={styles.profileName}>
            {attendanceData?.profile?.basic?.firstName} {attendanceData?.profile?.basic?.lastName}
          </Text>
          <View style={styles.IDcontainer}>
            <Text style={{ color: 'rgba(38, 136, 243, 1)' }}>
              ID: {attendanceData?.profile?.basic?.uid}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={[styles.flexContainer, { marginTop: 24, width: '90%', marginHorizontal: 'auto' }]}>
            <ArrowBack />
            <Text style={styles.headerContent}>Attendance</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.attendanceContainer}>
          <View style={styles.flexBetweenContainer}>
            <Text style={styles.numberText}>{attendanceData?.totalPresent}</Text>
            <Text style={styles.prsesnt}>Present</Text>
          </View>

          <Divider orientation='vertical' height={'9'} />

          <View style={styles.flexBetweenContainer}>
            <Text style={styles.numberText}>{attendanceData?.totalAbsent}</Text>
            <Text style={styles.prsesnt}>Absents</Text>
          </View>

          <Divider orientation='vertical' height={'9'} />

          <View style={styles.flexBetweenContainer}>
            <Text style={styles.numberText}>{attendanceData?.dayInMonth}</Text>
            <Text style={styles.prsesnt}>Total Days</Text>
          </View>
        </View>

        {/* Calendar Section */}
        <View style={localStyles.calendarWrapper}>
          <Calendar
            current={'2025-03-01'}
            selected={selectedDate}
            onDayPress={(day) => setSelectedDate(day.dateString)} // Set selected date
            markedDates={markedDates} // Mark present and absent dates
            markingType={'simple'} // Simple marking
          />
       
        </View>
      </View>
    </ScrollView>
  );
};

// ** Local Styles for Calendar Wrapper & Elevation **
const localStyles = StyleSheet.create({
  calendarWrapper: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5, // **For Android Shadow**
    shadowColor: '#000', // **For iOS Shadow**
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    padding: 10,
    height: 380,
    marginBottom: 20,
  },
  calendarHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedDate: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default Attendance;
