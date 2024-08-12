import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export type Props = {
    data : object;
    style?: {
        backgroundColor?: "#8DF3ED" | String;
        width?: String | Number;
        height?: String | Number;
        TextColor?: String;
    }
}

const Wallet = [
    {
        'id': '1',
        'total_balance': '79505.56',
        'weekly_profit': '6135.79'
    },
    {
        'id': '2',
        'total_balance': '86593.56',
        'weekly_profit': '4655.79'
    },
    {
        'id': '3',
        'total_balance': '38959.56',
        'weekly_profit': '2265.79'
    }
]

const WalletCard = (props: Props) => {

    const walletData = props?.data;

    const renderItem = ({ item }: any) => (

            <LinearGradient colors={['#8DF3ED', '#34D9D1']} style={{ height: 170, width: 300, margin: '1%', borderRadius: 20, marginHorizontal: 14, }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: 'bold', marginLeft: '10%', marginTop: '8%' }}>Total Wallet Balance</Text>
                    <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: 'bold', marginLeft: '10%', marginTop: '8%' }}>USD </Text>
                </View>
                <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: 'bold', marginLeft: '10%' }}>${item.total_balance}</Text>
                <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: 'bold', marginLeft: '10%', marginTop: 15 }}>Weekly Profit</Text>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: 'bold', marginLeft: '10%' }}>${item.weekly_profit}</Text>
                    <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: 'bold', marginLeft: '38%' }}>15% </Text>
                </View>
            </LinearGradient>
    );

    return (
        <View >
            <FlatList horizontal={true}
                data={Wallet}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

export default WalletCard;
