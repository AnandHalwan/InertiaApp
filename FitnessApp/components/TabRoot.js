import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import NutritionScreen from "../screens/NutritionScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import WorkoutRoot from "./WorkoutRoot";
import EncyclopediaRoot from "./EncyclopediaRoot";
import BookOpen from "./../assets/navIcons/bookOpen"
import Book from "./../assets/navIcons/book"
import HomeOpen from "./../assets/navIcons/homeOpen"
import Home from "./../assets/navIcons/home"
import BookOpenSvg from "./BookOpenSvg";
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
                    <BookOpenSvg></BookOpenSvg>
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