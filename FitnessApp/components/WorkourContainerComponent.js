import { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Animated, Modal, Dimensions, Image } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import CurrentExerciseListItem from "./CurrentExerciseListItem";
import ExerciseListItem from "./ExerciseListItem";
import { LinearGradient } from "expo-linear-gradient";
function WorkoutContainerComponent({workout, date, startWorkout, navigation, endWorkout, closeSummary}) {
    const dateRel = date;

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    const [fadeAnim, setFadeAnime] = useState(new Animated.Value(0));







    const [listHeight, setListHeight] = useState(525);
    const [displayHeader, setDisplayHeader] = useState('flex');
    const [modalStartVisible, setModalStartVisible] = useState(false);  
    const [modalEndVisible, setModalEndVisible] = useState(false);
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

    useEffect(() =>{
        if (startWorkout) {
            setModalStartVisible(true);
            setListHeight(625);
            setDisplayHeader('none');

        } else {
            setModalStartVisible(false);
            setListHeight(525);
            setDisplayHeader('flex');
        }
    }, [startWorkout]);


    useEffect(() => {
        setModalEndVisible(false);
    }, [closeSummary]);


    function modalPressHandler() {
        setModalStartVisible(false);

    }

    const [currentExercise, setCurrentExercise] = useState(0);
    const [setCounter, setSetCounter] = useState(1);

    const completedSetHandler = (weight, reps, lastSet) => {
        setSetCounter(setCounter+1);
        console.log("Child passed to parent");
        console.log(weight, reps);
        if (lastSet) {
                if (currentExercise === (workout.exerciseCount - 1)){
                    setModalEndVisible(true);
                    console.log("Workout ended");
                } else {
                    console.log("Last set!");
                    console.log(currentExercise);
                    console.log(workout.exerciseCount)
                    setCurrentExercise(currentExercise+1);
                    setSetCounter(1);
                }

        }
    }

    function renderExerciseListItem(itemData) {
        let startExercise = false;
        if (itemData.index == currentExercise && startWorkout) {
             startExercise = true;
             return <CurrentExerciseListItem name={itemData.item.name} sets={itemData.item.sets} lowRepRange={itemData.item.lowRepRange} highRepRange={itemData.item.highRepRange} backgroundSrc={itemData.item.backgroundSrc} imgSrc={itemData.item.imgSrc} startWorkout={startWorkout} exerciseNumber={itemData.index} handleEnterButton={completedSetHandler} setNumber={setCounter} ></CurrentExerciseListItem>
        }
        return <ExerciseListItem navigation={navigation} name={itemData.item.name} sets={itemData.item.sets} lowRepRange={itemData.item.lowRepRange} highRepRange={itemData.item.highRepRange} backgroundSrc={itemData.item.backgroundSrc} imgSrc={itemData.item.imgSrc} startWorkout={startWorkout} exerciseNumber={itemData.index} startExercise={startExercise}></ExerciseListItem>
    }

    useEffect(() => {
        if (modalStartVisible) {
            console.log("Start modal");
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
              }).start();
        } else {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 0,
                useNativeDriver: true,
              }).start();
        }


    }, [fadeAnim, modalStartVisible, startWorkout]);  

    function setEndVisible() {
        setModalEndVisible(false);
    }

    const workoutLocal = workout;
    return(
            <Animated.View style={styles.workoutScreenContainer}>
                      <Modal
                        animationType="none"
                        
                        transparent={false}
                        visible={modalStartVisible}
                        onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalStartVisible(!modalStartVisible);
                            }}>
                                <Pressable onPress={modalPressHandler}>
                                    <View style={{height: windowHeight, width: windowWidth, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center'}}>
                                        <Animated.View style={{opacity: fadeAnim, marginLeft: 30, marginRight: 30}}>
                                        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
                                            "The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character."
                                        </Text>
                                        </Animated.View>
                                    </View>
                                </Pressable>
                            </Modal>

                            <Modal
                            transparent={true}
                            animationType="fade"
                            visible={modalEndVisible}
                            
                            >
                                <View style={styles.endWorkoutModalContainer}>
                                    <View style={styles.workoutSummaryContainer}>
                                        <View>
                                            <Text style={styles.workoutSummaryHeader}>
                                                Summary
                                            </Text>
                                        </View>
                                        <View style={styles.infoOneContainer}>
                                            <View>
                                                <Text style={styles.caloriesText}>
                                                    Calories
                                                </Text>
                                                <View style={styles.calContainer}>
                                                    <Text style={styles.caloriesValOne}>
                                                        427
                                                    </Text>
                                                    <Text style={styles.caloriesValTwo}>
                                                        CAL
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={styles.caloriesText}>
                                                    Avg Heart Rate
                                                </Text>
                                                <View style={styles.calContainer}>
                                                    <Text style={styles.caloriesValOne}>
                                                        117
                                                    </Text>
                                                    <Text style={styles.caloriesValTwo}>
                                                        BPM
                                                    </Text>
                                                </View>

                                            </View>
                                        </View>
                                        <View>
                                            <View style={styles.timeRow}>
                                                <Text style={styles.timeHeader}>
                                                    Duration
                                                </Text>
                                                <Text style={styles.timeValue}>
                                                    1:37:32
                                                </Text>
                                            </View>
                                            <View style={styles.timeRow}>
                                                <Text style={styles.timeHeader}>
                                                    Active Time
                                                </Text>
                                                <Text style={styles.timeValue}>
                                                    1:02:12
                                                </Text>
                                            </View>
                                            <View style={styles.timeRow}>
                                                <Text style={styles.timeHeader}>
                                                    Avg Rest Time
                                                </Text>
                                                <Text style={styles.timeValue}>
                                                    1:32
                                                </Text>
                                            </View>
                                            <View style={[styles.timeRow, {marginTop: 22}]}>
                                                <Text style={styles.timeHeader}>
                                                    PRs
                                                </Text>
                                                <Text style={styles.timeValue}>
                                                    3
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.checkContainer}>
                                        <Pressable onPress={endWorkout}>
                                            <Image source={require('../assets/checkmark_copy.png')} style={{height: 120, width: 120, left: -4, top: -7}}></Image>
                                        </Pressable>

                                    </View>
                                </View>
                            </Modal>
                <View style={styles.headerContainer}>
                    <View style={styles.leftHeaderContainer}>
                        <View style={{marginBottom: -10, height: 25}}>
                            <Text style={styles.dateText}>{daysOfWeek[dateRel.getDay()]}, {months[date.getMonth()]} {date.getDate()}</Text>
                        </View>
                        <View style={{display: displayHeader}}>
                            <View style={{marginBottom: -3, marginLeft: -3}}>
                                <Text style={styles.workoutNameText}>{workoutLocal.name}</Text>
                            </View>
                            <View>
                                <Text style={styles.durationText}>{workoutLocal.durationLow}-{workoutLocal.durationHigh} min</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.rightHeaderContainer, {display: displayHeader}]}>
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
                                
                    <View style={[styles.workoutContainer, {height: listHeight}]}>

                            <FlatList data={workoutLocal.exercises} keyExtractor={(item) => item.id} renderItem={renderExerciseListItem} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}></FlatList>

                    </View>
            </Animated.View>
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
    endWorkoutModalContainer: {
        height: 650,
        alignSelf: 'center',
        width: 400,
        top: 115,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    workoutSummaryContainer: {
        backgroundColor: '#1C1C1E',
        height: 600,
        top: -20,
        width: 385,
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 35,
    },
    workoutSummaryHeader: {
        color: 'white',
        fontSize: 50,
        fontWeight: '600'
    },
    summaryText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '300'
    },
    infoOneContainer: {
        marginTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    calContainer: {
        flexDirection: 'row',
        marginBottom: 24,
    },
    caloriesText: {
        color: '#acacae',
        fontSize: 22,
        marginBottom: 10
    },
    caloriesValOne: {
        color: '#f85b5b',
        fontSize: 24
    },
    caloriesValTwo: {
        color: '#f85b5b',
        fontSize: 16,
        marginTop: 8
    },
    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    timeHeader: {
        color: 'white',
        fontSize: 28,
        fontWeight: '300',
        marginBottom: 12
    },
    timeValue: {
        color: '#acacae',
        fontSize: 28,
        fontWeight: '300',
        marginBottom: 12
    },
    checkContainer: {
        backgroundColor: 'black',
        height: 110,
        width: 110,
        borderRadius: 55,
        position: 'absolute',
        top: 539
    }


  });

