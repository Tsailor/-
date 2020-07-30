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

    
    let hanldeInputItems = (musicData)=>{
        console.log(musicData)
        let item = {
            id: musicLists.length===0? 0 : musicLists[musicLists.length-1].id+1,
            title: musicData,
            checked: false,
            collect: false //是否收藏 true 收藏 false 没有收藏
        }
        setMusicLIst([...musicLists,item]);
    }
    let handleChooseAllItems = (isCheckedAll)=>{
         musicLists.map((v)=>
            v.checked = isCheckedAll 
        )
        //console.log(musicLists)
        setMusicLIst([...musicLists])
    }
    let handleRemoveAllItems =()=>{
        console.log(11)
        let res= musicLists.filter((v)=>(
            v.checked!==true
        ))
        setMusicLIst([...res])
    }
    let  handleChooseItem =(id,checked)=>{
        musicLists.map((v)=>{
                if(v.id===id ){ v.checked=checked }
            })
        setMusicLIst([...musicLists])
    }
        // musicLists.map((v)=>{
        //     if(v.id===id ){ v.checked=checked }
        // })
    
    let contextValue = {    ///   传入子组件的数据
        musicLists,
        hanldeInputItems,           //  添加
        handleChooseAllItems,       // 全选
        handleRemoveAllItems,       //  删除所有
        handleChooseItem            // 单选
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

// const Manager= () => {
//     const { username } = useContext(AppContext)
  
//     return (
//       <div className="messages">
//         <h1>Messages</h1>
//         <p>1 message for {username}</p>
//         <p className="message">useContext is awesome!</p>
//       </div>
//     )
// }



// import React , {useContext} from "react";
// import ReactDOM from "react-dom";

// //创建 Context
// const NumberContext = React.createContext();
// // 它返回一个具有两个值的对象
// // { Provider, Consumer }

// function App() {
    


//   // 使用 Provider 为所有子孙代提供 value 值 
//   return (
//     <NumberContext.Provider value={{username:"jack"}}>
//       <div>
//         <Display />
//       </div>
//     </NumberContext.Provider>
//   );
// }

// function Display() {
//     const {username} = useContext(NumberContext);
//     return <div>The answer is {username}.</div>;
//   }


// function Display() {
//     // 使用 Consumer 从上下文中获取 value
//     return (
//       <NumberContext.Consumer>
//         {value => <div>The answer is {value}.</div>}
//       </NumberContext.Consumer>
//     );
//   }
// export default App;