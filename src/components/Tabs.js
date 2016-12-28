import React, { PropTypes, Component } from 'react';
import { View, StyleSheet } from 'react-native';
import FilterLink from '../containers/FilterLink'
import Util from '../tool/Util'

export default class FilterTabs extends Component {
	render(){
		return (
			<View style={styles.filterContainer}>
				<FilterLink filter="SHOW_ALL">
					All
				</FilterLink>
				<FilterLink filter="SHOW_ACTIVE">
					Active
				</FilterLink>
				<FilterLink filter="SHOW_COMPLETED">
					Completed
				</FilterLink>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	filterContainer: {
		width: Util.size.width,
		height: 40,
		flexDirection: 'row',
		borderBottomColor: '#6c615c', borderBottomWidth: 1
	}
});