import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import GeneralFrame from '../components/common/GeneralFrame'
import Icon from 'react-native-vector-icons/AntDesign'
import ScheduledIrrigate from '../components/scheduled/ScheduledIrrigate'
import ScheduledPumpViewModel from '../ViewModel/ScheduledPumpViewModel'
import config from '../config/config'
import { useFocusEffect } from '@react-navigation/native'

const ScheduledPump = ({route}) => {

  const { name, groupKey } = route.params

  const {
    onPump,
    offPump,
    scheduledTimeFrame,
    mode,
    updateMode,
    refreshScreen,
    onRefresh
  } = ScheduledPumpViewModel("Pump", groupKey)

  const [on, setOn] = React.useState(false)

  useFocusEffect(
    useCallback(() => {
      return refreshScreen();
    },[])
  );

  return (
    <GeneralFrame screenTitle={`Your Setting \\ ${name}`} onPress={onRefresh}>
      <>
        <View style={ styles.container }>
          <View style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            paddingHorizontal: 50,
            marginVertical: 15
          }}>
            <TouchableOpacity
              style={[{ borderTopWidth: 1, borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 0.5 },
                (mode ? styles.activeButton : styles.inActiveButton)]}
              onPress={() => {
                updateMode("Customize");
              }}>
              <Text style={ styles.buttonText }>Customize</Text>
            </TouchableOpacity>
              
            <TouchableOpacity
              style={[{ borderTopWidth: 1, borderBottomWidth: 1, borderLeftWidth: 0.5, borderRightWidth: 1 },
                (!mode ? styles.activeButton : styles.inActiveButton)]}
              onPress={() => {
                updateMode("Automatic");
              }}>
              <Text style={ styles.buttonText }>Automatic</Text>
            </TouchableOpacity>
          </View>

          {
            mode ?
            <>
              <View style={{
                flexDirection: 'row',
                width: config.deviceWidth*0.8,
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

              {
                scheduledTimeFrame?.map((ele) => {
                  return <ScheduledIrrigate key={ele.id} hour={ele.hour} minute={ele.minute} repeat={ele.repeat} smt={ele.limit} on={true} />
                })
              }
            </>
            : <></>
          }
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', flex: 1}}>
          <TouchableOpacity style={{paddingLeft: 20, paddingBottom: 20}}>
            <Icon name={'pluscircleo'} color="#000" size={40}/>
          </TouchableOpacity>
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
    fontSize: 18, 
    padding: 5,
  },
  textHeader: {
    width: config.deviceWidth*0.5, 
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