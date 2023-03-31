import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import color from '../config/common/color'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = ({navigation}) => {
    return (
        <View style={{backgroundColor: color.mainBackground, flex: 1}}>
            <SafeAreaView style={{flex: 1}}>
                <View style={{width: '70%', marginTop: '8%', marginLeft: '3%'}}>
                    <Text style={{color: color.primaryLabel, fontWeight: '700', fontSize: 40, fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: 1}}>
                         Welcome to aimp!
                    </Text>
                    <View style={{marginTop: '10%', width: '50%'}}>
                        <Text style={{fontSize: 15, fontWeight: '400', fontFamily: 'Inria Serif', color: '#000'}}>
                            Bringing the best to your garden
                        </Text>
                    </View>
                </View>
                <View style={{backgroundColor: '#fff', width: '125%', height: '150%', borderRadius: 45, position: 'absolute', left: '60%', top: '15%', transform: [{ rotate: '-35deg'}]}}></View>
                <View style={{marginTop: '25%', alignItems: 'flex-end', justifyContent: 'space-between', height: '15%'}}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.buttonText}>
                            Already have an account?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.buttonText} >
                            Create an account?
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: color.secondaryButton,
        width: '60%',
        padding: 6,
        borderBottomWidth: 1,
        marginRight: '10%',
        borderRadius: 5
    },
    buttonText: {
        fontFamily: 'Markazi Text',
        fontWeight: '500',
        fontSize: 16,
        color: color.secondaryButtonText
    }
})

export default Home