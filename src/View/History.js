import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useState }from 'react'
import GeneralFrame from '../components/common/GeneralFrame'
import config from '../config/config'
import HistoryText from '../components/specialtext/HistoryText'
const History = () => {
  return (
    <GeneralFrame screenTitle={`Your History`}>
      <>
        <View style={ styles.container }>
          <View style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
              marginVertical: 15
          }}>
            <HistoryText time='11:35'condition='soil humid' date='06/10/2023' over='over' mode='Customize' value='150%'></HistoryText>
          </View>
        </View>
      </>
    </GeneralFrame>
  )
}

export default History

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