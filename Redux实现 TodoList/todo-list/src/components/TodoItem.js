import React from 'react';
import "../index.css"
function TodoItem(props){
    const { content } = props;
    return(
         <li className="todoItem">{ content.text }</li>
    )
}
export default TodoItem;