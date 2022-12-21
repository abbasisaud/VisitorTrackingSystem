import React, {useState} from "react";
import {Text,
StyleSheet,ImageBackground, TextInput, View,
ToastAndroid,
TouchableOpacity, Easing,Image
} from "react-native";
import COLORS from "./colors";

export default function AddCamera(props){
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

   <View style={{margin:10,marginTop:'40%',backgroundColor:'white',}}>
                 <ImageBackground style={{height:'100%',width:'100%',opacity:0.5,position:'absolute',}}  source={require('./images/bg2.jpg')}/> 

     <View style={{flexDirection:'row',justifyContent:'center',marginBottom:50}}>
          <Text style={{
            fontSize:25, 
            color:"#495057" ,                                
            fontWeight:'bold',marginTop:15,marginEnd:15}}>
            Camera Name :
          </Text>
          <TextInput style={{borderBottomWidth:1,width:'40%'}}>

          </TextInput>

     </View>
     <View style={{flexDirection:'row',justifyContent:'center',marginBottom:20}}>
          <Text style={{
            fontSize:25, 
            color:"#495057" ,                                
            fontWeight:'bold',marginTop:15,marginEnd:25}}>
            Camera URL :
          </Text>
          <TextInput style={{borderBottomWidth:1,width:'40%'}}>

          </TextInput>

     </View>
     <TouchableOpacity 
     onPress={showToast}
     style={{
      width: '40%',
            height: '20%',
           alignSelf:'center' ,
           justifyContent: 'center',
           alignItems: 'center',           
            borderRadius:10,
            marginTop:30,
            backgroundColor:"#ced4da",}}>
            <Text style={{
            fontSize:25, 
            color:"#495057" ,                                
            fontWeight:'bold'}}>
              Save
            </Text>
     </TouchableOpacity>
   </View>
);

}
const styles=StyleSheet.create(
    {          
        textinput:{
            
            fontSize:15,          
            borderBottomWidth:1,
            borderBottomColor:"#black",
            fontWeight:'bold',
            width:150, 
            fontFamily:'monospace',                   
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