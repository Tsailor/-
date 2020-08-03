import React from 'react';
import "../index.css"
function TodoItem(props){
    const { content, toggleTodo } = props;
    const handletoggleTodo = ()=>{
        toggleTodo(content.id)
    }
    return(
         
         <li className="todoItem todo" onClick={handletoggleTodo} style={{
            textDecoration: content.completed ? 'line-through' : 'none'
          }}>{ content.text }</li>
        
    )
}
export default TodoItem;