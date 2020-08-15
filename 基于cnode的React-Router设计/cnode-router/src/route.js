import React from 'react';
import { Redirect} from  'react-router-dom';
import About from './components/About';
import IndexPage from './components/IndexPage';
import Start from './components/Start';
import Page404 from './components/Page404';
const types = ["all","good","job","share","ask"];
const urlRoutelist = [   // url地址输入栏
    {
        path : "/",
        exact : true,
        render(props){
            return <Redirect to='/index/all' />
        }
    }, 
    {
        path : "/index",
        exact : true,
        render(props){
            return <Redirect to='/index/all' />
        }
    }, 
    {
        path : "/index/:tab",
        exact : true,  
        render(props){

            return <IndexPage {...props} />
        }
    }, 
    {
        path : "/start",
        exact : true,
        render(props){
            return <Start {...props} />
        }
    }, 
    {
        path : "/about",
        exact : true,
        render(props){
            return <About {...props}/>
        }
    },
    {
        path : "*",
        exact : true,
        render(props){
            return <Page404 {...props}  />
        }
    }
]
const navData = [    // 导航栏
    {
        name : "首页",
        path :'/index/all',
        exact : true,
        activeClass : "nav-active",
        isActive(pathname){
            pathname = pathname.split("/");
            return pathname[1] === "index"&&types.includes(pathname[2]);
        }
    },
    {
        name : "新手入门",
        path :'/start',
        exact : true,
        activeClass : "nav-active"
    },
    {
        name : "关于",
        path :'/about',
        exact : true,
        activeClass : "nav-active"
    },
]

const indexData =[
    {
        name:"全部",
        path: "/index/all",
        exact: true,
        activeClass:"active"
    },{
        name:"精华",
        path: "/index/good",
        exact: true,
        activeClass:"active"
    },{
        name:"招聘",
        path: "/index/job",
        exact: true,
        activeClass:"active"
    },{
        name:"分享",
        path: "/index/share",
        exact: true,
        activeClass:"active"
    },{
        name:"问答",
        path: "/index/ask",
        exact: true,
        activeClass:"active"
    }
]
export { urlRoutelist, navData,indexData };
