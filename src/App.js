import { View, Text } from 'react-native'
import React, {createContext, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createScreensStack, initalRouteName } from './config/common/screens';
import config from './config/config';
import Spinner from 'react-native-loading-spinner-overlay/lib';


const Stack = createNativeStackNavigator();
const LoadingContext = createContext();

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    
      <NavigationContainer>
          <Spinner visible={isLoading}></Spinner>
          <LoadingContext.Provider value={{isLoading, setIsLoading}}>
            <Stack.Navigator initialRouteName={initalRouteName} screenOptions={{headerShown: false}}>
                  {
                      createScreensStack(Stack)
                  }
            </Stack.Navigator>
          </LoadingContext.Provider>
      </NavigationContainer>
    
    
  )
}

export default App;
export {LoadingContext}