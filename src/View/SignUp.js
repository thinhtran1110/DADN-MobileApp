import { View, Text, Button, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native'
import React from 'react'
import color from '../config/common/color'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextUserInput from '../components/auth/TextUserInput'
import KeyboardAvoidingWrapper from '../components/auth/KeyboardAvoidingWrapper'
import useSignUpViewModel from '../ViewModel/SignUpViewModel'
import { LoadingContext } from '../App'
const SignUp = ({navigation}) => {
  const {
    username,
    password,
    isPasswordHiding,
    confirmPassword,
    isConfirmPasswordHiding,
    apiKey,
    setConfirmPassword,
    setIsConfirmPasswordHiding,
    setApiKey,
    setUsername,
    setPassword,
    setIsPasswordHiding,
    register,
  } = useSignUpViewModel();

  const {
    isLoading,
    setIsLoading
  } = LoadingContext;
    return (
    <View style={{flex: 1, backgroundColor: color.mainBackground}}>
      <SafeAreaView style={{flex: 1, marginHorizontal: '5%'}}>
        <View style={{marginTop: '10%'}}>
            <Text style={{color: color.primaryLabel, fontFamily: 'Markazi Text', fontWeight: '700', fontSize: 30, textTransform: 'uppercase'}}>
                register
            </Text>
        </View>
        <View style={{backgroundColor: '#fff', width: '100%', height: '70%', marginTop: '10%', borderRadius: 20 , paddingHorizontal: 20, paddingVertical: 15, alignItems: 'center'}}>
            <KeyboardAvoidingWrapper>
              <TextUserInput 
                firstLogo={'user'} 
                label={'Username'} 
                placeholder={'Username'} 
                backgroundColor={color.input} 
                logoColor={'#000'} 
                onChangeText={text => setUsername(text)}
                value={username}
              />

              <TextUserInput 
                firstLogo={'lock'} 
                label={'Password'}
                placeholder={'Password'} 
                backgroundColor={color.input} 
                logoColor={'#000'} 
                secondLogo={isPasswordHiding ? 'eye' : 'eye-slash'} 
                secureTextEntry={isPasswordHiding} 
                onPressSecLogo={() => setIsPasswordHiding(prev => !prev)}
                onChangeText={(text) => setPassword(text)} 
                value={password}
              />

              <TextUserInput 
                firstLogo={'lock'} 
                label={'Confirm your password'}
                placeholder={'Confirm password'} 
                backgroundColor={color.input} 
                logoColor={'#000'} 
                secondLogo={isConfirmPasswordHiding ? 'eye' : 'eye-slash'} 
                secureTextEntry={isConfirmPasswordHiding} 
                onPressSecLogo={() => setIsConfirmPasswordHiding(prev => !prev)}
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
              />

              <TextUserInput 
                firstLogo={'key'} 
                label={'API Key is a legitimate Adafruit credential'} 
                placeholder={'API Key'} 
                backgroundColor={color.input} 
                logoColor={'#000'} 
                onChangeText={text => setApiKey(text)}
                value={apiKey}
              />
            </KeyboardAvoidingWrapper>

            <TouchableOpacity 
              style={{width: '50%', height: 50, position: 'absolute', bottom: -25}} 
              activeOpacity={0.85} 
              onPress={() => {
                setIsLoading(true);
                setTimeout(async () => {
                  await register('Garden');
                  setIsLoading(false);
                }, 0)
              }

            }>
                <View style={{width: '100%', height: '100%', backgroundColor: color.primaryButton, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: '#fff', textTransform: 'uppercase', fontFamily: 'Markazi Text', fontWeight: '400', fontSize: 15 }}>Register Now</Text>
                </View> 
            </TouchableOpacity>
            
        </View>
      </SafeAreaView>
    </View>
  )
}

export default SignUp;