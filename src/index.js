import React from 'react';
import { Image, StyleSheet } from 'react-native';

import AddTodo from './containers/AddTodo'
import VisibleTodoList  from './containers/VisibleTodoList'
import Tabs from './components/Tabs'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers/todo'

import Util from './tool/Util';

let store = createStore(todoApp)

export default class SimpleApp extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Image
					style={styles.container}
					source={require('./image/bg.png')}
				>
					<Tabs/>
					<AddTodo/>
					<VisibleTodoList/>
				</Image>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: Util.size.width,
		resizeMode: 'stretch'
	}
});