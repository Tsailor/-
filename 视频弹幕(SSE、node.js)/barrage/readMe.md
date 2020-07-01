## 总结 ##
```javascript
const [rows,fields] = await connection.promise().query("INSERT INTO barrage(message) VALUES(?) ",[value]);
```
如果SQL语句没有返回值则 rows的值为
```javascript
ResultSetHeader {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 1,
  info: '',
  serverStatus: 2,
  warningStatus: 0
}
```

如果SQL语句有返回值
```javascript
 const [rows] = await connection.promise().query("SELECT * FROM barrage");
```
rows的值则为返回结果
```javascript
[
  TextRow { id: 1, message: 'qwqwq' },
  TextRow { id: 2, message: '123455' }
]
```
如果文件路径中带有中文，node无法读取到 ,例如：HTML的前世今生.mp4
```javascript  
let extData = fs.readFileSync("./static"+ req.url);
res.end(extData);
```


POST 方式提交json数据  
客户端    
将对象转换成json字符串
```javascript
xmlHR.setRequestHeader('Content-type', 'application/json');
let data ={message :value}
xmlHR.send(JSON.stringify(data));
```  
服务端 
```javascript
  res.writeHead(200, {'Content-Type': 'application/json'}); //设置头
  let postData = JSON.parse(postD);  //解析成对象，便于操作数据
  console.log(postData.message);
  res.end(JSON.stringify(postData)) //再转换成json字符串返回
```