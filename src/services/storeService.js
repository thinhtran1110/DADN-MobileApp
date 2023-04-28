import AsyncStorage from '@react-native-async-storage/async-storage';

export default class StoreService {
    static async setItem(key, value){
        try{
            const storedValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, storedValue) ;
        }
        catch(err){
            if(err){
                console.log(err);
            }
        }
    }

    static async getItem(key){
        try{
            const storedValue = await AsyncStorage.getItem(key);
            const jsonParsed = await JSON.parse(storedValue);
            return storedValue != null ? jsonParsed : null;
        }
        catch(err){
            if(err){
                console.log(err);
            }
        }
    }

    static async removeItem(key){
        try{
            await AsyncStorage.removeItem(key);
        }
        catch(err){
            if(err){
                console.log(err);
            }
        }
    }
    static async storeTokens(accessToken, refreshToken){
        const tokens = {accessToken, refreshToken};
        return this.setItem('tokens', tokens);
    }

    static async loadTokens(){
        const tokens = await this.getItem('tokens');
        return [tokens.accessToken, tokens.refreshToken];
    }

    static async removeTokens(){
        return this.removeItem('tokens');
    }
}