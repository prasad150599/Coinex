/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { ActivityIndicator, Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';



const SplashScreen= ({navigation})=> {

  useEffect(() => {
    const checkInternetConnection = async () => {
      const state = await NetInfo.fetch();
      if (state.isConnected) {
        navigation.replace('AuthStack'); // or 'HomeStack' based on your logic
      } else {
        Alert.alert('No Internet', 'Please check your internet connection and try again.');
      }
    };

    const timer = setTimeout(() => {
      checkInternetConnection();
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191C26' }}>

      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

       <Image source={require('../Resources/Images/Logo2.png')} style={{height:206,width:206}} />

        <Text style={{ fontSize: 50, color: '#4DE0D9', fontWeight: 'bold' }}>
          Coinex
        </Text>
       
       <View style={{ width: '60%', height: 10, backgroundColor: '#4DE0D9', borderRadius: 5,marginTop:40 }}>
        </View>
        <View style={{margin:20}} >
        {/* <Text style={{ fontSize: 12, color: '#ffffff', fontWeight: 'bold' , margin:20}}>Loading</Text> */}
        <ActivityIndicator size={50} color="#4DE0D9" />

        </View>
        
      
       <View>

       </View>

      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default SplashScreen;
