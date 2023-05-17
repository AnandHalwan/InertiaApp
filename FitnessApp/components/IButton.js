import { View, Image, Pressable, TouchableOpacity } from 'react-native';
import { Defs } from 'react-native-svg';
function IButton({display, onPress}) {



    return(
        <View style={{ display: display, position: 'absolute', height: 40, width: 40, left: 330, top: 30}}>
            <TouchableOpacity onPress={onPress} hitSlop={{top: 50, bottom: 50, left: 50, right: 50}}>
                <Image source={require('../assets/i_logo_transparent.png')} style={{height: 30, width: 30}}></Image>
            </TouchableOpacity>

        </View>
    );
}

export default IButton;