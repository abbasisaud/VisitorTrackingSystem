import React, {useState} from "react";
import {Text,
StyleSheet,ImageBackground, TextInput, View,
ToastAndroid,
TouchableOpacity, Easing,Image
} from "react-native";
import COLORS from "./colors";
import { Picker } from "@react-native-picker/picker";


export default function AddPath(props){

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
   <View style={{marginTop:200,backgroundColor:'white',
   margin:5,
   flexDirection:'row',paddingEnd:10}}>

     <View style={{flexDirection:'column',borderRightWidth:1,width:'35%', marginBottom:20}}>
     <Text style={{fontSize:20, 
            color:"#495057" ,                                
            fontWeight:'bold',
            paddingStart:'4%'}}>
                 From(node):
                </Text>
            
                <Picker style={{           
                paddingStart:'1%',
                 marginEnd:0,
                     
                }} dropdownIconColor={COLORS.mainblue}
                dropdownIconRippleColor={COLORS.mainblue}>
                <Picker.Item label="Cam1" value={"j"} style={styles.textPicker}></Picker.Item>
                <Picker.Item label="cam2" value={"j"} style={styles.textPicker}></Picker.Item>
                </Picker>  

     </View>

     <View style={{flexDirection:'column',borderRightWidth:1,width:'35%', marginBottom:20}}>
     <Text style={{fontSize:20, 
            color:"#495057" ,                                
            fontWeight:'bold',
            paddingStart:'4%'}}>
                 To(edge):
                </Text>
            
                <Picker style={{           
                paddingStart:'1%',
                 marginEnd:0,
                     
                }} dropdownIconColor={COLORS.mainblue}
                dropdownIconRippleColor={COLORS.mainblue}>
                <Picker.Item label="Cam2" value={"j"} style={styles.textPicker}></Picker.Item>
                <Picker.Item label="HOD Office" value={"j"} style={styles.textPicker}></Picker.Item>
                </Picker>  

     </View>

     <View style={{flexDirection:'column',width:'35%', marginBottom:20}}>
     <Text style={{fontSize:20, 
            color:"#495057" ,                                
            fontWeight:'bold',
            paddingStart:'2%',
            }}>
                Time:
                </Text>
            
                <TextInput style={{borderWidth:1,width:'80%',margin:5,fontSize:15,}}>

                </TextInput>

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
            marginTop:30,
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
            marginTop:30,
            backgroundColor:"#ced4da",
            
          },       
    }
  )