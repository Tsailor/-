import React from 'react';
import HandleLink from '../contaners/HandleLink.js';

function Footer(){
   
    return(
        <div className="footer-wrap">
            {"筛选："}
            <HandleLink filter="SHOW_ALL">所有</HandleLink>
            <HandleLink filter="SHOW_COMPLETED">已完成</HandleLink>
            <HandleLink filter="SHOW_UNCOMPLETED">未完成</HandleLink>
        </div>
        
        
    )
}
export default Footer;