import { View , TouchableOpacity, Dimensions,StyleSheet, ActivityIndicator} from 'react-native'
import React,{useEffect, useState , useCallback} from 'react'
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
import Folder from '../assets/images/Folder-original.svg'
import useUserId from '../hooks/useUserid'
import EvilIcons from 'react-native-vector-icons/FontAwesome'
import { useFocusEffect } from '@react-navigation/native'



const Home = ({navigation,route}) => {

  const [selectedDay, setSelectedDay] = useState("");
  const [userData , setUserData] = useState(null)
  const {width} = Dimensions.get('window')
    const [selectedId, setSelectedId] = useState(null);
    const [loading , setLoading] = useState(false) 
    const [appTimeTable , setTimetable] = useState([])
    const [index, setIndex] = useState(0)
    const userId = useUserId();
    console.log(userId)




  const weeks = [
    { id: 1, day: "Mon" },
    { id: 2, day: "Tue" },
    { id: 3, day: "Wed" },
    { id: 4, day: "Thu" },
    { id: 5, day: "Fri" },
    { id: 6, day: "Sat" },
  ];

  useEffect(() => {
    // Get today's day abbreviation (e.g., "Sun", "Mon")
    const todayIndex = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const todayItem = weeks[todayIndex];

    // Set the default selected day
    if (todayItem) {
      setSelectedId(todayItem.id);
      setIndex(todayIndex);
    }
  }, []);
  

const get_Data = async()=>{
  setLoading(true)

  try{
    const response = await getData(userId)
    console.log(response.data,"ujhjg")
    setUserData(response.data.data)
    setTimetable(response.data.data.appTimeTables)
    const selectedData = response.data.data.appTimeTables.find((day) => day[0]?.dayType === selectedId) || [];
    console.log(selectedData,'fhgh')

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


console.log( index, userData , 'vcgfg')

const renderWeek = ({item,index})=>{

  const isSelected = item.id === selectedId

  return <TouchableOpacity onPress={() =>{ setSelectedId(item.id)
    setIndex(index)
  }}>
  <View style={[styles.weekContainer , isSelected && styles.selected]}>
<Text style={[styles.weekText , isSelected && styles.selectedText]}>{item.day}</Text>
  </View>
  </TouchableOpacity>
}

// useEffect(()=>{
//   get_Data()
// },[])

useFocusEffect(
  useCallback(()=>{
    get_Data()
  },[userId])
)


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
      {item?.avatar ?       <Image source={{uri:item?.avatar}} width={'12'} height={'12'} borderRadius={'full'} alt='vv'></Image>
:       <EvilIcons name='user-circle' size={44} color='#333'></EvilIcons>

}
      <View style={{marginLeft:8}}>
        <Text fontSize={'md'} color={' rgba(48, 57, 114, 1)'} fontWeight={'600'}>{item?.name}</Text>
        <Text color={' rgba(48, 57, 114, 0.5)'}>{item?.dob}</Text>
      </View>

    </View>
    <Text fontSize={'md'} color={' rgba(48, 57, 114, 1)'} fontWeight={'600'}>{item?.rollNumber}</Text>
  </View>
  )

  const renderTimeTable = ({ item }) => (
    <View style={{  width: '50%', position:'relative' }}>
        <View style={styles.timemainTableContainer}>
          <Text style={styles.periodText}>Period {item.periodNumber}</Text>

          <Text style={styles.nameTimeText}>{item.periodTeacher}</Text>
          <Text style={styles.subText}>{item.periodSubject}</Text>

        </View>
    </View>
  );


  const renderItem = ({item})=>(
    <View style={styles.IcontentContainer}>
      {item?.teacherAvatar ?       <Image source={{uri:item?.teacherAvatar}} width={'10'} height={'12'} borderRadius={'lg'} alt='vv'></Image>
:
<EvilIcons name='user-circle' size={30} color='#333'></EvilIcons>


}
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
  <Text marginTop={'2'} fontSize={'3xl'} fontWeight={'semibold'} color={'white'} ellipsizeMode='tail' numberOfLines={1} maxW={'98%'}>Hii  {userData?.name}👋</Text>
<Text color={'#FFFFFF'}>Lets Explore your learnings today!</Text>
</View>
     <EvilIcons name='user-circle' size={44} color='#333'></EvilIcons>


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

<View style={styles.innerTimeContainer}>
  <Text style={styles.timeHeading}>Timetable</Text>
  <FlatList
  data={weeks}
  keyExtractor={(item) => item.id}
  renderItem={renderWeek}
  horizontal
  contentContainerStyle={{
    width: '100%',
    flexGrow: 1,
    justifyContent: 'space-between',
    // paddingHorizontal: 10, // Adjust spacing
  }}
/>

<View>
<FlatList
      data={appTimeTable[index]}
      renderItem={renderTimeTable}
      keyExtractor={(item, index) => item.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
       width={'100%'}
      />
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