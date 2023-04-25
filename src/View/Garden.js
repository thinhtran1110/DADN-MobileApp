import { View, Text, TextInput } from 'react-native'
import React, { useCallback, useContext, useEffect  } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

import GardenElementsList from '../components/GardenElementsList'
import GardenViewModel from '../ViewModel/GardenViewModel'
import { LoadingContext } from '../App'
import GeneralFrame from '../components/GeneralFrame'
import { useFocusEffect } from '@react-navigation/native';


const Garden = ({navigation}) => { 

    const [text, onChangeText] = React.useState('');

    const {
        groups,
        refreshScreen,
    } = GardenViewModel();

    useFocusEffect(
        useCallback(() => {
            return refreshScreen();
        },[])
    );


    return (
        <GeneralFrame screenTitle={'Your Garden'}>
            <View style={{backgroundColor: '#DCDCDC', borderWidth: 1, borderRadius: 100, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                    <Icon name={'search'} style={{ padding: 10}}></Icon>
                    <TextInput
                        style={{fontSize: 15}}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Search"
                        keyboardType="text"
                    />
                </View>

                <GardenElementsList elementsList={groups}></GardenElementsList>
        </GeneralFrame>
    )
}

export default Garden