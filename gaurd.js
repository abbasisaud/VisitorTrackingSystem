import React, {useState} from "react";
import {Text,
StyleSheet,Image, View, TouchableOpacity,  
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "./colors";


export default function Gaurdmain(props){
    
    return(
        <View>
            <SafeAreaView>

            {/* <ImageBackground style={{height:100,width:400,borderColor:"black",}} source={require('./images/backgroung.jpg')}/>  */}
            <Image style={{height:160,width:160,borderRadius:100,marginStart:120}} source={require('./images/userid.jpg')} />         
            <Text style={styles.text}>Ali</Text>
            <TouchableOpacity
                    style={styles.roundButton1}
                     >
                    <Text style={styles.textbuton}>Current Visiter</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.roundButton1}  
                    onPress={()=>{props.navigation.navigate('VisitorDetail')} }>
                    
                    <Text style={styles.textbuton}>Add Visiter</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.roundButton1}                   
                     >
                    <Text style={styles.textbuton}>Alert</Text>
                    </TouchableOpacity>

            </SafeAreaView>
        </View>
    )
}


const styles=StyleSheet.create(
    {
        text:{
            fontSize:24,
            fontWeight:'bold',           
            marginStart:180,
            color:'black',
            letterSpacing:2,
            fontFamily:'sans-serif-medium',
            flexDirection: 'row'          
           },
        text2:{
            fontSize:20,                                  
            fontWeight:'bold'
           },
           text3:{
            fontSize:20, 
            color:COLORS.darkgrey,                                 
            fontWeight:'bold',
            marginStart:45,
            marginTop:15,
            fontFamily:'monospace',
            
           },
           text4:{
            fontSize:20, 
            color:COLORS.darkgrey,                                 
            fontWeight:'bold',
            marginStart:45,
            marginTop:45,
            fontFamily:'monospace',
            
           },
           textPicker:{
            fontSize:25,                                  
            color:COLORS.darkgrey,     
            fontFamily:'monospace',
            
           },
        textinput:{
            
            fontSize:20,          
            borderBottomWidth:1,
            borderBottomColor:"blue",
            fontWeight:'bold',
            width:300, 
            fontFamily:'monospace',
            marginTop:10
                   
        },
        textbuton:{
            fontSize:20, 
            color:"white" ,                                
            fontWeight:'bold'
           },            
        roundButton1: {
            width: 260,
            height: 50,
           justifyContent: 'center',
           alignItems: 'center',
           marginStart:80,
            borderRadius:19,
            marginTop:40,
            backgroundColor:COLORS.blue2,
            
          },       
    }
  )