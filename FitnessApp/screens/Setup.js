import { Text, View, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import GoalSetup from "./SetupComponents/GoalSetup";
import ExperienceSetup from "./SetupComponents/ExperienceSetup";
import { useEffect, useState, useRef } from "react";

function Setup() {
    const swiperRef = useRef(null);

    const scrollByIndex = (index) => {
      if (swiperRef && swiperRef.current) {
        swiperRef.current.scrollBy(index, true);
      }
    };

    return (
        <View style={{ flex: 1}}>
            <Swiper ref={swiperRef}  index={0} dot={<View style={{ backgroundColor: '#ABA6AC', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 35, }} />}
            activeDot={<View style={{ backgroundColor: '#FBFFFF', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 35 }}/>}>
                <GoalSetup onPressDown={() =>scrollByIndex(1)}></GoalSetup>
                <ExperienceSetup onPressDown={() =>scrollByIndex(1)}/>
            </Swiper>
        </View>
    );
}

export default Setup;


const styles = StyleSheet.create({
    container: {backgroundColor: 'black', flex: 1, alignItems: 'center', justifyContent: 'center'},
    headerText: {
        color: 'white',
        fontSize: 55,
        fontWeight: '600',
        top: -180
    }
});