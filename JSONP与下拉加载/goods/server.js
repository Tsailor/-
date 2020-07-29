const Koa = require('koa');
const Router = require('koa-router');
const Static = require('koa-static')

const app = new Koa();
const router = new Router();
app.use(Static(__dirname+'/static'));
router.get('/test',(ctx) => {
    ctx.body = "hello"
})
app.use(router.routes());
app.listen(4001)