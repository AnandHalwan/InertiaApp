import { Text, View, TouchableOpacity, Image } from "react-native";

function DeleteButton({onPress}) {

    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{height: 101, width: 22, backgroundColor: '#1C1C1E', marginLeft: -18}}>

            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={{height: 101,width: 85, backgroundColor: '#7a7980', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../assets/edit.png')} style={{width: 26, height: 26}}/>
                    <Text style={{color: 'white', marginTop: 2}}>Edit</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress}>
                <View style={{height: 101,width: 85, backgroundColor: '#383838', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 16, borderBottomRightRadius: 16}}>
                    <Image source={require('../assets/trash.png')} style={{height:30, width: 30}}/>
                    <Text style={{color: 'white', marginTop: -1}}>Delete</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default DeleteButton;