import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExerCiseInfoScreen from "../screens/ExerciseInfoScreen";
import WorkoutScreen from "../screens/WorkoutScreen";


const WorkoutStack = createNativeStackNavigator();

const WorkoutRoot = () => {
    return (
        <WorkoutStack.Navigator screenOptions={{headerShown: false}}>
            <WorkoutStack.Screen name={"WorkoutHome"} component={WorkoutScreen}></WorkoutStack.Screen>
            <WorkoutStack.Screen name={"ExerciseInfoScreen"} component={ExerCiseInfoScreen}></WorkoutStack.Screen>
        </WorkoutStack.Navigator>
    );
}

export default WorkoutRoot;