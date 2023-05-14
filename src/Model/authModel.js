import axios from 'axios';
import config from '../config/config';

export const AuthModel = () => {

    const SignUp = (username, password, apiKey) => {
        return axios.post(
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
    }

    const SignIn = (username, password) => {
        return axios.post(
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
    }

    const LogOut = (token) => {
        return axios.post(
            `${config.serverAddress}/auth/logout`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

    return {
        SignUp,
        SignIn,
        LogOut
    }
}