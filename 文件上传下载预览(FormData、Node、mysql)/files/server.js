const http = require('http');
const fs = require('fs');
const path = require('path')
const { URl } = require('url');
const mime = require('./static/mime.json')
const mysql2 = require('mysql2');
const formidable = require('formidable');
const { getDateForMat } = require('./dateFormat.js')
const connection = mysql2.createConnection({    // 连接数据库
    host:"localhost",
    user:"root",
    password:"thl12345",
    database:"web-pro1",
    charset:"utf8"
});

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
            if( !fs.existsSync(__dirname+'/my')){        // 文件夹不存在则自动创建
               fs.mkdir( __dirname+"/my", { recursive: true },(err) =>{
                   if(err) throw err;
               })   
            }
            const form = formidable({ multiples: false });
            form.uploadDir = __dirname+"/my"; //如果要改变文件上传的路径，就使用这个属性，否则默认上传的文件在os.tmpDir()
            form.keepExtensions = true;//默认是false，表示不保留上传文件的后缀名
            form.parse(req, async (err, fields, files) => {
               // console.log(files.upLoad.path);    
                let name = files.upLoad.name      //  文件名
                let oldPath = files.upLoad.path;   
                let newPath  = __dirname+"/my/"+files.upLoad.name;   // 路径
                let p1 = await new Promise((resolve,reject) => {
                    fs.rename(oldPath, newPath,(err) => {
                        if(err) throw Error("改名失败");
                    })
                    resolve();  /// 不加这个会一直阻塞，详见await的使用
                });
             
                //  上传时间
                let curDate = getDateForMat();  //  自写个时间格式转换模块
                //     console.log(curDate)
                // 文件名、路径、上传时间 ( name, newPath, curDate)   写入数据库
                let [rows] = await connection.promise().query("INSERT INTO fileList(name,url,date) VALUES(?,?,?) ",[ name, newPath, curDate]);
                let result;
               // console.log(rows)
                rows.affectedRows >= 1 ? result = { status: 1, message: "success" } : result = { status: 0, message: "error!" }
                res.end(JSON.stringify(result))
            });
        }else if(req.method === 'GET'){
            let search = myUrl.search;
            //  let serachParams = myUrl.searchParams
            if( search === ""){
                res.setHeader("Content-type","application/json,charset = utf8");
                // connection.promise().query("DELETE FROM fileList where id<100")
                connection.promise().query("SELECT * FROM fileList ORDER BY id DESC LIMIT 0,5")
                    .then(([rows, fields]) => {
                        console.log(rows);
                        let resData;
                        rows.length === 0 ? resData = { status:0,data:null} : resData = { status:1,data:rows}
                        res.end(JSON.stringify(resData))
                    })
                
            }
           
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