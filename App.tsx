/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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
import { Screen } from 'react-native-screens';
import OtpVerifyScreen from './AppScreens/AuthScreens/OtpVerifyScreeen';
import CreatePassword from './AppScreens/AuthScreens/CreatePassword';
import ForgotPassword from './AppScreens/AuthScreens/ForgotPassword';
import SelectLocation from './AppScreens/AuthScreens/SelectLocation';
import HomeScreen from './AppScreens/MainScreens/HomeScreen';
import WelcomeLogin from './AppScreens/AuthScreens/WelcomeLogin';
import SignInScreen from './AppScreens/AuthScreens/SignInScreen';
import SplashScreen from './AppScreens/SplashScreen';
import MarketTrends from './AppScreens/MainScreens/MarketTrends';
import HomeSctack from './AppScreens/MainScreens/HomeStack';
import HomeStack from './AppScreens/MainScreens/HomeStack';
import AuthStack from './AppScreens/AuthScreens/AuthStack';
import CoinDataScreen from './AppScreens/MainScreens/CoinDataScreen';
import SettingsScreen from './AppScreens/MainScreens/Settings';
import CustomeNavigationComp from './CustomComponents/CustomNavigationComp';
import Profile from './AppScreens/MainScreens/Profile';
import Notification from './AppScreens/MainScreens/Notification';
import CandleStickChartExample from './CustomComponents/ChartComponent';
import Chart from './CustomComponents/ChartComponent';
import CustomValueCard from './CustomComponents/CustomeValueCard';
import SetUserInfo from './AppScreens/AuthScreens/SetUserInfo';

const MainStack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191C26',justifyContent:'center' }}>
     

      <NavigationContainer>
        <MainStack.Navigator initialRouteName="SplashScreen">
        <MainStack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            
        <MainStack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
 
        <MainStack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
          
        </MainStack.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({

// });

// export default App;
// {
//     {/* <Text style={{alignSelf:'center', fontSize: 50, color: '#4DE0D9', fontWeight: 'bold' }}>
//           Coinex
//         </Text> */}

//         {/* <CoinDataScreen/> */}
//         {/* <CustomValueCard Card1Title={''} Card2Title={''} Card1Value={''} Card2Value={''}/> */}
//         {/* <Chart/> */}

//         {/* <SettingsScreen/> */}
//         {/* <Profile/> */}
//         {/* <CustomeNavigationComp/> */}
//         {/* <Notification/> */}
//         {/* <HomeScreen/> */}
        

//         {/* <CreatePassword/> */}
//         {/* <WelcomeLogin/> */}
// }