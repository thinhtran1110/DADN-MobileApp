import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native'
import React from 'react'
import GeneralFrame from '../components/GeneralFrame'
import ScheduledIrrigate from '../components/ScheduledIrrigate'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ScheduledPumpViewModel from '../ViewModel/ScheduledPumpViewModel'

const ScheduledPump = ({route}) => {

  const { name, groupKey } = route.params

  const [isActive, setIsActive] = React.useState(true)

  const [isEnabled, setIsEnabled] = React.useState(true)

  const [on, setOn] = React.useState(false)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  const {
    onPump,
    offPump
  } = ScheduledPumpViewModel(groupKey)

  return (
    <GeneralFrame screenTitle={`Your Setting\\${name}`}>
      <>
        <View style={ styles.container }>
          <View style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
              paddingHorizontal: 50,
              marginVertical: 15
          }}>
            <TouchableOpacity style={[{ borderTopWidth: 1, borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 0.5 } ,(isActive ? styles.activeButton : styles.inActiveButton)]} onPress={() => setIsActive(true)}>
              <Text style={ styles.buttonText }>Customize</Text>
            </TouchableOpacity>
              
            <TouchableOpacity style={[{ borderWidth: 1 }, (!isActive ? styles.activeButton : styles.inActiveButton)]} onPress={() => setIsActive(false)}>
              <Text style={ styles.buttonText }>Automatic</Text>
            </TouchableOpacity>
          </View>

          {
            isActive ?
            <>
              <View style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 50,
                marginVertical: 15
              }}>
                <Text style={ styles.textHeader }>Pump</Text>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                  <TouchableOpacity
                    style={[{ width: 50, height: 30, borderTopWidth: 1, borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 0.5 },
                      (on ? styles.activeButton : styles.inActiveButton)
                    ]}
                    onPress={() => {
                      setOn(true);
                      onPump();
                    }}>
                    <Text style={ styles.pumpText }>On</Text>
                  </TouchableOpacity>
                    
                  <TouchableOpacity
                  style={[{ width: 50, height: 30, borderTopWidth: 1, borderBottomWidth: 1, borderLeftWidth: 0.5, borderRightWidth: 1},
                    (!on ? styles.activeButton : styles.inActiveButton)
                  ]}
                  onPress={() => {
                    setOn(false);
                    offPump();
                  }}>
                    <Text style={ styles.pumpText }>Off</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <ScheduledIrrigate hour='12' minute='00' repeat='Once' num='70' on={true}/>
              <ScheduledIrrigate hour='6' minute='00' repeat='Daily' num='50' on={false}/>
              <ScheduledIrrigate hour='12' minute='00' repeat='Once' num='75' on={true}/>
            </>
            : <></>
          }
        </View>
      </>
    </GeneralFrame>
  )
}

export default ScheduledPump

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopColor:'#333',
    borderTopWidth: 0.5,
    marginTop: 15
  },
  activeButton: {
    alignItems: 'center', 
    backgroundColor: '#B7B7B7',
    justifyContent: 'center'
  },
  inActiveButton: {
      alignItems: 'center', 
      backgroundColor: '#fff',
      justifyContent: 'center'
  },
  buttonText: {
      color: '#000', 
      fontSize: 20, 
      padding: 5,
  },
  textHeader: {
      width: 250, 
      color: '#000', 
      fontSize: 20, 
      fontWeight: '700', 
      fontFamily: 'Inria Serif'
  },
  pumpText: {
      color: '#000', 
      fontSize: 16, 
      padding: 5
  }
})