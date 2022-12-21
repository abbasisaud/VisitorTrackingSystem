import React, {useState} from "react";
import {Text, Switch,
StyleSheet,ImageBackground, View, TouchableOpacity,  FlatList,
Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "./colors";
import { Picker } from "@react-native-picker/picker";



export default function PersonMain(props){
    const arr=[
        {
            id:'1',
            name:'saud',
            cnic:'3740551181907',
            phonNo:'0312345678',
            Destination:'Admin',
            CurrentLoca:'Stair1',
            uri:'./images/details.jpg'
        },
       
    ];
     const Visiterinfo=({name,Destination,CurrentLoca})=>(
        <View style={{padding:5, borderWidth:1,borderColor:COLORS.mainblue,marginTop:15}}>
           
            <Image style={{height:150,width:150,borderRadius:100,marginLeft:110}} source={require('./images/userid.jpg')} />
            <Text style={styles.text3}>{'Visiter: '+name}</Text>  
            <Text style={styles.text3}>{'Destination: '+Destination}</Text>
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

           <View style={{}}> 
           

                    <TouchableOpacity
                    style={styles.roundButton1}  
                    onPress={()=>{props.navigation.navigate('VisitorDetail')} }>
                    
                    <Text style={{fontSize:25, 
            color:"#495057" ,                                
            fontWeight:'bold'}}> Update</Text>
                    </TouchableOpacity>
                    </View>
            
        </View>
    );


    const renderItem=({item})=>(
        <Visiterinfo name={item.name} 
       Destination={item.Destination} uri={item.uri}CurrentLoca={item.CurrentLoca}/>
    );
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
     
    return(



        
        <View style={{justifyContent:'center',
        margin:5
        
        
        }}>
            <SafeAreaView>

            <View style={{flexDirection:"row",justifyContent:'center',borderColor:'blue'}}>
            <Text style={{fontSize:25, 
            color:"#495057" ,                                
            fontWeight:'bold'}}>
                Available
            </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
     
    </View>   
    <View style={{flexDirection:'row' ,justifyContent:'center',
                    width:"90%", alignSelf:'center',borderRadius:5,
                    marginTop:10,backgroundColor:'#adb5bd'}}> 
                    <Text style={{fontSize:20, 
                    color:"#343a40" ,  marginStart:5 ,marginTop:3,                         
                    fontWeight:'bold'}}>Your Visitors</Text>
                    </View>

        
        <FlatList
        data={arr}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        
        />
            




           
                    
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
            fontSize:20, 
            color:"white" ,                                
            fontWeight:'bold'
           },            
        roundButton1: {
            width: '40%',
            height: '25%',
            alignSelf:'center',
           justifyContent: 'center',
           alignItems: 'center',           
            borderRadius:10,
            marginTop:20,
            backgroundColor:"#adb5bd",
            
          },       
    }
  )