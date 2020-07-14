### 总结 ###
关于progress 标签的使用  
修改样式，示例
```  
progress{
   width: 168px;
   height: 5px;
   color:#f00;
   background:#EFEFF4; 
   border-radius: 0.1rem;
}
 /* 表示总长度背景色 */ 
progress::-webkit-progress-bar{     
   background-color: #f2f2f2;
   border-radius: 0.2rem;
}
 /* 表示已完成进度背景色 */
progress::-webkit-progress-value{
   background: #a21211;
   border-radius: 0.2rem; 
}
```