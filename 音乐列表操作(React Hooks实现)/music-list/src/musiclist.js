import React, { useContext } from "react";
import MusicItem from "./musicItem.js"
import { MusicListContext } from "./musicListContext.js";
import "./index.css";
function MusicList(props) {
   
    const contextData = useContext(MusicListContext);
    console.log(contextData)
    return (
        <div>
            <h1 className="title">百度音乐榜单</h1>
            {contextData.map((item) =>
                <MusicItem key={item.id} content={item} />
            )}
        </div>
    )
}
export default MusicList;

