import React ,{useContext, useReducer} from "react";
import MusicList from "./musiclist.js";
import Manager from "./manager.js";
import MusicListContext from "./musiclistContext.js"
import "./index.css";
function AppContainer() {
      //  所有数据
    let data = [
        {
            id: 0,
            title: "残酷月光 - 费启鸣",
            checked: true,
            collect: true
        }, {
            id: 1,
            title: "兄弟 - 艾热",
            checked: false,
            collect: false
        }, {
            id: 2,
            title: "毕生 - 夏增祥",
            checked: false,
            collect: true
        }, {
            id: 3,
            title: "公子向北去 - 李春花",
            checked: false,
            collect: false
        }, {
            id: 4,
            title: "战场 - 沙漠五子",
            checked: true,
            collect: false //是否收藏 true 收藏 false 没有收藏
        }
    ];
    const reducer = (state,action)=>{
        switch(action.type){
               
        }
    }

    const [ state ,dispatch ] = useReducer(reducer , data);
    return (
        <MusicListContext.Provider value={{ data,dispatch }}>
            <div className="container">
                <MusicList />
                <Manager />
            </div>
        </MusicListContext.Provider>
    )
}
export default AppContainer;