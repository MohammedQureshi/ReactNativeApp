import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, Button, Alert, TouchableOpacity } from 'react-native';

export function WelcomeScreen({navigation}){
    return(
        <ImageBackground 
        style={styles.background}
        source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
                <Text style={styles.subTitle}>Mohammed Faisal Qureshi</Text>
            </View>
            <TouchableOpacity onPress={() => Alert.alert('Login Button Pressed')} style={styles.loginButtonContainer}>
                <Text style={styles.appButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MainViewScreen')} style={styles.registerButtonContainer}>
                <Text style={styles.appButtonText}>Register</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    subTitle: {
        marginTop: 20,
        fontSize: 20,
        color: '#52504f',
    },
    logoContainer:{
        position: 'absolute',
        top: 200, 
        alignItems: 'center',
    },
    loginButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: 250,
        margin: 10,
        marginBottom: 0,
        bottom: 100,
      },
      registerButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: 250,
        margin: 10,
        bottom: 100,
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})
