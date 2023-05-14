import React, { useState, useContext } from 'react';
import StoreService from '../services/storeService';
import { LoadingContext } from '../App';
import { SettingModel } from '../Model/SettingModel';

const DetailSettingViewModel = (groupKey) => {

    const [elementConditionList, setElementConditionList] = useState([]);
    const {
        setIsLoading,
    } = useContext(LoadingContext);
    const settingModel = SettingModel();

    const getSetting = async () => {
        try {
            const [accessToken] = await StoreService.loadTokens();

            const res = await settingModel.getSetting(groupKey, accessToken);

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

            const res = await settingModel.patchSetting(groupKey, accessToken, typ, op, valueFrom, valueTo)
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