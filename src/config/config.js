import { Dimensions } from "react-native";

const config = {
    serverAddress: 'http:/localhost:3000',
    deviceHeight: Dimensions.get('window').height,
    deviceWidth: Dimensions.get('window').width
}

export default config;