import axios from "axios";
import config from "../config/config";

export const AdafruitModel = () => {

    const getGroups = (token) => {
        return axios.get(
            `${config.serverAddress}/adafruit/groups`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

    const getTemp = (key, token) => {
        return axios.get(
            `${config.serverAddress}/adafruit/data/${key}.temp-sensor`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

    const getAirHumi = (key, token) => {
        return axios.get(
            `${config.serverAddress}/adafruit/data/${key}.humi-sensor`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

    const getSoidMtr = (key, token) => {
        return axios.get(
            `${config.serverAddress}/adafruit/data/${key}.soil-sensor`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

    const postSpeed = (key, token, val) => {
        return axios.post(
            `${config.serverAddress}/adafruit/${key}/fan_speed`,
            {
                value: val
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

    const postOnPump = (key, token) => {
        return axios.post(
            `${config.serverAddress}/adafruit/${key}/pump_on`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

    const postOffPump = (key, token) => {
        return axios.post(
            `${config.serverAddress}/adafruit/${key}/pump_off`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

    return {
        getGroups,
        getTemp,
        getAirHumi,
        getSoidMtr,
        postSpeed,
        postOnPump,
        postOffPump
    }
}