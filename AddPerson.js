import React, {useState} from "react";
import {Text,
StyleSheet,ImageBackground, TextInput, View,
ToastAndroid,
TouchableOpacity,Image
} from "react-native";
import {
    launchImageLibrary,launchCamera
  } from 'react-native-image-picker';
  import { Picker } from "@react-native-picker/picker";
  import ImagePicker from 'react-native-image-picker';
  import COLORS from "./colors";
export default function AddPerson(props){
    function showToast() {
        ToastAndroid.showWithGravity(
            "Added",
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
           
          );
    }
      function Onsave(){
        showToast()
        props.navigation.navigate('AdminHome')    
    }

    const [imageUri, setimageUri] = useState('./images/camera.png ');

    const openCamera=()=> {
        let options={
          storageOption:{
            path:'images',
            mediatype:'photo'   
        
          },
          includeBase64:true,
        };
        launchImageLibrary(options, response=>{
          console.log('Response = ', response);
        
          if (response.didCancel) {
            console.log('User cancelled camera picker');
            
          } else if (response.error) {
            console.log('Camera not available on device',response.error);
           
          } else if (response.customButton) {
            console.log('Permission not satisfied',response.customButton);
            
          } else if (response.errorCode == 'others') {
            console.log(response.errorMessage);
            
          }else{
            const source={uri:'data:image/jpeg;base64,'+response.assets[0].base64};
            setimageUri(source);
          }
        
        
         });
         };
return(
    
<View> 
    <View style={{borderWidth:1, margin:10,marginTop:"20%",borderColor:'#adb5bd'}}>
        
             <ImageBackground style={{height:'100%',width:'100%',opacity:0.5,position:'absolute',}}  source={require('./images/bg2.jpg')}/> 

            <View style={{alignItems:"center" }}> 
                 
               <TextInput  placeholder="Enter Person Name"
                placeholderTextColor={"#495057"}
                style={styles.textinput}>                
                </TextInput>
                <TextInput  placeholder="Enter Person Username"
                placeholderTextColor={"#495057"}
                style={styles.textinput}>                
                </TextInput>
                <TextInput  placeholder="Enter Person Password"
                placeholderTextColor={"#495057"}
                style={styles.textinput}>
                </TextInput>
         
                
   
            </View>   
            <Text style={{fontSize:20, 
            color:"#495057" ,                                
            fontWeight:'bold',
            marginStart:'11%'}}>
                 Select Destination:
                </Text>
            
                <Picker style={{           
                marginStart:'11%',
                 marginEnd:40,
                     
                }} dropdownIconColor={COLORS.mainblue}
                dropdownIconRippleColor={COLORS.mainblue}>
                <Picker.Item label="Admin" value={"j"} style={styles.textPicker}></Picker.Item>
                <Picker.Item label="HOD Office" value={"j"} style={styles.textPicker}></Picker.Item>
                </Picker>  

                <View style={{flexDirection:'row',height:80,width:'100%'}}>
                <Text style={{color:"#495057" ,  
                    fontSize:20, 
                    marginTop:20,                             
                    fontWeight:'bold',
                    marginStart:'11%'}}>
                Select Picture:
                </Text>
            
                <TouchableOpacity
                 onPress={() => openCamera()}
                >
                <Image style={{height:'80%',width:'500%',marginStart:20,borderColor:"#495057",borderWidth:1,borderRadius:10}}
                 source={imageUri}/>         
                </TouchableOpacity>
                   </View>          
             
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
        textPicker:{
            fontSize:23,                                  
            color:COLORS.darkgrey,     
            fontFamily:'monospace',
            
           },
        textbuton:{
            fontSize:25, 
            color:"#495057" ,                                
            fontWeight:'bold'
           },            
        roundButton1: {
            width: '40%',
            height: '10%',
            alignSelf:'center',
           justifyContent: 'center',
           alignItems: 'center',           
            borderRadius:10,
            marginTop:20,
            backgroundColor:"#adb5bd",
            
          },       
    }
  )