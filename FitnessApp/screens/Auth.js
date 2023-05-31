import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, View, Image, Text } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { supabase } from '../supabase/SupaBaseClient'
import { TouchableOpacity } from 'react-native-gesture-handler';


export let userId = "";

export default function Auth({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showEmailModal, setShowEmailModal] = useState(false);
  const[showLoginButtons, setShowLoginButtons] = useState('flex');
  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (!error) {
      console.log("Signed in");
      setShowLoginButtons('none');
      setShowEmailModal(false)
      userId = ((await supabase.auth.getUser()).data.user.id);

      getColumnValueByKey("profiles", "id", userId, "Setup")
      .then((value) => {
        const setup = value.Setup;

        if (setup) {
          console.log("User is already setup");
          navigation.navigate("TabRoot");
        } else {
          console.log("User is not setup");
          const newData = {
            WID: 0,
            UID: userId,
            // Add additional columns and values as needed
          };

          for (let i = 0; i < 7; i++) {
            const newData = {
              WID: i,
              UID: userId,
              // Add additional columns and values as needed
            };
            initializeUserWorkout('Workout', newData)
            .then((insertedRow) => {
              console.log('Inserted row:', insertedRow);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
          }
          navigation.navigate("Setup");
        }

        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
      //navigation.navigate("Setup");

      //insertSetup();
    }

    if (error) Alert.alert(error.message)
    setLoading(false)
  }


  async function getColumnValueByKey(tableName, keyColumnName, keyValue, columnToRetrieve) {
    try {
      const { data, error } = await supabase
        .from(tableName)
        .select(columnToRetrieve)
        .eq(keyColumnName, keyValue)
        .single();
  
      if (error) {
        throw error;
      }
  
      // Return the column value
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error retrieving column value:', error.message);
      // Handle the error accordingly
    }
  }

  async function initializeUserWorkout(tableName, data) {
    try {
      const { data: insertedData, error } = await supabase
        .from(tableName)
        .insert([data]);
  
      if (error) {
        throw error;
      }
  
    } catch (error) {
      console.error('Error inserting into table:', error.message);
      // Handle the error accordingly
    }
  }

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function insertSetup() {
    const { data, error } = await supabase
      .from('Setup')
      .insert({
      UID: userId
    });
    if (!error) {
      console.log("Success");
    }
    if (error) {
      console.log(error.message);
    }
  }


  function displayModalHandler() {
    setShowEmailModal(true);
  }


  return (
    <View style={styles.container}>
      <Modal style={{ backgroundColor: 'black'}} visible={showEmailModal} animationType='slide' transparent={true}>
      <View style={{backgroundColor: 'black', height: 550, justifyContent: 'center', alignItems: 'center', top: 300, paddingHorizontal: 20}}>
        <View style={[styles.verticallySpaced, styles.mt20,]}>
          <Input
            label="Email"
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="email@address.com"
            autoCapitalize={'none'}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Input
            label="Password"
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize={'none'}
          />
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
        </View>
        <View style={styles.verticallySpaced}>
          <Button title="Sign up" disabled={loading} onPress={() => signUpWithEmail()} />
        </View>
      </View>
      </Modal>
      <View style={{alignItems: 'center'}}>
        <Image source={require("../assets/Login/inertia_transparent.png") } style={{height:210, width: 300, top: -150,}}>
          
        </Image>
        <View style={{top: 50, display: showLoginButtons}}>
          <View>
            <TouchableOpacity style={{ height: 45, width: 250, backgroundColor: 'white', borderRadius: 80, marginBottom: 20, alignItems: 'center', flexDirection: 'row'}} onPress={displayModalHandler}>
              <Image source={require('../assets/Login/email.png')} style={{height: 22, width: 30, marginLeft: 22}}></Image>
              <Text style={styles.buttonText}>Sign in with email</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={{height: 45, width: 250, backgroundColor: 'white', borderRadius: 80, flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../assets/Login/google.png')} style={{height: 23, width: 22, marginLeft: 26, }}></Image>
              <Text style={[styles.buttonText, {marginLeft: 33}]}>Sign in with Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 0
  },
  buttonText: {
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 28
  }

})