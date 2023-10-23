import React, { useEffect, useReducer, useState, useRef } from "react";
import { useCallback } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DraggableFlatList, { OpacityDecorator } from "react-native-draggable-flatlist";
import { Swipeable, TextInput } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

function SplitScreen({navigation}) {
    let split = {
        "SplitName": "Push Pull Legs",
        "SplitId": "s1",
        "workouts": [
            {
                "durationHigh": "90",
                "durationLow": "60",
                "exercises": [
                    {
                        "color": "#FFB846",
                        "del": false,
                        "highRepRange": 8,
                        "id": "e1",
                        "imgSrc": 3,
                        "lowRepRange": 6,
                        "name": "Barbell Bench Press",
                        "setList": [
                            {
                                "Id": 1696960983743,
                                "Reps": "6",
                                "Weight": "185",
                                "Rpe": "6"
                            },
                            {
                                "Id": 1696960983741,
                                "Reps": "8",
                                "Weight": "205",
                                "Rpe": "7"
                            },
                            {
                                "Id": 1696960983740,
                                "Reps": "8",
                                "Weight": "225",
                                "Rpe": "7"
                            },
                            {
                                "Id": 1696960983742,
                                "Reps": "8",
                                "Weight": "225",
                                "Rpe": "8"
                            }
                        ]
                    },
                    {
                        "color": "#9FFF91",
                        "del": false, "highRepRange": 12,
                        "id": "e2", "imgSrc": 4,
                        "lowRepRange": 8,
                        "name": "Incline Dumbbell Press",
                        "setList": [
                            {
                                "Id": 1696960883740,
                                "Reps": "8",
                                "Weight": "80",
                                "Rpe": "8"
                            },
                            {
                                "Id": 1696960883741,
                                "Reps": "8",
                                "Weight": "80",
                                "Rpe": "8"
                            },
                            {
                                "Id": 1696960883742,
                                "Reps": "8",
                                "Weight": "80",
                                "Rpe": "8"
                            },
                        ]
                    },
                    {
                        "color": "#77C0FF",
                        "del": false,
                        "highRepRange": 12,
                        "id": "e3", "imgSrc": 5,
                        "lowRepRange": 10,
                        "name": "Cable Flys",
                        "setList": [
                            {
                                "Id": 1686960883742,
                                "Reps": "12",
                                "Weight": "20",
                                "Rpe": "10"
                            },
                            {
                                "Id": 1686960883743,
                                "Reps": "12",
                                "Weight": "20",
                                "Rpe": "10"
                            },
                            {
                                "Id": 1686960883744,
                                "Reps": "12",
                                "Weight": "20",
                                "Rpe": "10"
                            },
                        ]
                    },
                    {
                        "color": "#FF89FA",
                        "del": false,
                        "highRepRange": 12,
                        "id": "e4",
                        "imgSrc": 6,
                        "lowRepRange": 10,
                        "name": "Tricep Cable Pushdown",
                        "setList": [
                            {
                                "Id": 1686930883744,
                                "Reps": "12",
                                "Weight": "50",
                                "Rpe": "10"
                            },
                            {
                                "Id": 1686930883744,
                                "Reps": "12",
                                "Weight": "50",
                                "Rpe": "10"
                            },
                            {
                                "Id": 1686930883744,
                                "Reps": "12",
                                "Weight": "50",
                                "Rpe": "10"
                            },
                        ]
                    },
                    {
                        "color": "#FF6565",
                        "del": false,
                        "highRepRange": 12,
                        "id": "e5",
                        "imgSrc": null,
                        "lowRepRange": 10,
                        "name": "Front Raise",
                        "setList": [
                            {
                                "Id": 1686930883744,
                                "Reps": "12",
                                "Weight": "15",
                                "Rpe": "10"
                            },
                            {
                                "Id": 1686930883744,
                                "Reps": "12",
                                "Weight": "15",
                                "Rpe": "10"
                            },
                            {
                                "Id": 1686930883744,
                                "Reps": "12",
                                "Weight": "15",
                                "Rpe": "10"
                            },
                        ]
                    },
                    {
                        "color": "#FFB846",
                        "del": false,
                        "highRepRange": 15,
                        "id": "e6",
                        "imgSrc": null,
                        "lowRepRange": 10,
                        "name": "Lateral Raise",
                        "setList": [
                            {
                                "Id": 1686930883744,
                                "Reps": "12",
                                "Weight": "10",
                                "Rpe": "10"
                            },
                            {
                                "Id": 1686930883744,
                                "Reps": "12",
                                "Weight": "10",
                                "Rpe": "10"
                            },
                            {
                                "Id": 1686930883744,
                                "Reps": "12",
                                "Weight": "10",
                                "Rpe": "10"
                            },
                        ]
                    },
                    {
                        "color": "#FFB846",
                        "del": false,
                        "highRepRange": 8,
                        "id": "e21",
                        "imgSrc": 3,
                        "lowRepRange": 6,
                        "name": "Barbell Bench Press",
                        "setList": [
                            {
                                "Id": 1696960983743,
                                "Reps": "6",
                                "Weight": "185",
                                "Rpe": "6"
                            },
                            {
                                "Id": 1696960983741,
                                "Reps": "8",
                                "Weight": "205",
                                "Rpe": "7"
                            },
                            {
                                "Id": 1696960983740,
                                "Reps": "8",
                                "Weight": "225",
                                "Rpe": "7"
                            },
                            {
                                "Id": 1696960983742,
                                "Reps": "8",
                                "Weight": "225",
                                "Rpe": "8"
                            }
                        ]
                    },
                    {
                        "color": "#9FFF91",
                        "del": false, "highRepRange": 12,
                        "id": "e20", "imgSrc": 4,
                        "lowRepRange": 8,
                        "name": "Incline Dumbbell Press",
                        "setList": [
                            {
                                "Id": 1696960883740,
                                "Reps": "8",
                                "Weight": "80",
                                "Rpe": "8"
                            },
                            {
                                "Id": 1696960883741,
                                "Reps": "8",
                                "Weight": "80",
                                "Rpe": "8"
                            },
                            {
                                "Id": 1696960883742,
                                "Reps": "8",
                                "Weight": "80",
                                "Rpe": "8"
                            },
                        ]
                    },
                ],
                "id": "w1",
                "name": "Push",
            }
        ]
    }

    const [workouts, setWorkouts] = useState(split.workouts);
    const [splitName, setSplitName] = useState(split.SplitName);

    function goToWorkout(workout, id) {
        navigation.navigate("WorkoutHome", {workout: workout, id: id, editedWorkout: editedWorkout})
    }

    const editedWorkout = (newData, id) => {
        console.log("Edited Workout")
        console.log(newData)

        const index = workouts.findIndex(item => item.id === id)
        let newWorkouts = [...workouts];
        newWorkouts[index] = newData
        setWorkouts(newWorkouts)
    }

    function deleteWorkout(id) {
        setWorkouts((workouts) => {
            return workouts.filter((item) => item.id !== id);
        })
    }

    useEffect(() => {
        console.log(workouts)
    }, [workouts])


    const renderItem = useCallback(
        ({item, drag}) => {
            let setCount = 0
            for (let i = 0; i < item.exercises.length; i++) {
                setCount += item.exercises[i].setList.length
            }

            function DeleteButton() {
                return (
                    <View style={{flexDirection: 'row'}}>
                        <View style={[{height: 101, width: 22, backgroundColor: '#1C1C1E', marginLeft: -18}]}>
        
                        </View>
                        <TouchableOpacity onPress={deleteWorkoutHandler}>
                            <View style={[{height: 101,width: 85, backgroundColor: '#383838', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 16, borderBottomRightRadius: 16}]}>
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
                deleteWorkout(item.id)
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

    function handleChangeWorkoutName(newName) {
        setSplitName(newName)
    }
    return (
        <View style={{backgroundColor: 'black', flex: 1, alignItems: 'center'}}>
            <View style={{marginTop: 110}}>

                    <TextInput onChangeText={handleChangeWorkoutName} textAlign="right" value={splitName} style={{color: 'white', fontSize: 34}}></TextInput>
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