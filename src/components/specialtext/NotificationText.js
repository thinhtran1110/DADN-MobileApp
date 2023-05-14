import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import config from '../../config/config'

const NotificationText = (props) => {


    const {time, date, over, mode, value , condition} = props

return(
    <>
        <View style={ styles.notiContainer }>
            <View style={ styles.dateTimeContainer}>
                <Text style={ styles.timeText}>{`${time}`}</Text>
                <Text style={ styles.dateText}>{`${date}`}</Text>
            </View>
            <View style={ styles.middleContainer}>
                <Text style={ styles.overText}>{`The ${condition} is ${over}`}</Text>
                <Text style={ styles.modeText}>{`${mode} turn on`}</Text>
            </View>
            <Text style={ styles.valueText}>{`${value}`}</Text>
        </View>
    </>
    )
}

export default NotificationText

const styles = StyleSheet.create({
    notiContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginVertical: 15
    },
    dateTimeContainer: {
        flex : 1,
        flexDirection: 'column'
    },
    middleContainer: {
        flex : 2,
        flexDirection: 'column'
    },
    timeText: {
        color: '#000',
        fontSize: 20, 
        fontWeight: '700', 
        fontFamily: 'Inria Serif',
    },
    dateText:{
        color: '#000',
        fontSize: 12, 
        fontWeight: '300', 
        fontFamily: 'Inria Serif'
    },
    overText:{
        color: '#000',
        fontSize: 14, 
        fontWeight: '300', 
        fontFamily: 'Inria Serif'
    },
    modeText:{
        color: '#000',
        fontSize: 14, 
        fontWeight: '300', 
        fontFamily: 'Inria Serif'
    },
    valueText:{
        flex: 1,
        color: '#000', 
        fontSize: 30, 
        fontWeight: '600', 
        fontFamily: 'Inria Serif'
    }
})