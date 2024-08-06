import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList, ActivityIndicator, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import CustomCardView from '../../CustomComponents/CustomeCardView';
import CustomeScreen from '../../CustomComponents/CustomScreen';
import CustomInput from '../../CustomComponents/CustomInput';




const MarketTrends = () => {

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
                <Text style={{ fontSize: 20, color: '#4DE0D9' }}>{item?.name}</Text>
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <SafeAreaView style={{ flex: 1, backgroundColor: '#191C26' }}>


                <View style={{ flex: 1 }}>
                    <CustomeScreen ScreenName={"Market Trends"} style={{ TextMargin: 20 }}
                        imagePath={undefined} SecondIcon={false} ScreenLogo={false} />
                    <CustomInput iconName={'search'} placeholderText={'Search'} secureText={false}
                        typing={(text: any) => { text }} keyboardType={"default"} IconColor={"#4DE0D9"} />
                </View>

                <View style={{ flex: 4 }}>

                    <FlatList
                        data={data}
                        keyExtractor={(item: any) => item.id}
                        renderItem={renderItem}
                        ListEmptyComponent={renderEmptyComponent}
                    // keyExtractor={(item, index) => index.toString()}
                    />
                </View>


            </SafeAreaView>
        </TouchableWithoutFeedback>

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
export default MarketTrends;