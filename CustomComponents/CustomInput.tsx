import * as React from 'react';
import { useEffect, useState  } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Alert, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useColorScheme } from 'react-native';


export type Props = {
    style?: {
        backgroundColor?: "#ffffff" | String;
        width?: String | Number;
        height?: String | Number;
    }
    iconName: String;
    secureText: Boolean;
    placeholderText: String;
    typing: Function;
    keyboardType: String;
    IconColor: '#FE8270'|String;
    value : string;

}

const CustomInput = (props: Props) => {
   
    const [show, setShow] = useState(props?.secureText)

    useEffect(() => {
        setShow(props?.secureText)
    }, [props?.secureText]);

    return (
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop:10,marginBottom:10,  }}>
            <View style={{ flexDirection: 'row', width: props.style?.width || '80%', backgroundColor: props.style?.backgroundColor || '#111319', height: 50, borderRadius: 30, }}>
                <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
                    <TouchableOpacity onPress={() => setShow(!show)} >
                        <Icon name={props.iconName} size={30} color={props?.IconColor || '#FE8270'} />
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={{
                        width: '80%', height: '100%', paddingLeft: 10, fontSize: 18,
                        borderTopRightRadius: 30, borderBottomRightRadius: 30,
                        color:'#ffffff'
                    }}
                    placeholder={props.placeholderText} secureTextEntry={show}
                    onChangeText={props?.typing}
                    keyboardType={props?.keyboardType || "default"}
                    maxLength={50} placeholderTextColor={"#F2F3F5"}
                    value={props.value}
                /> 
            </View>

        </View>
    );
}

export default CustomInput;

