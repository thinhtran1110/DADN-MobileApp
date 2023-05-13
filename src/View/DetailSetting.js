import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback } from 'react'
import GeneralFrame from '../components/GeneralFrame'
import EnvironmentSetting from '../components/EnvironmentSetting'
import DetailSettingViewModel from '../ViewModel/DetailSettingViewModel'
import { useFocusEffect } from '@react-navigation/native'

const DetailSetting = ({navigation, route}) => {

  const { name, groupKey } = route.params;

  const { elementConditionList, updateSetting, refreshScreen, onRefresh } = DetailSettingViewModel(groupKey);
  
  const getUnit = (nameCondition) => {
    if (nameCondition == "Temperature") {
      return '°C'
    }
    if (nameCondition == "Air Humidity") {
      return '%'
    }
    if (nameCondition == "Soid Moisture") {
      return '%'
    }
  }

  useFocusEffect(
    useCallback(() => {
        return refreshScreen();
    },[])
  );

  return (
    <>
        <GeneralFrame screenTitle={`Your Setting\\${name}`} showMenu={true} name ={name} groupKey={groupKey} onRefresh={onRefresh}>
          <ScrollView showsVerticalScrollIndicator={false} style={{ paddingBottom: 10 }}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>

              {
                elementConditionList?.map((ele) => {
                  let unit = getUnit(ele.type);
                  return <EnvironmentSetting key={ele.name} name={ele.type} unit={unit} numFrom={ele.from} numTo={ele.to} option={ele.option} update={updateSetting}></EnvironmentSetting>
                })
              }

            </View>
          </ScrollView>
        </GeneralFrame>
    </>
  )
}

export default DetailSetting

const styles = StyleSheet.create({
})