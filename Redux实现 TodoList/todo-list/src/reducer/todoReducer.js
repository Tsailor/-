import { combineReducers } from 'redux';
import todos from './todos.js';
import todosFilter from './todosFilter.js';
const todoReducer = combineReducers({
    todos,
    todosFilter
})
export default todoReducer;