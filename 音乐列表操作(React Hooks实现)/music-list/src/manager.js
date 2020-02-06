import React, { useContext, useState } from "react";
import MusicListContxt from "./musiclistContext.js"
import "./index.css"
function Manager(){
    const { data } =  useContext(MusicListContxt);

    const [isCheckedAll, setIsCheckedAll ] = useState(false);

    function handleChooseAll(e){
        setIsCheckedAll(e.target.checked);
        console.log(isCheckedAll);
    }
    return(
        <div className="footer">
            <input type="checkbox" name="chooseAll" className="checkbox" 
                checked={isCheckedAll} onChange={handleChooseAll}/>
            <span>全选/全不选</span>
            <a href="" >删除</a>
            <input type="text" name="input" ></input>
            <a href="" className="add" >添加</a>
        </div>
       
    )
}

export default Manager;
