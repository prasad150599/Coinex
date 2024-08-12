import React, { useEffect, useState } from 'react';
import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import { MMKV } from "react-native-mmkv";

export const storage = new MMKV({
  id: 'user1',
  encryptionKey: 'bitex'
})

const SplashScreen = ({ navigation }: any) => {
  const [progress, setProgress] = useState(0);
  const [userExists, setUserExists] = useState(false);

  const checkUserData = () => {
    const username = storage.getString('user.name');
    const email = storage.getString('user.email');

    if (username && email) {
      setUserExists(true);
    } else {
      setUserExists(false);
    }
  }

  useEffect(() => {
    checkUserData();
    const checkInternetConnection = async () => {
      const state = await NetInfo.fetch();
      if (state.isConnected) {

      } else {
        Alert.alert('No Internet', 'Please check your internet connection and try again.');
      }
    };

    const timer = setTimeout(() => {
      checkInternetConnection();
      setProgress(100);
    }, 2000); // 2 seconds delay Splashscreen loading
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      if (userExists) {
        navigation.navigate('HomeStack', { screen: 'Home' });
      } else {
        navigation.navigate('AuthStack');
      }
    }
  }, [progress, userExists, navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191C26' }}>
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <Image source={require('../Resources/Images/Logo.png')} style={{ height: 206, width: 206 }} />
        <Text style={{ fontSize: 50, color: '#4DE0D9', fontWeight: '700' }}>
          Bitex
        </Text>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: `${progress}%` }]} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    height: 10,
    width: '60%',
    backgroundColor: '#555',
    borderRadius: 5,
  },
  progress: {
    height: 10,
    backgroundColor: '#4DE0D9',
    borderRadius: 5,
  }
});

export default SplashScreen;
