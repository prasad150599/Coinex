import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Alert, Pressable } from 'react-native';


export type Props = {

    Card1Title: string | number;
    Card2Title: string | number;
    Card1Value: string | number;
    Card2Value: string | number;
    style?: {
        Card1backgroundColor?: "#ffffff" | string;
        Card2backgroundColor?: "#ffffff" | string;
        width?: string | number;
        height?: string | number;
        Title1Color: "#ffffff" | string;
        Title2Color: "#ffffff" | string;
        Value1Color: "#ffffff" | string;
        Value2Color: "#ffffff" | string;
    }
}


const CustomValueCard = (props: Props) => {

    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 8 }}>
                <View style={{ height: 80, width: '45%', backgroundColor: props?.style?.Card1backgroundColor || "#1E2230", borderRadius: 10 }}>
                    <Text style={{ color: '#4DE0D9', margin: 10 }}> {props.Card1Title}</Text>
                    <Text style={{ color: '#ffffff', marginLeft: 10 }}>{props?.Card1Value}</Text>
                </View>
                <View style={{ height: 80, width: '45%', backgroundColor: props?.style?.Card2backgroundColor || "#1E2230", borderRadius: 10 }}>
                    <Text style={{ color: '#4DE0D9', margin: 10 }}> {props.Card2Title}</Text>
                    <Text style={{ color: '#ffffff', marginLeft: 10 }}>{props?.Card2Value}</Text>
                </View>
            </View>
        </>
    )
}

export default CustomValueCard;