import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import GeneralFrame from '../components/common/GeneralFrame'
// import Slider from '@react-native-community/slider'
import { Slider } from 'react-native-elements'
import ScheduledTime from '../components/scheduled/ScheduledTime'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ScheduledFanViewModel from '../ViewModel/ScheduledFanViewModel'
import { LoadingContext } from '../App'
import config from '../config/config'

const ScheduledFan = ({route}) => {

  const { name, groupKey } = route.params

  const [isActive, setIsActive] = React.useState(true)
  
  const {
    speed,
    setSpeed,
    postSpeed
  } = ScheduledFanViewModel(groupKey)

  const { isLoading, setIsLoading } = useContext(LoadingContext)

  return (
    <GeneralFrame screenTitle={`Your Setting \\ ${name}`}>
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
              
            <TouchableOpacity style={[{ borderTopWidth: 1, borderBottomWidth: 1, borderLeftWidth: 0.5, borderRightWidth: 1 }, (!isActive ? styles.activeButton : styles.inActiveButton)]} onPress={() => setIsActive(false)}>
              <Text style={ styles.buttonText }>Automatic</Text>
            </TouchableOpacity>
          </View>

          {
            isActive ?
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

              <ScheduledTime hour='12' minute='00' repeat='Once' temp='22' on={true}/>
              <ScheduledTime hour='6' minute='00' repeat='Daily' temp='20' on={false}/>
              <ScheduledTime hour='12' minute='00' repeat='Once' temp='22' on={true}/>
            </>
            : <></>
          }
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