import React, { useContext, useState } from "react";
import { MusicListContext } from "./musicListContext.js"
import "./index.css"
function Manager(){
    const { data } =  useContext(MusicListContext);

    const [isCheckedAll, setIsCheckedAll ] = useState(false);

    function handleChooseAll(e){
        setIsCheckedAll(e.target.checked);
        console.log(isCheckedAll);
    }
    return(
        <div className="footer">
            <input type="checkbox" name="chooseAll" className="checkbox" 
                checked={isCheckedAll} onChange={handleChooseAll}/>
            <span >全选/全不选</span>
            <span className="span-content">删除</span>
            <input type="text" name="input" ></input>
            <span className="span-content" >添加</span>
        </div>
       
    )
}

export default Manager;
