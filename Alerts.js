import React,{useState,useEffect} from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    FlatList,View,StyleSheet,Image,Modal, 
} from 'react-native'
import COLORS from "./colors";
import axios from "axios";


vdata=[]


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

global.alert=0
export default function Alert(){
const[data ,setdata]=useState([])
const[details,setdetails]=useState([])


const [isOpen, toggleOpen] = useState(false);


    const Notifec=({name})=>(
        <View style={{padding:5, borderWidth:1,borderColor:'gray',margin:5}}>
           <TouchableOpacity onPress={()=>{
            getData(name)
            toggleOpen(true)
                        }}> 
            <Text style={styles.text3}>{name+" is at wrong place "}</Text>
           
            
            </TouchableOpacity>
    
        </View>
    );
    
    
    const renderItem=({item})=>(
        <Notifec name={item.name} />
    );
    
    
    async function getData(name){
    
        await axios.get('http://10.0.2.2:5000/getAlertVisitor/'+name).then(response => {                
            vdata=response.data
            // console.log(vdata)
            setdetails(vdata)
            console.log(details)
          }).catch(error => {
            console.log(error)
          }) 
         
      }
      let i=0
      
      async function getName(){
        let names=[]
        await axios.get('http://10.0.2.2:5000/getNames').then(response => {               
            names=response.data
            console.log(names)
            setdata(names)
            //console.log(data)
            // for (i=0;i<Object.keys(names).length;i++){
            //     name=(names[i].name)
            //     setdata(name)
             
            // };
            
            // console.log(data)
            global.alert=Object.keys(names).length
          }).catch(error => {
            console.log(error)
          }) 
      }
    
      

    
//    useEffect(() => {
//         const interval = setInterval(() => {
//           getName()
//           console.log(data)
          
//         }, 1000);
//         return () => clearInterval(interval);
//       }, []);
return(
    <View> 
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
        />
            
    
        <Modal
        
        animationType="slide"
        visible={isOpen}>
       <View> 
        <FlatList 
            data={details}
            renderItem={({item})=>{
                return (<View style={{ 
                    padding:5,
                    borderWidth:1,
                    borderColor:'black',
                   
                }}> 
                    <View style={{alignItems: 'center'}}>
                    
                    <Text style={styles.text2}>Name :  {item.name}</Text>
                    <Text style={styles.text2}>Timein :  {item.Timein}</Text>
                    <Text style={styles.text2}>Destination :  {item.Destination}</Text>
                    <Text style={styles.text2}>Date :  {item.date}</Text>
                    <Image style={{height:100,width:100,}}  source={item.uri}/> 

                   
                    <Text style={styles.text2}>cnic :  {item.cnic}</Text>


                    </View>
                </View>)
            }}
            keyExtractor={(item, index)=>index.toString()}
        />

            
            <TouchableOpacity
                        style={{width: '50%',
                        height: '20%',            
                       justifyContent: 'center',
                       alignSelf:'center',
                        alignItems: 'center',           
                        borderRadius:10,           
                        backgroundColor:"#adb5bd",}}
                        onPress={() =>  toggleOpen(false)
                        
                        }>
                        <Text style={{fontSize:20,                                 
                            fontWeight:'bold',                     
                             color:'#343a40'}}>Confirm</Text>
            </TouchableOpacity>
                          
        </View>
        </Modal>
        
    </View>
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