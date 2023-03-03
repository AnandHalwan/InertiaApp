import { View, Image, Pressable, TouchableOpacity } from 'react-native';
import { Defs } from 'react-native-svg';
function IButton({display, onPress}) {



    return(
        <View style={{ display: display, position: 'absolute', height: 100, width: 100, zIndex: 1}}>
            <TouchableOpacity onPress={onPress}>

                <Image source={require('../assets/i_logo_transparent.png')} style={{height: 30, width: 30, left: 330, top: 30}}></Image>
            </TouchableOpacity>

        </View>
    );
}

export default IButton;