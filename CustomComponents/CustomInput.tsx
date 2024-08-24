import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Alert, Pressable, KeyboardTypeOptions, StyleProp, ViewStyle } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


export type Props = {
    style?: {
        containerStyle?: StyleProp<ViewStyle>; // Style for the button container
    }
    iconName: string;
    secureText: boolean;
    placeholderText: string;
    typing: (text: string) => void;
    keyboardType: KeyboardTypeOptions | undefined;
    IconColor: string;
    value: string;
}

const CustomInput = (props: Props) => {

    const [show, setShow] = useState(props?.secureText)

    useEffect(() => {
        setShow(props?.secureText)
    }, [props?.secureText]);

    return (

        <View style={[styles.container,
        props.style?.containerStyle,
        {
            width: (props.style?.containerStyle as ViewStyle)?.width || '80%',
            backgroundColor: (props.style?.containerStyle as ViewStyle)?.backgroundColor || '#111319',
        }
        ]}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setShow(!show)} >
                    <Icon name={props.iconName} size={30} color={props?.IconColor || '#FE8270'} />
                </TouchableOpacity>
            </View>
            <TextInput
                style={{
                    width: '80%', height: '100%', paddingLeft: 10, fontSize: 18,
                    borderTopRightRadius: 30, borderBottomRightRadius: 30,
                    color: '#ffffff'
                }}
                placeholder={props.placeholderText} secureTextEntry={show}
                onChangeText={props?.typing}
                keyboardType={props?.keyboardType || "default"}
                maxLength={50} 
                value={props.value}
            />
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        height: 50,
        borderRadius: 30,
    }

});

export default CustomInput;

