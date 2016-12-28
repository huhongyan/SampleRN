import React, { PropTypes, Component } from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import Todo from './Todo'
import Util from '../tool/Util';


export default class TodoList extends Component {
	static propTypes = {
		todos: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired).isRequired,
		onTodoClick: PropTypes.func.isRequired,
		onTodoDel: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this._dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
	}

	render(){
		const _ds = this._dataSource.cloneWithRows(this.props.todos);

		return (
			<View style={styles.listContainer}>
				<View>
					<ListView
						dataSource={_ds}
						enableEmptySections={true}
						renderRow={(rowData) =>
							<Todo completed={rowData.completed}
										text={rowData.text}
										onClick={()=>this.props.onTodoClick(rowData.id)}
										onDelete={()=>this.props.onTodoDel(rowData.id)}
							></Todo>}
					/>
					<View style={styles.line}></View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		width: Util.size.width
	},
	line: {
		width: 4,
		borderRightWidth: 1, borderRightColor: '#f5d6d6',
		borderLeftColor: '#f5d6d6', borderLeftWidth: 1,
		position: 'absolute',
		top: -52,
		bottom: 0,
		left: 50
	}
});