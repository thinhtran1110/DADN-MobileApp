import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react'

const NotificationButton = () => {
  return (
    <TouchableOpacity style={{position: 'absolute', backgroundColor: '#fff', borderWidth: 2, borderRadius: 100, top: 20, right: 0}}>
        <Icon name={'bell'} style={{paddingHorizontal: 10, paddingVertical: 2, fontSize: 20, color: '#000'}}></Icon>
    </TouchableOpacity>
  )
}

export default NotificationButton