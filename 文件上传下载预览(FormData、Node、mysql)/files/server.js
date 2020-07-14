const http = require('http');
const fs = require('fs');
const path = require('path')
const { URl } = require('url');
const mime = require('./static/mime.json')
const mysql = require('mysql2');
const formidable = require('formidable');

let  base = 'http://localhost:4001/';

let server = http.createServer(( req, res) =>{
    let myUrl = new URL( req.url, base );
    let pathName = myUrl.pathname;
    if( pathName === '/'){
        let data = fs.readFileSync('./static/index.html')
        res.setHeader("Content-type","text/html,charset = utf8")
        res.end(data);
    }else if( pathName === '/files'){
        if(req.method === 'POST'){
            const form = formidable({ multiples: false });
            form.uploadDir = __dirname+"/my"; //如果要改变文件上传的路径，就使用这个属性，否则默认上传的文件在os.tmpDir()
            form.keepExtensions = true;//默认是false，表示不保留上传文件的后缀名
            form.parse(req,(err, field, files) => {
                console.log(field);
                console.log(files);
            });
            form.on('end', () => {
                res.end("hello")
            })
        }else if(req.method === 'GET'){

        }
    }
    else{
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