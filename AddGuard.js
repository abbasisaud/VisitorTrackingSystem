import React, {useState} from "react";
import {Text,
StyleSheet,ImageBackground, TextInput, View,
ToastAndroid,
TouchableOpacity, Easing,Image
} from "react-native";
import COLORS from "./colors";

export default function AddGaurd(props){
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

    <View style={{alignItems:'center',borderWidth:1, margin:10,marginTop:"50%",borderColor:'#adb5bd'}}>
             <ImageBackground style={{height:'100%',width:'100%',opacity:0.5,position:'absolute',}}  source={require('./images/bg2.jpg')}/> 

            <View style={{alignItems:"center" }}> 

               <TextInput  placeholder="Enter Guard Username"
                placeholderTextColor={"#495057"}
                style={styles.textinput}>                
                </TextInput>
               
                <TextInput  placeholder="Enter Guard Password"
                placeholderTextColor={"#495057"}
                style={styles.textinput}>
                </TextInput>
                
            </View>

                <TouchableOpacity
                    style={styles.roundButton1}
                    onPress={Onsave}
                     >
                    <Text style={styles.textbuton}>Save</Text>
                    </TouchableOpacity>
                
    </View>
);

}
const styles=StyleSheet.create(
    {          
        textinput:{
            
            fontSize:20,          
            borderBottomWidth:1,
            borderBottomColor:"#339af0",
            fontWeight:'bold',
            width:300, 
            fontFamily:'monospace',
            marginTop:5,
            marginBottom:5
                   
        },
        textbuton:{
            fontSize:25, 
            color:"#495057" ,                                
            fontWeight:'bold'
           },            
        roundButton1: {
            width: '40%',
            height: '20%',
            
           justifyContent: 'center',
           alignItems: 'center',           
            borderRadius:10,
            marginTop:30,
            backgroundColor:"#ced4da",
            
          },       
    }
  )