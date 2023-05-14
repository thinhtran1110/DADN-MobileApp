import React, { useContext, useState } from 'react'
import StoreService from '../services/storeService'
import { LoadingContext } from '../App'
import { AdafruitModel } from '../Model/AdafruitModel'

const SettingViewModel = () => {
    const [groups, setGroups] = useState(null);
    const {setIsLoading} = useContext(LoadingContext);
    const adafruitModel = AdafruitModel();

    const getGroups = async () => {
        try{
            const [accessToken] = await StoreService.loadTokens();

            const res = await adafruitModel.getGroups(accessToken)
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

    const loadData = async () => {
        const elementsList = await getGroups();
        setGroups(elementsList);
        return elementsList;
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
        groups,
        refreshScreen,
        onRefresh,
    }
        

}

export default SettingViewModel;