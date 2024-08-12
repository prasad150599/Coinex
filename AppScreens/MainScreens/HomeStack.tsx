import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import MarketTrends from './MarketTrends';
import HomeScreen from './HomeScreen';
import Portfolio from './Portfolio';
import CoinDataScreen from './CoinDataScreen';
import Profile from './Profile';
import Notification from './Notification';
import Settings from './Settings';
import SettingsScreen from './Settings';
import QRScanner from './Scanner';


const HomeStackNavigator = createNativeStackNavigator();

const HomeStack = () => {

    const navigation:any = useNavigation();


    return (

        <View style={{ flex: 1,backgroundColor:'#191C26' }}>
             <View style={{ flex: 13}}>
                <HomeStackNavigator.Navigator initialRouteName="Home">
                    <HomeStackNavigator.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                    <HomeStackNavigator.Screen name="Market" component={MarketTrends} options={{ headerShown: false }} />
                    <HomeStackNavigator.Screen name="Coindata" component={CoinDataScreen} options={{ headerShown: false }} />
                    <HomeStackNavigator.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                    <HomeStackNavigator.Screen name="Portfolio" component={Portfolio} options={{ headerShown: false }} />
                    <HomeStackNavigator.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
                    <HomeStackNavigator.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
                    <HomeStackNavigator.Screen name="Scanner" component={QRScanner} options={{ headerShown: false }} />
                  </HomeStackNavigator.Navigator>
            </View>

            <View style={{
                marginBottom:0,backgroundColor: '#1E2230', height: 90, width: '100%', borderTopRightRadius: 30,
                borderTopLeftRadius: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'
            }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} >
                    <Icon name='home' size={30} color='#34D9D1' />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate('Market')}} >
                    <Icon name='chart-areaspline' size={30} color='#34D9D1' />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate('Scanner')}}>
                    <Icon name='plus' size={80} color='#34D9D1' />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate('Portfolio')}}>
                    <Icon name='wallet' size={30} color='#34D9D1' />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{navigation.navigate('Settings')}}>
                    <Icon name='account-settings' size={30} color='#34D9D1' />
                </TouchableOpacity>

            </View>

        </View>

    );
}

export default HomeStack;