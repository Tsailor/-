import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MusicItem from './MusicItem.js';
import "./index.css";
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
            ],
            isCheckeddAll:"",
            inputValue:""
        }
       
        this.chooseAll=this.chooseAll.bind(this);    //   全选
        this.handleChange=this.handleChange.bind(this);   // 输入框输入
        this.choose=this.choose.bind(this);      //   选择单个
        this.removeit=this.removeit.bind(this);   //  删除单个
        this.collect=this.collect.bind(this);     //  收藏
        this.handleRemove=this.handleRemove.bind(this);  // 处理批量 删除
        this.handleAdd=this.handleAdd.bind(this);    //  处理添加
    }
    chooseAll(e){
        let {data,isCheckeddAll}=this.state;
     //  console.log(e.target)
       if(e.target.name==="chooseAll"){
           if(e.target.checked){
                data.map((v) => (
                    v.checked=true
                ));
               isCheckeddAll=true;
           }else{
               data.map((v) => (
                   v.checked = false
               ));
               isCheckeddAll=false;
           }
           this.setState({data,isCheckeddAll});
       }
    }

    // 选择单个
    choose(id){
        let { data,isCheckeddAll}=this.state;
        data.map((v)=>
            v.id===id ? v.checked=(!v.checked) : null
        )
        isCheckeddAll=data.every((v) =>(
            v.checked===true
        ))
        this.setState({data,isCheckeddAll})
    }

    removeit(id){
        let _data=this.state.data;
        _data.map((v,k)=>(
            v.id===id ? _data.splice(k,1) : null
        ))
        this.setState({
            data:_data
        })
    }

    // 输入
    handleChange(e){
        if(e.target.name==="input"){
            let input=e.target.value;
            this.setState({inputValue:input});
           // console.log(this.state);
        }
    }
    //  处理添加
    handleAdd(e){
        e.preventDefault();
      //  console.log(this.state.inputValue);
        if(this.state.inputValue!==""){
            let newItem = {
                id: this.state.data[this.state.data.length - 1].id + 1,
                title: this.state.inputValue,
                checked: false,
                collect: false
            }
            let data = this.state.data;
            data.push(newItem);
            this.setState({ data: data,inputValue:"" });
        }
        
    }
    // 处理收藏
    collect(id){
        let data=this.state.data;
        console.log(data)
        data.map((v)=>
           v.id===id ? v.collect=(!v.collect) :null
        )
        this.setState({data:data});
    }

    // 处理批量删除
    handleRemove(e){
        e.preventDefault(); //  重要！！！
        let _data=this.state.data.filter((v)=> 
            v.checked!==true
        )
        this.setState({data:_data});
    }
    render(){
        return(
           <div className="container">
                <h1 className="title">百度音乐榜单</h1>
               {this.state.data.map((item) =>
                   <MusicItem key={item.id} content={item} choose={this.choose} 
                       collect={this.collect} id={item.id} removeit={this.removeit}/>
                )}
                <div className="footer">
                    <input type="checkbox" name="chooseAll" className="checkbox"  
                           checked={this.state.isCheckeddAll} onChange={this.chooseAll}/>
                    <span>全选/全不选</span>
                    <a href="" className="remove" onClick={this.handleRemove}>删除</a>
                    <input type="text" name="input" value={this.state.inputValue} onChange={this.handleChange}></input>
                    <a href="" className="add" onClick={this.handleAdd}>添加</a>
                </div>
           </div>
        )
    }
}
ReactDOM.render(<MusicList />, document.getElementById('root'));
