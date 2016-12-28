import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

export default class ToggleAnimatingActivityIndicator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			animating: true
		}
	}

	componentDidMount() {
		this.setToggleTimeout()
	}

	componentWillUnmount() {
		clearTimeout(this._timer)
	}

	setToggleTimeout() {
		this._timer = setTimeout(() => {
			this.setState({animating: !this.state.animating});
			this.setToggleTimeout()
		}, 2000)
	}

	render() {
		return (
			<ActivityIndicator
				animating={this.state.animating}
				style={[styles.centering, {height: 80}]}
				color="green"
				size="large"
			/>
		);
	}
}

const styles = StyleSheet.create({
	centering: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	}
});