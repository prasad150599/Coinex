import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList, Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomeScreen from '../../CustomComponents/CustomScreen';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../CustomComponents/CustomButton';
import Chart from '../../CustomComponents/ChartComponent';
import CustomValueCard from '../../CustomComponents/CustomeValueCard';

const CoinDataScreen = (props: any) => {

    const coin = props?.data
    const [text, setText] = useState('');
    const [modalVisible, setModalVisible] = useState(props?.visible)
    const [favourite,setFavourite] = useState(true)

    useEffect(() => {
        setModalVisible(props?.visible)
    }, [props?.visible])

    return (

        <SafeAreaView style={styles.main}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props?.visible}>
                <View style={{ flex: 1, backgroundColor: '#191C26' }}>

                    <View style={styles.header}>
                        <TouchableOpacity style={[styles.itemCenter, { flex: 1 }]}
                            onPress={() => { setModalVisible(false); props?.handleClose(false) }}>
                            <Icon name='chevron-left' size={60} />
                        </TouchableOpacity>

                        <View style={[styles.itemCenter, { flex: 4 }]}>
                            <Text style={{ fontSize: 30, fontWeight: 600 }}> {coin.name}</Text>
                        </View>
                        <TouchableOpacity style={[styles.itemCenter, { flex: 1 }]} onPress={()=>{setFavourite(!favourite)}}>
                            {favourite ? <Icon name='favorite' size={40} color={'#4DE0D9'} /> :
                            <Icon name='favorite-border' size={40}  />}
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 10 }}>
                        <View style={styles.coinInfoBox}>
                            <View style={styles.coinDatabox}>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={{ uri: props?.data.image }} style={styles.coinImage} />
                                </TouchableOpacity>
                                <Text style={styles.CoinPrice}>
                                ₹ {coin.current_price}{'\n'} <Text style={{ fontSize: 16 }}>{coin?.price_change_percentage_24h} %</Text>
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
                            <Chart style={{ height: 200 }} />
                        </View>
                        <View style={{ flex: 4, backgroundColor: '#191C26' }}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                            <CustomValueCard Card1Title={'Market Cap Rank'} Card2Title={'Market Cap'} Card1Value={`${coin?.market_cap_rank}`} Card2Value={`₹ ${coin?.market_cap}`} />
                            <CustomValueCard Card1Title={'High (24 h)'} Card2Title={'Low (24 h)'} Card1Value={`₹ ${coin?.high_24h}`} Card2Value={`₹ ${coin?.low_24h}`} />
                            <CustomValueCard Card1Title={'Total Supply'} Card2Title={'Circulating Supply'} Card1Value={`${coin?.total_supply}`} Card2Value={`${coin?.circulating_supply}`} />
                            </ScrollView>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#191C26', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <CustomButton title={'Sell'} style={{ width: '45%' }} color1='#C1B2FF' color2='#9B87FF' />
                        <CustomButton title={'Buy'} style={{ width: '45%' }} />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#191C26'
    },
    header: {
        flex: 1,
        height: 50,
        backgroundColor: '#191C26',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    itemCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    coinInfoBox: {
        flex: 1.2,
        backgroundColor: '#191C26',
        alignItems: 'center'
    },
    coinImage: {
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