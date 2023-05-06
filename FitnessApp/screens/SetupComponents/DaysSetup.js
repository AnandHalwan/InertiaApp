import { useState } from "react";
import { StyleSheet, View, Text, Pressable} from "react-native";

function DaysSetup() {
    const [wedPressed, setWedPressed] = useState(false);
    function pressHandler() {
        setWedPressed(!wedPressed);
    }


    return(
        <View style={styles.screenContainer}>
        <Pressable onPress={pressHandler}>
        <View style={[styles.flowItemContainer, {backgroundColor: wedPressed ? '#60f077' : '#1c1c1c'}]}>
            <Text style={styles.flowItemText}>
                Wed
            </Text>
        </View>
        </Pressable>

        </View>
    );
}

export default DaysSetup;
const styles = StyleSheet.create({
    flowItemContainer: {
        backgroundColor: '#1c1c1c',
        height: 160,
        width: 160,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flowItemText: {
        color: 'white',
        fontSize: 39,
        fontWeight: '500'
    },
    screenContainer: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});