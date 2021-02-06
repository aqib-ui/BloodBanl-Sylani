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

const  Thanks = (props) => {
 


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
          <Text style={{color:"blue",fontWeight:"bold", fontSize:32,textAlign:"center"}}>Thanks for Donate Your Blood !</Text>
          <TouchableOpacity
             onPress={()=>props.navigation.navigate("Donate")}
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
               Go Back
              </Text>
            </TouchableOpacity>
         
        </View>
      </ScrollView>
    );
  
}

export default Thanks;
