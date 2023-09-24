import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import NutritionScreen from "../screens/NutritionScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import { Image } from "react-native";
import WorkoutRoot from "./WorkoutRoot";
import EncyclopediaRoot from "./EncyclopediaRoot";
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
                tabBarIcon: ({ focused }) => (
                    <Image
                      source={focused ? require('../assets/Home1.png') :  require('../assets/Home.png')}
                      style={{ width: 23, height: 23}}
                    />
                  ),
             }}
             ></Tab.Screen>
            <Tab.Screen 
              name="Statistics" 
              component={StatisticsScreen}
              options={{
                  tabBarShowLabel: false,
                  tabBarIcon: ({ focused }) => (
                      <Image
                        source={focused ? require('../assets/Social1.png') :  require('../assets/Social.png')}
                        style={{ width: 23, height: 23}}                        />
                  ),
            }}></Tab.Screen>
            <Tab.Screen 
              name="Encyclopedia" 
              component={EncyclopediaRoot}
              options={{
                  tabBarShowLabel: false,
                  tabBarIcon: ({ focused }) => (
                      <Image                          source={focused ? require('../assets/Book1.png') :  require('../assets/Book.png')}
                        style={{ width: 23, height: 23}}
                        />
                    ),
            }}></Tab.Screen>
            <Tab.Screen 
              name="Nutrition" 
              component={NutritionScreen}
              options={{
                  tabBarShowLabel: false,
                  tabBarIcon: ({ focused }) => (
                      <Image
                          source={focused ? require('../assets/Leaf1.png') :  require('../assets/Leaf.png')}
                          style={{ width: 23, height: 23}}
                        />
                      ),
            }}></Tab.Screen>
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                          source={focused ? require('../assets/Profile1.png') :  require('../assets/Profile.png')}
                          style={{ width: 23, height: 23}}
                        />
                      ),
                 }}
                ></Tab.Screen>
        
        </Tab.Navigator>
    );
}

export default TabRoot;