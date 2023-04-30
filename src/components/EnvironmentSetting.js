import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import RadioButton from './RadioButton'

const EnvironmentSetting = (props) => {

  const {name, unit, numFrom, numTo} = props

  const [show, setShow] = React.useState(false)

  const PROP = [
	{
		key: 'automatic',
		text: 'Automatic',
	},
	{
		key: 'customize',
		text: 'Customize',
  },
];
  const [from, setFrom] = React.useState(numFrom)

  const [to, setTo] = React.useState(numTo)
  
  return (
    <>
        <TouchableOpacity style={ styles.settingheader } onPress={() => setShow(!show)}>
            {
                show ?
                <>
                    <Text style={ styles.textheader }>{name}</Text>
                    <Icon name={'chevron-up'} style={{ fontSize: 20, padding: 10 }}></Icon>
                </>
                :
                <>
                    <Text style={ styles.textheader }>{name}</Text>
                    <Icon name={'chevron-down'} style={{ fontSize: 20, padding: 10 }}></Icon>
                </>
            }
        </TouchableOpacity>
        <View style={ styles.settingele }>
            {
                show ?
                <>
                    <Text style={ styles.textele }>Option</Text>
                    <View style={ styles.container }>
                        <RadioButton PROP={PROP} />
                    </View>
                    <View style={{flexDirection:'row', marginBottom:10}}>
                        <Text style={ styles.textele }>From: </Text>
                        <TextInput style={ styles.inputbutton } value={from} onChangeText={setFrom} keyboardType="numeric"/>
                        <Text style={ styles.textele }>{unit}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={ styles.textele }>To: </Text>
                        <TextInput style={ styles.inputbutton } value={to} onChangeText={setTo} keyboardType="numeric"/>
                        <Text style={ styles.textele }>{unit}</Text>
                    </View>
                </>
                : null
            }
        </View>
    </>
  )
}

export default EnvironmentSetting

const styles = StyleSheet.create({
    settingheader: {
        width: 320, 
        borderColor: 'rgba(0, 0, 0, 0.5)', 
        borderBottomWidth: 1, 
        flexDirection: 'row', 
        marginVertical: 10,
    },
    textheader: {
        width: 290, 
        color: '#000', 
        fontSize: 20, 
        fontWeight: '700', 
        fontFamily: 'Inria Serif'
    },
    settingele: {
        width: 280,
        flexDirection: 'column',
    },
    textele: {
        width: 80, 
        color: '#000', 
        fontSize: 20, 
        fontWeight: '500', 
        fontFamily: 'Inria Serif'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputbutton: {
		height: 25,
		width: 75,
        marginRight: 10,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#000',
        paddingVertical:0,
        fontSize: 16, 
        fontWeight: '300', 
        fontFamily: 'Inria Serif',
        textAlign: 'center'
	},
})