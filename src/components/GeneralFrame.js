import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import NavigationBar from './NavigationBar'
import NotificationButton from './NotificationButton'
import BackButton from './BackButton'
import color from '../config/common/color'

const GeneralFrame = ({children, screenTitle, hideBack = true, hideNotification = true}) => {
  return (
    <View style={{backgroundColor: color.mainBackground, flex: 1}}>
            <SafeAreaView style={{flex: 1, marginHorizontal: 25}}>
                {
                    hideBack ?
                    <BackButton></BackButton>
                    : null
                }

                {
                    hideNotification ?
                    <NotificationButton style={{width:200}}></NotificationButton>
                    : null
                }
                
                <View style={{marginTop: '15%'}}>
                    <Text style={{color: color.primaryLabel, fontFamily: 'Markazi Text', fontWeight: '700', fontSize: 30, textTransform: 'uppercase'}}>{screenTitle}</Text>
                </View>
                
                {
                    children
                }
            </SafeAreaView>
            <NavigationBar></NavigationBar>
        </View>
  )
}

export default GeneralFrame