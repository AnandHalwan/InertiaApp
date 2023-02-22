import { View, Text, StyleSheet } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";


function StartButton({workoutStarted, onPress, showButton}) {

    

    return (
        <View style={[styles.buttonContainer, {display: showButton ? 'flex' : 'none'}]}>
        <Pressable onPress={onPress}>
              <Text style={styles.buttonText}>
                  {workoutStarted ? "Done" : "Start"}
              </Text>
        </Pressable>
      </View>


    );
}

export default StartButton;

const styles = StyleSheet.create({
    buttonContainer: {
      position: 'absolute',
      width: 135,
      height: 38,
      top: 715,
      left: 125,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:18,
      backgroundColor: '#78E28A',

    },
    buttonText: {
      color: 'white',
      fontSize: 22,
      textAlign: 'center'
    }

  });