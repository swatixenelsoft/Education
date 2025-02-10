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
        padding:4,
        borderRadius:6,
        backgroundColor:'#FFFFFF',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:'47%'
    },
    row:{
        justifyContent:'space-between',
        marginTop:9
    }

})

export default styles