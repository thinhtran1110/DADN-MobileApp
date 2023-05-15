import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback } from 'react'
import GeneralFrame from '../components/common/GeneralFrame'
import EnvironmentSetting from '../components/setting/EnvironmentSetting'
import DetailSettingViewModel from '../ViewModel/DetailSettingViewModel'
import { useFocusEffect } from '@react-navigation/native'
import config from '../config/config'

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
        <GeneralFrame screenTitle={`Your Setting \\ ${name}`} showMenu={true} name ={name} groupKey={groupKey} onRefresh={onRefresh}>
          <ScrollView showsVerticalScrollIndicator={false} style={{ paddingBottom: 10 }}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>

              {
                elementConditionList?.map((ele, idx) => {
                  let unit = getUnit(ele.type);
                  return <EnvironmentSetting key={idx} name={ele.type} unit={unit} numFrom={ele.from} numTo={ele.to} option={ele.option} update={updateSetting}></EnvironmentSetting>
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