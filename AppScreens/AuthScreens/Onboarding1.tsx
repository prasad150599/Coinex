/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import CustomButton from '../../CustomComponents/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


export type Props = {
    // title1: String;
    // title2: String;
    // pageNo: Number | string;
    // style?: {
    //     backgroundColor?: "red" | "green" | "blue" | String;
    //     width?: String | Number;
    //     height?: String | Number;
    // }
    // onp?: Function;
}

const Onboarding1 = (props: Props) => {

    const navigation:any = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#191C26' }}>
            <View style={styles.Container}>
                <View style={styles.card}>
                    <View style={styles.imageView}>
                        <Image source={require('../../Resources/Images/image2.png')} style={styles.image} />
                    </View>
                    <View style={{ flex: 2, marginTop: 30, alignSelf: 'center' }}>
                        <View style={{ marginBottom: 20, marginTop: 20 }}>
                            <Text style={styles.BigText}>Welcome to </Text>
                            <Text style={styles.BigText}>Cryptocurrency</Text>
                        </View>
                        <Text style={styles.InfoText}>Reference site about Lorem</Text>
                        <Text style={styles.InfoText}>Ipsum, giving information origins</Text>
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <CustomButton title={'Get Started'} style={{ backgroundColor: '#34D9D1', }} />
                    </View>
                </View>
                <CustomButton title={'Skip'} style={{ width: '35%', }}
                 color1="#FF9BD0" color2="#FF73AA"  onp={()=>{navigation.navigate('WelcomeLogin');}} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        height: '76%',
        width: '76%',
        backgroundColor: '#111319',
        marginBottom: 30,
        borderRadius: 20

    },

    BigText: {
        fontSize: 30,
        color: '#4DE0D9',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    InfoText: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center'
    },
    imageView: {
        flex: 2,
        marginTop: 30,
        alignSelf: 'center',
        borderBlockColor: '#ffffff'
    },

    ScreenNo: {
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 25,
        height: 50,
        width: '45%'
    },

    image: {
        height: 206,
        width: 206
    },

    ScreenNoText: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: 'bold'
    }


});

export default Onboarding1;
