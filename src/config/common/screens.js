import EnvironmentCondition from "../../View/EnvironmentCondition";
import Garden from "../../View/Garden";
import Home from "../../View/Home";
import SigIn from "../../View/SigIn";
import SignUp from "../../View/SignUp";
import Setting from "../../View/Setting";
import DetailSetting from "../../View/DetailSetting";
import ScheduledFan from "../../View/ScheduledFan";
import ScheduledPump from "../../View/ScheduledPump";
import LogOut from "../../View/LogOut";
import Notification from "../../View/Notification";
import History from "../../View/History";

const initalRouteName = 'Setting';

const screens = {
    'Home': Home,
    'SignIn': SigIn,
    'SignUp': SignUp,
    'Garden': Garden,
    'EnvironmentCondition' : EnvironmentCondition,
    'Setting': Setting,
    'DetailSetting': DetailSetting,
    'ScheduledFan': ScheduledFan,
    'ScheduledPump': ScheduledPump,
    'LogOut' : LogOut,
    'Notification': Notification,
    'History': History
}

const createScreensStack = (Stack) => {
    return Object.keys(screens).map((key) => {
        return (
            <Stack.Screen name={key} component={screens[key]} key={key}/>
        )
    })
}

export {createScreensStack, initalRouteName};