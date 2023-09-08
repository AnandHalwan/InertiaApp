import React, { useState, useRef, useCallback } from "react";
import { View, StyleSheet, Text,  Dimensions, Image, TouchableOpacity, Touchable} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import DraggableFlatList, {OpacityDecorator} from 'react-native-draggable-flatlist'
import EditExerciseListItem from "./EditExerciseListItem";
import { Swipeable } from "react-native-gesture-handler";
import Exercise from "../models/Exercise";
import Animated, { useSharedValue , useAnimatedStyle, withTiming, withSpring} from 'react-native-reanimated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const heightRatio = windowHeight/844;
const widthRatio = windowWidth/390;

function EditWorkout({workout, date, startWorkout, navigation}) {

    const dateRel = date;
    const [workoutExercises, setWorkoutExercises] = useState(workout.exercises);

    const workoutLocal = workout

    const [displayHeader, setDisplayHeader] = useState('flex');


    const [edit, setEdit] = useState(false);

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


    function openEditView() {
        console.log("Open edit view now");
        leftValueAnimated.value = withSpring(leftValueAnimated.value - 379);
        listTopAnimated.value = withTiming(listTopAnimated.value + 70)
        setEdit(true);
    }


    function closeEditScreen() {
        console.log("Stop editing");
        leftValueAnimated.value = withTiming(leftValueAnimated.value - 380);
        setTimeout(() => {
            leftValueAnimated.value = leftValueAnimated.value + 759;
            listTopAnimated.value = withSpring(listTopAnimated.value - 70);
        }, 300);
        setEdit(false);
    }

    const listTopAnimated = useSharedValue(-5);
    const animateListTop = useAnimatedStyle(() => {
        return {
            top: listTopAnimated.value
        }
    })

    const leftValueAnimated = useSharedValue(380);
    const animateLeftValue = useAnimatedStyle(() => {
        return {
            left: leftValueAnimated.value
        }
    });



    const renderItem = useCallback(
        ({item, drag}) => {

        const itemRef = useRef();

        function deleteItemHandler(id) {
            opacityAnimated.value = withTiming(opacityAnimated.value - 1);
            heightAnimated.value = withTiming(heightAnimated.value - 101);
            animateMargin.value = withTiming(animateMargin.value - 9);
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

        const animateMargin = useSharedValue(9);
        const animatedMarginValue = useAnimatedStyle(() => {
            return {
                marginBottom: animateMargin.value
            }
        });
        
        function DeleteButton() {
            
            return (
                    <View style={{flexDirection: 'row'}}>
                        <View style={[{height: 101, width: 22, backgroundColor: '#1C1C1E', marginLeft: -18}]}>

                        </View>
                        <TouchableOpacity onPress={() => deleteItemHandler(item.id)}>
                            <View style={[{height: 101, width: 85, backgroundColor: '#7a7980', justifyContent: 'center', alignItems: 'center'}]}>
                                <Image source={require('../assets/edit.png')} style={{width: 26, height: 26}}/>
                                <Text style={{color: 'white', marginTop: 2}}>Edit</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => deleteItemHandler(item.id)}>
                            <View style={[{height: 101,width: 85, backgroundColor: '#383838', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 16, borderBottomRightRadius: 16}]}>
                                <Image source={require('../assets/trash.png')} style={{height:30, width: 30}}/>
                                <Text style={{color: 'white', marginTop: -1}}>Delete</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }


          return (
            <Animated.View style={[animateHeight, opacityAnimatedValue, animatedMarginValue]}>
            <OpacityDecorator>
                <Swipeable enabled={edit}  renderRightActions={DeleteButton} heightRatio={heightRatio} widthRatio={widthRatio} overshootRight={false} rightThreshold={20}>
                    <Pressable onLongPress={edit ? drag : openEditView} delayLongPress={100}  pressRetentionOffset={{ bottom: 10, left: 10, right: 10, top: 10}}>
                        <EditExerciseListItem ref={itemRef} navigation={navigation} itemId={item.id} name={item.name} sets={item.sets} lowRepRange={item.lowRepRange} highRepRange={item.highRepRange} backgroundSrc={item.backgroundSrc} imgSrc={item.imgSrc} exerciseNumber={item.index} startExercise={false}  backgroundCircleColor={item.color} heightRatio={heightRatio} widthRatio={widthRatio} deleteId={deleteId}></EditExerciseListItem>
                    </Pressable>
                </Swipeable>
            </OpacityDecorator>
            </Animated.View>
          );
        },
        [edit]
      );

    return(
            <View style={styles.workoutScreenContainer}>
                <TouchableOpacity style={{top: 700, position: 'absolute', zIndex: 1}} onPress={edit ? closeEditScreen : startWorkout}>
                    <View style={{height: 45, width: 137, borderRadius: 60, backgroundColor: '#74e189', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'white', fontSize: 23}}>{edit ? "Done" : "Start"}</Text>
                    </View>
                </TouchableOpacity>
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
                                
                    <View style={[{flex: 15 * heightRatio, top: 40},styles.workoutContainer]}>
                            <Animated.View  style={[animateLeftValue,styles.buttonContainer]}>
                                <Image source={require('../assets/plus.png')} style={{height: 40, width: 40,}}/>
                            </Animated.View>
                        <Animated.View style={[animateListTop,{flex: 1}]}>
                            <DraggableFlatList onDragBegin={({index}) => console.log("Started Dragging")} fadingEdgeLength={100} showsVerticalScrollIndicator={false} data={workoutExercises} renderItem={renderItem} keyExtractor={(item) => item.id} onDragEnd={({data}) => setWorkoutExercises(data)} onPlaceholderIndexChange={({index}) => console.log("Changed index")} onRelease={({index}) => console.log("Released")}></DraggableFlatList>
                        </Animated.View>
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
        marginLeft: 1.4 * widthRatio,
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
    buttonContainer: {
        color: '#1C1C1E',
        backgroundColor: '#1C1C1E',
        borderRadius: 16,
        padding: 7 * widthRatio,
        width: 370 * widthRatio,
        marginBottom: 9 * heightRatio,
        justifyContent: 'center',
        alignItems: 'center',
        height: 66 * heightRatio,
        top: 65
    },
  });

/*
                            <FlatList fadingEdgeLength={100} ref={flatListRef} data={workoutLocal.exercises} keyExtractor={(item) => item.id} renderItem={renderExerciseListItem} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}></FlatList>




                            <AddExerciseButton widthRatio={widthRatio} heightRatio={heightRatio} onPress={addExerciseHandler}></AddExerciseButton>

                            */