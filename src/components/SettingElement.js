import { View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import color  from '../config/common/color'
import { useNavigation } from '@react-navigation/native'

const SettingElement = (props) => {
    const { name, groupKey } = props;
    const navigation = useNavigation();
    return (
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={ styles.settingele } onPress={() => navigation.navigate('DetailSetting')}>
                <Text style={ styles.text }>{name}</Text>
                <Icon name={'chevron-right'} style={{ fontSize: 20, padding: 10}}></Icon>
            </TouchableOpacity>
        </View>
    )
}

export default SettingElement

const styles = StyleSheet.create({
    settingele: {
        width: 320, 
        borderColor: 'rgba(0, 0, 0, 0.5)', 
        borderBottomWidth: 1, 
        flexDirection: 'row', 
        marginVertical: 10
    },
    text: {
        width: 290, 
        color: '#000', 
        fontSize: 24, 
        fontWeight: '700', 
        fontFamily: 'Inria Serif'
    }
})