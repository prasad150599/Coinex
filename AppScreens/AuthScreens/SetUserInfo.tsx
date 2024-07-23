import React, { useEffect, useState } from "react";
import { Button, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import CustomeScreen from "../../CustomComponents/CustomScreen";
import CustomButton from "../../CustomComponents/CustomButton";
import CountryCodeModal from "../../CustomComponents/CountryCodeModal";
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from "../../CustomComponents/CustomInput";
import AsyncStorage from '@react-native-async-storage/async-storage';


import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from "@react-navigation/native";


const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' }
];


const SetUserInfo = (prop: any) => {

    const navigation = useNavigation();

    // const [has8Char, setHas8Char] = useState(false)
    // const [hasUppercaseSym, setHasUppercaseSym] = useState(false)
    // const [hasNumber, setHasNumber] = useState(false)
    // const [inputText, setInputText] = useState('');
    const [username, setUsername] = useState('');
    const [emailid, setEmailid] = useState('');
    const [selectedGender, setSelectedGender] = useState(null);
    const [openGender, setOpenGender] = useState(false);
    const [genderItems, setGenderItems] = useState(genders);



    const hasnumber = (text: string) => {
        const regex = /[1-9]/;
        return regex.test(text);
    };

    const check8CharLen = (text: any) => {
        return text.length >= 8;
    }

    const hasUppercaseOrSymbol = (text: any) => {
        // Regular expression to check for uppercase letters or symbols
        const regex = /[A-Z!@#$%^&*(),.?":{}|<>]/;
        return regex.test(text);
    };

    // useEffect(() => {
    //     // console.log("input =", username)
    // }, [username])


    const SetData = async () => {
        await AsyncStorage.setItem('username', username)
        await AsyncStorage.setItem('emailid', emailid)
        console.warn(username,"|",emailid);
    }

    function SetUsername() {
        if ((username != '') && (emailid !='')) {
            console.log("data is  set");
            SetData();
            navigation.navigate('CreatePassw');
        }
    }


    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#191C26' }}>
            <View style={{ flex: 1 }}>
                <CustomeScreen ScreenName={'User Info'} style={{ margin: 40 }} imagePath={require('../../Resources/Images/PasswScreenLogo.png')} SecondIcon={false} ScreenLogo={true} IconName={undefined} />
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: "#ffffff", textAlign: 'center', marginTop: 20 }}> Set User Information </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'space-around' }}>
                <View style={{ flex: 1, marginTop: 20}}>

                    <CustomInput iconName={'user'} secureText={false} placeholderText={'username'}
                        typing={(val: any) => { setUsername(val); }} keyboardType={'default'} IconColor={'#FE8270'} />

                    <CustomInput iconName={'envelope'} placeholderText={'e-mail'} secureText={false}
                        typing={(val: any) => { setEmailid(val) }} keyboardType={'email-address'} IconColor={'#FE8270'} />

                </View>
               
                <View style={{ marginTop: '20%' }}>
                    <CustomButton title={'Set Username'} style={{ width: '85%' }} onp={SetUsername} />
                </View>

            </View>
        </ScrollView>
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


//  {/* <View style={{ flex: 2 }}>
//     <DropDownPicker
//         open={openGender}
//         value={selectedGender}
//         items={genderItems}
//         setOpen={setOpenGender}
//         setValue={setSelectedGender}
//         setItems={setGenderItems}
//         placeholder="Select a gender"
//         style={styles.dropdown}
//         listItemLabelStyle={styles.listItemLabelStyle}
//         dropDownContainerStyle={styles.dropdownContainer}
//         textStyle={{ fontSize: 20, textAlign: 'center' }}
//         zIndex={500}
//     />

// </View> */}