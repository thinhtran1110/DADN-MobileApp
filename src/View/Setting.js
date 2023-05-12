import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useCallback} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import GeneralFrame from '../components/GeneralFrame'
import SettingElementsList from '../components/SettingElementsList'
import SettingViewModel from '../ViewModel/SettingViewModel'
import { useFocusEffect } from '@react-navigation/native';

const Setting = ({navigation}) => {

  const [text, onChangeText] = React.useState('');

  const {
    groups,
    refreshScreen,
  } = SettingViewModel();

  useFocusEffect(
    useCallback(() => {
        return refreshScreen();
    },[])
  );

  return (
    <GeneralFrame screenTitle={'Your Setting'} hideBack={false}>
        <View style={{backgroundColor: '#DCDCDC', borderWidth: 1, borderRadius: 100, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
            <Icon name={'search'} style={{ padding: 10 }}></Icon>
            <TextInput
              style={{fontSize: 15}}
              onChangeText={onChangeText}
              value={text}
              placeholder="Search"
            />
        </View>

        <SettingElementsList elementsList = {groups}></SettingElementsList>
    </GeneralFrame>
)
}

export default Setting

const styles = StyleSheet.create({})