import React from 'react';
import PropTypes from 'prop-types';
import "../index.css"
function Link(props){
    
    const { children,active,checkFilter} = props;
    const handleCheck = () =>{
        checkFilter()
    }
    return(
    active ? <span className="footer-active" onClick={handleCheck}>{children}</span> : <span className="footer-unactive" onClick={handleCheck}>{children}</span>
    )
}
Link.propTypes = {
    children : PropTypes.string,
    active : PropTypes.bool,
    checkFilter : PropTypes.func
}
export default Link;