import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Home from './src/pages/Home';
import Welcome from './src/pages/Welcome';

const Stack = createStackNavigator();

const RootStack = () =>{
  return(
    <Provider store={}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}/>

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
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
