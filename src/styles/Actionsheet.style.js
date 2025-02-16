import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        width:'90%',
        marginHorizontal:'auto',
        display:'flex',
       height:600,
    },
    subHeading:{
        textAlign:'center',
        fontSize:22,
        fontWeight:'700',
        marginTop:12
    },
    dateContainer:{
        borderWidth:1,
        borderColor:'rgba(53, 58, 64, 0.12)',
        borderRadius:12,
        width:140,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10

    },
    dateText:{
        color:' rgba(53, 58, 64, 0.4)'
    },
    heading:{
        fontSize:22,
        fontWeight:'700',
        marginTop:7
    },
    contentText:{
        fontSize:16,
        color:'rgba(53, 58, 64, 0.3)'
    }

})

export default styles