import React, { useState, useRef, useEffect } from "react";
import { View, Image, StyleSheet, Text, Animated, TouchableOpacity} from "react-native";
import { Pressable } from "react-native";
import { back } from "react-native/Libraries/Animated/Easing";
import IButton from "./IButton";
import { supabase } from "../supabase/SupaBaseClient";
import { userId } from "../screens/Auth";

function ExerciseListItem({id, name, sets, lowRepRange, highRepRange, backgroundSrc, imgSrc, startWorkout, startExercisem, navigation, expandedView}) {

    
    const [height, setHeight] = useState(101);
    const [imgBackGroundHeight, setImgBackGroundHeight] = useState(87);
    const [imgBackGroundWidth, setImgBackGroundWidth] = useState(87);
    const [imgBackGroundTop, setImgBackGroundTop] = useState(0);
    const [imgBackGroundLeft, setImgBackGroundLeft] = useState(0);

    const [imgHeight, setImgHeight] = useState(70);
    const [imgWidth, setImgWidth] = useState(70);
    const [imgTop, setImgTop] = useState(8);
    const [imgLeft, setImgLeft] = useState(8);
    
    const [rightListItemJustify, setRightListItemJustify] = useState('center');



    const [expanded, setExpanded] = useState(false);

    const [listItemContainerFlexDirection, setListItemContainerFlexDirection] = useState('row');

    const [textPrimaryFontSize, setTextPrimaryFontSize] = useState(22);
    
    const [textSecondaryFontSize, setTextSecondaryFontSize] = useState(17);

    const [textAlignment, setTextAlignment] = useState('right');

    const [rightListItemMarginBottom, setRightListItemMarginBottom] = useState(0);

    const [rightListItemMarginRight, setRightListItemMarginRight] = useState(8);

    const [rightListItemMarginLeft, setRightListItemMarginLeft] = useState(0);

    const [displayIButton, setDisplayIButton] = useState('none');
      function onPressHandler() {
        if (!startWorkout) {
        if(expanded) {
            setHeight(101);
            setImgBackGroundHeight(87);
            setImgBackGroundWidth(87);
            setImgBackGroundTop(0);
            setImgBackGroundLeft(0);
            setImgHeight(70);
            setImgWidth(70);
            setImgTop(7);
            setImgLeft(7);
            setRightListItemJustify('center');
            setListItemContainerFlexDirection('row');
            setTextPrimaryFontSize(22);
            setTextSecondaryFontSize(17);
            setTextAlignment('right');
            setRightListItemMarginBottom(0);
            setRightListItemMarginRight(8);
            setRightListItemMarginLeft(0);
            setDisplayIButton('none');

        } else{
            setHeight(420);
            setImgBackGroundHeight(230);
            setImgBackGroundWidth(230);
            setImgBackGroundTop(64);
            setImgBackGroundLeft(74);
            setImgHeight(185);
            setImgWidth(185);
            setImgTop(20);
            setImgLeft(25);
            setRightListItemJustify('flex-end');
            setListItemContainerFlexDirection('column');
            setTextPrimaryFontSize(28);
            setTextSecondaryFontSize(22);
            setTextAlignment('center');
            setRightListItemMarginBottom(35);
            setRightListItemMarginRight(0);
            setRightListItemMarginLeft(10);
            setDisplayIButton('flex');

        }
        setExpanded(!expanded);
    }
      }
    async function navigateHandler() {
        console.log(console.log(id));
        const oneM = getWorkoutLogs(id, 30);
        const threeM = getWorkoutLogs(id, 92);
        const sixM = getWorkoutLogs(id, 184);
        const oneY = getWorkoutLogs(id, 365);
        const lft = getWorkoutLogs(id, 365);
        navigation.navigate("ExerciseInfoScreen", {eid: id, oneM: oneM, threeM: threeM, sixM: sixM, oneY: oneY, lft: lft});
    }

    async function getWorkoutLogs(exerciseId, minusDays) {
            var currentDate = new Date();
            currentDate.setDate(currentDate.getDate() - minusDays);

            var year = currentDate.getFullYear();
            var month = String(currentDate.getMonth() + 1).padStart(2, '0');
            var day = String(currentDate.getDate()).padStart(2, '0');

            var formattedDate = year + '-' + month + '-' + day;
            try {
            const { data, error } = await supabase
                .from("Log")
                .select()
                .eq("UID", userId)
                .eq("ExerciseId", exerciseId)
                .gte("Date", formattedDate)
                .order('Date', {ascending: true})
        
            if (error) {
                throw error;
            }
        
            // Return the column value
            console.log(data);

            const formattedData = []
            for (let i = 0; i < data.length; i++) {
                var dateString = data[i].Date;
                var date = new Date(dateString);
                var dateInteger = Date.parse(date);
                formattedData.push({
                    timestamp: dateInteger,
                    value: data[i].RelWeight
                })
            }
            console.log(formattedData);
            return formattedData;
            } catch (error) {
            console.error('Error retrieving column value:', error.message);
            // Handle the error accordingly
            }
        
    }

      useEffect(()=> {
        if (startWorkout || !expandedView) {
            setHeight(101);
            setImgBackGroundHeight(87);
            setImgBackGroundWidth(87);
            setImgBackGroundTop(0);
            setImgBackGroundLeft(0);
            setImgHeight(70);
            setImgWidth(70);
            setImgTop(7);
            setImgLeft(7);
            setRightListItemJustify('center');
            setListItemContainerFlexDirection('row');
            setTextPrimaryFontSize(22);
            setTextSecondaryFontSize(17);
            setTextAlignment('right');
            setRightListItemMarginBottom(0);
            setRightListItemMarginRight(8);
            setRightListItemMarginLeft(0);
            setDisplayIButton('none');
        }
      }, [startWorkout, expandedView]);

    function infoButtonPressedHandler() {
        navigation.navigate("ExerciseInfoScreen");
    }


    return(
        <View>
        <TouchableOpacity onPress={navigateHandler}>
            <Animated.View style={[styles.listItemContainer, styles.front, {height: height, flexDirection: listItemContainerFlexDirection}]}>
                <IButton display={displayIButton} onPress={infoButtonPressedHandler}></IButton>
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

        </TouchableOpacity>   
    </View>    
        );
    }









export default ExerciseListItem;

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
    }
});
  

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
*/