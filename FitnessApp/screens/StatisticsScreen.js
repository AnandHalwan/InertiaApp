import { View, StyleSheet } from "react-native";
import Placeholder from "../components/Placeholder";
import ToolbarMenu from "../components/ToolbarMenu";
function StatisticsScreen({navigation}) {



    function navigateProfileScreenHandler() {
        navigation.navigate('ProfileScreen');
    }
    function navigateEncyclopediaScreenHandler() {
        navigation.navigate('EncyclopediaScreen');
    }
    function navigateWorkoutScreenHandler() {
        navigation.navigate('WorkoutScreen');
    }
    function navigateNutritionScreenHandler() {
        navigation.navigate('NutritionScreen');
    }


    return (
        <View style={styles.container}>
            <View style={styles.placeholderContainer}>
                <Placeholder customText={"The statistics page is still in development."}></Placeholder>
            </View>
      </View>
    );
}

export default StatisticsScreen;


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
  });
  