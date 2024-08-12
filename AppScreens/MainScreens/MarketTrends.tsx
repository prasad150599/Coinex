import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ActivityIndicator, Keyboard, TouchableWithoutFeedback, Modal, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider, Button } from 'react-native-paper';
import CustomCardView from '../../Components/WalletCard';
import CustomeScreen from '../../CustomComponents/CustomScreen';
import CustomInput from '../../CustomComponents/CustomInput';
import CoinDataScreen from './CoinDataScreen';

const MarketTrends = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [coinDataModel, setCoinDataModel] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState({});
    
    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                console.error('Network request failed:', error);
                setLoading(false);
            }
        };
    
        fetchMarketData();
    }, []);

    const openCoinDataModal = useCallback((item:any) => {
        // console.log(item);
        setSelectedCoin(item);
        setCoinDataModel(true);
    }, []);

    const renderItem = useCallback(({ item }:any) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => { openCoinDataModal(item) }}
        >
            <View style={styles.itemImageContainer}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
            </View>
            <View style={styles.itemTextContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemSymbol}>{item.symbol}</Text>
            </View>
            <View style={styles.itemPriceContainer}>
                <Text style={styles.itemPrice}>₹ {item.current_price}</Text>
                <Text style={styles.itemPercentage}>{item.ath_change_percentage} %</Text>
            </View>
        </TouchableOpacity>
    ), [openCoinDataModal]);

    const renderEmptyComponent = () => (
        <View style={styles.emptyContainer}>
            <ActivityIndicator size={50} color="#4DE0D9" />
        </View>
    );

    // const searchEmployee = (str: any) => {

    //     let data = employees.filter((item: any) => {
    //         return item.name.includes(str) || item.department.includes(str)
    //     })
    //     setEmployees(data)
    // }

    return (
        <PaperProvider>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.header}>
                        <CustomeScreen
                            ScreenName="Market Trends"
                            style={{ TextMargin: 20 }}
                            imagePath={undefined}
                            SecondIcon={false}
                            ScreenLogo={false}
                        />
                        <CustomInput
                            iconName="search"
                            placeholderText="Search"
                            secureText={false}
                            typing={(text:any) => { text }}
                            keyboardType="default"
                            IconColor="#4DE0D9"
                        />
                    </View>
                    <View style={styles.listContainer}>
                        
                        <FlatList
                            data={data}
                            keyExtractor={(item:any) => item.id}
                            renderItem={renderItem}
                            ListEmptyComponent={renderEmptyComponent}
                            showsVerticalScrollIndicator={false}
                        />
                        
                       { 
                        <CoinDataScreen
                            visible={coinDataModel}
                            data={selectedCoin}
                            handleClose={setCoinDataModel}
                        /> 
                        }
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191C26',
    },
    header: {
        flex: 1,
    },
    listContainer: {
        flex: 4,
    },
    itemContainer: {
        height: 90,
        width: '90%',
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#1E2230',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImageContainer: {
        flex: 1,
        alignItems: 'center',
    },
    itemImage: {
        height: 50,
        width: 50,
    },
    itemTextContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    itemName: {
        fontSize: 20,
        color: '#4DE0D9',
    },
    itemSymbol: {
        fontSize: 16,
        color: '#ffffff',
    },
    itemPriceContainer: {
        flex: 2,
        alignItems: 'flex-end',
    },
    itemPrice: {
        marginRight: 20,
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    itemPercentage: {
        marginTop: 10,
        marginRight: 20,
        fontSize: 16,
        color: '#ffffff',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    emptyText: {
        fontSize: 20,
        color: '#999',
    },
});

export default MarketTrends;
