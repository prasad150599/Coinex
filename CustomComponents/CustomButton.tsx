import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextStyle, ViewStyle, StyleProp } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export type Props = {
    title: string | number;
    style?: {
        containerStyle?: StyleProp<ViewStyle>; // Style for the button container
        textStyle?: StyleProp<TextStyle>; // Style for the text
    };
    onp?: () => void;
    color1?: string;
    color2?: string;
}

const CustomButton= (props:Props) => {
    const { color1 = '#8DF3ED', color2 = '#34D9D1', title = 'Click Here' } = props;

    return (
        <LinearGradient
            colors={[color1, color2]}
            style={[
                styles.buttonContainer,
                props.style?.containerStyle,
                {
                    height: (props.style?.containerStyle as ViewStyle)?.height || 50,
                    width: (props.style?.containerStyle as ViewStyle)?.width || '80%',
                }
            ]}
        >
            <TouchableOpacity
                style={styles.touchable}
                onPress={props?.onp}
            >
                <Text
                    style={[
                        styles.buttonText,
                        props.style?.textStyle,
                        {
                            color: (props.style?.textStyle as TextStyle)?.color || "#ffffff",
                            fontSize: (props.style?.textStyle as TextStyle)?.fontSize || 20,
                        }
                    ]}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 30,
    },
    touchable: {
        height: '100%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
    }
});

export default CustomButton;

