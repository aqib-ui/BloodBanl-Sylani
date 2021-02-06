import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login'
import SignUp from './signup'
import Donate from './donate'
import Donor from './donor'
import Thanks from './thanks'

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign up" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Donate" component={Donate} />
        <Stack.Screen name="Donor" component={Donor} />
        <Stack.Screen name="Thanks" component={Thanks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;