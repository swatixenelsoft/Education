import { View , TouchableOpacity, Dimensions,StyleSheet, ActivityIndicator} from 'react-native'
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
import DairyBg from '../assets/icons/DairyBG.svg'
import Timetable from '../assets/images/Timetable.svg'
import { position } from 'native-base/lib/typescript/theme/styled-system'
import FolderBg from '../assets/images/Folder-BG.svg'
import { Box } from 'native-base'


const Home = ({navigation,route}) => {

  const [selectedDay, setSelectedDay] = useState("");
  const [userData , setUserData] = useState(null)
  const {width} = Dimensions.get('window')
    const [selectedId, setSelectedId] = useState(null);
    const [loading , setLoading] = useState(false)



  const weeks = [
    { id: 1, day: "Mon" },
    { id: 2, day: "Tue" },
    { id: 3, day: "Wed" },
    { id: 4, day: "Thu" },
    { id: 5, day: "Fri" },
    { id: 6, day: "Sat" },
  ];
const get_Data = async()=>{
  setLoading(true)

  try{
    const response = await getData()
    console.log(response.data,"ujhjg")
    setUserData(response.data.data)
    setLoading(false)

  }
  catch(error){
    setLoading(false)
    console.error(error.response.data)
    throw error
  }
  finally{
    setLoading(false)
  }
}



const renderWeek = ({item})=>{

  const isSelected = item.id === selectedId

  return <TouchableOpacity onPress={() => setSelectedId(item.id)}>
  <View style={[styles.weekContainer , isSelected && styles.selected]}>
<Text style={[styles.weekText , isSelected && styles.selectedText]}>{item.day}</Text>
  </View>
  </TouchableOpacity>
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
      <Image source={{uri:item?.teacherAvatar}} width={'8'} height={'16'}></Image>
    <View style={{marginLeft:9}}>
      <Text fontSize={'lg'} fontWeight={'700'}>{item?.teacher}</Text>
      <Text color={' rgba(53, 58, 64, 1)'}>{item?.subject}</Text>
    </View>
      </View>
  )


  if(loading){

    return  (<Box width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
    <ActivityIndicator size="large" color="rgba(11, 112, 222, 1)"/>
    </Box>)
  }

  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={{ flex: 1, position: 'relative' ,width:'100%',height:'100%'}}>
<Bgblue width="100%"  style={{ position: 'absolute', top:0 , left:0, marginTop : -50 }} />

<View style={styles.headerMain}>
  <TouchableOpacity onPress={()=>navigation.navigate('Account')}>

<HamW/>
</TouchableOpacity>


  {/* <Bell/> */}
  <View style={styles.flexItemContainer}>
  <View>
  <Text marginTop={'2'} fontSize={'3xl'} fontWeight={'semibold'} color={'white'} ellipsizeMode='tail' numberOfLines={1} maxW={'60%'}>Hii  {userData?.name}👋</Text>
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

<View style={styles.timeTableContainer}>

<Timetable width={'100%'} style={{position:'relative'}}/>
<View style={styles.innerTimeContainer}>
  <Text style={styles.timeHeading}>Timetable</Text>
<FlatList
data={weeks}
keyExtractor={(item)=>item.id}
renderItem={renderWeek}
horizontal
marginTop={'6'}/>

<View style={{elevation:5}}>
<FolderBg />
</View>

</View>
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