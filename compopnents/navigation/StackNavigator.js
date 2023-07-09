import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../LoginScreen';
import List from '../ListItem';
import MainScreen from '../MainScreen';

const Stack = createStackNavigator();


const StackNavigator = () => {
    return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }

  export { StackNavigator };