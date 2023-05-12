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
            const res = await axios.post(url,{},{
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

            await StoreService.removeTokens();
            navigation.navigate('Home');
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