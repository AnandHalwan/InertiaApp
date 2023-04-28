import { View, StyleSheet, Text, Pressable } from "react-native";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LineChart } from 'react-native-wagmi-charts';
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


    const data = [
      {
        timestamp: 1625945400000,
        value: 33575.25,
      },
      {
        timestamp: 1625946300000,
        value: 33545.25,
      },
      {
        timestamp: 1625947200000,
        value: 33510.25,
      },
      {
        timestamp: 1625948100000,
        value: 33745.25,
      },
    ];




  function pressHandler() {
    console.log("Pressed");
  }

    return (
        <View style={styles.container}>
          <View style={{top: 100, left: 80}}>
            <LineChart.Provider data={data}>
              <LineChart width={150} height={150}>
                <LineChart.Path />
              </LineChart>
            </LineChart.Provider>
          </View>
      </View>
    );
}

export default EncyclopediaScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',

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
      fontSize: 22,
      textAlign: 'center'
    }

  });
  