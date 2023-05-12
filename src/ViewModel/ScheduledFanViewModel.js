import React from 'react'
import StoreService from '../services/storeService';
import axios from 'axios';
import config from '../config/config';

const ScheduledFanViewModel = (groupKey) => {

    const [speed, setSpeed] = React.useState(0)

    const postSpeed = async (val) => {
        try {
            const [accessToken] = await StoreService.loadTokens();

            setSpeed(val)
            
            const res = await axios.post(`${config.serverAddress}/adafruit/${groupKey}/fan_speed`,
            {
                value: val
            },
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
        speed,
        setSpeed,
        postSpeed,
    }
}

export default ScheduledFanViewModel