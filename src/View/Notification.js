import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useState }from 'react'
import GeneralFrame from '../components/common/GeneralFrame'
import config from '../config/config'
import NotificationText from '../components/specialtext/NotificationText'
const Notification = () => {


  const [isActive, setIsActive] = useState(0);
  const handleButtonPress = (index) => {
    setIsActive(index);
  }
  return (
    <GeneralFrame screenTitle={`Your Notification`}>
      <>
        <View style={ styles.container }>
          <View style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
              // paddingHorizontal: 15,
              marginVertical: 15
          }}>
            <TouchableOpacity style={[{ borderTopWidth: 1, borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 0.5 } ,(isActive == 0? styles.activeButton : styles.inActiveButton)]} onPress={() => handleButtonPress(0)}>
              <Text style={ styles.buttonText }>Temperature</Text>
            </TouchableOpacity>
              
            <TouchableOpacity style={[{ borderTopWidth: 1, borderBottomWidth: 1, borderLeftWidth: 0.5, borderRightWidth: 1 }, (isActive == 1? styles.activeButton : styles.inActiveButton)]} onPress={() => handleButtonPress(1)}>
              <Text style={ styles.buttonText }>Air Humidity</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[{ borderTopWidth: 1, borderBottomWidth: 1, borderLeftWidth: 0.5, borderRightWidth: 1 }, (isActive == 2? styles.activeButton : styles.inActiveButton)]} onPress={() => handleButtonPress(2)}>
              <Text style={ styles.buttonText }>Soil Moisture</Text>
            </TouchableOpacity>
          </View>

          {
            isActive == 0?
            <>
              <View>
                <NotificationText time='11:35' condition='temperature' date='06/04/2023' over='over' mode='Automatically' value='27°C'></NotificationText>
              </View>
            </>
            : <></>
          }
          {
            isActive == 1?
            <>
              <View>
                <NotificationText time='11:35' condition='air humid' date='12/04/2023' over='under' mode='Automatically' value='80%'></NotificationText>
              </View>
            </>
            : <></>
          }
          {
            isActive == 2?
            <>
              <View>
                <NotificationText time='11:35'condition='soil humid' date='06/10/2023' over='over' mode='Customize' value='150%'></NotificationText>
              </View>
            </>
            : <></>
          }
        </View>
      </>
    </GeneralFrame>
  )
}

export default Notification

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
    fontSize: 15, 
    padding: 5,
  },
  textHeader: {
    width: config.deviceWidth*0.5, 
    color: '#000', 
    fontSize: 20, 
    fontWeight: '700', 
    fontFamily: 'Inria Serif'
  }
})