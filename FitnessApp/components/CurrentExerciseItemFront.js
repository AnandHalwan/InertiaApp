import { View, Image, Text , StyleSheet} from "react-native";
import IButton from "./IButton";
import { TouchableOpacity } from "react-native-gesture-handler";


function CurrentExericseItemFront({setNumber, backgroundCircleColor, imgSrc, name, sets, lowRepRange, highRepRange, display, navigation}) {

    function infoButtonPressed() {
        console.log("Info");
        navigation.navigate("ExerciseInfoScreen");
    }


    return (
        <View style={{display: display}}>
            <View style={{flexDirection: 'row',}}>
                <View style={{marginTop: 8, marginLeft: 20}}>
                <Text style={{fontSize: 47, color: 'white', fontWeight: '600'}}>Set {setNumber}</Text>

                </View>
                <TouchableOpacity style={{top: 19, left: 185, zIndex: 3}} hitSlop={{top: 50, left: 50, right: 50, bottom: 50}}>
                    <IButton></IButton>
                </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center'}}>
                <View style={{top: 0, left: 0}}>
                    <View style={{height: 230, width: 230, backgroundColor: backgroundCircleColor, borderRadius: 180}}>
                    </View>
                    <Image source={imgSrc} style={{position: "absolute" , top: 40, left: 45, height: 140, width: 140}}></Image>
                </View>

                <View style={[{justifyContent: 'flex-end', marginTop: 17, marginRight: 0, marginLeft: 10}]}>
                    <Text style={[styles.textPrimary, {fontSize: 28, textAlign: 'center'}]}>{name}</Text>
                    <Text style={[styles.textSecondary, {fontSize: 16, textAlign: 'center'}]}>{sets} sets {lowRepRange}-{highRepRange} reps</Text>

                </View>
            </View>
        </View>
    );

}

export default CurrentExericseItemFront;


const styles = StyleSheet.create({
    listItemContainer: {
        color: '#1C1C1E',
        backgroundColor: '#1C1C1E',
        borderRadius: 16,
        justifyContent: 'space-between',
        padding: 7,
        width: 384,
        marginBottom: 9,
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
        color: '#808080',
        fontWeight: "300",
        marginTop: 8
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