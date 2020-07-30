import React, { useContext} from "react";
import  MusicListContext from "./musicListContext.js"
import "./index.css";
function MusicItem(props){
    const { content }=props;

   const {handleChooseItem } = useContext(MusicListContext);
    let handleChoose= (e) => {
       handleChooseItem(content.id,e.target.checked)
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