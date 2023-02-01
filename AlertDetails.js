import React ,{useState}from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Button,View,FlatList } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import { Image } from 'react-native';
const Take = () => {

const requestCameraPermission = async () => {

try {
const granted = await PermissionsAndroid.request(
PermissionsAndroid.PERMISSIONS.CAMERA,
{
title: "App Camera Permission",
message:"App needs access to your camera ",
buttonNeutral: "Ask Me Later",
buttonNegative: "Cancel",
buttonPositive: "OK",
}
);
if (granted === PermissionsAndroid.RESULTS.GRANTED) {
console.log("Camera permission given");
openCamera();
} else {
console.log("Camera permission denied");
}
} catch (err) {
console.warn(err);
}
};

const openCamera = () => {
//Alert.alert('asdasd');
const options = {
storageOptions: {
path: 'images',
mediaType: 'photo',
allowsEditing: true,
},
includeBase64: true,
};

launchCamera(options, response => {
  setPhotos([...photos, response])
  console.log('Response =', response);
});
};
const [photos, setPhotos] = useState([]);
return (
  
<View> 
<Button title={'Open camera'} onPress={() => openCamera()} />
  <FlatList 
  data={photos}
  renderItem={({item})=>{
      return (
      <View style={{ 
          padding:5,
          borderWidth:1,
          borderColor:'black',
         
      }}> 
          <View style={{alignItems: 'center'}}>
        <Image style={{height:100,width:100,borderRadius:100}} source={(item.filename)} />

          </View>
      </View>
      )
  }}
  keyExtractor={(item, index)=>index.toString()}
  />

</View>
);
};

export default Take;