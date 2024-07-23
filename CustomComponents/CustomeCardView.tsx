import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export type Props = {
    ChangeItem: Boolean;
    style?: {
        backgroundColor?: "red" | "green" | "blue" | String;
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

const CustomCardView = (props: Props) => {

    const [ChangeItem, setChangeItem] = useState(props.ChangeItem)



    const renderItem = ({ item }: any) => (
        (ChangeItem ?
            <View  style={{backgroundColor:'#1E2230' ,width: 210, height: 130, margin: '1%', borderRadius: 20, marginHorizontal: 14, }}>
                <View style={{ margin:20  }}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:16,fontWeight:'bold',color:'#ffffff'}}> Logo </Text>
                    <Text style={{fontSize:16,fontWeight:'bold',color:'#ffffff'}}> Coin Name</Text>
                    <Text style={{padding:2,fontSize:16,fontWeight:'bold',marginLeft:10,backgroundColor:'#34D9D1',borderRadius:10,color:'#ffffff'}}> 12% </Text>
                    </View>
                    <Text style={{fontSize:16,fontWeight:'bold',color:'#ffffff'}}>$Balance</Text>
                </View>
            </View>
            :
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
        )
    );

    return (

        <View >
            <FlatList horizontal={true}
                data={Wallet}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default CustomCardView;



// {
//     <ScrollView horizontal={true}>
//             <LinearGradient colors={['#FAC47F', '#FAC47F']} style={{ height: 170, width: 300, margin: '2%', borderRadius: 20 }}>
//                 <View style={{ flexDirection: 'row' }}>
//                     <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: 'bold', marginLeft: '10%', marginTop: '8%' }}>Total Wallet Balance</Text>
//                     <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: 'bold', marginLeft: '10%', marginTop: '8%' }}>USD </Text>
//                 </View>
//                 <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: 'bold', marginLeft: '10%' }}>$75095.40</Text>
//                 <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: 'bold', marginLeft: '10%', marginTop: 15 }}>Weekly Profit</Text>
//                 <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: 'bold', marginLeft: '10%' }}>$1555.50</Text>
//             </LinearGradient>
//             <LinearGradient colors={['#8DF3ED', '#34D9D1']} style={{ height: 170, width: 300, margin: '2%', borderRadius: 20 }}>
//                 <View style={{ flexDirection: 'row' }}>
//                     <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: 'bold', marginLeft: '10%', marginTop: '8%' }}>Total Wallet Balance</Text>
//                     <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: 'bold', marginLeft: '10%', marginTop: '8%' }}>USD </Text>
//                 </View>
//                 <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: 'bold', marginLeft: '10%' }}>$75095.40</Text>
//                 <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: 'bold', marginLeft: '10%', marginTop: 15 }}>Weekly Profit</Text>
//                 <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: 'bold', marginLeft: '10%' }}>$1555.50</Text>
//             </LinearGradient>

//     const getBackgroundColor = (item) => {
//   switch (item.type) {
//     case 'type1':
//       return '#F8A946';
//     case 'type2':
//       return '#34D9D1';
//     case 'type3':
//       return 'lightcoral';
//     default:
//       return 'lightgrey';
//   }
// };
// }