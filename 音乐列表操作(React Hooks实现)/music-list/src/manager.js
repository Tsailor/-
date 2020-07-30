import React, { useContext, useState} from "react";
import  MusicListContext from "./musicListContext.js"
import "./index.css"
function Manager(){
    const { hanldeInputItems,handleChooseAllItems,handleRemoveAllItems } =  useContext(MusicListContext);

    const [isCheckedAll, setIsCheckedAll ] = useState(false);  // 全选：默认false
    const [inputInfo, setInputInfo ] = useState("");

  
    let handleInput = (e) =>{
        let value = e.target.value;
        setInputInfo(value);
    }
    let handleAdd = ()=>{
        if(inputInfo) { 
            hanldeInputItems(inputInfo);
            setInputInfo("");
        };
        
    }
    
    
    let handleChooseAll = (e) =>{
        let checked = e.target.checked;
        setIsCheckedAll(checked)
        handleChooseAllItems(checked)
    }
    let handleRemoveAll =()=>{
        handleRemoveAllItems();
        setIsCheckedAll(false)
    }
    return(
        <div className="footer">
            <input type="checkbox" name="chooseAll" className="checkbox" 
                checked={isCheckedAll} onChange={handleChooseAll}/>
            <span >全选/全不选</span>
            <span className="span-content" onClick={handleRemoveAll }>删除</span>
            <input type="text" name="input"  autoComplete="off"
                value = {inputInfo } onChange={handleInput }></input>
            <span className="span-content" onClick={handleAdd } >添加</span>
        </div>
       
    )
}

export default Manager;
