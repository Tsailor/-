import React, { useState } from 'react';
import "../index.css";
function TodoHeader(props){
    const [inputInfo, setInputInfo] = useState("")
    const handleInput = (e)=>{
        setInputInfo(e.target.value)
    }
    const { onAddTodo } = props;
    const handleAdd = ()=>{
         if(inputInfo !== "") {
             onAddTodo(inputInfo);
             setInputInfo("")
         }
    }
       
    return(
        <div className="todoHeader">
            <input className= "todoHeader-input" type = "text" value={inputInfo} onChange={handleInput} onKeyPress={handleAdd} />
            <button type="button"  className= "todoHeader-btn"
                onClick={handleAdd}
            >提交</button>
        </div>
    )
}
export default TodoHeader;