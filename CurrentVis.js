import React from 'react';
import {
    SafeAreaView,
    Text,
    Image,
    StyleSheet,
    FlatList,View,TouchableOpacity,
    } from 'react-native'
import COLORS from "./colors";

    const arr=[
        {
            id:'1',
            name:'saud',
            cnic:'3740551181907',
            Timein:'10:43:32',
            Destination:'Admin',
            CurrentLoca:'Stair1',
            uri:'./images/details.jpg'
        },
        {
            id:'2',
            name:'Zain',
            cnic:'37658394765427',
            Timein:'9:06:55',
            CurrentLoca:'Stair1',
            Destination:'Hod'
        },
        {
            id:'3',
            name:'Razik',
            cnic:'376765423227',
            Timein:'3:44:15',
            CurrentLoca:'Stair2',
            Destination:'Hod'
        },
        
    ];
    const Visiterinfo=({name,cnic,Timein,Destination,CurrentLoca})=>(
        <View style={{padding:5, borderWidth:1,borderColor:COLORS.mainblue,margin:10}}>
           
            <Image style={{height:150,width:150,borderRadius:100,marginLeft:110}} source={require('./images/userid.jpg')} />
            <Text style={styles.text3}>{'Visiter: '+name}</Text>
            <Text style={styles.text3}>{'Cnic: '+cnic}</Text>
            <Text style={styles.text3}>{'Tiem in: '+Timein}</Text>
            <Text style={styles.text3}>{'Destination: '+Destination}</Text>
            

            
        </View>
    );

    const HeaderComponent=()=>{
        return(
            <View>
                <Text style={styles.text2}>
                    Current Visiter In Biit 
                </Text>
            </View>
        );
    };

    const FooterComponent=()=>{
        return(
            <View>
                <Text style={styles.text2}>
                    End Of the list
                </Text>
            </View>
        )

    }

   export default function CurrentVis(){

        const renderItem=({item})=>(
            <Visiterinfo name={item.name} cnic={item.cnic} 
            Timein={item.Timein} Destination={item.Destination} uri={item.uri}CurrentLoca={item.CurrentLoca}/>
        );
    return(
        
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
        
        <FlatList
        data={arr}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
        />
            
    </SafeAreaView>
);

}

const styles=StyleSheet.create(
    {
        
        text2:{
            fontSize:20,                                  
            fontWeight:'bold',
            textAlign:'center',
            color:COLORS.darkgrey,
           },
           text3:{
            fontSize:20, 
            color:COLORS.darkgrey,                                 
            fontWeight:'bold',
            marginStart:90,
            marginTop:15,
            fontFamily:'monospace',
            
           },
           
          
          
    }
  )