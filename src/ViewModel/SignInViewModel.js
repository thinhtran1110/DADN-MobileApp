import { View, Text, Alert } from 'react-native'
import React, {useState} from 'react'
import axios from 'axios';
import config from '../config/config';
import StoreService from '../services/storeService';

const SignInViewModel = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordHiding, setIsPasswordHiding] = useState(true);

    const login = async () => {
        try{
            const res = await axios.post(
                `${config.serverAddress}/auth/login`,
                {
                    username,
                    password
                },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            )
            .finally(() => {
                setUsername('');
                setPassword('');
            })
            
            const tokens = res.data;
            await StoreService.storeTokens(tokens.accessToken, tokens.refreshToken);

        }
        catch(err){
            if(err){
                console.log(err.response.data);
            }
        }
        
        
    }
    return {
        username,
        password,
        isPasswordHiding,
        setUsername,
        setPassword,
        setIsPasswordHiding,
        login,
    }
}

export default SignInViewModel;