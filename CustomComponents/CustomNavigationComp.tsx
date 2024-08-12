import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { Switch } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

export type Props = {
    LeftIcon: string;
    LeftIconColor: string;
    LeftIconSize: number;
    RightIcon: string;
    RightIconColor: string;
    RightIconSize: number;
    title: string;
    changeItem: boolean;
    style?: {
        backgroundColor?: "red" | string;
        width?: string | number;
        height?: string | number;
        TextColor?: string;
        fontsize: number;
    }
    onp?: Function;
    toggle?: Function;
    isEnabled ?: boolean;
}

const CustomeNavigationComp = (props: Props) => {

    const [changeItem, setChangeItem] = useState(props?.changeItem);

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

                <TouchableOpacity style={{ flex: 1.6, backgroundColor: '#1E2230', alignItems: 'center', justifyContent: 'center' }}>
                    {
                        changeItem ?
                            <Switch
                                trackColor={{ false: '#767577', true: '#008b91' }}
                                thumbColor={props.isEnabled ? 'cyan' : '#f4f3f4'}
                                onValueChange={props?.toggle}
                                value={props.isEnabled} style={{ height: 50 }}
                                style={{
                                    transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }], // Scale the switch
                                }}
                            />
                            :
                            <Icon name={props?.RightIcon} size={props?.RightIconSize || 30} color={props?.RightIconColor || '#ffffff'} />
                    }
                </TouchableOpacity>
            </TouchableOpacity>
        </>
    );
}

// const styles = StyleSheet.create({

// })
export default CustomeNavigationComp;