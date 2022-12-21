import React from 'react';
import {
    SafeAreaView,
    Text,
    Image,ToastAndroid,
    StyleSheet,
    FlatList,View,TouchableOpacity,
    } from 'react-native'
import COLORS from "./colors";

    const arr=[
        {
            id:'1',
            name:'saud',
            cnic:'3740551181907',
            phonNo:'0312345678',
            Destination:'Admin',
            uri:'./images/details.jpg'
        },
        {
            id:'2',
            name:'Zain',
            cnic:'37658394765427',
            phonNo:'0312345678',
            Destination:'Hod'
        },
        {
            id:'3',
            name:'Razik',
            cnic:'376765423227',
            phonNo:'03126765438',
            Destination:'Hod'
        },
        
    ];

    function showToast() {
        ToastAndroid.showWithGravity(
            "Time Updated",
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
           
          );
    }
    const Visiterinfo=({name,cnic,phonNo,Destination})=>(
        <View style={{padding:5, borderWidth:1,borderColor:COLORS.mainblue,margin:10}}>
           
            <Image style={{height:150,width:150,borderRadius:100,marginLeft:110}} source={require('./images/userid.jpg')} />
            <Text style={styles.text3}>{'Visiter: '+name}</Text>
            <Text style={styles.text3}>{'Cnic: '+cnic}</Text>
            <Text style={styles.text3}>{'PhonNo: '+phonNo}</Text>
            <Text style={styles.text3}>{'Destination: '+Destination}</Text>
            <TouchableOpacity style={{width: '40%',
            height: '15%',
            alignSelf:'center',
           justifyContent: 'center',
           alignItems: 'center',           
            borderRadius:10,
            marginTop:20,
            backgroundColor:"#adb5bd",}}
            onPress={showToast} > 
                <Text style={styles.text2}>
                    Left
                </Text>
            </TouchableOpacity>

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

   export default function CurrentVisGuard(){

        const renderItem=({item})=>(
            <Visiterinfo name={item.name} cnic={item.cnic} 
            phonNo={item.phonNo} Destination={item.Destination} uri={item.uri}/>
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