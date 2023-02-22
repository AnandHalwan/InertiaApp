
import MenuItem from "./MenuItem";
import { View, StyleSheet} from "react-native";

function ToolbarMenu({wPress, pPress, ePress, sPress, nPress, selected}) {



    return(
        <View style={styles.menuContainer}>
            <View style={styles.menuItemContainer}>
                <MenuItem onPress={wPress} source={selected == 1 ? require('../assets/exercise_menu.jpg') :  require('../assets/exercise_menu.jpg')}></MenuItem>
            </View>
            <View style={styles.menuItemContainer}>
                <MenuItem onPress={pPress} source={require('../assets/profile_menu.jpg')}></MenuItem>
            </View>
            <View style={styles.menuItemContainer}>
                <MenuItem onPress={ePress} source={require('../assets/ency_menu.jpg')}></MenuItem>
            </View>
            <View style={styles.menuItemContainer}>
                <MenuItem onPress={sPress} source={require('../assets/stats_menu.jpg')}></MenuItem>
            </View>
            <View style={styles.menuItemContainer}>
                <MenuItem onPress={nPress} source={require('../assets/nutrition_menu.jpg')}></MenuItem>
            </View>

        </View>
    );
}

export default ToolbarMenu;

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        color: 'black',
        borderTopWidth: .36,
        borderTopColor: '#242424',
        justifyContent: 'space-evenly',
    },
    menuItemContainer: {

        marginTop: 12,
        marginBottom: 30,
    },
});
