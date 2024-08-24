import React, { useCallback, useEffect, useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import CustomeScreen from "../../CustomComponents/CustomScreen";
import CustomButton from "../../CustomComponents/CustomButton";
import CountryCodeModal from "../../CustomComponents/CountryCodeModal";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Button, Dialog, PaperProvider, Portal } from "react-native-paper";
import CommonStyles from "../../Styles/CommonStyles";


const SignInMobNo = (prop: any) => {

    const navigation: any = useNavigation();

    const [codeModalVisible, setCodeModalVisible] = useState(false);
    const [code, setCode] = useState('+91');
    const [mobileNo, setMobileNo] = useState("");
    const [visible, setVisible] = React.useState(false);


    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const sendOtp = () => {
        if (mobileNo.trim()) {
            showDialog();
            setMobileNo("")
            setCode(code)
        }
    }

    const handleCodeChange = (newCode: string) => {
        setCode(newCode);
        setCodeModalVisible(false); // Close the modal after selection
    };

    return (
        <PaperProvider>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView style={styles.main}>
                    <ScrollView style={styles.main}>
                        <View style={{ flex: 2, backgroundColor: 'red' }}>
                            <CustomeScreen ScreenName={'Mobile'} style={{ TextMargin: 50 }} imagePath={require('../../Resources/Images/mobileNo.png')}
                                SecondIcon={false} ScreenLogo={true} IconName={""} />
                        </View>
                        <View style={{ flex: 2, }}>
                            <Text style={[CommonStyles.InfoText,{margin:20}]}>Simply enter your phone number to login{'\n'}or create an account.</Text>
                            <View style={styles.InputView}>
                                <TouchableOpacity style={styles.code} onPress={() => { setCodeModalVisible(!codeModalVisible); }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>{code}</Text>
                                </TouchableOpacity>
                                <TextInput
                                    style={styles.textInput}
                                    keyboardType='numeric' maxLength={10} onChangeText={(val: any) => { setMobileNo(val) }} value={mobileNo}>
                                </TextInput>
                            </View>
                            <Text style={[CommonStyles.InfoText,{margin:20}]}>By using our mobile app, you agree to our{'\n'}Privacy Policy and Terms of Use.</Text>
                            {
                                <CountryCodeModal visible={codeModalVisible} handleClose={setCodeModalVisible} data={setCode} />
                            }
                        </View>
                        <Portal>
                            <Dialog visible={visible} onDismiss={hideDialog}>
                                <Dialog.Title>Logout</Dialog.Title>
                                <Dialog.Content>
                                    <Text style={styles.bodyMedium}>otp sent successfully.</Text>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={() => { navigation.navigate('OtpVerify');hideDialog() }}>ok</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                        <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center' }}>
                            <CustomButton title={'Continue'} onp={() => { sendOtp() }} />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </PaperProvider>
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
        backgroundColor: '#111319',
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
    },
    bodyMedium: {
        fontSize: 16,  
        color: '#ffffff', 
    },
});

export default SignInMobNo;