import React from 'react';
import TodoItem from './TodoItem.js';
import PropTypes from 'prop-types';
import "../index.css";
function TodoList(props){
    const { todos, toggleTodo} = props; 
   
    return(
        <ul className="todoList-wrap">
            {todos.map((v)=><TodoItem key={v.id} content = {v} toggleTodo ={toggleTodo}></TodoItem>)}
        </ul>
    )
}

TodoList.propTypes  = {
    todos:PropTypes.arrayOf(PropTypes.shape({
        text : PropTypes.string.isRequired,
        id : PropTypes.number.isRequired,
        completed : PropTypes.bool.isRequired
    })).isRequired,
    toggleTodo : PropTypes.func.isRequired
}
export default TodoList;