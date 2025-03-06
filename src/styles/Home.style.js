import { Dimensions, StyleSheet } from "react-native";

const {width,height} = Dimensions.get('window')

const styles = StyleSheet.create({

    container:{
        backgroundColor:'rgba(244, 245, 250, 1)',
        width:width,
        minHeight:height
        
    },
    flexItemContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignItems:'center',
    },
    headerContainer:{
        width:'100%',
        marginHorizontal:'auto',
        marginTop:18
    },
    timeTable:{
        width:'100%',
        marginHorizontal:'auto',
        borderLeftWidth:6,
        borderLeftColor:' rgba(41, 239, 109, 1)',
        paddingHorizontal:12,
        backgroundColor:"#FFFFFF",
        paddingVertical:3
    },
    bg:{
        backgroundColor:" rgba(225, 239, 246, 1)",
        marginTop:12,
        position:'relative',
        height:400
    },
    bottomContainer:{
        backgroundColor: '#FFFFFF',
        marginTop:12,
        paddingVertical:16

    },
    flexContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    bottomContent:{
        width:'90%',
        marginHorizontal:'auto',
        backgroundColor:'#FFFFFF',
        marginTop:10,
        paddingVertical:10,
        paddingHorizontal:10
    },
    flexspace:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        marginTop:8
    },
    headerMain:{
       
        width:'90%',
        marginTop:10,
        marginHorizontal:'auto'
    },
    InstructorContainer:{
        width:"90%",
        marginHorizontal:'auto'
    },
    IcontentContainer:{
        padding:2,
        borderRadius:12,
        backgroundColor:'#FFFFFF',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:'47%',
    },
    row:{
        justifyContent:'space-between',
        marginTop:9
    },
    timeTableContainer:{
        width:'90%',
        marginHorizontal:'auto',
        position:'relative',
        paddingVertical:10
    },
    innerTimeContainer:{
        width:'100%',
        backgroundColor:'#FFFFFF',
        marginTop:20,
        borderRadius:10,
        padding:4,
        paddingHorizontal:10,
        paddingVertical:16

    },
    timemainTableContainer:{
        width:'90%',
        paddingHorizontal:8,
        borderRadius:10,
        elevation:5,
        backgroundColor:'#FFFFFF',
        marginHorizontal:'auto',
        marginTop:4,
        marginBottom:4,
        paddingVertical:4

    },


    timeHeading:{
        fontSize:18,
        fontWeight:'500',
    },
    weekContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      paddingHorizontal:11,
      paddingVertical:2,
        borderColor:'rgba(108, 117, 126, 1)',
        borderWidth:0.5,
        borderRadius:28,
        // marginRight:6,
        marginTop:14,
        marginHorizontal:'auto'
    },
    selected:{

        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      paddingHorizontal:9,
      paddingVertical:2,
        backgroundColor:'rgba(0, 122, 255, 1)',
        borderColor:'rgba(0, 122, 255, 1)',
        borderWidth:2,
        borderRadius:28,
        // marginRight:6,
        marginTop:14

    },
    weekText:{
        fontSize:14,
        color:'rgba(108, 117, 126, 1)',
        fontWeight:500
    },
    selectedText:{
        color:'#FFFFFF'
    },
    periodText:{
        fontSize:10,
        fontWeight:'600',
        color:'rgba(146, 169, 196, 1)'
    },
    nameTimeText:{
        fontSize:12,
        fontWeight:'600',
        color:'rgba(146, 169, 196, 1)',
        marginTop:6,
        marginBottom:-4

    },
    subText:{
        fontSize:16,
        fontWeight:'600',
        marginTop:0
    }

})

export default styles