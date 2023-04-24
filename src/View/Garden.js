import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native'
import React, { useContext, useEffect } from 'react'
import color from '../config/common/color'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationBar from '../components/NavigationBar'
import Icon from 'react-native-vector-icons/FontAwesome5';
import NotificationButton from '../components/NotificationButton'
import image from '../assets/image'
import GardenElement from '../components/GardenElement'
import GardenElementsList from '../components/GardenElementsList'
import StoreService from '../services/storeService'
import GardenViewModel from '../ViewModel/GardenViewModel'
import { LoadingContext } from '../App'
import GeneralFrame from '../components/GeneralFrame'


const Garden = ({navigation}) => { 
    const {
        getGroups,
        groups,
        setGroups

    } = GardenViewModel();

    const {
        setIsLoading,
    } = useContext(LoadingContext);

    useEffect(() => {
        setTimeout(async () =>{
            const elementsList = await getGroups();
            setGroups(elementsList);
        },0)
    }, []);


    return (
        <GeneralFrame screenTitle={'Your Garden'}>
            <View style={{backgroundColor: '#DCDCDC', borderWidth: 1, borderRadius: 100, flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                    <Icon name={'search'} style={{ padding: 10}}></Icon>
                    <Text style={{fontSize: 15}}>Search</Text>
                </View>

                <GardenElementsList elementsList={groups}></GardenElementsList>
        </GeneralFrame>
    )
}

export default Garden