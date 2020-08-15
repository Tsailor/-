import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "../App.css"
function PublicNav(props){
    let { classname, data } = props;
    let {pathname} = useLocation();
    return(
        <div>
            {data.map((v,i)=><NavLink key={i} to={v.path} exact={v.exact} activeClassName={v.activeClass}  className={classname} isActive ={v.isActive ? ()=>v.isActive(pathname) : null}>{v.name}</NavLink>)}
        </div>
    )
}
export default PublicNav;