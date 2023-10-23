import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import NutritionScreen from "../screens/NutritionScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import WorkoutRoot from "./WorkoutRoot";
import EncyclopediaRoot from "./EncyclopediaRoot";
import HomeFilled from "./../assets/navIcons/homeFilled.svg"
import BookOpenSvg from "./BookOpenSvg";
import { Image } from "react-native";
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
                    <Image style={{height: 25, width: 25}} source={require("./../assets/navIcons/homeFilled.png")}></Image>
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