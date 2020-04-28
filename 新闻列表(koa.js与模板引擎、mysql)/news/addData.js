//此脚本作用将data.json 数据写入数据库
let mysql2 = require("mysql2");
let newsData = require("./data/data.json");

const connection = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"thl12345",
    database:"web-pro1",
    charset:"utf8"
});

newsData.forEach(async item => {
    let [rows,fields] = await connection.promise().query("INSERT INTO news(title,imgUrl,`from`,newTime,content) VALUES(?,?,?,?,?)",[item.title,item.imgUrl,item.from,item.newTime,item.content]);
    console.log(rows);
});
