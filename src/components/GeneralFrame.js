import { View, Text, SafeAreaView, ScrollView, RefreshControl, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import NavigationBar from './NavigationBar'
import NotificationButton from './NotificationButton'
import BackButton from './BackButton'
import color from '../config/common/color'

const GeneralFrame = ({children, screenTitle, hideBack = true, hideNotification = true, showMenu = false, onRefresh = async () => {return;}}) => {
    const [refreshing, setRefreshing] = useState(false);
    const _onRefresh = async () => {
        setRefreshing(true);
        await onRefresh();
        setRefreshing(false);
    }
    return (
        <View style={{backgroundColor: color.mainBackground, flex: 1}}>
                <SafeAreaView style={{flex: 1, marginHorizontal: 25}}>
                    <ScrollView 
                        style={{flex: 1}}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={_onRefresh}
                            ></RefreshControl>
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
                            
                            <View style={{ flexDirection:'row',marginTop: '15%'}}>
                                <Text style={{color: color.primaryLabel, fontFamily: 'Markazi Text', fontWeight: '700', fontSize: 30, textTransform: 'uppercase', width: 320}}>{screenTitle}</Text>
                                {
                                    showMenu ?
                                    <TouchableOpacity style={{ width:40, height:50, alignItems:'center', justifyContent:'center' }}>
                                        <Icon name={'ellipsis-v'} style={{ fontSize: 25, color: '#000' }}></Icon>
                                    </TouchableOpacity>
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