import React from 'react'
import {
	Alert, Button, TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback
} from 'react-native'

export default class ButtonExample extends React.Component {
	onButtonPress(){
		Alert.alert('Button has been pressed!');
	}

	render() {
		return (
			<View>
				<Button
					onPress={(e)=>this.onButtonPress(e)}
					title="Button"
					color="#841584"
					accessibilityLabel="See an informative alert"
				/>
				<TouchableOpacity
					onPress={(e)=>this.onButtonPress(e)}>
					<Text style={ styles.ownBtn }>TouchableOpacity</Text>
				</TouchableOpacity>
				<TouchableNativeFeedback
					onPress={(e)=>this.onButtonPress(e)}
					background={TouchableNativeFeedback.SelectableBackground()}>
					<View style={{width: 150, height: 100, backgroundColor: 'red'}}>
						<Text style={{margin: 30}}>Button</Text>
					</View>
				</TouchableNativeFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	ownBtn: {
		color: "#841584",
		marginTop: 20,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: "#841584"
	}
});