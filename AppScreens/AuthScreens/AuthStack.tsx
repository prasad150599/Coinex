import * as React from 'react';
import { View, Text, Touchable, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeLogin from './WelcomeLogin';
import SignInScreen from './SignInScreen';
import SignInMobNo from './SignInMobNo';
import OtpVerifyScreen from './OtpVerifyScreeen';
import CreatePassword from './CreatePassword';
import ForgotPassword from './ForgotPassword';
import SelectLocation from './SelectLocation';
import Onboarding1 from './Onboarding1';
import SetUserInfo from './SetUserInfo';



const Auth = createNativeStackNavigator();

const AuthStack = (props:any) => {

    return (
        
            <Auth.Navigator initialRouteName="Onboarding1">
                <Auth.Screen name="Onboarding1" component={Onboarding1} options={{ headerShown: false }} />
                <Auth.Screen name="WelcomeLogin" component={WelcomeLogin} options={{ headerShown: false }} />
                <Auth.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
                <Auth.Screen name="SignInMob" component={SignInMobNo} options={{ headerShown: false }} />
                <Auth.Screen name="OtpVerify" component={OtpVerifyScreen} options={{ headerShown: false }} />
                <Auth.Screen name="SetUser" component={SetUserInfo} options={{ headerShown: false }} />
                <Auth.Screen name="CreatePassw" component={CreatePassword} options={{ headerShown: false }} />
                <Auth.Screen name="ForgotPassw" component={ForgotPassword} options={{ headerShown: false }} />
                <Auth.Screen name="Location" component={SelectLocation} options={{ headerShown: false }} />

            </Auth.Navigator>
        
    );
}

export default AuthStack;