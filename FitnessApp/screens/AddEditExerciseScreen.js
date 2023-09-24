import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { TextInput, Touchable } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, FlatList, Image} from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { SearchBar } from "react-native-elements";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
function AddEditExerciseScreen() {
    const [listdata, setListData] = useState([
        {
            "Set": "1",
            "Reps": "6",
            "Weight": "185",
            "Rpe": "6"
        },
        {
            "Set": "2",
            "Reps": "8",
            "Weight": "205",
            "Rpe": "7"
        },
        {
            "Set": "3",
            "Reps": "8",
            "Weight": "225",
            "Rpe": "7"
        },
        {
            "Set": "4",
            "Reps": "8",
            "Weight": "225",
            "Rpe": "8"
        }
    ]);

    function deleteSetItemData(key) {
        setListData((listdata) => {
            return listdata.filter((item) => item.Set != key)
        })
        setSetCount(setCount - 1)
    }

    function updateSetItemData(key, reps, weight, rpe) {
        const index = listdata.findIndex((item) => item.Set == key);
        console.log(index )
        listdata[index].Reps = reps
        listdata[index].Weight = weight
        listdata[index].Rpe = rpe
        console.log(listdata)
    }


    function addSetItemData() {
        setListData((listdata) => {
            return listdata.concat({"Set": "5", "Reps": "2", "Weight": "225", "Rpe": 5})
        })
        setSetCount(setCount +1)
    }

    const renderItem = useCallback(({item, drag}) => {

        const itemHeight = useSharedValue(60);
        const itemMargin = useSharedValue(8);


        const [reps, setReps] = useState(item.Reps);
        const [weight, setWeight] = useState(item.Weight)
        const [rpe, setRpe] = useState(item.Rpe)

        const repRef = useRef(null);
        const weightRef = useRef(null);
        const rpeRef = useRef(null);


        const handleRepsChange = (inputText) => {
            inputText = inputText.replace(/[^0-9]/g, '');
            setReps((inputText));
            updateSetItemData(item.Set, reps, weight, rpe);
        }

        const handleWeightChange = (inputText) => {
            inputText = inputText.replace(/[^0-9]/g, '');
            setWeight((inputText));
            updateSetItemData(item.Set, reps, weight, rpe);
        }

        const handleRpeChange = (inputText) => {
            inputText = inputText.replace(/[^0-9]/g, '');
            setRpe((inputText));
            updateSetItemData(item.Set, reps, weight, rpe);
        }



        const animateItemStyle = useAnimatedStyle(() => {
            return {
                height: itemHeight.value,
                marginBottom: itemMargin.value
            }
        })

        const [deleteVisible, setDeleteVisible] = useState('flex')
        function deleteSetItem() {
            itemHeight.value = withTiming(0);
            itemMargin.value = withTiming(0);
            setDeleteVisible('none')
            setTimeout(() => {
                deleteSetItemData(item.Set)
            }, 300)
        }

        return (
            <TouchableOpacity onLongPress={drag}>
                <Animated.View style={[{flexDirection: 'row'}, animateItemStyle]}>
                    
                    <View style={{width: 68, left: 10, top: 20}} >
                        <Text style={styles.dataText}>{item.Set}</Text>
                    </View>
                    <TouchableOpacity onPress={() => repRef.current.focus()} style={{ width: 60, left: -8, top: 6, marginRight: 16, backgroundColor: '#1C1C1E', borderRadius: 14, alignItems: 'center', justifyContent: 'center'}}>
                        <TextInput value={reps} onChangeText={handleRepsChange} focusable={false} keyboardAppearance="dark" keyboardType="number-pad" ref={repRef} style={[styles.dataText, {textAlign: 'right'}]}></TextInput>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => weightRef.current.focus()} style={{width: 90, left: -8, top: 6, marginRight: 16, backgroundColor: '#1C1C1E', borderRadius: 14, alignItems: 'center', justifyContent: 'center'}}>
                        <TextInput value={weight} onChangeText={handleWeightChange} focusable={false} keyboardAppearance="dark" keyboardType="number-pad" ref={weightRef} style={styles.dataText}></TextInput>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => rpeRef.current.focus()} style={{width: 60, left: -8, top: 6, marginRight: 0, backgroundColor: '#1C1C1E', borderRadius: 14, alignItems: 'center', justifyContent: 'center'}}>
                        <TextInput value={rpe} onChangeText={handleRpeChange} focusable={false} keyboardAppearance="dark" keyboardType="number-pad" ref={rpeRef} style={styles.dataText}></TextInput>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: 60, top: 6, alignItems: 'center', justifyContent: 'center', display: deleteVisible}} onPress={deleteSetItem}>
                        <View style={{height: 24, width: 3.2, position: 'absolute', backgroundColor: '#FF7171', transform: [{rotate: '45deg'}]}}>

                        </View>
                        <View style={{height: 24, width: 3.2, position: 'absolute', backgroundColor: '#FF7171', transform: [{rotate: '315deg'}]}}>

                        </View>
                    </TouchableOpacity>
                </Animated.View>
            </TouchableOpacity>
        )
    });

    const [setCount, setSetCount] = useState(4);
    const [minRepRange, setMinRepRange] = useState(6);
    const [maxRepRange, setMaxRepRange] = useState(8);

    return (
        <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center'}}>
            <View style={{top: 90, marginLeft: 27}}>
                <SearchBar platform="ios"  containerStyle={{backgroundColor: 'black ', height: 50, borderRadius: 80, marginBottom: 20, width: 390, left: -12}} inputContainerStyle={{backgroundColor: '#1C1C1E'}} placeholder="Search Exercise"></SearchBar>
                <Text style={{color: '#7F7E84', fontSize: 18, letterSpacing:-1, marginBottom: 12}}>MONDAY, DEC 12</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'white', fontSize: 32, marginBottom: 12}}>Barbell Bench Press</Text>
                    <View style={{height: 78, width: 78, position: 'absolute', top: -26, left: 295, borderRadius: 90, backgroundColor: '#FFB846',}}>
                        <Image source={require("../assets/exercises/bench.png")} style={{position: 'absolute', height: 54, width: 54, top: 10, left: 12}}></Image>
                    </View>
                </View>
                <Text style={{color: "#7F7E84", fontSize: 17, letterSpacing: .5, marginBottom: 28}}>{setCount} Sets {minRepRange}-{maxRepRange} Reps 7 RPE</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: 68}}>
                        <Text style={styles.categoryText}>Set</Text>
                    </View>
                    <View style={{width: 84}}>
                        <Text style={styles.categoryText}>Reps</Text>
                    </View>
                    <View style={{width: 102}}>
                        <Text style={styles.categoryText}>Weight</Text>
                    </View>
                    <View style={{width: 72}}>
                        <Text style={styles.categoryText}>RPE</Text>
                    </View>
                </View>
                <View style={{flex: .77}}>
                    <DraggableFlatList data={listdata} renderItem={renderItem} keyExtractor={(item) => item.Set} onDragEnd={({data}) => setListData(data)}></DraggableFlatList>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', top: 10}}>
                    <TouchableOpacity style={{width: 130, height: 38, borderRadius: 30, backgroundColor: '#87DBFF', left: -40, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white', fontSize: 20}}>Superset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addSetItemData} style={{width: 130, height: 38, borderRadius: 30, backgroundColor: '#ABABAB', left: 15, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white', fontSize: 20}}>Add Set</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={{width: 160, height: 44, borderRadius: 30, left: -17, backgroundColor: '#75E18A', justifyContent: 'center', alignItems: 'center', top: 83}}>
                        <Text style={{color: 'white', fontSize: 26}}>Done</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}




export default AddEditExerciseScreen;

const styles = StyleSheet.create({
    categoryText: {
        color: 'white',
        fontSize: 20,
    },
    dataText: {
        color: 'white',
        fontSize: 24,
    },
})