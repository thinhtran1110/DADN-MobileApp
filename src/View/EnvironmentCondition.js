import ReactNative ,{ View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import GeneralFrame from '../components/GeneralFrame';
import EnvironmentConditionViewModel from '../ViewModel/EnvironmentConditionViewModel';
import DetailSettingViewModel from '../ViewModel/DetailSettingViewModel';
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
        elementConditionList,
        refreshScreen,
        onRefresh
    } = EnvironmentConditionViewModel(groupKey);

    const getConditionSetting = (nameCondition, option) => {
        let op = null
        if (option == "Customize") {
            op = true;
        } else {
            op = false;
        }
        if (nameCondition == "Temperature") {
          return ['°C', temp.at(-1), op]
        }
        if (nameCondition == "Air Humidity") {
          return ['%', airHumi.at(-1), op]
        }
        if (nameCondition == "Soid Moisture") {
          return ['%', soilMtr.at(-1), op]
        }
      }

    useFocusEffect(
        useCallback(() => {
            return refreshScreen();
        },[])
    );

    return (
        <GeneralFrame screenTitle={`${name}`} onRefresh={onRefresh}>
            <View style={{flex: 1}}>
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
                        {
                            elementConditionList?.map((ele) => {
                                let [unit, curVal, option] = getConditionSetting(ele.type, ele.option);
                                return <EnvironmentTag 
                                        header={ele.type} 
                                        currentValue={curVal} 
                                        unit={unit} 
                                        from={ele.from} 
                                        to={ele.to} 
                                        isCustomize={option} 
                                        groupKey={groupKey}
                                        name={name}>
                                    </EnvironmentTag>
                              })
                        }
                        {/* <EnvironmentTag
                            header={'Temperature'}
                            currentValue={temp.at(-1)}
                            unit={'°C'}
                            from={20}
                            to={26}
                            isCustomize={true}
                            groupKey={groupKey}
                            name={name}
                        ></EnvironmentTag>

                        <EnvironmentTag
                            header={'Air Humidity'}
                            currentValue={airHumi.at(-1)}
                            unit={'%'}
                            from={60}
                            to={70}
                            isCustomize={true}
                            groupKey={groupKey}
                            name={name}
                        ></EnvironmentTag>

                        <EnvironmentTag
                            header={'Soid Moisture'}
                            currentValue={soilMtr.at(-1)}
                            unit={'%'}
                            from={60}
                            to={70}
                            isCustomize={false}
                            groupKey={groupKey}
                            name={name}
                        ></EnvironmentTag> */}
                    </>
                    :
                    <>
                        <View style={{flex: 1}}>
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
                            name={'Soil Moisture'} 
                            data={soilMtr}
                            unit={'%'}
                            ></ChartTag>
                        </View>
                        
                    </>

                }
            </View>
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