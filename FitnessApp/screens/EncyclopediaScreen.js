import { View, StyleSheet, Text, Pressable, FlatList, TouchableOpacity } from "react-native";
import { useState, useCallback } from "react";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import { LineChart } from 'react-native-wagmi-charts';
import DaysSetup from "./SetupComponents/DaysSetup";
import DraggableFlatList, {RenderItemParams} from "react-native-draggable-flatlist";
import DeleteButton from "../components/DeleteButton";
function EncyclopediaScreen({navigation}) {

    function navigateProfileScreenHandler() {
        navigation.navigate('ProfileScreen');
    }
    function navigateWorkoutScreenHandler() {
        navigation.navigate('WorkoutScreen');
    }
    function navigateStatisticsScreenHandler() {
        navigation.navigate('StatisticsScreen');
    }
    function navigateNutritionScreenHandler() {
        navigation.navigate('NutritionScreen');
    }


    const initialData = [{index: 1, data: "One"},{index: 2, data: "Two"}, {index: 3, data: "Three"}]
    const [data, setData] = useState(initialData);

    const renderItem = useCallback(
      ({ item, drag, isActive }) => {
        return (
          <Swipeable renderLeftActions={DeleteButton}>
            <TouchableOpacity onLongPress={drag}>
                <View style={{backgroundColor: 'green', width: 390, height: 50, alignItems: 'center', justifyContent: 'center', marginBottom: 9}}>
                  <Text style={{color: 'white', fontSize: 30}}>{item.data}</Text>
                </View>    
                </TouchableOpacity>
          </Swipeable>
        );
      },
      []
    );


  function pressHandler() {
    console.log("Pressed");
  }

    return (
        <View style={styles.container}>
          <View style={{top: 100}}>
          <DraggableFlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.index}/>
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
  