import React, {useState} from "react";
import { ScrollView,Text,TextInput,
StyleSheet,Image, View, TouchableOpacity, FlatList,
Platform,
alert,  
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "./colors";
import { Picker } from "@react-native-picker/picker";
import {
    launchCamera,
  } from 'react-native-image-picker';
 import { PermissionsAndroid } from "react-native";
 import axios from "axios";
export default function AddDetails(props){

  const [imageUri, setimageUri] = useState();
  const [photos, setPhotos] = useState([]);
  const [name, setName] = useState();
  const [cnic, setCnic] = useState();
  const [destination, setDestination] = useState();

  
    const sendImagesWithData = async () => {
      
      const formData = new FormData();
      formData.append('v_id', 200);
      formData.append('v_name', name);
      formData.append('v_cnic', cnic);
      formData.append('destination', destination);
      photos.forEach((image, index) => {
          formData.append(`image${index}`, {
              uri:image.uri,
              type:image.type,
              name:image.fileName
          });
         
      });
      
      let response = await fetch('http://10.0.2.2:5000/insert',{
        body:formData,
        method:'POST',
        headers:{
          'Content-Type' : 'multipart/form-data'
        }
      })
      let json = await response.json()
      console.log(json)
        // const response = await axios.post('http://10.0.2.2:5000/insert', formData, {          
        //       headers: {
        //           'Content-Type': 'multipart/form-data',
        //       },             
        //   } );          
        //   console.log(response);     
  };   
    const openCamera=()=> {
        let options={
          storageOption:{
            path:'images',
            mediatype:'photo',
            allowsEditing: true,
            selectionLimit: 5,           
          },
          includeBase64:true,
        };
         launchCamera(options, response=>{
          //console.log('Response = ', response);
          setPhotos([...photos, {
            uri:response.assets[0].uri,
          type:response.assets[0].type,
        fileName:response.assets[0].fileName}]);
          console.log(photos)          
          if (response.didCancel) {
            console.log('User cancelled camera picker');            
          } else if (response.error) {
            console.log('Camera not available on device',response.error);           
          } else if (response.customButton) {
            console.log('Permission not satisfied',response.customButton);            
          } else if (response.errorCode == 'others') {
            console.log(response.errorMessage);            
          }else{
            const source={uri:response.assets[0].uri};
            setimageUri(source);           
          }                
         });
         };
         const items = ['Admin', 'Hod', 'item3'];
    return(
        <View style={{backgroundColor:'white'}}>
            <ScrollView>
                <SafeAreaView> 
                <Image style={{height:80,width:400}} source={require('./images/details.jpg')} />
                <Text style={styles.text}>
                    VISITOR DATA INSERTION
                </Text>
                <View style={{alignItems:'center' }}> 
                <Text style={styles.label}>
                Enter Visitor Name:
                </Text>
               <TextInput  
                onChangeText={(n) =>
                  setName(n)
                }
                
                style={styles.textinput}>                
                </TextInput>
                <Text style={styles.label}>
                Enter Visitor Cnic:
                </Text>
                <TextInput
               onChangeText={(n) =>
                setCnic(n)
              }
                style={styles.textinput}>
                </TextInput>            
                </View>
              
                <Text style={styles.text3}>
                 Select Destination:
                </Text>
            
                <Picker 
                selectedValue={destination}
                onValueChange={(itemValue, itemIndex) =>
                  setDestination(itemValue)
                }
                style={{           
                marginStart:35,
                marginEnd:40,                     
                }}
                dropdownIconColor={COLORS.mainblue}
                dropdownIconRippleColor={COLORS.mainblue}>
                
                          {items.map(item => (
                    <Picker.Item label={item} value={item} key={item} />
                  ))}
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
                   onPress={sendImagesWithData}
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
           label:{
            fontSize:20,                                  
            fontWeight:'bold',
            color:COLORS.darkgrey,
            marginTop:20
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
            color:'black',
            fontSize:19,          
            borderWidth:1,
            borderColor:'gray',
            fontWeight:'bold',
            width:300, 
            fontFamily:'monospace',                   
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