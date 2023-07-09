import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import List from "./ListItem";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function CustomDrawerContent({ navigation }) {
  return (
    <View style={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>Shop App</Text>
        <Text style={styles.drawerSubtitle}>Menu</Text>
      </View>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

const MainScreen = ({navigation}) => {

  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home">
        {() => (
          
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = 'home';
                } else if (route.name === 'Profile') {
                  iconName = 'account';
                } else if (route.name === 'Settings') {
                  iconName = 'settings';
                }

                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
              },
              tabBarLabelStyle: { fontSize: 12 },
            })}
          >
         
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Profile" component={ProfileScreen}/>
      <Drawer.Screen name="List" component={List}/>
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  drawerContent: {
    flex: 1,
  },
  drawerHeader: {
    marginTop: 100,
    backgroundColor: '#6200ee',
    padding: 20,
},
drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
},
drawerSubtitle: {
    fontSize: 16,
    color: '#fff',
}
});

export default MainScreen;