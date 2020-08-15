import React from 'react';
import { navData} from '../route';
import PublicNav from './PublicNav';

function Nav(){
    return(
       <PublicNav data={navData} classname={"nav-link"}/>
    )
}
export default Nav;