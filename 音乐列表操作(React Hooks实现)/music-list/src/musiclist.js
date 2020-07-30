import React, { useContext } from "react";
import MusicItem from "./musicItem.js"
import MusicListContext  from "./musicListContext.js";
import "./index.css";
function MusicList(props) {
  
    const {musicLists}= useContext(MusicListContext);
    console.log(musicLists)
    return (
        <div>
            <h1 className="title">百度音乐榜单</h1>
            {musicLists.map((item) =>
                <MusicItem key={item.id} content={item} />
            )}
        </div>
    )
}
export default MusicList;

