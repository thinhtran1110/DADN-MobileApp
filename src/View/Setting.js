import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useCallback} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import GeneralFrame from '../components/common/GeneralFrame'
import SettingElementsList from '../components/setting/SettingElementsList'
import SettingViewModel from '../ViewModel/SettingViewModel'
import { useFocusEffect } from '@react-navigation/native';

const Setting = ({navigation}) => {

  const [text, onChangeText] = React.useState('');

  const {
    groups,
    onRefresh,
    refreshScreen,
  } = SettingViewModel();
  
  useFocusEffect(
    useCallback(() => {
        return refreshScreen();
    },[])
  );

  return (
    <GeneralFrame screenTitle={'Your Setting'} hideBack={false}  onRefresh={onRefresh}>
        <View style={{backgroundColor: '#DCDCDC', borderWidth: 1, borderRadius: 100, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
          <Icon name={'search'} style={{ padding: 10, color:'#000' }}></Icon>
          <TextInput
              style={{fontSize: 15, color:'#000'}}
              onChangeText={onChangeText}
              value={text}
              placeholder="Search"
              placeholderTextColor='#646464'
          />
        </View>
        <SettingElementsList elementsList = {groups}></SettingElementsList>
    </GeneralFrame>
)
}

export default Setting

const styles = StyleSheet.create({})