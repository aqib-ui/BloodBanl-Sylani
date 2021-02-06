import React, {Component,useEffect,useState,useHistory} from 'react';
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
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';

import database from '@react-native-firebase/database';

import Ionicons from 'react-native-vector-icons/Ionicons';

const  SignUp= (props)=> {
  
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
 

 
 
const save_data =()=>{
  
  auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    props.navigation.navigate("Login")
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
// const nav = () =>{
//   var v=true
//   if (v===true){
//     return props.navigation.navigate("Login")
//   }
// }
//   const save_data =()=>{
//     const user = {
//       email,
//       password
//     }
//     // console.log(user)
//     database().ref('/').child('users').push(user)
// }

 
  // // constructor(props) {
  //   super(props);
  //   this.state = {
  //     input: '',
  //     hidePassword: true,
  //     email: '',
  //     password: '',
  //     show_password: false,
  //     showAlert: true,
  //   };
  // }
  // handleChangeInput = (text) => {
  //   this.setState({input: text});
  // };

  // render() {
    const styles = StyleSheet.create({
      container: {
        // flex: 1,
        backgroundColor: 'white',
        marginTop: '20%',
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
            keyboardType="default"
            placeholderTextColor="#817f81"
            placeholder="First Name"
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
            placeholderTextColor="#817f81"
            placeholder="Last Name"
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
          value={email}
          onChangeText={text=>setEmail(text)}   
      
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
            value={password}
            onChangeText={(text)=>setPassword(text)}
          
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
          <TextInput
         
            placeholderTextColor="#817f81"
            placeholder="Confirm Password"
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
            onPress={save_data }
         
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
              Sign Up
            </Text>
          </TouchableOpacity>

          <Text  onPress={()=>props.navigation.navigate("Login")} style={{color:"blue" , fontSize:28,fontWeight:"bold",textAlign:"center",paddingTop:20   }}> already  sign up?</Text>
          
        </View>
      </ScrollView>
    );
    
  }
// }

export default SignUp;
