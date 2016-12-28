import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todo'
import Add from '../components/Add'

const mapStateToProps = () => {
	return {
		placeholder: 'What needs to be done?'
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onEnter: (text) => {
			dispatch(addTodo(text))
		}
	}
}

const AddTodo = connect(
	mapStateToProps,
	mapDispatchToProps
)(Add)

export default AddTodo