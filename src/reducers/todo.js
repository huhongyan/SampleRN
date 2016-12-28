import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, DELETE_TODO, VisibilityFilters } from '../actions/todo'
const { SHOW_ALL } = VisibilityFilters;

let _index = 0;

function visibilityFilter(state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state
	}
}

function todos(state = [], action) {
	let index;
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: _index++,
					text: action.text,
					completed: false
				}
			];
		case TOGGLE_TODO:
			index = state.findIndex(({id})=>id === action.id);
			return state.map((todo, i) => {
				if (i === index) {
					return Object.assign({}, todo, {
						completed: !todo.completed
					})
				}
				return todo
			});
		case DELETE_TODO:
			index = state.findIndex(({id})=>id === action.id);
			if(index !== -1)
				return state.slice(0, index).concat(state.slice(index + 1));
			else
				return state;
		default:
			return state
	}
}

// combineReducers() 所做的只是生成一个函数，这个函数来调用你的一系列 reducer，
// 每个 reducer 根据它们的 key 来筛选出 state 中的一部分数据并处理，
// 然后这个生成的函数再将所有 reducer 的结果合并成一个大的对象
const todoApp = combineReducers({
	visibilityFilter,
	todos
});

export default todoApp