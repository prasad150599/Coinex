// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import { View, FlatList, ScrollView, StatusBar, Text, TouchableOpacity, Modal } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

import { useEffect, useState } from "react";
import { FlatList, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";



export type Props = {
    visible : boolean;
    // style?: {
    //     backgroundColor?: "red" | "green" | "blue" | String;
    //     width?: String | Number;
    //     height?: String | Number;
    // }
    // iconName: String;
    // secureText: boolean;
    // placdeholderText: String;
    // typing: Function
}

const CountryCode = [
    {
        "name": "Afghanistan",
        "dial_code": "+93",
        "code": "AF"
    },
    {
        "name": "Antarctica",
        "dial_code": "+672",
        "code": "AQ"
    },
    {
        "name": "Argentina",
        "dial_code": "+54",
        "code": "AR"
    },
    {
        "name": "Australia",
        "dial_code": "+61",
        "code": "AU"
    },
    {
        "name": "Austria",
        "dial_code": "+43",
        "code": "AT"
    },
    {
        "name": "Azerbaijan",
        "dial_code": "+994",
        "code": "AZ"
    },
    {
        "name": "Bahamas",
        "dial_code": "+1242",
        "code": "BS"
    },
    {
        "name": "Bahrain",
        "dial_code": "+973",
        "code": "BH"
    },
    {
        "name": "Bangladesh",
        "dial_code": "+880",
        "code": "BD"
    },

    {
        "name": "Bhutan",
        "dial_code": "+975",
        "code": "BT"
    },
    {
        "name": "Bolivia, Plurinational State of",
        "dial_code": "+591",
        "code": "BO"
    },
    {
        "name": "Bosnia and Herzegovina",
        "dial_code": "+387",
        "code": "BA"
    },
    {
        "name": "Botswana",
        "dial_code": "+267",
        "code": "BW"
    },
    {
        "name": "Brazil",
        "dial_code": "+55",
        "code": "BR"
    },
    {
        "name": "British Indian Ocean Territory",
        "dial_code": "+246",
        "code": "IO"
    },
    {
        "name": "Burundi",
        "dial_code": "+257",
        "code": "BI"
    },
    {
        "name": "Cambodia",
        "dial_code": "+855",
        "code": "KH"
    },
    {
        "name": "Canada",
        "dial_code": "+1",
        "code": "CA"
    },
    {
        "name": "China",
        "dial_code": "+86",
        "code": "CN"
    },
    {
        "name": "Germany",
        "dial_code": "+49",
        "code": "DE"
    },
    {
        "name": "Greece",
        "dial_code": "+30",
        "code": "GR"
    },
    {
        "name": "Greenland",
        "dial_code": "+299",
        "code": "GL"
    },
    {
        "name": "Hong Kong",
        "dial_code": "+852",
        "code": "HK"
    },
    {
        "name": "Hungary",
        "dial_code": "+36",
        "code": "HU"
    },
    {
        "name": "Iceland",
        "dial_code": "+354",
        "code": "IS"
    },
    {
        "name": "India",
        "dial_code": "+91",
        "code": "IN"
    },
    {
        "name": "Indonesia",
        "dial_code": "+62",
        "code": "ID"
    },
    {
        "name": "Iraq",
        "dial_code": "+964",
        "code": "IQ"
    },
    {
        "name": "Ireland",
        "dial_code": "+353",
        "code": "IE"
    },
    {
        "name": "Israel",
        "dial_code": "+972",
        "code": "IL"
    },
    {
        "name": "Italy",
        "dial_code": "+39",
        "code": "IT"
    },
    {
        "name": "Jamaica",
        "dial_code": "+1876",
        "code": "JM"
    },
    {
        "name": "Japan",
        "dial_code": "+81",
        "code": "JP"
    }
]



const CountryCodeModal = (props: Props) => {

    const [text, setText] = useState('');
    const [selectedId, setSelectedId] = useState<string>();
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        setModalVisible(props?.visible)
    }, [props?.visible])

    const renderItem = ({ item }: any) => (
        <TouchableOpacity  onPress={() => setSelectedId(item.dial_code)} style={{ flex: 1, height: 40, alignItems: 'center', flexDirection: 'row', borderBottomWidth: 0.8, }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000000' }}> {item.dial_code}</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000000',textAlign:'center' }}> {item.name}</Text>
        </TouchableOpacity>
    );


    return (
        <View style={styles.centeredView}>
             <Modal
                animationType="slide"
                transparent={true}
                visible={props?.visible}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    // setModalVisible(!modalVisible);
                }}>
                <View style={{ height: 300, width: 250,backgroundColor:'#ffffff', borderWidth: 1, borderRadius: 10, alignSelf: 'center', justifyContent: 'center', margin: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000000', alignSelf: 'center' }}>Country Code </Text>
                    
                        <FlatList
                            data={CountryCode}
                            renderItem={renderItem}
                        />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000000', }}>Selected: {selectedId} </Text>
                    <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)  }>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
                </View>
            </Modal>
           
        </View>

    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
        width:'40%',
        alignSelf:'center'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        // textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        // textAlign: 'center',
    },
});

export default CountryCodeModal;




