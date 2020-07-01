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