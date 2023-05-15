import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScheduledForm } from './ScheduledForm'
import config from '../../config/config'

const ScheduledTime = (props) => {

  let popupRef = React.createRef()
  
  const {id, hour, minute, repeat, temp, on } = props

  const [isEnabled, setIsEnabled] = React.useState(on)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  const onShowPopup = () => {
    popupRef.show()
  }

  const onClosePopup = () => {
    popupRef.close()
    setConst();
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

  const [num, setNum] = React.useState(temp)

  const [rep, setRep] = React.useState(repeat)

  const setConst = () => {
    setH(hour)
    setM(minute)
    setNum(temp)
    setRep(repeat)
  }
  
  return (
    <>
      <TouchableOpacity style={ styles.timeContainer } onPress={onShowPopup}>
        <View style={ styles.characterContainer }>
          <Text style={ isEnabled ? styles.enableTimeText : styles.inEnableTimeText }>{`${hour}:${minute}`}</Text>
          <Text style={ isEnabled ? styles.enableCharText : styles.inEnableCharText }>{`${repeat}, reach ${temp} °C`}</Text>
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
        title={'fan'}
        ref={(target) => popupRef = target}
        onTouchOutside={onClosePopup}
        prop={PROP}
        id={id}
        hour={h}
        setHour={setH}
        minute={m}
        setMinute={setM}
        num={num}
        setNum={setNum}
        repeat={rep}
        setRepeat={setRep}
        setConst={setConst}
        update={true}
      />
    </>
  )
}

export default ScheduledTime

const styles = StyleSheet.create({
    timeContainer: {
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
    enableTimeText: {
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
    inEnableTimeText: {
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