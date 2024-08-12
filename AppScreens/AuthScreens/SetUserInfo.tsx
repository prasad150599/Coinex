import React, { useEffect, useState } from "react";
import { Alert, Button, Image, Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import CustomeScreen from "../../CustomComponents/CustomScreen";
import CustomButton from "../../CustomComponents/CustomButton";
import CustomInput from "../../CustomComponents/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { MMKV } from "react-native-mmkv";


export const storage = new MMKV({
    id: 'user1',
    encryptionKey: 'bitex'
  })


const SetUserInfo = (prop: any) => {

    const navigation:any = useNavigation();
    const [username, setUsername] = useState('');
    const [emailid, setEmailid] = useState('');

    const SetData = () => {
        storage.set('user.name', username)
        storage.set('user.email', emailid)
    }

    const GetData = async () => {
      const Username=  storage.getString('user.name')
      const Email=  storage.getString('user.email')
    }

    function SetUsername() {
        if ((username != '') && (emailid != '')) {
            SetData();
            setUsername('')
            setEmailid('')
            navigation.navigate('CreatePassw');
        }
        else{
            Alert.alert('Enter username and email ')
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={{ flex: 1, backgroundColor: '#191C26' }}>
                <View style={{ flex: 2 }}>
                    <CustomeScreen ScreenName={'User Info'} style={{ TextMargin: 40 }} imagePath={require('../../Resources/Images/PasswScreenLogo.png')} SecondIcon={false} ScreenLogo={true} IconName={undefined} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: "#ffffff", textAlign: 'center', marginTop: 20 }}> Set User Information </Text>
                    <CustomInput iconName={'user'} secureText={false} placeholderText={'username'} style={{ backgroundColor: '#111319' }}
                    typing={(val: any) => { setUsername(val); } } keyboardType={'default'} IconColor={'#FE8270'} value={username} />
                    
                    <CustomInput iconName={'envelope'} placeholderText={'e-mail'} secureText={false} style={{ backgroundColor: '#111319' }}
                    typing={(val: any) => { setEmailid(val); } } keyboardType={'email-address'} IconColor={'#FE8270'} value={emailid} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <CustomButton title={'Set Username'} style={{ width: '80%' }} onp={SetUsername} />
                </View>
               
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191C26'
    },
    dropdown: {
        marginBottom: 20,
        fontSize: 20,
        backgroundColor: '#ffffff',
        height: 60,
        width: '86%',
        borderRadius: 30,
        alignSelf: 'center'
    },
    dropdownContainer: {
        marginTop: 2,
        fontSize: 20,
        borderRadius: 20,
        width: '86%',
        alignSelf: 'center'
    },
    listItemLabelStyle: {
        color: '#000000', // Individual item text color
        fontSize: 20,
        textAlign: 'center',
    },
});

export default SetUserInfo;
