import React, {useEffect, useState, useRef, useCallback } from "react";
import { View, StyleSheet, Text, FlatList, Modal, Dimensions, Image, TouchableOpacity} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import CurrentExerciseListItem from "./CurrentExerciseListItem";
import ExerciseListItem from "./ExerciseListItem";
import DraggableFlatList, {OpacityDecorator, ScaleDecorator} from 'react-native-draggable-flatlist'
import AddExerciseButton from "./AddExerciseButton";
import EditExerciseListItem from "./EditExerciseListItem";
import { Swipeable } from "react-native-gesture-handler";
import Exercise from "../models/Exercise";
import Animated, { useSharedValue , useAnimatedStyle, withTiming} from 'react-native-reanimated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const heightRatio = windowHeight/844;
const widthRatio = windowWidth/390;

function EditWorkout({workout, date, startWorkout, navigation, endWorkout, closeSummary, index, currIndex}) {

    const dateRel = date;
    const [workoutExercises, setWorkoutExercises] = useState(workout.exercises);

    const workoutLocal = workout
    const [fadeAnim, setFadeAnime] = useState(new Animated.Value(0));

    const [listHeight, setListHeight] = useState(525 * heightRatio);
    const [displayHeader, setDisplayHeader] = useState('flex');
    const [modalStartVisible, setModalStartVisible] = useState(false);  
    const [modalEndVisible, setModalEndVisible] = useState(false);

    const [deleteId, setDeleteId] = useState("none");

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


    function addExerciseHandler() {
        const newExercise = new Exercise("test", "Test add", 3, 4, 6, require('../assets/exercises/bench.png'), '#FFB846')
        setWorkoutExercises((workoutExercises) => [
            ...workoutExercises, newExercise
        ])
      }

      function deleteItemFromWorkout(id) {
        setWorkoutExercises((workoutExercises) => {
            return workoutExercises.filter((item) => item.id !== id);
        })
        console.log(workoutExercises);
    }

    const renderItem = useCallback(
        ({item, drag}) => {

        const itemRef = useRef();

        function deleteItemHandler(id) {
            itemRef.current.fadeOut(id);
            opacityAnimated.value = withTiming(opacityAnimated.value - 1);
            heightAnimated.value = withTiming(heightAnimated.value - 101);
            setTimeout(() => {
                deleteItemFromWorkout(id);
            }, 500);
        }

        const opacityAnimated = useSharedValue(1);
        const opacityAnimatedValue = useAnimatedStyle(() => {
            return {
                opacity: opacityAnimated.value
            }
        });

        const heightAnimated = useSharedValue(101);
        const animateHeight = useAnimatedStyle(() => {
            return {
                height: heightAnimated.value
            }
        });
        function DeleteButton() {
            
            return (
                    <View style={{flexDirection: 'row'}}>
                        <Animated.View style={[opacityAnimatedValue, animateHeight,{ width: 22, backgroundColor: '#1C1C1E', marginLeft: -18}]}>

                        </Animated.View>
                        <TouchableOpacity onPress={() => deleteItemHandler(item.id)}>
                            <Animated.View style={[opacityAnimatedValue, animateHeight,{width: 85, backgroundColor: '#7a7980', justifyContent: 'center', alignItems: 'center'}]}>
                                <Image source={require('../assets/edit.png')} style={{width: 26, height: 26}}/>
                                <Text style={{color: 'white', marginTop: 2}}>Edit</Text>
                            </Animated.View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => deleteItemHandler(item.id)}>
                            <Animated.View style={[opacityAnimatedValue, animateHeight,{width: 85, backgroundColor: '#383838', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 16, borderBottomRightRadius: 16}]}>
                                <Image source={require('../assets/trash.png')} style={{height:30, width: 30}}/>
                                <Text style={{color: 'white', marginTop: -1}}>Delete</Text>
                            </Animated.View>
                        </TouchableOpacity>
                    </View>
                )
            }


          return (
            <ScaleDecorator activeScale={1.02}>
                <Swipeable renderRightActions={DeleteButton} heightRatio={heightRatio} widthRatio={widthRatio} overshootRight={false} rightThreshold={20}>
                    <Pressable onLongPress={drag} delayLongPress={100}  pressRetentionOffset={{ bottom: 10, left: 10, right: 10, top: 10}}>
                        <EditExerciseListItem ref={itemRef} navigation={navigation} itemId={item.id} name={item.name} sets={item.sets} lowRepRange={item.lowRepRange} highRepRange={item.highRepRange} backgroundSrc={item.backgroundSrc} imgSrc={item.imgSrc} startWorkout={startWorkout} exerciseNumber={item.index} startExercise={false}  backgroundCircleColor={item.color} heightRatio={heightRatio} widthRatio={widthRatio} deleteId={deleteId}></EditExerciseListItem>
                    </Pressable>
                </Swipeable>
            </ScaleDecorator>
          );
        },
        []
      );

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




      

    return(
            <View style={styles.workoutScreenContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.leftHeaderContainer}>
                        <View style={{marginBottom: -10, height: 25, left: 12 * widthRatio}}>
                            <Text style={styles.dateText}>{daysOfWeek[dateRel.getDay()]}, {months[date.getMonth()]} {date.getDate()}</Text>
                        </View>
                        <View style={{display: displayHeader}}>
                            <View style={{marginBottom: -3, marginLeft: 10 * widthRatio}}>
                                <Text style={[styles.workoutNameText]}>{workoutLocal.name}</Text>
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
                                
                    <View style={[styles.workoutContainer]}>
                        <AddExerciseButton widthRatio={widthRatio} heightRatio={heightRatio} onPress={addExerciseHandler}></AddExerciseButton>
                        <View style={{flex: 1}}>
                            <DraggableFlatList onDragBegin={({index}) => console.log("Started Dragging")} fadingEdgeLength={100} showsVerticalScrollIndicator={false} data={workoutExercises} renderItem={renderItem} keyExtractor={(item) => item.id} onDragEnd={({data}) => setWorkoutExercises(data)} onPlaceholderIndexChange={({index}) => console.log("Changed index")} onRelease={({index}) => console.log("Released")}></DraggableFlatList>
                        </View>
                    </View>
            </View>
    );
}
export default EditWorkout;


const styles = StyleSheet.create({
    workoutScreenContainer: {
      flex: 10.08,
      justifyContent: 'center',
      alignItems: 'center',
      width: 390 * widthRatio,
    },
    toolbarMenuContainer: {
      flex: 1,
      position: 'absolute',
      top: 300 * heightRatio,
      backgroundColor: 'black',
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 90,
        width: 384 * widthRatio,
        marginRight: -2 * widthRatio,

    },
    leftHeaderContainer: {
        marginTop: -3 * heightRatio,
        
    },
    rightHeaderContainer: {
        marginTop: -1.75 * heightRatio,
    },
    textContainer: {
        color: 'white',
    },
    workoutContainer: {
        width: 384 * widthRatio,
        top: 25,
        marginLeft: 1.4 * widthRatio,
        flex: 3.4 * heightRatio,
        alignItems: 'center',
        marginBottom: 30
    },
    dateText: {
        color: '#7F7E84',
        fontSize: 16 * widthRatio,
        letterSpacing: 0,
    },
    workoutNameText: {
        color: 'white',
        fontSize: 60.5 * widthRatio,
        fontWeight: 'bold',
        marginTop: 2 * heightRatio,
        letterSpacing: .1
    },
    durationText: {
        color: 'white',
        fontSize: 26 * widthRatio,
        fontWeight: '200',
        marginTop: 0,
        left: 13 * widthRatio

    },
    exerciseCountText: {
        color: 'white',
        fontSize: 26 * widthRatio,
        textAlign: 'right',
        left: -9 * widthRatio,
        top: 1 * heightRatio,
        letterSpacing: 0.03 
    },
    setCountText: {
        color: 'white',
        fontSize: 26 * widthRatio,
        textAlign: 'right',
        marginTop: 2 * heightRatio,
        left: -10 * widthRatio
    },
    workoutSummaryContainer: {
        backgroundColor: '#1C1C1E',
        height: 600 * heightRatio,
        top: -20 * heightRatio,
        width: 385 * widthRatio,
        borderRadius: 15,
        paddingVertical: 20 * heightRatio,
        paddingHorizontal: 35 * widthRatio,
    },
  });

/*
                            <FlatList fadingEdgeLength={100} ref={flatListRef} data={workoutLocal.exercises} keyExtractor={(item) => item.id} renderItem={renderExerciseListItem} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}></FlatList>




                            <AddExerciseButton widthRatio={widthRatio} heightRatio={heightRatio} onPress={addExerciseHandler}></AddExerciseButton>

                            */