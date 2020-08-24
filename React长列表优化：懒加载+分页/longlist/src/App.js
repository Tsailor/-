import React ,{ useEffect, useState }from 'react';
import { usedata } from './uti';
import './App.css';

function App() {
  let [list, setList ] = useState([]);
  let [page, setPage ] = useState(1);
  let getData  = usedata();
  useEffect(()=>{
    getData.then(res=>{
      setList(res.data)
    })
   
  },[])
  const getNextPage = ()=>{
     setPage((preSate)=>preSate+1)
  }
  return (
    <div className="App">
         <div className="title">长列表优化：懒加载+分页</div> 
         {list.length!== 0 ? <List data = {list.slice(0,page*20)} handleNextPage={getNextPage} curPage ={page}/> :null}
    </div>
  );
}


const List = (props) => {
    let { data, handleNextPage, curPage } = props;
    useEffect(()=>{
      document.querySelector(".App").addEventListener("scroll", debounce(fn, 300));

      return ()=>document.querySelector(".App").removeEventListener("scroll",debounce(fn, 300))
    },[data])

    function debounce(fn, wait){
      console.log(11)
      let timer;
      return function(...args){
          let context = this;
          if(timer)
             clearTimeout(timer)
          timer = setTimeout(
            ()=>fn.call(context,...args) , wait
          )          
      }
    }

    function fn(){
      // const maxScrollTop = document.querySelector(".App").scrollHeight
      // const innerHeight= document.querySelector(".App").offsetHeight;
      
      const currentScrollTop = document.querySelector(".App").scrollTop;
      const maxScrollTop = document.querySelector(".App").scrollHeight - document.querySelector(".App").offsetHeight;

      if (maxScrollTop - currentScrollTop < 20) {
          handleNextPage()
      }
    }
    return (
      <div className="list-panel">
        { data.map((list)=><Li key={list.id} list={list} />) }
      </div>
    )  
} 
const LiItem = ({list})=><li className="listitem" >{list.title}</li>
const Li = React.memo( LiItem)
export default App;
