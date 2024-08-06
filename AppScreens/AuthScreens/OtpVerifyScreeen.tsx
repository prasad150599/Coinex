import React, { useEffect, useRef, useState } from "react";
import { Image, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import CustomeScreen from "../../CustomComponents/CustomScreen";
import CustomButton from "../../CustomComponents/CustomButton";
import CountryCodeModal from "../../CustomComponents/CountryCodeModal";
import { useNavigation } from "@react-navigation/native";


const OtpVerifyScreen = (prop: any) => {

    const navigation = useNavigation();

    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <ScrollView style={{ flex: 1, backgroundColor: '#191C26' }}>
            <View style={{ flex: 2, }}>
                <CustomeScreen style={{ TextMargin: 20 }} ScreenName={'OTP Verification'} imagePath={require('../../Resources/Images/Illustration.png')} SecondIcon={false} ScreenLogo={true} IconName={undefined} />
            </View>

            <View style={{ flex: 2,justifyContent:'center',alignItems:'center' }}>
                <Text style={{
                    margin: 10, color: '#ffffff', fontSize: 18, alignSelf: 'center'
                }}
                >An authentication code has been sent to{'\n'}(+880) 111 222 333</Text>

                <View style={styles.InputView}>
                    <TextInput style={styles.TextInput}
                        ref={input1} keyboardType='number-pad' maxLength={1} onSubmitEditing={() => input2.current} returnKeyType="next" >
                    </TextInput>

                    <TextInput style={styles.TextInput}

                        ref={input2} keyboardType='number-pad' maxLength={1} onChangeText={() => input2.current} returnKeyType="next" >
                    </TextInput>

                    <TextInput style={styles.TextInput}

                        ref={input3} keyboardType='number-pad' maxLength={1} onChangeText={() => input2.current} returnKeyType="next" >
                    </TextInput>

                    <TextInput style={styles.TextInput}
                        ref={input4} keyboardType='number-pad' maxLength={1} onChangeText={() => input2.current} returnKeyType="next" >
                    </TextInput>
                </View>

                <Text style={styles.infoText}>I didn't received the otp. {'\n'}
                    <Text style={{ color: '#FE8270' }}>Resend OTP.</Text>
                </Text>
                <Text style={styles.timeText}>1:20 sec left</Text>

            </View>
            <View style={{ flex: 1, justifyContent: 'center',marginTop:'10%' }}>
                <CustomButton title={'Verify'}  onp={() => { navigation.navigate('SetUser') }} />
            </View>

        </ScrollView>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({

    TextInput: {
        height: '80%',
        width: '22%',
        fontSize: 25,
        backgroundColor: '#111319',
        borderRadius: 40,
        color: '#ffffff',
        textAlign: 'center',marginTop:10
    },
    InputView: {
        marginTop: '4%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: 100,
        width: '90%',
        backgroundColor: '#191C26',    
        justifyContent:'space-evenly'    
    },
    infoText: {
        margin: 10,
        color: '#ffffff',
        fontSize: 18,
        alignSelf: 'center'
    },
    timeText: {
        color: '#4DE0D9',
        textAlign: 'center',
        fontSize: 20
    }
});

export default OtpVerifyScreen;