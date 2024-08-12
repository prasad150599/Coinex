import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import CustomInput from '../../CustomComponents/CustomInput';
import CustomeScreen from '../../CustomComponents/CustomScreen';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from '../../CustomComponents/CustomButton';


const Portfolio = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr')
            .then((resp) => resp.json())
            .then((data) => {
                setData(data);
                setLoading(false);
                console.log('Price Updated')
            })
            .catch((error) => {
                console.error('Error:', error);
                setLoading(false);
            });

    }, [])

    const renderItem = ({ item }: any) => (
        <View style={{ height: 90, width: '90%', marginBottom: 10, borderRadius: 10, flexDirection: 'row', backgroundColor: '#1E2230', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={{ uri: item.image }} style={{ height: 50, width: 50 }} />
            </View>
            <View style={{ flex: 1, alignItems: 'flex-start' }}>
                <Text style={{ fontSize: 20, color: '#4DE0D9' }}>{item.name}</Text>
                <Text style={{ fontSize: 16, color: '#ffffff' }}>{item.symbol}</Text>
            </View>
            <View style={{ flex: 2, alignItems: 'flex-end' }}>
                <Text style={{ marginRight: 20, fontSize: 20, color: '#ffffff', fontWeight: 'bold' }}>₹ {item.current_price}</Text>
                <Text style={{ marginTop: 10, marginRight: 20, fontSize: 16, color: '#ffffff' }}>{item.ath_change_percentage} %</Text>
            </View>
        </View>
    )

    const renderEmptyComponent = () => {
        return (
            <View style={styles.emptyContainer}>
                <ActivityIndicator size={50} color="#4DE0D9" />
            </View>
        );
    };

    return (


        <SafeAreaView style={{ flex: 1, backgroundColor: '#191C26' }}>
           
                <View style={{ flex: .6,}}>
                <CustomeScreen ScreenName={"Portfolio"} style={{ TextMargin: 60 }}
                        ScreenLogo={false} imagePath={undefined} 
                        SecondIcon={true} IconName={"dots-three-vertical"} />
                </View>
                    
    
                <View style={{ flex: 2, backgroundColor: '#191C26' }}>

                    <View style={{ width: '90%', height: 160, backgroundColor: '#363D4E', alignSelf: 'center', borderRadius: 20 }}>
                        <View style={{ margin: 10, alignSelf: 'flex-start' }}>
                            <CustomButton title={'BTC/USD'} style={{ width: 110, height: 40, fontsize: 18 }} color1="#C1B2FF" color2="#9B87FF" />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 2, alignItems: 'flex-start' }}>
                                <Text style={{ marginLeft: 20, fontSize: 24, color: '#ffffff', fontWeight: 'bold' }}>$ 75863.00</Text>
                                <Text style={{ marginTop: 14, marginLeft: 20, fontSize: 14, color: '#ffffff' }}>+ $120.97 (+3.46%)</Text>
                            </View>
                            <View style={{ marginRight: 20 }}>
                                <CustomButton title={'Add Balance'} style={{ width: 120, height: 40, fontsize: 17 }} color1="#FF9BD0" color2="#FF73AA" />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 100, width: '100%' }}>
                        <CustomButton title={'Highest Holding'} style={{ width: '46%', height: 50, fontsize: 20 }} />
                        <CustomButton title={'24 Hours'} style={{ width: '48%', height: 50, fontsize: 20 }} color1='#C1B2FF' color2='#9B87FF' />
                    </View>
                </View>

                <View style={{ flex: 3, backgroundColor: '#191C26' }}>
                    <FlatList
                        data={data}
                        keyExtractor={(item: any) => item.id}
                        renderItem={renderItem}
                        ListEmptyComponent={renderEmptyComponent}
                    />
                </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({

    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    emptyText: {
        fontSize: 20,
        color: '#999'
    }


})

export default Portfolio;


