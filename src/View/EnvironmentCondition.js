import ReactNative ,{ View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import GeneralFrame from '../components/GeneralFrame';
import EnvironmentConditionViewModel from '../ViewModel/EnvironmentConditionViewModel';
import EnvironmentTag from '../components/EnvironmentTag';
import color from '../config/common/color';
import ChartTag from '../components/ChartTag';
import { useFocusEffect } from '@react-navigation/native';


const EnvironmentCondition = ({navigation, route}) => {
    const { groupKey, name } = route.params;
    const {
        isActiveNow,
        setIsActiveNow,
        temp,
        airHumi,
        soilMtr,
        refreshScreen,
    } = EnvironmentConditionViewModel(groupKey);

    useFocusEffect(
        useCallback(() => {
            return refreshScreen();
        },[])
    );
    return (
        <GeneralFrame screenTitle={`${name}`}>
            <View style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
                paddingHorizontal: 20,
                marginVertical: 5
            }}>
                <TouchableOpacity style={[{borderBottomLeftRadius: 10, borderTopLeftRadius: 10} ,(isActiveNow ? styles.activeButton : styles.inActiveButton)]} onPress={() => setIsActiveNow(true)}>
                        <Text style={isActiveNow ? styles.activeText : styles.inActiveText}>Now</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={[{borderBottomRightRadius: 10, borderTopRightRadius: 10}, (!isActiveNow ? styles.activeButton : styles.inActiveButton)]} onPress={() => setIsActiveNow(false)}>
                        <Text style={!isActiveNow ? styles.activeText : styles.inActiveText}>Graphs</Text>
                </TouchableOpacity>
                
            </View>

            <View style={{flex: 1, padding: 10}}>
                {
                    isActiveNow  ? 
                    <>
                        <EnvironmentTag
                            header={'Temperature'}
                            backgroundColor={color.outLimit}
                            currentValue={24}
                            unit={'°C'}
                            from={20}
                            to={24}
                            isCustomize={true}
                        ></EnvironmentTag>

                        <EnvironmentTag
                            header={'Air Humidity'}
                            backgroundColor={color.inLimit}
                            currentValue={65}
                            unit={'%'}
                            from={60}
                            to={70}
                            isCustomize={true}
                        ></EnvironmentTag>

                        <EnvironmentTag
                            header={'Soid Moisture'}
                            backgroundColor={color.inLimit}
                            currentValue={70}
                            unit={'%'}
                            from={60}
                            to={70}
                            isCustomize={false}
                        ></EnvironmentTag>
                    </>
                    :
                    <>
                        <ChartTag 
                            name={'Temperature'} 
                            data={temp}
                            unit={'°C'}
                        ></ChartTag>

                        <ChartTag 
                            name={'Air Humidity'} 
                            data={airHumi}
                            unit={'%'}
                        ></ChartTag>
                        
                        <ChartTag 
                        name={'Soid Moisture'} 
                        data={soilMtr}
                        unit={'%'}
                        ></ChartTag>
                    </>

                }
            </View>
        </GeneralFrame>
    )
}

const styles = StyleSheet.create({
    activeButton: {
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: '#2E4600', 

    },
    inActiveButton: {
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: '#fff', 
    },
    activeText: {
        color: '#fff', 
        fontSize: 20, 
        padding: 5, 
        textTransform: 'uppercase', 
        fontWeight: 500
    },
    inActiveText: {
        color: '#000', 
        fontSize: 20, 
        padding: 5, 
        textTransform: 'uppercase', 
        fontWeight: 500
    }


})

export default EnvironmentCondition