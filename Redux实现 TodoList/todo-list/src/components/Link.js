import React from 'react';
import "../index.css"
function Link(props){
    console.log(props);
    const { children,active,checkFilter} = props;
    const handleCheck = () =>{
        checkFilter()
    }
    return(
    active ? <span className="footer-active" onClick={handleCheck}>{children}</span> : <span className="footer-unactive" onClick={handleCheck}>{children}</span>
    )
}
export default Link;