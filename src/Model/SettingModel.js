import axios from "axios";
import config from "../config/config";

export const SettingModel = () => {
    
    const getSetting = (key, token) => {
        return axios.get(
            `${config.serverAddress}/setting/conditions/${key}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

    const patchSetting = (key, token, typ, op, valueFrom, valueTo) => {
        return axios.patch(
            `${config.serverAddress}/setting/conditions/${key}`,
            {
                type: typ,
                option: op,
                from: valueFrom,
                to: valueTo
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

    return {
        getSetting,
        patchSetting
    }
}