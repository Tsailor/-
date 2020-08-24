const Koa = require("koa");
const Router = require('koa-router'); //路由模块
const cors = require('koa2-cors'); //跨域处理
const app = new Koa();
const router = new Router();
// app.use(
//     cors({
//         origin: function(ctx) { //设置允许来自指定域名请求
//             if (ctx.url === '/test') {
//                 return '*'; // 允许来自所有域名请求
//             }
//             return 'http://localhost:3000'; //只允许http://localhost:3000这个域名的请求
//         },
      
//       //  credentials: true, //是否允许发送Cookie
//         allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
//         allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
//         exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段'
//     })
// );
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

    for (let i = 0; i < 100000; i++) {
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