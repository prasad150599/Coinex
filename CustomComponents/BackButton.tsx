import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';

export type Props = {
    back:Function,
}

const BackButton = (props:Props) =>{
    return(
        <>
        <TouchableOpacity 
        style={{marginLeft:10,marginTop:5, justifyContent:'center',alignItems:'center',backgroundColor:'#111319',height:50,width:50,borderRadius:30}}
        onPress={props.back} >
          <Icon name='arrow-left' size={30} color='#ffffff' />
        </TouchableOpacity>
        </>

    );
}


export default BackButton;