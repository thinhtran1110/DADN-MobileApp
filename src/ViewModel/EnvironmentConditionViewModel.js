import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import StoreService from '../services/storeService';
import axios from 'axios';
import { LoadingContext } from '../App';
import config from '../config/config';
const EnvironmentConditionViewModel = (groupKey) => {
    const [isActiveNow, setIsActiveNow] = useState(true);
    const [temp, setTemp] = useState([]);
    const [airHumi, setAirHumi] = useState([]);
    const [soilMtr, setSoilMtr] = useState([]);
    const [elementConditionList, setElementConditionList] = useState([]);
    const {
        setIsLoading,
    } = useContext(LoadingContext);
    const getTemp = async () => {
        try{
            const [accessToken] = await StoreService.loadTokens();

            const res = await axios.get(`${config.serverAddress}/adafruit/data/${groupKey}.temp-sensor`,{
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

    const getAirHumi = async () => {
        try{
            const [accessToken] = await StoreService.loadTokens();

            const res = await axios.get(`${config.serverAddress}/adafruit/data/${groupKey}.humi-sensor`,{
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

    const getSoidMtr = async () => {
        try{
            const [accessToken] = await StoreService.loadTokens();

            const res = await axios.get(`${config.serverAddress}/adafruit/data/${groupKey}.soil-sensor`,{
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

    const getSetting = async () => {
        try {
            const [accessToken] = await StoreService.loadTokens();

            const res = await axios.get(`${config.serverAddress}/setting/conditions/${groupKey}`,
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