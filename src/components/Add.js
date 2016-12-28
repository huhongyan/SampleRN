import React, { PropTypes, Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Util from '../tool/Util';

export default class Add extends Component {
	static propTypes = {
		placeholder: PropTypes.string,
		onEnter: PropTypes.func.isRequired
	};

	render() {
		return (
			<View style={styles.filedContainer}>
				<Text style={styles.filedIcon}>»</Text>
				<TextInput
					style={styles.filedText}
					onSubmitEditing={(event) => {
						this.props.onEnter(event.nativeEvent.text);
						event.nativeEvent.text = ''
					}}
					placeholder={this.props.placeholder || 'abc'}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	filedContainer: {
		height: 52,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderBottomWidth: 1, borderBottomColor:"#ccc",
		backgroundColor: '#f3f3f3'
	},
	filedIcon: {
		width: 50,
		fontSize: 24 * Util.size.width / 375,
		color: '#d9d9d9',
		alignSelf: 'center',
		textAlign: 'center'
	},
	filedText: {
		flex: 1,
		paddingLeft: 15,
		fontSize: 14 * Util.size.width / 375,
	}
});