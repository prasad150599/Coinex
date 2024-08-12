import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CustomeScreen from '../../CustomComponents/CustomScreen';
import CustomInput from '../../CustomComponents/CustomInput';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomeNavigationComp from '../../CustomComponents/CustomNavigationComp';



const Notification = () => {
    return (
        <View style={{ flex: 1 ,backgroundColor:'#191C26'}}>
            <View style={{ flex: 1 }}>
            <CustomeScreen ScreenName={'Notification'} style={{ TextMargin: 20 }} SecondIcon={false} ScreenLogo={false} imagePath={'undefined'} IconName={'undefined'} />
            </View>
            <TouchableOpacity style={{ flex: 12,marginTop:20,borderRadius:20}}>
                <CustomeNavigationComp LeftIcon={'bell'} LeftIconColor={'#4DE0D9'} LeftIconSize={30} RightIcon={'caret-right'} RightIconColor={'#ffffff'} RightIconSize={30} title={'Hello Prasad, Welcme to Coinex !'} style={{ fontsize: 20, height: 60 }} changeItem={false}/>
            </TouchableOpacity>
        </View>
    );
}

export default Notification;