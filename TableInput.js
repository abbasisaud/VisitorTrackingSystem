import React, {useState} from "react";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';
import { ScrollView,Text,TextInput,
StyleSheet,Image, View, TouchableOpacity, FlatList,
Platform,
alert,  Button
} from "react-native";
const AppD= () => {

const requestCameraPermission = async () => {
try {
const granted = await PermissionsAndroid.request(
PermissionsAndroid.PERMISSIONS.CAMERA,
{
title: "App Camera Permission",
message:"App needs access to your camera ",
buttonNeutral: "Ask Me Later",
buttonNegative: "Cancel",
buttonPositive: "OK",
}
);
if (granted === PermissionsAndroid.RESULTS.GRANTED) {
console.log("Camera permission given");
openCamera();
} else {
console.log("Camera permission denied");
}
} catch (err) {
    console.warn(err);
    }
    };
    
    const openCamera = () => {
    //Alert.alert('asdasd');
    const options = {
    storageOptions: {
    path: 'images',
    mediaType: 'photo',
    },
    includeBase64: true,
    };
    
    launchCamera(options, response => {
      console.log('Response =', response);
    });
    };
    return (

        
        <Button title={'Open camera'} onPress={() => requestCameraPermission()} />
        
        );
        };
        
        export default AppD;