import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import GeneralFrame from '../components/common/GeneralFrame'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import LogOutViewModel from '../ViewModel/LogOutViewModel';


const LogOut = () => {
  const {
    logout,
  } = LogOutViewModel();
  return (
    <GeneralFrame screenTitle={'Your Profile'} hideNotification={false}>
      <View style={{borderBottomWidth: 1, marginTop: 15}}></View>

      <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
        <TouchableOpacity 
          style={{
            backgroundColor: '#fff', 
            borderWidth: 2, borderRadius: 100, 
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingVertical: 10, 
            paddingHorizontal: 25, 
            marginBottom: 30
          }}
          onPress={logout}
        >
          <Text style={{color: '#000', fontSize: 13, fontWeight: 'bold'}}>Log out</Text>
          <Icon name={'sign-out-alt'} style={{color: '#000', marginLeft: 10, fontSize: 20}}></Icon>
        </TouchableOpacity>

      </View>
    </GeneralFrame>
  )
}

export default LogOut