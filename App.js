import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/components/popups/Login';
import Register from './src/components/popups/Register';

const Stack = createStackNavigator();

const RootStack = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}/>
        <Stack.Screen
          name="Register"
          component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <RootStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
