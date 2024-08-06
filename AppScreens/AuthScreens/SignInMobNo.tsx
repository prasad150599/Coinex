import React, { useEffect, useState } from "react";
import { Image, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import CustomeScreen from "../../CustomComponents/CustomScreen";
import CustomButton from "../../CustomComponents/CustomButton";
import CountryCodeModal from "../../CustomComponents/CountryCodeModal";
import { useNavigation } from "@react-navigation/native";


const SignInMobNo = (prop: any) => {

    const [codeModalVisible, setCodeModalVisible] = useState(false);
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.main}
            >
                <ScrollView style={styles.main}>
                    <View style={{ flex: 2, backgroundColor: 'red' }}>

                        <CustomeScreen ScreenName={'Mobile'} style={{ TextMargin: 50 }} imagePath={require('../../Resources/Images/Illustration.png')} SecondIcon={false} ScreenLogo={true} IconName={undefined} />
                    </View>

                    <View style={{ flex: 2, }}>
                        <Text style={styles.InputInfoText}>Simply enter your phone number to login{'\n'}or create an account.</Text>

                        <View style={styles.InputView}>

                            <TouchableOpacity style={styles.code}>
                                {/* onPress={() => { setCodeModalVisible(true); console.log('setCodeModalVisible(true)') }}> */}
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000' }}>+91</Text>
                            </TouchableOpacity>

                            <TextInput
                                style={styles.textInput}
                                keyboardType='numeric' maxLength={10} >
                            </TextInput>

                        </View>
                        <Text style={styles.policyText}>By using our mobile app, you agree to our{'\n'}Privacy Policy and Terms of Use.</Text>

                        {/* {
                    <CountryCodeModal visible={codeModalVisible} />
                } */}

                    </View>
                    <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center' }}>
                        <CustomButton title={'Continue'} onp={() => { navigation.navigate('OtpVerify') }} />
                    </KeyboardAvoidingView>


                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#191C26'
    },

    InputInfoText: {
        margin: 10,
        color: '#ffffff',
        fontSize: 18,
        alignSelf: 'center'
    },

    InputView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        width: '80%',
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 30,
    },

    code: {
        width: '20%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        height: '80%',
        width: '80%',
        borderLeftWidth: 2,
        borderColor: 'gray',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        paddingLeft: 10,


    },
    policyText: {
        margin: 30,
        color: '#ffffff',
        fontSize: 18,
        alignSelf: 'center'
    }
});

export default SignInMobNo;