import { View, Text , TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Headerbg from '../assets/Header-bg.svg'; 
import styles from '../styles/Profiles.styles';
import ArrowBack from '../assets/icons/Arrow-back.svg'
import Userimage from '../assets/images/User-img.svg'
import { FlatList, ScrollView } from 'native-base';
import Educationbg from '../assets/images/Education_bg.svg'
import FatherBg from '../assets/images/Father-Bg.svg'


const Profile = () => {

        const [selectedId, setSelectedId] = useState(null);
    

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
    

    
    const renderItem = ({item})=>{

        const isSelected = item.id === selectedId

        return <TouchableOpacity onPress={() => setSelectedId(item.id)}>
        <View style={[styles.weekContainer , isSelected && styles.selected]}>
<Text style={[styles.weekText , isSelected && styles.selectedText]}>{item.day}</Text>
        </View>
        </TouchableOpacity>
     }


  return (
    <ScrollView>
  <View style={{width:'100%'}}>
      <View style={styles.svgContainer}>
        <Headerbg style={{height:200}}/>
      </View>

      <View style={styles.contentContainer}>


      <ArrowBack style={{marginTop:12}}/>
      <View style={styles.flexContainer}>
        <Userimage/>
        <View>
            <Text style={styles.nameText}>Harsh Kumar</Text>
            <View style={styles.emailContainer}>
            <Text style={styles.emailText}>harshkumar@gmail.com</Text>

            </View>
        </View>

      </View>

      <FlatList
      data={weeks}
      keyExtractor={(item)=>item.id}
      renderItem={renderItem}
      horizontal
      marginTop={'6'}/>
      </View>

      <View style={styles.contentContainer}>
        <View>

        <Educationbg width={'100%'} height={550}/>
        </View>

        <View style={{position:'absolute',paddingHorizontal:16,paddingVertical:12}}>
            <Text style={styles.basicText}>Basic Details</Text>

{Object.entries(Education).map(([key,value])=>(
 <View style={[styles.mFlexContainer,{marginTop:18}]}>
 <Text style={styles.HeadingText}>{key}</Text>
 <Text style={styles.basicText}>{value}</Text>


</View>
))}
           

          

        </View>

        
      </View>

      <View style={styles.contentContainer}>
        <View>

        <FatherBg width={'100%'} height={310}/>
        </View>

        <View style={{position:'absolute',paddingHorizontal:16,paddingVertical:12}}>
            <Text style={styles.basicText}>Basic Details</Text>

{Object.entries(father).map(([key,value])=>(
 <View style={[styles.mFlexContainer,{marginTop:18}]}>
 <Text style={styles.HeadingText}>{key}</Text>
 <Text style={styles.basicText}>{value}</Text>


</View>
))}
           

          

        </View>

        
      </View>

      <View style={styles.contentContainer}>
        <View>

        <FatherBg width={'100%'} height={310}/>
        </View>

        <View style={{position:'absolute',paddingHorizontal:16,paddingVertical:12}}>
            <Text style={styles.basicText}>Basic Details</Text>

{Object.entries(father).map(([key,value])=>(
 <View style={[styles.mFlexContainer,{marginTop:18}]}>
 <Text style={styles.HeadingText}>{key}</Text>
 <Text style={styles.basicText}>{value}</Text>


</View>
))}
           

          

        </View>

        
      </View>

      <View style={styles.contentContainer}>
        <View>

        <FatherBg width={'100%'} height={310}/>
        </View>

        <View style={{position:'absolute',paddingHorizontal:16,paddingVertical:12}}>
            <Text style={styles.basicText}>Basic Details</Text>

{Object.entries(father).map(([key,value])=>(
 <View style={[styles.mFlexContainer,{marginTop:18}]}>
 <Text style={styles.HeadingText}>{key}</Text>
 <Text style={styles.basicText}>{value}</Text>


</View>
))}
           

          

        </View>

        
      </View>

      <View style={styles.contentContainer}>
        <View>

        <FatherBg width={'100%'} height={310}/>
        </View>

        <View style={{position:'absolute',paddingHorizontal:16,paddingVertical:12}}>
            <Text style={styles.basicText}>Basic Details</Text>

{Object.entries(father).map(([key,value])=>(
 <View style={[styles.mFlexContainer,{marginTop:18}]}>
 <Text style={styles.HeadingText}>{key}</Text>
 <Text style={styles.basicText}>{value}</Text>


</View>
))}
           

          

        </View>

        
      </View>


     


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