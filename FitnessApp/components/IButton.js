import { View, Image, Pressable, TouchableOpacity } from 'react-native';
import { Defs } from 'react-native-svg';
function IButton({style}) {



    return(
        <View style={style}>
                <Image source={require('../assets/i_logo_transparent.png')} style={{height: 30, width: 30}}></Image>
        </View>
    );
}

export default IButton;