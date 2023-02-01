import React, {useState} from "react";
import {Text,
StyleSheet,ImageBackground, TextInput, View,
ToastAndroid, FlatList,
TouchableOpacity, Easing,Image
} from "react-native";
import COLORS from "./colors";
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from "react-native-gesture-handler";


export default function UpdateTime(props){

    const arr=[
        {
            id:'1',
            Camera :'Cam1',
            Time:'3',
            
        },
        {
            id:'2',
            Camera :'Cam3',
            Time:'6',
            
        },
        
    ];


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
   <View style={{
   margin:20,   
   paddingEnd:10}}>


<View style={{flexDirection:'column',width:'95%', marginBottom:10}}>
     <Text style={{fontSize:20, 
            color:"#495057" ,                                
            fontWeight:'bold',
            paddingStart:'4%'}}>
                 Select Camera:
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

<View style={{flexDirection:'row',
marginBottom:10}}>
    
            
                <FlatList 
            data={arr}
            renderItem={({item})=>{
                return (<View style={{ 
                    padding:5,
                    borderWidth:1,
                    
                    borderColor:'black',
                    
                }}> 
                    <View >
                    
                    <Text style={styles.textbuton}> Connected Camera: {item.Camera}</Text>
                    <Text style={styles.textbuton}> Time: {item.Time}</Text>
                    <Text style={styles.textbuton}> Add New Time: </Text>

                    <TextInput style={styles.textinput}>
                
                    </TextInput>
                    </View>
                </View>)
            }}
            keyExtractor={(item, index)=>index.toString()}
        />
           

     </View>

    
     


    </View>
     <TouchableOpacity 
     onPress={Onsave}
     style={{
            width: '40%',
            height: '10%',
           alignSelf:'center' ,
           justifyContent:'center',
           alignItems: 'center',           
            borderRadius:10,
            marginTop:10,
            
            backgroundColor:"#ced4da",}}>
            <Text style={{
            fontSize:25, 
            color:"#495057" ,                                
            fontWeight:'bold'}}>
              Update
            </Text>
     </TouchableOpacity>

   </View>
   
);

}
const styles=StyleSheet.create(
    {          
        textinput:{
            
            fontSize:15,
            marginBottom:10 ,
            marginTop:10,         
            borderWidth:1,
            marginLeft:150,
            borderBottomColor:"#black",
            fontWeight:'bold',
            width:150, 
            fontFamily:'monospace',                   
        },
        textbuton:{
            fontSize:20, 
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