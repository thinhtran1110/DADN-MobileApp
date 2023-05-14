import axios from 'axios';
import config from '../config/config';

export const AuthModel = () => {
    const SigIn = (username, password) => {
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







    return {
        SigIn,
    }
}