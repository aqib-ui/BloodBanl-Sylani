import React, {Component , useState} from 'react';
import {connect} from 'react-redux';
import { Container, Header, Content, Form, Item, Picker } from 'native-base';
import database from '@react-native-firebase/database';
import DropDown from './dropdown'

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

import Ionicons from 'react-native-vector-icons/Ionicons';


const  Donor = (props) => {
const [name , setName] = useState("")
const [email , setEmail] = useState("")
 


const setData =()=>{
        
  let user ={
    name,
    email,

  }
  database().ref('/').child('users').push(user)
  props.navigation.navigate("Thanks")
}
    
    
      
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
                  fontSize: 32,
                  fontWeight:"bold",
                  textAlign: 'center',
                }}>
                Donors Form
              </Text>
              
            </View>
  
            <TextInput
              onChangeText={(text)=>setName(text)}
              keyboardType="default"
              placeholderTextColor="#817f81"
              placeholder="Full Name"
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
            onChangeText={(text)=>setEmail(text)}
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
              placeholderTextColor="#817f81"
              placeholder="wieght in KGs"
              keyboardType="number-pad"
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
              placeholder="Adress"
              
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
              placeholder="Number"
              keyboardType="number-pad"
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


<DropDown />
<View style={{
    flexDirection:"row",
    justifyContent:"center",
    flexWrap:"wrap",
    justifyContent:"space-evenly",
    marginTop:30,
    marginBottom:30
}}>
  
            <TouchableOpacity
            //  onPress={()=>this.props.navigation.navigate("Thanks")}
            onPress={setData}
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
                Submit
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={()=>this.props.navigation.navigate("Donate")}
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
                Back
              </Text>
            </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      );
    }
  

  export default Donor;