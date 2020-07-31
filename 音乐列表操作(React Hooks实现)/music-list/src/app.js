import React,{useState} from "react";
import "./index.css"
import MusicList from "./musiclist.js";
import Manager from "./manager.js";
import MusicListContext from "./musicListContext.js";
// //创建 Context

function App(){
    const data = [
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

    let [ musicLists, setMusicLIst ]= useState(data);

    
    let hanldeInputItems = (musicData)=>{      //  添加
        console.log(musicData)
        let item = {
            id: musicLists.length===0? 0 : musicLists[musicLists.length-1].id+1,
            title: musicData,
            checked: false,
            collect: false //是否收藏 true 收藏 false 没有收藏
        }
        setMusicLIst([...musicLists,item]);
    }
    let handleChooseAllItems = (isCheckedAll)=>{      //  全选
         musicLists.map((v)=>
            v.checked = isCheckedAll 
        )
        //console.log(musicLists)
        setMusicLIst([...musicLists])
    }
    let handleRemoveAllItems =()=>{          //  删除所有
        let res= musicLists.filter((v)=>(    // 拿返回值
            v.checked!==true
        ))
        setMusicLIst([...res])
    }
    let  handleChooseItem =(id)=>{                  // 单选
        musicLists.map((v)=>
            v.id === id ? v.checked = !v.checked : null
        )      
        setMusicLIst([...musicLists])
    }
    let handleRemoveItem = (id) => {            // 单删
        musicLists.map((v,index) =>
            v.id === id ? musicLists.splice(index,1) : null
        )
        setMusicLIst([...musicLists])
    }
    let handleCollectItem = (id) => {        //   收藏
        musicLists.map((v) =>
            v.id === id ? v.collect =(!v.collect) : null
        )
        setMusicLIst([...musicLists])
    }
    let contextValue = {    ///   传入子组件的数据
        musicLists,
        hanldeInputItems,           //  添加
        handleChooseAllItems,       // 全选
        handleRemoveAllItems,       //  删除所有
        handleChooseItem,            // 单选
        handleRemoveItem,            ///  删除
        handleCollectItem           //  收藏
    }
    return(
        <div className="container">
           <MusicListContext.Provider value = {contextValue}>
               <MusicList/>
               <Manager/>   
          </MusicListContext.Provider>
        </div>
    )
}
export default App;

