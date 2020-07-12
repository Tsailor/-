const http = require('http');
const fs = require('fs');
const path = require('path')
const { URl } = require('url');
const mime = require('./static/mime.json')
const mysql = require('mysql2');
let  base = 'http://localhost:4001/';

let server = http.createServer(( req, res) =>{
    let myUrl = new URL( req.url, base );
    let pathName = myUrl.pathname;
    if( pathName === '/'){
        let data = fs.readFileSync('./static/index.html')
        res.setHeader("Content-type","text/html,charset = utf8")
        res.end(data);
    }else{
        let extName = path.extname(req.url);
        res.setHeader("Content-type",mime[extName]);
        let extData
        if(extName === '.js')
            extData = fs.readFileSync("./src"+ req.url);
        else{
            extData = fs.readFileSync("./static"+ req.url);
        }
       
      //  console.log(req.url)
        res.end(extData);
    }

});
server.listen(4001)