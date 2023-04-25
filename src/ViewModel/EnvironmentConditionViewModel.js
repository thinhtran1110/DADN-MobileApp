import { View, Text } from 'react-native'
import React, { useState } from 'react'

const EnvironmentConditionViewModel = () => {
    const [isActiveNow, setIsActiveNow] = useState(true);
        
    return {
        isActiveNow,
        setIsActiveNow
    }

    
}

export default EnvironmentConditionViewModel