import React from 'react';
import PublicNav from './PublicNav';
import {indexData} from '../route';
import IndexList from './IndexList';
function IndexPage(){
    return(
        <div>
            <PublicNav data ={indexData} classname={"list-nav"}/>
            <IndexList />
        </div>
      
    )
}
export default IndexPage;