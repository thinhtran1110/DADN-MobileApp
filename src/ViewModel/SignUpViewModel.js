import { View, Text, Alert } from 'react-native'
import React, {useState} from 'react'


const SignUpViewModel = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordHiding, setIsPasswordHiding] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isConfirmPasswordHiding, setIsConfirmPasswordHiding] = useState(true);
    const [apiKey, setApiKey] = useState('');
    const register = () => {
        Alert.alert(`${username} ${password} ${confirmPassword} ${apiKey}`);
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

export default SignUpViewModel