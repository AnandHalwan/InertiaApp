import axios from "axios";
import React, { useEffect, useReducer, useState, useRef } from "react";
import { useCallback } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DraggableFlatList, { OpacityDecorator } from "react-native-draggable-flatlist";
import { Swipeable, TextInput } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

function SplitScreen({navigation}) {
    const [splitId, setSplitId] = useState(null)
    const [workouts, setWorkouts] = useState([]);
    const [splitName, setSplitName] = useState("");

    useEffect(() => {
        console.log("Retrieving splits")
        getSplit()
    }, [])

    async function getSplit() {
        data = {
            "userId": "c3ajcVzkapfnUHfb4GKeVuELPO32",
            "splitId": "s1"
        }
        
        axios.get('http://192.168.0.15:3000/split/get', {params: data})
            .then((response) => {
                setSplitName(response.data.splits[0].SplitName);
                setWorkouts(response.data.splits[0].workouts)
                setSplitId(response.data.splits[0].SplitId);
            })
            .catch((error) => {
                console.error("Error retrieving split: ", error)
            })
    }

    function updateWorkouts(newWorkouts) {
        setWorkouts(newWorkouts)
        postSplit({
            "SplitId": splitId,
            "SplitName": splitName,
            "workouts": newWorkouts
        })        
    }

    async function postSplit(newSplit) {
        console.log("Posting split")

        data = {
            "userId": "c3ajcVzkapfnUHfb4GKeVuELPO32",
            "splitDocument": newSplit
        }
        axios.post('http://192.168.0.15:3000/split/save', dataj)
            .then(function (response) {
            // Handle the successful response here
                console.log(response.data);
            })
            .catch(function (error) {
                // Handle any errors that occurred during the request
                console.error(error);
            }); 
            console.log("Posted split")    
    }

    function goToWorkout(workout, id) {
        navigation.navigate("WorkoutHome", {workout: workout, id: id, editedWorkout: editedWorkout})
    }

    const editedWorkout = (newData, id) => {
        console.log("Edited Workout")
        console.log(newData)

        const index = workouts.findIndex(item => item.id === id)
        let newWorkouts = [...workouts];
        newWorkouts[index] = newData
        updateWorkouts(newWorkouts);
    }

    function deleteWorkout(id) {
        setWorkouts((workouts) => {
            return workouts.filter((item) => item.id !== id);
        })
    }

    const renderItem = useCallback(
        ({item, drag}) => {
            let setCount = 0
            for (let i = 0; i < item.exercises.length; i++) {
                setCount += item.exercises[i].setList.length
            }

            function DeleteButton() {
                return (
                    <View style={{flexDirection: 'row'}}>
                        <View style={[{height: 103, width: 22, backgroundColor: '#1C1C1E', marginLeft: -18}]}>
        
                        </View>
                        <TouchableOpacity onPress={deleteWorkoutHandler}>
                            <View style={[{height: 103,width: 85, backgroundColor: '#383838', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 16, borderBottomRightRadius: 16}]}>
                                <Image source={require('../assets/trash.png')} style={{height:30, width: 30}}/>
                                <Text style={{color: 'white', marginTop: -1}}>Delete</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }

            const height = useSharedValue(101)
            const marginBottom = useSharedValue(9)
            const opacity = useSharedValue(1)

            const animatedWorkoutItem = useAnimatedStyle(() => {
                return {
                    height: height.value,
                    marginBottom: marginBottom.value,
                    opacity: opacity.value
                }
            })
            
            function deleteWorkoutHandler() {
                height.value = withTiming(0)
                opacity.value = withTiming(0)
                marginBottom.value = withTiming(0)
                setTimeout(() => {
                    deleteWorkout(item.id)
                }, 300);
            }

            return(
                <Animated.View style={animatedWorkoutItem}>
                    <OpacityDecorator>
                        <Swipeable renderRightActions={DeleteButton} overshootRight={false}>
                            <TouchableOpacity style={styles.workoutItem} onLongPress={drag} onPress={() => goToWorkout(item, item.id)}>
                                <View>
                                <Text style={{color: 'white', fontSize: 29, fontWeight: '500', marginBottom: 4}}>{item.name}</Text>
                                <Text style={{color: 'white', fontSize: 22, fontWeight: '200'}}>{item.durationLow}-{item.durationHigh} min</Text> 
                                </View>
                                <View>
                                    <Text style={{color: 'white', fontSize: 22, fontWeight: '200', marginTop: 6, marginBottom: 6}}>{item.exercises.length} Exercises</Text>
                                    <Text style={{color: 'white', fontSize: 22, fontWeight: '200',}}>{setCount} Sets</Text>
                                </View>
                            </TouchableOpacity>
                        </Swipeable>
                    </OpacityDecorator>
                </Animated.View>
            )
        }
    )
    function addWorkoutHandler() {
        const newId = ("w" + (new Date()).toString())
        const newWorkout = {
            durationHigh: "0",
            durationLow: "0",
            exercises: [],
            id: newId,
            name: "Start"
        }
        navigation.navigate("WorkoutHome", {workout: newWorkout, id: newId, editedWorkout: saveNewWorkout})
    }

    const saveNewWorkout = (newData, id) => {
        console.log("Adding Workout")
        console.log(newData)

        let newWorkouts = [...workouts];
        newWorkouts.push(newData)
        setWorkouts(newWorkouts)
    }

    function handleChangeSplitName() {
        postSplit()
    }
    return (
        <View style={{backgroundColor: 'black', flex: 1, alignItems: 'center'}}>
            <View style={{marginTop: 110}}>
                <TextInput onChangeText={(newName) => {setSplitName(newName)}} onEndEditing={handleChangeSplitName} textAlign="right" value={splitName} style={{color: 'white', fontSize: 34}}></TextInput>
            </View>
            <View style={{marginTop: 40}}>
                <TouchableOpacity style={[styles.buttonContainer]} onPress={addWorkoutHandler}>
                    <Image source={require('../assets/plus.png')} style={{height: 40, width: 40,}}/>
                </TouchableOpacity>
                <View style={{marginTop: 73}}>
                    <DraggableFlatList data={workouts} renderItem={renderItem} keyExtractor={(item) => item.id} onDragBegin={({index}) => console.log("Started Dragging")} onDragEnd={({data}) => setWorkouts(data)}>

                    </DraggableFlatList>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    workoutItem: {
        color: '#1C1C1E',
        backgroundColor: '#1C1C1E',
        borderRadius: 16,
        padding: 7,
        width: 370,
        left: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 32,
        alignItems: 'center',
    },
    buttonContainer: {
        color: '#1C1C1E',
        backgroundColor: '#1C1C1E',
        borderRadius: 16,
        padding: 7,
        width: 370,
        justifyContent: 'center',
        alignItems: 'center',
        height: 66,
        top: 65,
        marginTop: -9
    },
})

export default SplitScreen