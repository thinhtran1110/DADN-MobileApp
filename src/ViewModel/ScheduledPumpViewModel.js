import StoreService from '../services/storeService'
import { AdafruitModel } from '../Model/AdafruitModel'
import { LoadingContext } from '../App'
import React from 'react';
import axios from 'axios';
import config from '../config/config';

const ScheduledPumpViewModel = (name, groupKey) => {

    const adafruitModel = AdafruitModel();
    const { setIsLoading } = React.useContext(LoadingContext);
    const [scheduledTimeFrame, setScheduledTimeFrame] = React.useState([]);
    const [mode, setMode] = React.useState([]);

    const onPump = async () => {
        try {
            const [accessToken] = await StoreService.loadTokens();

            const res = await adafruitModel.postOnPump(groupKey, accessToken);
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

            const res = await adafruitModel.postOffPump(groupKey, accessToken);
        }
        catch(err) {
            if(err.response){
                console.log(err.response.data);
                return;
            }
            console.log(err);
        }
    }

    const updateMode = async (m) => {
        try {
            const [accessToken] = await StoreService.loadTokens();
            if (m == "Customize") {
                setMode(true)
            } else {
                setMode(false)
            }
            const res = await axios.patch(
                `${config.serverAddress}/schedule/devices/${groupKey}`,
                {
                    type: name,
                    mode: m
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            )
        }
        catch(err) {
            if (err.response) {
                console.log(err.response.data);
                return;
            }
            console.log(err);
        }
    }

    const getMode = async () => {
        try {
            const [accessToken] = await StoreService.loadTokens();

            const res = await axios.get(
                `${config.serverAddress}/schedule/devices/${groupKey}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            )
            res.data?.map((ele) => {
                if (ele.type == name) {
                    if (ele.mode == "Customize") {
                        setMode(true)
                    } else {
                        setMode(false)
                    }
                }
            })
            return res.data;
        }
        catch(err) {
            if (err.response) {
                console.log(err.response.data);
                return;
            }
            console.log(err);
        }
    }

    const getTimeFrame = async () => {
        try {
            const [accessToken] = await StoreService.loadTokens();

            const res = await axios.get(
                `${config.serverAddress}/schedule/times?deviceType=${name}&key=${groupKey}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            setScheduledTimeFrame(res.data);
            return res.data;
        }
        catch(err) {
            if (err.response) {
                console.log(err.response.data);
                return;
            }
            console.log(err);
        }
    }
    
    const refreshScreen = () => {
        setTimeout(async () =>{
            setIsLoading(true);
            await getMode();
            await getTimeFrame();
            setIsLoading(false);
        },0)
        const intervalCall = setInterval(async () => {
            await getMode();
            await getTimeFrame();
        }, 30000);
        return () => clearInterval(intervalCall);
    }

    const onRefresh = async () => {
        setIsLoading(true);
        await getMode();
        await getTimeFrame();
        setIsLoading(false);
    }

    return {
        onPump,
        offPump,
        mode,
        scheduledTimeFrame,
        updateMode,
        refreshScreen,
        onRefresh
    }
}

export default ScheduledPumpViewModel