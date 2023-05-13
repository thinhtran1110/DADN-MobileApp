import { View, Text, SafeAreaView, ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import NotificationButton from './NotificationButton'
import BackButton from './BackButton'
import PopupMenu from './PopupMenu'
import color from '../../config/common/color'
import config from '../../config/config'

const GeneralFrame = ({children, screenTitle, hideBack = true, hideNotification = true, showMenu = false, onRefresh, name, groupKey }) => {

    const [refreshing, setRefreshing] = useState(false);

    const _onRefresh = async () => {
        setRefreshing(true);
        await onRefresh();
        setRefreshing(false);
    }
    
    return (
        <View style={{backgroundColor: color.mainBackground, flex:1 }}>
                <SafeAreaView style={{flex: 1, marginHorizontal: 25}}>
                    <ScrollView 
                        style={{flex: 1}}
                        refreshControl={
                            onRefresh ? 
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={_onRefresh}
                            ></RefreshControl>
                            :
                            null
                        }
                        contentContainerStyle={{flex: 1}}
                    >
                        <View style={{flex: 1}}>
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
                            
                            <View style={{ flexDirection:'row',marginTop: '15%' }}>
                                <Text style={{color: color.primaryLabel, fontFamily: 'Markazi Text', fontWeight: '700', fontSize: 27, width: config.deviceWidth*0.8}}>{screenTitle}</Text>
                                {
                                    showMenu ?    
                                    <PopupMenu name={name} groupKey={groupKey}/>
                                    : null
                                }
                            </View>
                            
                            {
                                children
                            }
                        </View>
                        
                    </ScrollView>
                </SafeAreaView>
                <NavigationBar></NavigationBar>
            </View>
    )
}

export default GeneralFrame