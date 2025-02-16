import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    svgContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: -1, // Push background behind other elements
    },
    content: {
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100, // Ensure content is visible over SVG
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
    Header:{
        width:'90%',
        marginHorizontal:'auto'
    },
    heading:{
        marginTop:10,
        fontSize:40,
        fontWeight:500,
        color:'white'
    },
    subContent:{
        fontSize:16,
        color:'#FFFFFF'
    },
    calendarContainer:{
        width:'100%',
        marginHorizontal:'auto',
        borderRadius:30,
        backgroundColor:'#FFFFFF',
        height:45,
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    dateText:{
        color:'background: rgba(53, 58, 64, 1)',
        fontSize:16,
        fontWeight:500,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10
    },
    weekContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      paddingHorizontal:22,
      paddingVertical:10,
        borderColor:'#FFFFFF',
        borderWidth:2,
        borderRadius:28,
        marginRight:14,
        marginTop:14
    },
    selected:{

        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      paddingHorizontal:22,
      paddingVertical:10,
        backgroundColor:'#FFFFFF',
        borderWidth:2,
        borderRadius:28,
        marginRight:14,
        marginTop:14

    },
    weekText:{
        fontSize:18,
        color:'#FFFFFF',
        fontWeight:500
    },
    selectedText:{
        color:'rgba(0, 123, 255, 1)'
    },
    contentContainer:{
      width:'90%',
      marginHorizontal:'auto',
      marginTop:60,
      position:'relative'

    },
    flexSpaceBetween:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%'
  },
  fileContainer:{
    borderWidth:1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderColor:'rgba(0, 0, 0, 0.12)',
    marginTop:10
  },
  fileText:{
    color:'rgba(0, 0, 0, 0.4)'
  },
  Revise:{
    width:'80%',
    fontSize:14,
    fontWeight:600,
  },
  sub:{
    fontSize:12,
    fontWeight:600,
    color:'rgba(146, 169, 196, 1)'
  },
  halfContainer:{
    width:'50%'
  },
  relativeContainer:{
    position:'relative'
  },
  svg1Container:{
    position:'absolute',
    paddingHorizontal:30,
    paddingVertical:20
  }
  });

export default styles