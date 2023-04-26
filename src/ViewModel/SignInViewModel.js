import { View, Text, Alert } from 'react-native'
import React, {useState} from 'react'
import axios from 'axios';
import config from '../config/config';
import StoreService from '../services/storeService';
import { useNavigation } from '@react-navigation/native';


const SignInViewModel = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordHiding, setIsPasswordHiding] = useState(true);
    const navigation = useNavigation();
    const [errorMessage, setErrorMessage] = useState('');
    const login = async (nextScreen) => {
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
            setErrorMessage('');
            navigation.navigate(nextScreen);
        }
        catch(err){
            if(err.response){
                console.log(err.response.data);
                setErrorMessage(err.response.data['message']);
                return;
            }
            console.log(err);
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
        errorMessage,
        setErrorMessage,
    }
}

export default SignInViewModel;