import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomeScreen from '../../CustomComponents/CustomScreen';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../CustomComponents/CustomButton';
import Chart from '../../CustomComponents/ChartComponent';
import CustomValueCard from '../../CustomComponents/CustomeValueCard';



const CoinDataScreen = () => {
    return (

        <View style={styles.main}>
            <View style={{ flex: .8, }}>
                <CustomeScreen ScreenName={'Bitcoin'} style={{ margin: 60 }} imagePath={undefined} SecondIcon={true} ScreenLogo={false} IconName={'heart-outlined'} />
            </View>

            <View style={{ flex: 10 }}>

                <View style={styles.coinInfoBox}>

                    <View style={styles.coinDatabox}>

                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../Resources/Images/bnb.png')} style={styles.coinImage} />
                        </TouchableOpacity>

                        <Text style={styles.CoinPrice}>
                            $ 5420930.73 {'\n'} <Text style={{ fontSize: 16 }}>12.2 %</Text>
                        </Text>

                    </View>
                </View>

                <View style={{ flex: 5 }}>

                    <View style={styles.ChartOptionsView}>
                        <View style={{ flex: 1 }}>
                            <CustomButton title={'Average'} style={{ width: '60%', height: 40, fontsize: 20 }} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <LinearGradient colors={['#FFD5CF', '#FE8270']}
                                style={styles.ChartEditOption}>
                                <TouchableOpacity >
                                    <Icon name='candlestick-chart' size={30} />
                                </TouchableOpacity>
                            </LinearGradient>

                            <LinearGradient colors={['#A7D7F2', '#4BC0FF']}
                                style={styles.ChartEditOption}>
                                <TouchableOpacity >
                                    <Icon name='expand' size={30} />
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>

                    {/* {Chart Component} */}
                    <Chart style={{ height: 280 }} />

                    {/* <Image source={require('../../Resources/Images/candlesticks.png')} style={{ marginLeft: 10 }} /> */}
                </View>

                <View style={{ flex: 4, backgroundColor: '#191C26' }}>
                    <ScrollView>

                        <CustomValueCard Card1Title={'Market Cap'} Card2Title={'Volume (24 H)'} Card1Value={'$ 219043854'} Card2Value={'$ 296315'}/>
                        <CustomValueCard Card1Title={'Market Cap'} Card2Title={'Volume (24 H)'} Card1Value={'$ 219043854'} Card2Value={'$ 296315'}/>
                        <CustomValueCard Card1Title={'Market Cap'} Card2Title={'Volume (24 H)'} Card1Value={'$ 219043854'} Card2Value={'$ 296315'}/>
                        <CustomValueCard Card1Title={'Market Cap'} Card2Title={'Volume (24 H)'} Card1Value={'$ 219043854'} Card2Value={'$ 296315'}/>
                        <CustomValueCard Card1Title={'Market Cap'} Card2Title={'Volume (24 H)'} Card1Value={'$ 219043854'} Card2Value={'$ 296315'}/>
                        
                    </ScrollView>
                </View>


            </View>

            <View style={{ flex: 1,margin:6, backgroundColor: '#191C26', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <CustomButton title={'Sell'} style={{ width: '45%' }} color1='#e37282' color2='#cd1423' />
                <CustomButton title={'Buy'} style={{ width: '45%' }} color1='#828cf1' color2='#3d3fc1' />

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#191C26'
    },

    coinInfoBox: {
        flex: 1.2,
        backgroundColor: '#191C26',
        alignItems: 'center'
    },
    coinImage:{ 
        margin: 30,
         height: 50, 
        width: 50 
    },
    coinDatabox: {
        flex: 1,
        backgroundColor: '#1E2230',
        flexDirection: 'row',
        width: '90%',
        borderRadius: 10,
        margin: 5
    },
    CoinPrice: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontFamily: 'Roboto',
        color: '#ffffff'
    },
    ChartOptionsView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    ChartEditOption: {
        height: 40,
        width: 40,
        borderRadius: 20,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default CoinDataScreen;