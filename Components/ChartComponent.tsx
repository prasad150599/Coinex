import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, processColor
} from 'react-native';

import { LineChart } from 'react-native-charts-wrapper';


export type Props = {
    style?: {
        width?: String | Number;
        height?: String | Number;
    }
}

const Chart = (props: Props) => {

    return (
        <View style={styles.container}>
            <View style={styles.chartContainer}>
                <LineChart style={{ height: 280 }}
                    data={
                        {
                            dataSets: [
                                {
                                    label: "Coin", values: [{ y: 1 }, { y: 100 }, { y: 81 }, { y: 27 }, { y: 82 }],
                                    config: {
                                        lineWidth: 3, // Increase this value to make the line thicker
                                        color: processColor('#ffffff'), // Optional: set the color of the line,
                                        valueTextSize: 14,
                                        valueTextColor: processColor('#ffffff'),
                                        label: "demo", // The label for the dataset
                                        labelTextColor: processColor('#ffffff'), // Set the color of the label
                                        labelTextSize: 16, // Set the size of the label text
                                    }
                                },
                            ]
                        }
                    }
                    xAxis={{
                        position: 'BOTTOM', // Set x-axis labels position to the bottom
                        textSize: 16, // Increase font size for x-axis labels
                        textColor: processColor('#ffffff'),
                        drawGridLines: false,
                        axisLineWidth: 2,
                    }}
                    yAxis={{
                        left: {
                            textSize: 14, // Increase font size for y-axis labels on the left
                            textColor: processColor('#ffffff'),
                            drawGridLines: false, // Disable grid lines on the left y-axis
                            axisLineWidth: 2,
                        },
                        right: {
                            enabled: false, // Disable y-axis labels on the right
                        },
                    }}
                />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191C26',

    },
    chartContainer: {
        flex: 1,
        borderWidth: 2, // Set the border width
        borderColor: 'black', // Set the border color

    },
    chart: {
        flex: 1, shadowColor: 'red',
        top: 10,
    }
});
export default Chart;




// {
//     Valid_keys: [
//         "display",
//         "width",
//         "height",
//         "start",
//         "end",
//         "top",
//         "left",
//         "right",
//         "bottom",
//         "minWidth",
//         "maxWidth",
//         "minHeight",
//         "maxHeight",
//         "margin",
//         "marginVertical",
//         "marginHorizontal",
//         "marginTop",
//         "marginBottom",
//         "marginLeft",
//         "marginRight",
//         "marginStart",
//         "marginEnd",
//         "padding",
//         "paddingVertical",
//         "paddingHorizontal",
//         "paddingTop",
//         "paddingBottom",
//         "paddingLeft",
//         "paddingRight",
//         "paddingStart",
//         "paddingEnd",
//         "borderWidth",
//         "borderTopWidth",
//         "borderStartWidth",
//         "borderEndWidth",
//         "borderRightWidth",
//         "borderBottomWidth",
//         "borderLeftWidth",
//         "position",
//         "flexDirection",
//         "flexWrap",
//         "justifyContent",
//         "alignItems",
//         "alignSelf",
//         "alignContent",
//         "overflow",
//         "flex",
//         "flexGrow",
//         "flexShrink",
//         "flexBasis",
//         "aspectRatio",
//         "zIndex",
//         "direction",
//         "shadowColor",
//         "shadowOffset",
//         "shadowOpacity",
//         "shadowRadius",
//         "transform",
//         "transformMatrix",
//         "decomposedMatrix",
//         "scaleX",
//         "scaleY",
//         "rotation",
//         "translateX",
//         "translateY",
//         "backfaceVisibility",
//         "backgroundColor",
//         "borderColor",
//         "borderTopColor",
//         "borderRightColor",
//         "borderBottomColor",
//         "borderLeftColor",
//         "borderStartColor",
//         "borderEndColor",
//         "borderRadius",
//         "borderTopLeftRadius",
//         "borderTopRightRadius",
//         "borderTopStartRadius",
//         "borderTopEndRadius",
//         "borderBottomLeftRadius",
//         "borderBottomRightRadius",
//         "borderBottomStartRadius",
//         "borderBottomEndRadius",
//         "borderStyle",
//         "opacity",
//         "elevation"
//     ]
// }