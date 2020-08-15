import React,{ useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import Http from './Http';
function IndexList(){
    let {tab} =useParams()
    let [ data,setData ] = useState({
       isLoading: true,
       listData : []
    })
    let { isLoading, listData } = data;

    useEffect(()=>{
        setData({
            isLoading:true,
            listData: []
        });
        Http.get(`/topics?limit=20&page=1&tab=${tab}`).then((res)=>{
            setData({
                isLoading:false,
                listData: res.data.data
            });
        })
    },[tab])

    return (
        <div> 
              {isLoading?
                  "正在请求数据"
              :
                  <ul>
                      {listData.map((liData,index)=>{
                          return <li key={index}>{liData.title}</li>
                      })}
                  </ul>
              }
        </div>
      
    );
}
export default IndexList;