import { View, StyleSheet, Text, Pressable, Image, TextInput, Dimensions } from "react-native";
import EncyclopediaCircle from "../components/EncyclopediaCircle";
import * as React from 'react';
const { width, height } = Dimensions.get('window');

const EncyclopediaScreen = ({navigation}) => {

  const handleSearch = () => {
    console.log('Search button pressed');
  };

  const categoryPressedHandler = (categoryName) => {
    navigation.navigate('Information', { bodyPart: categoryName });
  };
  

  return (
      <View style={styles.container}>
        
        <View style={{top: 400}}>

          <Text style={[styles.buttonText, {top: (height*-282.3)/812, right: (width*-2)/375 ,fontSize: 32.2*Math.min(width/375, height/812)}]}>Encyclopedia</Text>
          <View style={styles.imageContainer}>
          <Image source={require('../assets/Book1.png')} style={[styles.image, {top: (height*-260)/812, right: (width*-2)/375, width: 35*Math.min(width/375, height/812),height: 35*Math.min(width/375, height/812)}]}/>
          </View>
          <View style={styles.contain}>
            <TextInput placeholder="Search" style={[styles.searchButton, {top: (height*-80)/812, left: (width*142)/375, fontSize: 16*Math.min(width/375, height/812), width: 95*Math.min(width/375, height/812),height: 33*Math.min(width/375, height/812)}]} onPress={handleSearch}>
            <Text style={[styles.searchButtonText]}>Search</Text>
            </TextInput>
            <EncyclopediaCircle positionX={85} positionY={-216} color={'#f78481'} onPress={() => categoryPressedHandler('Chest')} />
            <EncyclopediaCircle positionX={198} positionY={-216} color={'#9ff590'} onPress={() => categoryPressedHandler('Back')} />
            <EncyclopediaCircle positionX={23} positionY={-110} color={'#f4f78e'} onPress={() => categoryPressedHandler('Shoulders')} />
            <EncyclopediaCircle positionX={260} positionY={-110} color={'#f28568'} onPress={() => categoryPressedHandler('Arms')} />
            <EncyclopediaCircle positionX={85} positionY={-5} color={'#7ea3f9'} onPress={() => categoryPressedHandler('Legs')} />
            <EncyclopediaCircle positionX={198} positionY={-5} color={'#f88bd7'} onPress={() => categoryPressedHandler('Calves')} />
          </View>
        </View>
      </View>
  );
}


export default EncyclopediaScreen;


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'black',
},
imageContainer: {
alignSelf: 'center',
justifyContent: 'center'
},
contain: {
flex: 1,
},
placeholderContainer: {
flex: 8,
justifyContent: 'center',
alignItems: 'center',
},
toolbarMenuContainer: {
flex: 1,
},
buttonContainer: {
position: 'absolute',
width: 135,
height: 38,
top: 700,
alignItems: 'center',
justifyContent: 'center',
borderRadius:18,
backgroundColor: '#78E28A'
},
buttonText: {
color: 'white',
textAlign: 'center',
},
image: {
alignSelf: 'center',
justifyContent: 'center'
},
row: {
flexDirection: 'row',
},
circle: {
width: 100,
height: 100,
borderRadius: 50,
borderWidth: 4,
justifyContent: 'center',
alignItems: 'center',
marginHorizontal: -60,
marginLeft: 78,
},
innerCircle: {
width: 80,
height: 80,
borderRadius: 40,
},
searchButton: {
backgroundColor: '#404040',
borderRadius: 25,
textAlign: 'center'
},
searchButtonText: {
color: 'white',
},
});