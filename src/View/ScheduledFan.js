import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import GeneralFrame from '../components/common/GeneralFrame'
import { Slider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'
import ScheduledTime from '../components/scheduled/ScheduledTime'
import ScheduledFanViewModel from '../ViewModel/ScheduledFanViewModel'
import config from '../config/config'
import { useFocusEffect } from '@react-navigation/native'

const ScheduledFan = ({route}) => {

  const { name, groupKey } = route.params
  
  const {
    speed,
    setSpeed,
    postSpeed,
    mode,
    scheduledTimeFrame,
    updateMode,
    refreshScreen,
    onRefresh
  } = ScheduledFanViewModel("Fan", groupKey)

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
                <Text style={ styles.textHeader }>{`Fan: ${speed}`}</Text>
                <Slider
                style={{width:config.deviceWidth*0.5, height: 10}}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                value={speed}
                step={1}
                onValueChange={(value) => setSpeed(value)}
                onSlidingComplete={(value) => {
                  postSpeed(value);
                }}
                trackStyle={{ height: 5, backgroundColor: 'transparent' }}
                thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
                thumbProps={{
                children: (
                    <View
                    style={{width:20, height:20, borderRadius:50, backgroundColor:'#000000'}}
                    />
                    ),
                }}
                />
              </View>
              {
                scheduledTimeFrame?.map((ele) => {
                  return <ScheduledTime key={ele.id} id={ele.id} hour={ele.hour} minute={ele.minute} repeat={ele.repeat} temp={ele.limit} on={true} />
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

export default ScheduledFan

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopColor:'#333',
    borderTopWidth: 0.5,
    marginTop: 15
  },
  activeButton: {
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#B7B7B7', 

  },
  inActiveButton: {
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#fff', 
  },
  buttonText: {
    color: '#000', 
    fontSize: 18, 
    padding: 5,
  },
  textHeader: {
    width: config.deviceWidth*0.3, 
    color: '#000', 
    fontSize: 20, 
    fontWeight: '700', 
    fontFamily: 'Inria Serif'
  }
})