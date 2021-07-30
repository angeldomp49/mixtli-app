import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';

import './assets/js/email';
import './assets/js/jquery.fitvids';
import './assets/js/jquery.swipebox';
import './assets/js/my-app';

//import './node_modules/framework7/framework7-bundle.css';
//import './assets/css/animations.css';
//import './assets/css/reset.css';
//import './assets/css/swipebox.css';
//import './assets/css/style.css';

const Stack = createStackNavigator();

const RootStack = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Home  />
    </View>
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
