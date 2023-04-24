import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import GardenElement from './GardenElement';

const GardenElementsList = (props) => {
    const { elementsList } = props;
    return (
        <ScrollView style={{flexDirection: 'column'}} showsVerticalScrollIndicator={false}>
            {   
                elementsList?.map((ele) => {
                    const feeds = ele.feeds;
                    let temperature, soilMoisture = null;
                    feeds.forEach(feed => {
                        if(feed.name == 'Temp-Sensor'){
                            temperature = feed.last_value;
                        }
                        if(feed.name == 'Soil-Sensor'){
                            soilMoisture = feed.last_value;
                        }
                    });
                    
                    return <GardenElement key={ele.key} temperature={temperature} soilMoisture={soilMoisture} name={ele.name}></GardenElement>
                })
                
            }
        </ScrollView>
    )
}

export default GardenElementsList