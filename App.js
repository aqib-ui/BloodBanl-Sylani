/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Login from './app/component/login';
import SignUp from './app/component/signup';
import Donate from './app/component/donate';
import Donor from './app/component/donor';
import {TextInput} from 'react-native-gesture-handler';
import AppNavigation from './app/component/Navigation'

const App = () => {
  return (
   <>
   <AppNavigation />
   </>
  );
};

export default App;
