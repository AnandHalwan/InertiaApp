import { View, Image, Text , StyleSheet} from "react-native";
import IButton from "./IButton";
import { useEffect, useImperativeHandle, useState } from "react";
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import { forwardRef } from "react";
const CurrentExericseItemFront = (props, ref) => {

    function infoButtonPressed() {
        console.log("Info");
        navigation.navigate("ExerciseInfoScreen");
    }

    const styles = StyleSheet.create({
        listItemContainer: {
            color: '#1C1C1E',
            backgroundColor: '#1C1C1E',
            borderRadius: 16,
            padding: 7,
            width: 370,
            left: 1,
        },
        textPrimary: {
            color: 'white',
            letterSpacing: -.1,
        },
        textSecondary: {
            color: '#808080',
            fontWeight: "300",
        },
    });


    useImperativeHandle(ref, () => ({
        expand() {
            console.log("Success")
            makeLarge();
        }
    }))

    function makeLarge() {
        itemOpacity.value = withTiming(itemOpacity.value - 1);
        setTimeout(() => {
            itemHeight.value = withTiming(itemHeight.value + 319);
            backgroundDimensions.value = withTiming(backgroundDimensions.value + 154);
            backgroundLeft.value = withTiming(backgroundLeft.value + 60);
            backgroundTop.value = withTiming(backgroundTop.value + 69);
        }, 300)
        setTimeout(() => {
            setTextTop(152);
            setTextAlign('center');
            setJustifyContent('center')
            setTextMarginRight(0);
            setPrimaryFontSize(28);
            setSecondaryFontSize(17);
            setImageLeft(115);
            setImageTop(120);
            setImageDimensions(140);
            setHeaderDisplay('flex');
            itemOpacity.value = withTiming(itemOpacity.value + 1);
            headerOpacity.value = withTiming(headerOpacity.value + 1);
        }, 600)

    }

    const itemHeight = useSharedValue(101);
    const animateItemHeight = useAnimatedStyle(() => {
        return {
            height: itemHeight.value
        }
    })

    const itemOpacity = useSharedValue(1);
    const animateItemOpacity = useAnimatedStyle(() => {
        return {
            opacity: itemOpacity.value
        }
    })

    const backgroundDimensions = useSharedValue(76);
    const backgroundLeft = useSharedValue(11);
    const backgroundTop = useSharedValue(12);
    const animateBackgroundSize = useAnimatedStyle(() => {
        return {
            height: backgroundDimensions.value,
            width: backgroundDimensions.value,
            left: backgroundLeft.value,
            top: backgroundTop.value,

        }
    })
    const [justifyContent, setJustifyContent] = useState('flex-end');
    const [textTop, setTextTop] = useState(0);
    const [textAlign, setTextAlign] = useState('right');
    const [textMarginRight, setTextMarginRight] = useState(8);
    const [primaryFontSize, setPrimaryFontSize] = useState(20);
    const [secondaryFontSize, setSecondaryFontSize] = useState(17);
    const [textMarginBottom, setTextMarginBottom] = useState(0);

    const [imageDimensions, setImageDimensions] = useState(50);
    const [imageLeft, setImageLeft] = useState(24);
    const [imageTop, setImageTop] = useState(25);
    const [headerDisplay, setHeaderDisplay] = useState('none');

    const headerOpacity = useSharedValue(0);
    const animateHeaderOpacity = useAnimatedStyle(() => {
        return {
            opacity: headerOpacity.value
        }
    })
    return (
        <Animated.View style={[styles.listItemContainer, styles.front,{flexDirection: 'row', alignItems: 'center', justifyContent: justifyContent, display: props.display}, animateItemHeight]}>
            <Animated.View style={[animateHeaderOpacity, {position: 'absolute', display: headerDisplay, top: 13, left: 25}]}>
                <Text style={{fontSize: 47, color: 'white', fontWeight: '600'}}>Set {props.setNumber}</Text>
            </Animated.View>
            <Animated.View style={[animateBackgroundSize, {borderRadius: 180, backgroundColor: props.backgroundCircleColor, position: 'absolute'}]}>
                
            </Animated.View>
            <Animated.Image source={props.imgSrc} style={[animateItemOpacity,{position: "absolute" , top: imageTop, left: imageLeft, height: imageDimensions, width: imageDimensions}]}></Animated.Image>
            <Animated.View style={[animateItemOpacity,{justifyContent: 'center', marginBottom: 0, marginRight: textMarginRight, marginLeft: 0, top: textTop}]}>
                <Text style={[styles.textPrimary, {fontSize: primaryFontSize, textAlign: textAlign, marginBottom: textMarginBottom}]}>{props.name}</Text>
                <Text style={[styles.textSecondary, {fontSize: secondaryFontSize, textAlign: textAlign}]}>{props.sets} sets {props.lowRepRange}-{props.highRepRange} reps</Text>

            </Animated.View>
        </Animated.View>
    );

}

export default forwardRef(CurrentExericseItemFront);

