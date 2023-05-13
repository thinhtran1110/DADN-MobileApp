import React, { useState, useContext } from 'react'
import StoreService from '../services/storeService'
import axios from 'axios'
import config from '../config/config'
import { LoadingContext } from '../App';

const DetailSettingViewModel = (key) => {

    const [elementConditionList, setElementConditionList] = useState([])

    const {
        setIsLoading,
    } = useContext(LoadingContext);

    const getSetting = async () => {
        try {
            const [accessToken] = await StoreService.loadTokens();

            const res = await axios.get(`${config.serverAddress}/setting/conditions/${key}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            setElementConditionList(res.data);
            return res.data;
        }
        catch(err) {
            if(err.response){
                console.log(err.response.data);
                return;
            }
            console.log(err);
        }
    }

    const updateSetting = async (typ, op, valueFrom, valueTo) => {
        try {
            const [accessToken] = await StoreService.loadTokens();

            const res = await axios.patch(`${config.serverAddress}/setting/conditions/${key}`,
            {
                type: typ,
                option: op,
                from: valueFrom,
                to: valueTo
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
        }
        catch(err) {
            if(err.response){
                console.log(err.response.data);
                return;
            }
            console.log(err);
        }
    }

    const refreshScreen = () => {
        setTimeout(async () =>{
            setIsLoading(prev => true);
            await getSetting();
            setIsLoading(prev => false);
        },0)
        const intervalCall = setInterval(async () => {
            await getSetting();
        }, 30000);
        return () => clearInterval(intervalCall);
    }

    const onRefresh = async () => {
        setIsLoading(true);
        await getSetting();
        setIsLoading(false);
    }

    return {
        elementConditionList,
        updateSetting,
        refreshScreen,
        onRefresh,
    }
}

export default DetailSettingViewModel