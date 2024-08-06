/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Alert, Image, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import CustomButton from '../../CustomComponents/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../../CustomComponents/BackButton';
import CustomInput from '../../CustomComponents/CustomInput';
import { useNavigation } from '@react-navigation/native';
import { Screen } from 'react-native-screens';
import CustomeScreen from '../../CustomComponents/CustomScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';



const SignInScreen = (props: any) => {

  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  var name: string | null;
  var passw: string | null;

  const GetData = async () => {
    name = await AsyncStorage.getItem('username')
    passw = await AsyncStorage.getItem('password')
    // console.warn(name,passw)
  }

  const AuthUserLogin = async () => {
    await GetData();
    if ((username == name) && (password == passw)) {
      navigation.navigate('HomeStack', { screen: 'Home' })
    }
    else {
      console.warn('Username Or Password is Wrong !')
      Alert.alert('Incorrect Username Or Password');

    }
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <ScrollView style={styles.main}>

        <View style={styles.header}>
          <CustomeScreen ScreenName={'Sign In'} style={{ TextMargin: 50 }} imagePath={require('../../Resources/Images/Illustration.png')} SecondIcon={false} ScreenLogo={true} IconName={undefined} />
        </View>


        <View style={{ flex: 4, marginTop: '10%', }}>

          <CustomInput iconName={'envelope'} placeholderText={'e-mail'} secureText={false}
            typing={(val: any) => { setUsername(val) }} keyboardType={'email-address'} IconColor={'#FE8270'} />

          <CustomInput iconName={'lock'} placeholderText={'password'} secureText={true}
            typing={(val: any) => { setPassword(val) }} keyboardType={'default'} IconColor={'#FE8270'} />

          <View style={styles.OptionView}>
            <View >
              <Text style={{ fontSize: 16, color: '#ffffff' }}>Remember me</Text>
            </View>
            <TouchableOpacity onPress={() => {
              navigation.navigate('AuthStack', { screen: 'ForgotPassw' });
            }}>
              <Text style={{ fontSize: 16, color: '#FDAE67' }}>Forgot password ?</Text>
            </TouchableOpacity>

          </View>
          <CustomButton title={'Sign in'} onp={AuthUserLogin} />

        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>

          <Text style={{ fontSize: 16, color: '#ffffff' }}> Already have not an account? <Text style={{ fontSize: 16, color: '#FDAE67' }}>Sign Up !</Text></Text>
        </View>

      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#191C26'
  },
  header: {
    flex: 2,
    alignItems: 'center',
    flexDirection: 'row'
  },
  screenName: {
    flex: 2,
    marginLeft: -30,
    textAlign: 'center',
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  image: {
    height: 206,
    width: 206,
    marginTop: '10%',
    alignSelf: 'center'
  },

  OptionView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: '1%'
  }

});

export default SignInScreen;
