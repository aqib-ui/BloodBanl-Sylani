import React, {Component , useState, useEffect} from 'react';
import {connect} from 'react-redux';
import DropDown from './dropdown'
import database from '@react-native-firebase/database';

import { Container, Header, Content, Form, Item, Picker } from 'native-base';
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
// import Checkbox from '../components/Checkbox'
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Dropdown } from 'react-native-material-dropdown';

const Donate = (props)=> {
const [data , setData] = useState([])



database()
  .ref('users')
  .on('value', snapshot => {
    const datas=snapshot.val();
    let data=Object.values(datas)
   setData( data );
  });

// useEffect({
//   database().ref('users') .on("child_added",
//     snapshot => {setData(snapshot.val())}
  


//  } );

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: '20%',
      },
    });
    // console.log(data)

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
              fontWeight: 'bold',
              textAlign: 'center',
              padding: 20,
            }}>
            Welcome To Virtual Blood Bank !
          </Text>
        </View>

        <TouchableOpacity
         onPress={()=>props.navigation.navigate("Donor")}
          style={{
            height: 60,
            width: wp('60%'),
            backgroundColor: 'red',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <Text
          
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: '800',
            }}>
            DONATE BLOOD
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontSize: 22,
            fontWeight: '800',
            textAlign: 'center',
            paddingTop: 20,
          }}>
          Select Your Blood Group
        </Text>

        <DropDown />
<Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'center',
              padding: 20,
            }}>
            Available Donors:
          </Text>

          {
              data.map((v,i)=>{
                return <Text key={i} style={{paddingLeft:30, fontWeight:"bold", fontSize:17}} > Name: {v.name} {'\n'} Email:  {v.email} {'\n'}</Text>
              })
          }

          {/* <Text>{data}</Text> */}


      </View>
      </ScrollView>
    );
  }


export default Donate;



