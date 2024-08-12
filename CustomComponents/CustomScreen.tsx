import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';
import CustomInput from './CustomInput';
import BackButton from './BackButton';
import { useNavigation } from '@react-navigation/native';


export type Props = {
  ScreenName: string;
  style?: {
       TextMargin: number | string;
  }
  onp?: Function;
  imagePath: string;
  SecondIcon: boolean ;
  ScreenLogo : boolean;
  IconName : string;
}


const CustomeScreen = (props: Props) => {

  const navigation = useNavigation();
  const [secondIcon, setSecondIcon] = useState(props.SecondIcon)

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#191C26' }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          
          <BackButton back={() => navigation.goBack()} />
        </View>
        <View style={{ flex: 3, justifyContent: 'center' }}>
          <Text 
          style={{marginLeft: props.style?.TextMargin, fontSize: 26, color: '#ffffff', alignSelf: 'flex-start' }}>
            {props.ScreenName || 'Screen Name'}</Text>
        </View>
        {
          props?.SecondIcon
           ?
          <View style={{ flex: 1, justifyContent: 'center' }}>
           <TouchableOpacity 
        style={{marginLeft:10,marginTop:5, justifyContent:'center',alignItems:'center',backgroundColor:'#111319',height:50,width:50,borderRadius:30}}
        onPress={()=>{}} >
          <Icon name={ props?.IconName ||'search'} size={30} color='#4DE0D9' />
        </TouchableOpacity>
        </View>
        :
         null

      }
         
      </View>
     {props?.ScreenLogo 
     ?
      <View style={{ flex:9 , justifyContent: 'center', alignItems: 'center' }}>
        <Image source={props?.imagePath} style={{marginTop:"10%", height: 206, width: 206 }} />
      </View>
      : null }

    </ScrollView>
  );
}

const styles = StyleSheet.create({

});

export default CustomeScreen;
