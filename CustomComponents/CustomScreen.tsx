import React, { useState } from 'react';
import { Image, ImageSourcePropType, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import CustomInput from './CustomInput';
import BackButton from './BackButton';
import { useNavigation } from '@react-navigation/native';

export type Props = {
  ScreenName: string;
  style?: {
       TextMargin: number;
  }
  onp?: Function;
  imagePath: ImageSourcePropType | undefined;
  SecondIcon: boolean;
  ScreenLogo: boolean;
  IconName: string;
}

const CustomeScreen = (props: Props) => {
  const navigation = useNavigation();
  const [secondIcon, setSecondIcon] = useState(props.SecondIcon);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.backButtonContainer}>
          <BackButton back={() => navigation.goBack()} />
        </View>
        <View style={styles.screenNameContainer}>
          <Text style={[styles.screenNameText, { marginLeft: props.style?.TextMargin }]}>
            {props.ScreenName || 'Screen Name'}
          </Text>
        </View>
        {props?.SecondIcon && (
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.iconTouchable}
              onPress={() => {}}>
              <Icon name={props?.IconName || 'search'} size={30} color='#4DE0D9' />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {props?.ScreenLogo && (
        <View style={styles.logoContainer}>
          <Image source={props?.imagePath} style={styles.imageStyle} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191C26',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backButtonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  screenNameContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  screenNameText: {
    fontSize: 26,
    fontWeight:'600',
    color: '#ffffff',
    alignSelf: 'flex-start',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  iconTouchable: {
    marginLeft: 10,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111319',
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  logoContainer: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    marginTop: "10%",
    height: 206,
    width: 206,
  },
});

export default CustomeScreen;
