import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react'

const BackButton = () => {
  return (
    <TouchableOpacity style={{width: 35, backgroundColor: '#fff', borderWidth: 2, borderRadius: 100, top: 20, right: 0}}>
        <Icon name={'angle-left'} style={{paddingHorizontal: 10, paddingVertical: 2, fontSize: 20, color: '#000'}}></Icon>
    </TouchableOpacity>
  )
}

export default BackButton