import { View, Image, Text , StyleSheet} from "react-native";
import IButton from "./IButton";


function CurrentExericseItemFront({setNumber, backgroundSrc, imgSrc, name, sets, lowRepRange, highRepRange, display}) {
    return (
        <View style={{display: display}}>
            <View style={{flexDirection: 'row',}}>
                <View style={{marginTop: 13, marginLeft: 20}}>
                <Text style={{fontSize: 47, color: 'white', fontWeight: '600'}}>Set {setNumber}</Text>

                </View>
            </View>
            <IButton display={'flex'}></IButton>
            <View style={{top: -8, left: 74}}>
                <Image source={backgroundSrc} style={{height: 230, width: 230}}>
                </Image>
                <Image source={imgSrc} style={{position: "absolute" , top: 20, left: 25, height: 185, width: 185}}></Image>
            </View>

            <View style={[{justifyContent: 'flex-end', marginBottom: 35, marginRight: 0, marginLeft: 10}]}>
                <Text style={[styles.textPrimary, {fontSize: 28, textAlign: 'center'}]}>{name}</Text>
                <Text style={[styles.textSecondary, {fontSize: 22, textAlign: 'center'}]}>{sets} sets {lowRepRange}-{highRepRange} reps</Text>

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