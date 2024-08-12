import React, { useCallback, useEffect, useState } from "react";
import { Alert, Button, Image, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import CustomeScreen from "../../CustomComponents/CustomScreen";
import CustomButton from "../../CustomComponents/CustomButton";
import CountryCodeModal from "../../CustomComponents/CountryCodeModal";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";


const SignInMobNo = (prop: any) => {

    const [codeModalVisible, setCodeModalVisible] = useState(false);
    const [code,setCode] = useState('+91');
    const [mobileNo, setMobileNo] = useState("");
    const navigation: any = useNavigation();

    const sendOtp =() => {
      if(mobileNo.trim()) { 
        Alert.alert(`Otp sent to the mobile number \n (${code})${mobileNo} `);
        navigation.navigate('OtpVerify')
        setMobileNo("")
        setCode(code)
    }
    else{
        Alert.alert('Enter mobile number');
    }
      }

      const handleCodeChange = (newCode: string) => {
        setCode(newCode);
        setCodeModalVisible(false); // Close the modal after selection
    };

    return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView style={styles.main}>
                    <ScrollView style={styles.main}>
                        <View style={{ flex: 2, backgroundColor: 'red' }}>
                            <CustomeScreen ScreenName={'Mobile'} style={{ TextMargin: 50 }} imagePath={require('../../Resources/Images/mobileNo.png')}
                                SecondIcon={false} ScreenLogo={true} IconName={""} />
                        </View>
                        <View style={{ flex: 2, }}>
                            <Text style={styles.InputInfoText}>Simply enter your phone number to login{'\n'}or create an account.</Text>
                            <View style={styles.InputView}>
                                <TouchableOpacity style={styles.code} onPress={() => { setCodeModalVisible(!codeModalVisible);}}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>{code}</Text>
                                </TouchableOpacity>
                                <TextInput
                                    style={styles.textInput}
                                    keyboardType='numeric' maxLength={10} onChangeText={(val:any)=>{setMobileNo(val)}} value={mobileNo}>
                                </TextInput>
                            </View>
                            <Text style={styles.policyText}>By using our mobile app, you agree to our{'\n'}Privacy Policy and Terms of Use.</Text>
                            {
                                <CountryCodeModal visible={codeModalVisible}  handleClose = {setCodeModalVisible} data={setCode}/> 
                            }
                        </View>
                        <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center' }}>
                            <CustomButton title={'Continue'} onp={() => { sendOtp() }} />
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
        margin: 20,
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
        backgroundColor:'#111319',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 30,
    },
    code: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        height: '100%',
        width: '75%',
        borderLeftWidth: 2,
        borderColor: 'gray',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        paddingLeft: 20,
    },
    policyText: {
        margin: 30,
        color: '#ffffff',
        fontSize: 18,
        alignSelf: 'center'
    }
});

export default SignInMobNo;