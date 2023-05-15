import { StyleSheet, Text, TouchableOpacity, View, Modal, SafeAreaView, Pressable, Alert, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Menu, MenuItem } from 'react-native-material-menu'

const PopupMenu = (props) => {

    const { name, groupKey } = props

    const [visible, setVisible] = React.useState(false)
    const navigation = useNavigation()
   
    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    const options = [
        {
            title: "Adjust Temperature",
            action: () => navigation.navigate('ScheduledFan', {name: name, groupKey: groupKey})
        },
        {
            title: "Irrigate Soil",
            action: () => navigation.navigate('ScheduledPump', {name: name, groupKey: groupKey})
        }
    ]

    return (
            <Menu
                visible={visible}
                anchor={
                    <TouchableOpacity onPress={showMenu} hitSlop={{ top: 25, bottom: 25, left: 15, right: 15 }}>   
                        <View style={{alignItems:'center', justifyContent:'center'}}>
                            <Icon name={'ellipsis-v'} style={{ fontSize: 25, color: '#000'}}></Icon>
                        </View>
                    </TouchableOpacity>
                }
                onRequestClose={hideMenu}
                style={styles.popup}
            >
                {
                    options.map((op, i) => {
                        return (
                            <MenuItem 
                                style={ styles.option } key={i} 
                                onPress={() => {
                                    op.action(); 
                                    hideMenu();
                                }}
                            >
                                <Text style={{color: '#000'}}>{op.title}</Text>
                            </MenuItem>
                        )
                    })
                }
            </Menu>
  )
}

export default PopupMenu

const styles = StyleSheet.create({
    popup: {
        borderRadius: 8,
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    option: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        paddingVertical: 7,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },

})