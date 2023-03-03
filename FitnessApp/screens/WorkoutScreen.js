import { View, StyleSheet, Text, FlatList } from "react-native";
import ToolbarMenu from "../components/ToolbarMenu";
import { ppl } from "../data/DummyData";
import Swiper from "react-native-swiper";
import WorkoutContainerComponent from "../components/WorkourContainerComponent";
import { useState } from "react";
import StartButton from "../components/StartButton";
function WorkoutScreen({navigation}) {

    const [workoutStarted, setWorkoutStarted] = useState(false);
    




    function startWorkoutHandler() {
        setWorkoutStarted(!workoutStarted);
    }


    function infoButtonPressed() {
        navigation.navigate("ExerciseInfoScreen");
    }
    const date = new Date();
    const datePlusOne = new Date(date.getTime() + 86400000);
    const datePlusTwo = new Date(datePlusOne.getTime() + 86400000);
    const datePlusThree = new Date(datePlusTwo.getTime() + 86400000);
    const dateMinusOne = new Date(date.getTime() - 86400000);
    const dateMinusTwo = new Date(dateMinusOne.getTime() - 86400000);
    const dateMinusThree = new Date(dateMinusTwo.getTime() - 86400000);

    const [currentIndex, setCurrentIndex] = useState(3);
    

    return (
        <View style={styles.container}>

        <Swiper index={3} loop={false}
            dot={<View style={{ backgroundColor: '#ABA6AC', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 35, }} />}
            activeDot={<View style={{ backgroundColor: '#FBFFFF', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 35 }}/>}
                onIndexChanged={index => setCurrentIndex(index)} scrollEnabled={!workoutStarted} showsPagination={!workoutStarted}>
                    
                <WorkoutContainerComponent navigation={navigation} workout={ppl[dateMinusThree.getDay()]} date={dateMinusThree}/>

                <WorkoutContainerComponent navigation={navigation} workout={ppl[dateMinusTwo.getDay()]} date={dateMinusTwo}/>

                <WorkoutContainerComponent navigation={navigation} workout={ppl[dateMinusOne.getDay()]} date={dateMinusOne}/>

                <WorkoutContainerComponent navigation={navigation} workout={ppl[date.getDay()]} date={date} startWorkout={workoutStarted}/>

                <WorkoutContainerComponent navigation={navigation} workout={ppl[datePlusOne.getDay()]} date={datePlusOne}/>

                <WorkoutContainerComponent navigation={navigation} workout={ppl[datePlusTwo.getDay()]} date={datePlusTwo}/>
                
                <WorkoutContainerComponent navigation={navigation} workout={ppl[datePlusThree.getDay()]} date={datePlusThree}/>
        </Swiper >

        <StartButton showButton={currentIndex == 3} onPress={startWorkoutHandler} workoutStarted={workoutStarted}></StartButton>


        </View>

    );
}

export default WorkoutScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
    },
    workoutScreenContainer: {
      flex: 10.08,
      justifyContent: 'center',
      alignItems: 'center',
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
  
  /*
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

                    */