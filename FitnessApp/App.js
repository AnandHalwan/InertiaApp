import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import WorkoutScreen from './screens/WorkoutScreen';
import ProfileScreen from './screens/ProfileScreen';
import EncyclopediaScreen from './screens/EncyclopediaScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import NutritionScreen from './screens/NutritionScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light'>
      </StatusBar>
      <Stack.Navigator screenOptions={{headerShown:false, animation: 'none'}} >
        <Stack.Screen name ="WorkoutScreen" component={WorkoutScreen} options={{animationEnabled: false}}></Stack.Screen>
        <Stack.Screen name ="ProfileScreen" component={ProfileScreen} options={{animationEnabled: false}}></Stack.Screen>
        <Stack.Screen name ="EncyclopediaScreen" component={EncyclopediaScreen} options={{animationEnabled: false}}></Stack.Screen>
        <Stack.Screen name ="StatisticsScreen" component={StatisticsScreen} options={{animationEnabled: false}}></Stack.Screen>
        <Stack.Screen name ="NutritionScreen" component={NutritionScreen} options={{animationEnabled: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: '#000000',
  },
  placeholderContainer: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbarMenuContainer: {
    flex: 1,
  },
});
