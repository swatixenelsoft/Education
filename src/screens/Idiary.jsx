import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React , {useState , useRef} from 'react';
import { FlatList, ScrollView } from 'native-base';
// import styles from '../styles/Idiary.style';
import Headerbg from '../assets/Header-bg.svg'; 
import Hambg from '../assets/Hambg.svg' 
import styles from '../styles/Idiary.style';
import Calendar from '../assets/Calendar.svg'
import Subbg from '../assets/subbg.svg'
import DairyBg from '../assets/images/Dairy-BG.svg'
import { position } from 'native-base/lib/typescript/theme/styled-system';
import ActionSheet from "react-native-actions-sheet";
import { Box } from 'native-base';
import Actionsheets from '../components/Actionsheets';

const Idiary = () => {

    const [selectedId, setSelectedId] = useState(null);
    const actionSheetRef = useRef(null);



    const weeks = [
        { id: 1, day: "All" },
        { id: 2, day: "Maths" },
        { id: 3, day: "Science" },
        { id: 4, day: "React" },
        { id: 5, day: "Angular" },
        { id: 6, day: "Flutter" },
      ];

      const subjects = [
        { id: 1, subject: "Mathematics", task: "Revise", chapter: "Chapter 07", fileAttached: true },
        { id: 2, subject: "Science", task: "Complete Notes", chapter: "Chapter 05", fileAttached: false },
        { id: 3, subject: "English", task: "Read", chapter: "Chapter 03", fileAttached: true },
        { id: 4, subject: "History", task: "Summarize", chapter: "Chapter 10", fileAttached: false },
        { id: 5, subject: "Geography", task: "Map Practice", chapter: "Chapter 02", fileAttached: true },
        { id: 6, subject: "Physics", task: "Solve Problems", chapter: "Chapter 06", fileAttached: false },
        { id: 7, subject: "Chemistry", task: "Prepare Flashcards", chapter: "Chapter 04", fileAttached: true },
        { id: 8, subject: "Biology", task: "Diagram Practice", chapter: "Chapter 08", fileAttached: false },
        { id: 9, subject: "Computer Science", task: "Write Code", chapter: "Chapter 09", fileAttached: true },
        { id: 10, subject: "Economics", task: "Research", chapter: "Chapter 01", fileAttached: false }
      ];
      

     const renderItem = ({item})=>{

        const isSelected = item.id === selectedId

        return <TouchableOpacity onPress={() => setSelectedId(item.id)}>
        <View style={[styles.weekContainer , isSelected && styles.selected]}>
<Text style={[styles.weekText , isSelected && styles.selectedText]}>{item.day}</Text>
        </View>
        </TouchableOpacity>
     }

     const renderSubject = ({item})=>(
        <View>

<View style={styles.svgContainer}>
        <Subbg />
      </View>

        </View>
     )

  return (
    <ScrollView style={styles.container}>
      {/* SVG Background */}
      <View style={{width:'100%'}}>
      <View style={styles.svgContainer}>
        <Headerbg />
      </View>

      {/* Content */}
      <View style={styles.Header}>
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
/>    
      </View>

      <View style={[styles.flexSpaceBetween,{marginTop:130}]}>

                    <View style={styles.halfContainer}>
                        <View style={styles.relativeContainer}>
                    <DairyBg width={'100%'} />
                    <View style={styles.svg1Container}>
                        <Text style={styles.sub}>Mathematics</Text>
                        <Text style={styles.Revise}>Revise
                        Chapter 07</Text>
                        <View style={styles.fileContainer}>
                          <Text style={styles.fileText}>File attached</Text>
                        </View>
                        
                    </View>
                    </View>
                    </View>
                    <View style={styles.halfContainer}>
                        <View style={styles.relativeContainer}>
                    <DairyBg width={'100%'} />
                    <View style={styles.svg1Container}>
                        <Text style={styles.sub}>Mathematics</Text>
                        <Text style={styles.Revise}>Revise
                        Chapter 07</Text>
                        <View style={styles.fileContainer}>
                          <Text style={styles.fileText}>File attached</Text>
                        </View>
                        
                    </View>
                    </View>
                    </View>

                </View>

                <View style={styles.flexSpaceBetween}>

<TouchableOpacity style={styles.halfContainer} onPress={()=>actionSheetRef.current?.show()}>
    <View style={styles.relativeContainer}>
<DairyBg width={'100%'} />
<View style={styles.svg1Container}>
    <Text style={styles.sub}>Mathematics</Text>
    <Text style={styles.Revise}>Revise
    Chapter 07</Text>
    <View style={styles.fileContainer}>
      <Text style={styles.fileText}>File attached</Text>
    </View>
    
</View>
</View>
</TouchableOpacity>
<View style={styles.halfContainer}>
    <View style={styles.relativeContainer}>
<DairyBg width={'100%'} />
<View style={styles.svg1Container}>
    <Text style={styles.sub}>Mathematics</Text>
    <Text style={styles.Revise}>Revise
    Chapter 07</Text>
    <View style={styles.fileContainer}>
      <Text style={styles.fileText}>File attached</Text>
    </View>
    
</View>
</View>
</View>

</View>

<ActionSheet ref={actionSheetRef} containerStyle={{borderTopLeftRadius:35,borderTopRightRadius:35}}>
  <Box >

<Actionsheets/>
</Box>

    </ActionSheet>
                

      
    </ScrollView>
  );
};



export default Idiary;
