import React from 'react';
import TodoItem from './TodoItem.js';
import "../index.css";
function TodoList(props){
    const { todos } = props; 
    return(
        <ul className="todoList-wrap">
            {todos.map((v)=><TodoItem key={v.id} content = {v}></TodoItem>)}
        </ul>
    )
}
export default TodoList;