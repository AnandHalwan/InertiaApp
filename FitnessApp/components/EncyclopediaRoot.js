import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EncyclopediaScreen from "../screens/EncyclopediaScreen";
import Information from "./Information";

const EncyclopediaStack = createNativeStackNavigator();

const EncyclopediaRoot = () => {
    return (
            <EncyclopediaStack.Navigator screenOptions={{headerShown: false}}>
                <EncyclopediaStack.Screen name={"EncyclopediaScreen"} component={EncyclopediaScreen}></EncyclopediaStack.Screen>
                <EncyclopediaStack.Screen name={"Information"} component={Information}></EncyclopediaStack.Screen>
            </EncyclopediaStack.Navigator>
    );
}

export default EncyclopediaRoot;