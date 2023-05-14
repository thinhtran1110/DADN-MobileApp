import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HistoryText = (props) => {


    const {time, date, over, mode, value , condition} = props

return(
    <>
        <View style={ styles.notiContainer }>
            <View style={ styles.dateTimeContainer}>
                <Text style={ styles.timeText}>{`${time}`}</Text>
                <Text style={ styles.dateText}>{`${date}`}</Text>
            </View>
            <View style={ styles.middleContainer}>
                <Text style={ styles.middleText}>{`Modify ${condition} setting`}</Text>
            </View>
        </View>
    </>
    )
}

export default HistoryText

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
    middleText:{
        color: '#000',
        fontSize: 16, 
        fontWeight: '500', 
        fontFamily: 'Inria Serif',
        paddingTop: 10
    }
})