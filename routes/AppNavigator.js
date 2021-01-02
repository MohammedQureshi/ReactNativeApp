import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from '../components/WelcomeScreen';
import { MainViewScreen } from '../components/MainViewScreen';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="MainViewScreen" component={MainViewScreen} />
    </Stack.Navigator>
  );
}
  
  export const AppNavigator = () => (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
  