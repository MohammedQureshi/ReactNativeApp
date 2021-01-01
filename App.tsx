import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import NavigationBar from './components/NavigationBar';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
      <WelcomeScreen/>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center'
  },
  pageTitle: {
    color: '#000',
    fontSize: 50,
    fontFamily: 'sans-serif',
    marginTop: 50,
  },
});
