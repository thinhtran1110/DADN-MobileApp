import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import GeneralFrame from '../components/GeneralFrame'
import EnvironmentSetting from '../components/EnvironmentSetting'

const DetailSetting = ({nevigation}) => {
  
  const [text, onChangeText] = React.useState('');

//   const {
//     groups,
//     refreshScreen,
//   } = DetailSettingViewModel(groupKey);

//   useFocusEffect(
//     useCallback(() => {
//         return refreshScreen();
//     },[])
//   );

  return (
    <>
        <GeneralFrame screenTitle={'Your Setting'} showMenu={true}>
          <View style={{alignItems: 'center'}}>

            <EnvironmentSetting name='Temperature' unit='°C' numFrom='20' numTo='24'></EnvironmentSetting>

            <EnvironmentSetting name='Air Humidity' unit='%' numFrom='65' numTo='75'></EnvironmentSetting>

            <EnvironmentSetting name='Soil Moisture' unit='%' numFrom='70' numTo='80'></EnvironmentSetting>
          </View>
        </GeneralFrame>
    </>
  )
}

export default DetailSetting

const styles = StyleSheet.create({
  settingele: {
    width: 320, 
    borderColor: 'rgba(0, 0, 0, 0.5)', 
    borderBottomWidth: 1, 
    flexDirection: 'row', 
    marginVertical: 10,
    
},
text: {
    width: 290, 
    color: '#000', 
    fontSize: 20, 
    fontWeight: '700', 
    fontFamily: 'Inria Serif'
}
})