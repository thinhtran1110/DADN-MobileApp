import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { LineChart } from 'react-native-chart-kit';

const ChartTag = (props) => {
    const {data, name, unit} = props;
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const _data = {
        labels: [],
        datasets: [
            {
                data: data,
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            }
        ],
    };
    const chartConfig = {
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "3",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
    };
    const onLayout = (event) => {
        const { width, height } = event.nativeEvent.layout;
        setWidth(width);
        setHeight(height);
    };
    return (
        <View style={{flex: 1, marginBottom: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>{name}</Text>
                <Text style={{color: '#000', fontSize: 18, fontWeight: 'normal'}}>{`${data.at(-1)}${unit}`}</Text>
            </View>
            <View 
                style={{flex: 1}} 
                onLayout={onLayout}
            >
                <LineChart
                    data={_data}
                    width={width}
                    height={height}
                    chartConfig={chartConfig}
                    style={{
                        borderRadius: 16
                    }}
                />
            </View>
        </View>

        
    )
}

export default ChartTag