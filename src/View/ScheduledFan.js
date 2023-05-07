import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import GeneralFrame from '../components/GeneralFrame'
import { Slider } from 'react-native-elements'
import ScheduledTime from '../components/ScheduledTime'
import Icon from 'react-native-vector-icons/FontAwesome5'

const ScheduledFan = () => {

  const [isActive, setIsActive] = React.useState(true)

  return (
    <GeneralFrame screenTitle={'Your Setting'}>
      <>
        <View style={ styles.container }>
          <View style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
              paddingHorizontal: 50,
              marginVertical: 15
          }}>
            <TouchableOpacity style={[{ borderWidth: 1 } ,(isActive ? styles.activeButton : styles.inActiveButton)]} onPress={() => setIsActive(true)}>
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
                <Text style={ styles.textHeader }>Fan</Text>
                <Slider
                style={{width: 250, height: 10}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
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
              <ScheduledTime hour='6' minute='00' repeat='Daily' temp='' on={false}/>
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
      fontSize: 20, 
      padding: 5,
  },
  textHeader: {
      width: 100, 
      color: '#000', 
      fontSize: 20, 
      fontWeight: '700', 
      fontFamily: 'Inria Serif'
  }
})