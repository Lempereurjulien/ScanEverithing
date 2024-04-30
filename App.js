import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from "react";

import {ResultProvider} from "./Contexts/ResultContext";

import ResultScreen from "./Screens/ResultScreen";
import ScanScreen from "./Screens/ScanScreen";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
      <ResultProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Scann" component={ScanScreen}/>
        <Stack.Screen name="Result" component={ResultScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
      </ResultProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
