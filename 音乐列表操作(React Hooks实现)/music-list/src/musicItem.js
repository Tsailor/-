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
            <span>{content.title}</span>
            {content.collect ? <a href="">取消收藏</a>
                : <a  href="">收藏</a>}
            <a href="">删除</a>
        </li>
    )
}
export default MusicItem;