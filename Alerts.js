import React from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    FlatList,View,StyleSheet,Image,
} from 'react-native'
import COLORS from "./colors";

let arr=[{
    id:'1',
    notification:'A Visiter is in Wrong Place'
},
{
    id:'2',
    notification:'B Visiter is in Wrong Place'
},
]



const Notifec=({notification})=>(
    <View style={{padding:5, borderWidth:1,borderColor:COLORS.mainblue,margin:5}}>
       <TouchableOpacity onPress={()=>{
                        alert(
                           
                        )
                    }}> 
        <Text style={styles.text3}>{'Visiter: '+notification}</Text>
       
        
        </TouchableOpacity>

    </View>
);
const HeaderComponent=()=>{
    return(
        <View>
            <Text style={styles.text2}>
          Visiters in Wrong Place 
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


export default function Alert(){
    const renderItem=({item})=>(
        <Notifec notification={item.notification} />
    );
   
return(
    <SafeAreaView>
       
        
        <FlatList
        data={arr}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
        />
            
    
        

    </SafeAreaView>
)

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
            marginStart:10,
            marginTop:15,
            fontFamily:'monospace',
            
           },
           
          
          
    }
  )