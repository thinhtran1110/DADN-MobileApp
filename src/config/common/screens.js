import Home from "../../View/Home";
import SigIn from "../../View/SigIn";
import SignUp from "../../View/SignUp";


const screens = {
    'Home': Home,
    'SignIn': SigIn,
    'SignUp': SignUp,
}

const createScreensStack = (Stack) => {
    return Object.keys(screens).map((key) => {
        return <Stack.Screen name={key} component={screens[key]} key={key}/>
    })
}

export {createScreensStack};