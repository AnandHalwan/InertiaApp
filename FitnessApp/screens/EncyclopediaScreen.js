import { View, StyleSheet} from "react-native";
import Placeholder from "../components/Placeholder";
function EncyclopediaScreen({navigation}) {

    return (
        <View style={styles.container}>
          <View style={styles.placeholderContainer}>
            <Placeholder customText={"The encyclopedia page is still in development"}></Placeholder>
          </View>
        </View>
    );
}

export default EncyclopediaScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    placeholderContainer: {
      flex: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    toolbarMenuContainer: {
      flex: 1,
    },
    buttonContainer: {
      position: 'absolute',
      width: 135,
      height: 38,
      top: 700,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:18,
      backgroundColor: '#78E28A'

    },
    buttonText: {
      color: 'white',
      fontSize: 30,
      textAlign: 'center'
    }

  });
  