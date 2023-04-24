import { View, Text, Alert } from 'react-native'
import React, {useState} from 'react'
import axios from 'axios';
import StoreService from '../services/storeService';
import config from '../config/config';


const SignUpViewModel = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordHiding, setIsPasswordHiding] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isConfirmPasswordHiding, setIsConfirmPasswordHiding] = useState(true);
    const [apiKey, setApiKey] = useState('');
    const register = async (navigateFunc) => {
        try {
            const invalidList = validateForm();
            if(invalidList.length != 0){
                let alertString = invalidList.reduce((prepStr, cur) => {
                    const res = prepStr + '- ' + cur + '\n';
                    return res;
                }, '');
                Alert.alert(alertString);
                return;
            }

            const res = await axios.post(
                `${config.serverAddress}/auth/signup`,
                {
                    username,
                    password,
                    adafruitToken: apiKey
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
                setConfirmPassword('');
                setApiKey('');
            })

            const tokens = res.data;
            await StoreService.storeTokens(tokens.accessToken, tokens.refreshToken);
            navigateFunc();
        }
        catch(err){
            if(err.response){
                console.log(err.response.data);
                return;
            }
            console.log(err);
        }
    }

    const validateForm = () => {
        const invalidList = [];
        if(password != confirmPassword){
            invalidList.push('Confirm password failed');
        }
        return invalidList;
    }

    return {
        username,
        password,
        isPasswordHiding,
        confirmPassword,
        isConfirmPasswordHiding,
        apiKey,
        setConfirmPassword,
        setIsConfirmPasswordHiding,
        setApiKey,
        setUsername,
        setPassword,
        setIsPasswordHiding,
        register,
    }
}

export default SignUpViewModel;