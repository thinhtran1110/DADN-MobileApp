import { Modal, Dimensions, TouchableWithoutFeedback, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import React from 'react'
import RadioButton from '../common/RadioButton'
import { Slider } from 'react-native-elements'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export class ScheduledForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    show = () => {
        this.setState({show: true})
    }

    close = () => {
        this.setState({show: false})
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{flex: 1, width: '100%'}}/>
        if (!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{flex: 1, width: '100%'}}>
                {view}
            </TouchableWithoutFeedback>
        )
    }
    
    render() {
        let {show} = this.state

        const {onTouchOutside, title, prop, hour, setHour, minute, setMinute, num, setNum, repeat, setRepeat} = this.props

        return (
            <Modal animationType={'fade'} transparent={true} visible={show} onRequestClose={this.close}>
                <View style={{flex: 1, backgroundColor: '#000000AA', justifyContent:'flex-end' }}>
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor: '#FFFFFF', 
                        width: '100%', 
                        borderTopRightRadius: 10, 
                        borderTopLeftRadius: 10, 
                        paddingHorizontal: 10,
                        height: deviceHeight*0.67,
                        alignItems: 'center'
                    }}>
                        <View style={ styles.container }>
                            <View style={ styles.header }>
                                <TouchableOpacity style={{width: 50, height: 50}} onPress={this.close}>
                                    <Icon name='times' style={{ fontSize: 20, padding: 10, color: 'black'}}/>
                                </TouchableOpacity>
                                <View style={{width: deviceWidth*0.73, alignItems: 'center'}}>
                                    <Text style={ styles.headerText }>{`Set ${title} on time`}</Text>
                                </View>
                                <TouchableOpacity style={{width: 50, height: 50}} onPress={this.close}>
                                    <Icon name='check' style={{ fontSize: 20, padding: 10, color: 'black'}}/>
                                </TouchableOpacity>
                            </View>
                            <View style={ styles.settingEle }>
                                <View style={{flexDirection:'row', marginBottom:10}}>
                                    <Text style={ styles.textEle }>Time: </Text>
                                    <TextInput style={ styles.inputButton } value={hour} onChangeText={(value) => setHour(value)} keyboardType="numeric"/>
                                    <Text style={ styles.textTime }>h :</Text>
                                    <TextInput style={ styles.inputButton } value={minute} onChangeText={(value) => setMinute(value)} keyboardType="numeric"/>
                                    <Text style={ styles.textTime }>m</Text>
                                </View>
                                <View style={{flexDirection:'row', marginBottom:10}}>
                                    <Text style={ styles.textEle }>Reach: </Text>
                                    <TextInput style={ styles.inputButton } value={num} onChangeText={(value) => setNum(value)} keyboardType="numeric"/>
                                    {
                                        title==='fan' ?
                                        <Text style={ styles.textUnit }>°C</Text>
                                        : <Text style={ styles.textUnit }>% soil moisture</Text>
                                    }
                                </View>
                                {
                                    title==='fan' ?
                                    <View style={{flexDirection:'row', alignItems:'center', marginBottom:10}}>
                                        <Text style={ styles.textEle }>{`Speed: `}</Text>
                                        <Slider
                                            style={{width: 250, height: 10}}
                                            minimumValue={0}
                                            maximumValue={1}
                                            minimumTrackTintColor="#8C8C8C"
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
                                            value={0}
                                            step={0.1}
                                        />
                                    </View>
                                    : <></>
                                }
                                <Text style={ styles.textEle }>Repeat</Text>
                                <View style={ styles.option }>
                                    <RadioButton PROP={prop} val={repeat} setVal={(v) => setRepeat(v)}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        color: '#000', 
        fontSize: 24, 
        padding: 5,
    },
    settingEle: {
        width: deviceWidth*0.73,
        flexDirection: 'column',
    },
    textTime: {
        width: 25, 
        color: '#000', 
        fontSize: 20, 
        fontWeight: '500', 
        fontFamily: 'Inria Serif'
    },
    textUnit: {
        width: 150, 
        color: '#000', 
        fontSize: 20, 
        fontWeight: '500', 
        fontFamily: 'Inria Serif'
    },
    textEle: {
        width: 80, 
        color: '#000', 
        fontSize: 20, 
        fontWeight: '500', 
        fontFamily: 'Inria Serif'
    },
    option: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputButton: {
		height: 25,
		width: 75,
        marginRight: 5,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#000',
        paddingVertical:0,
        color: '#000',
        fontSize: 16, 
        fontWeight: '300', 
        fontFamily: 'Inria Serif',
        textAlign: 'center'
	},
})