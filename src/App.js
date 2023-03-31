import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createScreensStack } from './config/common/screens';
import config from './config/config';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={config.initalRouteName} screenOptions={{headerShown: false}}>
            {
                createScreensStack(Stack)
            }
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App