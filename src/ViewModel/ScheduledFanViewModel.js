import React from 'react'
import StoreService from '../services/storeService'
import axios from 'axios'
import config from '../config/config'
import { AdafruitModel } from '../Model/AdafruitModel'
import { LoadingContext } from '../App'

const ScheduledFanViewModel = (name, groupKey) => {

    const [speed, setSpeed] = React.useState(0);
    const adafruitModel = AdafruitModel();
    const { setIsLoading } = React.useContext(LoadingContext);
    const [mode, setMode] = React.useState();
    const [scheduledTimeFrame, setScheduledTimeFrame] = React.useState([]);

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
            console.log(res.data);
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
        speed,
        setSpeed,
        postSpeed,
        mode,
        scheduledTimeFrame,
        updateMode,
        refreshScreen,
        onRefresh
    }
}

export default ScheduledFanViewModel