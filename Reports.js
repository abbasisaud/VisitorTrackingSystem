import React, {useState} from "react";
import {Text,
StyleSheet,ImageBackground,Modal, FlatList, Button,View, Image,
TouchableOpacity,  
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "./colors";
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import MonthPicker from 'react-native-month-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import { SceneView } from "react-navigation";

export default function Reports({placeholder}){
    

    async function getMonthDestination(month){
        data=[]
        await axios.get('http://10.0.2.2:5000/getDestinationByMonth/'+month).then(response => {                
            data=response.data
            //console.log(data)
            setCountDes(data)
            // console.log(details)
          }).catch(error => {
            console.log(error)
          }) 
         
      }

      async function getVisByMonth(destination,month){
        data=[]
        await axios.get('http://10.0.2.2:5000/getDestinationVisiterMonth/'+destination+'/'+month).then(response => {                
            data=response.data
            //console.log(data)
            setMonthVis(data)
            console.log(MonthVis)
            toggleOpen(true)
            // console.log(details)
          }).catch(error => {
            console.log(error)
          }) 
         
      }

  
    const [date, setDate] = useState(new Date())
    const [month, setMonth] = useState(new Date())
    const [month2, setMonth2] = useState()

    const [countDes, setCountDes] = useState([])
    const [MonthVis, setMonthVis] = useState([])
    

    const [isOpen, toggleOpen] = useState(false);

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)

    const [disp, setdisp] = useState('none')
    const [disp2, setdisp2] = useState('none')



    // const [isOpen, toggleOpen] = useState(false);
    // const [value, onChange] = useState(new Date());
    
    function Datepickr(){
        setdisp2('none')
        setdisp('none')
        setOpen(true)
        
    }
    function Datepickr2(){
        setdisp('none')
        setdisp2('none')
        setOpen2(true)
       
        
    }

    
    return(
         
        <View> 
             {/* date picker */}
             <View style={{flexDirection:'row' ,justifyContent:'center', marginTop:2,
             backgroundColor:'#adb5bd',width:"90%",alignSelf:'center',borderRadius:5}}> 
             <Icon name={"list"} color={"#1c7ed6"} size={30} />
            <Text style={{fontSize:20, 
            color:"#343a40" ,  marginStart:5 ,marginTop:3,                         
            fontWeight:'bold'}}>Daily Reports</Text>
            </View>

            <View style={{flexDirection:"row",
                height:"20%", width:'97%'
                ,marginStart:2, borderColor:'#4dabf7',   
                alignItems:"center",borderWidth:0}}>
            
                <Text style={{fontSize:20,fontWeight:'bold', 
                paddingStart:5,
                color:'#343a40',marginRight:'5%'}}>
                    Select Date :
                </Text>
                <TouchableOpacity style={styles.roundButton1}
                    onPress={() =>Datepickr() }
                    >
                <Text style={{fontSize:20,                                 
                fontWeight:'bold',                     
                fontFamily:'monospace', color:'#343a40'}}>
                {date.toLocaleDateString()}
                </Text>
                </TouchableOpacity>
            
                <DatePicker
                    modal
                    mode='date'
                    open={open}
                    date={date}
                    maximumDate	={new Date("2025-12-31")}
                    minimumDate={new Date("2020-12-31")}
                    onConfirm={(date) => {
                    setOpen(false)
                    setdisp2('flex')
                    setDate(date)
                    
                    console.log(date)
                    //console.log()
                    // console.log(date.getMonth()+1)
                    // console.log(date.getFullYear())

                    }}
                    onCancel={() => {
                    setOpen(false)
                    }}
                />
        
            </View>

                    {/* monthpicker */}
                    <View style={{flexDirection:'row' ,justifyContent:'center',
                    width:"90%", alignSelf:'center',borderRadius:5,
                    marginTop:2,backgroundColor:'#adb5bd'}}> 
                    <Icon name={"list"} color={"#1c7ed6"} size={30} />
                    <Text style={{fontSize:20, 
                    color:"#343a40" ,  marginStart:5 ,marginTop:3,                         
                    fontWeight:'bold'}}>Monthly Reports</Text>
                    </View>



                    <View style={{flexDirection:"row",
                height:"20%", width:'97%'
                ,marginStart:2, borderColor:'#4dabf7',   
                alignItems:"center",borderWidth:0}}>
            
                <Text style={{fontSize:20,fontWeight:'bold', 
                paddingStart:5,
                color:'#343a40',marginRight:'5%'}}>
                    Select Month :
                </Text>
                <TouchableOpacity style={styles.roundButton1}
                    onPress={() =>Datepickr2() }
                    >
                <Text style={{fontSize:20,                                 
                fontWeight:'bold',                     
                fontFamily:'monospace', color:'#343a40'}}>
               {month ? moment(month).format('MM/YYYY') : placeholder}
                </Text>
                </TouchableOpacity>
            
                <DatePicker
                    modal
                    mode='date'
                    open={open2}
                    date={month}
                    maximumDate	={new Date("2023-12-31")}
                    minimumDate={new Date("2020-12-31")}
                    onConfirm={(mont) => {
                    setOpen2(false)
                    setdisp('flex')
                    setdisp2('none')
                    setMonth(mont)
                    setMonth2(mont.getMonth()+1)
                    //setsavemonth(mont.getMonth()+1)
                    getMonthDestination(mont.getMonth()+1)
                    //console.log(savemonth)
                    // console.log(mont.getMonth()+1)
                    // console.log(date.getFullYear())

                    }}
                    onCancel={() => {
                    setOpen2(false)
                    
                    }}
                />
        
            </View>



                {/*  display Data*/}
            <View style={{display:disp}}>
            <View style={{flexDirection:'row' ,justifyContent:'center', marginTop:2,
             backgroundColor:'#adb5bd',width:"90%",alignSelf:'center',borderRadius:5}}> 
            <Text style={{fontSize:20, 
            color:"#343a40" ,  marginStart:5 ,marginTop:3,                         
            fontWeight:'bold'}}>Monthly Reports</Text>
            </View>
            
            <View> 
        <FlatList 
            data={countDes}
            renderItem={({item})=>{
                return (<View style={{ 
                    padding:5,
                    borderWidth:1,
                    borderColor:'black',
                   
                }}> 
                    <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                    onPress={() => 
                        getVisByMonth(item.Destination,month2)
                                            
                    }
                    > 
                    <Text style={styles.text3}>Destination Name :  {item.Destination}</Text>
                    <Text style={styles.text3}>Visits :  {item.Count}</Text>
                    <Text style={{borderWidth:1,fontSize:20,                                 
                        fontWeight:'bold',                     
                        fontFamily:'monospace',
                        color:'black',
                        backgroundColor:'gray',
                        width:250,
                        alignSelf:'center'}}>View Visiter Detail </Text>
                    </TouchableOpacity>

                    </View>
                </View>)
            }}
            keyExtractor={(item, index)=>index.toString()}
        />          
                    
        </View>
            
            </View>

            <View style={{display:disp2}}>
            <View style={{flexDirection:'row' ,justifyContent:'center', marginTop:2,
             backgroundColor:'#adb5bd',width:"90%",alignSelf:'center',borderRadius:5}}> 
            <Text style={{fontSize:20, 
            color:"#343a40" ,  marginStart:5 ,marginTop:3,                         
            fontWeight:'bold'}}>Daily Reports</Text>
            </View >
           
        <FlatList 
            data={countDes}
            renderItem={({item})=>{
                return (<View style={{ 
                    padding:5,
                    borderWidth:1,
                    borderColor:'black',
                    
                }}> 
                    <View style={{alignItems: 'center'}}>
                    
                    <Text style={styles.text3}>Destination Name :  {item.Destination}</Text>
                    <Text style={styles.text3}>Visits :  {item.Count}</Text>
                    <Text style={styles.text3}>View Visiter Detail </Text>
                    
                    </View>
                </View>)
            }}
            keyExtractor={(item, index)=>index.toString()}
        />
           
       
            
            </View>
             


            <Modal
        
        animationType="slide"
        visible={isOpen}>
       <View> 
        <FlatList 
            data={MonthVis}
            renderItem={({item})=>{
                return (<View style={{ 
                    padding:5,
                    borderWidth:1,
                    borderColor:'black',
                   
                }}> 
                    <View style={{alignItems: 'center'}}>
                    <Image style={{height:150,width:150,borderRadius:100,}} source={require('./images/userid.jpg')} />
                    <Text style={styles.text3}>Name :  {item.name}</Text>
                    <Text style={styles.text3}>Destination :  {item.Destination}</Text>

                    <Text style={styles.text3}>cnic :  {item.cnic}</Text>
                    <Text style={styles.text3}>Date :  {item.date}</Text>
                    <Text style={styles.text3}>Time In :  {item.Timein}</Text>
                    <Text style={styles.text3}>Time Out :  {item.Timeout}</Text>


                    </View>
                </View>)
            }}
            keyExtractor={(item, index)=>index.toString()}
        />

            
            <TouchableOpacity
                        style={{width: '20%',
                        height: '14%',            
                       justifyContent: 'center',
                       alignSelf:'center',
                        alignItems: 'center',           
                        borderRadius:10,           
                        backgroundColor:"#adb5bd",}}
                        onPress={() =>  toggleOpen(false)
                        
                        }>
                        <Text style={{fontSize:20,                                 
                            fontWeight:'bold',                     
                             color:'#343a40'}}>Back</Text>
            </TouchableOpacity>
                          
        </View>
        </Modal>
        </View>
       
    )
}


const styles=StyleSheet.create(
    {
        
       
           text3:{
            fontSize:20,                                 
            fontWeight:'bold',                     
            fontFamily:'monospace',
            color:'#343a40'
            
           },
          
                  
        roundButton1: {
            width: '50%',
            height: '80%',            
           justifyContent: 'center',
            alignItems: 'center',           
            borderRadius:10,           
            backgroundColor:"#ced4da",
            
            
          }, 
  
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 70,
  },
       
    }
  )