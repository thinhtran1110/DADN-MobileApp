import React from 'react'
import StoreService from '../services/storeService';
import { AdafruitModel } from '../Model/AdafruitModel';

const ScheduledFanViewModel = (groupKey) => {

    const [speed, setSpeed] = React.useState(0);
    const adafruitModel = AdafruitModel();

    const postSpeed = async (val) => {
        try {
            const [accessToken] = await StoreService.loadTokens();

            setSpeed(val)
            
            const res = await adafruitModel.postSpeed(groupKey, accessToken, val)
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