import EnvironmentCondition from "../../View/EnvironmentCondition";
import Garden from "../../View/Garden";
import Home from "../../View/Home";
import SigIn from "../../View/SigIn";
import SignUp from "../../View/SignUp";
import Setting from "../../View/Setting";
import DetailSetting from "../../View/DetailSetting";
import LogOut from "../../View/LogOut";

const initalRouteName = 'Setting';

const screens = {
    'Home': Home,
    'SignIn': SigIn,
    'SignUp': SignUp,
    'Garden': Garden,
    'EnvironmentCondition' : EnvironmentCondition,
    'Setting': Setting,
    'DetailSetting': DetailSetting,
    'LogOut' : LogOut,
}

const createScreensStack = (Stack) => {
    return Object.keys(screens).map((key) => {
        return (
            <Stack.Screen name={key} component={screens[key]} key={key}/>
        )
    })
}

export {createScreensStack, initalRouteName};