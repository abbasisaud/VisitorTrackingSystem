// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet ,TouchableOpacity} from 'react-native';

// const CamToCamTime = () => {
//   const labels = ['cam1', 'cam2', 'cam3','cam4',"cam5"];
//   const realSize = labels.length;
//   const [inputs, setInputs] = useState(Array(realSize ** 2).fill(''));

//   const handleChange = (index, value) => {
//     const newInputs = [...inputs];
//     newInputs[index] = value;
//     setInputs(newInputs);
//   };

//   const handleSubmit = () => {
//     const newInputs = inputs.map((input,index) => input ? input : 0)
//     console.log(newInputs)
//     // Do something with the inputs state, like sending it to a server
//   }

//   const columnLabels = labels.map((label, index) => (
//     <Text key={index} style={styles.label}>
//       {label}
//     </Text>
//   ));

//    const rows = Array.from({ length: realSize }, (_, rowIndex) => (
//     <View key={rowIndex} style={styles.row}>
//       <Text style={styles.label}>{labels[rowIndex]}</Text>
//       {Array.from({ length: realSize }, (_, colIndex) => (
//         <View key={colIndex} style={styles.cell}>
//           <Text style={styles.label}>{labels[colIndex]}</Text>
//           <TextInput
//             style={styles.input}
//             onChangeText={(text) => handleChange(rowIndex * realSize + colIndex, text)}
//             value={inputs[rowIndex * realSize + colIndex]}
//           />
//         </View>
//       ))}
//     </View>
//   ));
//   // getting value of spacific index
//   // const rowIndex = labels.indexOf("cam3");
//   // const colIndex = labels.indexOf("cam2");
//   // const value = inputs[rowIndex * realSize + colIndex];
//   // console.log(value);

//   return (
//     <View style={styles.container}>
      
//       {rows}
//       <View style={{}}>
        
//         <TouchableOpacity
//         onPress={handleSubmit} 
//         style={{
//           width: 260,
//           height: 50,
//           justifyContent: 'center',
//            alignItems: 'center',
//            marginStart:70,
//             borderRadius:30,
//             marginTop:30,
//             backgroundColor:'#4c6ef5',}}>
//           <Text style={{
//             fontSize:25, 
//             color:"white" ,                                
//             fontWeight:'bold'}}>
//             Save
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'column',
//     // width:"50%",
//     margin:5
//   },
//   columnLabels: {
//     // position: 'absolute',
//     top: 10,
//     left: 49,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     justifyContent:'space-evenly'
    

//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
    
//   },
//   cell: {
//     alignItems: 'center',
//     marginLeft: 8,
//   },
//   label: {
//     fontWeight: 'bold',
//     fontSize:15,  
//     marginTop:5,
//     marginRight: 5,
//     marginBottom: 5,
//     color:'#343a40'
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'black',
//     padding: 10,
//     width: 40,
//     height: 40,
//     textAlign: 'center',
//   },
// });

// export default CamToCamTime;
