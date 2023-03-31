import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {userState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

const TextUserInput = ({firstLogo, label, secondLogo, backgroundColor, placeholder, logoColor, onChangeText, secureTextEntry, onPressSecLogo}) => {

    return (
        <View style={{marginVertical: 10, width: '100%'}}>
                
            <Text style={{fontWeight: '600', paddingBottom: 5, color: '#000', fontSize: 15}}>{label}</Text>

            <View style={{flexDirection: 'row', backgroundColor: backgroundColor, paddingHorizontal: 10, paddingVertical: 5}}>
                <View style={{alignItems: 'center', flexDirection: 'row', marginRight: 10, marginLeft: 5, padding: 0}}>
                    <Icon name={firstLogo} style={{fontSize: 20, color: logoColor}}></Icon>
                </View>
                <TextInput style={{flex: 1, fontSize: 15, padding: 0}} placeholder={placeholder} onChangeText={onChangeText} secureTextEntry={secureTextEntry}></TextInput>
                
                {
                    secondLogo  ? 
                    <TouchableOpacity onPress={onPressSecLogo}>
                        <View style={{alignItems: 'center', flexDirection: 'row', marginRight: 10, marginLeft: 5, padding: 0}}>
                            <Icon name={secondLogo} style={{fontSize: 20, color: logoColor} }></Icon>
                        </View>
                    </TouchableOpacity>
                                :
                    <></>
                }
            </View>
        </View>
    )
}

export default TextUserInput