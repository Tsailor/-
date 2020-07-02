const http = require("http");
const { URL } = require("url");   //新版本url接口，旧版已弃
const path = require("path");
const fs =require("fs");
const mysql = require("mysql");
const sse = require("sse")
const mime = require("./data/mime.json");

let  base = 'http://localhost:4001/';

const connection = mysql.createConnection({    // 连接数据库
    host:"localhost",
    user:"root",
    password:"thl12345",
    database:"web-pro1",
    charset:"utf8"
});

connection.connect();    //打开数据库

let server = http.createServer((req,res)=>{
    const myUrl = new URL(req.url,base);   // 相对路径 与 base
    let pathName = myUrl.pathname;

    if(pathName === '/test'){      // 测试接口
        res.setHeader("Content-type","text/html;charset=utf-8");
        let resData = fs.readFileSync("./static/test.html");
        res.end(resData);
    }else if(pathName === '/'){       
        res.setHeader("Content-type","text/html;charset=utf-8");
        let resData = fs.readFileSync("./static/index.html");
        res.end(resData);
    }else if(pathName === '/barrage'){
        console.log(req.method)
        if(req.method === "POST"){
            let postD = '';
            req.on("data", (v) => {
                postD += v
            });
            req.on("end", async () => {
                res.setHeader('Content-Type', 'application/json' );
                let postData = JSON.parse(postD).message;   //写入数据库的数据
                console.log(postData);
                connection.query("INSERT INTO barrage(message) VALUES(?) ",[postData],(error, results, fields)=>{
                    if(error) throw error;
                  //  console.log(results)
                    results.affectedRows >= 1 ? result = { status: 1, message: "success" } : result = { status: 0, message: "error!" }
                    res.end(JSON.stringify(result))
                });
            })
            req.on("error",()=> {
                res.setHeader('Content-Type', 'application/json' );
                let result= { status:0,message:"error!"}
                res.end(JSON.stringify(result))
            })
        }
    }else if(pathName === '/sse'){   //  sse服务器推送数据
        res.writeHead(200, { "Content-Type":"text/event-stream",                           
                            "Cache-Control":"no-cache",  
                            "Connection":"keep-alive"});
        let  interval = setInterval(function () { 
            connection.query("SELECT * FROM barrage ORDER BY id DESC LIMIT 0,5"),(error, results, fields)=>{
                if(error) throw error;
                console.log(results) 
            }, 6*1000); 
        req.connection.addListener("close", function () { 
            clearInterval(interval); 
        }, false);
    } else {
        let extName = path.extname(req.url);
        res.setHeader("Content-type",mime[extName]);
        let extData = fs.readFileSync("./static"+ req.url);
      //  console.log(req.url)
        res.end(extData);
    }
   
})
server.listen(4001);