import React, {useState} from "react";
import {Text,
StyleSheet,ImageBackground,Modal, FlatList, Button,View, TouchableOpacity,  
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "./colors";
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import MonthPicker from 'react-native-month-picker';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Reports({placeholder}){
    
    const arr=[
        {
            id:'1',            
            Destination:'day',
            Visitor:6
        },
        {
            id:'2',           
            Destination:'DataCell',
            Visitor:7
        },
        
    ];
    const arr2=[
        {
            id:'1',            
            Destination:'Month',
            Visitor:6
        },
        {
            id:'2',           
            Destination:'DataCell',
            Visitor:7
        },
        
    ];
    const renderItem=({item})=>(
        <VisitorReports  Destination={item.Destination} Visitor={item.Visitor}/>
    );
    const VisitorReports=({Destination,Visitor})=>(
        <View style={{padding:5, borderWidth:1,borderColor:COLORS.mainblue,margin:10,flexDirection:'row'}}>
            <TouchableOpacity> 
            
            <Text style={styles.text3}>{'Destination: '+Destination}</Text>
            <Text style={styles.text3}>{'Visitors: '+Visitor}</Text>

            
            </TouchableOpacity>

        </View>
    );
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [disp, setdisp] = useState('none')
    const [disp2, setdisp2] = useState('none')



    const [isOpen, toggleOpen] = useState(false);
    const [value, onChange] = useState(new Date());
    function Monthpickr(){
        setdisp('flex')
        setdisp2('none')
        toggleOpen(false)
    }
    function Datepickr(){
        setdisp2('none')
        setdisp('none')
        setOpen(true)
        
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
                    console.log(date.getMonth())
                    console.log(date.getFullYear())

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
                <View style={{flexDirection:"row",marginTop:10,borderBottomWidth:1,height:'15%'}}>
                <Text style={{fontSize:20,color:'#343a40',fontWeight:'bold', color:'#343a40',
                marginLeft:'1%', marginEnd:8, paddingTop:0, textAlign:'center'}}>
                    Select Month :
                </Text>
                <TouchableOpacity onPress={() => toggleOpen(true) } 
                style={{width: '50%',
                height: '100%',            
               justifyContent: 'center',
                alignItems: 'center',           
                borderRadius:10,           
                backgroundColor:"#ced4da",}}>
                <Text style={{fontSize:20,                                 
                fontWeight:'bold',                     
                fontFamily:'monospace', color:'#343a40'}}>
                {value ? moment(value).format('MM/YYYY') : placeholder}
                
                </Text>
                
                </TouchableOpacity>
                <Modal
                    transparent
                    animationType="slide"
                    visible={isOpen}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.contentContainer}>
                    <View style={styles.content}>
                        <MonthPicker
                        selectedDate={value || new Date()}
                        
                        onMonthChange={onChange }
                        />
                        <TouchableOpacity
                        style={{width: '50%',
                        height: '10%',            
                       justifyContent: 'center',
                       alignSelf:'center',
                        alignItems: 'center',           
                        borderRadius:10,           
                        backgroundColor:"#adb5bd",}}
                        onPress={() => Monthpickr()
                        
                        }>
                        <Text style={{fontSize:20,                                 
                            fontWeight:'bold',                     
                             color:'#343a40'}}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                    
                    </View>
                </Modal>
                
            </View>

                {/*  display Data*/}
            <View style={{display:disp}}>
            <View style={{flexDirection:'row' ,justifyContent:'center', marginTop:2,
             backgroundColor:'#adb5bd',width:"90%",alignSelf:'center',borderRadius:5}}> 
            <Text style={{fontSize:20, 
            color:"#343a40" ,  marginStart:5 ,marginTop:3,                         
            fontWeight:'bold'}}>Monthly Reports</Text>
            </View>
            <FlatList
                data={arr2}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                
             />
            
            </View>

            <View style={{display:disp2}}>
            <View style={{flexDirection:'row' ,justifyContent:'center', marginTop:2,
             backgroundColor:'#adb5bd',width:"90%",alignSelf:'center',borderRadius:5}}> 
            <Text style={{fontSize:20, 
            color:"#343a40" ,  marginStart:5 ,marginTop:3,                         
            fontWeight:'bold'}}>Daily Reports</Text>
            </View>
            <FlatList
                data={arr}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                
             />
            
            </View>

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