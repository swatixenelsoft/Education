import { View , TouchableOpacity, Dimensions,StyleSheet} from 'react-native'
import React,{useEffect, useState} from 'react'
import styles from '../styles/Home.style'
import HamIcon from '../assets/icons/Hamburger.svg'
import Bell from '../assets/icons/Bell4.svg'
import { Divider, ScrollView, Text , FlatList, Image} from 'native-base'
import Banner from '../assets/images/Banner.svg'
import M1 from '../assets/images/M1.svg'
import M2 from '../assets/images/M2.svg'
import M3 from '../assets/images/M3.svg'
import M4 from '../assets/images/M4.svg'
import Image1 from '../assets/images/image1.svg'
import Image2 from '../assets/images/image2.svg'
import Image3 from '../assets/images/image3.svg'
import Image4 from '../assets/images/image4.svg'
import Bgblue from '../assets/images/Bg-blue.svg'
import Userimage from '../assets/images/userimage.svg'
import HamW from '../assets/images/HamW.svg'
import I1 from '../assets/images/I1.svg'
import I2 from '../assets/images/I1.svg'
import I3 from '../assets/images/I1.svg'
import I4 from '../assets/images/I1.svg'
import Timebg from '../assets/images/Timebg.svg'
import Period from '../assets/images/Physics.svg'
import { getData } from '../services/authservices'



const Home = ({navigation,route}) => {

  const [selectedDay, setSelectedDay] = useState("");
  const [userData , setUserData] = useState(null)
  const {width} = Dimensions.get('window')
  const data = route?.params
  
  console.log(data,'data')
  console.log(route?.params?.name)


  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const get_Data = async()=>{
  try{
    const response = await getData()
    console.log(response.data)
    setUserData(response.data.data)

  }
  catch(error){
    console.error(error.response.data)
    throw error
  }
}

useEffect(()=>{
  get_Data()
},[])


  const learningData = [
    {
      name: "Harsh",
      course: "React Native",
      icon: I1,
    },
    {
      name: "Amit",
      course: "Node.js",
      icon: I2,
    },
    {
      name: "Priya",
      course: "MongoDB",
      icon: I3,
    },
    {
      name: "Raj",
      course: "JavaScript",
      icon: I4,
    },
   
  ];

  const renderData = ({item})=>(
    <View style={styles.flexspace}>
    <View style={styles.flexContainer}>
      <Image1/>
      <View style={{marginLeft:8}}>
        <Text fontSize={'md'} color={' rgba(48, 57, 114, 1)'} fontWeight={'600'}>{item?.name}</Text>
        <Text color={' rgba(48, 57, 114, 0.5)'}>{item?.dob}</Text>
      </View>

    </View>
    <Text fontSize={'md'} color={' rgba(48, 57, 114, 1)'} fontWeight={'600'}>001</Text>
  </View>
  )



  const renderItem = ({item})=>(
    <View style={styles.IcontentContainer}>
      <Image source={{uri:item?.teacherAvatar}} width={'8'} height={'20'}></Image>
    <View style={{marginLeft:9}}>
      <Text fontSize={'lg'} fontWeight={'700'}>{item?.teacher}</Text>
      <Text color={' rgba(53, 58, 64, 1)'}>{item?.subject}</Text>
    </View>
      </View>
  )

  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={{ flex: 1, position: 'relative' }}>
<Bgblue width="100%" height="100%" style={{ position: 'absolute', top:0 , marginTop : -15 }} />

<View style={styles.headerMain}>
<HamW/>

  {/* <Bell/> */}
  <View style={styles.flexItemContainer}>
  <View>
  <Text marginTop={'2'} fontSize={'3xl'} fontWeight={'semibold'} color={'white'} ellipsizeMode='tail' numberOfLines={1} maxW={'60%'}>Hi  {userData?.name}👋</Text>
<Text color={'#FFFFFF'}>Lets Explore your learnings today!</Text>
</View>
<Userimage/>

</View>
<Banner width={width*0.9} style={{marginHorizontal:'auto'}}/>
  

</View>



</View>


<View style={styles.InstructorContainer}>
  <Text fontSize={'3xl'} fontWeight={'semibold'}>Instructor</Text>

  <FlatList
      data={userData?.subjectTeacherDetails}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
       width={'100%'}
      />

</View>
<View style={styles.headerContainer}>


{/* <View style={styles.flexItemContainer}>
<M1 width={'45%'}/>
<M2 width={'45%'}/>  

</View>

<View style={styles.flexItemContainer}>
<M3 width={'45%'}/>
<M4 width={'45%'}/>  

</View> */}




</View>

<View style={styles.bottomContainer}>
<Text fontSize={'md'} color={' rgba(48, 57, 114, 1)'} fontWeight={'600'} width={'90%'}  marginX={'auto'}>Students</Text>

  <View style={styles.bottomContent}>
 

  <FlatList
      data={userData?.studentListInfo}
      renderItem={renderData}
      keyExtractor={(item, index) => item.toString()}
       width={'100%'}
      />
  </View>

</View>
      
    </View>
    </ScrollView>
  )
}

export default Home