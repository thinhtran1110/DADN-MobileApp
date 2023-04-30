import { StyleSheet, Text, TouchableOpacity, View, Modal, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const PopupMenu = () => {

  const [visible, setVisible] = React.useState(false)

  const nevigation = useNavigation()

  const options = [
    {
        title: "Adjust Temperature",
        action: () => alert('Temp')
    },
    {
        title: "Irrigate Soil",
        action: () => alert('Irrigate')
    },
    {
        title: "Adjust Temperature",
        action: () => alert('Temp')
    },
    {
        title: "Irrigate Soil",
        action: () => alert('Irrigate')
    }
  ]

  return (
    <>
        <TouchableOpacity style={{alignItems:'center', justifyContent:'center' }} onPress={() => setVisible(true)}>
            <Icon name={'ellipsis-v'} style={{ fontSize: 25, color: '#000' }}></Icon>
        </TouchableOpacity>
        <Modal transparent visible={visible}>
            <SafeAreaView style={{ flex:1 }} onTouchStart={() => setVisible(false)}>
                <View style={ styles.popup }>
                    {
                        options.map((op, i) => {
                            <TouchableOpacity style={ styles.option } key={i} onPress={() => op.action}>
                                <Text>{op.title}</Text>
                            </TouchableOpacity>
                        })
                    }
                </View>
            </SafeAreaView>
        </Modal>
    </>
  )
}

export default PopupMenu

const styles = StyleSheet.create({
    popup: {
        borderRadius: 8,
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: '#000',
        paddingHorizontal: 10,
        position: 'absolute',
        zIndex: 2,
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
        borderBottomColor: '#ccc'
    }
})