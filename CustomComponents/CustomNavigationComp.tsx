import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

export type Props = {
    LeftIcon: String;
    LeftIconColor: String;
    LeftIconSize: Number;
    RightIcon: String;
    RightIconColor: String;
    RightIconSize: Number;
    title: String;
    style?: {
        backgroundColor?: "red" | "green" | "blue" | String;
        width?: String | Number;
        height?: String | Number;
        TextColor?: String;
        fontsize: Number;
    }
    onp?: Function;
}

const CustomeNavigationComp = (props: Props) => {
    return (
        <>
            <TouchableOpacity
                style={{
                    height: props?.style?.height || 50, width: props?.style?.width || '90%',
                    backgroundColor: '#191C26', alignSelf: 'center', flexDirection: 'row'
                }} onPress={props?.onp}>
                <View style={{ flex: 1.4, backgroundColor: '#1E2230', justifyContent: 'center' }} >
                    <Icon name={props?.LeftIcon} size={props?.LeftIconSize || 30} color={props?.LeftIconColor || '#ffffff'} />
                </View>
                <View style={{ flex: 8, backgroundColor: '#1E2230', justifyContent: 'center' }}>
                    <Text style={{ fontSize: props?.style?.fontsize || 22, color: props?.style?.TextColor || '#ffffff' }}>{props?.title}</Text>
                </View>
                <View style={{ flex: 1.6, backgroundColor: '#1E2230', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={props?.RightIcon} size={props?.RightIconSize || 30} color={props?.RightIconColor || '#ffffff'} />
                </View>

            </TouchableOpacity>

        </>
    );
}

// const styles = StyleSheet.create({
    
// })
export default CustomeNavigationComp;