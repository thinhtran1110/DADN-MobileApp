import { StyleSheet, Text, View, Switch } from 'react-native'
import React from 'react'

const ScheduledIrrigate = (props) => {
  
  const {hour, minute, repeat, num, on } = props

  const [isEnabled, setIsEnabled] = React.useState(on)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <View style={ styles.irrigateContainer }>
      <View style={ styles.characterContainer }>
        <Text style={ isEnabled ? styles.enableIrrigateText : styles.inEnableIrrigateText }>{`${hour}:${minute}`}</Text>
        <Text style={ isEnabled ? styles.enableCharText : styles.inEnableCharText }>{`${repeat}, reach ${num} %`}</Text>
      </View>
      <Switch
        trackColor={{false: '#ffffff', true: '#ffffff'}}
        thumbColor={isEnabled ? '#000000' : '#8C8C8C'}
        ios_backgroundColor="#red"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

export default ScheduledIrrigate

const styles = StyleSheet.create({
    irrigateContainer: {
      flexDirection: 'row',
      width: 320,
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