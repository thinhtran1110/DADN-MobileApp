import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../../config/common/color';
import { useNavigation } from '@react-navigation/native';

const NavigationBar = (props) => {
    const navigation = useNavigation();

    const { onPress } = props;
        
    return (
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: color.navigationBar}}>
            <TouchableOpacity onPress={() => navigation.navigate('Garden')}>
                <Icon name={'home'} style={style.icon}></Icon>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                <Icon name={'cog'} style={style.icon}></Icon>
                
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('History')}>
                <Icon name={'list-ul'} style={style.icon}></Icon>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LogOut')}>
                <Icon name={'user'} style={style.icon}></Icon>
            </TouchableOpacity>
        
        </View>
    )
}

const style = StyleSheet.create({
    icon: {
        color: '#000',
        fontSize: 30,
        paddingVertical: 10,
        paddingHorizontal: 30
    }
})

export default NavigationBar