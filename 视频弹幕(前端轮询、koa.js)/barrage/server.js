const Koa = require("koa");
const Static = require("koa-static");
const Router = require("koa-router");
const mysql2 = require("mysql2");
const KoaBody = require("koa-body");
const connection = mysql2.createConnection({    // 连接数据库
    host:"localhost",
    user:"root",
    password:"thl12345",
    database:"web-pro1",
    charset:"utf8"
});
let App =new Koa();
let router = new Router();

App.use(Static(__dirname + "/static"));
App.use(KoaBody());

router.get("/test", async ctx => {      // 测试服务
    ctx.body = "hello"
})
router.post("/addData", async ctx => {       //   添加数据
    console.log(ctx.request.body);
    //ctx.body = "get it!"
    let { value } = ctx.request.body;
    const [rows,fields] = await connection.promise().query("INSERT INTO barrage(message) VALUES(?) ",[value]);
    //console.log(rows);
    rows.affectedRows >= 1 ? ctx.body = { status:1,message:"get it!"}  : ctx.body = { status:0,message:"error!"}
})
router.get("/getBarrageData", async ctx => {     //  获取数据
    let [rows] = await connection.promise().query("SELECT * FROM barrage ORDER BY id DESC LIMIT 0,5");
    ctx.body = rows
})
App.use(router.routes());
App.listen(4001);