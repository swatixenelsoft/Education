import { Dimensions, StyleSheet } from "react-native";
const {width,height} = Dimensions.get('window')

const styles = StyleSheet.create({

    container:{
        width:width,
        minHeight:height
    },
    contentContainer:{
        width:'90%',
        marginHorizontal:'auto'
    },
    headerContent:{
        fontSize:26,
        color:'#FFFFFF',
        fontWeight:500,
        marginLeft:9
    },
    content:{
        width:'100%',
        borderRadius:10,
        elevation:5,
        backgroundColor:'#FFFFFF',
        marginTop:16,
        paddingVertical:14,
        paddingHorizontal:19
    },
    iconContainer:{
        width:45,
        height:45,
        borderRadius:20,
        backgroundColor:'rgba(203, 229, 254, 1)',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    flexContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    contentText:{
        marginLeft:6,
        fontSize:18,
        fontWeight:500
    },
    flexSpaceBetween:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%'
    },
    mainContainer:{
        marginTop:270
    },
    sideContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    profileImageContainer:{
        alignSelf:'center',
        position:'absolute',
        top:120,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    },
    profileName:{
        fontSize:26,
        fontWeight:500
    },
    IDcontainer:{
        backgroundColor: "rgba(203, 229, 254, 1)",
        paddingHorizontal:10,
        paddingVertical:4,
        borderRadius:8

    },
    attendanceContainer:{
        width:'90%',
        marginHorizontal:'auto',
        elevation:5,
        marginTop:320,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:10,
        paddingVertical:10,
        backgroundColor:'#FFFFFF',
        paddingHorizontal:20
    },
    flexBetweenContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    numberText:{
        fontSize:34,
        fontWeight:600
    },
    prsesnt:{
        fontSize:18,
        fontWeight:500,
        color:' rgba(53, 58, 64, 0.46)'
    },
    feeContentContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'90%',
        marginHorizontal:'auto',
        marginTop:290
    },
    feeContainer:{
        width:'30%',
        borderRadius:10,
        backgroundColor:'#FFFFFF',
        elevation:5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10
    },
    feeText:{
        fontSize:24,
        fontWeight:600,
        color: 'rgba(53, 58, 64, 1)'
        },
        feePText:{
            fontSize:18,
            fontWeight:"500",
            color:'rgba(53, 58, 64, 0.5)',
            marginTop:8
        },
        feeDetailContainer:{
            width:'90%',
            marginHorizontal:'auto',
            marginTop:19
        },
        paidContainer:{
            width:'45%',
            backgroundColor:'rgba(24, 192, 24, 1)',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:16
        },
        viewContainer:{
            width:'45%',
            backgroundColor:'rgba(38, 136, 243, 1)',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10
        },
        whiteText:{
            color:'#FFFFFF'
        },
        monthContainer:{
            fontSize:14,
            fontWeight:'700'
        },
        DateContainer:{
            width:'80%',
            marginHorizontal:'auto',
            backgroundColor:'#FFFFFF',
            borderWidth:1,
            marginTop:10
        },


})

export default styles