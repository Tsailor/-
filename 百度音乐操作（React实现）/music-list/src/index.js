import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MusicItem from './MusicItem.js';

class MusicList extends Component{
    constructor(){
        super();
        this.state={
            data : [
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
            ]
        }

    }
    render(){
        return(
           <div>
               {this.state.data.map((item) =>(
                   <MusicItem key={item.id} content={item}/>
                ))}
           </div>
        )
    }
}
ReactDOM.render(<MusicList />, document.getElementById('root'));
