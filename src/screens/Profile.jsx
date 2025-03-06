import { View, Text , TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Headerbg from '../assets/Header-bg.svg'; 
import styles from '../styles/Profiles.styles';
import ArrowBack from '../assets/icons/Arrow-back.svg'
import Userimage from '../assets/images/User-img.svg'
import { FlatList, ScrollView } from 'native-base';
import Educationbg from '../assets/images/Education_bg.svg'
import FatherBg from '../assets/images/Father-Bg.svg'
import moment from 'moment';
import { Image } from 'native-base';

const Profile = ({navigation,route}) => {

        const [selectedId, setSelectedId] = useState(null);
        const {userData} = route.params
        const studentData = userData
        const tabs = Object.keys(studentData);
        const [selectedTab, setSelectedTab] = useState(tabs[0]); 


        console.log(studentData , 'route')


     

    const weeks = [
        { id: 1, day: "Basic" },
        { id: 2, day: "Parental" },
        { id: 3, day: "Medical" },
        { id: 4, day: "Bank" },
        { id: 5, day: "Angular" },
        { id: 6, day: "Flutter" },
      ];

      const Education = {
        name: "John Doe",
        age: 20,
        gender: "Male",
        studentID: "S12345",
        course: "Computer Science",
        year: "2nd Year",
        email: "johndoe@example.com",
        phone: "9876543210",
        city: "New York",
        postalCode: "10001",
        street: "123 Main Street"
      };

      const father = {
        name: "Robert Doe",
        age: 45,
        occupation: "Engineer",
        phone: "9876543211",
        email: "robertdoe@example.com",
     };
    

    


     const renderTab = ({ item }) => (
      <TouchableOpacity
        style={[
          styles.weekContainer,
          selectedTab === item && styles.selected,
        ]}
        onPress={() => setSelectedTab(item)}
      >
        <Text style={[styles.weekText, selectedTab === item && styles.selectedText]}>
          {item.replace("Details", "").toUpperCase()}
        </Text>
      </TouchableOpacity>
    );

    const renderDetails = ({ item }) => (
      <View style={[styles.mFlexContainer,{marginTop:12}]}>
        <Text style={styles.HeadingText}>{item.label}:</Text>
        <Text style={styles.basicText}>{item.value}</Text>
      </View>
    );

    const selectedData = studentData[selectedTab] || {};
    const dataArray = Object.entries(selectedData).map(([key, value]) => ({
      label: key
        .replace(/([A-Z])/g, " $1") // Convert camelCase to spaced format
        .trim()
        .replace(/\b\w/g, (char) => char.toUpperCase()), // Capitalize first letter and after space
      value: key.includes("dob") ? moment(value).format("DD/MM/YYYY") : value,
    }));


  return (
    <ScrollView>
  <View style={{width:'100%'}}>
        <Headerbg height={300} width={'100%'} style={{marginTop:-35}}/>

      <View style={[styles.mContentContainer,{position:'absolute',left:'5%'}]}>

<TouchableOpacity onPress={()=>navigation.goBack()}>
      <ArrowBack style={{marginTop:12}}/>
      </TouchableOpacity>
      <View style={styles.flexContainer}>
                    <Image source={{uri:userData?.basic?.studentImage}} width={'24'} height={'24'} borderRadius={'full'} borderWidth={'1'} borderColor={'#FFFFFF'}></Image>

        {/* <Userimage/> */}
        <View>
            <Text style={styles.nameText}>{studentData?.basic?.firstName} {studentData?.basic?.lastName}</Text>
            <View style={styles.emailContainer}>
            <Text style={styles.emailText}>{studentData?.basic?.email}</Text>

            </View>
        </View>

      </View>

      <FlatList
      data={tabs}
      keyExtractor={(item)=>item.id}
      renderItem={renderTab}
      horizontal
      marginTop={'6'}/>
      </View>

      <FlatList
        data={dataArray}
        keyExtractor={(item) => item.label}
        renderItem={renderDetails}
        contentContainerStyle={styles.contentContainer}
      />

   
    
     


      <View>

      </View>

      {/* Content */}
      {/* <View style={styles.Header}>
<Hambg style={{marginTop:20}}/>

<Text style={styles.heading}>iDairy</Text>
<Text style={styles.subContent}>Get your Homework Done!</Text>



<FlatList
data={weeks}
keyExtractor={(item)=>item.id}
renderItem={renderItem}
horizontal
marginTop={'6'}/>


<View style={styles.calendarContainer}>
<Calendar/>
    <Text style={styles.dateText}>January 28, 2024</Text>

</View>


      </View>
      
<FlatList data={subjects} keyExtractor={(item)=>item.id}
    renderItem={renderSubject}
    numColumns={2}
/>     */}
      </View>    </ScrollView>
  )
}

export default Profile