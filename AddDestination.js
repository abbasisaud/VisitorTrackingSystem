import React, {useState} from "react";
import {Text,
StyleSheet,ImageBackground, TextInput, View,
ToastAndroid,
TouchableOpacity, Easing,Image
} from "react-native";
import COLORS from "./colors";
import { Picker } from "@react-native-picker/picker";


export default function AddDestination(props){

    const [disp, setdisp] = useState('none')

    function showToast() {
        ToastAndroid.showWithGravity(
            "Added",
            ToastAndroid.LONG,
            ToastAndroid.CENTER ,
           
          );
    }
      function Onsave(){
        showToast()
        setdisp('flex')      
    }

return(
<View style={{flex:1,backgroundColor:'white'}}> 
   <View style={{marginTop:200,
   margin:20,
   paddingEnd:10}}>

<View style={{flexDirection:'row',
width:'80%', marginBottom:20}}>
     <Text style={{fontSize:20, 
            color:"#495057" ,                                
            fontWeight:'bold',
            paddingStart:'3%',
            marginTop:15
            }}>
                Destination Name:
                </Text>
            
                <TextInput style={{borderWidth:1,width:'60%',margin:5,fontSize:15,}}>

                </TextInput>

     </View>

     <View style={{flexDirection:'column',width:'95%', marginBottom:10}}>
     <Text style={{fontSize:20, 
            color:"#495057" ,                                
            fontWeight:'bold',
            paddingStart:'4%'}}>
                 Destination Camera:
                </Text>
            
                <Picker style={{           
                 marginEnd:1,
                 marginStart:140
                     
                }} dropdownIconColor={COLORS.mainblue}
                dropdownIconRippleColor={COLORS.mainblue}>
                <Picker.Item label="Cam2" value={"j"} style={styles.textPicker}></Picker.Item>
                <Picker.Item label="HOD Office" value={"j"} style={styles.textPicker}></Picker.Item>
                </Picker>  

     </View>

     


    </View>
     <TouchableOpacity 
     onPress={Onsave}
     style={{
      width: '40%',
            height: '10%',
           alignSelf:'center' ,
           justifyContent: 'center',
           alignItems: 'center',           
            borderRadius:10,
            marginTop:10,
            backgroundColor:"#ced4da",}}>
            <Text style={{
            fontSize:25, 
            color:"#495057" ,                                
            fontWeight:'bold'}}>
              Save
            </Text>
     </TouchableOpacity>


                
        <View style={{display:disp}}>
            <Text>
                ttt
            </Text>
        </View>
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
            marginTop:10,
            backgroundColor:"#ced4da",
            
          },       
    }
  )