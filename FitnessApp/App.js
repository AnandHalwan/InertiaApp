import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import WorkoutScreen from './screens/WorkoutScreen';
import ProfileScreen from './screens/ProfileScreen';
import EncyclopediaScreen from './screens/EncyclopediaScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import NutritionScreen from './screens/NutritionScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabRoot from './components/TabRoot';
import Setup from './screens/Setup';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light'>
      </StatusBar>
      <Stack.Navigator screenOptions={{headerShown:false, animation: 'none'}} >
        <Stack.Screen name = "TabRoot" component={TabRoot}></Stack.Screen> 
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
/*
        <Stack.Screen name='Setup' component={Setup}></Stack.Screen>

*/