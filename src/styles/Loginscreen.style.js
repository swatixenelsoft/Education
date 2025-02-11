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
    },
    passwordContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      marginBottom: 10,
    },
    passwordInput: {
      flex: 1,
      height: 50,
    },
    iconContainer: {
      padding: 10,
    },
    forgot: {
      alignSelf: 'flex-end',
      color: '#007BFF',
      marginBottom: 15,
    },
    input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      marginBottom: 10,
    },
  });

export default styles