import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import config from '../../config/config'

const SettingElement = (props) => {
    const { name, groupKey } = props;
    const navigation = useNavigation();
    return (
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={ styles.settingele }
            onPress={() => {
                navigation.navigate('DetailSetting', {name: name, groupKey: groupKey});
            }}>
                <Text style={ styles.text }>{name}</Text>
                <Icon name={'chevron-right'} style={{ fontSize: 20, padding: 10, color: '#000'}}></Icon>
            </TouchableOpacity>
        </View>
    )
}

export default SettingElement

const styles = StyleSheet.create({
    settingele: {
        width: config.deviceWidth*0.8, 
        borderColor: 'rgba(0, 0, 0, 0.5)', 
        borderBottomWidth: 1, 
        flexDirection: 'row', 
        marginVertical: 10
    },
    text: {
        width: config.deviceWidth*0.72, 
        color: '#000', 
        fontSize: 24, 
        fontWeight: '700', 
        fontFamily: 'Inria Serif'
    }
})