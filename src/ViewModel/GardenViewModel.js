import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import config from '../config/config'
import StoreService from '../services/storeService'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'
import { LoadingContext } from '../App'

const GardenViewModel = () => {
    const [groups, setGroups] = useState(null);
    const {setIsLoading} = useContext(LoadingContext);
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

    const refreshScreen = () => {
        setTimeout(async () =>{
            const elementsList = await getGroups();
            setGroups(elementsList);
        },0)
        const intervalCall = setInterval(async () => {
            setIsLoading(true);
            const elementsList = await getGroups();
            setGroups(elementsList);
            setIsLoading(false);
        }, 30000);
        return () => clearInterval(intervalCall);
    }

    return {
        groups,
        refreshScreen,
    }
        

}

export default GardenViewModel;