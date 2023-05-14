import React, { useContext, useState } from 'react';
import StoreService from '../services/storeService';
import { LoadingContext } from '../App';
import { AdafruitModel } from '../Model/AdafruitModel';
import { SettingModel } from '../Model/SettingModel';

const EnvironmentConditionViewModel = (groupKey) => {
    const [isActiveNow, setIsActiveNow] = useState(true);
    const [temp, setTemp] = useState([]);
    const [airHumi, setAirHumi] = useState([]);
    const [soilMtr, setSoilMtr] = useState([]);
    const [elementConditionList, setElementConditionList] = useState([]);
    const {
        setIsLoading,
    } = useContext(LoadingContext);
    const adafruitModel = AdafruitModel();
    const settingModel = SettingModel();

    const getTemp = async () => {
        try{
            const [accessToken] = await StoreService.loadTokens();

            const res = await adafruitModel.getTemp(groupKey, accessToken);

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

    const getAirHumi = async () => {
        try{
            const [accessToken] = await StoreService.loadTokens();

            const res = await adafruitModel.getAirHumi(groupKey, accessToken);

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

    const getSoidMtr = async () => {
        try{
            const [accessToken] = await StoreService.loadTokens();

            const res = await adafruitModel.getSoidMtr(groupKey, accessToken);
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

    const getSetting = async () => {
        try {
            const [accessToken] = await StoreService.loadTokens();

            const res = await settingModel.getSetting(groupKey, accessToken)
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

    const loadData = async () =>{
        const slice = (data) => {
            let retData = data;
            return retData.slice(0, Math.min(12, data.length) -1).reverse()
        }
        const tempPromise = getTemp();
        const airHumiPromise = getAirHumi();
        const soilMtrPromise = getSoidMtr();
        const [Temp, AirHumi, SoilMtr] =  await Promise.all([tempPromise, airHumiPromise, soilMtrPromise]);
        getSetting();
        setTemp(slice(Temp));
        setAirHumi(slice(AirHumi));
        setSoilMtr(slice(SoilMtr));
        return [Temp, AirHumi, SoilMtr];
    }

    const refreshScreen = () => {
        setTimeout(async () =>{
            setIsLoading(prev => true);
            await loadData();
            setIsLoading(prev => false);
        },0)
        const intervalCall = setInterval(async () => {
            await loadData();
        }, 30000);
        return () => clearInterval(intervalCall);
    }

    const onRefresh = async () => {
        setIsLoading(true);
        await loadData();
        setIsLoading(false);
    }

    return {
        isActiveNow,
        setIsActiveNow,
        temp,
        airHumi,
        soilMtr,
        elementConditionList,
        refreshScreen,
        onRefresh,
    }


}

export default EnvironmentConditionViewModel