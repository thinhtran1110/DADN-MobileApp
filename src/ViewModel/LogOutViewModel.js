import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'
import config from '../config/config'
import StoreService from '../services/storeService'
import { useNavigation } from '@react-navigation/native'
import { AuthModel } from '../Model/AuthModel'

const LogOutViewModel = () => {
    const navigation = useNavigation();
    const authModel = AuthModel();
    
    const logout = async () => {
        try{
            const [accessToken] = await StoreService.loadTokens();
            const res = await authModel.LogOut(accessToken)

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