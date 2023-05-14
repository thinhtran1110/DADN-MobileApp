import StoreService from '../services/storeService'
import { AdafruitModel } from '../Model/AdafruitModel'

const ScheduledPumpViewModel = (groupKey) => {

    const adafruitModel = AdafruitModel();

    const onPump = async () => {
        try {
            const [accessToken] = await StoreService.loadTokens();

            const res = await adafruitModel.postOnPump(groupKey, accessToken);
        }
        catch(err) {
            if(err.response){
                console.log(err.response.data);
                return;
            }
            console.log(err);
        }
    }

    const offPump = async () => {
        try {
            const [accessToken] = await StoreService.loadTokens();

            const res = await adafruitModel.postOffPump(groupKey, accessToken);
        }
        catch(err) {
            if(err.response){
                console.log(err.response.data);
                return;
            }
            console.log(err);
        }
    }

    return {
        onPump,
        offPump
    }
}

export default ScheduledPumpViewModel