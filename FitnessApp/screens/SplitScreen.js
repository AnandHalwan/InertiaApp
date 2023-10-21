import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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

    useEffect(() => {
        console.log(workouts[0].exercises[0])
    }, [workouts])

    const WorkoutItem = (item) => {
        let setCount = 0
        for (let i = 0; i < item.item.exercises.length; i++) {
            setCount += item.item.exercises[i].setList.length
        }
        const index = item.children[1]
        console.log(index)
        return(
            <TouchableOpacity style={styles.workoutItem} onPress={() => goToWorkout(item.item, item.item.id)}>
                <View>
                   <Text style={{color: 'white', fontSize: 29, fontWeight: '500', marginBottom: 4}}>{item.item.name}</Text>
                   <Text style={{color: 'white', fontSize: 22, fontWeight: '200'}}>{item.item.durationLow}-{item.item.durationHigh} min</Text> 
                </View>
                <View>
                    <Text style={{color: 'white', fontSize: 22, fontWeight: '200', marginTop: 6, marginBottom: 6}}>{item.item.exercises.length} Exercises</Text>
                    <Text style={{color: 'white', fontSize: 22, fontWeight: '200',}}>{setCount} Sets</Text>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <View style={{backgroundColor: 'black', flex: 1, alignItems: 'center'}}>
            <View style={{marginTop: 110}}>
                <Text style={{color: 'white', fontSize: 34}}>{splitName}</Text>
            </View>
            <ScrollView style={{marginTop: 40}}>
                <View style={{marginBottom: -54}}>
                    {workouts.map((data, index) => (
                        <WorkoutItem key={data.id} item={data}>idx={index} </WorkoutItem>
                    ))}
                </View>
                <TouchableOpacity style={[styles.buttonContainer]}>
                    <Image source={require('../assets/plus.png')} style={{height: 40, width: 40,}}/>
                </TouchableOpacity>
            </ScrollView>
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
        height: 101,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 32,
        alignItems: 'center'
    },
    buttonContainer: {
        color: '#1C1C1E',
        backgroundColor: '#1C1C1E',
        borderRadius: 16,
        padding: 7,
        width: 370,
        marginBottom: 9,
        justifyContent: 'center',
        alignItems: 'center',
        height: 66,
        top: 65
    },
})

export default SplitScreen