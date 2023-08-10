import { View, StyleSheet, Text, FlatList, Animated, Dimensions, Image  } from "react-native";
import { ppl } from "../data/DummyData";
import Swiper from "react-native-swiper";
import WorkoutContainerComponent from "../components/WorkourContainerComponent";
import { useState } from "react";
import StartButton from "../components/StartButton";
import Pagination from "../components/Pagination";
import { useRawData } from "@shopify/react-native-skia";
import { useRef } from "react";

function WorkoutScreen({navigation}) {

    const [workoutStarted, setWorkoutStarted] = useState(false);
    
    const [startNumberPressed, setStartNumberPressed] = useState(0);

    const [completedWorkout, setCompletedWorkout] = useState(false);
    
    const [closeSummary, setCloseSummary] = useState(false);
    
    function startWorkoutHandler() {
        setStartNumberPressed(startNumberPressed+1);
        console.log(startNumberPressed);
        setWorkoutStarted(!workoutStarted);
    }

    function completedWorkoutHandler() {
        setWorkoutStarted(false);
        setCompletedWorkout(true);
        console.log("Completed Workout");
        setCloseSummary(true);
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

    const dates = [
        {
            idx: 0,
            date: dateMinusThree
        },
        {
            idx: 1,
            date: dateMinusTwo
        },
        {
            idx: 2,
            date: dateMinusOne
        },
        {
            idx: 3,
            date: date
        },
        {
            idx: 4,
            date: datePlusOne
        },
        {
            idx: 5,
            date: datePlusTwo
        },
        {
            idx: 6,
            date: datePlusThree
        },

    ]

    function renderWorkout(itemData) {
        if (itemData.item.idx != 3) {
            return (
                <WorkoutContainerComponent index={itemData.item.idx} currIndex={currentIndex} date={itemData.item.date} workout={ppl[itemData.item.date.getDay()]} navigation={navigation}  >
                </WorkoutContainerComponent>
            );
        } else {
            return(
            <WorkoutContainerComponent index={itemData.item.idx} currIndex={currentIndex} date={itemData.item.date} workout={ppl[itemData.item.date.getDay()]} navigation={navigation}  startWorkout={workoutStarted} endWorkout={completedWorkoutHandler} closeSummary={closeSummary}>
            </WorkoutContainerComponent>
            );
        }
    }
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
  
    const handleOnScroll = event => {
      Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      )(event);
    };

    
  
    const onViewableItemsChanged = ({
        viewableItems,
      }) => {
        setCurrentIndex(viewableItems[0].index)
        console.log(currentIndex);
      };

      const viewabilityConfigCallbackPairs = useRef([
        { onViewableItemsChanged },
      ]);


      const width = Dimensions.get('window').width;
      const height = Dimensions.get('window').height;

    return (
        <View style={styles.container}>
            
            <FlatList data={dates}
            renderItem={renderWorkout}
            horizontal
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={handleOnScroll}
            viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
            initialScrollIndex={5}
            scrollEnabled={!workoutStarted}
            >
            
            </FlatList>
            <Pagination data={dates} scrollX={scrollX} show={!workoutStarted}></Pagination>

            <StartButton showButton={currentIndex == 3 && !completedWorkout} onPress={startWorkoutHandler} workoutStarted={workoutStarted}></StartButton>


        </View>

    );
}

export default WorkoutScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
    }
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



                    <Image source={require('../assets/layouts/home.png')} style={{height: height, width: width, opacity:.5, position: 'absolute', zIndex: 1}}></Image>

                    */