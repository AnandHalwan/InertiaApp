import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from "react";

import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions} from "react-native";
import { Pressable } from "react-native";
import { back } from "react-native/Libraries/Animated/Easing";
import IButton from "./IButton";
import { supabase } from "../supabase/SupaBaseClient";
import { userId } from "../screens/Auth";
import { Swipeable } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const EditExerciseListItem = (props, ref) => {
    const styles = StyleSheet.create({
        listItemContainer: {
            color: '#1C1C1E',
            backgroundColor: '#1C1C1E',
            borderRadius: 16,
            justifyContent: 'space-between',
            padding: 7 * props.widthRatio,
            width: 370 * props.widthRatio,
            left: 1 * props.widthRatio,
        },
        outerListItemContainer: {
            color: '#1C1C1E',
            backgroundColor: '#1C1C1E',
            borderRadius: 16,
            justifyContent: 'space-between',
            padding: 7 * props.widthRatio,
            width: 370 * props.widthRatio,
            marginBottom: 9 * props.heightRatio,
            left: 1 * props.widthRatio,
            height: 101 * props.heightRatio
        },
        leftListItem: {
            top: 0,
            left: 0,
            
        },
        imgBackground: {
            width: 87 * props.widthRatio,
            height: 87 * props.heightRatio,
        },
        rightListItem: {
            marginLeft: 10 * props.widthRatio,
            
        },
        textPrimary: {
            color: 'white',
            letterSpacing: -.1,
            left: -1 * props.widthRatio,
            top: -1 * props.heightRatio
        },
        textSecondary: {
            color: '#808080',
            fontWeight: "300",
        },
        listItemContainerPressed: {
            color: '#1C1C1E',
            backgroundColor: '#1C1C1E',
            borderRadius: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 7 * props.heightRatio,
            width: 384 * props.widthRatio,
            marginBottom: 17.5,
            height: 200 *props.heightRatio,
        },
        imgContainer: {
            position: 'absolute',
            top: 8 * props.heightRatio,
            left: 8 * props.widthRatio,
            width: 70 * props.widthRatio,
            height: 70 * props.heightRatio
        },
        back: {
            backfaceVisibility: 'hidden',
            position: 'absolute',
        },
        front: {
            backfaceVisibility: 'hidden',
        }
    });
    useImperativeHandle(ref, () => ({
        fadeOut: (deleteId) => {
            if (deleteId == props.itemId) {
                console.log(deleteId);
                opacityAnimated.value = withTiming(opacityAnimated.value - 1)
                heightAnimated.value = withTiming(heightAnimated.value - 101)
                marginAnimated.value = withTiming(marginAnimated.value - 9);
            }
        },
        moveUp: () => {
            console.log(props.itemId)
        }
    }))



    const [displayIButton, setDisplayIButton] = useState('none');

    function onPressHandler() {
        console.log("Navigate")
    }

    const opacityAnimated = useSharedValue(1);
    const opacityAnimatedValue = useAnimatedStyle(() => {
        return {
            opacity: opacityAnimated.value
        }
    })

    const heightAnimated = useSharedValue(101);
    const animateHeight = useAnimatedStyle(() => {
        return {
            height: heightAnimated.value
        }
    });

    const marginAnimated = useSharedValue(9);
    const animateMargin = useAnimatedStyle(() => {
        return {
            marginBottom: marginAnimated.value
        }
    })
    const [height, setHeight] = useState(101*props.heightRatio);
    return(
                <Animated.View style={[styles.listItemContainer, styles.front, opacityAnimatedValue, animateHeight, animateMargin,{opacity: 1, flexDirection: 'row'}]}>
                    <View style={{top: 8 * props.heightRatio, left: 4 * props.widthRatio, width: height - (25*props.heightRatio), height: height - (25*props.heightRatio), borderRadius: 90, backgroundColor: props.backgroundCircleColor}}>
                        
                    </View>
                    <Image source={props.imgSrc} style={{position: "absolute" , top: 25 * props.heightRatio, left: 24 * props.widthRatio, height: 50 * props.heightRatio, width: 50 * props.widthRatio}}></Image>
                    <View style={[{justifyContent: 'center', marginBottom: 0, marginRight: 8 * props.widthRatio, marginLeft: 0}]}>
                        <Text style={[styles.textPrimary, {fontSize: 20 * props.widthRatio, textAlign: 'right'}]}>{props.name}</Text>
                        <Text style={[styles.textSecondary, {fontSize: 17 * props.widthRatio, textAlign: 'right'}]}>{props.sets} sets {props.lowRepRange}-{props.highRepRange} reps</Text>

                    </View>
                </Animated.View>
        );
    }

export default forwardRef(EditExerciseListItem);

  

/*
        top: 8,
        left: 8,
        width: 70,
        height: 70

        top: 19,
        left: 29,
        width: 185,
        height: 185, 

        width: 237,
        height: 237,

        top: 65,
        left: 70,



        width: 87,
        height: 87,





    textPrimary: {
        color: 'white',
        fontSize: 22,
        textAlign: 'right',
    },
    textSecondary: {
        color: 'white',
        fontSize: 17,
        textAlign: 'right',
        fontWeight: "300",
    },



        rightListItem: {
        marginRight: 8,
        marginBottom: 30,
        
    },



                <Animated.View style={[styles.listItemContainer, styles.back, {height: height, flexDirection: listItemContainerFlexDirection}]}>
                <View style={{top: imgBackGroundTop, left: imgBackGroundLeft}}>
                    <Image source={backgroundSrc} style={{height: imgBackGroundHeight, width: imgBackGroundWidth}}>
                    </Image>
                    <Image source={imgSrc} style={{position: "absolute" , top: imgTop, left: imgLeft, height: imgHeight, width: imgWidth}}></Image>
                </View>

                <View style={[{justifyContent: rightListItemJustify, marginBottom: rightListItemMarginBottom, marginRight: rightListItemMarginRight, marginLeft: rightListItemMarginLeft}]}>
                    <Text style={[styles.textPrimary, {fontSize: textPrimaryFontSize, textAlign: textAlignment}]}>{name}</Text>
                    <Text style={[styles.textSecondary, {fontSize: textSecondaryFontSize, textAlign: textAlignment}]}>{sets} sets {lowRepRange}-{highRepRange} reps</Text>

                </View>
            </Animated.View>


            {itemId, name, sets, lowRepRange, highRepRange, backgroundCircleColor, imgSrc, navigation, props.widthRatio, props.heightRatio, deleteId, ref}
*/