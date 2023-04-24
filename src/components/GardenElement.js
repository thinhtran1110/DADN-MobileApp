import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import color  from '../config/common/color'
import image from '../assets/image'
const GardenElement = (props) => {
    const { temperature, soilMoisture, name } = props;
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


                <TouchableOpacity>
                    <View style={{
                        backgroundColor: '#D9D9D9',
                        borderRadius: 100,
                        borderWidth: 1,
                        opacity: 0.6,
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