import React from "react";
import "./index.css";
function MusicItem(props){
    const { content }=props;

    function handleChoose(){
        
    }
    return(
        <li className="MusicItem">
            <input type="checkbox" className="checkbox" checked={content.checked}
                onChange={handleChoose}/>
            <span >{content.title}</span>
            {content.collect ? <span className="span-content">取消收藏</span>
                : <span className="span-content">收藏</span>}
            <span className="span-content">删除</span>
        </li>
    )
}
export default MusicItem;