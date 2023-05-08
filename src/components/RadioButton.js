import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
export default class RadioButton extends Component {
	state = {
		value: null,
	};

	getChoose = (value1) => {
		this.setState({value: value1})
	}

	render() {
		const { PROP, val, setVal } = this.props;

		let { value } = this.state;

		return (
			<View>
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.container}>
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
									setVal(res.key)
								}}>
                                  {(value === res.key || val === res.key) && <View style={styles.selectedRb} />}
							</TouchableOpacity>
							<Text style={styles.radioText}>{res.text}</Text>
						</View>
					);
				})}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'flex-start',
	},
    radioText: {
        marginLeft: 10,
        color: '#000', 
        fontSize: 18, 
        fontWeight: '300', 
        fontFamily: 'Inria Serif'
    },
	radioCircle: {
		height: 20,
		width: 20,
		backgroundColor: '#fff',
		borderRadius: 50,
		borderWidth: 2,
		borderColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: '#000',
    },
});