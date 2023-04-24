import { View, Text } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import config from '../config/config'
import StoreService from '../services/storeService'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'

const GardenViewModel = () => {
    const [groups, setGroups] = useState(null);

    const getGroups = async () => {
        try{
            const [accessToken] = await StoreService.loadTokens();

            const res = await axios.get(`${config.serverAddress}/adafruit/groups`,{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            return res.data;
        }
        catch(err){
            if(err.response){
                console.log(err.response.data);
                return;
            }
            console.log(err)
        }

    }

    return {
        getGroups,
        groups,
        setGroups,
    }
        

}

export default GardenViewModel;