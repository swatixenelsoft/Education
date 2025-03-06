import { StyleSheet , Dimensions} from "react-native";
const {width,height} = Dimensions.get('window')


const styles = StyleSheet.create({

    container:{

        width:width,
        minHeight:height,
        backgroundColor:'#FFFFFF'

    },
    svg:{
        marginHorizontal:'auto',
        marginTop:30
    },
    contentContainer:{
        width:'60%',
        marginHorizontal:'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    sliderWidth: width, // Full screen width for the carousel
    itemWidth: width , // Item width is 75% of the screen width to show side items
    // carouselContainer: {
    //     paddingHorizontal: width * 0.05, // Add horizontal padding for side item visibility
    //   },
      carouselPagination: {
       marginTop:1
      },
      carouselPaginationdot:{
          backgroundColor:'rgba(63, 24, 103, 1)',
          width:10,
          height:10,
          borderRadius:10
      },
      bottomText:{
          fontSize:14,
          fontWeight:'400',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
      },
      bottomContainer:{
        width:'90%',
        marginHorizontal:'auto',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        position:'absolute',
        bottom:40,
        flexDirection:'row',
        left:'5%'
      },
      


})

export default styles