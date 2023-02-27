import { View, StyleSheet, Text } from "react-native";
import Placeholder from "../components/Placeholder";
import ToolbarMenu from "../components/ToolbarMenu";
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




    return (
        <View style={styles.container}>
            <View style={styles.placeholderContainer}>
                <Placeholder customText={"The encyclopedia page is still in development."}></Placeholder>

            </View>

      </View>
    );
}

export default EncyclopediaScreen;


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
  