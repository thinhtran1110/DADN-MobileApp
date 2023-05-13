import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import RadioButton from '../common/RadioButton'
import config from '../../config/config'

const EnvironmentSetting = (props) => {

  const {name, unit, numFrom, numTo, option, update} = props

  const [show, setShow] = React.useState(false)

  const PROP = [
	{
		key: 'Automatic',
		text: 'Automatic',
	},
	{
		key: 'Customize',
		text: 'Customize',
    },
  ];

  const [ save, setSave ] = React.useState(false)
  
  const [ from, setFrom ] = React.useState(numFrom)

  const [ to, setTo ] = React.useState(numTo)

  const [ op, setOp ] = React.useState(option)
  
  const checkStateCondition = (beforeFrom, beforeTo, beforeOp, afterFrom, afterTo, afterOption) => {
    if (beforeFrom != afterFrom) {
      setSave(true);
      return;
    }
    if (beforeTo != afterTo) {
      setSave(true);
      return;
    }
    if (beforeOp != afterOption) {
      setSave(true);
      return;
    }
    setSave(false);
  }
  
  return (
    <>
        <TouchableOpacity style={ styles.settingHeader } onPress={() => setShow(!show)}>
            {
                show ?
                <>
                    <Text style={ styles.textHeader }>{name}</Text>
                    <Icon name={'chevron-up'} style={{ fontSize: 20, padding: 10, color:'#000' }}></Icon>
                </>
                :
                <>
                    <Text style={ styles.textHeader }>{name}</Text>
                    <Icon name={'chevron-down'} style={{ fontSize: 20, padding: 10, color:'#000' }}></Icon>
                </>
            }
        </TouchableOpacity>
        <View style={ styles.settingEle }>
            {
                show ?
                <>
                    <TouchableOpacity
                        style={{ alignItems:'flex-end' }}
                        disabled={save? false : true}
                        onPress={() => {
                            setSave(false);
                            update(name, op, from, to);
                        }}
                    >
                        <Text style={ [save? styles.changeSave : styles.notChangeSave, {marginRight: 20}] }>Save</Text>
                    </TouchableOpacity>
                    
                    <Text style={ styles.textEle }>Option</Text>
                    <View style={ styles.container }>
                        <RadioButton
                            PROP={PROP}
                            val={op}
                            setVal={(val) => {
                                setOp(val);
                                checkStateCondition(numFrom, numTo, option, from, to, val);
                            }}
                        />
                    </View>
                    <View style={{flexDirection:'row', marginBottom:10}}>
                        <Text style={ styles.textEle }>From: </Text>
                        <TextInput
                            style={ styles.inputButton }
                            value={String(from)}
                            onChangeText={(value) => {
                                setFrom(Number(value));
                                checkStateCondition(numFrom, numTo, option, Number(value), to, op);
                            }}
                            editable={op=="Customize"? true : false}
                            keyboardType="numeric"
                        />
                        <Text style={ styles.textEle }>{unit}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={ styles.textEle }>To: </Text>
                        <TextInput
                            style={ styles.inputButton }
                            value={String(to)}
                            onChangeText={(value) => {
                                setTo(Number(value));
                                checkStateCondition(numFrom, numTo, option, from, Number(value), op);
                            }}
                            editable={op=="Customize"? true : false}
                            keyboardType="numeric"
                        />
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
        width: config.deviceWidth*0.8, 
        borderColor: 'rgba(0, 0, 0, 0.5)', 
        borderBottomWidth: 1, 
        flexDirection: 'row', 
        marginVertical: 10,
    },
    textHeader: {
        width: config.deviceWidth*0.7, 
        color: '#000', 
        fontSize: 20, 
        fontWeight: '700', 
        fontFamily: 'Inria Serif'
    },
    settingEle: {
        width: config.deviceWidth*0.68,
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
        paddingVertical: 0,
        color: '#000',
        fontSize: 16, 
        fontWeight: '300', 
        fontFamily: 'Inria Serif',
        textAlign: 'center'
	},
    changeSave: {
      backgroundColor: '#1300EC',
      textAlign: 'center',
      width: 80,
      height: 30,
      borderRadius: 5,
      borderWidth: 1,
      color: '#000',
      fontSize: 20,
      fontWeight: '700',
      fontFamily: 'Inria Serif'
    },
    notChangeSave: {
      backgroundColor: '#C0C6FD',
      textAlign: 'center',
      width: 80,
      height: 30,
      borderRadius: 5,
      borderWidth: 1,
      color: '#636363',
      fontSize: 20,
      fontWeight: '700',
      fontFamily: 'Inria Serif'
    }
})