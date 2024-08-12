import React, { useEffect, useState } from "react";
import { Image, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import CustomeScreen from "../../CustomComponents/CustomScreen";
import CustomButton from "../../CustomComponents/CustomButton";
import CountryCodeModal from "../../CustomComponents/CountryCodeModal";
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from "../../CustomComponents/CustomInput";
import { useNavigation } from "@react-navigation/native";


const ForgotPassword = (prop: any) => {

    const navigation = useNavigation();

    // const [has8Char, setHas8Char] = useState(false)
    // const [hasUppercaseSym, setHasUppercaseSym] = useState(false)
    // const [hasNumber, setHasNumber] = useState(false)
    const [inputText, setInputText] = useState('');
    const [showInfoText, SetShowInfoText] = useState(false);

    // const hasnumber = (text: string) => {
    //     const regex = /[1-9]/;
    //     return regex.test(text);
    // };

    // const check8CharLen = (text: any) => {
    //     return text.length >= 8;
    // }

    // const hasSymbol = (text: any) => {
    //     // Regular expression to check for uppercase letters or symbols
    //     const regex = /[A-Z!@#$%^&*(),.?":{}|<>]/;
    //     return regex.test(text);
    // };

    useEffect(() => {
        setTimeout(() => {
            console.log("input =", inputText)
        }, 1000);
    }, [inputText])

    const maskEmail = (email: any) => {
        // Split the email into username and domain
        let [username, domain] = email.split('@');

        // Check if the username is longer than 6 characters to apply masking
        if (username.length > 6) {
            let maskedUsername = username.slice(0, 3) + '*'.repeat(username.length - 6) + username.slice(-3);
            return maskedUsername + '@' + domain;
        } else {
            // If the username is 6 characters or less, mask only the middle part
            let maskedUsername = username[0] + '*'.repeat(username.length - 2) + username.slice(-1);
            return maskedUsername + '@' + domain;
        }
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <ScrollView style={{ flex: 1, backgroundColor: '#191C26' }}>

                <View style={{ flex: 1 }}>
                    <CustomeScreen ScreenName={'Forgot Password'} imagePath={require('../../Resources/Images/ForgetPasswLogo.png')} SecondIcon={false} ScreenLogo={false} IconName={""} />
                </View>

                <View style={{ flex: 2, marginTop: '10%' }}>
                    <Text style={styles.Text}>Choose a secure password that will be{'\n'}easy for you to remember..</Text>
                    <CustomInput iconName={'envelope'} placeholderText={'abcd@gmail.com'}
                    secureText={false} typing={(text: any) => { setInputText(text); } } keyboardType={"email-address"} IconColor={'#FE8270'} />

                    {
                        showInfoText ? <Text style={styles.infoText}> Email set to {maskEmail(inputText)} </Text> : null
                    }
                    <CustomButton title={'Continue'} onp={() => { SetShowInfoText(true) }} />

                </View>

            </ScrollView>
        </TouchableWithoutFeedback>

    );
}


const styles = StyleSheet.create({

    Text: {
        margin: 10,
        color: '#ffffff',
        fontSize: 18,
        alignSelf: 'center'
    },

    infoText: {
        margin: 10,
        color: '#FE8270',
        fontSize: 18,
        alignSelf: 'center'
    }

});

export default ForgotPassword;


