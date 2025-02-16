import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    svgContainer: {
        position: 'absolute',
        width: '100%',
        height: 300,
        top: 0,
        left: 0,
        zIndex: -1, // Push background behind other elements
      },
      contentContainer:{
        width:'90%',
        marginHorizontal:'auto'
      },
      flexContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
      },
      nameText:{
        fontSize:26,
        fontWeight:500,
        marginLeft:12,
        color:'#FFFFFF',
      },
      emailContainer:{
        backgroundColor: 'rgba(99, 174, 255, 1)',
        paddingHorizontal:10,
        borderRadius:16,
        paddingVertical:4,
        marginLeft:12

      },
      emailText:{
        color:'#FFFFFF'
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
        marginTop:90,
        width:'90%',
        marginHorizontal:'auto',
        position:'relative',
    },
    basicText:{
        fontSize:18,
    },
    HeadingText:{
        fontSize:18,
        fontWeight:600,
        width:'35%'

    },
    mFlexContainer:{
        marginTop:5,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    }

})

export default styles