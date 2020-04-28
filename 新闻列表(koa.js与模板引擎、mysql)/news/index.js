const Koa = require("koa");
const Router = require("koa-router");
const Views = require("koa-views");
const Static = require("koa-static");  // 处理静态文件
let mysql2 = require("mysql2");
const Favicon = require("koa-favicon");
const KoaNunjucks = require("koa-nunjucks-2");

const path = require("path");
const fs = require("fs")
const url = require("url")
const app = new Koa();
const router = new Router();

const connection = mysql2.createConnection({    // 连接数据库
    host:"localhost",
    user:"root",
    password:"thl12345",
    database:"web-pro1",
    charset:"utf8"
});
// let newsData = require("./data/data.json");
// console.log(newsData)
app.use(Static(__dirname+'/static'));     //  静态文件
app.use(Favicon(__dirname+"/static/img/favicon.ico"));   // 图标
app.use(KoaNunjucks({              // 加载模板
    ext: 'html',
    path: path.join(__dirname, 'views'),
    nunjucksConfig: {
      trimBlocks: true
    }
}));

router.get("/",ctx =>{
    //ctx.body="hello"
    ctx.redirect("/news")   // 重定向
});
router.get("/news", async ctx =>{
    let objPath = url.parse(ctx.url,true)
    let p = parseInt(objPath.query.p || 1);   // 当前页
    // console.log(objPath)
    let perPage = 5;  // 指定每页5条数据
    let [row] =await connection.promise().query("SELECT COUNT(*) AS totalLength FROM news");
  //  console.log(row[0].totalLength)
    let totalLength = row[0].totalLength; //总数据条数
    let pCount=Math.ceil(totalLength/perPage);  // 分页数
  //  let pageData = JSON.parse(JSON.stringify(newsData)).slice((p-1)*perPage,p*perPage);// 当前页数据
    let start =(p-1)*perPage;
    let [pageData] =await connection.promise().query("SELECT * FROM news LIMIT ?,?", [start, perPage]) 
  //  console.log(pageData)
   await ctx.render('index', { pageData,p,pCount });
   
});
router.get("/detail", async ctx =>{
    let objPath = url.parse(ctx.url,true)
    let id = parseInt(objPath.query.id);   // 当前id
    //let detailDataArr = newsData.filter((v)=> v.id === id);
    let [detailDataArr] = await connection.promise().query("SELECT * FROM news WHERE id=?",[id])
 //   console.log(detailDataArr[0])
    let detailData=detailDataArr[0];
    await ctx.render('detail', {detailData});
});

app.use(router.routes());
app.listen(4000);


