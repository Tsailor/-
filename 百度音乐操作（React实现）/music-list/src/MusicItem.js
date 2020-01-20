import React, { Component } from "react";
import "./index.css"
class MusicItem extends Component {
    constructor(){
        super();

        this.handleChoose=this.handleChoose.bind(this);
        this.handleRemove=this.handleRemove.bind(this);
        this.handleCollect=this.handleCollect.bind(this);
    }
    handleChoose(){
       const { id,choose }=this.props;
       choose(id);
    }
    handleCollect(e){
        e.preventDefault();
        const {id, collect}=this.props;
        collect(id);
    }
    handleRemove(e){
        e.preventDefault();
        const { id , removeit }=this.props;
        removeit(id)
    }
    render(){
        const {content}=this.props;
        return(
            <li className="MusicItem">
                <input type="checkbox" className="checkbox"
                       checked={content.checked} onChange={this.handleChoose}/>
                <span>{content.title}</span>
                {content.collect ? <a onClick={this.handleCollect} href="">取消收藏</a> 
                    : <a onClick={this.handleCollect} href="">收藏</a>}
                <a href="" onClick={this.handleRemove}>删除</a>
            </li>
        )
    }
}

export default MusicItem;