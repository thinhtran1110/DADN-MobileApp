import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScheduledForm } from './ScheduledForm'
import config from '../../config/config'

const ScheduledIrrigate = (props) => {

  let popupRef = React.createRef()
  
  const {hour, minute, repeat, smt, on } = props

  const [isEnabled, setIsEnabled] = React.useState(on)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onShowPopup = () => {
    popupRef.show()
  }

  const onClosePopup = () => {
    popupRef.close()
  }

  const PROP = [
    {
        key: 'Once',
        text: 'Once',
    },
    {
        key: 'Daily',
        text: 'Daily',
    },
  ];

  const [h, setH] = React.useState(hour)

  const [m, setM] = React.useState(minute)

  const [num, setNum] = React.useState(smt)

  const [rep, setRep] = React.useState(repeat)
  
  return (
    <>
      <TouchableOpacity style={ styles.irrigateContainer }  onPress={onShowPopup}>
        <View style={ styles.characterContainer }>
          <Text style={ isEnabled ? styles.enableIrrigateText : styles.inEnableIrrigateText }>{`${h}:${m}`}</Text>
          <Text style={ isEnabled ? styles.enableCharText : styles.inEnableCharText }>{`${rep}, reach ${num} %`}</Text>
        </View>
        <Switch
          trackColor={{false: '#ffffff', true: '#ffffff'}}
          thumbColor={isEnabled ? '#000000' : '#8C8C8C'}
          ios_backgroundColor="#red"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </TouchableOpacity>
      <ScheduledForm
        title={'pump'}
        ref={(target) => popupRef = target}
        onTouchOutside={onClosePopup}
        prop={PROP}
        hour={h}
        setHour={(g) => setH(g)}
        minute={m}
        setMinute={(p) => setM(p)}
        num={num}
        setNum={(n) => setNum(n)}
        repeat={rep}
        setRepeat={(r) => setRep(r)}
      />
    </>
    
  )
}

export default ScheduledIrrigate

const styles = StyleSheet.create({
    irrigateContainer: {
      flexDirection: 'row',
      width: config.deviceWidth*0.8,
      height: 50,
      marginHorizontal: 20,
      marginBottom: 20
    },
    characterContainer: {
      flex: 1,
      flexDirection: 'column'
    },
    enableIrrigateText: {
      marginLeft: 10,
      color: '#000', 
      fontSize: 24, 
      fontWeight: '300', 
      fontFamily: 'Inria Serif'
    },
    enableCharText: {
      marginLeft: 10,
      color: '#000', 
      fontSize: 16, 
      fontWeight: '300', 
      fontFamily: 'Inria Serif'
    },
    inEnableIrrigateText: {
      marginLeft: 10,
      color: '#8C8C8C', 
      fontSize: 24, 
      fontWeight: '300', 
      fontFamily: 'Inria Serif'
    },
    inEnableCharText: {
      marginLeft: 10,
      color: '#8C8C8C', 
      fontSize: 16, 
      fontWeight: '300', 
      fontFamily: 'Inria Serif'
    }
})