import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import NutritionScreen from "../screens/NutritionScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import WorkoutRoot from "./WorkoutRoot";
import EncyclopediaRoot from "./EncyclopediaRoot";
import SvgUri from "react-native-svg-uri";
import { Image, View } from "react-native";
import { Svg } from "react-native-svg";
import Rectagle from "../assets/rectangles.svg"
const Tab = createBottomTabNavigator();

function TabRoot() {

    return(
        <Tab.Navigator 
        screenOptions={{headerShown: false, tabBarActiveBackgroundColor: 'black', 
        tabBarInactiveBackgroundColor: 'black', headerStatusBarHeight: 0, 
        tabBarItemStyle: {marginTop: 0, }, tabBarStyle: {backgroundColor: 'black', borderTopColor: '#242424', height: 70}} } >
        
            <Tab.Screen
             name="Workout" 
             component={WorkoutRoot} 
             options={{
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (
                    <View>
                    <SvgUri
                      width="30"
                      height="30"
                      source={require('../assets/TestSvg.svg')}
                    />
                  </View>
                )
             }}
             ></Tab.Screen>
            <Tab.Screen 
              name="Statistics" 
              component={StatisticsScreen}
              options={{
                  tabBarShowLabel: false,
            }}></Tab.Screen>
            <Tab.Screen 
              name="Encyclopedia" 
              component={EncyclopediaRoot}
              options={{
                tabBarShowLabel: false,
                
            }}></Tab.Screen>
            <Tab.Screen 
              name="Nutrition" 
              component={NutritionScreen}
              options={{
                  tabBarShowLabel: false,
            }}></Tab.Screen>
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarShowLabel: false,
                 }}
                ></Tab.Screen>
        
        </Tab.Navigator>
    );
}

export default TabRoot;