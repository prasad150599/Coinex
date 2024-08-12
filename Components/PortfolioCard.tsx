import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export type Props = {
    data : Object; 
    style?: {
        backgroundColor?: "#1E2230" | "#8DF3ED"  | string;
        width?: string | number;
        height?: string | number;
        TextColor?: string;
    }
}

const wallet = [
    {
        'id': '1',
        'name':'Bitcoin',
        'total_balance': '795505.56',
        'profit_percentage': '15.79'
    },
    {
        'id': '2',
        'name':'Ethereum',
        'total_balance': '186593.56',
        'profit_percentage': '36.79'
    },
    {
        'id': '3',
        'name':'Tether',
        'total_balance': '38959.56',
        'profit_percentage': '22.79'
    }
]

const PortfolioCard = (props: Props) => {

    const portfolio = useState(props.data)

    const renderItem = ({ item }: any) => (
            <TouchableOpacity  style={{backgroundColor:'#1E2230' ,width: 210, height: 130, margin: '1%', borderRadius: 20, marginHorizontal: 14, }}>
                <View style={{ margin:20  }}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    {/* <Text style={{fontSize:16,fontWeight:'bold',color:'#ffffff'}}>Logo</Text> */}
                    <Text style={{fontSize:16,fontWeight:'bold',color:'#ffffff'}}>{item?.name}</Text>
                    <Text style={{padding:2,fontSize:14,fontWeight:'bold',marginRight:10,backgroundColor:'#34D9D1',borderRadius:10,color:'#ffffff'}}> {item?.profit_percentage} % </Text>
                    </View>
                    <Text style={{fontSize:16,fontWeight:'bold',color:'#ffffff',marginTop:10}}>$ {item?.total_balance}</Text>
                    <Text style={{fontSize:14,color:'#ffffff',marginTop:10}}>symbol</Text>
                </View>
            </TouchableOpacity>
    );

    return (

        <View >
            <FlatList horizontal={true}
                data={wallet}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

export default PortfolioCard;
