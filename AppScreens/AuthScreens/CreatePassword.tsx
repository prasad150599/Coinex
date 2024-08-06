import React, { useEffect, useState } from "react";
import { Image, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import CustomeScreen from "../../CustomComponents/CustomScreen";
import CustomButton from "../../CustomComponents/CustomButton";
import CountryCodeModal from "../../CustomComponents/CountryCodeModal";
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from "../../CustomComponents/CustomInput";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";



const CreatePassword = (prop: any) => {

    const navigation = useNavigation();

    const [has8Char, setHas8Char] = useState(false)
    const [hasUppercaseSym, setHasUppercaseSym] = useState(false)
    const [hasNumber, setHasNumber] = useState(false)
    const [password, setPassword] = useState('');

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

    // useEffect(()=>{
    //     console.log("Password =",password)
    // },[password])

    const SetData = async () => {
        await AsyncStorage.setItem('password', password);
        // console.warn(password);
    }

    function SetPassword() {
        if (password != '') {
            console.log("data is  set");
            SetData();
            navigation.navigate('Location');
        }
    }



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <ScrollView style={{ flex: 1, backgroundColor: '#191C26' }}>
                <View style={{ flex: 1 }}>
                    <CustomeScreen ScreenName={'Create Password'} style={{ TextMargin: 10 }} imagePath={require('../../Resources/Images/PasswScreenLogo.png')} SecondIcon={false} ScreenLogo={true} IconName={undefined} />
                </View>

                <View style={{ flex: 2, marginTop: '10%' }}>
                    <Text style={{ margin: 10, color: '#ffffff', fontSize: 18, alignSelf: 'center' }}>Choose a secure password that will be{'\n'}easy for you to remember..</Text>


                    <CustomInput iconName={'eye'} placeholderText={'Password'} secureText={true} typing={(text: any) => { setPassword(text); } } keyboardType={"default"} IconColor={undefined} />

                    <View style={{ justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center', margin: '10%' }}>
                        <Text style={{ fontSize: 18, color: check8CharLen(password) ? '#4DE0D9' : '#ffffff' }}>
                            <Icon name='check' size={20} color={check8CharLen(password) ? '#4DE0D9' : '#ffffff'} /> Has atleast 8 characters</Text>
                        <Text style={{ fontSize: 18, color: hasUppercaseOrSymbol(password) ? '#4DE0D9' : '#ffffff' }}>
                            <Icon name='check' size={20} color={hasUppercaseOrSymbol(password) ? '#4DE0D9' : '#ffffff'} /> Has Uppercase letters or symbol</Text>
                        <Text style={{ fontSize: 18, color: hasnumber(password) ? '#4DE0D9' : '#ffffff' }}>
                            <Icon name='check' size={20} color={hasnumber(password) ? '#4DE0D9' : '#ffffff'} /> Has a number</Text>

                    </View>

                    <CustomButton title={'Continue'} onp={SetPassword} />

                </View>


            </ScrollView>
        </TouchableWithoutFeedback >


    );
}

export default CreatePassword;


