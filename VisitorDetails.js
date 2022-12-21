import React, {useState} from "react";
import { ScrollView,Text,TextInput,
StyleSheet,Image, View, TouchableOpacity,
Platform,
alert,  
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "./colors";
import { Picker } from "@react-native-picker/picker";
import {
    launchCamera,
  } from 'react-native-image-picker';
 

export default function AddDetails(props){

  const [imageUri, setimageUri] = useState('./images/details.jpg ');

    const openCamera=()=> {
        let options={
          storageOption:{
            path:'images',
            mediatype:'photo'   
        
          },
          includeBase64:true,
        };
         launchCamera(options, response=>{
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
        <View style={{backgroundColor:'white'}}>
            <ScrollView>
                <SafeAreaView> 
                <Image style={{height:80,width:400}} source={require('./images/details.jpg')} />
                <Text style={styles.text}>
                    VISITOR DATA INSERTION
                </Text>

                <View style={{alignItems:"center" }}> 
               <TextInput  placeholder="Enter Visitor Name"
                placeholderTextColor={COLORS.darkgrey}
                style={styles.textinput}>                
                </TextInput>
               
                <TextInput  placeholder="Enter Visitor CNIC"
                placeholderTextColor={COLORS.darkgrey}
                style={styles.textinput}>
                </TextInput>
                <TextInput  placeholder="Enter Visitor Phone No"
                placeholderTextColor={COLORS.darkgrey}
                style={styles.textinput}>
                </TextInput>  
                </View>

               
                <Text style={styles.text3}>
                 Select Destination:
                </Text>
            
                <Picker style={{           
                marginStart:35,
                marginEnd:40,
                     
                }} dropdownIconColor={COLORS.mainblue}
                dropdownIconRippleColor={COLORS.mainblue}>
                <Picker.Item label="Admin" value={"j"} style={styles.textPicker}></Picker.Item>
                <Picker.Item label="HOD Office" value={"j"} style={styles.textPicker}></Picker.Item>
                </Picker> 

                <View style={{flexDirection:'row'}}>
                <Text style={styles.text4}>
                Take Picture:
                </Text>
            
                <TouchableOpacity
                activeOpacity={0.5}
                 onPress={() => openCamera()}
                >
                <Image style={{height:120,width:130,marginStart:20,borderColor:"black",borderWidth:2,borderRadius:10}}
                source={imageUri} />         
                </TouchableOpacity>
                   </View>             
              
                   <TouchableOpacity
                    style={styles.roundButton1}
                    // 
                     >
                    <Text style={styles.textbuton}>Save</Text>
                    </TouchableOpacity>
                
                </SafeAreaView>
            </ScrollView>




        </View>


    )
}

const styles=StyleSheet.create(
    {
        text:{
            fontSize:24,
            fontWeight:'bold',           
            marginStart:30,
            marginTop:15,
            marginBottom:10,
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
            fontSize:23,                                  
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
            marginTop:5,
            marginBottom:5
                   
        },
        textbuton:{
            fontSize:25, 
            color:"white" ,                                
            fontWeight:'bold'
           },            
        roundButton1: {
            width: 260,
            height: 50,
           justifyContent: 'center',
           alignItems: 'center',
           marginStart:70,
            borderRadius:30,
            marginTop:30,
            backgroundColor:COLORS.mainblue,
            
          },       
    }
  )