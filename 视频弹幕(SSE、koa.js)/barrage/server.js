const http = require("http");
const fs =require("fs");
let server = http.createServer((req,res)=>{
    if(req.url==="/"){
        console.log("ok")
      res.setHeader("Content-type","text/html;charset=utf-8");
      let resData =   fs.readFileSync("./static/index.html");
      res.end(resData);
        //res.end("hello")
    }else if(req.url=="/sse"){
        console.log("conected");
        // 推送数据；
        // 设置头部；
        res.setHeader("content-type","text/event-stream");
        setInterval(()=>{
            // console.log(111);
            // let nowTime = new Date();
            res.write(`data: 时间是${new Date()}\r\n\r\n`);
        },1000)
    }
})
server.listen(4001);