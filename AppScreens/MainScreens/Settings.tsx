import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome'
import CustomeScreen from '../../CustomComponents/CustomScreen';
import CustomeNavigationComp from '../../CustomComponents/CustomNavigationComp';
import { useNavigation } from '@react-navigation/native';
import { Screen } from 'react-native-screens';



const SettingsScreen = () => {
    const navigation:any = useNavigation();

    const [isNewsEnabled, setIsNewsEnabled] = useState(false);
    const [isMessageEnabled, setIsMessageEnabled] = useState(false);

    const NewsSwitch =()=>{setIsNewsEnabled(isNewsEnabled => !isNewsEnabled)};
    const MessageSwitch =()=>{setIsMessageEnabled(isMessageEnabled => !isMessageEnabled)};
    
    
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: .6 }}>
                <CustomeScreen ScreenName={'Settings'} style={{ TextMargin: 50 }} imagePath={'undefined'} SecondIcon={false} ScreenLogo={false} IconName={'undefined'} />
            </View>
{/* /'#191C26' ,#1E2230 */}
            <View style={{ flex: 1, justifyContent: 'center',backgroundColor: '#191C26' }}>
                <TouchableOpacity style={{ alignSelf: 'center', width: '90%', height: 90, backgroundColor: '#1E2230', borderRadius: 10, flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginHorizontal: 0 }}>
                        <Image source={require('../../Resources/Images/Logo.png')} style={{ height: 70, width: 70, marginHorizontal: 10 }} />
                    </View>
                    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#ffffff' }}>User Name</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#4DE0D9' }}>User Name</Text>
                    </View>

                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name='chevron-right' size={30} color={'#ffffff'} />
                    </View>
                </TouchableOpacity>

            </View>

            <View style={{ flex: 6, backgroundColor: '#191C26' }}>

                <ScrollView showsVerticalScrollIndicator={false} style={{ width: '90%', height: 610, backgroundColor: '#1E2230', alignSelf: 'center', margin: 20, borderRadius: 10 }}>
                    <View style={{flex:1, backgroundColor: 'cyan', flexDirection: 'row', height: 50, alignItems: 'center',borderTopRightRadius:10,borderTopLeftRadius:10 }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#000000', marginLeft: 20 }}> Accounts </Text>
                    </View>
                    <View style={{flex:5,marginTop:10}}>
                    <CustomeNavigationComp LeftIcon={'lock'} LeftIconColor={'#ffffff'} LeftIconSize={30} RightIcon={"chevron-right"} RightIconColor={"#ffffff"} RightIconSize={30} title={'Change Password'} changeItem={false} />
                    <CustomeNavigationComp LeftIcon={'bell'} LeftIconColor={'#ffffff'} LeftIconSize={30} RightIcon={"chevron-right"} RightIconColor={"#ffffff"} RightIconSize={30} title={'Order Management'} changeItem={false} />
                    <CustomeNavigationComp LeftIcon={'gear'} LeftIconColor={'#ffffff'} LeftIconSize={30} RightIcon={"chevron-right"} RightIconColor={"#ffffff"} RightIconSize={30} title={'Document Management'} changeItem={false} />
                    <CustomeNavigationComp LeftIcon={'paypal'} LeftIconColor={'#ffffff'} LeftIconSize={30} RightIcon={"chevron-right"} RightIconColor={"#ffffff"} RightIconSize={30} title={'Pyment'} changeItem={false} />
                    <CustomeNavigationComp LeftIcon={'sign-out'} LeftIconColor={'#ffffff'} LeftIconSize={30} RightIcon={"chevron-right"} RightIconColor={"#ffffff"} RightIconSize={30} title={'Sign Out'} onp={() => { navigation.navigate('AuthStack', { screen: 'SignIn' }); } } changeItem={false} />
                    </View>
                    <View style={{flex:0.8,backgroundColor:'#4c5f7c',justifyContent:'center'}}>
                        <Text style={{fontSize:22,fontWeight:'bold',color:'#ffffff',marginLeft:20}}>More Settings</Text>
                    </View>
                    <View style={{flex:5,marginTop:10}}>
                    <CustomeNavigationComp LeftIcon={'newspaper-o'} LeftIconColor={'#ffffff'} LeftIconSize={30} RightIcon={"chevron-right"} RightIconColor={"#ffffff"} RightIconSize={30} title={'Newsletter'} changeItem={true} toggle={NewsSwitch} isEnabled={isNewsEnabled}/>
                    <CustomeNavigationComp LeftIcon={'comments-o'} LeftIconColor={'#ffffff'} LeftIconSize={30} RightIcon={"chevron-right"} RightIconColor={"#ffffff"} RightIconSize={30} title={'Messages'} changeItem={true} toggle={MessageSwitch} isEnabled={isMessageEnabled}/>
                    <CustomeNavigationComp LeftIcon={'money'} LeftIconColor={'#ffffff'} LeftIconSize={30} RightIcon={"chevron-right"} RightIconColor={"#ffffff"} RightIconSize={30} title={'Currency'} changeItem={false} />
                    <CustomeNavigationComp LeftIcon={'language'} LeftIconColor={'#ffffff'} LeftIconSize={30} RightIcon={"chevron-right"} RightIconColor={"#ffffff"} RightIconSize={30} title={'Language'} changeItem={false} />
                    <CustomeNavigationComp LeftIcon={'link'} LeftIconColor={'#ffffff'} LeftIconSize={30} RightIcon={"chevron-right"} RightIconColor={"#ffffff"} RightIconSize={30} title={'Linked Accounts'} changeItem={false}/>
                    </View>
                </ScrollView>

            </View>



        </View>

    );
}

export default SettingsScreen;


