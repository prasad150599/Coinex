import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import CustomeScreen from '../../CustomComponents/CustomScreen';
import CustomeNavigationComp from '../../CustomComponents/CustomNavigationComp';
import Chart from '../../Components/ChartComponent';



const Notification = () => {

    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    
    return (
        <View style={{ flex: 1, backgroundColor: '#191C26' }}>
            <View style={{ flex: 1 }}>
                <CustomeScreen ScreenName={'Notification'} style={{ TextMargin: 20 }} SecondIcon={false} ScreenLogo={false} imagePath={'undefined'} IconName={'undefined'} />
            </View>
            {/* <TouchableOpacity style={{ flex: 12, marginTop: 20, borderRadius: 20 }}>
                <CustomeNavigationComp LeftIcon={'bell'} LeftIconColor={'#4DE0D9'} LeftIconSize={30} RightIcon={'caret-right'} RightIconColor={'#ffffff'} RightIconSize={30} title={'Hello Prasad, Welcme to Coinex !'} style={{ fontsize: 20, height: 60 }} changeItem={false} />
            </TouchableOpacity> */}
            <Chart />
        </View>
    );
}

export default Notification;


//   const [visible, setVisible] = React.useState(false);

//   const showDialog = () => setVisible(true);
//   const hideDialog = () => setVisible(false);

//   return (
//     <PaperProvider>
//       <View>
        // <Button onPress={showDialog}>Show Dialog</Button>
        // <Portal>
        //   <Dialog visible={visible} onDismiss={hideDialog}>
        //     <Dialog.Title>Alert</Dialog.Title>
        //     <Dialog.Content>
        //       <Text variant="bodyMedium">This is simple dialog</Text>
        //     </Dialog.Content>
        //     <Dialog.Actions>
        //       <Button onPress={hideDialog}>Logout</Button>
        //          <Button onPress={hideDialog}>Cancle</Button>
        //     </Dialog.Actions>
        //   </Dialog>
        // </Portal>
//       </View>
//     </PaperProvider>