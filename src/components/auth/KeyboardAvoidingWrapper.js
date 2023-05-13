import { View, Text, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React from 'react'

const KeyboardAvoidingWrapper = ({children}) => {
  return (
    <KeyboardAvoidingView style={{flex: 1, width: '100%'}}>
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingWrapper