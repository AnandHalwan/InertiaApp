import { View, StyleSheet, Text, Image, TouchableOpacity, Modal} from "react-native";
import { ppl } from "../data/DummyData";
import WorkoutContainerComponent from "../components/WorkourContainerComponent";
import {useState } from "react";
import { userId } from "./Auth";
import EditWorkout from "../components/EditWorkout";
import { useEffect } from "react";

function WorkoutScreen({navigation, route}) {

    const workout = route.params ? route.params.workout : null;
    const id = route.params ? route.params.id : null;
    const editedWorkout = route.params ? route.params.editedWorkout : null;


    const [workoutStarted, setWorkoutStarted] = useState(false);
    
    function startWorkoutHandler() {
        console.log("Start workout");
        setWorkoutStarted(true);
    }

    const date = new Date();
    const datePlusOne = new Date(date.getTime() + 86400000);
    const datePlusTwo = new Date(datePlusOne.getTime() + 86400000);
    const datePlusThree = new Date(datePlusTwo.getTime() + 86400000);
    const datePlusFour = new Date(datePlusThree.getTime() + 86400000);
    const datePlusFive = new Date(datePlusFour.getTime() + 86400000);
    const datePlusSix = new Date(datePlusFive.getTime() + 86400000);

    const [currentIndex, setCurrentIndex] = useState(0);
    const dates = [
        {
            idx: 0,
            date: date
        },
        {
            idx: 1,
            date: datePlusOne
        },
        {
            idx: 2,
            date: datePlusTwo
        },
        {
            idx: 3,
            date: datePlusThree
        },
        {
            idx: 4,
            date: datePlusFour
        },
        {
            idx: 5,
            date: datePlusFive
        },
        {
            idx: 6,
            date: datePlusSix
        },

    ]
    const [workoutReal, setWorkoutReal] = useState(workout);

    function saveEditedWorkout(newData) {
        setWorkoutReal(newData)
        editedWorkout(newData, id)
    }

    useEffect(() => {
        //console.log(workoutReal)
    }, [workoutReal])

    const [selectWorkoutVisible, setSelectWorkoutVisible] = useState(false);
    if (workoutStarted) {
        return (
            <View style={styles.container}>
                <WorkoutContainerComponent index={dates[currentIndex].idx} date={dates[currentIndex].date} workout={ppl[dates[currentIndex].date.getDay()]} navigation={navigation}></WorkoutContainerComponent>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
              <Modal visible={selectWorkoutVisible} animationType="fade" transparent={true}>
                <View style={{height: 259, width: 130, top: 125, left: 245, backgroundColor: 'black', borderRadius: 11}}>
                    <TouchableOpacity onPress={() => setCurrentIndex(0)}>
                        <View style={{height: 37, backgroundColor: "#181818", borderTopLeftRadius: 11, borderTopRightRadius: 11, justifyContent: 'center', paddingLeft: 16}}>
                            <Text style={{color: 'white', fontSize: 18, fontWeight: '300'}}>Mon</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentIndex(1)}>
                        <View style={{height: 37, backgroundColor: "#181818", justifyContent: 'center', paddingLeft: 16, borderTopWidth: .5, borderTopColor: "#3c3c3c"}}>
                            <Text style={{color: 'white', fontSize: 18, fontWeight: '300'}}>Tues</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentIndex(2)}>
                        <View style={{height: 37, backgroundColor: "#181818", justifyContent: 'center', paddingLeft: 16, borderTopWidth: .5, borderTopColor: "#3c3c3c"}}>
                            <Text style={{color: 'white', fontSize: 18, fontWeight: '300'}}>Wed</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentIndex(3)}>
                        <View style={{height: 37, backgroundColor: "#181818", justifyContent: 'center', paddingLeft: 16, borderTopWidth: .5, borderTopColor: "#3c3c3c"}}>
                            <Text style={{color: 'white', fontSize: 18, fontWeight: '300'}}>Thurs</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentIndex(4)}>
                        <View style={{height: 37, backgroundColor: "#181818", justifyContent: 'center', paddingLeft: 16, borderTopWidth: .5, borderTopColor: "#3c3c3c"}}>
                            <Text style={{color: 'white', fontSize: 18, fontWeight: '300'}}>Fri</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentIndex(5)}>
                        <View style={{height: 37, backgroundColor: "#181818", justifyContent: 'center', paddingLeft: 16, borderTopWidth: .5, borderTopColor: "#3c3c3c"}}>
                            <Text style={{color: 'white', fontSize: 18, fontWeight: '300'}}>Sat</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentIndex(6)}>
                        <View style={{height: 37, backgroundColor: "#181818", justifyContent: 'center', paddingLeft: 16, borderTopWidth: .5, borderTopColor: "#3c3c3c", borderBottomLeftRadius: 11, borderBottomRightRadius: 11}}>
                            <Text style={{color: 'white', fontSize: 18, fontWeight: '300'}}>Sun</Text>
                        </View>
                    </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity style={{position: 'absolute', left: 350, top: 90, height:40, width:40, zIndex: 1}} hitSlop={{left: 40, top: 40, bottom: 40, right: 40}} onPress={() => setSelectWorkoutVisible(!selectWorkoutVisible)}>
                <Image source={require("../assets/option.png")} style={{width: 27, height: 27}}></Image>
              </TouchableOpacity>
              <EditWorkout editedWorkout={saveEditedWorkout} index={dates[currentIndex].idx} date={dates[currentIndex].date} workout={workoutReal} navigation={navigation} startWorkout={startWorkoutHandler}></EditWorkout>
            </View>
    
        );
    }
}

export default WorkoutScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
    }
  });
  
  /*

            <Pagination data={dates} scrollX={scrollX} show={!workoutStarted}></Pagination>



                      <View style={{marginBottom: 17.5}}>
                        <ExerciseListItem name={"Barbell Bench Press"} sets={"4"} lowRepRange={"6"} highRepRange={"8"} backgroundSrc={require('../assets/Orange.png')} imgSrc={require('../assets/BenchPress.png')}></ExerciseListItem>
                    </View>
                    <View style={{marginBottom: 17.5}}>
                        <ExerciseListItem name={"Incline Dumbbell Press"} sets={"3"} lowRepRange={"8"} highRepRange={"12"} backgroundSrc={require('../assets/Green.png')}></ExerciseListItem>
                    </View>
                    <View style={{marginBottom: 17.5}}>
                        <ExerciseListItem name={"Cable Flys"} sets={"4"} lowRepRange={"10"} highRepRange={"12"} backgroundSrc={require('../assets/Blue.png')}></ExerciseListItem>

                    </View>

                    <View style={{marginBottom: 17.5}}>
                        <ExerciseListItem name={"Tricep Cable Pushdown"} sets={"3"} lowRepRange={"10"} highRepRange={"12"} backgroundSrc={require('../assets/Pink.png')}></ExerciseListItem>

                    </View>
                    <ToolbarMenu pPress={navigateProfileScreenHandler} ePress={navigateEncyclopediaScreenHandler} sPress={navigateStatisticsScreenHandler} nPress={navigateNutritionScreenHandler}></ToolbarMenu>








                <View style={styles.workoutScreenContainer}>
                    <View style={styles.headerContainer}>
                        <View style={styles.leftHeaderContainer}>
                            <View style={{marginBottom: -3}}>
                                <Text style={styles.dateText}>THURSDAY, JAN 5</Text>
                            </View>
                            <View style={{marginBottom: -3, marginLeft: -3}}>
                                <Text style={styles.workoutNameText}>{ppl[3].name}</Text>
                            </View>
                            <View>
                                <Text style={styles.durationText}>60-90 min</Text>
                            </View>
                        </View>

                        <View style={styles.rightHeaderContainer}>
                            <View style={{marginBottom: 30}}>
                            <Text> </Text>
                            </View>
                            <View style={{marginBottom: 5}}>
                            <Text style={styles.exerciseCountText} >6 Exercises</Text>
                            </View>
                            <View>
                                <Text style={styles.setCountText}>20 Sets</Text>
                            </View>
                        </View>

                    </View>
                    
                    <View style={styles.workoutContainer}>
                        <FlatList data={ppl[3].exercises} keyExtractor={(item) => item.id} renderItem={renderExerciseListItem}></FlatList>
                    </View>
                </View>







         <Swiper index={3} loop={false}
          dot={<View style={{ backgroundColor: '#ABA6AC', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 35, }} />}
          activeDot={<View style={{ backgroundColor: '#FBFFFF', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 35 }}/>}
            onIndexChanged={index => setCurrentIndex(index)}>
            <WorkoutContainerComponent workout={ppl[dateMinusThree.getDay()]} date={dateMinusThree}/>

            <WorkoutContainerComponent workout={ppl[dateMinusTwo.getDay()]} date={dateMinusTwo}/>

            <WorkoutContainerComponent workout={ppl[dateMinusOne.getDay()]} date={dateMinusOne}/>

            <WorkoutContainerComponent workout={ppl[date.getDay()]} date={date} startWorkout={workoutStarted}/>

            <WorkoutContainerComponent workout={ppl[datePlusOne.getDay()]} date={datePlusOne}/>

            <WorkoutContainerComponent workout={ppl[datePlusTwo.getDay()]} date={datePlusTwo}/>
            
            <WorkoutContainerComponent workout={ppl[datePlusThree.getDay()]} date={datePlusThree}/>
        </Swiper >




        <SwiperFlatList data={!workoutStarted ? workoutContainers : todayWorkout} renderItem={renderItemHandler} index={3} showPagination={true} onChangeIndex={index => (updateIndexHandler(index.index))}
        paginationStyle={{height: }}/>



        <ToolbarMenu pPress={navigateProfileScreenHandler} ePress={navigateEncyclopediaScreenHandler} sPress={navigateStatisticsScreenHandler} nPress={navigateNutritionScreenHandler} selected={selected}></ToolbarMenu>



                    <Image source={require('../assets/layouts/home.png')} style={{height: height, width: width, opacity:.5, position: 'absolute', zIndex: 1}}></Image>




            <WorkoutContainerComponent index={dates[3].idx} currIndex={currentIndex} date={dates[3].date} workout={ppl[dates[3].date.getDay()]} navigation={navigation}  startWorkout={workoutStarted} endWorkout={completedWorkoutHandler} closeSummary={closeSummary}>
            </WorkoutContainerComponent>



            <EditWorkout index={dates[3].idx} currIndex={currentIndex} date={dates[3].date} workout={ppl[dates[3].date.getDay()]} navigation={navigation}  startWorkout={workoutStarted} endWorkout={completedWorkoutHandler} closeSummary={closeSummary}>
            </EditWorkout>

                    */