/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { Image, SafeAreaView, ScrollView, Settings, StyleSheet, Text, View, } from 'react-native';
import Onboarding1 from './AppScreens/AuthScreens/Onboarding1';
// import CustomButton from './CustomComponents/CustomButton';
// import WelcomeLogin from './AppScreens/AuthScreens/WelcomeLogin';
// import SignInScreen from './AppScreens/AuthScreens/SignInScreen';
// import CustomInput from './CustomComponents/CustomInput';
// import BackButton from './CustomComponents/BackButton';
// import CustomeScreen from './CustomComponents/CustomScreen';
import SignInMobNo from './AppScreens/AuthScreens/SignInMobNo';
import CountryCodeModal from './CustomComponents/CountryCodeModal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './AppScreens/SplashScreen';
import HomeStack from './AppScreens/MainScreens/HomeStack';
import AuthStack from './AppScreens/AuthScreens/AuthStack';
import messaging from '@react-native-firebase/messaging'
import { PaperProvider } from 'react-native-paper';

const MainStack = createNativeStackNavigator();



export default function App() {

  // const getDeviceTOken =async()=>{
  //   let token = await messaging().getToken();
  //   console.log('Token is',token);
  // }
  // useEffect(()=>{
  //   getDeviceTOken();
  // },[])

  return (
    <PaperProvider>
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191C26', justifyContent: 'center' }}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="SplashScreen">
          <MainStack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <MainStack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
          <MainStack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
        </MainStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    </PaperProvider>
  );
}

