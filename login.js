import React, {Component,useState} from 'react';
import {connect} from 'react-redux';
import AppNavigation from '../component/Navigation'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';

import Ionicons from 'react-native-vector-icons/Ionicons';

const  Login = (props) => {
 


  const [logemail,setLogemail]=useState("");
  const [logpassword,setLogpassword]=useState("");

  

const sign_in =()=>{

 
  
  auth()
  .signInWithEmailAndPassword(logemail, logpassword)
  .then(() => {
   props.navigation.navigate("Donate")
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
}

    const styles = StyleSheet.create({
      container: {
        // flex: 1,
        backgroundColor: 'white',
        marginTop: '40%',
        paddingBottom:30,
        paddingTop:30
      },
    });

    return (
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              width: wp('100%'),
              height: hp('12%'),
              backgroundColor: 'white',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <Text
              style={{
                fontSize: 28,
                textAlign: 'center',
              }}>
              Welcome to the
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 28,
              }}>
              Blood Bank App!
            </Text>
          </View>

          <TextInput
           value={logemail}
           onChangeText={text=>setLogemail(text)}
            placeholderTextColor="#817f81"
            placeholder="Enter Email"
            keyboardType="email-address"
            style={{
              alignSelf: 'center',
              width: wp('80%'),
              margin: 5,
              paddingLeft: 10,
              height: 60,
              borderColor: '#252525',
              borderRadius: 10,
              fontWeight: '500',
              fontSize: 20,
              padding: 5,
              backgroundColor: 'white',
              borderWidth: 1,
            }}
          />

          <TextInput
          value={logpassword}
          onChangeText={text=>setLogpassword(text)}
            placeholderTextColor="#817f81"
            placeholder="Enter Password"
            secureTextEntry={true}
            style={{
              alignSelf: 'center',
              width: wp('80%'),
              margin: 5,
              paddingLeft: 10,
              height: 60,
              borderColor: '#252525',
              borderRadius: 10,
              fontWeight: '500',
              fontSize: 20,
              padding: 5,
              backgroundColor: 'white',
              borderWidth: 1,
            }}
          />

          <TouchableOpacity
          onPress={sign_in}
         
            style={{
              height: 60,
              width: wp('40%'),
              backgroundColor: '#2ac4c1',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: '500',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <Text  onPress={()=>props.navigation.navigate("Sign up")} style={{color:"blue" , fontSize:28,fontWeight:"bold",textAlign:"center",paddingTop:20}}> Not a member? sign up now</Text>
        </View>
      </ScrollView>
    );
  
}

export default Login;
