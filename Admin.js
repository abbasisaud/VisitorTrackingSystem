import React, {useState} from "react";
import {Text,
StyleSheet,ImageBackground, View, TouchableOpacity, Easing,Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "./colors";
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from "axios";



export default function AdminMain(props){
    const [fill, SetFill] = useState(45);
    const [fill2, SetFill2] = useState(70);
    const [fill3, SetFill3] = useState(global.alert);
    // SetFill3(global.alert)


    async function submit() {
        var name =("name")
        var url = ("url")
        const response = await axios.get("http://10.0.2.2:5000/getcamera", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                url: url,
               
            })
        });
        response.json().then(data => {
            console.log(data);
            alert(JSON.stringify(data))
        });
    }
     
    return(
        <View style={{backgroundColor:"white",flex:1}}>
            <SafeAreaView>
        <ImageBackground style={{height:'50%',width:'100%',opacity:0.7,position:'absolute',}}  source={require('./images/bg2.jpg')}/> 
        <View style={{marginBottom:'15%' ,alignItems:'center',}}>
            <Text style={{fontSize:30,                                  
            fontWeight:'bold',marginTop:'15%',color:'#495057'}}> 
                Welcome
            </Text>
        </View>
        <View style={{flexDirection:"row",
                width:'90%'  , marginTop:'2%',          
                }}>     
                <TouchableOpacity  onPress={()=>{
              props.navigation.navigate('CurrentVisitorAdmin')            
              }} > 
        <AnimatedCircularProgress
            size={100}
            style={{marginLeft:"10%",}}
            width={10}
            fill={fill}
              
            tintColor="#339af0"
            backgroundColor="#adb5bd"
            backgroundWidth={5}
            lineCap='round'
            rotation={360}
            easing={Easing.elastic(9)}
            duration={1000}>
            {fill => <Text style={{fontSize:25,color:'#495057',fontWeight:'bold',}}>{fill}</Text>}
      </AnimatedCircularProgress>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
              props.navigation.navigate('Reports')            
              }}>
      <AnimatedCircularProgress
            size={100}
            width={10}
            
            fill={fill2}
            tintColor="#339af0"
            backgroundColor="#adb5bd"
            backgroundWidth={5}
            rotation={360}
            lineCap='round'
            easing={Easing.elastic(9)}           
            duration={1000}>
            {fill => <Text style={{fontSize:25,color:'#495057',fontWeight:'bold'}}>{fill}</Text>}
      </AnimatedCircularProgress>
      </TouchableOpacity>
    
    <TouchableOpacity onPress={()=>{
            props.navigation.navigate('Alerts')
            // console.log(global.alert)            
              }} > 
      <AnimatedCircularProgress
        size={100}
        width={10}
        fill={fill3}
        style={{marginLeft:"11%"}}
        tintColor="#339af0"
        backgroundColor="#adb5bd"
        backgroundWidth={5}
        rotation={360}
        lineCap='round'
        easing={Easing.elastic(9)}        
        duration={2000}>
        {fill => <Text style={{fontSize:25,color:'#495057',fontWeight:'bold'}}>{fill}</Text>}
      </AnimatedCircularProgress>
      </TouchableOpacity>     
    </View >
    <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:"#868e96", width:'98%',marginStart:2,marginTop:10,}}>

    <View  style={{  width:'30%',hight:'10%',marginBottom:10}}>
               <Text style={{fontSize:15,marginLeft:38,color:'#343a40',
               fontWeight:'bold',textAlign:'center'}}>Current Visiter</Text>        
    </View>

    <View  style={{  width:'35%',hight:'10%',}}>
               <Text style={{fontSize:15,marginLeft:45,color:'#343a40',
               fontWeight:'bold',textAlign:'center'}}>Monthly Visiter</Text>        
    </View>

    <View  style={{  width:'30%',hight:'10%',}}>
               <Text style={{fontSize:17,marginLeft:30,color:'#343a40',
               fontWeight:'bold',textAlign:'center'}}>Alerts</Text>        
    </View>

    </View>  

            {/* <Image style={{height:160,width:160,borderRadius:100,marginStart:120}} source={require('./images/userid.jpg')} />          */}
            {/* <Text style={styles.text}>Welcome {user_name}</Text> */}
            
                <View style={{flexDirection:'row' ,justifyContent:'center',}}> 

                    <TouchableOpacity style={styles.roundButton1}
                   onPress={()=>{props.navigation.navigate('AddCamera')}}
                    >
                        <Icon name={"camera"} color={"#1c7ed6"} size={30} />
                        <Text style={styles.textbuton}>Add Camera</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.roundButton1}  
                    onPress={()=>{props.navigation.navigate('AddPath')}}
                    >
                        <Icon name={"duplicate"} color={"#1c7ed6"}  size={30} />
                        <Text style={styles.textbuton}>Add Path</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={styles.roundButton1} 
                    onPress={()=>{props.navigation.navigate('AddPerson')}}
                    >
                        <Icon name={"person-add"} color={"#1c7ed6"}  size={30} />
                        <Text style={styles.textbuton}>Add Person</Text>
                    </TouchableOpacity>                   
                </View>

                <View style={{flexDirection:'row', justifyContent:'center'}}
                    > 
                    <TouchableOpacity
                    onPress={()=>{
                        props.navigation.navigate('AddGuard')
                        }} 
                    style={styles.roundButton1}
                     >
                    <Icon name={"shield-checkmark"} color={"#1c7ed6"}  size={30} />
                    <Text style={styles.textbuton}>Add Guard</Text>
                    </TouchableOpacity>
                    

                    <TouchableOpacity
                    style={styles.roundButton2}  
                    onPress={()=>{props.navigation.navigate('AddDestination')}}
                    >
                     <Icon name={"golf"} color={"#1c7ed6"}  size={30} />

                    <Text style={styles.textbuton}>Add Destination</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.roundButton2}  
                    onPress={()=>{props.navigation.navigate('UpdatePath')}}
                    >
                     <Icon name={"duplicate"} color={"#1c7ed6"}  size={30} />

                    <Text style={styles.textbuton}>Update Path</Text>
                    </TouchableOpacity>
                    

                    
                    </View>
            </SafeAreaView>
        </View>
    )
}


const styles=StyleSheet.create(
    {
        text:{
            fontSize:24,
            fontWeight:'bold',           
            
            letterSpacing:2,
            fontFamily:'sans-serif-medium',
            flexDirection: 'row' ,
            
            textAlign:'center'         
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
            fontSize:16, 
            color:"#495057" ,                                
            fontWeight:'bold'
           },            
        roundButton1: {
            width: 100,
            height: 55,
            marginStart:10,
           justifyContent: 'center',
           alignItems: 'center',           
            borderRadius:15,
            marginTop:30,
            backgroundColor:"#ced4da",
            
          },    
          roundButton2: {
            width: '32%',
            height: '35%',
            marginStart:10,
           justifyContent: 'center',
           alignItems: 'center',           
            borderRadius:10,
            marginTop:30,
            backgroundColor:"#ced4da",
            
          },       
    }
  )