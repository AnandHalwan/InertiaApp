import { View, StyleSheet, Dimensions } from "react-native";
import Placeholder from "../components/Placeholder";
import ToolbarMenu from "../components/ToolbarMenu";
import { useEffect } from "react";
function ProfileScreen({navigation}) {

    function navigateWorkoutScreenHandler() {
        navigation.navigate('WorkoutScreen');
    }
    function navigateEncyclopediaScreenHandler() {
        navigation.navigate('EncyclopediaScreen');
    }
    function navigateStatisticsScreenHandler() {
        navigation.navigate('StatisticsScreen');
    }
    function navigateNutritionScreenHandler() {
        navigation.navigate('NutritionScreen');
    }

    const width = Dimensions.get('window').width;
    useEffect(() => {
      console.log(Math.round((8 * width)/390));
    })


    return (
        <View style={styles.container}>
            <View style={styles.placeholderContainer}>
                <Placeholder customText={"The profile page is still in development."}></Placeholder>
            </View>
      </View>
    );
}

export default ProfileScreen;


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
  