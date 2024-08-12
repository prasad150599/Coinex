import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import WalletCard from '../../Components/WalletCard';
import { useNavigation } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import Portfolio from './Portfolio';
import PortfolioCard from '../../Components/PortfolioCard';




const HomeScreen = () => {

    const navigation:any = useNavigation();
    return (
        <PaperProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#191C26' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ margin: '5%', alignSelf: 'flex-start' }} onPress={() => { navigation.navigate('Profile') }}>
                        <Icon name='menu' size={30} color='#ffffff' />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#4DE0D9', textAlign: 'center', margin: '5%' }}> Bitex</Text>
                    <TouchableOpacity style={{ margin: '5%', alignSelf: 'flex-start' }} onPress={() => { navigation.navigate('Notification') }}>
                        <Icon name='bell' size={30} color='#ffffff' />
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ flex: 4 }}>

                    <View style={{ flex: 1, margin: '5%' }}>
                        <Text style={styles.UserName}>Hi User ,</Text>
                        <Text style={styles.GreetText}>Good Morning</Text>
                    </View>
                    <View style={{ width: '100%' }}>
                        <WalletCard data={undefined}/>
                    </View>

                    <View style={styles.PortfolioTextView}>
                        <Text style={styles.SectionText}>Portfolio</Text>
                        <TouchableOpacity style={{ backgroundColor: '#1E2230' }} onPress={() => { navigation.navigate('Portfolio') }}>
                            <Text style={styles.SectionText}>View All+</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '100%' }}>
                       <PortfolioCard data={'undefined'} />
                    </View>

                    <View style={styles.CoinProcessView}>
                        <TouchableOpacity>
                            <Image source={require('../../Resources/Images/Send-2.png')} style={styles.CoinProcessImg} />
                            <Text style={styles.CoinProcessName}>Send</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../Resources/Images/Receive-2.png')} style={styles.CoinProcessImg} />
                            <Text style={styles.CoinProcessName}>Receive</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../Resources/Images/Buy-2.png')} style={styles.CoinProcessImg} />
                            <Text style={styles.CoinProcessName}>Buy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../Resources/Images/Swap-2.png')} style={styles.CoinProcessImg} />
                            <Text style={styles.CoinProcessName}>Swap</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ margin: 10, marginTop: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.SectionText}>Market</Text>
                        <TouchableOpacity style={{ backgroundColor: '#1E2230' }} onPress={() => { navigation.navigate('Market') }}>
                            <Text style={styles.SectionText}>View All+</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 80, width: '90%', marginBottom: 10, borderRadius: 10, flexDirection: 'row', backgroundColor: '#1E2230', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Image source={require('../../Resources/Images/Swap-2.png')} style={{ height: 50, width: 50 }} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 20, color: '#4DE0D9' }}>Achain</Text>
                            <Text style={{ fontSize: 16, color: '#ffffff' }}>Ach</Text>
                        </View>
                        <View style={{ flex: 2, alignItems: 'flex-end' }}>
                            <Text style={{ marginRight: 20, fontSize: 20, color: '#ffffff', fontWeight: 'bold' }}>$ 75863</Text>
                            <Text style={{ marginRight: 20, fontSize: 16, color: '#ffffff' }}>12.97 %</Text>
                        </View>
                    </View>

                    <View style={{ height: 80, width: '90%', marginBottom: 10, borderRadius: 10, flexDirection: 'row', backgroundColor: '#1E2230', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Image source={require('../../Resources/Images/Swap-2.png')} style={{ height: 50, width: 50 }} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 20, color: '#4DE0D9' }}>Achain</Text>
                            <Text style={{ fontSize: 16, color: '#ffffff' }}>Ach</Text>
                        </View>
                        <View style={{ flex: 2, alignItems: 'flex-end' }}>
                            <Text style={{ marginRight: 20, fontSize: 20, color: '#ffffff', fontWeight: 'bold' }}>$ 75863</Text>
                            <Text style={{ marginRight: 20, fontSize: 16, color: '#ffffff' }}>12.97 %</Text>
                        </View>
                    </View>

                    <View style={{ height: 80, width: '90%', marginBottom: 10, borderRadius: 10, flexDirection: 'row', backgroundColor: '#1E2230', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Image source={require('../../Resources/Images/Swap-2.png')} style={{ height: 50, width: 50 }} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 20, color: '#4DE0D9' }}>Achain</Text>
                            <Text style={{ fontSize: 16, color: '#ffffff' }}>Ach</Text>
                        </View>
                        <View style={{ flex: 2, alignItems: 'flex-end' }}>
                            <Text style={{ marginRight: 20, fontSize: 20, color: '#ffffff', fontWeight: 'bold' }}>$ 75863</Text>
                            <Text style={{ marginRight: 20, fontSize: 16, color: '#ffffff' }}>12.97 %</Text>
                        </View>
                    </View>

                </ScrollView>

            </SafeAreaView>
        </PaperProvider>
    );
}


const styles = StyleSheet.create({

    GreetText: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    UserName: {
        fontSize: 20,
        color: '#4DE0D9',
        fontWeight: 'bold'
    },
    PortfolioTextView: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    SectionText: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    CoinProcessView: {
        height: 80,
        width: '100%',
        marginTop: 20,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },

    CoinProcessImg: {
        height: 56,
        width: 56
    },
    CoinProcessName: {
        color: '#ffffff',
        textAlign: 'center'
    }



});

export default HomeScreen;




{/* <View style={{backgroundColor:'#1E2230',height:90,width:'100%',borderTopRightRadius:30,borderTopLeftRadius:30,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <TouchableOpacity>
                <Icon name='home' size={30} color='#34D9D1' />
                </TouchableOpacity>
                <TouchableOpacity>
                <Icon name='wallet' size={30} color='#34D9D1' />
                </TouchableOpacity>
                <TouchableOpacity>
                <Icon name='plus' size={80} color='#34D9D1' />
                </TouchableOpacity>
                <TouchableOpacity>
                <Icon name='message' size={30} color='#34D9D1' />
                </TouchableOpacity><TouchableOpacity>
                <Icon name='account-settings' size={30} color='#34D9D1' />
                
                </TouchableOpacity>
                </View> */}