import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Logo from "../assets/SeatedFly.svg";
import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

function NutritionScreen({navigation}) {

  const width = useSharedValue(100);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value
    }
  })

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  const data = {
    name: "Anand Halwan",
    email: "ahalwan124@gmail.com",
    age: 23,
  };

  const colRef = collection(db, 'User')


  function pressed() {
    addDoc(colRef, data)
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View style={[styles.listItemContainer,{justifyContent: 'center', alignItems: 'center', height: 420}]}>
          <TouchableOpacity style={[{ left: -6, flexDirection: 'column' ,justifyContent: 'space-between', top: 40, alignItems: 'center'}]} onPress={pressed}>
            <Logo width={120} height={120}></Logo>
          </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

export default NutritionScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
    },
    placeholderContainer: {
      flex: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    toolbarMenuContainer: {
      flex: 1,
    },
    listItemContainer: {
      color: '#1C1C1E',
      backgroundColor: '#1C1C1E',
      borderRadius: 16,
      justifyContent: 'space-between',
      width: 370,
      marginBottom: 9,
  },
  });
  