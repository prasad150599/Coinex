import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Alert, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


// const myIcon = <Icon name="rocket" size={30} color="#900" />;


export type Props = {
    style?: {
        backgroundColor?: "red" | "green" | "blue" | String;
        width?: String | Number;
        height?: String | Number;
    }
    iconName: String;
    secureText: Boolean;
    placeholderText: String;
    typing: Function;
    keyboardType: String;
    IconColor: '#FE8270'|String;
}

const CustomInput = (props: Props) => {
   
    const [show, setShow] = useState(props?.secureText)

    useEffect(() => {
        setShow(props?.secureText)
    }, [props?.secureText]);



    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10 }}>

            <View style={{ flexDirection: 'row', width: props.style?.width || '90%', backgroundColor: props.style?.backgroundColor || '#ffffff', height: 60, borderRadius: 30, }}>
                <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
                    <TouchableOpacity onPress={() => setShow(!show)} >
                        <Icon name={props.iconName} size={30} color={props?.IconColor || '#FE8270'} />
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={{
                        width: '80%', height: '100%', paddingLeft: 10, fontSize: 18,
                        borderTopRightRadius: 30, borderBottomRightRadius: 30
                    }}
                    placeholder={props.placeholderText} secureTextEntry={show}
                    onChangeText={props?.typing}
                    keyboardType={props?.keyboardType || "default"}
                />
            </View>

        </View>
    );
}

export default CustomInput;

{/* 
<CustomTextInput 
    icon={<Text>A</Text>} 
    linkText="Forgot?" 
    link={()=>{console.log("ok")}}
    onChangeText={(val:any)=>{console.log(val)}}
    keyboardType={"numeric"}
    secureTextEntry={false}
    placeholder="Enter Username"
/>
 */}
 
// const CustomTextInput=(props:any)=>{
//     return(
//       <View style={{
//           height:48,
//           backgroundColor:"#261C1222",
//           width:"100%",
//           borderRadius:8,
//           flexDirection:"row"
//           }}
//           >
//           <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
//               {props?.icon}
//           </View>
//           <View style={[{flex:props?.link?7:9,justifyContent:"center"}]}>
//           <TextInput
//               placeholder={props?.placeholder || "Enter Data"}
//               placeholderTextColor={"rgba(0,0,0,0.3)"}
//               secureTextEntry={props?.secureTextEntry || false}
//               onChangeText={props?.onChangeText}
//               style={{color:"#261C12",fontSize:14}}
//               keyboardType={props?.keyboardType || "default"}
//           />
//           </View>
//           {props?.link && 
//               <TouchableOpacity style={{flex:2,justifyContent:"center",alignItems:"center"}} onPress={props?.link}>
//                   <Text style={{fontSize:14,fontFamily:"Be Vietnam",color:"#D5715B"}}>{props?.linkText}</Text>
//               </TouchableOpacity>
//           }
//       </View>
//     )
//   }
  
//   export default CustomTextInput;