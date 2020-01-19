import React, { Component } from "react";

class MusicItem extends Component {
    constructor(){
        super();
    }
    render(){
        const { content }=this.props;
        return(
            <div>
                <p>{content.title}</p>
            </div>
        )
    }
}

export default MusicItem;