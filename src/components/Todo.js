import React, { PropTypes, Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, TouchableOpacity } from 'react-native';
import Util from '../tool/Util';


export default class Todo extends Component {
	static propTypes = {
		onClick: PropTypes.func.isRequired,
		onDelete: PropTypes.func.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	};

	render(){
		let completeIcondStyle, completedTextStyle;
		if(this.props.completed){
			completeIcondStyle = {color: '#85ada7'};
			completedTextStyle = {textDecorationLine: 'line-through', color: '#a9a9a9'}
		}

		return(
			<View style={ styles.listItem }>
				<TouchableOpacity activeOpacity={1} style={styles.itemWrap} onPress={this.props.onClick}>
					<Text style={[styles.itemIcon, completeIcondStyle]}>✔</Text>
					<Text style={[styles.itemCont, completedTextStyle]}>{this.props.text}</Text>
				</TouchableOpacity>
				<TouchableHighlight style={ styles.itemBtn } onPress={this.props.onDelete}>
					<Text style={{color: '#a88a8a'}}>✖</Text>
				</TouchableHighlight>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	listItem: {
		flex: 1,
		height: 50,
		flexDirection: 'row',
		borderBottomWidth: 1, borderBottomColor:"#ccc",
		backgroundColor: '#fff'
	},
	itemWrap: {
		flex: 1,
		flexDirection: 'row',
	},
	itemIcon: {
		width: 50,
		alignSelf: 'center',
		textAlign: 'center',
		color: '#d9d9d9',
		fontSize: 14 * Util.size.width / 375
	},
	itemCont: {
		flex: 1,
		paddingLeft: 15,
		alignSelf: 'center',
		fontSize: 14 * Util.size.width / 375
	},
	itemBtn: {
		width: 40,
		justifyContent: 'center',
		alignItems: 'center'
	}
});