import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'
import config from '../config/config'
import StoreService from '../services/storeService'
import { useNavigation } from '@react-navigation/native'

const LogOutViewModel = () => {
    const navigation = useNavigation();
    const logout = async () => {
        try{
            const url = `${config.serverAddress}/auth/logout`;
            const [accessToken] = await StoreService.loadTokens();
            const _ = await axios.post(url,{},{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

            await StoreService.removeTokens();
            navigation.popToTop();
        }
        catch(err){
            if(err){
                console.log(err);
            }
        }
    }

        
    return {
        logout,
    }
}

export default LogOutViewModel;