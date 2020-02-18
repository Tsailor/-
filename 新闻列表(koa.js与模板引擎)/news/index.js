const Koa = require("koa");
const Router = require("koa-router");
const Views = require("koa-views");
const Static = require("koa-static");
const Favicon = require("koa-favicon");
const KoaNunjucks = require("koa-nunjucks-2");
const path = require('path');
const fs = require("fs");
const app = new Koa();
const router = new Router();


app.use(Favicon(__dirname+"/static/img/favicon.ico"));   // 图标

app.use(KoaNunjucks({              // 加载模板
    ext: 'html',
    path: path.join(__dirname, 'views'),
    nunjucksConfig: {
      trimBlocks: true
    }
}));
// app.use(Static(path.join(__dirname, 'static')));

app.use(Static(__dirname+'/static'));

router.get("/",ctx =>{
    //ctx.body="hello"
    ctx.redirect("/news")
});
router.get("/news", async ctx =>{
    await ctx.render('index', {double: 'rainbow'});
});
router.get("/detail", async ctx =>{
    await ctx.render('detail', {double: 'rainbow'});
});

// 错误处理
app.on('error', err => {
    log.error('server error', err)
});
app.use(router.routes());
app.listen(4000);


