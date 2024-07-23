import React, { useEffect, useRef, useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
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
        <ScrollView style={{ flex: 1, backgroundColor: '#191C26' }}>
            <View style={{ flex: 1 }}>
                <CustomeScreen style={{ margin: 20 }} ScreenName={'OTP Verification'} imagePath={require('../../Resources/Images/Illustration.png')} SecondIcon={false} ScreenLogo={true} />
            </View>

            <View style={{ flex: 2, marginTop: '10%' }}>
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
                <View style={{ marginTop: '10%' }}>
                    <CustomButton title={'Verify'} style={{ width: '80%' }} onp={()=>{navigation.navigate('SetUser')}} />
                </View>
            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({

    TextInput: {
        height: '80%',
        width: '22%',
        fontSize: 25,
        backgroundColor: '#111319',
        borderRadius: 50,
        color: '#ffffff',
        textAlign: 'center'
    },
    InputView: {
        marginTop: '4%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: 100,
        width: '90%',
        backgroundColor: '#191C26',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    infoText: {
        margin: 10,
        color: '#ffffff',
        fontSize: 18,
        alignSelf: 'center'
    },
    timeText:{ 
        color: '#4DE0D9', 
        textAlign: 'center', 
        fontSize: 20 
    }
});

export default OtpVerifyScreen;