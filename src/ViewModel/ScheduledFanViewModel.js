import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import StoreService from '../services/storeService';
import axios from 'axios';
import config from '../config/config';

const ScheduledFanViewModel = (groupKey) => {

    const [speed, setSpeed] = React.useState(0)

    const getSpeed = async (s) => {
        try {
            s = parseInt(s);
            const [accessToken] = await StoreService.loadTokens();
            setSpeed(s);
            const res = await axios.post(`${config.serverAddress}/adafruit/${groupKey}/fan_speed`,
            {
                value: s
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            console.log(res.data);
        }
        catch(err) {
            if(err.response){
                console.log(err.response.data);
                return;
            }
            console.log(err);
        }
    }
    
    return {
        speed,
        setSpeed,
        getSpeed,
    }
}

export default ScheduledFanViewModel