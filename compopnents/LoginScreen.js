import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './HomeScreen';
// import ProfileScreen from './ProfileScreen';
// import DrawerHome from './DrawerHome';

export default function LoginScreen({navigation}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const validateForm = () => {
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter username and password');
            return false;
        }
        return true;
    };

    const Stack = createNativeStackNavigator();
    return (
       
        <View style={styles.container}>
        <ImageBackground
            source={require('../assets/splash.png')}
            style={styles.background}
        >
            <Text style={styles.title}>Welcome back</Text>
            <View style={styles.form}>
                <Input
                    placeholder="Username"
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <Input
                    placeholder="Password"
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    rightIcon={{
                        type: 'font-awesome',
                        name: showPassword ? 'eye-slash' : 'eye',
                        onPress: () => setShowPassword(!showPassword),
                    }}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={!showPassword}
                />
                <Button title="Login" onPress={() => {
                    // if (validateForm()) {
                    //     alert('Login successful');
                    //     navigation.navigate('Home');
                    // }
                    navigation.navigate('MainScreen');
                }} />
            </View>
        </ImageBackground>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    form: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
});
