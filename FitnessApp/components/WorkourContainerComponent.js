import { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import CurrentExerciseListItem from "./CurrentExerciseListItem";
import ExerciseListItem from "./ExerciseListItem";
function WorkoutContainerComponent({workout, date, startWorkout}) {
    const dateRel = date;


    const daysOfWeek = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY"    ]

    const months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
    ]
    const [currentExercise, setCurrentExercise] = useState(0);
    
    const [setCounter, setSetCounter] = useState(1);

    const completedSetHandler = (weight, reps, lastSet) => {
        setSetCounter(setCounter+1);
        console.log("Child passed to parent");
        console.log(weight, reps);
        if (lastSet) {
            console.log("Last set!");
            setCurrentExercise(currentExercise+1);
            setSetCounter(1);
        }
    }

    function renderExerciseListItem(itemData) {
        let startExercise = false;
        if (itemData.index == currentExercise && startWorkout) {
             startExercise = true;
             return <CurrentExerciseListItem name={itemData.item.name} sets={itemData.item.sets} lowRepRange={itemData.item.lowRepRange} highRepRange={itemData.item.highRepRange} backgroundSrc={itemData.item.backgroundSrc} imgSrc={itemData.item.imgSrc} startWorkout={startWorkout} exerciseNumber={itemData.index} handleEnterButton={completedSetHandler} setNumber={setCounter}></CurrentExerciseListItem>
        }
        return <ExerciseListItem name={itemData.item.name} sets={itemData.item.sets} lowRepRange={itemData.item.lowRepRange} highRepRange={itemData.item.highRepRange} backgroundSrc={itemData.item.backgroundSrc} imgSrc={itemData.item.imgSrc} startWorkout={startWorkout} exerciseNumber={itemData.index} startExercise={startExercise}></ExerciseListItem>
    }



    const workoutLocal = workout;
    return(
            <View style={styles.workoutScreenContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.leftHeaderContainer}>
                        <View style={{marginBottom: -3}}>
                            <Text style={styles.dateText}>{daysOfWeek[dateRel.getDay()]}, {months[date.getMonth()]} {date.getDate()}</Text>
                        </View>
                        <View style={{marginBottom: -3, marginLeft: -3}}>
                            <Text style={styles.workoutNameText}>{workoutLocal.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.durationText}>{workoutLocal.durationLow}-{workoutLocal.durationHigh} min</Text>
                        </View>
                    </View>

                    <View style={styles.rightHeaderContainer}>
                        <View style={{marginBottom: 30}}>
                            <Text> </Text>
                                </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={styles.exerciseCountText} >{workout.exerciseCount} Exercises</Text>
                            </View>
                            <View>
                                <Text style={styles.setCountText}>{workout.totalSets} Sets</Text>
                            </View>
                        </View>
                    </View>
                                
                    <View style={styles.workoutContainer}>
                        <FlatList data={workoutLocal.exercises} keyExtractor={(item) => item.id} renderItem={renderExerciseListItem} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}></FlatList>
                    </View>
            </View>
    );
}
export default WorkoutContainerComponent;


const styles = StyleSheet.create({
    workoutScreenContainer: {
      flex: 10.08,
      justifyContent: 'center',
      alignItems: 'center',
      width: 390,
    },
    toolbarMenuContainer: {
      flex: 1,
      position: 'absolute',
      top: 300,
      backgroundColor: 'black',
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 90,
        width: 384,
        marginRight: -2

    },
    leftHeaderContainer: {
        marginTop: -3,
        
    },
    rightHeaderContainer: {
        marginTop: -1.75,
    },
    textContainer: {
        color: 'white',
    },
    workoutContainer: {
        flex: 2.9,
        width: 384,
        marginTop: -37.1,
        marginLeft: 1.4,
        
    },
    dateText: {
        color: '#7F7E84',
        fontSize: 16,
        fontWeight: 'bold'
    },
    workoutNameText: {
        color: 'white',
        fontSize: 57,
        fontWeight: 'bold',
        marginTop: 3,
    },
    durationText: {
        color: 'white',
        fontSize: 26,
        fontWeight: '200',
        marginTop: 3,

    },
    exerciseCountText: {
        color: 'white',
        fontSize: 26,
        textAlign: 'right',
    },
    setCountText: {
        color: 'white',
        fontSize: 26,
        textAlign: 'right',
        marginTop: 1.75,
    },

  });

