import React, { useState, useRef, useEffect } from "react";
import { View, Image, StyleSheet, Text, Animated, TextInput} from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import CircularProgress from 'react-native-circular-progress-indicator';
import CurrentExericseItemFront from "./CurrentExerciseItemFront";
import ExerciseTimer from "./ExerciseTimer";
import IButton from "./IButton";
function CurrentExerciseListItem({name, sets, lowRepRange, highRepRange, backgroundSrc, imgSrc, handleEnterButton, setNumber, navigation}) {

    const [weightText, setWeightText] = useState("Weight");
    const [repsText, setRepsText] = useState("Reps");
    const [initialFlip, setInitialFlip] = useState(false);
    const animate = useRef(new Animated.Value(0));    
    const [isFlipped, setIsFlipped] = useState(false);
    let relativeHighWeight = 0;
    let highWeight = 0;
    let highReps = 0;

    function handleTextInputFocusWeight() {
            setWeightText("");
    }

    function handleTextInputFocusReps() {
        setRepsText("");
    }

    const handleTextInputChangeWeight = (text) => {

            setWeightText(text);

    }


    const handleTextInputChangeReps = (text) => {
        setRepsText(text);
    }


    function gestureHandler() {
        if (!initialFlip) {
            doAFlip();
            setInitialFlip(true);
        }
    }

    const doAFlip = () => {
        Animated.timing(animate.current, {
            duration: 300,
            toValue: isFlipped ? 0:180,
            useNativeDriver: true,
        }).start(() => {
            setIsFlipped(!isFlipped);
        });
    };


    const interpolatedValueFront = animate.current.interpolate({
        inputRange: [0, 180],
        outputRange: ["0deg", "180deg"],
      });
    
    const interpolatedValueBack = animate.current.interpolate({
        inputRange: [0, 180],
        outputRange: ["180deg", "360deg"],
      });
    
      const rotateFront = {
        transform: [
          {
            rotateY: interpolatedValueFront,
          },
        ],
      };
    
      const rotateBack = {
        transform: [
          {
            rotateY: interpolatedValueBack,
          },
        ],
      };


    const [timer, setTimer] = useState(5);
    const [showTimer, setShowTimer] = useState(false);

        useEffect(() => {
            const intervalId = setInterval(() => {
            if (timer <= 0) {
                setShowTimer(false);

                doAFlip();

            }
            if (showTimer) {
                setTimer(timer - 1);
            }

            }, 1000); // repeat every second
        
            // cleanup function to stop interval when component unmounts
            return () => clearInterval(intervalId);
        }, [timer, showTimer]); // empty array as second argument to useEffect, to only run effect once
    function enterButtonPressedHandler() {
        if (isFlipped) {
            const weightValue = parseInt(weightText, 10);
            const repsValue = parseInt(repsText);
            const lastSet = setNumber === sets ? true : false;
            if (!isNaN(weightValue) && !isNaN(repsValue)) {
                setWeightText("Weight");
                setRepsText("Reps");
                console.log(weightValue);
                console.log(repsValue);
                setShowTimer(true);

                const relativeWeight = parseInt(weightValue / (1.0278 - 0.0278 * repsValue));
                if (relativeHighWeight < relativeWeight) {
                    relativeHighWeight = relativeWeight;
                    highWeight = weightValue;
                    highReps = repsValue;
                }
                if (initialFlip) {
                    setTimerDisplay('flex');
                    setDefaultFront('none');
                }
                if (lastSet) {
                    console.log("Call supabase to enter" + relativeHighWeight + "," + highWeight + "," + highReps);
                }
                doAFlip();
                setTimeout(() => {setTimer(5)}, 1000);

                handleEnterButton(weightValue, repsValue, lastSet, relativeHighWeight, highWeight, highReps);

            } else {
                console.log("Please enter valid weight and reps values");
            }
        }
    }

    const [defaultFront, setDefaultFront] = useState('flex');
    const [timerDisplay, setTimerDisplay] = useState('none');
    const [enterDisplay, setEnterDisplay] = useState('flex');
    const [defaultBack, setDefaultBack] = useState('none');
    return(
        <View>
            <GestureRecognizer onSwipeLeft={gestureHandler}>
            <Animated.View style={[styles.listItemContainer, styles.front, {height: 420, flexDirection: 'column', }, rotateFront]}> 
                <CurrentExericseItemFront navigation={navigation} display={defaultFront} setNumber={setNumber} backgroundSrc={backgroundSrc} imgSrc={imgSrc} name={name} sets={sets} lowRepRange={lowRepRange} highRepRange={highRepRange}></CurrentExericseItemFront>
                <ExerciseTimer start={showTimer} timer={timer} display={timerDisplay} name={name} sets={sets} lowRepRange={lowRepRange} highRepRange={highRepRange} setNumber={setNumber} initital={5}></ExerciseTimer>
            </Animated.View>
            <Animated.View style={[styles.listItemContainer, styles.back, {height: 420, flexDirection: 'column', justifyContent: 'space-between'}, rotateBack]}>
                <View style={{display: enterDisplay}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginTop: 13, marginLeft: 20}}>
                        <Text style={{fontSize: 47, color: 'white', fontWeight: '600'}}>Set {setNumber}</Text>

                        </View>
                    </View>
                    <View style={{ width:330, left: 20 , flexDirection: 'column' ,justifyContent: 'space-between', top: 80, alignItems: 'center'}}>
                        <TextInput value={weightText} keyboardType={'numeric'} onFocus={handleTextInputFocusWeight} onChangeText={handleTextInputChangeWeight} editable={isFlipped} style={{backgroundColor: '#3C3B40', height: 82, top: -50, borderRadius: 20,  fontSize: 27, color: 'white', paddingLeft: 15, marginBottom: 24, width: 333}}>
                            
                        </TextInput>
                        <TextInput value={repsText} keyboardType={'numeric'} onFocus={handleTextInputFocusReps} onChangeText={handleTextInputChangeReps} editable={isFlipped} style={{backgroundColor: '#3C3B40', height: 82, top: -50, borderRadius: 20,  fontSize: 27, color: 'white', paddingLeft: 15, marginBottom: 10, width: 333}}>
                            
                        </TextInput>
                        <Pressable onPress={enterButtonPressedHandler}>
                            <View style={styles.enterButtonContainer}>
                                <Text style={styles.enterButtonText}>
                                    Enter
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <CurrentExericseItemFront display={defaultBack} setNumber={setNumber} backgroundSrc={backgroundSrc} imgSrc={imgSrc} name={name} sets={sets} lowRepRange={lowRepRange} highRepRange={highRepRange}></CurrentExericseItemFront>
            </Animated.View>
            </GestureRecognizer>
    </View>    
        );
    }









export default CurrentExerciseListItem;

const styles = StyleSheet.create({
    listItemContainer: {
        color: '#1C1C1E',
        backgroundColor: '#1C1C1E',
        borderRadius: 16,
        justifyContent: 'space-between',
        padding: 7,
        width: 384,
        marginBottom: 17.5,
    },
    leftListItem: {
        top: 0,
        left: 0,
        
    },
    imgBackground: {
        width: 87,
        height: 87,
    },
    rightListItem: {
        marginLeft: 10,
        
    },
    textPrimary: {
        color: 'white',
    },
    textSecondary: {
        color: 'white',
        fontWeight: "300",
    },
    listItemContainerPressed: {
        color: '#1C1C1E',
        backgroundColor: '#1C1C1E',
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 7,
        width: 384,
        marginBottom: 17.5,
        height: 200,
    },
    imgContainer: {
        position: 'absolute',
        top: 8,
        left: 8,
        width: 70,
        height: 70
    },
    back: {
        backfaceVisibility: 'hidden',
        position: 'absolute',
    },
    front: {
        backfaceVisibility: 'hidden',
    },
    enterButtonContainer: {
        width: 145,
        height: 41,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:25,
        backgroundColor: '#78E28A',
        marginTop: -34,
    },
    enterButtonText: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center'
      }
});
  
/*
                <View style={{flexDirection: 'row'}}>
                    <View style={{marginTop: 13, marginLeft: 20}}>
                    <Text style={{fontSize: 47, color: 'white', fontWeight: '600'}}>Set {setNumber}</Text>

                    </View>
                </View>
                <View style={{top: -8, left: 74}}>
                    <Image source={backgroundSrc} style={{height: 230, width: 230}}>
                    </Image>
                    <Image source={imgSrc} style={{position: "absolute" , top: 20, left: 25, height: 185, width: 185}}></Image>
                </View>

                <View style={[{justifyContent: 'flex-end', marginBottom: 35, marginRight: 0, marginLeft: 10}]}>
                    <Text style={[styles.textPrimary, {fontSize: 28, textAlign: 'center'}]}>{name}</Text>
                    <Text style={[styles.textSecondary, {fontSize: 22, textAlign: 'center'}]}>{sets} sets {lowRepRange}-{highRepRange} reps</Text>

                </View>






                                <View style={{flexDirection: 'row'}}>
                    <View style={{marginTop: 13, marginLeft: 20}}>
                    <Text style={{fontSize: 47, color: 'white', fontWeight: '600'}}>Set {setNumber}</Text>

                    </View>
                </View>
                <View style={{top: 0, left: 83}}>
                <CircularProgress
                    initialValue={0}
                    maxValue={180}
                    value={180}
                    radius={100}
                    duration={180000}
                    progressValueColor={'white'}
                    progressValueFontSize={45}
                    valueSuffix={"s"}
                    valueSuffixStyle={{fontSize: 47}}
                    progressValueStyle={{fontWeight: '300'}}
                    titleFontSize={16}
                    titleColor={'#333'}
                    titleStyle={{ fontWeight: 'bold' }}
                    circleBackgroundColor={'#1C1C1E'}
                    activeStrokeColor={'red'}
                    activeStrokeSecondaryColor={'green'}
                    inActiveStrokeColor={'green'}
                    activeStrokeWidth={26.5}
                    inActiveStrokeWidth={0}
                    progressFormatter={(value) => {
                        'worklet';
                          
                        return (180 - value).toFixed(0);
                      }}
                    />


                </View>

                <View style={[{justifyContent: 'flex-end', marginBottom: 35, marginRight: 0, marginLeft: 10}]}>
                    <Text style={[styles.textPrimary, {fontSize: 28, textAlign: 'center'}]}>{name}</Text>
                    <Text style={[styles.textSecondary, {fontSize: 22, textAlign: 'center'}]}>{sets} sets {lowRepRange}-{highRepRange} reps</Text>

                </View>
*/