import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import color from '../config/common/color';

const NavigationBar = (props) => {
    const { onPress } = props;
        
    return (
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: color.navigationBar}}>
            <TouchableOpacity >
                <Icon name={'home'} style={style.icon}></Icon>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name={'cog'} style={style.icon}></Icon>
                
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name={'list-ul'} style={style.icon}></Icon>

            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name={'user'} style={style.icon}></Icon>
            </TouchableOpacity>
        
        </View>
    )
}

const style = StyleSheet.create({
    icon: {
        fontSize: 30,
        paddingVertical: 10,
        paddingHorizontal: 30
    }
})

export default NavigationBar