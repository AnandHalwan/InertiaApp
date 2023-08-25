import { View, StyleSheet, Button } from "react-native";
import Placeholder from "../components/Placeholder";
import ToolbarMenu from "../components/ToolbarMenu";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

function NutritionScreen({navigation}) {

  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View
        style={{
          width: width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
      <Button onPress={handlePress} title="Click me" />
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
  