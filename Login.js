
import React,{useState} from "react";
import { SafeAreaView,Text,TextInput,Alert,
        StyleSheet,Image, View, TouchableOpacity, ScrollView,Easing 
        } from "react-native";
import COLORS from "./colors";
import axios from "axios";
import {AnimatedCircularProgress} from 'react-native-circular-progress';



export default function Login(props){
  const[username,setusername]=useState()
  const[Password,setPassword]=useState()
  const [getMessage, setGetMessage] = useState()


  async function checkIdPass(){

    await axios.get('http://10.0.2.2:5000/getGuard/'+username+'/'+Password).then(response => {
        console.log(response)        
        setGetMessage(response.data)
        console.log(getMessage)
      }).catch(error => {
        console.log(error)
      }) 

    if(getMessage=="admin"){
      console.log('admin')
      props.navigation.navigate('AdminHome')

    }else if(getMessage=="guard") {     
    props.navigation.navigate('GuardHome')
    }
    else if(getMessage=="person") {     
      props.navigation.navigate('PersonHome')
      }  else{
      Alert.alert("Incorrect Login Details","UserID or Password is Incorrect")
    }
  }

  return(
    <View style={{backgroundColor:'white',flex:1}}> 
    






        
          <Image style={{height:'35%',borderRadius:30,width:'100%',
          marginStart:'1%', marginEnd:'1%'}} source={require('./images/logins.png')} />   
            <Text  style={styles.text}> Login </Text>   

            <View style={{flexDirection:'row'}}>
            <Image style={{height:'55%',width:'10%',marginStart:'4%',marginTop:30,}} source={require('./images/userid.jpg')}/>
            <TextInput  style={styles.textinput}
              onChangeText={(a)=>{setusername(a)}}
              // value={userId}
              placeholder="User ID"
              placeholderTextColor={"grey"}
            />
            </View>

            <View style={{flexDirection:'row'}} > 
            <Image style={{height:'55%',width:'10%',marginStart:'4%',marginTop:31,}} source={require('./images/pass.jpg')}/>
            <TextInput
            onChangeText={(p) => setPassword(p)}
            value={Password}  
            style={styles.textinput}
            placeholder="Password"           
            passwordRules={"number"}
            placeholderTextColor={"grey"}
            />       
            </View>

            <TouchableOpacity
            style={styles.roundButton1}
            onPress={()=>{
              props.navigation.navigate('AdminHome')

              // checkIdPass()
              }} >
            <Text style={styles.text2}>Login</Text>
            </TouchableOpacity>
        
      
    </View>
   )
}
const styles=StyleSheet.create(
  {
      text:{
          fontSize:25,
          fontWeight:'bold',
          marginStart:20,
          marginTop:20,
          marginBottom:15,
          color:'#495057',
          letterSpacing:2,
          fontFamily:'sans-serif-medium',
          flexDirection: 'row'          
         },
      text2:{
          fontSize:25,                           
          color:'white',
          fontWeight:'bold'
         },
      textinput:{
          fontSize:20,          
          borderBottomWidth:1,
          borderBottomColor:"blue",
          fontWeight:'bold',
          width:'80%', 
          fontFamily:'monospace',
          marginTop:20,          
      },            
      roundButton1: {
          width: '80%',
          height: 50,
         justifyContent: 'center',
         alignItems: 'center',
         marginStart:'10%',
          borderRadius:15,
          marginTop:70,
          backgroundColor:"#228be6",
          color:"white"
        },       
  }
)