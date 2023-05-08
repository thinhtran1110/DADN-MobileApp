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

  const [value, setValue] = React.useState('customize')
  
  return (
    <>
        <TouchableOpacity style={ styles.settingHeader } onPress={() => setShow(!show)}>
            {
                show ?
                <>
                    <Text style={ styles.textHeader }>{name}</Text>
                    <Icon name={'chevron-up'} style={{ fontSize: 20, padding: 10 }}></Icon>
                </>
                :
                <>
                    <Text style={ styles.textHeader }>{name}</Text>
                    <Icon name={'chevron-down'} style={{ fontSize: 20, padding: 10 }}></Icon>
                </>
            }
        </TouchableOpacity>
        <View style={ styles.settingEle }>
            {
                show ?
                <>
                    <Text style={ styles.textEle }>Option</Text>
                    <View style={ styles.container }>
                        <RadioButton PROP={PROP} val={value} setVal={setValue} />
                    </View>
                    <View style={{flexDirection:'row', marginBottom:10}}>
                        <Text style={ styles.textEle }>From: </Text>
                        <TextInput style={ styles.inputButton } value={from} onChangeText={setFrom} keyboardType="numeric"/>
                        <Text style={ styles.textEle }>{unit}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={ styles.textEle }>To: </Text>
                        <TextInput style={ styles.inputButton } value={to} onChangeText={setTo} keyboardType="numeric"/>
                        <Text style={ styles.textEle }>{unit}</Text>
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
    settingHeader: {
        width: 320, 
        borderColor: 'rgba(0, 0, 0, 0.5)', 
        borderBottomWidth: 1, 
        flexDirection: 'row', 
        marginVertical: 10,
    },
    textHeader: {
        width: 290, 
        color: '#000', 
        fontSize: 20, 
        fontWeight: '700', 
        fontFamily: 'Inria Serif'
    },
    settingEle: {
        width: 280,
        flexDirection: 'column'
    },
    textEle: {
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
    inputButton: {
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