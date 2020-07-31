import React, { useContext} from "react";
import  MusicListContext from "./musicListContext.js"
import "./index.css";
function MusicItem(props){
    const { content }=props;

   const {handleChooseItem ,handleRemoveItem, handleCollectItem} = useContext(MusicListContext);    // 从 context中取方法

    let handleChoose= (e) => {               //    选中
       handleChooseItem(content.id)
    }
    let handleRemove = () => {         // 删除 ，id传回去
        handleRemoveItem(content.id)
    }
    let handleCollect = ()=>{           //  收藏 ，id传回去
        handleCollectItem(content.id)
    }
    return(
        <li className="MusicItem">
            <input type="checkbox" className="checkbox" checked={content.checked}
                onChange={handleChoose}/>
            <span >{content.title}</span>
            {content.collect ? <span className="span-content" onClick={handleCollect}>取消收藏</span>
                : <span className="span-content" onClick={handleCollect}>收藏</span>}
            <span className="span-content" onClick = {handleRemove}>删除</span>
        </li>
    )
}
export default MusicItem;