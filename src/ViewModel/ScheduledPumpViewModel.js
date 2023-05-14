import {View, Text} from 'react-native'
import React from 'react'
import StoreService from '../services/storeService'
import axios from 'axios'
import config from '../config/config'

const ScheduledPumpViewModel = (groupKey) => {

    const onPump = async () => {
        try {
            const [accessToken] = await StoreService.loadTokens();

            const res = await axios.post(`${config.serverAddress}/adafruit/${groupKey}/pump_on`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        }
        catch(err) {
            if(err.response){
                console.log(err.response.data);
                return;
            }
            console.log(err);
        }
    }

    const offPump = async () => {
        try {
            const [accessToken] = await StoreService.loadTokens();

            const res = await axios.post(`${config.serverAddress}/adafruit/${groupKey}/pump_off`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
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
        onPump,
        offPump
    }
}

export default ScheduledPumpViewModel