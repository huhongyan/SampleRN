import React, { PropTypes, Component } from 'react';
import { TouchableOpacity,Text, StyleSheet } from 'react-native';

export default class Link extends Component {
	static propTypes = {
		active: PropTypes.bool.isRequired,
		children: PropTypes.node.isRequired,
		onClick: PropTypes.func.isRequired
	};

	render(){
		if (this.props.active) {
			return <Text style={[styles.linkItem,
				{flex: 1, fontWeight: 'bold', backgroundColor: '#fff', }]}>{this.props.children}</Text>
		}

		return(
			<TouchableOpacity style={{flex: 1}} onPress={this.props.onClick}>
				<Text style={styles.linkItem}>{this.props.children}</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	linkItem: {
		justifyContent: 'center',
		alignItems: 'center',
		color: '#83756f',
		lineHeight: 30,
		textAlign: 'center'
	}
});