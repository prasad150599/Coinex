import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export type Props = {
    title: string | number;
    style?: {
        width?: string | number;
        height?: string | number;
        TextColor?: string;
        fontsize?: number;  // Use lowercase `number` type
    };
    onp?: () => void;
    color1?: string;
    color2?: string;
}

const CustomButton = (props: Props) => {
    const { color1 = '#8DF3ED', color2 = '#34D9D1', title = 'Click Here' } = props;
    return (
        <LinearGradient
            colors={[color1, color2]}
            style={{
                alignSelf: "center",
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
                borderRadius: 30,
                height: props.style?.height || 50,
                width: props.style?.width || '80%'
            }}
        >
            <TouchableOpacity
                style={{ height: 50, width: '90%', justifyContent: 'center', alignItems: 'center' }}
                onPress={props?.onp}
            >
                <Text
                    style={{
                        color: props?.style?.TextColor || "#ffffff",
                        fontSize: props?.style?.fontsize || 20,
                        fontWeight: 'bold'
                    }}>
                    {title}
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export default CustomButton;
