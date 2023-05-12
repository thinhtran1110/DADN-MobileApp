import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback } from 'react'
import GeneralFrame from '../components/GeneralFrame'
import EnvironmentSetting from '../components/EnvironmentSetting'
// import { useFocusEffect } from '@react-navigation/native'

const DetailSetting = ({navigation, route}) => {

  const { name, groupKey } = route.params;

  const [change, setChange] = React.useState(false)

//   const {
//     groups,
//     refreshScreen,
//   } = DetailSettingViewModel(groupKey);

  // useFocusEffect(
  //   useCallback(() => {
  //       return refreshScreen();
  //   },[])
  // );

  return (
    <>
        <GeneralFrame screenTitle={`Your Setting\\${name}`} showMenu={true} name ={name} groupKey={groupKey}>
          <ScrollView showsVerticalScrollIndicator={false} style={{ paddingBottom: 10 }}>
            <TouchableOpacity style={{ alignItems:'flex-end' }}>
              <Text style={ [change? styles.changeSave : styles.notChangeSave, {marginRight: 20}] }>Save</Text>
            </TouchableOpacity>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>

              <EnvironmentSetting name='Temperature' unit='°C' numFrom='20' numTo='24'></EnvironmentSetting>

              <EnvironmentSetting name='Air Humidity' unit='%' numFrom='65' numTo='75'></EnvironmentSetting>

              <EnvironmentSetting name='Soil Moisture' unit='%' numFrom='70' numTo='80'></EnvironmentSetting>
            </View>
          </ScrollView>
        </GeneralFrame>
    </>
  )
}

export default DetailSetting

const styles = StyleSheet.create({
  changeSave: {
    backgroundColor: '#1300EC',
    textAlign: 'center',
    width: 80,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Inria Serif'
  },
  notChangeSave: {
    backgroundColor: '#C0C6FD',
    textAlign: 'center',
    width: 80,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    color: '#636363',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Inria Serif'
  }
})