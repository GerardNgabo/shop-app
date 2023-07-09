import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './compopnents/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './compopnents/navigation/StackNavigator';

export default function App() {
  return (
     <NavigationContainer>
       <StackNavigator/>
     </NavigationContainer>
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
