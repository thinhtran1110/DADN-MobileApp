import { View, TextInput } from 'react-native'
import React, { useCallback } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import GardenElementsList from '../components/garden/GardenElementsList'
import GardenViewModel from '../ViewModel/GardenViewModel'
import GeneralFrame from '../components/common/GeneralFrame'
import { useFocusEffect } from '@react-navigation/native';


const Garden = ({navigation}) => { 

    const [text, onChangeText] = React.useState('');

    const {
        groups,
        refreshScreen,
        onRefresh
    } = GardenViewModel();

    useFocusEffect(
        useCallback(() => {
            return refreshScreen();
        },[])
    );


    return (
        <GeneralFrame screenTitle={'Your Garden'} hideBack={false} onRefresh={onRefresh}>
            <View style={{backgroundColor: '#DCDCDC', borderWidth: 1, borderRadius: 100, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                <Icon name={'search'} style={{ padding: 10, color:'#000' }}></Icon>
                <TextInput
                    style={{fontSize: 15, color:'#000'}}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Search"
                    placeholderTextColor='#646464'
                />
            </View>

            <GardenElementsList elementsList={groups}></GardenElementsList>
        </GeneralFrame>
    )
}

export default Garden