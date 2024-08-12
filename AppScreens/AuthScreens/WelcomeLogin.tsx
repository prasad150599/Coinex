import React from 'react';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native';
import CustomButton from '../../CustomComponents/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import HomeStack from '../MainScreens/HomeStack';
import { Screen } from 'react-native-screens';


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

const WelcomeLogin = (props: Props) => {

    const navigation: any = useNavigation();

    return (
        <SafeAreaView style={styles.main}>
            <View style={{ flex: 1, alignItems: 'center', marginTop: '10%' }}>
                <View style={styles.card}>
                    <Image source={require('../../Resources/Images/image2.png')} style={{ height: 206, width: 206 }} />
                </View>
                <View style={{ flex: 1, alignSelf: 'center', width: '100%' }}>
                    <View style={{ marginBottom: 20, }}>
                        <Text style={styles.BigText}>Welcome to </Text>
                        <Text style={styles.BigText}>Cryptocurrency</Text>
                    </View>
                    <View style={{ marginBottom: 20, }}>
                        <Text style={{ fontSize: 18, color: '#ffffff', textAlign: 'center' }}>Deliver your Order around the world {'\n'} without hesitation</Text>
                    </View>
                    <CustomButton title={'Login'} style={{ height: 60, width: '80%', }} color1="#C1B2FF" color2="#9B87FF"
                        onp={() => { navigation.navigate('SignIn') }} />
                    <CustomButton title={'Register'} style={{ height: 60, width: '80%' }}
                        onp={() => { navigation.navigate('SignInMob') }} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#191C26'
    },

    card: {
        height: "40%",
        width: '76%',
        backgroundColor: '#111319',
        borderRadius: 20, justifyContent: 'center',
        alignItems: 'center'

    },

    BigText: {
        fontSize: 30,
        color: '#4DE0D9',
        fontWeight: 'bold',
        textAlign: 'center'
    }


});

export default WelcomeLogin;

// {navigation.navigate('HomeStack',{ Screen:'Home'}}