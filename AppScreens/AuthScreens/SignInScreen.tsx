/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Alert, Image, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomInput from '../../CustomComponents/CustomInput';
import { useNavigation } from '@react-navigation/native';
import CustomeScreen from '../../CustomComponents/CustomScreen';
import { MMKV } from 'react-native-mmkv';
import { Button, Dialog, Portal } from 'react-native-paper';


export const storage = new MMKV({
  id: 'user1',
  encryptionKey: 'bitex'
})


const SignInScreen = (props: any) => {

  const navigation: any = useNavigation();
  const [emailid, setEmailid] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  let email: any;
  let passw: any;

  const GetData = () => {
    email = storage.getString('user.email')
    passw = storage.getString('user.password')
  }

  const AuthUserLogin = () => {
    GetData();
    if ((emailid == email) && (password == passw)) {
      setEmailid('');
      setPassword('');
      navigation.navigate('HomeStack', { screen: 'Home' })
    }
    else if(emailid != email && password != passw){
      showDialog();
    }
   
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.main}>
        <View style={styles.header}>
          <CustomeScreen ScreenName={'Sign In'} style={{ TextMargin: 50 }} imagePath={require('../../Resources/Images/Illustration.png')} SecondIcon={false} ScreenLogo={true} IconName={'undefined'} />
        </View>
        <View style={{ flex: 4, marginTop: '10%', }}> 
          <CustomInput iconName={'envelope'} placeholderText={'e-mail'} secureText={false}
            typing={(val: any) => { setEmailid(val); }} keyboardType={'email-address'} IconColor={'#FE8270'} value={emailid} />

          <CustomInput iconName={'lock'} placeholderText={'password'} secureText={true}
            typing={(val: any) => { setPassword(val); }} keyboardType={'default'} IconColor={'#FE8270'} value={password} />

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
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
          <Text style={{ fontSize: 16, color: '#ffffff' }}> Don't have an account? <Text style={{ fontSize: 16, color: '#FDAE67' }}>Sign Up !</Text></Text>
        </TouchableOpacity>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Required</Dialog.Title>
            <Dialog.Content>
              <Text style={styles.bodyMedium}>wrong email or password.</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => {hideDialog()}}>ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
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
  },
  bodyMedium: {
    fontSize: 16,  
    color: '#ffffff', 
}

});

export default SignInScreen;
