import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomeScreen from '../../CustomComponents/CustomScreen';
import CustomButton from '../../CustomComponents/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Screen } from 'react-native-screens';


const countries = [
    { label: 'USA', value: 'usa' },
    { label: 'Canada', value: 'canada' },
    { label: 'India', value: 'india' },
    { label: 'Australia', value: 'australia' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Germany', value: 'germany' },
    { label: 'France', value: 'france' },
    { label: 'Japan', value: 'japan' },
    { label: 'China', value: 'china' },
    { label: 'Brazil', value: 'brazil' },
    { label: 'South Africa', value: 'south_africa' },
    { label: 'Italy', value: 'italy' },
    { label: 'Russia', value: 'russia' }
    // Add more countries as needed
];

const cities = {
    usa: [
        { label: 'New York', value: 'new_york' },
        { label: 'Los Angeles', value: 'los_angeles' },
        // Add more cities as needed
    ],
    canada: [
        { label: 'Toronto', value: 'toronto' },
        { label: 'Vancouver', value: 'vancouver' },
        // Add more cities as needed
    ],
    india: [
        { label: 'Mumbai', value: 'mumbai' },
        { label: 'Delhi', value: 'delhi' },
        { label: 'Bangalore', value: 'bangalore' },
        { label: 'Hyderabad', value: 'hyderabad' },
        { label: 'Ahmedabad', value: 'ahmedabad' },
        { label: 'Chennai', value: 'chennai' },
        { label: 'Kolkata', value: 'kolkata' },
        { label: 'Surat', value: 'surat' },
        { label: 'Pune', value: 'pune' },
        { label: 'Jaipur', value: 'jaipur' }
    ],

    // Add more country-city mappings as needed
};


const SelectLocation = () => {

    const navigation = useNavigation();
    
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [openCountry, setOpenCountry] = useState(false);
    const [openCity, setOpenCity] = useState(false);
    const [countryItems, setCountryItems] = useState(countries);
    const [cityItems, setCityItems] = useState([]);

    const handleCountryChange = useCallback((callback) => {
        setSelectedCountry(callback());
        setSelectedCity(null); // Reset city selection when country changes
        setCityItems(cities[callback()] || []); // Update cities based on selected country
    }, []);

    return (

        <View style={styles.container}>
            <View style={{ flex: 1,marginTop:10}}>
                <CustomeScreen ScreenName={'Select Location'} imagePath={require('../../Resources/Images/LocationLogo.png')} SecondIcon={false} ScreenLogo={true} />
            </View>

            <View style={{ flex: 1,justifyContent:'center' }}>

                <DropDownPicker
                    open={openCountry}
                    value={selectedCountry}
                    items={countryItems}
                    setOpen={setOpenCountry}
                    setValue={handleCountryChange}
                    setItems={setCountryItems}
                    placeholder="Select a country"
                    style={styles.dropdown}
                    listItemLabelStyle={styles.listItemLabelStyle}
                    dropDownContainerStyle={styles.dropdownContainer}
                    textStyle={{ fontSize: 20,textAlign:'center' }}
                />

                
                    

                        <DropDownPicker
                            open={openCity}
                            value={selectedCity}
                            items={cityItems}
                            setOpen={setOpenCity}
                            setValue={setSelectedCity}
                            setItems={setCityItems}
                            placeholder="Select a city"
                            style={styles.dropdown}
                            listItemLabelStyle={styles.listItemLabelStyle}
                            dropDownContainerStyle={styles.dropdownContainer}
                            textStyle={{ fontSize: 20,textAlign:'center' }}
                            zIndex={1000}

                        />
                 

                <CustomButton title={'Continue'} style={{width:'100%',height:62}} onp={()=>{navigation.navigate('HomeStack',{Screen:'Home'})}}/>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#191C26'
    },
    label: {
        fontSize: 20,
        marginVertical: 10,
        color: '#ffffff'
    },
    dropdown: {
        marginBottom: 20,
        fontSize: 20,
        backgroundColor: '#ffffff',
        height: 60,
        borderRadius: 30

    },
    dropdownContainer: {
        marginTop: 2,
        fontSize: 20,
        borderRadius: 20
    },
    listItemLabelStyle: {
        color: '#000000', // Individual item text color
        fontSize: 20,
        textAlign:'center'
    },
    
});

export default SelectLocation;