### 总结 ###  

create-react-app 配置antd，antd样式不生效的解决方式。  
1、npm i babel-plugin-import --s （实现 按需加载）  
2、npm run eject   ( 弹出配置，选择 yes)  
3、在package.json中， babel 配置里加入 
```javascript
"plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "libraryDirectory": "lib",
          "style": "css"
        }
      ]
    ]
```  
4、npm start ，antd的样式生效了。