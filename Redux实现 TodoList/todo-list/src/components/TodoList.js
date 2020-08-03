import React from 'react';
import TodoItem from './TodoItem.js';
import "../index.css";
function TodoList(props){
    const { todos, toggleTodo} = props; 
   
    return(
        <ul className="todoList-wrap">
            {todos.map((v)=><TodoItem key={v.id} content = {v} toggleTodo ={toggleTodo}></TodoItem>)}
        </ul>
    )
}
export default TodoList;