import React, { useEffect, useState, useRef } from 'react';
import './App.css';
const useData = ()=>{
    return fetch('/api/getMock').then(res=>res.json())
}
function App(){
    let getListData = useData();
    const [ listDatas, setListDatas ] = useState([]);  //  所有数据
    useEffect(()=>{
        getListData.then(res=>setListDatas(res.data))
    },[])
    return(
       listDatas.length!==0 ? <VirtualList lists={listDatas}/> : <div>正在加载ing...</div>
    )
}
const Li = (props) =>{
    let { item,itemHeight } = props;
    return <li className="list-items" style={{ lineHeight:`${itemHeight}px` , height:`${itemHeight}px`}} >{item.title}</li>
}
const LiItem = React.memo((props)=><Li {...props}/>);  // 避免不必要渲染

const VirtualList = (props)=>{
    let {lists} = props;
    let totalLength = lists.length;  // 总list长度

    const listView = useRef(null);
    const listContent = useRef(null);

    let [visibleData, setVisibledata ] = useState([]);
    let itemHeight = 50;   // 每个listItem 高度
    let buffreSize = 5;
    
    const updateVisible = (scrollTop)=>{
        let curScrollTop = scrollTop || 0;
     //   console.log(listContent.current.clientHeight)
        let visibleCount = Math.ceil( listView.current.clientHeight / itemHeight);
        let start = Math.floor(curScrollTop/itemHeight);
        let end = start + visibleCount + buffreSize;    
        setVisibledata(lists.slice(start, end));               // 重新获取数据
        listContent.current.style.transform = `translate3d(0, ${start *itemHeight}px,0)`;   // content始终保证在可视区域
    }
    const handleScrol = (e)=>{
        const curScrollTop = listView.current.scrollTop;
        updateVisible(curScrollTop)
    }
    useEffect(()=>{
        updateVisible();
        listView.current.addEventListener("scroll",handleScrol)
        return ()=>listView.current.removeEventListener("scroll", handleScrol)
    },[])
    return(
        <div className="list-view" ref = {listView} >
             <div className="list-view-plantom" style={{height : `${totalLength*itemHeight}px`}}></div>
             <div className="list-content" ref = {listContent}>  
                    {visibleData.map((item) => <LiItem item={item} itemHeight={itemHeight} key={item.id}/>)}
             </div>
        </div>
      )
}



export default App;