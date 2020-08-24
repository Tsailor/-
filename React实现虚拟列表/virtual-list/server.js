const Koa = require("koa");
const Router = require('koa-router'); //路由模块
const app = new Koa();
const router = new Router();

router.get('/api/getMock',async ctx =>{
    let list = [];
    function getRandomWords(n) {
        let words1 = "但使龙城飞将在，不教胡马度阴山0123456789";
        let ret = '';
        let len = words1.length;
        for (let i = 0; i < n; i++) {
            ret += words1[Math.floor(Math.random() * len)]
        }
        return ret;
    }

    for (let i = 0; i < 10000; i++) {
        list.push({
            title: getRandomWords(12),
            id: `id-${i}`,
        })
    }

    ctx.body = {
        state: 200,
        data: list
    }
})
router.get('/test',async ctx=>{
    ctx.body="ok"
})
app.use(router.routes());
app.listen(8080)