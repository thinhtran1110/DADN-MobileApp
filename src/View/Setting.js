import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import GeneralFrame from '../components/GeneralFrame'

const Setting = ({navigation}) => {

  const [text, onChangeText] = React.useState('');

  return (
    <GeneralFrame screenTitle={'Your Setting'}>
        <View style={{backgroundColor: '#DCDCDC', borderWidth: 1, borderRadius: 100, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                <Icon name={'search'} style={{ padding: 10}}></Icon>
                <TextInput
                  style={{fontSize: 15}}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="Search"
                  keyboardType="text"
                />
            </View>
    </GeneralFrame>
)
}

export default Setting

const styles = StyleSheet.create({})