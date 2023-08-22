import { View, StyleSheet } from "react-native";
import Placeholder from "../components/Placeholder";
import ToolbarMenu from "../components/ToolbarMenu";
function NutritionScreen({navigation}) {

    return (
        <View style={styles.container}>
            <View style={styles.placeholderContainer}>
                <Placeholder customText={"The nutrition page is still in development."}></Placeholder>
            </View>
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
  });
  