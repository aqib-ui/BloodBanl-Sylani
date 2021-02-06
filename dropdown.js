import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, Header, Content, Form, Item, Picker } from 'native-base';
import database from '@react-native-firebase/database';

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


class  DropDown extends Component {
  constructor(props) {
  super(props);
  this.state = {
    selected2: undefined,
    

  };


}
onValueChange2(value) {
  this.setState({
    selected2: value
  });
}

 
    render() {
      
      const styles = StyleSheet.create({
        container: {
          // flex: 1,
          backgroundColor: 'white',
          marginTop: '20%',
        },
      });
  
      return (
        <>
            

<Form>
<Item picker style={{width:"75%",alignSelf:"center", backgroundColor:"red",color:"white", borderRadius:10,marginTop:30}}>
  <Picker
    mode="dropdown"
    style={{ width:undefined,color:"white",fontWeight:800 }}
    placeholder="Select your SIM"
    placeholderStyle={{ color: "#bfc6ea" }}
    placeholderIconColor="#007aff"
    selectedValue={this.state.selected2}
    onValueChange={this.onValueChange2.bind(this)}
  >
    <Picker.Item label="A+" value="key0" />
    <Picker.Item label="A-" value="key1" />
    <Picker.Item label="B+" value="key2" />
    <Picker.Item label="B-" value="key3" />
    <Picker.Item label="AB+" value="key4" />
    <Picker.Item label="AB-" value="key4" />
    <Picker.Item label="O+" value="key4" />
    <Picker.Item label="O-" value="key4" />
  </Picker>
</Item>
</Form>
</>
      );
    }
  }

  export default DropDown;