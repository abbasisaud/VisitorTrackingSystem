import React, {useState} from "react";
import {Text,
StyleSheet,ImageBackground, TextInput, View,
ToastAndroid,
TouchableOpacity, Easing,Image
} from "react-native";
import { Checkbox } from "react-native-paper";
import COLORS from "./colors";

export default function UpdatePath(props){
    function showToast() {
        ToastAndroid.showWithGravity(
            "Added",
            ToastAndroid.LONG,
            ToastAndroid.CENTER ,
           
          );
    }
      function Onsave(){
        showToast()
        props.navigation.navigate('AdminHome')

       
    }

return(

    <View style={{alignItems:'center',borderWidth:1, margin:10,marginTop:"30%",borderColor:'#adb5bd'}}>
             <ImageBackground style={{height:'100%',width:'100%',opacity:0.5,position:'absolute',}}  source={require('./images/bg2.jpg')}/> 

            <View style={{alignItems:"center" }}> 

            <TouchableOpacity
                    style={styles.roundButton1}
                    onPress={()=>{props.navigation.navigate('UpdateTime')}}

                     >
                    <Text style={styles.textbuton}>Update Time</Text>
                    </TouchableOpacity>
                <TouchableOpacity
                    style={styles.roundButton1}
                    onPress={()=>{props.navigation.navigate('DeleteCamera')}}

                    >
                    <Text style={styles.textbuton}>Delete Connected Camera</Text>
                </TouchableOpacity>
                
           
                <TouchableOpacity
                    style={styles.roundButton1}
                    onPress={()=>{props.navigation.navigate('AddPath')}}
                     >
                    <Text style={styles.textbuton}>Add Connected Camera</Text>
                </TouchableOpacity>
                    </View>
    </View>
);

}
const styles=StyleSheet.create(
    {          
       
        textbuton:{
            fontSize:25, 
            color:"#495057" ,                                
            fontWeight:'bold'
           },            
        roundButton1: {
            width: '80%',
            height: '20%',
            
           justifyContent: 'center',
           alignItems: 'center',           
            borderRadius:10,
            marginTop:30,
            backgroundColor:"#ced4da",
            
          },       
    }
  )