import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SettingElement from './SettingElement';

const SettingElementsList = (props) => {
    const { elementsList } = props;
    return (
        <ScrollView style={{flexDirection: 'column'}} showsVerticalScrollIndicator={false}>
            {   
                elementsList?.map((ele) => {
                    return <SettingElement key={ele.key} name={ele.name} groupKey={ele.groupKey}></SettingElement>
                })
                
            }
        </ScrollView>
    )
}

export default SettingElementsList