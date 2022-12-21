import React from "react";  
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'  
import Login from "./Login";
import AddDetails from "./VisitorDetails";
import Gaurdmain from "./gaurd";
import CurrentVis from "./CurrentVis";
import Icon from 'react-native-vector-icons/Ionicons';
import AdminMain from "./Admin";
import PersonMain from "./person";
import Report from "./Reports";
import AddGuard from "./AddGuard";
import Alert from "./Alerts";
import AddPerson from "./AddPerson";
import AddCamera from "./AddCamera";
import AddDestination from "./AddDestination";
import AddPath from "./AddPath";
import CurrentVisGuard from "./CurrentVisGuard";


const Tab=createBottomTabNavigator()
const Stack = createNativeStackNavigator()
function GuardScreen(){
    return(
            <Tab.Navigator screenOptions ={{                               
                tabBarLabelStyle: { fontSize: 0,fontFamily:"monospace" },
                tabBarStyle: { backgroundColor: 'white',},
                activeTintColor:{color:"#1971c2"},
                inactiveTintColor:{color: "#4dabf7"}
            
              }}
              
                >
                <Tab.Screen name="Current Visiter" component={CurrentVisGuard}  
                options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"list"} color={color} size={45} />),
                   
                    }}          ></Tab.Screen>
                <Tab.Screen name="Add Visiter" component={AddDetails} 
                options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"add-circle-outline"} color={color} size={45} 
                    />),
                    
                    tabBarOptions: { 
                        showIcon: true,                        
                     },
                     
                }}  
                ></Tab.Screen>
                <Tab.Screen name="Alerts" component={Alert}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"notifications"} color={color} size={40} 
                    
                  
                    />),
                
                     tabBarBadge: 1,

                }}  
                
                ></Tab.Screen>
            </Tab.Navigator>
    )
    }
    function AdminScreen(){
        return(
                <Tab.Navigator screenOptions ={{                               
                    tabBarLabelStyle: { fontSize: 0,fontFamily:"monospace" },
                    
                  }}
                  
                    >
                    <Tab.Screen name="Home"  component={AdminMain}  
                    options={{
                        tabBarIcon: ({size, color}) => (<Icon name={"home"} color={color} size={35} />),
                        tabBarStyle: { backgroundColor: '#dee2e6',},
                        headerTitle:'',
                        headerStyle: {
                            backgroundColor: '#dee2e6',
                          },
                          headerTintColor: '#fff',
                          headerTitleStyle: {
                            fontWeight: 'bold',
                            color:'#495057'
                          },
                       
                    

                        }}          ></Tab.Screen>
                    <Tab.Screen name="Reports" component={Report} 
                    options  ={{
                        tabBarIcon: ({size, color}) => (<Icon name={"list"} color={color} size={40}     
                        />),
                        tabBarStyle: { backgroundColor: '#dee2e6',},
                        headerStyle: {
                            backgroundColor: '#dee2e6',
                          },
                          headerTintColor: '#fff',
                          
                          headerTitleStyle: {
                            fontWeight: 'bold',
                            color:'#495057',
                            
                          },
                        tabBarOptions: { 
                            showIcon: true,                        
                         },
                         
                    }}  
                    navigationOption
                    ></Tab.Screen>
                    <Tab.Screen name="Alerts" component={Alert}
                    options={{
                        tabBarIcon: ({size, color}) => (<Icon name={"notifications"} color={color} size={35}/>),
                        headerStyle: {
                            backgroundColor: '#dee2e6',
                          },
                          
                          headerTintColor: '#fff',
                          headerTitleStyle: {
                            fontWeight: 'bold',
                            color:'#495057'
                          },
                        
                        tabBarStyle: { backgroundColor: '#dee2e6',}
    
                    }}  
                    
                    ></Tab.Screen>
                </Tab.Navigator>
        )
        }


export default function MainFile(){
    return (
    <NavigationContainer>
        <Stack.Navigator> 
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="AdminHome"component={AdminMain}/> */}
        <Stack.Screen name="PersonHome"component={PersonMain}/>
        <Stack.Screen name='GuardHome' component={GuardScreen} options={{title:' ', headerShown:false}} />
        <Stack.Screen name='AdminHome' component={AdminScreen} options={{title:' ', headerShown:false}} />
        <Stack.Screen options={
            { headerTitle:''}
        } name="CurrentVisitorAdmin"component={CurrentVis}/>
        <Stack.Screen name="Reports"component={Report}/>
        <Stack.Screen name="Alerts"component={Alert}/>
        <Stack.Screen name="AddGuard"component={AddGuard}/>
        <Stack.Screen name="AddPerson"component={AddPerson}/>
        <Stack.Screen name="AddCamera"component={AddCamera}/>
        <Stack.Screen name="AddPath"component={AddPath}/>
        <Stack.Screen name="AddDestination"component={AddDestination}/>






        {/* <Stack.Screen name="VisitorDetail" component={AddDetails} />
        <Stack.Screen name="Home"component={Gaurdmain}/> */}
        



        </Stack.Navigator>
    </NavigationContainer>
    )
}