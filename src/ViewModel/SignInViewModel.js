import { View, Text, Alert } from 'react-native'
import React, {useState} from 'react'

const SignInViewModel = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordHiding, setIsPasswordHiding] = useState(true);

    const login = () => {
        Alert.alert(`${username} ${password}`);
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