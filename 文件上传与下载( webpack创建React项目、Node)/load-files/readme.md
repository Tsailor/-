## React+ant-design实现文件上传、下载、预览##  
start-time:2020-7-5   

1、webpack搭建react开发环境，见 summary.md  
2、引入ant-design,搭建面板  ``` npm install antd --save```，后续见文档  
   引入组件，```npm run start:dev```
3、报错：说你没有loader,解析不了css。因为之前的webpack只配置了html,没有配置css的loader,再去配置。 见 summary.md    
4、按需加载组件样式，```npm install babel-plugin-import --save-dev```  .babelrc中配置 ```  "plugins":[["import", {"libraryName": "antd", "style": "css"}]]```,讲道理应该可以了 
## 但是还是不行，原因未知 ##