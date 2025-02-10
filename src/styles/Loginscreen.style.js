import { StyleSheet , Dimensions} from "react-native";

const {width , height} = Dimensions.get('window')

const styles = StyleSheet.create({
    gradientContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      width: '90%',
      borderRadius: 10,
      alignItems: 'center',
    },
    input: {
      width: '100%',
      height: 45,
      borderRadius: 40,
      paddingHorizontal: 10,
      marginVertical: 10,
      backgroundColor: 'white', // Ensure input stands out
    },
    forgot: {
      width:'90%',
      textAlign:'right',
      color: '#007BFF',
    },
    upperContainer:{
      width:'100%'
    }
  });

export default styles