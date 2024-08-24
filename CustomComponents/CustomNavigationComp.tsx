import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export type Props = {
    LeftIcon: string;
    LeftIconColor: string;
    LeftIconSize: number;
    RightIcon: string;
    RightIconColor: string;
    RightIconSize: number;
    title: string;
    changeItem: boolean;
    style?: {
        containerStyle?: StyleProp<ViewStyle>; 
        textStyle?: StyleProp<TextStyle>;
    };
    onp?: () => void;
    toggle?: () => void;
    isEnabled?: boolean;
}

const CustomeNavigationComp = (props: Props) => {

    const [changeItem, setChangeItem] = useState(props?.changeItem);

    // for extract the containerStyle
    const containerStyle = props.style?.containerStyle as ViewStyle | undefined;
    const textStyle = props.style?.textStyle as TextStyle | undefined;

    return (
        <>
            <TouchableOpacity 
                style={[
                    styles.container,
                    containerStyle,
                    {
                        height: containerStyle?.height || 50,
                        width: containerStyle?.width || '90%',
                        backgroundColor: containerStyle?.backgroundColor || '#191C26',
                    }
                ]}
                onPress={props?.onp}
            >
                <View style={styles.iconContainer}>
                    <Icon name={props?.LeftIcon} size={props?.LeftIconSize || 30} color={props?.LeftIconColor || '#ffffff'} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={[  
                        textStyle,
                        {
                            color: textStyle?.color || "#ffffff",
                            fontSize: textStyle?.fontSize || 20,
                        }
                    ]}>
                        {props?.title}
                    </Text>
                </View>

                <TouchableOpacity style={styles.rightIconContainer}>
                    {changeItem ? (
                        <Switch
                            trackColor={{ false: '#767577', true: '#008b91' }}
                            thumbColor={props.isEnabled ? 'cyan' : '#f4f3f4'}
                            onValueChange={props?.toggle}
                            value={props.isEnabled}
                            style={styles.switch}
                        />
                    ) : (
                        <Icon name={props?.RightIcon} size={props?.RightIconSize || 30} color={props?.RightIconColor || '#ffffff'} />
                    )}
                </TouchableOpacity>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#191C26',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    iconContainer: {
        flex: 1.4,
        backgroundColor: '#1E2230',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 8,
        backgroundColor: '#1E2230',
        justifyContent: 'center',
    },
    rightIconContainer: {
        flex: 1.6,
        backgroundColor: '#1E2230',
        justifyContent: 'center',
        alignItems: 'center',
    },
    switch: {
        transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }], // Scale  switch
    },
});

export default CustomeNavigationComp;
