...javascript
 // 处理批量删除
    handleRemove(e){
        e.preventDefault(); //  重要！！！
        let _data=this.state.data.filter((v)=> 
            v.checked!=true
        )
        this.setState({data:_data});
    }
...
如果 没有e.preventDefault(),页面会重新刷新。