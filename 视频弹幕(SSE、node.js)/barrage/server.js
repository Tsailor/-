const http = require("http");
const { URL } = require("url");   //新版本url接口，旧版已弃
const path = require("path");
const fs =require("fs");
const mysql2 = require("mysql2");
const SSE = require("sse")
const mime = require("./data/mime.json");

let  base = 'http://localhost:4001/';

const connection = mysql2.createConnection({    // 连接数据库
    host:"localhost",
    user:"root",
    password:"thl12345",
    database:"web-pro1",
    charset:"utf8"
});

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
            req.on("data", (v) => {      //  POst请求数据拼接
                postD += v
            });
            req.on("end", async () => {
                res.setHeader('Content-Type', 'application/json' );
                let postData = JSON.parse(postD).message;   //写入数据库的数据
                console.log(postData);
                const [rows,fields] = await connection.promise().query("INSERT INTO barrage(message) VALUES(?) ",[postData]);
                //console.log(rows);
                let result;
                rows.affectedRows >= 1 ? result = { status: 1, message: "success" } : result = { status: 0, message: "error!" }
                res.end(JSON.stringify(result))
            })
            req.on("error",()=> {
                res.setHeader('Content-Type', 'application/json' );
                let result= { status:0,message:"error!"}
                res.end(JSON.stringify(result))
            })
        }
    }else if(pathName === '/sse'){   //  sse服务器推送数据
        let sse = new SSE(server);
        res.writeHead(200, { "Content-Type":"text/event-stream",                           
                            "Cache-Control":"no-cache",  
                            "Connection":"keep-alive"});   
        sse.on('connection', (client)=>{
           // client.send('hi there!');     
            let interval = setInterval(async ()=>{
                let [rows] = await connection.promise().query("SELECT * FROM barrage ORDER BY id DESC LIMIT 0,3");
                //console.log(rows)
                let resdata = JSON.stringify({ result:rows});
            //    console.log(resdata);
                client.send(resdata)
            },6*1000)
            client.on("close",()=>{
                clearInterval(interval);
            })
        })
        // let  interval = setInterval(()=> { 
        //     connection.query("SELECT * FROM barrage ORDER BY id DESC LIMIT 0,5",(error, results, fields)=>{
        //         if(error) throw error;
        //         console.log(results) 
        //         let ers = "OK"
        //         res.end("data:${ers}\n")
        //     }, 6*1000)}); 
        // req.connection.addListener("close", function () { 
        //     clearInterval(interval); 
        // }, false);
    } else {
        let extName = path.extname(req.url);
        res.setHeader("Content-type",mime[extName]);
        let extData = fs.readFileSync("./static"+ req.url);
      //  console.log(req.url)
        res.end(extData);
    }
   
})
server.listen(4001);