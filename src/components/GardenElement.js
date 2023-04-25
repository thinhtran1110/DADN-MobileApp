import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import color  from '../config/common/color'
import image from '../assets/image'
import { useNavigation } from '@react-navigation/native'
const GardenElement = (props) => {
    const { temperature, soilMoisture, name, groupKey } = props;
    const navigation = useNavigation();
    return (
        <View style={{
            backgroundColor: color.gardenElement,
            borderWidth: 1,
            borderRadius: 35,
            flexDirection: 'row',
            margin: 10
        }}>
            <View style={{
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 35,
            }}>
                <Text style={{color: '#000', fontSize: 24, fontWeight: '700', fontFamily: 'Inria Serif', marginBottom: 5}}>{name}</Text>
                <Image source={image.tomato}></Image>
            </View>
            <View style={{
                alignItems: 'center',
                flex: 1,
                paddingTop: 10
                
            }}>
                <Text style={{color: '#222222', fontFamily: 'Inria Serif', fontWeight: '400', fontSize: 16}}>Temperature:  {temperature}°C</Text>
                <Text style={{color: '#222222', fontFamily: 'Inria Serif', fontWeight: '400', fontSize: 16}}>Soil moisture:  {soilMoisture}%</Text>


                <TouchableOpacity 
                    onPress={() => {
                        navigation.navigate('EnvironmentCondition', { groupKey, name });
                    }}
                >
                    <View style={{
                        backgroundColor: color.tagButton,
                        borderRadius: 100,
                        borderWidth: 1,
                        paddingVertical: 2,
                        paddingHorizontal: 25,
                        margin: 10
                    }}>

                        <Text style={{color: '#000', fontFamily: 'Inria Serif', fontWeight: 900, fontSize: 20}}>Overview</Text>
                    </View>
                </TouchableOpacity>
                
            </View>

        </View>
    )
}

export default GardenElement